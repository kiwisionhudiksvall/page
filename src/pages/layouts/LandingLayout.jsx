import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../../styles/global.css";

export default function LandingLayout({ pageContent }) {
  const imageUrl = pageContent.heroImage?.fields?.file?.url
    ? `https:${pageContent.heroImage.fields.file.url}`
    : null;
    
  return (
    <>
      <header
        className="hero"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "110%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h1>{pageContent.heading1}</h1>
        <p>{pageContent.heroText}</p>
      </header>
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
