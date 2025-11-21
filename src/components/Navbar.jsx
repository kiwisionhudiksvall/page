import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo_blue.svg";
import "../styles/global.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

  return (
    <nav className="navbar" style={{position: "sticky", top: 0, zIndex: 100}}>
      <img src={Logo} alt="Logo" style={{ cursor: "pointer", maxHeight: "40px" }}
        onClick={() => navigate("/")}
      />
      <ul className="nav-links">
        <li
          className="dropdown"
          onClick={() => setIsOpen(prev => !prev)} 
        >
          <span
            className="dropdown-title">
              <button data-name="menu-button">
            Meny ☰
          </button></span>

          {isOpen && (
            <ul
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "13vh",
                right: "2vw",
                backgroundColor: "var(--darkblue)",
                boxShadow: "0 4px 8px rgba(238, 255, 254, 0.2)",
                borderRadius: "20px",
                padding: "1rem",
                listStyle: "none",
                heigth: 300,
                zIndex: 1000,
              }}
            >
              <li style={{marginLeft: "20px", width: "160px", display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                <Link to="/products" style={{
              margin: "0.2rem",
              }}><button data-name="button">Utbud</button></Link>
                <Link style={{margin: "6px 0", fontSize: 14, cursor: "pointer"}} to="/products">Systemutveckling</Link>
                <Link style={{margin: "6px 0", fontSize: 14}} to="/products">Infrastruktur & moln</Link>
                <Link style={{margin: "6px 0", fontSize: 14}} to="/products">IT-säkerhet</Link>
              </li>
             <li style={{marginLeft: "20px", width: "160px", display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                <Link to="/page" style={{
              margin: "0.2rem",
              }}><button data-name="button">Page</button></Link>
              </li>
              <li style={{marginLeft: "20px", width: "160px", display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                <Link to="/about" style={{
              margin: "0.2rem",
              }}><button data-name="button">Om oss</button></Link>
              </li>
             <li style={{marginLeft: "20px", width: "160px", display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                <Link to="/contact" style={{
              margin: "0.2rem",
              }}><button data-name="button">Kontakt</button></Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
