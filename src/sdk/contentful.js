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

// Hämta entry via fältet "url"
export const getEntryByUrl = async (url) => {
  try {
    const response = await client.getEntries({
      content_type: "pageContent", 
      "fields.url": url,
      limit: 1,
    });

    return response.items?.[0] || null;
  } catch (error) {
    console.error("Entry fetch by URL error:", error);
    return null;
  }
};

// Extra hjälpfunktion: hämta asset URL från Contentful field
export const getAssetUrl = (asset) => {
  return asset?.fields?.file?.url || "";
};
