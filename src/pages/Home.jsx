import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";
import Image from "../assets/images/wall_kiwision.png";

export default function Home() {
  const heroImage = {
    backgroundImage: `url(${Image})`,
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 95%",
  };

  return (
    <>
      <main
        className="home-main"
        style={{
          top: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 0,
        }}
      >
        <header
          className="home-hero"
          style={{
            ...heroImage,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            marginTop: "-25vh",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100vw",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: "rgba(23, 12, 2, 0.6)",
              zIndex: 1,
            }}
          ></div>
          <div
          className="hero-content"
            style={{
              position: "relative",
              marginTop: "10vh",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                fontFamily: "Arboria, sans-serif",
                letterSpacing: "1.0rem",
                fontWeight: "400",
                fontSize: "3.2rem",
                color: "var(--lightblue)",
              }}
            >
              VI ÄLSKAR IT
            </h1>
            <p
              style={{
                maxWidth: "60%",
                margin: "2rem auto",
                fontWeight: "400",
                fontFamily: "Arboria, sans-serif",
                fontSize: "1rem",
                color: "var(--whiteblue)",
              }}
            >
              Kiwision är en IT-byrå med skräddarsydda lösningar för dig som
              företag eller organisation. Med spetskompetens i branschen och
              några av Sveriges bästa systemutvecklare har vi lösningarna för
              just dina IT-behov. Vi arbetar nära våra kunder för att förstå
              deras behov och levererar lösningar med djup kunnighet bakom.
            </p>
            <div
              className="button-wrap"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link to="/products" className="link-1" style={{margin: "0.5vw"}}>
                <button className="button-1">UTBUD</button>
              </Link>
              <Link to="/about" className="link-2" style={{margin: "0.5vw"}}>
                <button className="button-2">OM OSS</button>
              </Link>
            </div>
          </div>
        </header>
        <section
          className="section-1"
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></section>
        <section
          className="section-2"
          style={{ textAlign: "center" }}
        ></section>
      </main>
    </>
  );
}
