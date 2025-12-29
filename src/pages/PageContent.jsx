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
import "../styles/global.css";

export default function PageContent() {
  const { slug } = useParams();
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      const res = await client.getEntries({
        content_type: "pageContent",
        "fields.slug": slug,
        include: 10, // Viktigt för att få med embedded entries/assets
      });
      console.log("Res från pageContent: ", res);
      if (res.items.length) setPageContent(res.items[0]);
    };
    fetchPageContent();
  }, [slug]);

  if (!pageContent)
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
        Vänta lite...
      </p>
    );

  const renderLayout = () => {
    switch (pageContent.fields.template) {
      case "career":
        return (
          <CareerLayout
            pageContent={pageContent.fields}
            includes={pageContent.includes}
          />
        );
      case "products":
        return (
          <ProductsLayout
            pageContent={pageContent.fields}
            includes={pageContent.includes}
          />
        );
      case "about":
        return (
          <AboutLayout
            pageContent={pageContent.fields}
            includes={pageContent.includes}
          />
        );
      case "contact":
        return (
          <ContactLayout
            pageContent={pageContent.fields}
            includes={pageContent.includes}
          />
        );
      case "landing":
        return (
          <LandingLayout
            pageContent={pageContent.fields}
            includes={pageContent.includes}
          />
        );
      case "home":
        return (
          <HomeLayout
            pageContent={pageContent.fields}
            includes={pageContent.includes}
          />
        );
      default:
        return (
          <DefaultLayout
            pageContent={pageContent.fields}
            includes={pageContent.includes}
          />
        );
    }
  };

  return <>{renderLayout()}</>;
}
