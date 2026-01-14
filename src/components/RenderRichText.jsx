import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import MapEmbed from "./MapEmbed";
import ZiczagLayout from "./layouts/ZiczagLayout";

export default function RenderRichText({ richText }) {
  if (!richText) return null;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const fields = node.data?.target?.fields;

        console.log("Fields", fields)
        console.log("Location", location)

        if (!fields) return;

        if (fields.location) {
          return (
            <section className="richtext-map">
              <MapEmbed
                title={fields.title}
                location={fields}
                width="100%"
                height="400px"
              />
            </section>
          );
        }

        if (fields.richText && fields.image) {
          return <ZiczagLayout pageItem={fields} />;
        }

        return;
      },

      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const fields = node.data?.target?.fields;

        console.log("Fields 2", fields)
        console.log("Location 2", location)

        if (!fields) return;

        if (fields.location) {
          return (
            <span className="richtext-inline-map">
              <MapEmbed
                title={fields.title}
                location={fields}
                width="250px"
                height="250px"
              />
            </span>
          );
        }

        return;
      },
    },
  };

  return documentToReactComponents(richText, options);
}
