import React from "react";
import "../styles/global.css";

export default function Hero({ children, className = "", style = {} }) {

  return (
    <header
       className={`hero ${className}`}
      style={{
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "row",
        marginTop: "-30vh",
        ...style, 
      }}
    >
      <div
        className="box-left"
        style={{
          minWidth: "50vw",
          maxHeight: "100vh",
          backgroundColor: "rgba(39, 24, 2, 0.6)",
        }}
      ></div>
      <div
        className="box-right"
        style={{
          maxWidth: "50vw",
          maxHeight: "100vh",
          backgroundColor: "rgba(1, 20, 54, 0.94)",
        }}
      >
        <div
          className="hero-text"
          style={{ padding: "6rem", margin: "18rem 0", textAlign: "center" }}
        >
        {children}
        </div>
      </div>
    </header>
  );
}
