import React, { useState, useEffect } from "react";
import "../styles/global.css";
import heroImage from "../assets/images/employed_kiwision.png";
import { fetchPageContentByUrl } from "../sdk/contentfulSDK.js";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageContentByUrl("/about").then((result) => {
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
            style={{ padding: "6rem", margin: "10rem 0", textAlign: "center" }}
          >
            <h1>{data.heading1}</h1>
            <p>{data.heroText}</p>
          </div>
        </div>
      </header>

      <section
        data-name="section-2"
        style={{
          width: "100vw",
          minHeight: "60vh",
          backgroundColor: "var(--darkblue)",
          color: "var(--lightblue)",
          padding: "3rem 15rem 6rem 15rem",
        }}
      >
        <h2 style={{textAlign: "center"}}>{data.heading2}</h2>
<div style={{ textAlign: "left", lineHeight: "1.6", marginTop: "1.5rem" }}>
  {data.paragraph?.json ? documentToReactComponents(data.paragraph.json) : null}
</div>
      </section>
<section data-name="section-3">
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
            width: "100vw",
            height: "80vh",
            objectFit: "cover",
            objectPosition: "50% 20%",
            position: "relative",
            zIndex: 10,
          }}
        />

      </section>
    </>
  );
}
