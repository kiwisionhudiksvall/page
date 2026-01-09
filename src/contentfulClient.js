import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export default client;

export const getAssetUrl = (asset) => {
  const url = asset?.fields?.file?.url || "";
  return url.startsWith("//") ? "https:" + url : url;
};
