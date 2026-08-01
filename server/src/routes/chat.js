import { Router } from "express";
import { retrieveContext } from "../services/chroma.js";
import { generateAnswer } from "../services/gemini.js";
import { buildPrompt } from "../prompt.js";

const MAX_MESSAGE_LENGTH = 1000;

export const chatRouter = Router();

chatRouter.post("/chat", async (req, res) => {
  const { message } = req.body ?? {};

  if (typeof message !== "string" || !message.trim()) {
    return res.status(400).json({ error: "'message' is required and must be a non-empty string." });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ error: `'message' must be ${MAX_MESSAGE_LENGTH} characters or fewer.` });
  }

  let contextChunks;
  try {
    contextChunks = await retrieveContext(message.trim());
  } catch (err) {
    console.error("[chat] Chroma retrieval failed (query embedding or api.trychroma.com, or huggingface.co model download):", err);
    return res.status(502).json({ error: "Failed to generate a reply. Please try again." });
  }

  try {
    const prompt = buildPrompt({ question: message.trim(), contextChunks });
    const reply = await generateAnswer(prompt);
    res.json({ reply });
  } catch (err) {
    console.error("[chat] Gemini generation failed (generativelanguage.googleapis.com):", err);
    res.status(502).json({ error: "Failed to generate a reply. Please try again." });
  }
});
