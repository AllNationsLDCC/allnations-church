import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lil' People Builders — Kids Activity Page (Ages 6–10)
// Phase 3: Welcome Hero + Meet Bentley & London + Bible Trivia Time

// ── TRIVIA DATA ──────────────────────────────────────────────────────────────
const triviaQuestions = [
  {
    question: "How many days did God take to create the world?",
    options: ["3 days", "6 days", "7 days", "10 days"],
    correct: 1,
    feedback: "God created everything in 6 days and rested on the 7th!",
  },
  {
    question: "What big animal swallowed Jonah?",
    options: ["A whale", "A shark", "A big fish", "A dolphin"],
    correct: 2,
    feedback: "The Bible says God sent a great fish to swallow Jonah!",
  },
  {
    question: "How many disciples did Jesus choose?",
    options: ["10", "12", "7", "20"],
    correct: 1,
    feedback: "Jesus chose 12 special friends called disciples.",
  },
  {
    question: "Who was thrown into the lions' den?",
    options: ["Moses", "David", "Daniel", "Joseph"],
    correct: 2,
    feedback: "Daniel prayed to God and the lions did not hurt him!",
  },
  {
    question: "Where was Baby Jesus born?",
    options: ["Jerusalem", "Bethlehem", "Nazareth", "Egypt"],
    correct: 1,
    feedback: "Jesus was born in a little town called Bethlehem!",
  },
  {
    question: "What did David use to defeat Goliath?",
    options: ["A sword", "A spear", "A sling and stone", "A bow"],
    correct: 2,
    feedback: "David trusted God and used just a sling and one stone!",
  },
  {
    question: "What did Jesus do at His first miracle?",
    options: ["Walked on water", "Healed a blind man", "Turned water into wine", "Fed 5,000 people"],
    correct: 2,
    feedback: "Jesus turned water into wine at a wedding!",
  },
  {
    question: "Who led God's people out of Egypt?",
    options: ["Abraham", "Moses", "Joshua", "Aaron"],
    correct: 1,
    feedback: "Moses led the people through the Red Sea to freedom!",
  },
  {
    question: "What is the very first book of the Bible?",
    options: ["Exodus", "Psalms", "Genesis", "Matthew"],
    correct: 2,
    feedback: "Genesis means 'beginning' — it's the first book!",
  },
  {
    question: "How many people were saved on Noah's ark?",
    options: ["8 people", "12 people", "4 people", "2 people"],
    correct: 0,
    feedback: "Noah, his wife, his 3 sons, and their 3 wives — that's 8!",
  },
];

function getResultMessage(score: number) {
  if (score === 10) return { emoji: "🏆", msg: "Perfect Score! Wow! You know God's Word so well! Bentley and London are doing happy dances!" };
  if (score >= 8) return { emoji: "⭐", msg: "Awesome Job! You did great! Keep learning about God — you're amazing!" };
  if (score >= 5) return { emoji: "😊", msg: "Great Try! Good job! Want to play again and learn even more?" };
  return { emoji: "💛", msg: "Keep Going! Every Bible story is a fun adventure. Try again — you'll get more next time!" };
}

