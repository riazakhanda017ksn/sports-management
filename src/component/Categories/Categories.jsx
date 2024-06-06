import React from "react";
import "./Categories.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { game, games } from "./categoriesData";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container" >
      <div className="categories">
        <h3>ALL THE SPORTS FUN STARTS HERE</h3>
        <h1>Entertainment Sports Guides</h1>

        <div className="categories___item">
          {games.map((item) => {
            return (
              <div
                className="item"
                key={item.id}
                style={{
                  background: `url(${item.singleImage})`,
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "60vh",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <div className="items">
                  <h4>{item.game}</h4>
                  <Link style={{textDecoration:"none"}} to={`/details/${item.sport}`}>
                    View Event <AiOutlineArrowRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="categories____item">
          {game.map((item) => {
            return (
              <div
                className="item"
                key={item.id}
                style={{
                  background: `url(${item.singleImage})`,
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "60vh",
                  width: "100%",
                  borderRadius: "10px",
                }}
              >
                <div className="items">
                  <h4>{item.game}</h4>
                  <Link style={{textDecoration:"none"}} to={`/details/${item.sport}`}>
                    View Event <AiOutlineArrowRight />
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

export default Categories;
