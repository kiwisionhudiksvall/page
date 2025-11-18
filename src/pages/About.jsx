import React, { useState, useEffect } from "react";
import "../index.css";
import Image from "../assets/images/employed_kiwision.png";

export default function About() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://graphql.contentful.com/content/v1/spaces/pxok2zrh6jgc/environments/master";

    const query = `
      query {
        pageText(id: "3TqYb6JvRoK1WguY9oKLE9") {
          heading
          paragraph
          heading2
          paragraph2
          image {
            title
            url
          }
        }
      }
    `;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer UjuQwJoV0G6WTlkEq80T8SLFOXxfUXCyYI_9zu_JCg4",
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((json) => {
        const entry = json.data.pageText;
        const imageUrl = entry.image?.url;

        setData({ ...entry, imageUrl });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fel vid GraphQL-anrop:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Laddar innehåll...</div>;
  if (!data) return <div>Innehåll kunde inte hämtas.</div>;

  const heroStyle = {
    backgroundImage: `url(${Image})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "row",
    marginTop: "-30vh",
  };

  return (
    <>
      <header data-name="hero" style={heroStyle}>
        <div
          data-name="box-1"
          style={{
            minWidth: "50vw",
            maxHeight: "100vh",
            backgroundColor: "rgba(39, 24, 2, 0.6)",
          }}
        ></div>
        <div
          data-name="box-2"
          style={{
            maxWidth: "50vw",
            maxHeight: "100vh",
            backgroundColor: "rgba(1, 20, 54, 0.85)",
          }}
        >
          <div
            style={{ padding: "6rem", margin: "14rem 0", textAlign: "center" }}
          >
            <h1>{data.heading}</h1>
            <p>{data.paragraph}</p>
          </div>
        </div>
      </header>

      <section
        data-name="section-1"
        style={{
          width: "100%",
          minHeight: "60vh",
          textAlign: "center",
          backgroundColor: "var(--lightblue)",
          color: "var(--darkblue)",
          padding: "4rem",
        }}
      >
        <h2>{data.heading2}</h2>
        <p>{data.paragraph2}</p>
</section>
<section data-name="section-2" style={{ width: "100%"}}>
           <div
          data-name="overlay"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "80vh",
              objectFit: "cover",
              backgroundColor:"rgba(24, 17, 6, 0.82)", 
              zIndex: 30, 
            }}
          >
        <img
          src={data.imageUrl}
          alt={data.image?.title}
          style={{
            width: "100%",
            marginTop: "2rem",
            height: "80vh",
            objectFit: "cover",
            overflow: "hidden",
            objectPosition: "top",
            position: "relative",
            zIndex: 10,
          }}
        />
</div>
      </section>
    </>
  );
}
