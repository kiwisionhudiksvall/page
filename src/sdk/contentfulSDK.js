const SPACE_ID = "pxok2zrh6jgc";
const ENVIRONMENT = "master";
const ACCESS_TOKEN = "UjuQwJoV0G6WTlkEq80T8SLFOXxfUXCyYI_9zu_JCg4";
const BASE_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

export async function fetchPageContent(id) {
  const query = `
    query {
      pageContent(id: "${id}") {
        heading1
        heading2
        paragraph
        image {
          title
          url
        }
      }
    }
  `;

  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();
    const entry = json.data.pageContent;
    const imageUrl = entry.image?.url;

    return { ...entry, imageUrl };
  } catch (err) {
    console.error("Fel vid GraphQL-anrop:", err);
    return null;
  }
}
