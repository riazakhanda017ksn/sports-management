import { Link } from "react-router-dom";
import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
        <Link to="/">Home</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to={'/about'}>ABOUT</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to={'/event'}>Events</Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to={'/contact'}>Contact</Link>
        </li>
      
      </ul>
    </div>
  );
}