import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { getEntryByUrl, getAssetUrl } from "../sdk/contentful.js";
import Hero from "../components/Hero.jsx"
import BoxTextImage from "../components/BoxTextImage.jsx";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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

  const { heroImage, heading1, heroText, richText } = data;
  const imageUrl = getAssetUrl(heroImage);

const options = {
    renderNode: {
      "embedded-entry-inline": (node) => {
        const entry = node.data?.target?.fields;
        if (!entry) return null;
        return <BoxTextImage entry={entry} options={options} />;
      },
    },
  };


  return (
    <>
      <Hero style={{backgroundImage: `url(${imageUrl})`}}>
            <h1>{heading1}</h1>
            <p>{heroText}</p>
      </Hero>

     <section
        className="products-section"
        style={{
          width: "100%",
          minHeight: "60vh",
          backgroundColor: "var(--whiteblue)",
        }}
      >
        {documentToReactComponents(richText, options)}
      </section>
    </>
  );
}
