import { useEffect, useState } from "react";
import client from "../contentfulClient.js";
// import client, { getAssetUrl } from "../contentfulClient.js";
import HomeLayout from "./layouts/HomeLayout";

export default function Home() {
  const [homePage, setHomePage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const res = await client.getEntries({
          content_type: "pageContent",
          "fields.slug": "home",
          include: 10, // Viktigt om du vill hämta embedded entries
        });

        if (res.items.length) {
          const page = res.items[0].fields;

          // Optional: extrahera references för embedded entries
          page.references = res.includes?.Entry || [];

          setHomePage(page);
        } else {
          console.warn("Ingen startsida hittades i Contentful.");
        }
      } catch (err) {
        console.error("Fel vid hämtning av startsida:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomePage();
  }, []);

  if (loading)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "10vh",
          color: "var(--aquablue)",
          fontSize: "1.5rem",
          fontFamily: "all-round-gothic, sans-serif",
        }}
      >
        Laddar...
      </p>
    );

  if (!homePage)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "10vh",
          color: "var(--aquablue)",
          fontSize: "1.5rem",
          fontFamily: "all-round-gothic, sans-serif",
        }}
      >
        Inget innehåll.
      </p>
    );

  return <HomeLayout pageContent={homePage} />;
}



// import { useEffect, useState } from "react";
// import client from "../sdk/contentful.js";
// import HomeLayout from "./layouts/HomeLayout";

// export default function Home() {
//   const [homePage, setHomePage] = useState(null);

//   useEffect(() => {
//     const fetchHomePage = async () => {
//       try {
//         const res = await client.getEntries({
//           content_type: "pageContent",
//           "fields.slug": "home",
//         });

//         if (res.items.length) {
//           setHomePage(res.items[0].fields);
//         } else {
//           console.warn("Ingen startsida hittades i Contentful.");
//         }
//       } catch (err) {
//         console.error("Fel vid hämtning av startsida:", err);
//       }
//     };

//     fetchHomePage();
//   }, []);

//   if (!homePage)
//     return <p style={{ textAlign: "center" }}>Laddar startsida...</p>;

//   return <HomeLayout pageContent={homePage} />;
// }
