import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { getEntryByUrl, getAssetUrl } from "../sdk/contentful.js";
import Hero from "../components/Hero.jsx";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const entry = await getEntryByUrl("/about");
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

  const { heroImage, heading1, heroText, richText } = data;
  const imageUrl = getAssetUrl(heroImage);

  const options = {
    renderNode: {
      "heading-2": (node, children) => (
        <h2 className="custom-h2">{children}</h2>
      ),
      paragraph: (node, children) => (
        <p className="custom-paragraph">{children}</p>
      ),
    },
  };

  return (
    <>
      <Hero
        className="hero-about"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "100% 100%",
        }}
      >
        <h1>{heading1}</h1>
        <p>{heroText}</p>
      </Hero>

      <section
        className="section-1"
        style={{
          width: "100vw",
          minHeight: "60vh",
          backgroundColor: "var(--whiteblue)",
          color: "var(--darkblue)",
          padding: "3rem 15rem 6rem 15rem",
        }}
      >
        <div
          style={{
            marginTop: "1.5rem",
            color: "var(--darkblue)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {documentToReactComponents(richText, options)}
        </div>
      </section>
      <section className="section-2"></section>
    </>
  );
}
