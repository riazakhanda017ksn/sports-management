import "./App.css";
import Cart from "./component/Cart/Cart";
import Details from "./component/Details/Details";
import HomeManagement from "./component/HomeManagement/HomeManagement";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shipment from "./component/Shipment/Shipment";
import Payment from "./component/Payment/Payment";
import Success from "./component/Success/Success";
import Message from "./component/Success/Message";
import AboutManagement from "./component/AboutManagement/AboutManagement";
import EventManagement from "./component/EventManagement/EventManagement";
import ContactManagement from "./component/ContactManagement/ContactManagement";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";


function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<HomeManagement />} />
        <Route path="/details/:sport" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipment" element={<Shipment/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/success" element={<Message/>} />
        <Route path="/order-details" element={<Success/>} />
        <Route path="/about" element={<AboutManagement/>} />
        <Route path="/event" element={<EventManagement/>} />
        <Route path="/contact" element={<ContactManagement/>} />
      </Routes>
    </Router>
  
    </>
  );
}

export default App;
