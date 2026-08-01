# Portfolio backend

Express API powering the portfolio chatbot: retrieves relevant context from a
Chroma Cloud collection and generates an answer with Google Gemini.

## Setup

```bash
cd server
npm install
cp .env.example .env   # then fill in the values below
```

Fill in `.env`:

- `CHROMA_API_KEY`, `CHROMA_TENANT`, `CHROMA_DATABASE` — from your Chroma
  Cloud dashboard connection settings.
- `CHROMA_COLLECTION` — defaults to `InfoCollection`, the collection you
  already created (embedding function: `all-MiniLM-L6-v2` / default).
- `GEMINI_API_KEY` — a free key from https://aistudio.google.com/apikey.
  **Rotate any key that was ever pasted into a chat, ticket, or screenshot —
  treat it as compromised.**
- `CORS_ORIGIN` — the origin your frontend runs on (defaults to the Vite dev
  server, `http://localhost:5173`).

Never commit `.env` — it's already gitignored.

## Run

```bash
npm run dev     # auto-restarts on changes
npm start        # plain node
```

Server listens on `http://localhost:3001` by default.

- `GET /api/health` — health check.
- `POST /api/chat` — body `{ "message": "..." }`, returns `{ "reply": "..." }`.

## Seed / reset the Chroma collection

`data/portfolio-facts.json` is the editable source of truth for what the
chatbot knows about you — edit it with your real, complete facts before
seeding (the current file only has what's visible from your existing DB
records; expand it).

```bash
npm run seed
```

This deletes everything currently in `InfoCollection` (including old test
rows like "hello world") and re-adds the facts from that file with clean,
deterministic IDs. Re-run it any time the facts file changes.

## Notes

- The embedding function (`@chroma-core/default-embed`, matching the
  collection's `all-MiniLM-L6-v2`) runs locally in Node via `onnxruntime` /
  `transformers.js`. On first use it downloads the model (~90MB) from
  Hugging Face, so the machine running this server needs outbound network
  access to `huggingface.co`, not just to Chroma/Gemini. After the first
  request it's cached locally and subsequent embeddings are fast.
- This only adds backend code — no frontend files were touched. Wiring a
  chat UI up to `POST /api/chat` is a separate follow-up.
