import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Hero from "../../components/Hero";
import "../../styles/global.css";

export default function DefaultLayout({ pageContent }) {
 const heroImageUrl =
    pageContent.heroImage?.fields?.file?.url
      ? `https:${pageContent.heroImage.fields.file.url}`
      : null;

  return (
      <>
      <Hero
        className="hero-about"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundPosition: "100% 100%",
        }}
      >
        <h1>{pageContent.heading1}</h1>
        <p>{pageContent.heroText}</p>
      </Hero>

      <section
        className="section-1"
        style={{
          width: "100vw",
          minHeight: "60vh",
          backgroundColor: "var(--whiteblue)",
          padding: "3rem 15rem 6rem 15rem",
        }}
      >
        <div
        className="section-1-text"
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {documentToReactComponents(pageContent.richText)}
        </div>
      </section>
      <section className="section-2"></section>
    </>
  );
}
