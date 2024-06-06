import React from "react";
import videoOne from "../../assets/video/video1.mp4";
import './Review.scss'
import Carousel from "react-material-ui-carousel";

const Review = () => {
    const reviews = [
        {
          name: 'John Doe',
          image: 'https://i.ibb.co/nRQCqHC/omid-armin-w-H3-Ddd-KXPo-Q-unsplash-1.jpg',
          review: 'John is a dedicated sports manager with over 10 years of experience in managing various sports teams. His strategic thinking and leadership skills have led his teams to numerous victories.'
        },
        {
          name: 'Jane Smith',
          image: 'https://i.ibb.co/KGhCg8q/slider-bg77-13ae4d1d.jpg',
          review: 'Jane is a passionate sports enthusiast with a knack for finding and nurturing young talent. Her innovative training methods have significantly improved the performance of her athletes.'
        },
        {
          name: 'Sam Brown',
          image: 'https://i.ibb.co/3TsKpHP/zara-f-2.jpg',
          review: 'Sam is a versatile sports manager who excels in both team and individual sports management. His commitment to excellence and attention to detail make him a valuable asset to any team.'
        },
        {
          name: 'Alice Johnson',
          image: 'https://i.ibb.co/X42RNZ7/login.jpg',
          review: 'Alice is a highly motivated sports manager with a strong background in sports science. Her analytical approach and dedication to continuous improvement have set new standards in sports management.'
        }
      ];
  return (
    <div>
      <div className="video-section" style={{padding:"0",margin:'0',height:"650px"}}>
        <video src={videoOne} muted loop autoPlay></video>
        <div className="video-overlay" style={{background:"rgb(0 0 0 / 24%)"}}></div>
        <>
          <div className="container">
            <Carousel>
           
            {reviews.map((person, index) => (
        <>  <div className="review-container">
          <div className="single-img">
          <img src={person.image} alt={`${person.name}`} />
          </div>
         <div className="management-review">
         <h1>REVIEWS FROM <br/> <span> CLIENT</span>  </h1>

          <p>{person.review}</p>
          <h5>{person.name}</h5>
         </div>  </div>
        </>
      ))}
             

            </Carousel>
          </div>
        </>
      </div>
    </div>
  );
};

export default Review;
