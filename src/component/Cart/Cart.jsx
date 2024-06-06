import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import './Cart.scss'
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [carts, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
     console.log("Setting Cart State:", savedCart); // Debug logging
     setCart(prevCart => [...prevCart, ...savedCart]);
    }
  }, []);


  useEffect(() => {
 localStorage.setItem('cart', JSON.stringify(carts));
  }, [carts]);

  const removeFromCart = (id) => {
    setCart(carts.filter(item => item.id !== id));
  };

  const changeQuantity = (id, amount) => {
    setCart(
      carts.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      )
    );
  };

  const getTotal = () => {
    return carts.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleProceedOrder = () => {
    navigate('/shipment');
  };

  return (
    <div>
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><Navbar />
      <Menu />
      <div className="cart-banner" style={{
              background: `linear-gradient(#00000085, #0000008a),url(https://source.unsplash.com/1040x500/?sport,car,wresling)`,
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment:'fixed',
              
            }}>
              <div className="banner___text" style={{overflow:"hidden",height:"70vh"}}>
              <h1 style={{ textAlign:"center",display:"inline-block"}}> <span className="box__item">Shopping Cart</span> </h1>
            </div>
            </div>
      <div className="container">
        {carts.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
           <div className="div">
                        <h1>Your shopping Cart</h1>
  <div className="cart-flex">
            {carts.map(item => (
                        <div className="cart-container">

            <div className="product-img" key={item.id}>
            <img src={item.singleImage} alt="" />
            </div>
            <div className="product-name">
              <h5>  {item.game}</h5>
              <h6>{item.sport}</h6>
            </div>
            <div className="product-quantity">
                 <button style={{background:"#15023A",color:"white",borderColor:"#15023A"}} onClick={() => changeQuantity(item.id, 1)}>+</button>
                 <span>{item.quantity}</span>
                 <button style={{background:"#EFEFEF",color:"black",borderColor:"#EFEFEF"}}  onClick={() => changeQuantity(item.id, -1)}>-</button>
            </div>
            
            <div className="delete">
              <TiDeleteOutline onClick={() => removeFromCart(item.id)}/>
            </div>
           
           <div className="price">
            <h5>${item.price}</h5>
           </div>
            <div>

            </div>
            </div>

          ))}
           <div className="total-container">
          <h2>Subtotal ${getTotal()}</h2>
          <button onClick={handleProceedOrder}>Proceed Order</button>
        </div>
          </div>
           </div>
        
        )}
        {/* <h2>Total: ${getTotal()}</h2> */}
       
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
