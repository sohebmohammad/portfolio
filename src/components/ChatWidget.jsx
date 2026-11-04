import { useEffect, useRef, useState } from "react";
import { useChat } from "../hooks/useChat";

const STARTERS = [
  "What are your skills?",
  "Tell me about your experience",
  "What projects have you built?",
];

function BotAvatar() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 text-[10px] font-black text-white">
      MS
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-white/8 bg-white/5 px-3.5 py-3">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, loading, error } = useChat();
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, error]);

  const submit = (text) => {
    const value = (text ?? input).trim();
    if (!value) return;
    sendMessage(value);
    setInput("");
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:scale-105 sm:bottom-6 sm:right-6"
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.17 0-2.286-.2-3.31-.566L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[min(560px,calc(100vh-7rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0d1119] shadow-2xl shadow-black/40 sm:right-6">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 text-xs font-black text-white">
              MS
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">Ask about Soheb</p>
              <p className="flex items-center gap-1.5 text-[11px] text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                AI assistant · usually replies instantly
              </p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div>
                <p className="mono mb-3 text-xs font-medium tracking-widest text-indigo-400 uppercase">
                  Hi there 👋
                </p>
                <p className="text-sm leading-6 text-slate-400">
                  I'm an assistant trained on Soheb's portfolio. Ask me about his skills,
                  experience, or projects.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {STARTERS.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => submit(q)}
                      className="rounded-lg border border-white/8 bg-white/2 px-3 py-2 text-left text-xs text-slate-300 transition-colors hover:border-indigo-500/25 hover:bg-indigo-500/5 hover:text-white"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} gap-2`}>
                {m.role === "bot" && <BotAvatar />}
                <div
                  className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                    m.role === "user"
                      ? "rounded-br-sm bg-indigo-600 text-white"
                      : "rounded-bl-sm border border-white/8 bg-white/5 text-slate-300"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start gap-2">
                <BotAvatar />
                <TypingDots />
              </div>
            )}

            {error && (
              <div className="flex justify-start gap-2">
                <BotAvatar />
                <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-rose-500/20 bg-rose-500/5 px-3.5 py-2.5 text-sm leading-6 text-rose-300">
                  {error}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="flex items-center gap-2 border-t border-white/8 p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={loading}
              className="min-w-0 flex-1 rounded-lg border border-white/8 bg-white/3 px-3 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition-colors focus:border-indigo-500/40 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition-all hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
