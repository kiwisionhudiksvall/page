import React, { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getAssetUrl } from "../sdk/contentful.js";

export default function BoxTextImage({ entry, options }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  if (!entry) return null;

  const imageUrl = entry.image ? getAssetUrl(entry.image) : null;
  const isLeft = entry.imageToTheLeft;

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSend = () => {
    // Här kan du antingen skicka till backend eller bara logga
    console.log("Meddelande skickat:", message);
    alert("Meddelande skickat!");
    setMessage("");
    setIsModalOpen(false);
  };

  return (
    <section
      key={entry.title}
      className="page-item"
      style={{
        display: "flex",
        flexDirection: isLeft ? "row" : "row-reverse",
        alignItems: "center",
      }}
    >
      {/* Bild */}
      {imageUrl && (
        <div
          className="image-box"
          style={{
            width: "100%",
            minWidth: "50vw",
            minHeight: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 25%",
            backgroundImage: `url(${imageUrl})`,
          }}
        />
      )}

      {/* Text */}
      <div
        className="title-text-box"
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "50vw",
          minHeight: "100%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2%",
        }}
      >
        <h3
        className="utbud-title"
          style={{
            color: "var(--darkblue)",
            fontSize: "1.7rem",
            fontWeight: "500",
            marginBottom: "10px",
          }}
        >
          {entry.title}
        </h3>

        {/* Rich Text */}
        <div
        className="utbud-richtext"
          style={{
            color: "var(--darkblue)",
            padding: "30px 90px",
            minHeight: "100%",
          }}
        >
          {entry.richText
            ? documentToReactComponents(entry.richText, options)
            : null}
        </div>

        {/* Knapp för modal */}
        <button
          onClick={handleOpenModal}
          style={{
            padding: "0.8rem 1.2rem",
            backgroundColor: "var(--darkblue)",
            color: "white",
            border: "none",
            fontWeight: 500,
            letterSpacing: "0.17rch",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          Kontakta oss
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
          onClick={handleCloseModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "var(--whiteblue)",
              padding: "2rem",
              borderRadius: "1rem",
              width: "90%",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <h3 style={{ margin: 0, color: "var(--darkblue)", }}>Skicka meddelande</h3>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Skriv ditt meddelande här..."
              style={{ width: "100%", height: "120px", padding: "0.5rem" }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
              <button
                onClick={handleCloseModal}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor:  "var(--darkblue)",
                  color: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Avbryt
              </button>
              <button
                onClick={handleSend}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "var(--aquablue)",
                  color: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Skicka
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
