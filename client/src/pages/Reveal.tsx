// All Nations LDCC — Website Reveal Page
// Dramatic, elegant, cinematic reveal for Sunday service
// Works on LED screens, Facebook Live, YouTube Live — fully self-running
// No interaction required — plays automatically on load

import { useEffect, useState } from "react";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/AllNationsNew2026LOGO_a1987fb4.jpg";
const SITE_URL = "allnationsldcc.org";

type Phase =
  | "black"
  | "particles"
  | "tagline1"
  | "tagline2"
  | "logo-in"
  | "logo-hold"
  | "site-reveal"
  | "final";

export default function Reveal() {
  const [phase, setPhase] = useState<Phase>("black");

  useEffect(() => {
    // Cinematic timeline
    const timeline: [Phase, number][] = [
      ["black", 800],
      ["particles", 1800],
      ["tagline1", 3200],
      ["tagline2", 5200],
      ["logo-in", 7400],
      ["logo-hold", 9800],
      ["site-reveal", 12500],
      ["final", 16000],
    ];

    const timers = timeline.map(([p, delay]) =>
      setTimeout(() => setPhase(p), delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const show = (...phases: Phase[]) => phases.includes(phase);

  return (
    <div
      className="fixed inset-0 overflow-hidden select-none"
      style={{
        background: "#000",
        fontFamily: "Georgia, 'Times New Roman', serif",
        cursor: "none",
      }}
    >
      {/* ── Animated radial glow background ── */}
      <div
        className="absolute inset-0 transition-opacity duration-[3000ms]"
        style={{
          opacity: show("particles", "tagline1", "tagline2", "logo-in", "logo-hold", "site-reveal", "final") ? 1 : 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.12) 0%, rgba(10,22,40,0.6) 50%, #000 100%)",
        }}
      />

      {/* ── Gold particle shimmer lines ── */}
      {show("particles", "tagline1", "tagline2", "logo-in", "logo-hold", "site-reveal", "final") && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${5 + i * 5.2}%`,
                top: 0,
                width: "1px",
                height: "100%",
                background: `linear-gradient(to bottom, transparent 0%, rgba(201,168,76,${0.04 + (i % 4) * 0.03}) 40%, rgba(201,168,76,${0.08 + (i % 3) * 0.04}) 60%, transparent 100%)`,
                animation: `shimmer ${3 + (i % 5) * 0.7}s ease-in-out infinite`,
                animationDelay: `${i * 0.18}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Tagline 1: "35 Years in the Making" ── */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-[1200ms]"
        style={{
          opacity: show("tagline1", "tagline2") ? 1 : 0,
          transform: show("tagline1", "tagline2") ? "translateY(0)" : "translateY(30px)",
        }}
      >
        <div className="text-center px-8">
          <p
            className="text-lg md:text-2xl tracking-[0.5em] uppercase"
            style={{ color: "rgba(201,168,76,0.7)", letterSpacing: "0.5em" }}
          >
            35 Years in the Making
          </p>
        </div>
      </div>

      {/* ── Tagline 2: "Something New Has Come" ── */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-all duration-[1400ms]"
        style={{
          opacity: show("tagline2") ? 1 : 0,
          transform: show("tagline2") ? "translateY(0)" : "translateY(40px)",
        }}
      >
        <div className="text-center px-8">
          <p
            className="text-3xl md:text-5xl font-bold"
            style={{ color: "#fff", letterSpacing: "0.05em" }}
          >
            Something New Has Come.
          </p>
        </div>
      </div>

      {/* ── LOGO REVEAL ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-[2000ms]"
        style={{
          opacity: show("logo-in", "logo-hold", "site-reveal", "final") ? 1 : 0,
          transform: show("logo-in", "logo-hold", "site-reveal", "final") ? "scale(1)" : "scale(0.7)",
        }}
      >
        {/* Gold ring pulse behind logo */}
        <div
          className="absolute rounded-full"
          style={{
            width: "420px",
            height: "420px",
            background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)",
            animation: show("logo-hold", "site-reveal", "final") ? "pulse-ring 2.5s ease-in-out infinite" : "none",
          }}
        />

        {/* Logo image */}
        <img
          src={LOGO}
          alt="All Nations Life Development Christian Center"
          className="relative z-10"
          style={{
            width: "min(380px, 70vw)",
            height: "auto",
            filter: show("logo-hold", "site-reveal", "final")
              ? "drop-shadow(0 0 60px rgba(201,168,76,0.5)) drop-shadow(0 0 120px rgba(201,168,76,0.25))"
              : "drop-shadow(0 0 20px rgba(201,168,76,0.2))",
            transition: "filter 1.5s ease",
          }}
        />
      </div>

      {/* ── SITE REVEAL TEXT ── */}
      <div
        className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-16 transition-all duration-[1800ms]"
        style={{
          opacity: show("site-reveal", "final") ? 1 : 0,
          transform: show("site-reveal", "final") ? "translateY(0)" : "translateY(50px)",
        }}
      >
        <div
          className="w-24 h-px mb-8"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.8), transparent)" }}
        />
        <p
          className="text-sm tracking-[0.4em] uppercase mb-3"
          style={{ color: "rgba(201,168,76,0.7)" }}
        >
          Introducing Our New Website
        </p>
        <p
          className="text-2xl md:text-4xl font-bold tracking-wide"
          style={{ color: "#fff" }}
        >
          {SITE_URL}
        </p>
        <p
          className="text-base mt-3 tracking-widest"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Love the Word. Learn the Word. Live by the Word.
        </p>
      </div>

      {/* ── FINAL: Full gold border frame ── */}
      <div
        className="absolute inset-4 pointer-events-none transition-all duration-[2000ms]"
        style={{
          opacity: show("final") ? 1 : 0,
          border: "1px solid rgba(201,168,76,0.3)",
          borderRadius: "4px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-[2000ms]"
        style={{
          opacity: show("final") ? 1 : 0,
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(201,168,76,0.06) 100%)",
        }}
      />

      {/* ── CSS Keyframes injected inline ── */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.05); }
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.12); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
