import React from "react";
import "./Bannner.scss";
import videoOne from "../../assets/video/videos.mp4";
const ContactBanner = () => {
  return (
    <div>
      <div className="video-section">
        <video src={videoOne} muted loop autoPlay></video>
        <div className="video-overlay"></div>
        <>
          <div className="container">
            <div className="banner___text">
              <h1 style={{width:"100%",marginBottom:"0"}}> <span className="box__item">Contact US</span> 
              
                 </h1>
                <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda ullam earum quo exercitationem eveniet nesciunt tempore vero esse labore.
              </p>
           
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default ContactBanner;
