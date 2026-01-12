import React from "react";
import Hero from "../../components/Hero";
import ZiczagLayout from "../../components/layouts/ZiczagLayout.jsx";
import "../../styles/global.css";
import Carousel from "../../components/Carousel.jsx";

export default function ProductsLayout({ pageContent, slides }) {

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
      <section
        className="section-products"
        style={{
          marginTop: "-20px",
        }}
      >
          <ZiczagLayout pageItem={pageContent} />
      </section>
<section className="section-2" style={{backgroundColor: "var(--darkblue)"}}>
  <Carousel slides={slides} />
</section>
    </>
  );
}
