import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import './Payment.scss';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51K57xQGuahBEUBxxjZCH52qUA4shBJaAkW9YImOmWuEyIccZ4yGZnnofIgOGmodLZnRLbzwmZU4Zac4dSgJMLmka00jIn7QzZO');

const CheckoutForm = ({ total }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      // Simulate a successful payment
      console.log('Payment Successful');
      alert('Payment Successful');
  
      // Save order data to local storage
      const savedOrderData = JSON.parse(localStorage.getItem('orderData'));
      const savedFormData = JSON.parse(localStorage.getItem('formData'));
      const orderInfo = {
        orderData: savedOrderData,
        formData: savedFormData,
        totalPrice: total,
      };
      localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
  
      // Navigate to the success page
      setTimeout(() => {
        navigate('/success');
      }, 1000);
    };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay ${total}
      </button>
    </form>
  );
};

const Payment = () => {
  const [total, setTotal] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedOrderData = JSON.parse(localStorage.getItem('orderData'));
    if (savedOrderData) {
      const calculatedTotal = savedOrderData.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotal(calculatedTotal);
    }
  }, []);

  return (
    <Elements stripe={stripePromise}>
      <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="payment-banner" style={{
          background: `linear-gradient(#00000085, #0000008a),url(https://source.unsplash.com/1040x500/?payment)`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: 'fixed',
        }}>
          <div className="banner___text" style={{ overflow: "hidden", height: "70vh" }}>
            <h1 style={{ textAlign: "center", display: "inline-block" }}> <span className="box__item">Payment</span> </h1>
          </div>
        </div>
        <div className="container">
           <div className="maximum-checkout">
          <h2>Please Pay for your order</h2>
          <div className="checkout">
          <CheckoutForm total={total} /></div></div>
        </div>
        <Footer />
      </div>
    </Elements>
  );
};

export default Payment;



