import { config } from "../config.js";

const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";

/**
 * Sends a single-turn prompt to Gemini and returns the generated text.
 */
export async function generateAnswer(prompt) {
  const url = `${BASE_URL}/${config.gemini.model}:generateContent`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": config.gemini.apiKey,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Gemini API error (${response.status}): ${body}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ?? "";

  if (!text) {
    throw new Error("Gemini API returned no text in response");
  }

  return text.trim();
}
