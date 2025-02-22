import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { base64String } = req.body;

    if (!base64String) {
      res.status(400).json({ error: "Invalid image data" });
      return;
    }

    const apiKey = "AIzaSyAYpJp4VqKOZtm291dQk7It29brGgnb4cg";

    try {
      const response = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            requests: [
              {
                image: { content: base64String },
                features: [{ type: "LABEL_DETECTION" }],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("Google Vision API response:", data);

      res.status(200).json({ message: "Image processed successfully", data });
    } catch (error) {
      console.error("Error processing image with Google Vision API:", error);
      res
        .status(500)
        .json({ error: "Failed to process image with Google Vision API" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
