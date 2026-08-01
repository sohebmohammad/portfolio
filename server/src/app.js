import express from "express";
import cors from "cors";
import { config } from "./config.js";
import { chatRouter } from "./routes/chat.js";

export const app = express();

app.use(cors({ origin: config.corsOrigin }));
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api", chatRouter);

app.use((_req, res) => res.status(404).json({ error: "Not found" }));
