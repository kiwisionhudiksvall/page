import { useRef } from "react";
import { getAssetUrl } from "../sdk/contentful.js";
import "../styles/global.css";

export default function Carousel({ slides }) {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const amount = container.clientWidth;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (!slides || slides.length === 0) {
    console.warn("Carousel: No slides provided");
    return null;
  }

  return (
    <div
      className="carousel-wrapper"
      style={{ position: "relative", width: "60vw", overflow: "hidden" }}
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
          padding: "2rem 1rem",
        }}
      >
        {slides.map((slide, i) => {
          // ✅ FIX: Contentful wraps data in slide.fields
          const card = slide.fields ? slide.fields : slide;

          // image is an asset field → passed into getAssetUrl
          const imageUrl = card.image ? getAssetUrl(card.image) : null;

          return (
            <div
              key={i}
              className="carousel-card"
              style={{
                minWidth: "300px",
                maxWidth: "320px",
                scrollSnapAlign: "center",
                background: "var(--whitegreen)",
                borderRadius: "1rem",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={card.title || "slide image"}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              )}

              <div style={{ padding: "1rem" }}>
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    color: "var(--darkblue)",
                  }}
                >
                  {card.title || "Titel saknas"}
                </h3>

                <p style={{ fontSize: "0.9rem", color: "var(--darkblue)" }}>
                  {card.text || ""}
                </p>

                {card.link && (
                  <a
                    href={card.link}
                    style={{
                      display: "inline-block",
                      marginTop: "1rem",
                      color: "var(--aquablue)",
                      fontWeight: 600,
                    }}
                  >
                    Hemsida →
                  </a>
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
