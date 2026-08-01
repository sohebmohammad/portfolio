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

  try {
    const contextChunks = await retrieveContext(message.trim());
    const prompt = buildPrompt({ question: message.trim(), contextChunks });
    const reply = await generateAnswer(prompt);

    res.json({ reply });
  } catch (err) {
    console.error("[chat] failed:", err);
    res.status(502).json({ error: "Failed to generate a reply. Please try again." });
  }
});
