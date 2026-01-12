import React from "react";
import "../styles/global.css";
import decorPattern from "../assets/images/decoration/graphic_corner_dark-left-1.png";


export default function Hero({ children, className = "", style = {} }) {
  return (
    <header
      className={`hero ${className}`}
      style={{
        height: "110vh",
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
  //  backgroundColor: "rgba(30, 67, 44, 0.7)",
              backgroundColor: "rgba(50, 51, 37, 0.7)",
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
          minWidth: "30vw",
          width: "100%",
          height: "100%",
          top: 0,
          right: 0,
          backgroundColor: "rgba(1, 20, 54, 0.7)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          className="hero-text"
          style={{ padding: "0 10%", marginTop: "55vh", textAlign: "center" }}
        >
          {children}
        </div>
      </div>
    </header>
  );
}
