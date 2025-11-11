import React, { useEffect, useState } from "react";
import * as contentful from "contentful";

const ContentfulFetch = () => {
  const [entry, setEntry] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = contentful.createClient({
      space: "pxok2zrh6jgc",
      environment: "master",
      accessToken: "FXtkQ7bgte1j2AuzkClRSZYful0foPGmBqXebQap0JE",
    });

    client
      .getEntry("2cj7NmdJlmo6J1UclbAFID")
      .then((entry) => {
        console.log("Fetched entry:", entry);
        setEntry(entry);
      })
      .catch((err) => {
        console.error("Error fetching entry:", err);
        setError(err);
      });
  }, []);

  if (error) return <p>Error: {error.message}</p>;
  if (!entry) return <p>Loading data...</p>;

  return (
    <div>
      <pre>{JSON.stringify(entry.fields, null, 2)}</pre>
    </div>
  );
};

export default ContentfulFetch;
