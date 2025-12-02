import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getEntryByUrl } from "../sdk/contentful.js";
import imageUrl from "../assets/images/marissa-lewis-Fm17vn1lmAQ-unsplash.png"

export default function ProductsSectionText() {
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

  const { reference } = data;

  const product1 = reference[0];
const title = product1.fields.title || "Produkt Titel";
const content = product1.fields.paragraph
? documentToReactComponents(product1.fields.paragraph)
 : product1.fields.text || "Inget innehåll";

//    const imageUrl = getAssetUrl(reference1.fields.image);

return (
    <>
 <div
          className="product-box-left"
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "50vw",
            alignItems: "center",
            justifyContent: "center",
          }}
        >             
                  <h3 style={{color: "var(--darkblue)", fontSize: "1.5rem", fontWeight: "600" }}>
                    {title}
                  </h3>
                  <p
                    style={{
                      padding: "1rem",
                      borderRadius: "4px",
                      marginTop: "0.5rem",
                      color: "var(--darkblue)",
                      maxWidth: "30vw",
                    }}
                  >
                    {content}
                  </p>
        </div>
                <div
          className="image-box-right"
          style={{
            width: "50vw",
            maxWidth: "50%",
            minHeight: "100%",
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backdropFilter: "opacity(0.5)",
          }}
        ></div>
        </>
)

}