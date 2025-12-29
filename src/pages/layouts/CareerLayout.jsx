import Hero from "../../components/Hero";
import "../../styles/global.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import WorkAd from "../../components/WorkAd.jsx";
import { useEffect, useState } from "react";
import client from "../../contentfulClient.js";

export default function CareerLayout({ pageContent }) {
  const heroImageUrl = pageContent.heroImage?.fields?.file?.url
    ? `https:${pageContent.heroImage.fields.file.url}`
    : null;

  const [workAd, setWorkAd] = useState(null);

  useEffect(() => {
    const fetchWorkAd = async () => {
      try {
        const res = await client.getEntries({
          content_type: "workAd",
          limit: 1, // Hämta senaste jobbet
          order: "-fields.publishDate", // Sortera på publishDate descending
        });

        if (res.items.length) {
          setWorkAd(res.items[0].fields);
        }
      } catch (err) {
        console.error("Fel vid hämtning av jobbannons:", err);
      }
    };

    fetchWorkAd();
  }, []);

  return (
    <>
      <Hero
        className="hero"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundPosition: "0% 30%",
        }}
      >
        <h1>{pageContent.heading1}</h1>
        <p>{pageContent.heroText}</p>
      </Hero>

      <section
        className="section-career"
        style={{
          width: "100vw",
          minHeight: "60vh",
          padding: "3rem 15rem 6rem 15rem",
        }}
      >
        <h2 style={{ color: "var(--lightblue)" }}>LEDIGA JOBB</h2>
        <div
          className="section-1-text"
          style={{
            marginTop: "1.5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {documentToReactComponents(pageContent.richText)}
        </div>
                {workAd && <WorkAd workAd={workAd}/>}
      </section>

      <section className="section-2">

      </section>
    </>
  );
}




