import Navbar from "../../component/Navbar/Navbar";
import Menu from "../../component/Menu/Menu";
import Banner from "../../component/Banner/Banner";
import { useState } from "react";
import Categories from "../../component/Categories/Categories";
import Services from "../../component/Services/Services";
import Sells from "../../component/Sells/Sells";
import Footer from "../../component/Footer/Footer";
import Review from "../Review/Review";
import Contact from "../Contact/Contact";
const HomeManagement = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Banner />
      <Categories />
      <Services />
      <Sells />
      <Review/>
      <Contact/>
      <Footer />
        </div>
    );
};

export default HomeManagement;