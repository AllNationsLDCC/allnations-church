// Worship Team Ministry Page — All Nations Life Development Christian Center
// Design: Deep navy/gold, consistent with site-wide ministry page style
// Sections: Hero, Mission, Meet the Team (photos), Roles/Positions, Rehearsal Info, Join CTA

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Music, Mic, Guitar, Heart, ArrowRight, Calendar, Clock, MapPin } from "lucide-react";

const BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/";

const teamPhotos = [
  { url: BASE + "IMG_4057_aff99e54.jpg", caption: "Praise Team & Psalmists — In the Fullness of Your Grace" },
  { url: BASE + "IMG_4040_f1c768d8.jpg", caption: "Praise Team & Musicians — Worship in Full Expression" },
  { url: BASE + "IMG_4118_b031cfd9.jpg", caption: "Psalmists Leading Worship" },
  { url: BASE + "IMG_4121_4fffa024.jpg", caption: "All Nations Praise Team" },
  { url: BASE + "3599_f408c501.jpg", caption: "Bro. Renald Achille — Worship Musician" },
  { url: BASE + "3728_5e181583.jpg", caption: "All Nations Praise Team" },
  { url: BASE + "3797_1105bbd1.jpg", caption: "Tehila Praise Team" },
];

const roles = [
  {
    icon: <Mic size={24} />,
    title: "Psalmists & Vocalists",
    color: "var(--an-gold)",
    description:
      "The voice of All Nations. Our psalmists and lead vocalists carry the anointing to usher the congregation into the presence of God through song. We welcome all vocal ranges and levels of experience.",
  },
  {
    icon: <Guitar size={24} />,
    title: "Musicians & Instrumentalists",
    color: "var(--an-teal)",
    description:
      "Keys, guitar, bass, drums, horns — every instrument is an offering. Our musicians are the foundation of our worship sound, creating the atmosphere where God moves and hearts are transformed.",
  },
  {
    icon: <Music size={24} />,
    title: "Praise Dance & Creative Arts",
    color: "var(--an-red)",
    description:
      "Movement is worship. Our liturgical dance and creative arts team brings the Word to life through anointed expression — every step, every gesture, an act of surrender and praise.",
  },
  {
    icon: <Heart size={24} />,
    title: "Media & Sound Team",
    color: "var(--an-blue)",
    description:
      "Behind every great worship experience is a dedicated technical team. Our media and sound ministry ensures every note, every lyric, and every message is heard with clarity and excellence.",
  },
];

const rehearsalSchedule = [
  { day: "Wednesday", time: "6:00 PM – 7:00 PM", detail: "Pre-Bible Study Worship Rehearsal" },
  { day: "Saturday", time: "10:00 AM – 12:00 PM", detail: "Full Team Rehearsal (Sunday Prep)" },
  { day: "Sunday", time: "8:30 AM", detail: "Sound Check & Pre-Service Worship" },
];

const scriptures = [
  { ref: "Psalm 150:6", text: "Let everything that has breath praise the Lord. Praise the Lord!" },
  { ref: "John 4:23", text: "Yet a time is coming and has now come when the true worshipers will worship the Father in the Spirit and in truth." },
];

