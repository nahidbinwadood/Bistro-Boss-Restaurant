const express = require('express');
const cors = require('cors');
require("dotenv").config();
const jwt=require('jsonwebtoken')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port=process.env.PORT || 5000;
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY)
const app=express();
//middleware:
const corsOptions = {
    origin: [
      "http://localhost:5173",
      "https://bistro-boss-5eb34.web.app"
    ],
    credentials: true,
    optionSuccessStatus: 200,
  };
app.use(express.json())
app.use(cors(corsOptions))




 

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s1tjtzs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const menuCollection=client.db("bistroBoss").collection("menu");
    const userCollection=client.db("bistroBoss").collection("users");
    const cartCollection=client.db("bistroBoss").collection("cart")
    const reviewCollection=client.db("bistroBoss").collection("reviews");
    const paymentCollection=client.db("bistroBoss").collection("payment");

    //JWT :

    app.post("/jwt", async(req,res)=>{
      const user=req.body;
      const token=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"1h"})
        res.send({token})
    })


    //Middleware:

    const verifyToken=(req,res,next)=>{
      console.log(req.headers.authorization);
      if(!req.headers.authorization){
        return res.status(401).send({message:"Forbidden Access"})
      }
      const token=req.headers.authorization.split(" ")[1]
      jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded)=>{
        if(err){
          return res.status(401).send({message: "Forbidden Access"})
        }
        req.decoded=decoded;
        next();
      })
    }

    const verifyAdmin=async(req,res,next)=>{
      const email=req.decoded.email;
      const query={email:email}
      const user=await userCollection.findOne(query)
      const isAdmin=user?.role=="admin"
      if(!isAdmin){
        return res.status(403).send({message:"forbidden access"})
      }
      next();
    }
    
    //Users:

    //Get All users:
    app.get("/users",verifyToken,verifyAdmin,async(req,res)=>{ 
      const result=await userCollection.find().toArray();
      res.send(result)
    })


    //Verify Admin :
    app.get("/users/admin/:email",verifyToken, async(req,res)=>{
      const email=req.params.email;
      if(email !== req.decoded.email){
        return res.status(403).send({message:"unauthorized access"})
      }
      const query={email:email}
      const user=await userCollection.findOne(query)
      let admin=false;
      if(user){
        admin=user?.role=== "admin"
      }
      res.send({admin})
    })




    //Delete user:
    app.delete("/users/:id",verifyToken,verifyAdmin,async(req,res)=>{
      const id=req.params.id;
      const query={_id: new ObjectId(id)}
      const result=await userCollection.deleteOne(query);
      res.send(result)
    })

    //update Admin:
    app.patch("/users/admin/:id",verifyToken,verifyAdmin,async(req,res)=>{
      const id=req.params.id;
      const filter={_id: new ObjectId(id)}
      const updatedDoc={
        $set:{
          role: "admin"
        }
      }
      const result=await userCollection.updateOne(filter,updatedDoc)
      res.send(result)
    })




    //creating user db:
    app.post("/users",async(req,res)=>{
      const user=req.body;
      const query={email : user.email}
      const isExist=await userCollection.findOne(query) 
      if(isExist){
        return res.send({message: "user already exist", insertedId:null})
      }
      const result=await userCollection.insertOne(user);
      res.send(result);
    })


    //Menu :

    //Add menu items:
    app.post("/menu",verifyToken,verifyAdmin,async(req,res)=>{
      const menu=req.body;
      const result=await menuCollection.insertOne(menu)
      res.send(result);
    })
    
    //All Menu Items :
    app.get("/menu", async(req,res)=>{
      const result=await menuCollection.find().toArray();
      res.send(result)
    })

    app.get("/menu/:id",async(req,res)=>{
      const id=req.params.id;
      const query={_id : new ObjectId(id)}
      const result=await menuCollection.findOne(query)
      res.send(result)
    })
    app.patch("/menu/:id",async(req,res)=>{
      const id=req.params.id;
      const filter={_id : new ObjectId(id)}
      const menu=req.body;
      const updatedDoc={
        $set:{
          ...menu
        }
      }
      const result=await menuCollection.updateOne(filter,updatedDoc)
      res.send(result)
    })

    app.delete("/menu/:id",async(req,res)=>{
      const id=req.params.id;
      const query={_id : new ObjectId(id)}
      const result=await menuCollection.deleteOne(query)
      res.send(result)
    })
    //All reviews:

    app.get("/review", async(req,res)=>{
      const result=await reviewCollection.find().toArray();
      res.send(result)
    })

    //All cart Collection:

    //get Cart items:
    app.get("/cart",async(req,res)=>{
      const email=req.query.email;
      const query={email: email}
      const result=await cartCollection.find(query).toArray()
      res.send(result)
    })

    //Posting cart:
    app.post("/cart",async(req,res)=>{
      const cart=req.body;
      const result=await cartCollection.insertOne(cart)
      res.send(result)
    })

    //Delete A cart:
    app.delete("/cart/:id",async(req,res)=>{
      const id=req.params.id;
      const query={_id : new ObjectId(id)}
      const result=await cartCollection.deleteOne(query)
      res.send(result)
    })

    //Reviews:
    app.get("/reviews",async(req,res)=>{
      const result=await reviewCollection.find().toArray();
      res.send(result)
    })

    //Payment:
    app.post("/create-payment-intent",async(req,res)=>{
      const {price}=req.body;
      const amount=parseInt(price*100)
      const paymentIntent= await stripe.paymentIntents.create({
        amount:amount,
        currency: "usd",
        payment_method_types:["card"]
      })
      res.send({
        clientSecret: paymentIntent.client_secret
      })
    })


    app.get("/payment/:email",async(req,res)=>{
      const query={email :req.params.email}
      // if(req.params.email !== req.decoded.email){
      //   return res.status(403).send({message : "forbidden access"})
      // }
      // if (req.params.email !== req.decoded.email) {
      //   return res.status(403).send({ message: 'forbidden access' });
      // }
      const result=await paymentCollection.find(query).toArray()
      res.send(result)
    })

    app.post('/payments', async (req, res) => {
      const payment = req.body;
      const paymentResult = await paymentCollection.insertOne(payment);
 
      console.log('payment info', payment);
      const query = {
        _id: {
          $in: payment.cartIds.map(id => new ObjectId(id))
        }
      };
      const deleteResult = await cartCollection.deleteMany(query);
      res.send({ paymentResult, deleteResult });
    })

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

 
app.get("/",(req,res)=>{
    res.send("Bistro Boss is running perfectly ! ")
})
app.listen(port, ()=>{
    console.log("Bistro Boss is serving  !! ");
})