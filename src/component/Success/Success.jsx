import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import './Success.scss';
import { Link, useNavigate } from 'react-router-dom';

const Success = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [formData, setFormData] = useState({});
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const orderInfo = JSON.parse(localStorage.getItem('orderInfo'));
    if (orderInfo) {
      setOrderData(orderInfo.orderData);
      setFormData(orderInfo.formData);
      setTotal(orderInfo.totalPrice);
    }

    localStorage.removeItem('orderInfo');
   
  }, []);
  const navigateToHome = () => {
    setTimeout(() => {
      navigate('/');
    }, 100);
    localStorage.removeItem('cart');
  };
  return (
    <div>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="success-banner" style={{
        background: `linear-gradient(#00000085, #0000008a),url(https://source.unsplash.com/1040x500/?payment)`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed',
      }}>
        <div className="banner___text" style={{ overflow: "hidden", height: "70vh" }}>
          <h1 style={{ textAlign: "center", display: "inline-block" }}> <span className="box__item">Payment Success</span> </h1>
        </div>
      </div>
      <div className="container">
       
      
    
        <div className="form-grid" style={{paddingTop:"50px"}}>
        <form >
        <h2>Your Information</h2>

          <div className="form-group">
            <label>Name</label> <br />
            <input type="text" name="name" value={formData.name}  required />
          </div>
          <div className="form-group">
            <label>Email</label> <br />
            <input type="email" name="email" value={formData.email}  required />
          </div>
          <div className="form-group">
            <label>Phone Number</label> <br />
            <input type="text" name="number" value={formData.number}  required />
          </div>
          <div className="form-group">
            <label>Address</label> <br />
            <input type="text" name="address" value={formData.address} required />
          </div>
          <div className="form-group">
            <label>City</label> <br />
            <input type="text" name="city" value={formData.city} required />
          </div>
        </form>
        <div className="cart-summary">
          <h2>Your product item</h2>
          
            <div>
                {orderData?.map((item, index) => (
                                    <div className='order-proceed-item color-change' key={item.id}>

           <p>{item.game}</p>
                  <p> {item.quantity} x 1</p>
                  <p>${item.price}</p>
                </div>
          ))}
                 
            </div>
          <h3>Your Total Cost ${total}</h3>
          <div className="last-btn">
        <button onClick={navigateToHome}>GO HOME</button> 
        </div>
        </div>
        
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Success;
