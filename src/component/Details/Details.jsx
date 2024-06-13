// Details.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import additionalGames, { game, games } from '../Categories/categoriesData';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { CiTimer, CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';

const Details = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const images = [
    'https://i.ibb.co/XsgWGxJ/photo-1612230337141-903f3d330055.jpg',
    'https://i.ibb.co/pnMTGH9/lesly-juarez-Ruk-I4q-ZGl-Qs-unsplash-1.jpg',
    'https://i.ibb.co/nRQCqHC/omid-armin-w-H3-Ddd-KXPo-Q-unsplash-1.jpg',
    'https://i.ibb.co/KGhCg8q/slider-bg77-13ae4d1d.jpg',
    'https://i.ibb.co/3TsKpHP/zara-f-2.jpg',
    'https://i.ibb.co/X42RNZ7/login.jpg'
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const { sport } = useParams();
  const navigate = useNavigate();
  const allGames = [...additionalGames, ...games, ...game];
  const item = allGames.find(g => g.sport === decodeURIComponent(sport));

  const date = new Date();
  const needDate = date.getDate();
  const monthIndex = date.getMonth();
  const monthName = monthNames[monthIndex];

  const handleBuyNow = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(cartItem => cartItem.id === item.id);

    if (existingProduct) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

  navigate('/cart');
    };

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div style={{ position: "relative" }}>
        <div
          className="item__"
          key={item.game}
          style={{
            background: `url(${item.bannerImage})`,
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            paddingTop: "40px",
            paddingBottom: "140px"
          }}
        >
          <div className="container">
            <div className="banner___text item____________">
              <h1 style={{ width: "100%" }}> <span className="box__item">{item.sport}</span> </h1>
              <h2 style={{ width: "100%" }}>THIS EVENT HAS ORGANIZED BY SPORTS MANIA</h2>
            </div>
          </div>
        </div>
        <div className="position-changing__item">
          <div className="container">
            <div className="buy-functionality">
              <div className="watch">
                <span><CiTimer /></span>
                <h3>{needDate + 2} - {needDate + 3} <span> {monthName}</span></h3>
                <h4>9:00 PM</h4>
              </div>

              <div className="watch">
                <span><CiLocationOn /></span>
                <h3>{item.location}</h3>
                <h4>Location</h4>
              </div>

              <div className="watch">
                <span><MdAttachMoney /></span>
                <h3>${item.price} - ${item.price * 2}</h3>
                <button onClick={handleBuyNow}>BUY NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-text" style={{ marginTop: "130px" }}>
        <div className="container">
          <h3>{item.game}</h3>
          <p>{item.description}</p>
          <div
            className="item__"
            key={item.game}
            style={{
              background: `url(${item.singleImage})`,
              backgroundPosition: " center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              padding: "280px 0",
              backgroundAttachment: "fixed",
              position: "relative"
            }}
          >
            <div className="video-icon">
              <span>
                <a href="">
                  <PlayCircleOutlineOutlinedIcon />
                </a>
              </span>
              <h5> See {item.game} intro Video</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ paddingBottom: "100px" }}>
        <div className="content-text gap-zero" style={{ margin: "0", padding: "0" }}>
          <h3>{item.game}'s Organizer</h3>
        </div>
        <div className="speaker">
          {images.map((url, index) => (
            <img key={index} src={url} alt={`image-${index}`} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
