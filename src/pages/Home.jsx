import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/photos/kiwision-kappuddsgatan-2.jpg";
import CardComponent from "../components/CardComponent.jsx";

export default function Home() {
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
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 70%",
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
              backgroundColor: "rgba(48, 31, 14, 0.7)",
              zIndex: 1,
            }}
          ></div>
          <div
            className="hero-content"
            style={{
              position: "relative",
              marginTop: "25vh",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                letterSpacing: "0.75rem",
                fontWeight: "500",
                fontSize: "3.0rem",
                color: "var(--lightblue)",
                textTransform: "uppercase",
              }}
            >
              VI ÄLSKAR IT
            </h1>
            <p
              style={{
                maxWidth: "60%",
                margin: "2rem auto",
                fontWeight: "400",
                fontSize: "1rem",
                lineHeight: "1.5rem",
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
              <Link to="/products" className="link-1">
                <button className="button-1">UTBUD</button>
              </Link>
              <Link to="/about" className="link-1">
                <button className="button-1">OM OSS</button>
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
            padding: "2% 0 5% 0",
          }}
        >
          <h2 style={{ color: "var(--darkblue)" }}>Våra kontor</h2>
          <CardComponent />
        </section>
        <section
          className="section-2"
          style={{ textAlign: "center" }}
        ></section>
      </main>
    </>
  );
}
