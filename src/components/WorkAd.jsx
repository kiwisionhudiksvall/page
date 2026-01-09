import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function WorkAd({ workAd }) {
  if (!workAd) return null;

  return (
    <div
      className="work-ad"
      style={{
        margin: "2rem auto",
        padding: "4rem",
        boxShadow: "0px 0px 25px var(--whiteblue 1.0)",
        backgroundColor: "var(--creme)",
        borderRadius: "12px",
        maxWidth: "800px",
      }}
    >
      <h3 style={{ color: "var(--midblue)", textAlign: "center", marginBottom: "1%" }}>{workAd.jobTitle}</h3>
      <p style={{ fontSize: "0.95rem", color: "var(--aquablue)", fontWeight: "500", textAlign: "center"}}>
        Publicerad: {workAd.publishDate ? new Date(workAd.publishDate).toLocaleDateString() : "Inget datum"}
      </p>

      {workAd.ad && (
        <div className="ad-text" style={{ marginTop: "20px"}}>
          {documentToReactComponents(workAd.ad)}
        </div>
      )}

      {workAd.url && (
        <a
          href={workAd.url}
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.6rem 2rem",
            backgroundColor: "var(--aquablue)",
            color: "white",
            borderRadius: "30px",
            textDecoration: "none",
            textTransform: "uppercase",
            fontWeight: "600",
            fontSize: "1.0rem",
            textAlign: "center",
          }}
        >
          Ansök här
        </a>
      )}
    </div>
  );
}
