import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, Calendar, ArrowRight, Heart, Users, BookOpen, Globe, Music, Star } from "lucide-react";

const HERO_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NCSdecGUJjSTOiGA.jpg";
const YOUTH_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/TjWcJDkPBeGubtwr.jpeg"; // kids choir on stage — real All Nations
const COMMUNITY_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/sTVlbALtACCKmonF.jpg"; // Full congregation standing in worship — real All Nations family
const DANCE_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ihJFrdNPmpPQpLlb.jpg"; // Worship in Dance — ANLDCC Dance Ministry composite — real All Nations
const PASTOR_SHELIA = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NundXIvqDynhQrGu.png";
const BISHOP_BLAKE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/zbAJslMmOyKZfGkH.jpg";

const ministries = [
  { name: "Women's Ministry", desc: "Empowering women to walk boldly in their calling and purpose.", color: "var(--an-navy)", icon: <Heart size={22} />, href: "/ministries" },
  { name: "Men's Ministry", desc: "Building men of integrity, faith, and generational impact.", color: "var(--an-gold)", icon: <Users size={22} />, href: "/ministries" },
  { name: "Youth & Next Gen", desc: "Raising the next generation to love, learn, and live the Word.", color: "var(--an-navy)", icon: <Star size={22} />, href: "/ministries" },
  { name: "The Great Commission", desc: "Reaching our community and the world with the Gospel.", color: "var(--an-gold)", icon: <Globe size={22} />, href: "/ministries" },
  { name: "The Arts", desc: "Worship through dance, music, and creative expression.", color: "var(--an-navy)", icon: <Music size={22} />, href: "/ministries" },
  { name: "Bible Study", desc: "Wednesday evenings at 7 PM — deepening roots in the Word.", color: "var(--an-gold)", icon: <BookOpen size={22} />, href: "/events" },
];

