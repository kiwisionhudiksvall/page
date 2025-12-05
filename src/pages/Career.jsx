import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { getEntryByUrl, getAssetUrl } from "../sdk/contentful.js";

export default function Career() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const entry = await getEntryByUrl("/page");
        if (entry) {
          setData(entry.fields);
        } else {
          setError("Inga poster hittades.");
        }
      } catch (err) {
        console.error(err);
        setError("Fel vid hämtning av innehåll.");
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  if (loading) return <div>Laddar innehåll...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Innehåll kunde inte hämtas.</div>;

  const { image, heading1, heroText } = data;
  const imageUrl = getAssetUrl(image);

  const heroBackgroundImage = {
    backgroundImage: `url(${imageUrl})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "row",
    marginTop: "-30vh",
  };

  return (
    <>
      <header className="hero" style={heroBackgroundImage}>
        <div
          className="box-1"
          style={{
            minWidth: "50vw",
            maxHeight: "100vh",
            backgroundColor: "rgba(39, 24, 2, 0.6)",
          }}
        ></div>
        <div
          className="box-2"
          style={{
            maxWidth: "50vw",
            maxHeight: "100vh",
            backgroundColor: "rgba(1, 20, 54, 0.85)",
          }}
        >
          <div
            className="hero-content"
            style={{ padding: "6rem", margin: "15rem 0", textAlign: "center" }}
          >
            <h1>{heading1}</h1>
            <p>{heroText}</p>
          </div>
        </div>
      </header>

      <section className="section-1"></section>
    </>
  );
}
