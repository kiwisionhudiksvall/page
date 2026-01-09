import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../contentfulClient";
import DefaultLayout from "./layouts/DefaultLayout";
import ContactLayout from "./layouts/ContactLayout";
import LandingLayout from "./layouts/LandingLayout";
import AboutLayout from "./layouts/AboutLayout";
import ProductsLayout from "./layouts/ProductsLayout";
import CareerLayout from "./layouts/CareerLayout";
import HomeLayout from "./layouts/HomeLayout";
// röv
import "../styles/global.css";
import { extractTables } from "../utils/extractTables";

export default function PageContent() {
  const { slug } = useParams();
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      const res = await client.getEntries({
        content_type: "pageContent",
        "fields.slug": slug,
        include: 10,
      });

      console.log("PAGECONTENT RESPONSE:", res);

      if (res.items?.length) {
        setPageContent(res);
      }
    };

    fetchPageContent();
  }, [slug]);

  if (!pageContent) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "10vh",
          color: "var(--aquablue)",
          fontSize: "1.5rem",
          fontFamily: "all-round-gothic, sans-serif",
        }}
      >
        Vänta lite...
      </div>
    );
  }

  const pageEntry = pageContent.items[0];
  const { fields } = pageEntry;

  // Exempel: justera detta till rätt rich text-fält
  const tables = fields.mapsOffices?.fields?.richText
    ? extractTables(fields.mapsOffices.fields.richText)
    : [];

  console.log("EXTRACTED TABLES:", tables);

  const renderLayout = () => {
    switch (fields.template) {
      case "career":
        return <CareerLayout pageContent={fields} />;
      case "products":
        return <ProductsLayout pageContent={fields} />;
case "about":
  return <AboutLayout pageContent={fields} />;
      case "contact":
        return (
          <ContactLayout
            pageContent={fields}
            tables={tables}
          />
        );
      case "landing":
        return <LandingLayout pageContent={fields} />;
      case "home":
        return <HomeLayout pageContent={fields} />;
      default:
        return <DefaultLayout pageContent={fields} />;
    }
  };

  return renderLayout();
}
