import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import ContactBanner from '../Banner/ContactBanner';
import Navbar from '../Navbar/Navbar';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const ContactManagement = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
               <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
               <ContactBanner/>
               <Contact/>
               <Footer/>
        </div>
    );
};

export default ContactManagement;