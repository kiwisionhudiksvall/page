import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logos/logo-02.svg";
import "../styles/global.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <img
        src={Logo}
        alt="Logo"
        data-name="logo"
        onClick={() => navigate("/")}
      />
      <ul className="nav-menu">
        <li className="dropdown" onClick={() => setIsOpen((prev) => !prev)}>
          <span
            className="dropdown-button"
            style={{
              right: "2.3vw",
              padding: "0.5rem 2rem 0.7rem 2rem",
              borderRadius: isOpen ? "30px 30px 0px 0px" : "100px",
              border: "none",
              backgroundColor: "var(--lightblue)",
              color: "var(--darkblue)",
              cursor: "pointer",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            {isOpen ? "Stäng ⨯" : "Meny ☰"}
          </span>

          {isOpen && (
            <ul
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "14vh",
                right: "2.3vw",
                backgroundColor: "rgba(50, 176, 225, 0.85)",
                boxShadow: "0 4px 8px rgba(254, 252, 241, 0.1);",
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
                <Link to="/products" data-name="nav-button">
                  Utbud
                </Link>
                <Link to="/products" className="page-subheading">
                  Systemutveckling
                </Link>
                <Link to="/products" className="page-subheading">
                  Infrastruktur & moln
                </Link>
                <Link to="/products" className="page-subheading">
                  IT-säkerhet
                </Link>
                <Link to="/products" className="page-subheading">
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
                <Link to="/page" data-name="nav-button">
                  Sida
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
                <Link to="/about" data-name="nav-button">
                  Om oss
                </Link>
                <Link to="/about" className="page-subheading">
                  Bakgrund
                </Link>
                <Link to="/about" className="page-subheading">
                  Kompetenser
                </Link>
                <Link to="/about" className="page-subheading">
                  Samarbeten
                </Link>
                <Link to="/about" className="page-subheading">
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
                <Link to="/contact" data-name="nav-button">
                  Kontakt
                </Link>
                <Link to="/contact" className="page-subheading">
                  Kontaktuppgifter
                </Link>
                <Link to="/contact" className="page-subheading">
                  Direktformulär
                </Link>
                <Link to="/contact" className="page-subheading">
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
