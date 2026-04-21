// Legacy of Love — Couples Ministry
// All Nations Life Development Christian Center

import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ArrowRight, X, MessageCircle, Flame, Crown, Shield, Users, CheckCircle } from "lucide-react";

// ── Real couple photos from All Nations LDCC ─────────────────────────────────
const galleryPhotos = [
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/XTmMVyyHkYLFHOKB.jpg", caption: "Lady Carol & Minister Mike Byrd", sub: "Pillars of Faith & Family" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/HCIJXpNVUdOjliMw.jpg", caption: "Lady Carol & Minister Mike Byrd", sub: "A Legacy of Love" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ZJgwXJAXDxKgSFsm.jpg", caption: "Khalil & Alish Virgo", sub: "Love That Grows in Faith" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/nnwQAnjlyvKkUXQS.jpg", caption: "Isacc & Constance", sub: "Together in Purpose" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/wOGyQVKEhWjuLygw.jpg", caption: "The Byrds & The Blakes", sub: "Family, Faith & Fellowship" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ElobqGlQcWEnMPMz.jpg", caption: "The Ladies of All Nations", sub: "Strength, Grace & Sisterhood" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/YDhSfviQNOZPbxjl.jpg", caption: "Minister Jimmie & Sister Sandy Dixon", sub: "Faithful Servants of the Lord" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/scumGTafBtXjMTos.jpg", caption: "Ministers Ann Marie & Desmond Bryan", sub: "United in Ministry & Marriage" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/CqpMocmSrDGrNGGj.jpg", caption: "Ministers Debbie & Michael Wright", sub: "Walking Together in the Word" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/hzGEvnloyrNwctPH.jpg", caption: "Pastor R.B. Thomas & Sister Mary Thomas", sub: "A Lifetime of Kingdom Service" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/pKNWqoHLSkVBRKJY.jpg", caption: "Visiting Couple", sub: "Welcome to the All Nations Family" },
];

// ── Leadership photos — replace with real photos when ready ──────────────────
const LEADER_MIKE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/XTmMVyyHkYLFHOKB.jpg";
const LEADER_CAROL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/HCIJXpNVUdOjliMw.jpg";

const FOCUS_AREAS = [
  {
    icon: <MessageCircle size={28} />,
    title: "Communication That Connects",
    desc: "Learn to speak and listen in ways that build bridges, not walls.",
    color: "var(--an-teal)",
  },
  {
    icon: <Heart size={28} />,
    title: "Emotional Intimacy That Heals",
    desc: "Rediscover the emotional closeness that strengthens your bond.",
    color: "var(--an-orange)",
  },
  {
    icon: <Flame size={28} />,
    title: "Spiritual Alignment That Sustains",
    desc: "Build your marriage on a foundation that outlasts every storm.",
    color: "var(--an-gold)",
  },
  {
    icon: <Crown size={28} />,
    title: "Legacy Thinking That Multiplies",
    desc: "Create a marriage that blesses not just you, but generations to come.",
    color: "var(--an-green)",
  },
];

const DIFFERENTIATORS = [
  { icon: <Users size={20} />, text: "Interactive and engaging sessions" },
  { icon: <CheckCircle size={20} />, text: "Practical tools for real-life application" },
  { icon: <Heart size={20} />, text: "Focus on real relationship growth" },
  { icon: <Shield size={20} />, text: "Safe and supportive environment" },
];

