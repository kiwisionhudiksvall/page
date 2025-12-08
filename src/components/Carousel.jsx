import { useRef, useEffect, useState } from "react";
import { getAssetUrl } from "../sdk/contentful.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../styles/global.css";

export default function Carousel({ slides }) {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Hjälpfunktion: plocka embedded image från rich text
  const getEmbeddedImage = (richText) => {
    if (!richText || !richText.content) return null;
    for (const node of richText.content) {
      if (node.nodeType === "embedded-asset-block" && node.data?.target) {
        return getAssetUrl(node.data.target);
      }
    }
    return null;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container && container.children.length > 0) {
      const firstCard = container.children[0];
      setCardWidth(firstCard.offsetWidth);

      // Initial center
      const initialOffset =
        firstCard.offsetLeft - (container.offsetWidth / 2 - firstCard.offsetWidth / 2);
      container.scrollLeft = initialOffset;
    }
  }, [slides]);

  const scroll = (direction) => {
    const container = containerRef.current;
    const amount = cardWidth + 32; // kort + gap
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // Snap to closest card after scroll
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    clearTimeout(container.snapTimeout);
    container.snapTimeout = setTimeout(() => {
      const children = Array.from(container.children);
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;

      let closest = children[0];
      let closestDistance = Math.abs(
        closest.offsetLeft + closest.offsetWidth / 2 - containerCenter
      );

      children.forEach((child) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(childCenter - containerCenter);
        if (distance < closestDistance) {
          closest = child;
          closestDistance = distance;
        }
      });

      const scrollTo = closest.offsetLeft - (container.offsetWidth / 2 - closest.offsetWidth / 2);
      container.scrollTo({ left: scrollTo, behavior: "smooth" });
    }, 100);
  };

  if (!slides || slides.length === 0) {
    console.warn("Carousel: No slides provided");
    return null;
  }

  return (
    <div
      className="carousel-wrapper"
      style={{
        position: "relative",
        width: "90vw",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <button
        onClick={() => scroll("left")}
        className="carousel-btn left"
        style={{ position: "absolute", top: "50%", left: "10px", zIndex: 2 }}
      >
        ‹
      </button>

      <div
        ref={containerRef}
        className="carousel-container"
        style={{
          display: "flex",
          gap: "2rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          padding: "2rem 0",
          scrollBehavior: "smooth",
        }}
        onScroll={handleScroll}
      >
        {slides.map((slide, i) => {
          const card = slide.fields ? slide.fields : slide;

          // Två bilder: huvudbild + embedded image
          const mainImage = card.image ? getAssetUrl(card.image) : null;
          const embeddedImage = getEmbeddedImage(card.text);

          return (
            <div
              key={i}
              className="carousel-card"
              style={{
                minWidth: "500px",
                maxWidth: "500px",
                scrollSnapAlign: "center",
                background: "var(--creme)",
                borderRadius: "1rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                overflow: "hidden",
                flexShrink: 0,
                padding: "2%",
              }}
            >
              {mainImage && (
                <img
                  src={mainImage}
                  alt={card.title || "slide image"}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              )}

              {embeddedImage && (
                <img
                  src={embeddedImage}
                  alt={card.title || "embedded image"}
                  style={{
                    width: "100%",
                    height: "5%",
                    objectFit: "contain",
                    marginTop: "5%",
                  }}
                />
              )}

              <div style={{ padding: "1rem" }}>
                {card.title && (
                  <h3
                    style={{
                      marginBottom: "5px",
                      color: "var(--darkblue)",
                      fontFamily: "all-round-gothic",
                      fontSize: "1.5rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {card.title}
                  </h3>
                )}

                {card.text && typeof card.text === "string" && (
                  <p style={{ fontSize: "0.9rem", color: "var(--darkblue)" }}>
                    {card.text}
                  </p>
                )}

                {card.text && typeof card.text === "object" && (
                  <div style={{ fontSize: "0.9rem", color: "var(--darkblue)" }}>
                    {documentToReactComponents(card.text)}
                  </div>
                )}

                {card.link && (
                  <a
                    href={card.link}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "1rem",
                      fontWeight: "600",
                    }}
                  ><button className="card-button" style={{padding: "15px 40px"}}>
                    Hemsida →
                  </button></a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => scroll("right")}
        className="carousel-btn right"
        style={{ position: "absolute", top: "50%", right: "10px", zIndex: 2 }}
      >
        ›
      </button>
    </div>
  );
}
