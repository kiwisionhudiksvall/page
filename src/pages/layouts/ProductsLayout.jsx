import React from "react";
import Hero from "../../components/Hero";
import ZiczagLayout from "../../components/layouts/ZiczagLayout.jsx";
import "../../styles/global.css";

export default function ProductsLayout({ pageContent }) {
  const fields = pageContent;

  const heroImageUrl = fields.heroImage?.fields?.file?.url
    ? `https:${fields.heroImage.fields.file.url}`
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
        <h1>{fields.heading1}</h1>
        <p>{fields.heroText}</p>
      </Hero>
      <section
        className="section-products"
        style={{
          marginTop: "-20px",
        }}
      >
          <ZiczagLayout pageItem={fields} />
      </section>
      <section className="section-2"></section>
    </>
  );
}
