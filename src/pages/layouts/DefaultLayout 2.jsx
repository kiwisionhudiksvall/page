import Hero from "../../components/Hero";
import ZiczagLayout from "../../components/layouts/ZiczagLayout.jsx";
import "../../styles/global.css";

export default function DefaultLayout({ pageContent }) {
  const heroImageUrl = pageContent.heroImage?.fields?.file?.url
    ? `https:${pageContent.heroImage.fields.file.url}`
    : null;

  // Hämta alla pageItems (referenser) som ligger kopplade till sidan
  const pageItems = pageContent.reference || [];

  return (
    <>
      <Hero
        className="hero"
        style={{
          backgroundImage: `url(${heroImageUrl})`,
          backgroundPosition: "0% 30%",
        }}
      >
        <h1>{pageContent.heading1}</h1>
        <p>{pageContent.heroText}</p>
      </Hero>

      {pageItems.length > 0 && (
        <section
          className="page-sections"
          style={{
            width: "100vw",
            minHeight: "60vh",
            padding: "3rem 0",
          }}
        >
          {pageItems.map((item) => (
            <ZiczagLayout key={item.sys.id} pageItem={item.fields} />
          ))}
        </section>
      )}
    </>
  );
}





// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import Hero from "../../components/Hero";
// import "../../styles/global.css";

// export default function DefaultLayout({ pageContent }) {
//  const heroImageUrl =
//     pageContent.heroImage?.fields?.file?.url
//       ? `https:${pageContent.heroImage.fields.file.url}`
//       : null;

//   return (
//       <>
//       <Hero
//         className="hero"
//         style={{
//           backgroundImage: `url(${heroImageUrl})`,
//           backgroundPosition: "0% 30%",
//         }}
//       >
//         <h1>{pageContent.heading1}</h1>
//         <p>{pageContent.heroText}</p>
//       </Hero>

//       <section
//         className="section-1"
//         style={{
//           width: "100vw",
//           minHeight: "60vh",
//           padding: "3rem 15rem 6rem 15rem",
//         }}
//       >
//         <div
//         className="section-1-text"
//           style={{
//             marginTop: "1.5rem",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           {documentToReactComponents(pageContent.richText)}
//         </div>
//       </section>
//       <section className="section-2"></section>
//     </>
//   );
// }
