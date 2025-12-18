import { useState } from "react";
import { getAssetUrl } from "../sdk/contentful.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../styles/global.css";

export default function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getEmbeddedImage = (richText) => {
    if (!richText || !richText.content) return null;
    for (const node of richText.content) {
      if (node.nodeType === "embedded-asset-block" && node.data?.target) {
        return getAssetUrl(node.data.target);
      }
    }
    return null;
  };

  if (!slides || slides.length === 0) {
    console.warn("Carousel: No slides provided");
    return null;
  }

  const total = slides.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  const visibleSlides = [prevIndex, currentIndex, nextIndex];

  return (
    <div
      className="carousel-wrapper"
      style={{
        position: "relative",
        width: "90vw",
        margin: "0 auto",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <button
        onClick={handlePrev}
        className="carousel-btn left"
        style={{
          position: "absolute",
          top: "30%",
          left: "10px",
          zIndex: 2,
          fontSize: "2rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "var(--darkblue)",
        }}
      >
        ‹
      </button>

      <div
        className="carousel-track"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "2rem",
          transition: "all 1.1s ease",
        }}
      >
        {visibleSlides.map((index) => {
          const slide = slides[index];
          const card = slide.fields ? slide.fields : slide;

          const mainImage = card.image ? getAssetUrl(card.image) : null;
          const embeddedImage = getEmbeddedImage(card.text);

          // Style baserat på position: vänster, center, höger
          const isCenter = index === currentIndex;
          const transform = isCenter ? "scale(1)" : "scale(0.95)"
          const opacity = isCenter ? 1 : 0.2;
          const zIndex = isCenter ? 2 : 1;
          const marginLeft = isCenter ? "40" : "10";

          return (
            <div
              key={index}
              className="carousel-card"
              style={{
                width: "350px",
                minWidth: "300px",
                background: "var(--creme)",
                borderRadius: "1rem",
                overflow: "hidden",
                flexShrink: 0,
                padding: "1%",
                opacity,
                transform,
                marginLeft,
                transition: "all 0.5s ease",
                animationName: "tonext, snap",
                animationTimingFunction: "ease",
                animationDuration: "4s",
                zIndex,
                boxShadow: isCenter
                  ? "0 10px 25px rgba(255, 255, 255, 0.57)"
                  : "0 4px 10px rgba(255, 255, 255, 0.43)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {embeddedImage && (
                <img
                  src={embeddedImage}
                  alt={card.title || "embedded image"}
                  style={{
                    maxHeight: "6vh",
                    objectFit: "contain",
                    margin: "5% 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                  }}
                />
              )}
              {mainImage && (
                <img
                  src={mainImage}
                  alt={card.title || "slide image"}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    objectPosition: "0% 18%",
                    borderRadius: "0.5rem",
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
                      textAlign: "center",
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
                    }}
                  >
                    <button
                      className="card-button"
                      style={{
                        padding: "15px 40px",
                        fontWeight: "600",
                        borderRadius: "8px",
                        background: "var(--darkblue)",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Hemsida
                    </button>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        className="carousel-btn right"
        style={{
          position: "absolute",
          top: "30%",
          right: "10px",
          zIndex: 2,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
}
