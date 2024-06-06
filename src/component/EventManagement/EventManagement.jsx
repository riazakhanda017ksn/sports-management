import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Categories from '../Categories/Categories';
import Services from '../Services/Services';
import EventBanner from '../Banner/EventBanner';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Review from '../Review/Review';
import Contact from '../Contact/Contact';

const EventManagement = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
               <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
               <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
               <EventBanner/>
               <Categories />
               <Services />
               <Review/>
               <Contact/>
               <Footer/>
        </div>
    );
};

export default EventManagement;