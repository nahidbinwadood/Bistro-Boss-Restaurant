const express = require('express');
const cors = require('cors');
const jwt=require('jsonwebtoken')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port=process.env.PORT || 5000;
const app=express();
require("dotenv").config();
//middleware:
const corsOptions = {
    origin: [
      "http://localhost:5173",
      
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
    await client.connect();

    const menuCollection=client.db("bistroBoss").collection("menu");
    const userCollection=client.db("bistroBoss").collection("users");
    const reviewCollection=client.db("bistroBoss").collection("review");
    const cartCollection=client.db("bistroBoss").collection("cart");


    //JWT :

    app.post("/jwt", async(req,res)=>{
      const user=req.body;
      const token=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"1h"})
        res.send({token})
    })


    //Middleware:

    const verifyToken=(req,res,next)=>{
      console.log(req.headers);
      if(!req.headers.authorization){
        return res.status(401).send({message:"Forbidden Access"})
      }
      const token=req.headers.authorization.split(" ")[1]
      next();
    }
    
    //Users:

    //Get All users:
    app.get("/users",verifyToken,async(req,res)=>{
      
      const result=await userCollection.find().toArray();
      res.send(result)
    })

    //Delete user:
    app.delete("/users/:id",async(req,res)=>{
      const id=req.params.id;
      const query={_id: new ObjectId(id)}
      const result=await userCollection.deleteOne(query);
      res.send(result)
    })

    //update Admin:
    app.patch("/users/admin/:id",async(req,res)=>{
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





    //All Menu Items :

    app.get("/menu", async(req,res)=>{
      const result=await menuCollection.find().toArray();
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

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
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