import { useEffect, useState } from "react";
import client from "../sdk/contentful.js";
import HomeLayout from "./layouts/HomeLayout";

export default function Home() {
  const [homePage, setHomePage] = useState(null);

  useEffect(() => {
    const fetchHomePage = async () => {
      try {
        const res = await client.getEntries({
          content_type: "pageContent",
          "fields.slug": "home",
        });

        if (res.items.length) {
          setHomePage(res.items[0].fields);
        } else {
          console.warn("Ingen startsida hittades i Contentful.");
        }
      } catch (err) {
        console.error("Fel vid hämtning av startsida:", err);
      }
    };

    fetchHomePage();
  }, []);

  if (!homePage)
    return <p style={{ textAlign: "center" }}>Laddar startsida...</p>;

  return <HomeLayout pageContent={homePage} />;
}
