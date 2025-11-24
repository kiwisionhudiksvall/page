const SPACE_ID = "pxok2zrh6jgc";
const ENVIRONMENT = "master";
const ACCESS_TOKEN = "UjuQwJoV0G6WTlkEq80T8SLFOXxfUXCyYI_9zu_JCg4";
const BASE_URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

export async function fetchPageContentByUrl(url) {
  const query = `
    query {
      pageContentCollection(where: { url: "${url}" }, limit: 1) {
        items {
          url
          heading1
          heroText
          heading2
          paragraph {
          json
        }
          paragraph2 {
          json
        }
          paragraph3 {
          json
        }
          image {
            url
            title
          }
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
    const entry = json.data?.pageContentCollection?.items?.[0];
    if (!entry) return null;

    return { ...entry, imageUrl: entry.image?.url };
  } catch (err) {
    console.error("Fel vid GraphQL-anrop:", err);
    return null;
  }
}

