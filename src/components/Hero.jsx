import React from "react";
import "../styles/global.css";
import decorPattern from "../assets/images/decoration/graphic_0101-pattern-07.png";


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
        className="box-photo-overlay"
        style={{
          minWidth: "50vw",
          height: "100%",
          // backgroundColor: "rgba(48, 31, 14, 0.7)",
          backgroundColor: "rgba(72, 70, 49, 0.4)",
      overflow: "hidden",
        }}
      >
        <div
    style={{
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${decorPattern})`,
      backgroundSize: "90%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "0% 100%",
      opacity: 0.3,
      pointerEvents: "none", 
    }}
  />
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
        }}
      >
        <div
          className="hero-text"
          style={{ maxWidth: "40vw", padding: "0 10vw", marginTop: "52vh", textAlign: "center", }}
        >
          {children}
        </div>
      </div>
    </header>
  );
}
