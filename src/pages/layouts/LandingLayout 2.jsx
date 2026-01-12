import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Hero from "../../components/Hero.jsx";
import "../../styles/global.css";

export default function LandingLayout({ pageContent }) {
  const imageUrl = pageContent.heroImage?.fields?.file?.url
    ? `https:${pageContent.heroImage.fields.file.url}`
    : null;
  return (
    <>
      <Hero
        className="hero"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "100% 60%",
        }}
      >
        <h1>{pageContent.heading1}</h1>
        <p>{pageContent.heroText}</p>
      </Hero>
      <section
        className="section-1"
        style={{ padding: "4%", textAlign: "center" }}
      >
        <div style={{ color: "var(--whiteblue)" }}>
          {documentToReactComponents(pageContent.richText)}
        </div>
      </section>
      <section className="section-2" style={{ padding: "4%" }}></section>
    </>
  );
}
