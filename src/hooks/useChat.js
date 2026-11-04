import { useCallback, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = useCallback(async (text) => {
    const message = text.trim();
    if (!message || loading) return;

    setError(null);
    setMessages((prev) => [...prev, { role: "user", text: message }]);
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (err) {
      setError(err.message || "Failed to reach the assistant.");
    } finally {
      setLoading(false);
    }
  }, [loading]);

  return { messages, sendMessage, loading, error };
}
