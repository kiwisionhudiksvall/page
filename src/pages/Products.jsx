import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { getEntryByUrl, getAssetUrl } from "../sdk/contentful.js";
import ProductsSectionContent from "../components/ProductsSectionContent.jsx";

export default function Products() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const entry = await getEntryByUrl("/products");
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

  return (
    <>
      <header
        className="hero"
        style={{
          backgroundImage: `url(${imageUrl})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 25%",
          display: "flex",
          flexDirection: "row",
          marginTop: "-30vh",
        }}
      >
        <div
          className="colorbox-left"
          style={{ minWidth: "50vw", backgroundColor: "rgba(39, 24, 2, 0.6)" }}
        />
        <div
          className="colorbox-right"
          style={{
            maxWidth: "50vw",
            backgroundColor: "rgba(1, 20, 54, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="hero-textcontent"
            style={{
              padding: "6rem",
              textAlign: "center",
              color: "white",
              maxWidth: "600px",
            }}
          >
            <h1>{heading1 || "Utbud"}</h1>
            <p>{heroText || "Textinnehåll"}</p>
          </div>
        </div>
      </header>

      <section
        className="section-1"
        style={{
          minHeight: "60vh",
          backgroundColor: "var(--whiteblue)",
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
       <ProductsSectionContent />
      </section>
    </>
  );
}
