import React from "react";
import "../styles/global.css";

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
        ...style,
      }}
    >
      <div
        className="box-sepia"
        style={{
          minWidth: "50vw",
          height: "100%",
          backgroundColor: "rgba(48, 31, 14, 0.7)",
        }}
      ></div>
      <div
        className="box-blue"
        style={{
          minWidth: "50vw",
          height: "100%",
          top: 0,
          right: 0,
          backgroundColor: "rgba(1, 20, 54, 0.94)",
          backdropFilter: "blur(5px)",
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
