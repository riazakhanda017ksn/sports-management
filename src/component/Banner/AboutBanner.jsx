import React from "react";
import "./Bannner.scss";
import videoOne from "../../assets/video/videos.mp4";
const AboutBanner = () => {
  return (
    <div>
      <div className="video-section">
        <video src={videoOne} muted loop autoPlay></video>
        <div className="video-overlay"></div>
        <>
          <div className="container">
            <div className="banner___text">
              <h1 style={{width:"100%",marginBottom:"0"}}> About The <span className="box__item marginBottom">sport mania</span> 
              
                 </h1>
                <p>
                The ability to understand what key stakeholders want from your
                event is critical. These people may not be in the sports event
                industry, so they might not speak the lingo or know what’s
                realistic. You have to be able to discern their needs and make
                sure all
              </p>
              <a>
                <button>Explore More</button>
              </a>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default AboutBanner;
