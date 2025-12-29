import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { getAssetUrl } from "../contentfulClient";

// En enkel renderer som du kan importera överallt
export const renderRichText = (richText) => {
  if (!richText) return null;

  const options = {
    renderNode: {
      // Embedded block entries (t.ex. Ziczag-sektioner, citat osv.)
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const fields = node.data?.target?.fields;
        if (!fields) return null;

        const imageUrl = getAssetUrl(fields.image);
        return (
          <div
            style={{
              display: "flex",
              flexDirection: fields.imageToTheLeft ? "row" : "row-reverse",
              alignItems: "center",
              background: "var(--whiteblue)",
              borderRadius: "20px",
              overflow: "hidden",
              margin: "3rem 0",
            }}
          >
            {imageUrl && (
              <div
                style={{
                  width: "50%",
                  minHeight: "60vh",
                  backgroundImage: `url(${imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}
            <div style={{ padding: "2rem", width: "50%" }}>
              <h3 style={{ color: "var(--darkblue)" }}>
                {fields.heading || fields.title}
              </h3>
              {fields.richText &&
                documentToReactComponents(fields.richText, options)}
            </div>
          </div>
        );
      },

      // Inline embedded entry (t.ex. länkar, kontaktinfo)
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const fields = node.data?.target?.fields;
        if (!fields) return null;

        if (fields.link && fields.title) {
          return (
            <a
              href={fields.link}
              style={{
                color: "var(--aquablue)",
                textDecoration: "underline",
                fontWeight: "500",
              }}
            >
              {fields.title}
            </a>
          );
        }

        return <span>{fields.title || "Embedded entry"}</span>;
      },

      // Embedded asset (bilder direkt i texten)
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const url = getAssetUrl(node.data?.target);
        if (!url) return null;
        const alt = node.data?.target?.fields?.title || "Image";
        return (
          <img
            src={url}
            alt={alt}
            style={{ maxWidth: "100%", borderRadius: "10px", margin: "1rem 0" }}
          />
        );
      },
    },
  };

  return documentToReactComponents(richText, options);
};
