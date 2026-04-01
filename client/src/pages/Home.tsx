import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, Calendar, ArrowRight, Heart, Users, BookOpen, Globe, Music, Star } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-hero-colorful-VX5ZXxxDZnMKgCCrdw5AU7.webp";
const YOUTH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-youth-colorful-nKbLKyEu7hHmoL54WdXhom.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-community-colorful-LSc7sQDzvXgdnxS4cpfaBX.webp";
const DANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-worship-dance-Jybwyq5RpWn9U8UhX9ebEc.webp";
const PASTOR_SHELIA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/pastor-shelia-blake_d1c34a0a.jpg";

const ministries = [
  { name: "Women's Ministry", desc: "Empowering women to walk boldly in their calling and purpose.", color: "var(--an-navy)", icon: <Heart size={22} />, href: "/ministries" },
  { name: "Men's Ministry", desc: "Building men of integrity, faith, and generational impact.", color: "var(--an-gold)", icon: <Users size={22} />, href: "/ministries" },
  { name: "Youth & Next Gen", desc: "Raising the next generation to love, learn, and live the Word.", color: "var(--an-navy)", icon: <Star size={22} />, href: "/ministries" },
  { name: "The Great Commission", desc: "Reaching our community and the world with the Gospel.", color: "var(--an-gold)", icon: <Globe size={22} />, href: "/ministries" },
  { name: "The Arts", desc: "Worship through dance, music, and creative expression.", color: "var(--an-navy)", icon: <Music size={22} />, href: "/ministries" },
  { name: "Bible Study", desc: "Wednesday evenings at 7 PM — deepening roots in the Word.", color: "var(--an-gold)", icon: <BookOpen size={22} />, href: "/events" },
];

const upcomingEvents = [
  { title: "Sunday Morning Worship", date: "Every Sunday", time: "8:30 AM & 11:00 AM", color: "var(--an-gold)" },
  { title: "Wednesday Bible Study", date: "Every Wednesday", time: "7:00 PM", color: "var(--an-teal)" },
  { title: "Intercessory Prayer Line", date: "Every Monday", time: "7:00 PM – 8:30 PM", color: "var(--an-orange)" },
  { title: "Easter Sunday Celebration", date: "April 5, 2026", time: "8:30 AM & 11:00 AM", color: "var(--an-red)" },
  { title: "Good Friday — Walk Through the Tabernacle", date: "April 18, 2026", time: "Times TBA", color: "var(--an-navy)" },
  { title: "Mother's Day Celebration", date: "May 10, 2026", time: "8:30 AM & 11:00 AM", color: "#D63384" },
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
              Love the Word.<br />
              <span style={{ color: "var(--an-gold)", fontStyle: "italic" }}>Learn the Word.</span><br />
              Live by the Word.
            </h1>
            <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              A vibrant, multicultural faith community in Port St. Lucie, FL — building people and strengthening institutions for lasting, generational impact.
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

      {/* ===== TABERNACLE 2026 FEATURED BANNER ===== */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #0d1a3a 0%, #1A2F6B 60%, #0d2a26 100%)" }}>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block px-4 py-1 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-4" style={{ background: "rgba(201,168,76,0.18)", color: "var(--an-gold)" }}>STILL AHEAD — APRIL 2026</span>
              <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}>
                TABERNACLE <span style={{ color: "var(--an-gold)" }}>2026</span>
              </h2>
              <p className="font-body text-base mb-3" style={{ color: "rgba(255,255,255,0.85)" }}>
                A Multi-Night Celebration of the Presence of God
              </p>
              <p className="font-body text-sm mb-3" style={{ color: "rgba(255,255,255,0.70)" }}>
                This spring, All Nations LDCC invites you to an extraordinary series of nights — each one a unique encounter with God, rooted in His Word and overflowing with worship, culture, and the glory of the Tabernacle revealed.
              </p>
              <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.70)" }}>
                Cultural Night was a powerful evening of worship and community. Now, Kings &amp; Queens Night and the Good Friday Walk Through the Tabernacle are still ahead. Bring your family. Invite your neighbors. Come expectant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/events" className="btn-gold flex items-center gap-2">
                  LEARN MORE &amp; RSVP →
                </Link>
              </div>
            </div>
            {/* Right: Event cards */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto lg:min-w-[320px]">
              <div className="rounded-xl p-5 border-l-4" style={{ background: "rgba(255,255,255,0.06)", borderLeftColor: "var(--an-gold)" }}>
                <div className="font-body font-bold text-xs uppercase tracking-widest mb-1" style={{ color: "var(--an-gold)" }}>Cultural Night — April 1, 2026 ✓ Completed</div>
                <div className="font-display text-white font-bold text-base">Thank you to all who joined us! A beautiful night of worship, culture, and community united under one roof.</div>
              </div>
              <div className="rounded-xl p-5 border-l-4" style={{ background: "rgba(255,255,255,0.06)", borderLeftColor: "var(--an-teal)" }}>
                <div className="font-body font-bold text-xs uppercase tracking-widest mb-1" style={{ color: "var(--an-teal)" }}>Kings &amp; Queens Night — Coming Soon</div>
                <div className="font-display text-white font-bold text-base">Come dressed and declared — you are royalty in the Kingdom of God. A night of honor, worship, and Word.</div>
              </div>
              <div className="rounded-xl p-5 border-l-4" style={{ background: "rgba(255,255,255,0.06)", borderLeftColor: "#c0392b" }}>
                <div className="font-body font-bold text-xs uppercase tracking-widest mb-1" style={{ color: "#e57373" }}>Good Friday: Walk Through the Tabernacle — April 18, 2026</div>
                <div className="font-display text-white font-bold text-base">A reverent, powerful walk through the Tabernacle of Moses — experiencing the story of redemption step by step.</div>
              </div>
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
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ background: "linear-gradient(135deg, var(--an-gold) 0%, var(--an-teal) 100%)", opacity: 0.15 }}
              />
              <img
                src={PASTOR_SHELIA}
                alt="Executive Pastor Shelia Blake"
                className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
                style={{ maxHeight: "480px", objectPosition: "top" }}
              />
              <div
                className="absolute bottom-4 left-4 right-4 z-20 rounded-xl p-4"
                style={{ background: "rgba(31,47,92,0.92)", backdropFilter: "blur(8px)" }}
              >
                <div className="font-display text-white font-bold">Executive Pastor Shelia Blake</div>
                <div className="font-body text-xs mt-1" style={{ color: "var(--an-gold)" }}>
                  All Nations Life Development Christian Center
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
              Youth services run at both 8:30 AM and 11:00 AM on Sundays, with a dedicated Toddler Lounge for our youngest members. Summer programs are coming — stay connected for registration details.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/ministries" className="btn-gold">Youth Ministry</Link>
              <Link href="/events" className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>
                Summer Programs
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
              href="https://kindrid.com/give/allnationsldcc"
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
