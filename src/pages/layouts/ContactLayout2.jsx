import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Hero from "../../components/Hero.jsx";
import ContactForm from "../../components/ContactForm.jsx";
import pattern from "../../assets/images/decoration/graphic_0101-long2-darkblue.svg";
import "../../styles/global.css";
import MapComponent from "../../components/MapComponent.jsx";

export default function ContactLayout({ pageContent }) {
  // Helper for safely getting Contentful asset URLs
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
          }}
        >
          {documentToReactComponents(pageContent?.richText || {})}
        </div>
        <MapComponent/>
      </section>
      <section
        className="section-2"
        style={{
          padding: "4rem",
          textAlign: "center",
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
        }}
      >
        <h1>{pageContent?.heading1 || "Rubrik saknas"}</h1>
        <p>{pageContent?.heroText || ""}</p>
        <ContactForm />
      </section>
    </>
  );
}
