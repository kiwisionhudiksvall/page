import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Hero from "../../components/Hero.jsx";
import React, { useState, useEffect } from "react";
import client from "../../contentfulClient";
import { getAssetUrl } from "../../contentfulClient";


export default function ContactLayout({ page }) {
const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        const entry = await client.getEntries("/contact");
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
    <section>
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
      <h1>{page.title}</h1>

      {/* Rendera rich text korrekt */}
      <div className="prose" style={{color:"white"}}>
        {page.body && documentToReactComponents(page.body, richText, options)}
      </div>

      <form style={{display: "flex", flexDirection: "column", width: "40vw", alignItems: "center"}}>
        <input
          type="text"
          placeholder="Ditt namn"
        />
        <input
          type="email"
          placeholder="Din e-post"
        />
        <textarea
          placeholder="Ditt meddelande"
          rows="5"
        />
        <button>
          Skicka
        </button>
      </form>
    </section>
    </>
  );
}
