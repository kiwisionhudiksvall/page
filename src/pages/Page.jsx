import React, { useState, useEffect } from "react";
import "../styles/global.css";
import heroImage from "../assets/images/kiwisionbilen-borgarparken.png";
import { fetchPageContent } from "../sdk/contentfulSDK.js";

export default function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPageContent("/page").then((result) => {
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
            style={{ padding: "6rem", margin: "15rem 0", textAlign: "center" }}
          >
            <h1>{data.heading1}</h1>
            <p>{data.heroText}</p>
          </div>
        </div>
      </header>

      <section data-name="section-1"></section>
    </>
  );
}

