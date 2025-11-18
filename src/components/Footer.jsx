import "../styles/global.css";
import React from "react";

export default function Footer() {
  return (
    <footer data-name="footer">
      <p style={{fontWeight:"200"}}>Kiwision © {new Date().getFullYear()} All rights reserved</p>
    </footer>
  );
}