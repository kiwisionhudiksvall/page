import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MapEmbed from "../components/MapEmbed";


export const renderOptions = {
  renderNode: {
    "embedded-entry-inline": (node) => {
      const entry = node.data.target;
      if (entry.sys.contentType.sys.id === "mapLocation") {
        return <MapEmbed location={entry} />;
      }
      return null;
    },
  },
};

export function renderRichText(richText) {
  return documentToReactComponents(richText, renderOptions);
}

