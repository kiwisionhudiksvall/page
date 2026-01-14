import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import "../../styles/global.css";

export default function SectionLayout({ pageItem }) {
  const renderOptions = {
    renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const fields = node.data?.target?.fields;
        if (!fields) return null;

        if (fields.title === "Jobbannons - #0001") {
          console.log("Hoppa över block:", fields.title);
          return null; 
        }

        const embeddedImageUrl = fields.image?.fields?.file?.url
          ? `https:${fields.image.fields.file.url}`
          : null;

 return (
          <div
            className="content-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "var(--whiteblue)",
              width: "100vw",
            }}
          >
            <div
              className="text-section"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "3vw",
                width: "100%",
                minWidth: "100vw",
                minHeight: "40vh",
              }}
            >
            <h3 style={{color: "var(--aquablue)"}}>
                {fields.heading || fields.title}
              </h3>
              <div
                className="text-box"
                style={{
                  maxWidth: "60%",
                  textAlign: "center",
                }}
              >
                {documentToReactComponents(fields.richText, renderOptions)}
              </div>
            </div>
            {embeddedImageUrl && (
              <div
                className="image-section"
                style={{
                  backgroundImage: `url(${embeddedImageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "0% 60%",
                  padding: "3vw",
                  width: "100%",
                  height: "100%",
                  minWidth: "100vw",
                  minHeight: "60vh",
                }}
              />
            )}
          </div>
        );
      },
    },
  };

  return (
    <section className="section-style">
      {documentToReactComponents(pageItem.richText, renderOptions)}
    </section>
  );
}
