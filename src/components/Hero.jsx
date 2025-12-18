import React from "react";
import "../styles/global.css";
// import { getAssetUrl } from "../sdk/contentful.js";
import decorPattern from "../assets/images/graphic_0101-corner_dark-07.png";


export default function Hero({ children, className = "", style = {} }) {
  return (
    <header
      className={`hero ${className}`}
      style={{
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "row",
        marginTop: "-25vh",
        paddingBottom: "0%",
        top: 0,
        left: 0,
        ...style,
      }}
    >
      <div
        className="box-sepia"
        style={{
          minWidth: "50vw",
          height: "100%",
          backgroundColor: "rgba(48, 31, 14, 0.7)",
          top: 0,
          left: 0,
        }}
      >
      </div>
      <div
        className="box-blue"
        style={{
          minWidth: "50vw",
          height: "100%",
          top: 0,
          right: 0,
          backgroundColor: "rgba(1, 20, 54, 0.7)",
          backdropFilter: "blur(15px)",
          backgroundImage: `url(${decorPattern})`, 
          backgroundSize: "60%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "0% 100%",
        }}
      >
        <div
          className="hero-text"
          style={{ padding: "0 80px", marginTop: "52vh", textAlign: "center" }}
        >
          {children}
        </div>
      </div>
    </header>
  );
}
