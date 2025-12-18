import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../contentfulClient";
import DefaultLayout from "./layouts/DefaultLayout";
import ContactLayout from "./layouts/ContactLayout";
import LandingLayout from "./layouts/LandingLayout";

export default function Page() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
     const res = await client.getEntries({
        content_type: "page",
        "fields.slug": slug,
      });
      if (res.items.length) setPage(res.items[0].fields);
    };
    fetchPage();
  }, [slug]);

  if (!page) return <p className="text-center mt-8">Laddar...</p>;

  const renderLayout = () => {
    switch (page.template) {
      case "contact":
        return <ContactLayout page={page} />;
      case "landing":
        return <LandingLayout page={page} />;
      default:
        return <DefaultLayout page={page} />;
    }
  };

  return <>{renderLayout()}</>;
}