// ── TRIVIA COMPONENT ─────────────────────────────────────────────────────────
function BibleTrivia() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const q = triviaQuestions[current];
  const answered = selected !== null;

  function handleSelect(idx: number) {
    if (answered) return;
    setSelected(idx);
    if (idx === q.correct) setScore(s => s + 1);
  }

  function handleNext() {
    if (current + 1 >= triviaQuestions.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnimKey(k => k + 1);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnimKey(k => k + 1);
  }

  // Button color logic
  function btnStyle(idx: number) {
    const base: React.CSSProperties = {
      width: "100%",
      padding: "14px 12px",
      borderRadius: "16px",
      fontSize: "0.95rem",
      fontWeight: 700,
      fontFamily: "inherit",
      cursor: answered ? "default" : "pointer",
      border: "2.5px solid",
      transition: "all 0.25s ease",
      textAlign: "left" as const,
      lineHeight: 1.3,
    };
    if (!answered) {
      return { ...base, background: "white", borderColor: "#D1D5DB", color: "#1A4731" };
    }
    if (idx === q.correct) {
      return { ...base, background: "#D1FAE5", borderColor: "#2B7A4B", color: "#065F46" };
    }
    if (idx === selected) {
      return { ...base, background: "#FEE9D1", borderColor: "#E07B00", color: "#7C2D12" };
    }
    return { ...base, background: "white", borderColor: "#E5E7EB", color: "#9CA3AF" };
  }

  const stars = Math.round(score / 2);
  const result = getResultMessage(score);

  // ── RESULTS SCREEN ──
  if (finished) {
    return (
      <div
        className="rounded-3xl p-10 text-center mx-auto"
        style={{
          maxWidth: "560px",
          background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8E7 100%)",
          border: "2.5px solid #FCD34D",
          boxShadow: "0 8px 40px rgba(234,179,8,0.15)",
        }}
      >
        <div style={{ fontSize: "3.5rem", marginBottom: "8px" }}>{result.emoji}</div>
        <div
          className="font-display font-extrabold mb-2"
          style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", color: "#1A4731" }}
        >
          {score} <span style={{ color: "#E07B00" }}>/</span> 10
        </div>
        <p className="font-body font-bold text-sm mb-5" style={{ color: "#7B5E3A" }}>
          Your Score
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map(i => (
            <span
              key={i}
              style={{
                fontSize: "2rem",
                filter: i <= stars ? "none" : "grayscale(1) opacity(0.3)",
                transition: "all 0.3s ease",
              }}
            >
              ⭐
            </span>
          ))}
        </div>

        <p
          className="font-body text-base leading-relaxed mb-8"
          style={{ color: "#4A3728", fontWeight: 600 }}
        >
          {result.msg}
        </p>

        <button
          onClick={handleRestart}
          className="font-body font-bold text-base px-8 py-3 rounded-full"
          style={{
            background: "#2B7A4B",
            color: "white",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(43,122,75,0.30)",
            letterSpacing: "0.02em",
          }}
        >
          🔄 Play Again!
        </button>
      </div>
    );
  }

  // ── QUESTION SCREEN ──
  return (
    <div
      key={animKey}
      className="rounded-3xl p-8 mx-auto"
      style={{
        maxWidth: "600px",
        background: "white",
        border: "2.5px solid #FDE68A",
        boxShadow: "0 8px 32px rgba(234,179,8,0.12)",
        animation: "bounceIn 0.45s cubic-bezier(0.34,1.56,0.64,1) both",
      }}
    >
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-body font-bold text-xs" style={{ color: "#7B5E3A" }}>
            Question {current + 1} of {triviaQuestions.length}
          </span>
          <span className="font-body font-bold text-xs" style={{ color: "#2B7A4B" }}>
            ✅ {score} correct
          </span>
        </div>
        <div
          style={{
            height: "10px",
            borderRadius: "99px",
            background: "#F3F4F6",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              borderRadius: "99px",
              background: "linear-gradient(90deg, #2B7A4B, #48BB78)",
              width: `${((current) / triviaQuestions.length) * 100}%`,
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>

      {/* Question */}
      <h3
        className="font-display font-bold mb-6 text-center"
        style={{
          fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
          color: "#1A4731",
          lineHeight: 1.35,
        }}
      >
        {q.question}
      </h3>

      {/* Answer grid */}
      <div
        className="grid gap-3 mb-5"
        style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            style={btnStyle(idx)}
          >
            <span
              style={{
                display: "inline-block",
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                background: answered && idx === q.correct
                  ? "#2B7A4B"
                  : answered && idx === selected && idx !== q.correct
                  ? "#E07B00"
                  : "#F3F4F6",
                color: answered && (idx === q.correct || idx === selected) ? "white" : "#9CA3AF",
                fontSize: "0.7rem",
                fontWeight: 800,
                textAlign: "center",
                lineHeight: "22px",
                marginRight: "8px",
                flexShrink: 0,
                verticalAlign: "middle",
              }}
            >
              {["A", "B", "C", "D"][idx]}
            </span>
            {opt}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {answered && (
        <div
          className="rounded-2xl px-5 py-4 mb-5 text-center"
          style={{
            background: selected === q.correct ? "#D1FAE5" : "#FEF3C7",
            border: `2px solid ${selected === q.correct ? "#6EE7B7" : "#FCD34D"}`,
          }}
        >
          <p className="font-body font-bold text-sm" style={{ color: selected === q.correct ? "#065F46" : "#78350F" }}>
            {selected === q.correct
              ? `🎉 Correct! Bentley & London are doing happy dances! ${q.feedback}`
              : `💛 Almost! ${q.feedback}`}
          </p>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <div className="text-center">
          <button
            onClick={handleNext}
            className="font-body font-bold text-sm px-7 py-3 rounded-full"
            style={{
              background: "#3B82C4",
              color: "white",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(59,130,196,0.30)",
              letterSpacing: "0.02em",
            }}
          >
            {current + 1 >= triviaQuestions.length ? "See My Results! 🎉" : "Next Question →"}
          </button>
        </div>
      )}
    </div>
  );
}

// ── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function LilPeopleBuilders() {
  const [bentleyOpen, setBentleyOpen] = useState(false);
  const [londonOpen, setLondonOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#FFFDF7" }}>
      <Navbar />

      {/* Bounce-in keyframe */}
      <style>{`
        @keyframes bounceIn {
          0%   { opacity: 0; transform: scale(0.85) translateY(20px); }
          60%  { opacity: 1; transform: scale(1.03) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      {/* ── WELCOME HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8E7 50%, #F0FAF0 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div aria-hidden="true" style={{ position: "absolute", top: "-60px", right: "-60px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(255,200,50,0.12)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-80px", left: "-80px", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(72,187,120,0.10)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", top: "40%", left: "5%", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(237,137,54,0.08)", pointerEvents: "none" }} />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-5 py-2 rounded-full font-body font-semibold text-sm tracking-widest uppercase" style={{ background: "rgba(237,137,54,0.15)", color: "#C05621", letterSpacing: "0.12em" }}>
              We are in the people-building business
            </div>
            <h1 className="font-display font-extrabold leading-tight mb-5" style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", color: "#1A4731", lineHeight: 1.15 }}>
              Welcome,{" "}
              <span style={{ color: "#E07B00" }}>Lil'</span>{" "}
              <span style={{ color: "#2B7A4B" }}>People</span>{" "}
              <span style={{ color: "#3B82C4" }}>Builders!</span>
            </h1>
            <p className="font-body text-xl md:text-2xl mb-5 leading-relaxed" style={{ color: "#4A3728" }}>
              Hey friend!{" "}
              <span style={{ color: "#3B82C4", fontWeight: 700 }}>Bentley</span>{" "}
              and{" "}
              <span style={{ color: "#2B7A4B", fontWeight: 700 }}>London</span>{" "}
              can't wait to play, learn, and have fun with God's Word with you!
            </p>
            <p className="font-body text-base md:text-lg mb-12" style={{ color: "#7B5E3A", fontStyle: "italic", fontWeight: 500 }}>
              "Let the little children come to me." — Matthew 19:14
            </p>

            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              {/* Bentley */}
              <div className="flex flex-col items-center gap-3">
                <div style={{ width: "160px", height: "160px", borderRadius: "50%", border: "6px solid #3B82C4", background: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(59,130,196,0.20)", overflow: "hidden", position: "relative" }}>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="28" r="18" fill="#93C5FD" /><ellipse cx="40" cy="72" rx="28" ry="20" fill="#93C5FD" /></svg>
                  <span style={{ position: "absolute", bottom: "14px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: "#1E40AF", fontWeight: 600, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>Photo coming soon</span>
                </div>
                <span className="font-display font-bold text-xl" style={{ color: "#3B82C4" }}>Bentley</span>
              </div>
              {/* London */}
              <div className="flex flex-col items-center gap-3">
                <div style={{ width: "160px", height: "160px", borderRadius: "50%", border: "6px solid #2B7A4B", background: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(43,122,75,0.20)", overflow: "hidden", position: "relative" }}>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="28" r="18" fill="#6EE7B7" /><ellipse cx="40" cy="72" rx="28" ry="20" fill="#6EE7B7" /></svg>
                  <span style={{ position: "absolute", bottom: "14px", left: "50%", transform: "translateX(-50%)", fontSize: "10px", color: "#065F46", fontWeight: 600, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>Photo coming soon</span>
                </div>
                <span className="font-display font-bold text-xl" style={{ color: "#2B7A4B" }}>London</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEET BENTLEY & LONDON ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #F0FAF0 0%, #FFFDF7 100%)" }}>
        <div aria-hidden="true" style={{ position: "absolute", top: "-40px", right: "-40px", width: "260px", height: "260px", borderRadius: "50%", background: "rgba(59,130,196,0.07)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(43,122,75,0.07)", pointerEvents: "none" }} />

        <div className="container relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#1A4731" }}>
              Meet <span style={{ color: "#3B82C4" }}>Bentley</span> &amp; <span style={{ color: "#2B7A4B" }}>London</span>
            </h2>
            <p className="font-body text-lg" style={{ color: "#7B5E3A", fontStyle: "italic" }}>
              Family brothers, best friends, and your tour guides!
            </p>
          </div>

          {/* Character Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">

            {/* BENTLEY */}
            <div className="rounded-3xl p-8 flex flex-col items-center text-center" style={{ background: "linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 100%)", border: "2.5px solid #93C5FD", boxShadow: "0 8px 32px rgba(59,130,196,0.12)" }}>
              <div style={{ width: "110px", height: "110px", borderRadius: "50%", border: "5px solid #3B82C4", background: "linear-gradient(135deg, #BFDBFE 0%, #93C5FD 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", boxShadow: "0 4px 16px rgba(59,130,196,0.25)", overflow: "hidden", position: "relative" }}>
                <svg width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="28" r="18" fill="#60A5FA" /><ellipse cx="40" cy="72" rx="28" ry="20" fill="#60A5FA" /></svg>
                <span style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: "#1E40AF", fontWeight: 700, whiteSpace: "nowrap" }}>Photo soon!</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl mb-1" style={{ color: "#3B82C4" }}>Bentley</h3>
              <span className="font-body text-xs font-bold px-3 py-1 rounded-full mb-5" style={{ background: "rgba(59,130,196,0.15)", color: "#1D4ED8" }}>The Big Brother · Yorkie</span>
              <button onClick={() => setBentleyOpen(!bentleyOpen)} className="font-body font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 mb-4" style={{ background: bentleyOpen ? "#3B82C4" : "white", color: bentleyOpen ? "white" : "#3B82C4", border: "2px solid #3B82C4", cursor: "pointer", boxShadow: bentleyOpen ? "0 4px 14px rgba(59,130,196,0.35)" : "none" }}>
                💬 {bentleyOpen ? "Close" : "Tap to hear from Bentley!"}
              </button>
              {bentleyOpen && (
                <div className="w-full rounded-2xl p-5 mb-5 text-left relative" style={{ background: "white", border: "2px solid #BFDBFE", boxShadow: "0 4px 16px rgba(59,130,196,0.10)" }}>
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "12px solid #BFDBFE" }} />
                  <div style={{ position: "absolute", top: "-9px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "9px solid transparent", borderRight: "9px solid transparent", borderBottom: "11px solid white" }} />
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#1E3A5F" }}>
                    "Heyyy, friend! I'm <strong>BENTLEY</strong> — the BIG brother! I'm a Yorkie and I LOVE snacks. My favorite are Greenies — they brush my teeth AND taste like chicken! I love kids, and I LOVE balls — any kind of ball! Throw one and I'm GONE. When you get a Bible answer right, watch my tail go WILD — that means I'm SO proud of you!"
                  </p>
                </div>
              )}
              <div className="flex flex-wrap justify-center gap-2">
                {["🦴 Loves snacks!", "🎾 Loves balls!", "🛁 SPLASHES in the bath!", "🦷 Greenies = clean teeth!"].map(chip => (
                  <span key={chip} className="font-body text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(59,130,196,0.12)", color: "#1D4ED8" }}>{chip}</span>
                ))}
              </div>
            </div>

            {/* LONDON */}
            <div className="rounded-3xl p-8 flex flex-col items-center text-center" style={{ background: "linear-gradient(145deg, #F0FDF4 0%, #D1FAE5 100%)", border: "2.5px solid #6EE7B7", boxShadow: "0 8px 32px rgba(43,122,75,0.12)" }}>
              <div style={{ width: "110px", height: "110px", borderRadius: "50%", border: "5px solid #2B7A4B", background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", boxShadow: "0 4px 16px rgba(43,122,75,0.25)", overflow: "hidden", position: "relative" }}>
                <svg width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true"><circle cx="40" cy="28" r="18" fill="#34D399" /><ellipse cx="40" cy="72" rx="28" ry="20" fill="#34D399" /></svg>
                <span style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: "#065F46", fontWeight: 700, whiteSpace: "nowrap" }}>Photo soon!</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl mb-1" style={{ color: "#2B7A4B" }}>London</h3>
              <span className="font-body text-xs font-bold px-3 py-1 rounded-full mb-5" style={{ background: "rgba(43,122,75,0.15)", color: "#065F46" }}>The Lil' Brother · Yorkie</span>
              <button onClick={() => setLondonOpen(!londonOpen)} className="font-body font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 mb-4" style={{ background: londonOpen ? "#2B7A4B" : "white", color: londonOpen ? "white" : "#2B7A4B", border: "2px solid #2B7A4B", cursor: "pointer", boxShadow: londonOpen ? "0 4px 14px rgba(43,122,75,0.35)" : "none" }}>
                💬 {londonOpen ? "Close" : "Tap to hear from London!"}
              </button>
              {londonOpen && (
                <div className="w-full rounded-2xl p-5 mb-5 text-left relative" style={{ background: "white", border: "2px solid #A7F3D0", boxShadow: "0 4px 16px rgba(43,122,75,0.10)" }}>
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "12px solid #A7F3D0" }} />
                  <div style={{ position: "absolute", top: "-9px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "9px solid transparent", borderRight: "9px solid transparent", borderBottom: "11px solid white" }} />
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#064E3B" }}>
                    "Hi sweet friend! I'm <strong>LONDON</strong>. I'm Bentley's lil' brother. I'm a bit more chill than him 😊 I'm a Yorkie too, and I LOVE my squeaky toys (squeak squeak!). I love quiet snuggles, story time, and YES — Greenies for my clean doggy teeth! Warm baths feel so good. Every time you learn something about Jesus, my tail wags too. We're so glad you're here!"
                  </p>
                </div>
              )}
              <div className="flex flex-wrap justify-center gap-2">
                {["🧸 Loves squeaky toys!", "📖 Loves story time!", "🛁 Warm baths = best!", "🦷 Greenies are yummy!"].map(chip => (
                  <span key={chip} className="font-body text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "rgba(43,122,75,0.12)", color: "#065F46" }}>{chip}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Family Brothers Card */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="rounded-3xl p-8" style={{ background: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)", border: "2px solid #BBF7D0", boxShadow: "0 4px 20px rgba(43,122,75,0.08)" }}>
              <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: "#1A4731" }}>
                <span style={{ fontSize: "1.3rem" }}>💛</span>{" "}
                <strong>Family Brothers</strong> — Bentley and London don't have the same mom from when they were born — but they ARE brothers in every way that matters! Family isn't always about who you came from. It's about who loves you, takes care of you, and grows with you. That's what makes a family.
              </p>
            </div>
          </div>

          {/* Grooming Reminder Card */}
          <div className="max-w-3xl mx-auto mb-6">
            <div className="rounded-3xl p-6" style={{ background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)", border: "2px dashed #FCD34D", boxShadow: "0 4px 16px rgba(234,179,8,0.10)" }}>
              <p className="font-body text-base leading-relaxed" style={{ color: "#78350F" }}>
                <span style={{ fontSize: "1.2rem" }}>✨</span>{" "}
                <strong>Did you know?</strong> Bentley and London get brushed every single day — otherwise their long Yorkie hair gets all tangled! Taking care of your body is a way of taking care of God's gift to you.
              </p>
            </div>
          </div>

          {/* Grace Card */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl p-10 text-center" style={{ background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8F0 50%, #FFF5F5 100%)", border: "2px solid #FDDCB5", boxShadow: "0 8px 32px rgba(234,88,12,0.08)" }}>
              <div className="flex justify-center mb-5">
                <span style={{ fontSize: "2.5rem", lineHeight: 1, color: "#E5BC4B" }}>♥</span>
              </div>
              <h3 className="font-display font-bold mb-5" style={{ fontSize: "clamp(1.3rem, 3vw, 1.75rem)", color: "#7C2D12" }}>
                Sometimes... we have accidents.
              </h3>
              <p className="font-body text-base md:text-lg leading-relaxed mb-5" style={{ color: "#4A3728" }}>
                Sometimes we have accidents in the house. We feel a little bad about it. But our mom never makes us feel ashamed or embarrassed. She just helps us clean up, gives us a big hug, and reminds us we can do better next time.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed mb-7 font-bold" style={{ color: "#7C2D12" }}>
                That's how God loves you, too. When you make a mistake, He doesn't get mad and stop loving you. He helps you, hugs you, and helps you try again. You don't have to feel bad about yourself — ever.
              </p>
              <div style={{ borderTop: "2px dashed #FDDCB5", marginBottom: "20px" }} />
              <p className="font-body text-base" style={{ color: "#92400E", fontStyle: "italic", fontWeight: 500 }}>
                "There is no shame for those who belong to Jesus." — Romans 8:1 💛
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BIBLE TRIVIA TIME ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #FFFDF7 0%, #FFFBEB 100%)" }}
      >
        <div aria-hidden="true" style={{ position: "absolute", top: "-50px", right: "-50px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(234,179,8,0.08)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(237,137,54,0.07)", pointerEvents: "none" }} />

        <div className="container relative z-10">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-3">
              {/* Sunshine yellow badge */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#FCD34D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 14px rgba(234,179,8,0.35)",
                  flexShrink: 0,
                  fontSize: "1.5rem",
                }}
              >
                ❓
              </div>
              <h2
                className="font-display font-extrabold"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#1A4731" }}
              >
                Bible Trivia Time!
              </h2>
            </div>
            <p className="font-body text-lg" style={{ color: "#7B5E3A", fontStyle: "italic" }}>
              Tap your answer — Bentley and London are cheering you on!
            </p>
          </div>

          {/* Trivia game */}
          <BibleTrivia />
        </div>
      </section>

      <Footer />
    </div>
  );
}
