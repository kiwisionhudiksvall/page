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
      <section style={{background: "var(--whiteblue)", width: "100%", padding: "4%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div style={{width: "40%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start"}}>
          <h3>Företagsfakta</h3>

    <p>Org nr: 556123-4567</p>
    <p>Startdatum: 2015-06-01</p>
    <p>Tel: 031-123456</p>
    <p>Mail: kontakt@företag.se</p>
          </div>
        </section>
        <section style={{marginTop: "-20px", padding: "4%", background: "var(--aquablue)", color: "var(--whiteblue)"}}>
          <h3>Vårt företagsnamn</h3>
          <p>
            Lorem ipsum
            </p>
          </section>
    </>
  );
}