const upcomingEvents = [
  { title: "🌿 Senior Wellness Afternoon — THIS WEEK!", date: "Thursday, June 4, 2026", time: "11:00 AM – 2:00 PM", color: "#2E7D32", speakers: "FREE · Mental Wellness · Medicare · Prescriptions — Open to all Seniors & Caregivers" },
  { title: "👑 Kings, Fuel Your Fire — Men's Month", date: "June 2026", time: "All Month", color: "var(--an-gold)", speakers: "Faith. Family. Brotherhood. Legacy. — Men's Month 2026 is here!" },
  { title: "Sunday Morning Worship", date: "Every Sunday", time: "8:30 AM & 11:00 AM", color: "var(--an-gold)" },
  { title: "Wednesday Bible Study", date: "Every Wednesday", time: "7:00 PM", color: "var(--an-teal)" },
  { title: "Intercessory Prayer Line", date: "Every Monday", time: "7:00 PM – 8:30 PM", color: "var(--an-orange)" },
  { title: "🎯 Pre Father's Day — Gun Range", date: "Saturday, June 20, 2026", time: "All Day", color: "var(--an-navy)" },
  { title: "🍖 Family BBQ Fellowship", date: "Saturday, June 27, 2026", time: "TBD · Whispering Pines Park", color: "var(--an-orange)" },
  { title: "🎮 Legacy In The Making — Singles Game Night", date: "Friday, June 12, 2026", time: "7:00 PM", color: "#C8901A" },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container py-24">
          <div className="max-w-2xl animate-fade-up">
            <span className="section-label mb-4">Welcome to All Nations LDCC</span>
            <h1
              className="font-display font-bold leading-tight mb-6"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#fff" }}
            >
              We Are in the<br />
              <span style={{ color: "var(--an-gold)", fontStyle: "italic" }}>People Building Business.</span>
            </h1>
            <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              We are in the People Building Business — a vibrant, multicultural faith community in Port St. Lucie, FL, strengthening individuals, families, and institutions for lasting, generational impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/connect" className="btn-gold flex items-center gap-2">
                <Heart size={16} /> Plan Your Visit
              </Link>
              <a
                href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center gap-2"
                style={{ borderColor: "#fff", color: "#fff" }}
              >
                <Play size={16} /> Watch Online
              </a>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70">
          <span className="font-body text-xs text-white tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* ===== SERVICE TIMES BANNER ===== */}
      <section style={{ background: "var(--an-navy)" }} className="py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
            <div className="text-center">
              <div className="section-label mb-1">Sunday Services</div>
              <div className="font-display text-white font-bold text-xl">8:30 AM & 11:00 AM</div>
              <div className="font-body text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>Youth & Toddler Lounge at both services</div>
            </div>
            <div className="w-px h-12 hidden md:block" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="text-center">
              <div className="section-label mb-1" style={{ color: "var(--an-teal)" }}>Wednesday Bible Study</div>
              <div className="font-display text-white font-bold text-xl">7:00 PM</div>
              <div className="font-body text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>In-person & Online</div>
            </div>
            <div className="w-px h-12 hidden md:block" style={{ background: "rgba(255,255,255,0.15)" }} />
            <div className="text-center">
              <div className="section-label mb-1" style={{ color: "var(--an-orange)" }}>Prayer Line</div>
              <div className="font-display text-white font-bold text-xl">Weekly</div>
              <div className="font-body text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>See events calendar</div>
            </div>
            <Link href="/connect" className="btn-gold flex items-center gap-2 ml-4">
              Plan Your Visit <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DAILY WORD FEATURED SECTION — JUNE 2026 ===== */}
      <section className="py-12" style={{ background: "linear-gradient(135deg, #1A2F6B 0%, #0d1a3a 100%)" }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Label + Title */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-4" style={{ background: "rgba(197,157,47,0.18)", color: "var(--an-gold)" }}>
                <Users size={12} /> June 2026 — Men's Month
              </span>
              <h2 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Kings, <span style={{ color: "var(--an-gold)" }}>Fuel Your Fire</span>
              </h2>
              <p className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.70)" }}>
                From Generations to Generations — <strong style={{ color: "rgba(255,255,255,0.90)" }}>Leviticus 6:12-13</strong>
              </p>
              <p className="font-body text-sm mb-2" style={{ color: "rgba(255,255,255,0.60)" }}>
                June 2026 · Men's Month · Faith. Family. Brotherhood. Legacy.
              </p>
              <p className="font-body text-sm italic mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                "Your brother is not your competition. Your brother is your ally."
              </p>
              <Link href="/events" className="btn-gold inline-flex items-center gap-2">
                <Calendar size={14} />
                View June Events
              </Link>
            </div>
            {/* Right: Decorative card */}
            <div
              className="flex-shrink-0 w-full lg:w-80 rounded-2xl p-6 text-center"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(197,157,47,0.25)" }}
            >
              <div className="text-5xl mb-3">👑</div>
              <div className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: "var(--an-gold)" }}>June Series — Men's Month</div>
              <div className="font-display font-bold text-white text-xl mb-2">Iron Sharpens Iron</div>
              <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                Prov. 27:17 · Sundays · Wednesdays · Saturdays
              </div>
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(197,157,47,0.2)" }}>
                <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>One Church. One Purpose. One Legacy.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== THIS WEEK — SENIOR WELLNESS AFTERNOON HIGHLIGHT ===== */}
      <section className="py-0" style={{ background: "linear-gradient(135deg, #1B4D1E 0%, #2E7D32 50%, #1B4D1E 100%)", borderTop: "4px solid #4CAF50", borderBottom: "4px solid #4CAF50" }}>
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Flyer */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "520px", width: "100%", border: "3px solid rgba(255,255,255,0.35)" }}>
                <img
                  src="/senior-wellness-afternoon-flyer.jpeg"
                  alt="Senior Wellness Afternoon — Thursday, June 4, 2026 | 11:00 AM – 2:00 PM | All Nations LDCC"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            {/* Details */}
            <div className="flex-1 text-center md:text-left py-4">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-3" style={{ background: "rgba(255,255,255,0.18)", color: "#fff" }}>
                🌿 THIS WEEK — Health &amp; Wellness
              </span>
              <h2 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", lineHeight: 1.1 }}>
                Senior Wellness Afternoon
              </h2>
              <p className="font-body font-bold mb-4" style={{ color: "#A5D6A7", fontSize: "1.05rem" }}>
                Thursday, June 4 · 11:00 AM – 2:00 PM
              </p>
              <p className="font-body text-sm mb-4" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 460 }}>
                The Great Commission Team invites all seniors and caregivers to a FREE afternoon of empowerment. Three dynamic sessions: <strong style={{ color: "#fff" }}>Mental Wellness After 50</strong>, <strong style={{ color: "#fff" }}>Medicare &amp; Medicaid — What You Need to Know</strong>, and <strong style={{ color: "#fff" }}>Prescriptions — What You Don't Know</strong>.
              </p>
              <div className="flex flex-wrap gap-3 mb-4 justify-center md:justify-start">
                <span className="font-body text-xs px-3 py-1 rounded-full font-bold" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>✓ Sis. Jennetta — Mental Wellness</span>
                <span className="font-body text-xs px-3 py-1 rounded-full font-bold" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>✓ Sis. Nicole — Medicare &amp; Medicaid</span>
                <span className="font-body text-xs px-3 py-1 rounded-full font-bold" style={{ background: "rgba(255,255,255,0.15)", color: "#fff" }}>✓ Sis. King — Prescriptions</span>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-body font-bold text-sm" style={{ background: "rgba(255,255,255,0.20)", color: "#fff", border: "2px solid rgba(255,255,255,0.50)" }}>
                🆓 FREE EVENT — Open to All Seniors &amp; Caregivers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THIS TUESDAY — USHER PRAYER LINE ANNOUNCEMENT ===== */}
      <section className="py-0" style={{ background: "linear-gradient(135deg, #1a0a2e 0%, #2d1254 50%, #1a0a2e 100%)", borderTop: "4px solid #C8901A", borderBottom: "4px solid #C8901A" }}>
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Flyer */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "340px", width: "100%", border: "3px solid rgba(200,144,26,0.6)" }}>
                <img
                  src="/tuesday-prayer-bishop-blake.png"
                  alt="Gatekeepers Tuesday Prayer Line — Bishop Cornelius Blake Guest Speaker | Tuesday at 7:30 PM"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            {/* Details */}
            <div className="flex-1 text-center md:text-left py-4">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-3" style={{ background: "rgba(200,144,26,0.25)", color: "var(--an-gold)" }}>
                🙏 THIS TUESDAY — Prayer Line
              </span>
              <h2 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)", lineHeight: 1.1 }}>
                Gatekeepers, You're Invited to a<br />
                <span style={{ color: "var(--an-gold)" }}>Powerful Time of Prayer!</span>
              </h2>
              <p className="font-body font-bold mb-3" style={{ color: "#C8901A", fontSize: "1.05rem" }}>
                Tuesday · 7:30 PM
              </p>
              <p className="font-body text-sm mb-4" style={{ color: "rgba(255,255,255,0.85)", maxWidth: 460 }}>
                Sister Tracey proudly invites <strong style={{ color: "#fff" }}>Bishop Cornelius Blake</strong> as our Guest Speaker on the Prayer Line. Come expecting a <strong style={{ color: "var(--an-gold)" }}>BLESSING</strong> as we connect in Faith &amp; Unity!
              </p>
              <div className="flex flex-wrap gap-3 mb-5 justify-center md:justify-start">
                <div className="rounded-xl px-4 py-3 text-center" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(200,144,26,0.4)" }}>
                  <div className="font-body text-xs mb-1" style={{ color: "rgba(255,255,255,0.60)" }}>📞 Dial</div>
                  <div className="font-display font-bold text-white text-base">425-436-6374</div>
                </div>
                <div className="rounded-xl px-4 py-3 text-center" style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(200,144,26,0.4)" }}>
                  <div className="font-body text-xs mb-1" style={{ color: "rgba(255,255,255,0.60)" }}>🔒 Access Code</div>
                  <div className="font-display font-bold text-white text-base">1065638</div>
                </div>
              </div>
              <p className="font-body text-xs italic" style={{ color: "rgba(255,255,255,0.55)" }}>
                "Let's agree together and experience the power of prayer!" — See you on the line!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== JUNE 2026 — KINGS, FUEL YOUR FIRE (MEN'S MONTH) ===== */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1200 40%, #3d2800 100%)" }} />
        <div className="absolute inset-0" style={{ background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"rgba(200,144,26,0.05)\" stroke-width=\"0.5\"/></svg>') repeat", backgroundSize: "120px" }} />
        <div className="relative z-10 container">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-4" style={{ background: "rgba(200,144,26,0.25)", color: "var(--an-gold)" }}>JUNE 2026 — MEN'S MONTH</span>
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.01em" }}>
              Kings, <span style={{ color: "var(--an-gold)" }}>Fuel Your Fire</span>
            </h2>
            <p className="font-body text-base mb-2" style={{ color: "rgba(255,255,255,0.80)" }}>
              From Generations to Generations
            </p>
            <blockquote className="font-display text-base italic mb-6 px-6" style={{ color: "var(--an-gold)" }}>
              "The fire shall be kept burning on the altar continually; it shall not go out."
              <cite className="block font-body text-xs mt-2 not-italic" style={{ color: "rgba(255,255,255,0.65)" }}>— Leviticus 6:12-13</cite>
            </blockquote>
            {/* Men's Month Flyer */}
            <div className="my-8 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "480px", width: "100%", border: "3px solid rgba(200,144,26,0.6)" }}>
                <img
                  src="/kings-fuel-your-fire-mens-month-flyer.png"
                  alt="Kings, Fuel Your Fire — Men's Month June 2026 | All Nations LDCC"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            {/* June Itinerary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(200,144,26,0.3)" }}>
                <div className="font-display font-bold text-white text-sm mb-1">👑 Start the Fire</div>
                <div className="font-body text-xs" style={{ color: "var(--an-gold)" }}>Sunday, June 7</div>
                <div className="font-body text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>Identify · Discover your purpose</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(200,144,26,0.3)" }}>
                <div className="font-display font-bold text-white text-sm mb-1">🎓 Sustain the Fire</div>
                <div className="font-body text-xs" style={{ color: "var(--an-gold)" }}>Sunday, June 14</div>
                <div className="font-body text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>Discipline · Celebrating Graduates!</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(200,144,26,0.3)" }}>
                <div className="font-display font-bold text-white text-sm mb-1">👨‍👦 Multiply the Fire</div>
                <div className="font-body text-xs" style={{ color: "var(--an-gold)" }}>Sunday, June 21 · Father's Day</div>
                <div className="font-body text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>Fatherhood &amp; Legacy · Special Prayer</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(200,144,26,0.3)" }}>
                <div className="font-display font-bold text-white text-sm mb-1">🛡️ Protect the Fire</div>
                <div className="font-body text-xs" style={{ color: "var(--an-gold)" }}>Sunday, June 28</div>
                <div className="font-body text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>Next Generation · Stand firm</div>
              </div>
            </div>
            {/* Legacy In The Making Flyer */}
            <div className="my-8 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "560px", width: "100%", border: "3px solid rgba(200,144,26,0.6)" }}>
                <img
                  src="/legacy-in-the-making-singles-game-night-flyer.png"
                  alt="Legacy In The Making — Singles Game Night | Friday, June 12, 2026 at 7:00 PM"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>

            {/* AI Class 101 with AmarAi Flyer */}
            <div className="my-8">
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-1 rounded-full font-body font-bold text-xs uppercase tracking-widest" style={{ background: "rgba(26,47,107,0.6)", color: "#C8901A" }}>Last Class · AI Class 101 with AmarAi</span>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "420px", width: "100%", border: "3px solid rgba(200,144,26,0.6)" }}>
                  <img
                    src="/ai101-amarai-flyer.png"
                    alt="AI Class 101 with AmarAi — Tuesday, June 16, 2026 at 9:30 AM | $97 | Bring Your Laptop"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <strong style={{ color: "var(--an-gold)" }}>Tuesday, June 16 · 9:30 AM</strong> &nbsp;·&nbsp; $97 per seat &nbsp;·&nbsp; Bring Your Laptop &nbsp;·&nbsp; Interactive Class
                </p>
                <a href="https://stan.store/AmarAI" target="_blank" rel="noopener noreferrer" className="btn-gold mt-3 inline-flex items-center gap-2" style={{ fontSize: "0.85rem" }}>
                  Reserve Your Seat → stan.store/AmarAI
                </a>
              </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/events" className="btn-gold flex items-center gap-2">
                View June Events <ArrowRight size={14} />
              </Link>
              <Link href="/connect" className="btn-outline flex items-center gap-2" style={{ borderColor: "#fff", color: "#fff" }}>
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WELCOME FROM PASTORS ===== */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">A Word From Our Pastors</span>
              <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "var(--an-navy)" }}>
                Come Be Part<br />
                <span style={{ color: "var(--an-gold)" }}>of the Family</span>
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#444" }}>
                You don't have to have it all together to walk through our doors. At All Nations, every person is welcomed as they are — and developed into who God called them to be. We are a family of faith that loves hard, worships free, and believes that your best chapter is still ahead.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#444" }}>
                Come as you are. Leave transformed.
              </p>
              <p className="font-body text-sm font-semibold mb-8" style={{ color: "var(--an-navy)" }}>
                Join us every Sunday at 8:30 AM or 11:00 AM<br />
                <span style={{ color: "#666", fontWeight: 400 }}>862 SW Glenview Ct., Port St. Lucie, FL 34953</span>
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/connect" className="btn-navy">PLAN YOUR VISIT →</Link>
                <Link href="/meet-the-pastors" className="btn-outline">MEET OUR PASTORS</Link>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Bishop Blake */}
              <div className="relative flex-1">
                <img
                  src={BISHOP_BLAKE}
                  alt="Bishop Cornellas Blake"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  style={{ height: "380px", objectPosition: "top" }}
                />
                <div
                  className="absolute bottom-3 left-3 right-3 rounded-xl p-3"
                  style={{ background: "rgba(31,47,92,0.92)", backdropFilter: "blur(8px)" }}
                >
                  <div className="font-display text-white font-bold text-sm">Bishop Cornellas Blake</div>
                  <div className="font-body text-xs mt-0.5" style={{ color: "var(--an-gold)" }}>Senior Pastor</div>
                </div>
              </div>
              {/* Pastor Shelia */}
              <div className="relative flex-1">
                <img
                  src={PASTOR_SHELIA}
                  alt="Executive Pastor Shelia Blake"
                  className="w-full rounded-2xl object-cover shadow-2xl"
                  style={{ height: "380px", objectPosition: "top" }}
                />
                <div
                  className="absolute bottom-3 left-3 right-3 rounded-xl p-3"
                  style={{ background: "rgba(31,47,92,0.92)", backdropFilter: "blur(8px)" }}
                >
                  <div className="font-display text-white font-bold text-sm">Executive Pastor Shelia Blake</div>
                  <div className="font-body text-xs mt-0.5" style={{ color: "var(--an-gold)" }}>All Nations Life Development Christian Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MINISTRIES GRID ===== */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Our Ministries</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              A Place for <span style={{ color: "var(--an-gold)" }}>Every Season</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-xl mx-auto" style={{ color: "#666" }}>
              From youth to seniors, from worship to outreach — there is a ministry home for you at All Nations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((m) => (
              <Link key={m.name} href={m.href}>
                <div className="ministry-card bg-white p-7 cursor-pointer group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                    style={{ background: m.color }}
                  >
                    {m.icon}
                  </div>
                  <h3
                    className="font-display font-bold text-lg mb-2 group-hover:transition-colors"
                    style={{ color: "var(--an-navy)" }}
                  >
                    {m.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#666" }}>
                    {m.desc}
                  </p>
                  <div
                    className="flex items-center gap-1 font-body font-bold text-xs uppercase tracking-wider"
                    style={{ color: m.color }}
                  >
                    Learn More <ArrowRight size={12} />
                  </div>
                  {/* Color bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: m.color }} />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/ministries" className="btn-navy">View All Ministries</Link>
          </div>
        </div>
      </section>

      {/* ===== YOUTH & SUMMER PROGRAMS ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${YOUTH_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "rgba(31,47,92,0.82)" }} />
        <div className="relative z-10 container">
          <div className="max-w-2xl">
            <span className="section-label" style={{ color: "var(--an-orange)" }}>Youth & Next Gen</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Raising the Next<br />
              <span style={{ color: "var(--an-orange)" }}>Generation of Leaders</span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
              Our Youth and Next Gen ministry is a dynamic, faith-filled environment where young people discover their identity in Christ, build lasting friendships, and develop the leadership skills to change their world.
            </p>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              Youth services run at both 8:30 AM and 11:00 AM on Sundays, with a dedicated Toddler Lounge for our youngest members. This summer — join us for Vacation Bible School!
            </p>
            {/* VBS Flyer */}
            <div className="my-6 rounded-2xl overflow-hidden shadow-xl" style={{ maxWidth: 380 }}>
              <img
                src="/vbs-rooted-in-faith-flyer.jpg"
                alt="Vacation Bible School — Rooted in Faith | June 1–12, Ages 5–12, 9:00 AM–12:30 PM"
                className="w-full h-auto block"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href="/ministries" className="btn-gold">Youth Ministry</Link>
              <Link href="/events" className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>
                VBS Registration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== UPCOMING EVENTS ===== */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="section-label">What's Coming Up</span>
              <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
                Events & <span style={{ color: "var(--an-gold)" }}>Gatherings</span>
              </h2>
            </div>
            <Link href="/events" className="btn-outline flex items-center gap-2">
              Full Calendar <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {upcomingEvents.map((ev) => (
              <div
                key={ev.title}
                className="rounded-xl p-6 border-t-4 shadow-sm hover:shadow-md transition-shadow"
                style={{ borderTopColor: ev.color, background: "#FAF8F4" }}
              >
                <Calendar size={20} style={{ color: ev.color }} className="mb-3" />
                <h3 className="font-display font-bold text-base mb-1" style={{ color: "var(--an-navy)" }}>{ev.title}</h3>
                <div className="font-body font-bold text-sm mb-1" style={{ color: ev.color }}>{ev.date}</div>
                <div className="font-body text-xs" style={{ color: "#888" }}>{ev.time}</div>
                {(ev as any).speakers && <div className="font-body text-xs mt-1 font-semibold" style={{ color: "var(--an-navy)" }}>{(ev as any).speakers}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORSHIP IN DANCE ===== */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={DANCE_IMG}
                alt="Worship in Dance — The Arts Ministry"
                className="w-full rounded-2xl shadow-2xl object-cover"
                style={{ maxHeight: "420px" }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-label" style={{ color: "var(--an-teal)" }}>The Arts Ministry</span>
              <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "var(--an-navy)" }}>
                Worship in<br />
                <span style={{ color: "var(--an-teal)" }}>Dance & Expression</span>
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                The Arts Ministry at All Nations celebrates the full spectrum of creative worship — from liturgical dance to music, drama, and visual arts. Every expression is an offering to God.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "#555" }}>
                Our dancers and artists are anointed vessels who carry the presence of God through movement and creativity, ministering to hearts and transforming atmospheres.
              </p>
              <Link href="/ministries" className="btn-navy">Explore The Arts</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY IMPACT ===== */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${COMMUNITY_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "rgba(31,47,92,0.78)" }} />
        <div className="relative z-10 container text-center">
          <span className="section-label" style={{ color: "var(--an-green)" }}>Community Impact</span>
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Serving Port St. Lucie<br />
            <span style={{ color: "var(--an-green)" }}>Since 1991</span>
          </h2>
          <p className="font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
            For over 35 years, All Nations has been a pillar of faith, hope, and love in our community — through outreach programs, youth development, community service, and the transforming power of the Gospel.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
            {[
              { num: "35+", label: "Years Serving" },
              { num: "8", label: "Ministries" },
              { num: "2", label: "Sunday Services" },
              { num: "∞", label: "Lives Changed" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-4xl mb-1" style={{ color: "var(--an-gold)" }}>{s.num}</div>
                <div className="font-body text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
          <Link href="/what-we-believe" className="btn-gold">Our Story</Link>
        </div>
      </section>

      {/* ===== GIVE CTA ===== */}
      <section className="py-16" style={{ background: "var(--an-gold)" }}>
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--an-navy)" }}>
            Your Generosity Fuels Life Change
          </h2>
          <p className="font-body text-base mb-8 max-w-lg mx-auto" style={{ color: "rgba(31,47,92,0.80)" }}>
            Every gift supports our youth programs, community outreach, and the mission to Love, Learn, and Live by the Word.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/give" className="btn-navy flex items-center gap-2">
              <Heart size={16} /> Give Online
            </Link>
            <a
              href="https://www.kindridgiving.com/App/Form/7c27d226-b8cd-4972-99cb-c0cf0eb92952"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              Give via Kindrid
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
