import { CloudClient } from "chromadb";
import { config } from "../config.js";

let client;
let collectionPromise;

function getClient() {
  if (!client) {
    client = new CloudClient({
      host: config.chroma.host,
      apiKey: config.chroma.apiKey,
      tenant: config.chroma.tenant,
      database: config.chroma.database,
    });
  }
  return client;
}

// Cached so we don't re-resolve the embedding function on every request.
function getCollection() {
  if (!collectionPromise) {
    collectionPromise = getClient().getOrCreateCollection({
      name: config.chroma.collection,
    });
  }
  return collectionPromise;
}

/**
 * Retrieves the `topK` document chunks most relevant to `query`.
 * @returns {Promise<{ document: string, distance: number }[]>}
 */
export async function retrieveContext(query, topK = 5) {
  const collection = await getCollection();
  const result = await collection.query({
    queryTexts: [query],
    nResults: topK,
    include: ["documents", "distances"],
  });

  const documents = result.documents?.[0] ?? [];
  const distances = result.distances?.[0] ?? [];

  return documents
    .map((document, i) => ({ document, distance: distances[i] }))
    .filter((chunk) => chunk.document);
}

export { getCollection };
