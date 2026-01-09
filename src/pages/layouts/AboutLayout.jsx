import Hero from "../../components/Hero";
import "../../styles/global.css";
import ZiczagLayout from "../../components/layouts/ZiczagLayout.jsx";

export default function AboutLayout({ pageContent }) {
  const heroImageUrl = pageContent.heroImage?.fields?.file?.url
    ? `https:${pageContent.heroImage.fields.file.url}`
    : null;

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

      {pageContent.richText && (
        <section
          className="section-1"
          style={{
            width: "100vw",
            marginBottom: "-2vh",
          }}
        >
          <ZiczagLayout pageItem={pageContent} />
        </section>
      )}
    </>
  );
}
