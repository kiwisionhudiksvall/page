import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import "../../styles/global.css";

export default function ZiczagLayout({ pageItem }) {
  const renderOptions = {
    renderNode: {
      /* ==================================================
         BLOCKS: EMBEDDED ENTRY (Ziczag – About-sidan)
         ================================================== */
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const fields = node.data?.target?.fields;
        if (!fields) return null;

        if (fields.title === "Karusell - Kundcase") {
          console.log("Hoppa över block:", fields.title);
          return null; 
        }
        const embeddedImageUrl = fields.image?.fields?.file?.url
          ? `https:${fields.image.fields.file.url}`
          : null;

        return (
          <div
            className="content-box"
            style={{
              display: "flex",
              flexDirection: fields.imageToTheLeft ? "row" : "row-reverse",
              alignItems: "center",
              backgroundColor: fields.imageToTheLeft
                ? "var(--darkblue)"
                : "var(--aquablue)",
            }}
          >
            {embeddedImageUrl && (
              <div
                className="image-box"
                style={{
                  backgroundImage: `url(${embeddedImageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "30% 20%",
                  padding: "3vw",
                  width: "100%",
                  height: "100%",
                  minWidth: "44vw",
                  minHeight: "60vh",
                }}
              />
            )}

            <div
              className="text-image-box"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "3vw",
                width: "100%",
                minWidth: "44vw",
                minHeight: "60vh",
              }}
            >
              <h3
                style={{
                  color: fields.imageToTheLeft
                    ? "var(--aquablue)"
                    : "var(--darkblue)",
                }}
              >
                {fields.heading || fields.title}
              </h3>

              <div
                className="text-box"
                style={{
                  maxWidth: "80%",
                  textAlign: "center",
                  color: fields.imageToTheLeft
                    ? "var(--lightblue)"
                    : "var(--darkblue)",
                }}
              >
                {documentToReactComponents(fields.richText, renderOptions)}
              </div>
            </div>
          </div>
        );
      },

      /* ==================================================
         INLINES: EMBEDDED ENTRY
         (EXAKT samma styling som du hade tidigare)
         ================================================== */
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const fields = node.data?.target?.fields;
        if (!fields) return null;

        const embeddedImageUrl = fields.image?.fields?.file?.url
          ? `https:${fields.image.fields.file.url}`
          : null;

        return (
          <div
            className="content-box"
            style={{
              display: "flex",
              flexDirection: fields.imageToTheLeft ? "row" : "row-reverse",
              alignItems: "center",
              backgroundColor: fields.imageToTheLeft
                ? "var(--darkblue)"
                : "var(--whiteblue)",
              margin: "-16px auto",
            }}
          >
            {embeddedImageUrl && (
              <div
                className="image-box"
                style={{
                  backgroundImage: `url(${embeddedImageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10% 10%",
                  padding: "3vw",
                  width: "100%",
                  height: "100%",
                  minWidth: "44vw",
                  minHeight: "60vh",
                }}
              />
            )}

            <div
              className="text-image-box"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "3vw",
                width: "100%",
                minWidth: "44vw",
                minHeight: "60vh",
              }}
            >
              <h3
                style={{
                  color: fields.imageToTheLeft
                    ? "var(--aquablue)"
                    : "var(--darkblue)",
                }}
              >
                {fields.heading || fields.title}
              </h3>

              <div
                className="text-box"
                style={{
                  maxWidth: "80%",
                  textAlign: "center",
                  color: fields.imageToTheLeft
                    ? "var(--midblue)"
                    : "var(--darkblue)",
                }}
              >
                {documentToReactComponents(fields.richText, renderOptions)}
              </div>
            </div>
          </div>
        );
      },
    },
  };

  return (
    <section className="ziczag">
      {documentToReactComponents(pageItem.richText, renderOptions)}
    </section>
  );
}
