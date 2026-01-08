import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MapComponent from "../components/MapComponent";

export const renderOptions = {
  renderNode: {
    "embedded-entry-inline": (node) => {
      const entry = node.data.target;
      if (entry.sys.contentType.sys.id === "map") {
        return <MapComponent location={entry} />;
      }
      return null;
    },
  },
};

export function renderRichText(richText) {
  return documentToReactComponents(richText, renderOptions);
}

