import { useEffect, useMemo, useState } from "react";

function Typewriter({ messages, text, speed = 80, pause = 1400 }) {
  const phrases = useMemo(() => {
    if (Array.isArray(messages) && messages.length > 0) {
      return messages;
    }

    return [text || ""];
  }, [messages, text]);

  const [displayedText, setDisplayedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const currentMessage = phrases[messageIndex] || "";
    let timeoutId;

    if (displayedText.length < currentMessage.length) {
      timeoutId = setTimeout(() => {
        setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
      }, speed);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayedText("");
        setMessageIndex((currentIndex) => (currentIndex + 1) % phrases.length);
      }, pause);
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, messageIndex, pause, phrases, speed]);

  return (
    <div className="min-h-36 sm:min-h-44">
      <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        {displayedText}
        <span className="ml-1 text-cyan-300">|</span>
      </h1>
    </div>
  );
}

export default Typewriter;
