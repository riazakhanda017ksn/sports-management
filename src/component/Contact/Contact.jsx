import React from 'react';
import './Contact.scss'
import cycle from '../../assets/IMG/cycle1.jpg'
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
    return (
        <>
        <div className='contact'>
            <div className="container">
                <h1>CONTACTS.</h1>
                <p>But we must explain to you how all this mistaken idea of denouncing pleasure</p>
                <div className="grid-management">
                    <div></div>
                    <div className="contact-details">
                    <div className="contact-one">
                            <h3>LOCATION</h3>
                            <p>911 Holicros </p>
                            <h4>United Kingdom</h4>
                        </div>
                        <div className="contact-one">
                            <h3>MANAGER</h3>
                            <p>073 6595 6469 </p>
                            <h4>doenafi@gmail.com</h4>
                        </div>
                        <div className="contact-one">

                            <h3>CEO</h3>
                            <p>079 6592 9467 </p>
                            <h4>johnalex@gmail.com</h4>
                        </div>

                     
                        
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="image-parent">
                <div></div>
                <div className="img__item">
                    <img src={cycle} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="container-for-contact">
                <div className="contact__form" style={{marginTop:'70px'}}>
                    <h1>Write us here</h1>
                    <p style={{lineHeight:"30px"}}>If you would like to hear from us, please email us. Please feel free to contact us if you have a question or <br /> just want to say hi. Please expect a reply from me as soon as possible!
                    </p>
                    <div className="form-container" style={{marginTop:'80px'}}>
                        <form action="">
                            <div className="form___flex">
                            <div className="form-input">
                                <input type="text" required placeholder='Name'/>
                            </div>
                            <div className="form-input">
                                <input type="email" required placeholder='Email'/>
                            </div>
                            </div>
                            {/*  */}
                            <div className="form___flex">
                            <div className="form-input">
                                <input type="text" required placeholder='Phone Number'/>
                            </div>
                            <div className="form-input">
                                <input type="email" required placeholder='Subject'/>
                            </div>
                            </div>
                            <div className="text-area">
                                <textarea name="" rows='5' cols='20' placeholder='Message' required></textarea>
                            </div>
                            {/*  */}
                            <button type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
                    <div></div>
                </div>

            </div>
        </div>
        <div className="map">
          <CiLocationOn/>
          <p>911 Holicros United Kingdom</p>
        </div>
        </>
    );
};

export default Contact;