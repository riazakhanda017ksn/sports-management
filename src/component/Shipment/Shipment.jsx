import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import './Shipment.scss'; 

const Shipment = () => {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    city: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData, [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('orderData', JSON.stringify(cart));
    
    setTimeout(() => {
      navigate('/payment');
    }, 1000);
  };

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="shipment-banner" style={{
        background: `linear-gradient(#00000085, #0000008a),url(https://source.unsplash.com/1040x500/?shipment)`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed',
      }}>
        <div className="banner___text" style={{ overflow: "hidden", height: "70vh" }}>
          <h1 style={{ textAlign: "center", display: "inline-block" }}> <span className="box__item">Checkout</span> </h1>
        </div>
      </div>
      <div className="container">
        <div className="proceed-order">
        <div className="form-grid">
        <form onSubmit={handleSubmit}>
        <h2>Please Your Information</h2>

          <div className="form-group">
            <label>Name</label> <br />
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label> <br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number</label> <br />
            <input type="text" name="number" value={formData.number} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Address</label> <br />
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>City</label> <br />
            <input type="text" name="city" value={formData.city} onChange={handleChange} required />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map(item => (
                <div className='order-proceed-item' key={item.id}>
                  <p>{item.game}</p>
                  <p> {item.quantity} x 1</p>
                  <p>${item.price}</p>
                </div>
              ))}
            </div>
          )}
          <h3>Your Total Amount ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
        </div>
      </div>
      </div></div>
      <Footer />
    </div>
  );
};

export default Shipment;
