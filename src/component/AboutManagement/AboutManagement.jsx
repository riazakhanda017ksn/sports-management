import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import AboutBanner from '../Banner/AboutBanner';
import Contact from '../Contact/Contact';

const AboutManagement = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <AboutBanner/>
              <Contact/>
              <Footer/>
        </div>
    );
};

export default AboutManagement;