import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_white"
import "../index.css"; 
import Image from "react"

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo className="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Utbud</Link></li>
      </ul>
    </nav>
  );
}