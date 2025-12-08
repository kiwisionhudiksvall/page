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
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar" style={{ position: "fixed", top: 0, zIndex: 100 }}>
      <img
        src={Logo}
        alt="Logo"
        className="logo"
        onClick={() => navigate("/")}
      />
      <ul className="nav-menu">
        <li className="dropdown" ref={dropdownRef}>
          <button
            className="dropdown-button"
            onClick={() => setIsOpen((prev) => !prev)}
            style={{
              fontFamily: "bc-novatica-cyr",
              padding: "8px 30px 10px 30px",
              borderRadius: "100px",
              border: "none",
              backgroundColor: "var(--lightblue)",
              color: "var(--darkblue)",
              cursor: "pointer",
              textTransform: "uppercase",
              fontWeight: "500",
              fontSize: "1.0rem",
              letterSpacing: "0.1rch",
            }}
          >
            {isOpen ? "Stäng ⨯" : "Meny ☰"}
          </button>

          {isOpen && (
            <ul
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "10vh",
                right: "3vw",
                backgroundColor: "#020d21f0",
                boxShadow: "3px 2px 10px rgba(255, 255, 255, 0.12)",
                borderRadius: "30px 0px 30px 0px",
                padding: "20px",
                listStyle: "none",
                zIndex: 1000,
              }}
            >
              <li
                style={{
                  marginLeft: "20px",
                  width: "170px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <Link to="/products" className="nav-button">
                  Utbud
                </Link>
                <Link to="/products" className="nav-sub">
                  Systemutveckling
                </Link>
                <Link to="/products" className="nav-sub">
                  Infrastruktur & moln
                </Link>
                <Link to="/products" className="nav-sub">
                  IT-säkerhet
                </Link>
                <Link to="/products" className="nav-sub">
                  Kundcase
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
                <Link to="/career" className="nav-button">
                  Karriär
                </Link>
                <Link to="/products" className="nav-sub">
                  Jobba hos oss
                </Link>
                <Link to="/products" className="nav-sub">
                  Yrkestitlar
                </Link>
                <Link to="/products" className="nav-sub">
                  Lediga tjänster
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
                <Link to="/about" className="nav-button">
                  Om oss
                </Link>
                <Link to="/about" className="nav-sub">
                  Bakgrund
                </Link>
                <Link to="/about" className="nav-sub">
                  Kompetenser
                </Link>
                <Link to="/about" className="nav-sub">
                  Samarbeten
                </Link>
                <Link to="/about" className="nav-sub">
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
                <Link to="/contact" className="nav-sub">
                  Kontaktuppgifter
                </Link>
                <Link to="/contact" className="nav-sub">
                  Direktformulär
                </Link>
                <Link to="/contact" className="nav-sub">
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
