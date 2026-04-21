import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Star, Users, Heart, Compass, CheckCircle } from "lucide-react";

// ── Real seniors group photo already on the site ──────────────────────────────
const SENIORS_GROUP = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/SwtSoexqTqMfStQI.jpeg";

// ── Gallery placeholders — replace with real photos when ready ────────────────
const GALLERY: { url: string; caption: string }[] = [
  { url: SENIORS_GROUP, caption: "Gold & Silver — All Nations Family" },
  { url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", caption: "Fellowship & Fun" },
  { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80", caption: "Community Gathering" },
  { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80", caption: "Shared Moments" },
];

const PILLARS = [
  {
    icon: <Star size={28} />,
    title: "Faith That Stays Strong",
    desc: "Rooted in the Word, growing deeper every season of life.",
    color: "var(--an-gold)",
  },
  {
    icon: <Users size={28} />,
    title: "Fellowship That Feels Real",
    desc: "Authentic relationships built on shared faith and genuine care.",
    color: "var(--an-teal)",
  },
  {
    icon: <Heart size={28} />,
    title: "Fun That Keeps Life Full",
    desc: "Outings, events, and gatherings that bring joy and laughter.",
    color: "var(--an-orange)",
  },
  {
    icon: <Compass size={28} />,
    title: "Purpose That Keeps Moving",
    desc: "Continuing to serve, contribute, and make a meaningful impact.",
    color: "var(--an-green)",
  },
];

const DIFFERENTIATORS = [
  "Active and engaging environment",
  "Open to mature men and women",
  "Balance of faith, fun, and fellowship",
  "Meaningful events and outings",
  "Community-centered and relational",
];

export default function GoldAndSilver() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <div
        className="page-hero relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #1a2a4a 60%, #2d1a3e 100%)",
          minHeight: 420,
        }}
      >
        {/* Subtle gold shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(197,157,47,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="container relative z-10 text-center py-20">
          <span
            className="section-label"
            style={{ color: "var(--an-gold)", letterSpacing: "0.18em" }}
          >
            All Nations Life Development Christian Center
          </span>
          <h1
            className="font-display text-5xl font-bold text-white mt-3 mb-4"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}
          >
            Gold &amp; Silver Ministry
          </h1>
          <p
            className="font-body text-xl max-w-2xl mx-auto mb-8"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Active. Engaged. Living Fully — At Every Stage.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/connect"
              className="btn-gold px-8 py-3 font-display font-bold text-base"
            >
              Join the Ministry
            </a>
            <a
              href="/events"
              className="px-8 py-3 font-display font-bold text-base rounded"
              style={{
                border: "2px solid rgba(255,255,255,0.55)",
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              Attend the Next Event
            </a>
          </div>
        </div>
      </div>

      {/* ── Scripture Banner ─────────────────────────────────────────────────── */}
      <section className="py-10 px-4" style={{ background: "var(--an-gold)" }}>
        <div className="container text-center">
          <p
            className="font-display text-xl font-semibold"
            style={{ color: "#0a1628" }}
          >
            "They shall still bear fruit in old age; they shall be fresh and flourishing."
          </p>
          <p
            className="font-body text-sm mt-1"
            style={{ color: "rgba(10,22,40,0.72)" }}
          >
            Psalm 92:14
          </p>
        </div>
      </section>

      {/* ── Intro ────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="container max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Group photo */}
            <div className="flex-shrink-0 w-full lg:w-80">
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  border: "3px solid var(--an-gold)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                }}
              >
                <img
                  src={SENIORS_GROUP}
                  alt="Gold & Silver Ministry — All Nations"
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </div>
            {/* Text */}
            <div className="flex-1">
              <span
                className="section-label"
                style={{ color: "var(--an-gold)" }}
              >
                Our Ministry
              </span>
              <h2
                className="font-display text-3xl font-bold mt-2 mb-5"
                style={{ color: "var(--an-navy)" }}
              >
                Purpose Doesn't Pause
              </h2>
              <p
                className="font-body text-base leading-relaxed mb-4"
                style={{ color: "var(--an-text-muted)" }}
              >
                At All Nations Life Development Christian Center, we don't believe in putting purpose on pause.
              </p>
              <p
                className="font-body text-base leading-relaxed mb-4"
                style={{ color: "var(--an-text-muted)" }}
              >
                The Gold &amp; Silver Ministry is a vibrant, active community for mature men and women who are still moving, still growing, and still enjoying life to the fullest. This is a season to stay connected, stay active, and continue living with faith, joy, and purpose.
              </p>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: "var(--an-text-muted)" }}
              >
                Gold &amp; Silver Ministry is designed for mature adults who are still fully engaged in life and open to meaningful connection — a place for men and women to come together in faith, fellowship, and fun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Pillars ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span
              className="section-label"
              style={{ color: "var(--an-gold)" }}
            >
              Core Experience
            </span>
            <h2
              className="font-display text-3xl font-bold mt-2"
              style={{ color: "var(--an-navy)" }}
            >
              What You'll Find Here
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl text-center"
                style={{
                  background: "#fff",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${p.color}22`, color: p.color }}
                >
                  {p.icon}
                </div>
                <h3
                  className="font-display font-bold text-base mb-2"
                  style={{ color: "var(--an-navy)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-body text-sm"
                  style={{ color: "var(--an-text-muted)" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ──────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="container max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="flex-1">
              <span
                className="section-label"
                style={{ color: "var(--an-gold)" }}
              >
                Why Gold &amp; Silver
              </span>
              <h2
                className="font-display text-3xl font-bold mt-2 mb-6"
                style={{ color: "var(--an-navy)" }}
              >
                What Makes This Ministry Different
              </h2>
              <ul className="space-y-4">
                {DIFFERENTIATORS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "var(--an-gold)" }}
                    />
                    <span
                      className="font-body text-base"
                      style={{ color: "var(--an-text-muted)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Quote card */}
            <div
              className="flex-shrink-0 w-full lg:w-72 rounded-2xl p-8 text-center"
              style={{ background: "var(--an-navy)" }}
            >
              <p
                className="font-display text-lg font-semibold italic mb-4"
                style={{ color: "var(--an-gold)" }}
              >
                "Life, Fellowship, and Enjoyment Together"
              </p>
              <p
                className="font-body text-sm"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Gold &amp; Silver Ministry is about more than attending church — it is about building community and enjoying life together through gatherings, outings, and shared experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span
              className="section-label"
              style={{ color: "var(--an-gold)" }}
            >
              Photo Gallery
            </span>
            <h2
              className="font-display text-3xl font-bold mt-2"
              style={{ color: "var(--an-navy)" }}
            >
              Moments in Motion
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY.map((photo, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl cursor-pointer"
                style={{
                  boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                  border: "2px solid transparent",
                  transition: "border-color 0.2s",
                }}
                onClick={() => setLightbox(i)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "var(--an-gold)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "transparent")
                }
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #1a2a4a 100%)",
        }}
      >
        <div className="container max-w-2xl">
          <span
            className="section-label"
            style={{ color: "var(--an-gold)" }}
          >
            Get Involved
          </span>
          <h2
            className="font-display text-3xl font-bold text-white mt-3 mb-4"
          >
            Stay Active. Stay Connected. Stay Encouraged.
          </h2>
          <p
            className="font-body text-base mb-8"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            The Gold &amp; Silver Ministry welcomes every mature man and woman ready to live fully, grow faithfully, and enjoy every season of life.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/connect"
              className="btn-gold px-8 py-3 font-display font-bold text-base"
            >
              Join the Ministry
            </a>
            <a
              href="/events"
              className="px-8 py-3 font-display font-bold text-base rounded"
              style={{
                border: "2px solid rgba(255,255,255,0.55)",
                color: "#fff",
                background: "rgba(255,255,255,0.08)",
              }}
            >
              Attend the Next Event
            </a>
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.88)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-2xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY[lightbox].url}
              alt={GALLERY[lightbox].caption}
              className="w-full rounded-xl"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
            <p
              className="text-center mt-3 font-body text-sm"
              style={{ color: "rgba(255,255,255,0.78)" }}
            >
              {GALLERY[lightbox].caption}
            </p>
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold w-9 h-9 flex items-center justify-center rounded-full"
              style={{ background: "rgba(0,0,0,0.5)" }}
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
