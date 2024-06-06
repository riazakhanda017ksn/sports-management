import "./Navbar.scss";
import logo from '../../assets/IMG/LOGO.png'
export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span aria-disabled='true' className="line1"></span>
            <span aria-disabled='true'  className="line2"></span>
            <span aria-disabled='true'  className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
