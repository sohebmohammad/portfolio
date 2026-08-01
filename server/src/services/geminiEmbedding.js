import { config } from "../config.js";

const BASE_URL = "https://generativelanguage.googleapis.com/v1beta/models";
const MODEL = "gemini-embedding-001";
const DIMENSIONS = 768;

async function embedBatch(texts, taskType) {
  const url = `${BASE_URL}/${MODEL}:batchEmbedContents`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": config.gemini.apiKey,
    },
    body: JSON.stringify({
      requests: texts.map((text) => ({
        model: `models/${MODEL}`,
        content: { parts: [{ text }] },
        taskType,
        outputDimensionality: DIMENSIONS,
      })),
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Gemini embedding API error (${response.status}): ${body}`);
  }

  const data = await response.json();
  return data.embeddings.map((e) => e.values);
}

/**
 * Chroma EmbeddingFunction backed by Gemini's embedding API, avoiding the
 * local model download (huggingface.co) that Chroma's DefaultEmbeddingFunction
 * requires. Documents and queries are embedded with different task types for
 * better retrieval quality.
 */
export class GeminiEmbeddingFunction {
  name = "gemini-embedding";

  generate(texts) {
    return embedBatch(texts, "RETRIEVAL_DOCUMENT");
  }

  generateForQueries(texts) {
    return embedBatch(texts, "RETRIEVAL_QUERY");
  }

  getConfig() {
    return { model: MODEL, dimensions: DIMENSIONS };
  }

  static buildFromConfig() {
    return new GeminiEmbeddingFunction();
  }

  defaultSpace() {
    return "cosine";
  }
}
