import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lil' People Builders — Kids Activity Page (Ages 6–10)
// Phase 2: Welcome Hero + Meet Bentley & London section

export default function LilPeopleBuilders() {
  const [bentleyOpen, setBentleyOpen] = useState(false);
  const [londonOpen, setLondonOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "#FFFDF7" }}>
      <Navbar />

      {/* ── WELCOME HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8E7 50%, #F0FAF0 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Decorative background bubbles */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(255, 200, 50, 0.12)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(72, 187, 120, 0.10)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "40%",
            left: "5%",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "rgba(237, 137, 54, 0.08)",
            pointerEvents: "none",
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            {/* Tagline pill */}
            <div
              className="inline-block mb-4 px-5 py-2 rounded-full font-body font-semibold text-sm tracking-widest uppercase"
              style={{
                background: "rgba(237, 137, 54, 0.15)",
                color: "#C05621",
                letterSpacing: "0.12em",
              }}
            >
              We are in the people-building business
            </div>

            {/* Main headline */}
            <h1
              className="font-display font-extrabold leading-tight mb-5"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                color: "#1A4731",
                lineHeight: 1.15,
              }}
            >
              Welcome,{" "}
              <span style={{ color: "#E07B00" }}>Lil'</span>{" "}
              <span style={{ color: "#2B7A4B" }}>People</span>{" "}
              <span style={{ color: "#3B82C4" }}>Builders!</span>
            </h1>

            {/* Warm subheadline */}
            <p
              className="font-body text-xl md:text-2xl mb-5 leading-relaxed"
              style={{ color: "#4A3728" }}
            >
              Hey friend!{" "}
              <span style={{ color: "#3B82C4", fontWeight: 700 }}>Bentley</span>{" "}
              and{" "}
              <span style={{ color: "#2B7A4B", fontWeight: 700 }}>London</span>{" "}
              can't wait to play, learn, and have fun with God's Word with you!
            </p>

            {/* Bible verse */}
            <p
              className="font-body text-base md:text-lg mb-12"
              style={{
                color: "#7B5E3A",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              "Let the little children come to me." — Matthew 19:14
            </p>

            {/* Character photo placeholders */}
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">

              {/* Bentley */}
              <div className="flex flex-col items-center gap-3">
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    border: "6px solid #3B82C4",
                    background: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(59,130,196,0.20)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="40" cy="28" r="18" fill="#93C5FD" />
                    <ellipse cx="40" cy="72" rx="28" ry="20" fill="#93C5FD" />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "10px",
                      color: "#1E40AF",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Photo coming soon
                  </span>
                </div>
                <span className="font-display font-bold text-xl" style={{ color: "#3B82C4" }}>
                  Bentley
                </span>
              </div>

              {/* London */}
              <div className="flex flex-col items-center gap-3">
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    border: "6px solid #2B7A4B",
                    background: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(43,122,75,0.20)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="40" cy="28" r="18" fill="#6EE7B7" />
                    <ellipse cx="40" cy="72" rx="28" ry="20" fill="#6EE7B7" />
                  </svg>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "10px",
                      color: "#065F46",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Photo coming soon
                  </span>
                </div>
                <span className="font-display font-bold text-xl" style={{ color: "#2B7A4B" }}>
                  London
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── MEET BENTLEY & LONDON ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #F0FAF0 0%, #FFFDF7 100%)" }}
      >
        {/* Decorative bubbles */}
        <div aria-hidden="true" style={{ position: "absolute", top: "-40px", right: "-40px", width: "260px", height: "260px", borderRadius: "50%", background: "rgba(59,130,196,0.07)", pointerEvents: "none" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(43,122,75,0.07)", pointerEvents: "none" }} />

        <div className="container relative z-10">

          {/* Section heading */}
          <div className="text-center mb-12">
            <h2
              className="font-display font-extrabold mb-3"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#1A4731" }}
            >
              Meet{" "}
              <span style={{ color: "#3B82C4" }}>Bentley</span>{" "}
              &amp;{" "}
              <span style={{ color: "#2B7A4B" }}>London</span>
            </h2>
            <p className="font-body text-lg" style={{ color: "#7B5E3A", fontStyle: "italic" }}>
              Family brothers, best friends, and your tour guides!
            </p>
          </div>

          {/* Character Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">

            {/* ── BENTLEY CARD ── */}
            <div
              className="rounded-3xl p-8 flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 100%)",
                border: "2.5px solid #93C5FD",
                boxShadow: "0 8px 32px rgba(59,130,196,0.12)",
              }}
            >
              {/* Photo placeholder */}
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  border: "5px solid #3B82C4",
                  background: "linear-gradient(135deg, #BFDBFE 0%, #93C5FD 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  boxShadow: "0 4px 16px rgba(59,130,196,0.25)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <svg width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                  <circle cx="40" cy="28" r="18" fill="#60A5FA" />
                  <ellipse cx="40" cy="72" rx="28" ry="20" fill="#60A5FA" />
                </svg>
                <span style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: "#1E40AF", fontWeight: 700, whiteSpace: "nowrap" }}>
                  Photo soon!
                </span>
              </div>

              {/* Name */}
              <h3 className="font-display font-extrabold text-2xl mb-1" style={{ color: "#3B82C4" }}>
                Bentley
              </h3>

              {/* Role tag */}
              <span
                className="font-body text-xs font-bold px-3 py-1 rounded-full mb-5"
                style={{ background: "rgba(59,130,196,0.15)", color: "#1D4ED8" }}
              >
                The Big Brother · Yorkie
              </span>

              {/* Tap button */}
              <button
                onClick={() => setBentleyOpen(!bentleyOpen)}
                className="font-body font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 mb-4"
                style={{
                  background: bentleyOpen ? "#3B82C4" : "white",
                  color: bentleyOpen ? "white" : "#3B82C4",
                  border: "2px solid #3B82C4",
                  cursor: "pointer",
                  boxShadow: bentleyOpen ? "0 4px 14px rgba(59,130,196,0.35)" : "none",
                }}
              >
                💬 {bentleyOpen ? "Close" : "Tap to hear from Bentley!"}
              </button>

              {/* Speech bubble */}
              {bentleyOpen && (
                <div
                  className="w-full rounded-2xl p-5 mb-5 text-left relative"
                  style={{
                    background: "white",
                    border: "2px solid #BFDBFE",
                    boxShadow: "0 4px 16px rgba(59,130,196,0.10)",
                  }}
                >
                  {/* Bubble tail */}
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "12px solid #BFDBFE" }} />
                  <div style={{ position: "absolute", top: "-9px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "9px solid transparent", borderRight: "9px solid transparent", borderBottom: "11px solid white" }} />
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#1E3A5F" }}>
                    "Heyyy, friend! I'm <strong>BENTLEY</strong> — the BIG brother! I'm a Yorkie and I LOVE snacks. My favorite are Greenies — they brush my teeth AND taste like chicken! I love kids, and I LOVE balls — any kind of ball! Throw one and I'm GONE. When you get a Bible answer right, watch my tail go WILD — that means I'm SO proud of you!"
                  </p>
                </div>
              )}

              {/* Fun fact chips */}
              <div className="flex flex-wrap justify-center gap-2">
                {["🦴 Loves snacks!", "🎾 Loves balls!", "🛁 SPLASHES in the bath!", "🦷 Greenies = clean teeth!"].map(chip => (
                  <span
                    key={chip}
                    className="font-body text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(59,130,196,0.12)", color: "#1D4ED8" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* ── LONDON CARD ── */}
            <div
              className="rounded-3xl p-8 flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(145deg, #F0FDF4 0%, #D1FAE5 100%)",
                border: "2.5px solid #6EE7B7",
                boxShadow: "0 8px 32px rgba(43,122,75,0.12)",
              }}
            >
              {/* Photo placeholder */}
              <div
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  border: "5px solid #2B7A4B",
                  background: "linear-gradient(135deg, #A7F3D0 0%, #6EE7B7 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                  boxShadow: "0 4px 16px rgba(43,122,75,0.25)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <svg width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                  <circle cx="40" cy="28" r="18" fill="#34D399" />
                  <ellipse cx="40" cy="72" rx="28" ry="20" fill="#34D399" />
                </svg>
                <span style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: "#065F46", fontWeight: 700, whiteSpace: "nowrap" }}>
                  Photo soon!
                </span>
              </div>

              {/* Name */}
              <h3 className="font-display font-extrabold text-2xl mb-1" style={{ color: "#2B7A4B" }}>
                London
              </h3>

              {/* Role tag */}
              <span
                className="font-body text-xs font-bold px-3 py-1 rounded-full mb-5"
                style={{ background: "rgba(43,122,75,0.15)", color: "#065F46" }}
              >
                The Lil' Brother · Yorkie
              </span>

              {/* Tap button */}
              <button
                onClick={() => setLondonOpen(!londonOpen)}
                className="font-body font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 mb-4"
                style={{
                  background: londonOpen ? "#2B7A4B" : "white",
                  color: londonOpen ? "white" : "#2B7A4B",
                  border: "2px solid #2B7A4B",
                  cursor: "pointer",
                  boxShadow: londonOpen ? "0 4px 14px rgba(43,122,75,0.35)" : "none",
                }}
              >
                💬 {londonOpen ? "Close" : "Tap to hear from London!"}
              </button>

              {/* Speech bubble */}
              {londonOpen && (
                <div
                  className="w-full rounded-2xl p-5 mb-5 text-left relative"
                  style={{
                    background: "white",
                    border: "2px solid #A7F3D0",
                    boxShadow: "0 4px 16px rgba(43,122,75,0.10)",
                  }}
                >
                  {/* Bubble tail */}
                  <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "10px solid transparent", borderRight: "10px solid transparent", borderBottom: "12px solid #A7F3D0" }} />
                  <div style={{ position: "absolute", top: "-9px", left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "9px solid transparent", borderRight: "9px solid transparent", borderBottom: "11px solid white" }} />
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#064E3B" }}>
                    "Hi sweet friend! I'm <strong>LONDON</strong>. I'm Bentley's lil' brother. I'm a bit more chill than him 😊 I'm a Yorkie too, and I LOVE my squeaky toys (squeak squeak!). I love quiet snuggles, story time, and YES — Greenies for my clean doggy teeth! Warm baths feel so good. Every time you learn something about Jesus, my tail wags too. We're so glad you're here!"
                  </p>
                </div>
              )}

              {/* Fun fact chips */}
              <div className="flex flex-wrap justify-center gap-2">
                {["🧸 Loves squeaky toys!", "📖 Loves story time!", "🛁 Warm baths = best!", "🦷 Greenies are yummy!"].map(chip => (
                  <span
                    key={chip}
                    className="font-body text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(43,122,75,0.12)", color: "#065F46" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── FAMILY BROTHERS CARD ── */}
          <div className="max-w-3xl mx-auto mb-6">
            <div
              className="rounded-3xl p-8"
              style={{
                background: "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)",
                border: "2px solid #BBF7D0",
                boxShadow: "0 4px 20px rgba(43,122,75,0.08)",
              }}
            >
              <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: "#1A4731" }}>
                <span style={{ fontSize: "1.3rem" }}>💛</span>{" "}
                <strong>Family Brothers</strong> — Bentley and London don't have the same mom from when they were born — but they ARE brothers in every way that matters! Family isn't always about who you came from. It's about who loves you, takes care of you, and grows with you. That's what makes a family.
              </p>
            </div>
          </div>

          {/* ── GROOMING REMINDER CARD ── */}
          <div className="max-w-3xl mx-auto mb-6">
            <div
              className="rounded-3xl p-6"
              style={{
                background: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)",
                border: "2px dashed #FCD34D",
                boxShadow: "0 4px 16px rgba(234,179,8,0.10)",
              }}
            >
              <p className="font-body text-base leading-relaxed" style={{ color: "#78350F" }}>
                <span style={{ fontSize: "1.2rem" }}>✨</span>{" "}
                <strong>Did you know?</strong> Bentley and London get brushed every single day — otherwise their long Yorkie hair gets all tangled! Taking care of your body is a way of taking care of God's gift to you.
              </p>
            </div>
          </div>

          {/* ── GRACE CARD ── */}
          <div className="max-w-3xl mx-auto">
            <div
              className="rounded-3xl p-10 text-center"
              style={{
                background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8F0 50%, #FFF5F5 100%)",
                border: "2px solid #FDDCB5",
                boxShadow: "0 8px 32px rgba(234,88,12,0.08)",
              }}
            >
              {/* Heart icon */}
              <div className="flex justify-center mb-5">
                <span style={{ fontSize: "2.5rem", lineHeight: 1, color: "#E5BC4B" }}>♥</span>
              </div>

              {/* Heading */}
              <h3
                className="font-display font-bold mb-5"
                style={{ fontSize: "clamp(1.3rem, 3vw, 1.75rem)", color: "#7C2D12" }}
              >
                Sometimes... we have accidents.
              </h3>

              {/* Paragraph 1 */}
              <p
                className="font-body text-base md:text-lg leading-relaxed mb-5"
                style={{ color: "#4A3728" }}
              >
                Sometimes we have accidents in the house. We feel a little bad about it. But our mom never makes us feel ashamed or embarrassed. She just helps us clean up, gives us a big hug, and reminds us we can do better next time.
              </p>

              {/* Paragraph 2 — bold */}
              <p
                className="font-body text-base md:text-lg leading-relaxed mb-7 font-bold"
                style={{ color: "#7C2D12" }}
              >
                That's how God loves you, too. When you make a mistake, He doesn't get mad and stop loving you. He helps you, hugs you, and helps you try again. You don't have to feel bad about yourself — ever.
              </p>

              {/* Dashed divider */}
              <div style={{ borderTop: "2px dashed #FDDCB5", marginBottom: "20px" }} />

              {/* Closing verse */}
              <p
                className="font-body text-base"
                style={{ color: "#92400E", fontStyle: "italic", fontWeight: 500 }}
              >
                "There is no shame for those who belong to Jesus." — Romans 8:1 💛
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
