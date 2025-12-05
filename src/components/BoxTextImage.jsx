import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getAssetUrl } from "../sdk/contentful.js"

export default function BoxTextImage({ entry, options }) {
  if (!entry) return null;
  const imageUrl = entry.image ? getAssetUrl(entry.image) : null;
  const isLeft = entry.imageToTheLeft;

  return (
    <section
      key={entry.title}
      className="page-item"
      style={{
        display: "flex",
        flexDirection: isLeft ? "row" : "row-reverse",
        alignItems: "center",
        marginTop: "-18px",
      }}
    >
      <div
    className={"image-box"}
      style={{
        width: "100%",
        minWidth: "50vw",
        minHeight: "70vh",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 25%",
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
     <div
        className="title-text-box"
        style={{
          display: "flex",
          flexDirection: "column",
          minWidth: "50vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "Arboria",
            color: "var(--darkblue)",
            fontSize: "1.7rem",
            fontWeight: "500",
            textTransform: "uppercase",
            letterSpacing: "0.2rch",
            marginBottom: "0px",
            marginTop: "7%",
          }}
        >
          {entry.title}
        </h3>
        <div
          style={{
            color: "var(--darkblue)",
            padding: "0 90px",
          }}
        >
          {documentToReactComponents(entry.richText, options)}
        </div>
      </div>
    </section>
  );
}
