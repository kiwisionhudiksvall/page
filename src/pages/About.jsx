import React, { useState, useEffect } from "react";
import "../styles/global.css";
import heroImage from "../assets/images/employed_kiwision.png";
import { fetchPageContent } from "../sdk/contentfulSDK.js";

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageContent("4V46k8e7DIJpyrhjQVtvHt").then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Laddar innehåll...</div>;
  if (!data) return <div>Innehåll kunde inte hämtas.</div>;

  const heroBackgroundImage = {
    backgroundImage: `url(${heroImage})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "row",
    marginTop: "-30vh",
  };

  return (
    <>
      <header data-name="hero" style={heroBackgroundImage}>
        <div
          data-name="box-1"
          style={{
            minWidth: "50vw",
            maxHeight: "100vh",
            backgroundColor: "rgba(39, 24, 2, 0.6)",
          }}
        ></div>
        <div
          data-name="box-2"
          style={{
            maxWidth: "50vw",
            maxHeight: "100vh",
            backgroundColor: "rgba(1, 20, 54, 0.85)",
          }}
        >
          <div
            style={{ padding: "6rem", margin: "14rem 0", textAlign: "center" }}
          >
            <h1>{data.heading1}</h1>
            <p>{data.paragraph}</p>
          </div>
        </div>
      </header>

      <section
        data-name="section-2"
        style={{
          width: "100%",
          minHeight: "60vh",
          textAlign: "center",
          backgroundColor: "var(--lightblue)",
          color: "var(--darkblue)",
          padding: "4rem",
        }}
      >
        <h2>{data.heading2}</h2>
        <p>{data.paragraph}</p>
</section>
<section data-name="section-3" style={{ width: "100%"}}>
           <div
          data-name="overlay"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "100%",
              objectFit: "cover",
              backgroundColor:"rgba(24, 17, 6, 0.82)", 
              zIndex: 30, 
            }}
          ></div>
        <img
          src={data.imageUrl}
          alt={data.image?.title}
          style={{
            width: "100%",
            marginTop: "2rem",
            height: "80vh",
            objectFit: "cover",
            overflow: "hidden",
            objectPosition: "top",
            position: "relative",
            zIndex: 10,
          }}
        />

      </section>
    </>
  );
}
