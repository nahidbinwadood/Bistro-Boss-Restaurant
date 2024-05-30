import {loadStripe} from '@stripe/stripe-js';
import {Elements} from "@stripe/react-stripe-js"
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_KEY}`);
const Reservation = () => {
  return (
    <div className=''>
      <div className="text-center mt-24 font-inter">
        <h2 className="text-4xl uppercase "> Payment</h2>
      </div>
      <div className='container mx-auto px-24'>
       <Elements stripe={stripePromise}>
            <CheckoutForm></CheckoutForm>
       </Elements>
      </div>
    </div>
  );
};

export default Reservation;
