import "../styles/global.css";
import React from "react";
import LogoCircle from "../assets/images/logos/kiwision-round-07.png"

export default function Footer() {
  return (
    <footer data-name="footer" className="footer" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
      <img src={LogoCircle} alt="Kiwision Logo" style={{ maxHeight: "60px", marginBottom: "10px" }} />
      <p style={{fontWeight:"200"}}>Kiwision © {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
}