export default function WorshipTeam() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div
        className="relative py-28 px-4 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #1a2d50 60%, #0a1628 100%)",
        }}
      >
        {/* Background photo overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${BASE}IMG_4040_f1c768d8.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ background: "rgba(201,168,76,0.15)", color: "var(--an-gold)", border: "1px solid rgba(201,168,76,0.3)" }}
          >
            <Music size={14} /> Ministry
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold mb-5 leading-tight"
            style={{ color: "#fff", fontFamily: "Georgia, serif" }}
          >
            Worship Team
          </h1>
          <p className="text-xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.80)" }}>
            Where anointing meets excellence. The All Nations Worship Team exists to create an atmosphere where God is glorified, hearts are healed, and lives are transformed through the power of praise and worship.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#join"
              className="px-8 py-3 font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--an-gold)", color: "#0a1628", borderRadius: "4px" }}
            >
              Join the Team
            </a>
            <Link
              href="/ministries"
              className="px-8 py-3 font-semibold tracking-wide transition-all duration-200 border"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)", borderRadius: "4px" }}
            >
              ← All Ministries
            </Link>
          </div>
        </div>
      </div>

      {/* Scripture Banner */}
      <div style={{ background: "var(--an-gold)" }} className="py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          {scriptures.map((s) => (
            <div key={s.ref} className="flex-1">
              <p className="text-base font-semibold italic" style={{ color: "#0a1628" }}>
                "{s.text}"
              </p>
              <p className="text-xs font-bold mt-1 tracking-widest uppercase" style={{ color: "rgba(10,22,40,0.65)" }}>
                — {s.ref}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="text-xs tracking-[0.3em] uppercase font-semibold block mb-3"
            style={{ color: "var(--an-gold)" }}
          >
            Our Mission
          </span>
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "var(--an-navy)", fontFamily: "Georgia, serif" }}
          >
            Worship That Transforms
          </h2>
          <p className="text-lg leading-relaxed mb-6" style={{ color: "#555" }}>
            The All Nations Worship Team is not just a performance ministry — we are a <strong style={{ color: "var(--an-navy)" }}>prophetic, anointed company of worshipers</strong> called to lead the body of Christ into the presence of God. Every rehearsal, every Sunday, every special service is an opportunity to encounter the living God.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#666" }}>
            We believe worship is the highest calling of the believer. Our team is committed to excellence in preparation, humility in spirit, and boldness in expression — because what we do in worship matters eternally.
          </p>
        </div>
      </section>

      {/* Team Photos Gallery */}
      <section className="py-20 px-4" style={{ background: "var(--an-bg)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold block mb-3"
              style={{ color: "var(--an-gold)" }}
            >
              The Team in Action
            </span>
            <h2
              className="text-4xl font-bold"
              style={{ color: "var(--an-navy)", fontFamily: "Georgia, serif" }}
            >
              Moments of Worship
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {teamPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden"
                style={{ borderRadius: "8px", aspectRatio: "4/3" }}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, transparent 60%)",
                  }}
                >
                  <p className="text-white text-xs font-medium px-3 pb-3 leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--an-gold)" }}
            >
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Roles & Positions */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold block mb-3"
              style={{ color: "var(--an-gold)" }}
            >
              Areas of Service
            </span>
            <h2
              className="text-4xl font-bold"
              style={{ color: "var(--an-navy)", fontFamily: "Georgia, serif" }}
            >
              Roles on the Worship Team
            </h2>
            <p className="text-base mt-3 max-w-2xl mx-auto" style={{ color: "#666" }}>
              Whether you sing, play an instrument, dance, or serve behind the scenes — there is a place for your gift on the All Nations Worship Team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="p-8 rounded-2xl border relative overflow-hidden"
                style={{ borderColor: "rgba(31,47,92,0.10)", background: "#fafafa" }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ background: role.color }}
                />
                <div className="pl-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow"
                    style={{ background: role.color }}
                  >
                    {role.icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "var(--an-navy)", fontFamily: "Georgia, serif" }}
                  >
                    {role.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rehearsal Schedule */}
      <section className="py-20 px-4" style={{ background: "var(--an-navy)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs tracking-[0.3em] uppercase font-semibold block mb-3"
              style={{ color: "var(--an-gold)" }}
            >
              Rehearsal Schedule
            </span>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              When We Gather to Prepare
            </h2>
            <p className="text-base mt-3 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.70)" }}>
              Excellence in worship begins in the rehearsal room. All active team members are expected to attend scheduled rehearsals.
            </p>
          </div>
          <div className="space-y-4">
            {rehearsalSchedule.map((item) => (
              <div
                key={item.day}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-xl"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(201,168,76,0.20)" }}
              >
                <div
                  className="flex items-center gap-2 text-sm font-bold tracking-wide min-w-[120px]"
                  style={{ color: "var(--an-gold)" }}
                >
                  <Calendar size={16} />
                  {item.day}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/80 min-w-[160px]">
                  <Clock size={14} />
                  {item.time}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.60)" }}>
                  <MapPin size={14} />
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm" style={{ color: "rgba(255,255,255,0.50)" }}>
            Location: All Nations Life Development Christian Center · Port St. Lucie, FL
          </p>
        </div>
      </section>

      {/* Join CTA */}
      <section id="join" className="py-24 px-4" style={{ background: "#fff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="text-xs tracking-[0.3em] uppercase font-semibold block mb-3"
            style={{ color: "var(--an-gold)" }}
          >
            Join the Team
          </span>
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "var(--an-navy)", fontFamily: "Georgia, serif" }}
          >
            Your Gift Has a Home Here
          </h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "#555" }}>
            If you have a heart for worship and a gift for music, singing, dance, or technical arts — we want to hear from you. The All Nations Worship Team is always looking for anointed, committed, and humble servants who want to use their gifts for the glory of God.
          </p>
          <p className="text-base leading-relaxed mb-10" style={{ color: "#777" }}>
            To join or learn more, connect with our Worship Team Director after Sunday service, or reach out through our Connect page. We'd love to have you audition and become part of the family.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--an-gold)", color: "#0a1628", borderRadius: "4px" }}
            >
              Connect With Us <ArrowRight size={16} />
            </Link>
            <Link
              href="/ministries"
              className="inline-flex items-center gap-2 px-8 py-4 font-semibold tracking-wide transition-all duration-200 border"
              style={{ color: "var(--an-navy)", borderColor: "var(--an-navy)", borderRadius: "4px" }}
            >
              ← Back to Ministries
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
