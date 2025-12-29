import Hero from "../../components/Hero";
import "../../styles/global.css";
import ZiczagLayout from "../../components/layouts/ZiczagLayout.jsx";

export default function AboutLayout({ pageContent }) {
  const heroImageUrl = pageContent.heroImage?.fields?.file?.url
    ? `https:${pageContent.heroImage.fields.file.url}`
    : null;

  // Här hämtar vi de referenser (pageItems) som ligger länkade till sidan
  const pageItems = pageContent.reference || [];

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

      {pageItems.length > 0 && (
        <section
          className="section-1"
          style={{
            width: "100vw",
            minHeight: "60vh",
            padding: "3rem 0",
          }}
        >
          {pageItems.map((item) => (
            <ZiczagLayout key={item.sys.id} pageItem={item.fields} />
          ))}
        </section>
      )}
    </>
  );
}
