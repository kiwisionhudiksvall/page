import { createClient } from "contentful";

const client = createClient({
  space: "pxok2zrh6jgc",
  accessToken: "FXtkQ7bgte1j2AuzkClRSZYful0foPGmBqXebQap0JE",
});

// Hämta alla entries av en viss content type
export const getEntries = async (contentType) => {
  try {
    const response = await client.getEntries({ content_type: contentType });
    return response.items || [];
  } catch (error) {
    console.error("Contentful fetch error:", error);
    return [];
  }
};

// Hämta en entry via ID
export const getEntryById = async (id) => {
  try {
    const entry = await client.getEntry(id);
    return entry || null;
  } catch (error) {
    console.error("Entry fetch error:", error);
    return null;
  }
};

// Hämta entry via fältet "url" sen "slug"
export const getEntryByUrl = async (path) => {
  try {
    // Rensa bort eventuellt inledande snedstreck
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;

    // Försök först hämta på "url"
    let response = await client.getEntries({
      content_type: "pageContent",
      "fields.url[in]": [path, cleanPath],
      limit: 1,
      include: 10,
    });

    // Om ingen träff → försök på "slug"
    if (!response.items?.length) {
      response = await client.getEntries({
        content_type: "pageContent",
        "fields.slug[in]": [path, cleanPath],
        limit: 1,
        include: 10,
      });
    }

    return response.items?.[0] || null;
  } catch (error) {
    console.error("Entry fetch by URL/Slug error:", error);
    return null;
  }
};


// Extra hjälpfunktion: hämta asset URL från Contentful field
export const getAssetUrl = (asset) => {
  const url = asset?.fields?.file?.url || "";
  return url.startsWith("//") ? "https:" + url : url;
};

export async function getCarousel(id) {
  const entry = await client.getEntry(id, {
    include: 2, // hämtar även card-referenser
  });
  return entry.fields;
};