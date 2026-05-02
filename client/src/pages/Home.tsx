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
  { title: "✈️ Women's Service Kickoff — Arise & Take Flight", date: "Sunday, May 3, 2026", time: "8:30 AM & 11:00 AM", color: "var(--an-gold)", speakers: "Wear White & Gold! Women's Month officially launches." },
  { title: "Sunday Morning Worship", date: "Every Sunday", time: "8:30 AM & 11:00 AM", color: "var(--an-gold)" },
  { title: "Wednesday Bible Study", date: "Every Wednesday", time: "7:00 PM", color: "var(--an-teal)" },
  { title: "Intercessory Prayer Line", date: "Every Monday", time: "7:00 PM – 8:30 PM", color: "var(--an-orange)" },
  { title: "Mother's Day Celebration", date: "May 10, 2026", time: "8:30 AM & 11:00 AM", color: "#D63384" },
  { title: "Arise & Take Flight — Women's Month", date: "May 2026", time: "All Month", color: "var(--an-navy)" },
  { title: "💑 Table It & Talk It Out — Couples Night", date: "Friday, May 22, 2026", time: "7:00 PM · Free Event", color: "#C8901A" },
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

      {/* ===== DAILY WORD FEATURED SECTION — MAY 2026 ===== */}
      <section className="py-12" style={{ background: "linear-gradient(135deg, #1A2F6B 0%, #0d1a3a 100%)" }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Label + Title */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-4" style={{ background: "rgba(197,157,47,0.18)", color: "var(--an-gold)" }}>
                <BookOpen size={12} /> Today's Daily Word — May 2026
              </span>
              <h2 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Arise &amp; <span style={{ color: "var(--an-gold)" }}>Take Flight</span>
              </h2>
              <p className="font-body text-sm mb-1" style={{ color: "rgba(255,255,255,0.70)" }}>
                A daily devotional series by <strong style={{ color: "rgba(255,255,255,0.90)" }}>Pastor Shelia Blake</strong>
              </p>
              <p className="font-body text-sm mb-2" style={{ color: "rgba(255,255,255,0.60)" }}>
                May 2026 · Women's Month · New word every morning
              </p>
              <p className="font-body text-sm italic mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
                Miss a meal. Miss a song. But don't miss the Word.
              </p>
              <Link href="/daily-word" className="btn-gold inline-flex items-center gap-2">
                <BookOpen size={14} />
                Read &amp; Listen Today's Word
              </Link>
            </div>
            {/* Right: Decorative card */}
            <div
              className="flex-shrink-0 w-full lg:w-80 rounded-2xl p-6 text-center"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(197,157,47,0.25)" }}
            >
              <div className="text-5xl mb-3">✈️</div>
              <div className="font-body text-xs uppercase tracking-widest mb-1" style={{ color: "var(--an-gold)" }}>May Series — Women's Month</div>
              <div className="font-display font-bold text-white text-xl mb-2">Arise &amp; Take Flight</div>
              <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                31 days · Scripture · Devotional · Audio
              </div>
              <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(197,157,47,0.2)" }}>
                <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>New word every morning at midnight</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== MAY 2026 — ARISE AND TAKE FLIGHT ===== */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1A2F6B 0%, #3d1a5c 40%, #D63384 100%)" }} />
        <div className="absolute inset-0" style={{ background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"rgba(255,255,255,0.03)\" stroke-width=\"0.5\"/></svg>') repeat", backgroundSize: "120px" }} />
        <div className="relative z-10 container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-4" style={{ background: "rgba(214,51,132,0.25)", color: "#f8a4c8" }}>MAY 2026 — CELEBRATING WOMEN</span>
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "-0.01em" }}>
              Arise &amp; <span style={{ color: "var(--an-gold)" }}>Take Flight</span>
            </h2>
            <p className="font-body text-lg mb-4" style={{ color: "rgba(255,255,255,0.90)" }}>
              A month-long celebration of the women of God — mothers, daughters, sisters, and queens. May 2026 is dedicated to honoring the women who carry vision, build families, lead with grace, and walk in purpose.
            </p>
            <blockquote className="font-display text-base italic mb-6 px-6" style={{ color: "var(--an-gold)" }}>
              "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint."
              <cite className="block font-body text-xs mt-2 not-italic" style={{ color: "rgba(255,255,255,0.65)" }}>— Isaiah 40:31</cite>
            </blockquote>
            {/* White & Gold Dress Code Banner */}
            <div className="rounded-2xl px-6 py-5 mb-6 max-w-2xl mx-auto" style={{ background: "rgba(255,255,255,0.12)", border: "2px solid rgba(200,144,26,0.7)" }}>
              <div className="text-3xl mb-2">🤍✨</div>
              <div className="font-display font-bold text-white text-lg mb-1">THIS SUNDAY — Wear White &amp; Gold!</div>
              <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                Ladies, as we kick off <strong style={{ color: "var(--an-gold)" }}>Arise &amp; Take Flight</strong> this Sunday, May 3rd, come dressed in your <strong style={{ color: "#fff" }}>White &amp; Gold</strong> to worship in unity and beauty. Let’s take flight together!
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="font-display font-bold text-white text-sm mb-1">✈️ Women’s Service Kickoff</div>
                <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.70)" }}>Sunday, May 3 — 8:30 AM &amp; 11:00 AM · Wear White &amp; Gold!</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="font-display font-bold text-white text-sm mb-1">Mother's Day</div>
                <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.70)" }}>Sunday, May 10 — 8:30 AM &amp; 11:00 AM</div>
              </div>
              <div className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="font-display font-bold text-white text-sm mb-1">Women's Worship Night</div>
                <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.70)" }}>Date TBA — An evening of praise &amp; testimony</div>
              </div>
            </div>
            {/* Pretty Woman Book Club Flyer */}
            <div className="my-8 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "420px", width: "100%", border: "3px solid rgba(214,51,132,0.5)" }}>
                <img
                  src="/pretty-woman-book-club-flyer.jpeg"
                  alt="Pretty Woman — A Book Club Experience | Women's Ministry | Wednesday, May 6 at 7:00 PM"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            {/* Table It & Talk It Out Flyer */}
            <div className="my-8 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ maxWidth: "420px", width: "100%", border: "3px solid rgba(200,144,26,0.6)" }}>
                <img
                  src="/images/table-it-talk-it-out-flyer.png"
                  alt="Table It & Talk It Out — A Couples Connection Night | Legacy of Love | Friday, May 22 at 7:00 PM | Free Event"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/events" className="btn-gold flex items-center gap-2">
                View May Events <ArrowRight size={14} />
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