export default function LegacyOfLove() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + galleryPhotos.length) % galleryPhotos.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % galleryPhotos.length : null));

  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1a3a 0%, #1A2F6B 55%, #2a1a0a 100%)" }}
      >
        {/* Background photo from gallery */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${galleryPhotos[4].url})`,
            opacity: 0.18,
          }}
        />
        {/* Gold accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "var(--an-gold)" }} />

        <div className="relative z-10 container py-24">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-6"
              style={{ background: "rgba(197,157,47,0.18)", color: "var(--an-gold)", border: "1px solid rgba(197,157,47,0.35)" }}
            >
              <Heart size={12} fill="currentColor" /> All Nations LDCC Ministry
            </span>

            <h1
              className="font-display font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#fff" }}
            >
              Legacy of Love<br />
              <span style={{ color: "var(--an-gold)", fontStyle: "italic" }}>Couples Ministry</span>
            </h1>

            <p
              className="font-body text-lg mb-8 max-w-xl"
              style={{ color: "rgba(255,255,255,0.80)", lineHeight: 1.7 }}
            >
              Where Covenant is Strengthened, Love is Restored, and Legacy is Built
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/connect" className="btn-gold inline-flex items-center justify-center gap-2 text-base px-8 py-3">
                <Heart size={16} fill="currentColor" />
                Join the Movement
              </Link>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-body font-semibold text-sm"
                style={{ border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff", background: "rgba(255,255,255,0.06)" }}
              >
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative rings */}
        <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full opacity-10 hidden lg:block"
          style={{ border: "2px solid var(--an-gold)", transform: "translate(30%, -50%)" }} />
        <div className="absolute right-0 top-1/2 w-64 h-64 rounded-full opacity-10 hidden lg:block"
          style={{ border: "2px solid var(--an-gold)", transform: "translate(20%, -50%)" }} />
      </section>

      {/* ===== INTRO ===== */}
      <section id="about" className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label mb-4 block">Our Foundation</span>
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--an-navy)" }}
            >
              Marriage is{" "}
              <span style={{ color: "var(--an-gold)", fontStyle: "italic" }}>Kingdom Infrastructure</span>
            </h2>
            <p className="font-body text-base mb-5" style={{ color: "#4a4a4a", lineHeight: 1.85 }}>
              At All Nations Life Development Christian Center, we believe marriage is kingdom infrastructure.
            </p>
            <p className="font-body text-base" style={{ color: "#4a4a4a", lineHeight: 1.85 }}>
              The Legacy of Love Couples Ministry, led by{" "}
              <strong style={{ color: "var(--an-navy)" }}>Pastor Mike Byrd and Lady Carol Byrd</strong>, is designed to help couples move from simply existing together to{" "}
              <em>thriving together with purpose</em>. This ministry focuses on building strong, God-centered marriages through practical teaching, spiritual alignment, and intentional growth.
            </p>
          </div>
        </div>
      </section>

      {/* ===== LEADERSHIP ===== */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block">Leadership</span>
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--an-navy)" }}>
              Meet the Leaders
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="flex gap-6 flex-shrink-0">
              {/* Pastor Mike */}
              <div className="text-center">
                <div
                  className="w-44 h-44 rounded-full mx-auto mb-3 overflow-hidden"
                  style={{ border: "3px solid var(--an-gold)" }}
                >
                  <img src={LEADER_MIKE} alt="Pastor Mike Byrd" className="w-full h-full object-cover object-top" />
                </div>
                <div className="font-display font-bold text-sm" style={{ color: "var(--an-navy)" }}>Pastor Mike Byrd</div>
                <div className="font-body text-xs" style={{ color: "var(--an-gold)" }}>Ministry Leader</div>
              </div>
              {/* Lady Carol */}
              <div className="text-center">
                <div
                  className="w-44 h-44 rounded-full mx-auto mb-3 overflow-hidden"
                  style={{ border: "3px solid var(--an-gold)" }}
                >
                  <img src={LEADER_CAROL} alt="Lady Carol Byrd" className="w-full h-full object-cover object-top" />
                </div>
                <div className="font-display font-bold text-sm" style={{ color: "var(--an-navy)" }}>Lady Carol Byrd</div>
                <div className="font-body text-xs" style={{ color: "var(--an-gold)" }}>Ministry Co-Leader</div>
              </div>
            </div>

            <div className="flex-1">
              <p className="font-body text-base mb-4" style={{ color: "#4a4a4a", lineHeight: 1.85 }}>
                Pastor Mike Byrd and Lady Carol Byrd bring{" "}
                <strong style={{ color: "var(--an-navy)" }}>decades of experience</strong> in marriage ministry and relationship development. Their approach combines biblical principles with real-life application, helping couples strengthen communication, rebuild emotional connection, and create lasting unity.
              </p>
              <p className="font-body text-base" style={{ color: "#4a4a4a", lineHeight: 1.85 }}>
                Together, they have walked alongside countless couples — through seasons of joy and seasons of struggle — with wisdom, grace, and an unwavering commitment to covenant love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUR PILLARS ===== */}
      <section className="py-20" style={{ background: "var(--an-navy)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label mb-3 block" style={{ color: "var(--an-gold)" }}>What We Focus On</span>
            <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              Four Pillars of a Thriving Marriage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOCUS_AREAS.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl p-7 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderTop: `3px solid ${area.color}`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${area.color}22`, color: area.color }}
                >
                  {area.icon}
                </div>
                <h3 className="font-display font-bold text-white text-base mb-2" style={{ lineHeight: 1.3 }}>
                  {area.title}
                </h3>
                <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCRIPTURE ===== */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--an-gold) 0%, #b8860b 100%)" }}
      >
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6 opacity-40">"</div>
            <blockquote
              className="font-display font-bold mb-4"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", color: "#fff", lineHeight: 1.5, fontStyle: "italic" }}
            >
              What therefore God hath joined together, let not man put asunder.
            </blockquote>
            <cite className="font-body font-semibold text-sm" style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.1em" }}>
              — MARK 10:9 (KJV)
            </cite>
          </div>
        </div>
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full opacity-10" style={{ background: "#fff" }} />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full opacity-10" style={{ background: "#fff" }} />
      </section>

      {/* ===== WHAT MAKES US DIFFERENT ===== */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-14 max-w-5xl mx-auto">
            <div className="flex-1">
              <span className="section-label mb-4 block">Why Legacy of Love</span>
              <h2
                className="font-display font-bold mb-6"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--an-navy)" }}
              >
                What Makes This Ministry{" "}
                <span style={{ color: "var(--an-gold)", fontStyle: "italic" }}>Different</span>
              </h2>
              <div className="flex flex-col gap-5">
                {DIFFERENTIATORS.map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(197,157,47,0.12)", color: "var(--an-gold)" }}
                    >
                      {item.icon}
                    </div>
                    <p className="font-body text-base pt-2" style={{ color: "#3a3a3a", lineHeight: 1.6 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="flex-shrink-0 w-full lg:w-80 rounded-2xl p-8"
              style={{ background: "linear-gradient(135deg, var(--an-navy) 0%, #1A2F6B 100%)", border: "1px solid rgba(197,157,47,0.25)" }}
            >
              <Heart size={36} color="var(--an-gold)" className="mb-4" fill="rgba(197,157,47,0.2)" />
              <p className="font-display font-bold text-white text-lg mb-3" style={{ lineHeight: 1.4 }}>
                "Not just surviving — but thriving together."
              </p>
              <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
                Legacy of Love is a safe space where couples come as they are and leave stronger, closer, and more aligned than ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY — MOMENTS & MEMORIES ===== */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label mb-3 block">Our Community</span>
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--an-navy)" }}>
              Moments &amp; Memories
            </h2>
            <p className="font-body text-sm mt-2" style={{ color: "#888" }}>
              Click any photo to view full size
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden cursor-pointer group"
                style={{ boxShadow: "0 4px 24px rgba(10,22,40,0.12)", border: "1px solid rgba(201,168,76,0.15)" }}
                onClick={() => openLightbox(i)}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    style={{ background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, transparent 60%)" }}
                  >
                    <div className="p-4">
                      <p className="font-display text-sm font-bold text-white">{photo.caption}</p>
                      <p className="font-body text-xs mt-0.5" style={{ color: "var(--an-gold)" }}>{photo.sub}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4" style={{ background: "#fff" }}>
                  <p className="font-display text-sm font-semibold" style={{ color: "var(--an-navy)" }}>{photo.caption}</p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "var(--an-gold)" }}>{photo.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          <button className="absolute top-4 right-4 text-white" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <button
            className="absolute left-4 text-white text-4xl font-bold"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >‹</button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryPhotos[lightbox].url}
              alt={galleryPhotos[lightbox].caption}
              className="w-full rounded-xl object-contain"
              style={{ maxHeight: "75vh" }}
            />
            <div className="text-center mt-4">
              <p className="font-display text-lg font-bold text-white">{galleryPhotos[lightbox].caption}</p>
              <p className="font-body text-sm mt-1" style={{ color: "var(--an-gold)" }}>{galleryPhotos[lightbox].sub}</p>
              <p className="font-body text-xs mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                {lightbox + 1} of {galleryPhotos.length}
              </p>
            </div>
          </div>
          <button
            className="absolute right-4 text-white text-4xl font-bold"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >›</button>
        </div>
      )}

      {/* ===== CALL TO ACTION ===== */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1a3a 0%, #1A2F6B 60%, #2a1a0a 100%)" }}
      >
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <Heart size={40} color="var(--an-gold)" className="mx-auto mb-5" fill="rgba(197,157,47,0.2)" />
            <h2
              className="font-display font-bold text-white mb-2"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              Strengthen your marriage.
            </h2>
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--an-gold)", fontStyle: "italic" }}
            >
              Build your legacy together.
            </h2>
            <p className="font-body text-base mb-8" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
              Whether your marriage needs a tune-up or a transformation, Legacy of Love is here for you. Take the first step today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/connect" className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-3 text-base">
                <Heart size={16} fill="currentColor" />
                Join Now
              </Link>
              <Link
                href="/ministries"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-body font-semibold text-sm"
                style={{ border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff", background: "rgba(255,255,255,0.06)" }}
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full opacity-10" style={{ border: "2px solid var(--an-gold)" }} />
        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full opacity-10" style={{ border: "2px solid var(--an-gold)" }} />
      </section>

      <Footer />
    </div>
  );
}
