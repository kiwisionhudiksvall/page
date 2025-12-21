import express from "express";
import bodyParser from "body-parser";
import { createClient } from "contentful-management";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(bodyParser.json());

const contentfulClient = createClient({
  accessToken: import.meta.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const space = await contentfulClient.getSpace(import.meta.env.CONTENTFUL_SPACE_ID);
    const env = await space.getEnvironment("master");

    const entry = await env.createEntry("contactSubmission", {
      fields: {
        name: { "en-US": name },
        email: { "en-US": email },
        message: { "en-US": message },
        submittedAt: { "en-US": new Date().toISOString() },
      },
    });

    await entry.publish();
    res.status(200).json({ success: true, message: "Tack för ditt meddelande!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Något gick fel." });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5173/"));
