// Recreates InfoCollection (using the Gemini embedding function) and
// populates it from data/portfolio-facts.json.
// Run with: npm run seed
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { getCollection, deleteCollection } from "../src/services/chroma.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const factsPath = path.join(__dirname, "..", "data", "portfolio-facts.json");
  const facts = JSON.parse(await readFile(factsPath, "utf-8"));

  if (!Array.isArray(facts) || facts.length === 0) {
    throw new Error(`No facts found in ${factsPath}`);
  }

  console.log("Deleting existing collection (if any)...");
  await deleteCollection();

  const collection = await getCollection();

  const ids = facts.map((_, i) => `fact-${i}`);
  console.log(`Adding ${facts.length} record(s)...`);
  await collection.add({ ids, documents: facts });

  console.log("Done.");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
