import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import MapEmbed from "./MapEmbed";
import SectionLayout from "./layouts/SectionLayout";

export default function ContactTables({ richText }) {
  if (!richText) return null;

  const options = {
    renderNode: {
      [BLOCKS.TABLE]: (node, children) => (
        <table className="contact-table" border={1} cellPadding={5}>
          <tbody>{children}</tbody>
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => <tr>{children}</tr>,
      [BLOCKS.TABLE_CELL]: (node, children) => <td>{children}</td>,
      [BLOCKS.TABLE_HEADER_CELL]: (node, children) => <th>{children}</th>,

      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,

      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ),

      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const fields = node.data?.target?.fields;
        if (!fields) return null;

        if (fields.location) {
          return (
            <section className="richtext-map">
              <MapEmbed title={fields.title} location={fields} width="100%" height="400px" />
            </section>
          );
        }

        if (fields.richText || fields.image) {
          return <SectionLayout pageItem={fields} />;
        }

        return null;
      },

      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const fields = node.data?.target?.fields;
        if (!fields) return null;

        if (fields.location) {
          return (
            <span className="richtext-inline-map">
              <MapEmbed title={fields.title} location={fields} width="250px" height="250px" />
            </span>
          );
        }

        return null;
      },
    },
  };

  return <div>{documentToReactComponents(richText, options)}</div>;
}
