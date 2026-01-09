import "../styles/global.css";
import React from "react";
import LogoCircle from "../assets/images/logos/round_logo-kiwision-12.png";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        bottom: 0,
        right: 0,
        left: 0,
      }}
    >
      <img
        src={LogoCircle}
        alt="Kiwision Logo"
        style={{ maxHeight: "60px", marginLeft: "2rem", marginRight: "2rem" }}
      />
      <p style={{ fontWeight: "400" }}>
        Kiwision © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}
