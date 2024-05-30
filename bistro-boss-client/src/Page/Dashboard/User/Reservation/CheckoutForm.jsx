import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCart from "../../../../Hooks/useCart";
import useAuth from "../../../../AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  // useEffect(() => {
  //   axiosSecure.post("/create-payment-intent",{price:totalPrice}).then((res) => {
  //     console.log(res.data.clientSecret);
  //     setClientSecret(res.data.clientSecret);
  //   });
  // }, [axiosSecure, totalPrice]);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      if (paymentIntent.status == "succeeded") {
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date().toLocaleDateString(),  
          cartIds: cart.map(item => item._id),
          menuItemIds: cart.map(item => item.menuId),
          status: 'pending'
      }

      const res = await axiosSecure.post('/payments', payment);
      console.log('payment saved', res.data);
      refetch();
      if (res.data?.paymentResult?.insertedId) {
         toast.success("Thanks ! Your payment has been successfully completed !")
        navigate('/dashboard/payment')
    }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary mt-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-lg text-red-600">{error}</p>
        {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
