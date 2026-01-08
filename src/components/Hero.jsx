import React from "react";
import "../styles/global.css";
import decorPattern from "../assets/images/decoration/graphic_corner_dark-right-1.png";

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
        className="box-blue"
        style={{
          minWidth: "30vw",
          height: "100%",
          top: 0,
          left: 0,
          backgroundColor: "rgba(1, 20, 54, 0.6)",
          backdropFilter: "blur(15px)",
        }}
      >
        <div
          className="hero-text"
          style={{ padding: "0 10%", marginTop: "55vh", textAlign: "center" }}
        >
          {children}
        </div>
      </div>
      <div
        className="box-photo-overlay"
        style={{
          minWidth: "70vw",
          height: "100%",
          backgroundColor: "rgba(42, 22, 7, 0.5)",
          // backgroundColor: "rgba(72, 70, 49, 0.4)",
          overflow: "hidden",
        }}
      ></div>
      <div
        style={{
          right: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${decorPattern})`,
          backgroundSize: "60%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 100%",
          opacity: 0.36,
          position: "absolute",
          marginTop: "-20vh",
        }}
      />
    </header>
  );
}
