
import Hero from "../../components/Hero.jsx";
import ContactForm from "../../components/ContactForm.jsx";
import pattern from "../../assets/images/decoration/graphic_0101-long2-darkblue.svg";
import "../../styles/global.css";
import MapEmbed from "../../components/MapEmbed.jsx";
import ContactTables from "../../components/ContactTables.jsx";

export default function ContactLayout({ pageContent }) {

  const getAssetUrl = (asset) =>
    asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : "";

  const imageUrl = getAssetUrl(pageContent?.heroImage);

  return (
    <>
      <Hero
        className="hero"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : "none",
          backgroundPosition: "100% 60%",
        }}
      >
        <h1>{pageContent?.heading1 || "Rubrik saknas"}</h1>
        <p>{pageContent?.heroText || ""}</p>
      </Hero>
      <section
        className="section-1"
        style={{
          padding: "4rem",
          textAlign: "center",
          color: "blue",
        }}
      >
        <h2>Kontaktinformation</h2>
        <div
          className="section-1-text"
          style={{
            marginTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            height: "70vh",
          }}
        >
        <ContactTables richText={pageContent.richText} 
        className="contact-tables-box"
        style={{            
          display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",}}/>
        </div>
      </section>
      <section
        className="section-2"
        style={{
          padding: "4rem",
          textAlign: "center",
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
          backgroundColor: "var(--darkblue)",
        }}
      >
        <h1>{pageContent?.heading1 || "Rubrik saknas"}</h1>
        <p>{pageContent?.heroText || ""}</p>
        <ContactForm />
      </section>
    </>
  );
}
