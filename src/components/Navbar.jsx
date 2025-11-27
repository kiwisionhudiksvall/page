import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logos/logo_kiwision-bluemix-08.png";
import "../styles/global.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <img
        src={Logo}
        alt="Logo"
        className="logo"
        onClick={() => navigate("/")}
      />
      <ul className="nav-menu">
               <li
          className="dropdown"
          ref={dropdownRef}        
        >
          <span
            className="dropdown-button"
            onClick={() => setIsOpen((prev) => !prev)}
            style={{
              right: "2.3vw",
              padding: "0.3rem 1.5rem 0.5rem 1.5rem",
              borderRadius: "100px",
              border: "none",
              backgroundColor: "var(--lightblue)",
              color: "var(--darkblue)",
              cursor: "pointer",
              textTransform: "uppercase",
              fontWeight: "400",
              fontSize: "0.85rem",
            }}
          >
            {isOpen ? "Stäng ⨯" : "Meny ☰"}
          </span>

          {isOpen && (
            <ul
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "10vh",
                right: "2.3vw",
                backgroundColor: "var(--darkblue)",
                boxShadow: "0 4px 9px rgba(0, 0, 0, 0.3)",
                borderRadius: "30px 0px 30px 0px",
                padding: "1rem",
                listStyle: "none",
                heigth: 300,
                zIndex: 1000,
              }}
            >
              <li
                style={{
                  marginLeft: "20px",
                  width: "160px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Link to="/products" className="nav-button">
                  Utbud
                </Link>
                <Link to="/products1" className="nav-sub">
                  Systemutveckling
                </Link>
                <Link to="/products2" className="nav-sub">
                  Infrastruktur & moln
                </Link>
                <Link to="/products3" className="nav-sub">
                  IT-säkerhet
                </Link>
                <Link to="/products4" className="nav-sub">
                  Kundcase
                </Link>
              </li>
             <li style={{marginLeft: "20px", width: "160px", display: "flex", flexDirection: "column", gap: "0.5rem"}}>
                <Link to="/page" className="nav-button">
                Page</Link>
              </li>
              <li
                style={{
                  marginLeft: "20px",
                  width: "160px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Link to="/about" className="nav-button">
                  Om oss
                </Link>
                <Link to="/about1" className="nav-sub">
                  Bakgrund
                </Link>
                <Link to="/about2" className="nav-sub">
                  Kompetenser
                </Link>
                <Link to="/about3" className="nav-sub">
                  Samarbeten
                </Link>
                <Link to="/about4" className="nav-sub">
                  Kunder
                </Link>
              </li>
              <li
                style={{
                  marginLeft: "20px",
                  width: "160px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Link to="/contact" className="nav-button">
                  Kontakt
                </Link>
                <Link to="/contact1" className="nav-sub">
                  Kontaktuppgifter
                </Link>
                <Link to="/contact2" className="nav-sub">
                  Direktformulär
                </Link>
                <Link to="/contact3" className="nav-sub">
                  Här finns vi
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
