import "../styles/global.css";
import React from "react";
import LogoCircle from "../assets/images/logos/round_logo-kiwision-12.png"

export default function Footer() {
  return (
    <footer data-name="footer" className="footer" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "start"}}>
      <img src={LogoCircle} alt="Kiwision Logo" style={{ maxHeight: "60px", marginLeft: "2rem", marginRight: "2rem" }} />
      <p style={{fontFamily: "Arboria, sans-serif", fontWeight:"400"}}>Kiwision © {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
}