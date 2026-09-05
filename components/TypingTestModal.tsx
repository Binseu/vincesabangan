"use client";

import { useState, useRef, useCallback, useEffect } from "react";

const WORD_LIST = [
  "the", "be", "of", "and", "a", "to", "in", "he", "have", "it", "that",
  "for", "they", "I", "with", "as", "not", "on", "she", "at", "by", "this",
  "we", "you", "do", "but", "from", "or", "which", "one", "would", "all",
  "will", "there", "say", "who", "make", "when", "can", "more", "if", "no",
  "man", "out", "other", "so", "what", "time", "up", "go", "about", "than",
  "into", "could", "state", "only", "new", "year", "some", "take", "come",
  "these", "know", "see", "use", "get", "like", "then", "first", "any",
  "work", "now", "may", "such", "give", "over", "think", "most", "even",
  "find", "day", "also", "after", "way", "many", "must", "look", "before",
  "great", "back", "through", "long", "where", "much", "should", "well",
  "people", "down", "own", "just", "because", "good", "each", "those",
  "feel", "seem", "how", "high", "too", "place", "little", "world", "very",
  "still", "nation", "hand", "old", "life", "tell", "write", "become",
  "here", "show", "house", "both", "between", "need", "mean", "call",
  "develop", "under", "last", "right", "move", "thing", "general", "school",
  "never", "same", "another", "begin", "while", "number", "part", "turn",
  "real", "leave", "might", "want", "point", "form", "off", "child", "few",
  "small", "since", "against", "ask", "late", "home", "interest", "large",
  "person", "end", "open", "public", "follow", "during", "present",
  "without", "again", "hold", "govern", "around", "possible", "head",
  "consider", "word", "program", "problem", "however", "lead", "system",
  "set", "order", "eye", "plan", "run", "keep", "face", "fact", "group",
  "play", "stand", "increase", "early", "course", "change", "help", "line"
];

const KEYBOARD_LAYOUT = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
  [" "]
];

export default function TypingTestModal() {
  const [open, setOpen] = useState(false);
  const [targetText, setTargetText] = useState("");
  const [results, setResults] = useState<("" | "correct" | "incorrect")[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [acc, setAcc] = useState(100);
  const [time, setTime] = useState(0);
  const [expectedKey, setExpectedKey] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const errorsRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentIdxRef = useRef(0);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateText = () =>
    Array.from(
      { length: 20 },
      () => WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]
    )
      .join(" ")
      .toLowerCase();

  const initGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const text = generateText();
    setTargetText(text);
    setResults(new Array(text.length).fill(""));
    setCurrentIdx(0);
    currentIdxRef.current = 0;
    errorsRef.current = 0;
    startTimeRef.current = null;
    isPlayingRef.current = true;
    setWpm(0);
    setAcc(100);
    setTime(0);
    setExpectedKey(text[0] || "");
  }, []);

  const startTimer = useCallback(() => {
    if (startTimeRef.current) return;
    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor(
        (Date.now() - (startTimeRef.current as number)) / 1000
      );
      setTime(elapsed);
      if (elapsed > 0) {
        setWpm(Math.round(currentIdxRef.current / 5 / (elapsed / 60)));
      }
    }, 1000);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    isPlayingRef.current = false;
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlayingRef.current) return;

      if (e.key === "Tab") {
        e.preventDefault();
        initGame();
        return;
      }
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key === "Backspace") {
        setCurrentIdx((idx) => {
          if (idx <= 0) return idx;
          const newIdx = idx - 1;
          setResults((prev) => {
            const next = [...prev];
            if (next[newIdx] === "incorrect") errorsRef.current--;
            next[newIdx] = "";
            return next;
          });
          currentIdxRef.current = newIdx;
          setExpectedKey(targetText[newIdx] || "");
          const accuracy =
            newIdx > 0
              ? Math.round(((newIdx - errorsRef.current) / newIdx) * 100)
              : 100;
          setAcc(Math.max(0, accuracy));
          return newIdx;
        });
        return;
      }

      if (e.key.length !== 1) return;
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      e.preventDefault();
      startTimer();

      setCurrentIdx((idx) => {
        if (idx >= targetText.length) return idx;
        const expectedChar = targetText[idx];
        setResults((prev) => {
          const next = [...prev];
          next[idx] = e.key === expectedChar ? "correct" : "incorrect";
          return next;
        });
        if (e.key !== expectedChar) errorsRef.current++;

        const newIdx = idx + 1;
        currentIdxRef.current = newIdx;
        const accuracy = Math.round(
          ((newIdx - errorsRef.current) / newIdx) * 100
        );
        setAcc(Math.max(0, accuracy));

        if (newIdx >= targetText.length) {
          if (timerRef.current) clearInterval(timerRef.current);
          isPlayingRef.current = false;
          setExpectedKey("");
        } else {
          setExpectedKey(targetText[newIdx] || "");
        }
        return newIdx;
      });
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, targetText, initGame, closeModal, startTimer]);

  if (isMobile) {
    return null;
  }

  const openModal = () => {
    setOpen(true);
    initGame();
  };

  return (
    <>
      <button id="playBtn" className="footer-play-btn" onClick={openModal}>
        [Play Side Quest]
      </button>

      {open && (
        <div
          className="modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title">TYPE SPEED // SIDE QUEST</span>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--muted)",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem"
                }}
              >
                ✕ esc close
              </button>
            </div>
            <div className="modal-stats">
              <div className="stat-box">
                <span className="stat-val">{wpm}</span>
                <span className="stat-label">WPM</span>
              </div>
              <div className="stat-box">
                <span className="stat-val">{acc}</span>
                <span className="stat-label">ACC %</span>
              </div>
              <div className="stat-box">
                <span className="stat-val">{time}</span>
                <span className="stat-label">TIME s</span>
              </div>
            </div>
            <div className="typing-area">
              <div className="typing-prompt">
                {targetText.split("").map((c, i) => (
                  <span
                    key={i}
                    className={`${results[i] || ""} ${
                      i === currentIdx ? "active" : ""
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="virtual-keyboard">
              {KEYBOARD_LAYOUT.map((row, ri) => (
                <div className="kb-row" key={ri}>
                  {row.map((key) => (
                    <div
                      key={key}
                      className={`key ${key === " " ? "space" : ""} ${
                        key === expectedKey ? "expected" : ""
                      }`}
                    >
                      {key === " " ? "SPACE" : key}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <span>tab restart</span>
              <span>esc close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
