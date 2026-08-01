export function buildPrompt({ question, contextChunks }) {
  const context = contextChunks.length
    ? contextChunks.map((c, i) => `[${i + 1}] ${c.document}`).join("\n")
    : "(no relevant context found)";

  return `You are the portfolio chatbot for Soheb Mohammad, answering visitors' questions on his behalf in first person ("I").
Answer ONLY using the context below. If the context doesn't contain the answer, say you don't have that information rather than guessing.
Keep answers concise (2-4 sentences) and friendly.

Context:
${context}

Question: ${question}

Answer:`;
}
