import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import additionalGames, { products } from "../Categories/categoriesData";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container" >
      <div className="categories" style={{paddingTop:"0"}}>
        <h3>EVENTS THAT SELL OUT FAST</h3>
        <h1>Check out our popular sports events</h1>

        <div className="products____item">
          {additionalGames.map((item) => {
            return (
              <div
                className="item"
                key={item.id}
                style={{
                  background: `url(${item.singleImage})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "60vh",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <div className="items">
                  <h4>{item.game}</h4>
                  <p>${item.price}</p>
                  <Link style={{textDecoration:"none"}} to={`/details/${item.sport}`}>
                    Buy Now <AiOutlineArrowRight />
                  </Link>
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
