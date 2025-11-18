import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";
import Image from "../assets/images/wall_kiwision.png";

export default function Home() {
  const heroImage = {
    backgroundImage: `url(${Image})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <main
        data-name="home-main"
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
          data-name="home-hero"
          style={{
            ...heroImage,
            top: 0,
            marginTop: "-30vh",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
          data-name="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor:"rgba(24, 17, 6, 0.82)", 
              zIndex: 1, 
            }}
          ></div>
          <div
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                fontFamily: "Arboria, sans-serif",
                letterSpacing: "1.0rem",
                fontWeight: "300",
                fontSize: "3.2rem",
                color: "#32B0E1",
              }}
            >
              VI ÄLSKAR IT
            </h1>
            <p
              style={{
                maxWidth: "75%",
                margin: "1rem auto",
              }}
            >
              Kiwision är en IT-konsultbyrå som specialiserar sig på att skapa
              skräddarsydda digitala lösningar för företag och organisationer.
              Med hög spetskompetens och kanske några av Sveriges bästa
              systemutvecklare har vi lösningarna för just dina IT-behov. Vi
              arbetar nära våra kunder för att förstå deras behov och levererar
              lösningar med djup kunnighet bakom.
            </p>
            <div
              data-name="button-wrap"
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link
                to="/products"
                data-name="link-1"
              ><button data-name="button-1">
                UTBUD
                </button>
              </Link>
              <Link
                to="/about"
                data-name="link-2"
              ><button data-name="button-2">
                OM OSS
                </button>
              </Link>
            </div>
          </div>
        </header>
        <section
          data-name="section-1"
          style={{
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        ></section>
        <section
          data-name="section-2"
          style={{ textAlign: "center" }}
        ></section>
      </main>
    </>
  );
}
