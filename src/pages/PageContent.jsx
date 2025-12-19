import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../contentfulClient";
import DefaultLayout from "./layouts/DefaultLayout";
import ContactLayout from "./layouts/ContactLayout";
import LandingLayout from "./layouts/LandingLayout";
import "../styles/global.css";

export default function PageContent() {
  const { slug } = useParams();
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
     const res = await client.getEntries({
        content_type: "pageContent",
        "fields.slug": slug,
      });
      console.log("Res: ", res);
      console.log("Slug: ", slug);
      if (res.items.length) setPageContent(res.items[0].fields);
    };
    fetchPageContent();
  }, [slug]);

  if (!pageContent) return <p style={{textAlign: "center", marginTop: "10vh", color: "var(--aquablue)"}}>Laddar...</p>;

  const renderLayout = () => {
    switch (pageContent.template) {
      case "career":
        return <ContactLayout pageContent={pageContent} />;
      case "products":
        return <ContactLayout pageContent={pageContent} />;
      case "about":
        return <ContactLayout pageContent={pageContent} />;
      case "contact":
        return <ContactLayout pageContent={pageContent} />;
      case "landing":
        return <LandingLayout pageContent={pageContent} />;
      default:
        return <DefaultLayout pageContent={pageContent} />;
    }
  };

  return <>{renderLayout()}</>;
}