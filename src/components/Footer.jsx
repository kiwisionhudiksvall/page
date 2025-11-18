import "../styles/global.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Kiwision © {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}