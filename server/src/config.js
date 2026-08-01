import "dotenv/config";

function required(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const config = {
  port: Number(process.env.PORT) || 3001,
  corsOrigin: process.env.CORS_ORIGIN || "*",

  chroma: {
    host: process.env.CHROMA_HOST || "api.trychroma.com",
    apiKey: required("CHROMA_API_KEY"),
    tenant: required("CHROMA_TENANT"),
    database: required("CHROMA_DATABASE"),
    collection: process.env.CHROMA_COLLECTION || "InfoCollection",
  },

  gemini: {
    apiKey: required("GEMINI_API_KEY"),
    model: process.env.GEMINI_MODEL || "gemini-flash-latest",
  },
};
