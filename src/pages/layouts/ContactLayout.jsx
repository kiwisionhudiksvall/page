import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Hero from "../../components/Hero.jsx";
import React from "react";
import ContactForm from "../../components/ContactForm";
import pattern from "../../assets/images/decoration/graphic_0101-pattern-02.png"

export default function DefaultLayout({ pageContent }) {
 const imageUrl =
    pageContent.heroImage?.fields?.file?.url
      ? `https:${pageContent.heroImage.fields.file.url}`
      : null;

  return (
    <>
            <Hero
        className="hero-about"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "100% 60%",
        }}
      >
        <h1>{pageContent.heading1}</h1>
        <p>{pageContent.heroText}</p>
      </Hero>
      <section style={{ padding: "4rem", textAlign: "center",}}>
      <div className="prose" style={{color:"white"}}>
        {documentToReactComponents(pageContent.richText)}
      </div>
</section>
      <section style={{ padding: "4rem", textAlign: "center",
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover",
        }}>
      <h1>{pageContent.heading1}</h1>
      <p>{pageContent.heroText}</p>
      <ContactForm />
    </section>
    </>
  );
}
