// Products.jsx
import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { getEntryByUrl, getAssetUrl, getCarousel } from "../sdk/contentful.js";
import Hero from "../components/Hero.jsx";
import BoxTextImage from "../components/BoxTextImage.jsx";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Carousel from "../components/Carousel.jsx";

export default function Products() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [carousel, setCarousel] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const entry = await getEntryByUrl("/products");
        console.log("ENTRY: ", entry);
        if (entry) setData(entry.fields);
        else setError("Inga poster hittades.");
      } catch (err) {
        console.error(err);
        setError("Fel vid hämtning av innehåll.");
      } finally {
        setLoading(false);
      }
    };
    loadContent();
  }, []);

  useEffect(() => {
    const loadCarousel = async () => {
      try {
        const data = await getCarousel("2utOYvjm3YrynDflJ6YHus");
        console.log("CAROUSEL: ", data);
        setCarousel(data);
      } catch (err) {
        console.error("Carousel load error:", err);
      }
    };
    loadCarousel();
  }, []);

  if (loading) return <div>Laddar innehåll...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Innehåll kunde inte hämtas.</div>;

  const { heroImage, heading1, heroText, richText } = data;
  const imageUrl = getAssetUrl(heroImage);

  const options = {
    renderNode: {
      "embedded-entry-inline": (node) => {
        const entry = node.data?.target?.fields;
        if (!entry) return null;
        return <BoxTextImage entry={entry} options={options} />;
      },
      paragraph: (node, children) => <div>{children}</div>, // Byt <p> till <div>
    },
  };

  return (
    <>
      <Hero style={{ backgroundImage: `url(${imageUrl})`, paddingBottom: "-10px", }}>
        <h1>{heading1}</h1>
        <div>{heroText}</div>
      </Hero>

      <section
        className="products-section"
        style={{
          width: "100%",
          height: "fit-content",
          backgroundColor: "var(--creme)",
          paddingTop: "-20px",
        }}
      >
        {richText && documentToReactComponents(richText, options)}
      </section>

      <section
        className="section-dark"
        style={{
          width: "100%",
          padding: "5% 0",
          minHeight: "70vh",
          backgroundColor: "var(--darkblue)",
        }}
      >
        <h2 style={{marginBottom: "4%",}}>Kundcase</h2>
        {carousel?.slides?.length ? (
          <Carousel slides={carousel.slides} />
        ) : null}
      </section>
    </>
  );
}
