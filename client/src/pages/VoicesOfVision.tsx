import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, Star, Calendar, Mic } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-hero-colorful-VX5ZXxxDZnMKgCCrdw5AU7.webp";

const visionPillars = [
  { title: "Prophetic Word", desc: "Receiving and walking in the prophetic direction God has given All Nations for 2026 — a year of breakthrough, expansion, and divine alignment.", color: "var(--an-gold)", icon: <Mic size={22} /> },
  { title: "Community Transformation", desc: "Deepening our impact in Port St. Lucie through expanded outreach, youth programs, and community development initiatives.", color: "var(--an-green)", icon: <Star size={22} /> },
  { title: "Leadership Development", desc: "Raising up the next generation of leaders through the Leadership Lab, discipleship courses, and ministry training.", color: "var(--an-blue)", icon: <Star size={22} /> },
  { title: "Kingdom Expansion", desc: "Growing the reach of All Nations through digital ministry, podcast growth, and the Great Commission in action.", color: "var(--an-teal)", icon: <Star size={22} /> },
  { title: "Financial Stewardship", desc: "Pursuing grant funding, building sustainable ministry systems, and teaching biblical financial principles to our congregation.", color: "var(--an-orange)", icon: <Star size={22} /> },
  { title: "Family Restoration", desc: "Strengthening marriages, families, and relationships through counseling, discipleship, and intentional community.", color: "var(--an-red)", icon: <Star size={22} /> },
];

const voicesEvents = [
  { title: "Vision Sunday Kickoff", date: "January 2026", status: "Completed", color: "var(--an-green)" },
  { title: "Tabernacle 2026 — Cultural Night", date: "April 1, 2026", status: "Completed", color: "var(--an-green)" },
  { title: "Easter Sunday Celebration", date: "April 5, 2026", status: "Completed", color: "var(--an-green)" },
  { title: "Tabernacle 2026 — Good Friday Walk", date: "April 3, 2026", status: "Completed", color: "var(--an-green)" },
  { title: "Arise & Take Flight — Women's Month", date: "May 2026", status: "Upcoming", color: "#D63384" },
  { title: "Mother's Day Celebration", date: "May 10, 2026", status: "Upcoming", color: "#D63384" },
  { title: "Voices of Vision Conference", date: "Spring 2026", status: "Upcoming", color: "var(--an-gold)" },
  { title: "Mid-Year Vision Review", date: "July 2026", status: "Upcoming", color: "var(--an-blue)" },
  { title: "Vision Summit & Celebration", date: "December 2026", status: "Upcoming", color: "var(--an-teal)" },
];

export default function VoicesOfVision() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "rgba(31,47,92,0.85)" }} />
        <div className="relative z-10 container py-20 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>All Nations LDCC</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-3 mb-4">
            Voices of Vision
          </h1>
          <div className="font-display text-3xl font-bold mb-6" style={{ color: "var(--an-gold)" }}>2026</div>
          <p className="font-body text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            A year of prophetic alignment, bold faith, and kingdom advancement. God is speaking — and All Nations is moving.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/events" className="btn-gold flex items-center gap-2">
              <Calendar size={16} /> View Events
            </Link>
            <Link href="/connect" className="btn-outline flex items-center gap-2" style={{ borderColor: "#fff", color: "#fff" }}>
              Get Involved <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="section-label">The Word for 2026</span>
            <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "var(--an-navy)" }}>
              What God is Saying to<br />
              <span style={{ color: "var(--an-gold)" }}>All Nations in 2026</span>
            </h2>
            <blockquote className="font-display text-xl italic mb-4" style={{ color: "var(--an-navy)" }}>
              "Write the vision and make it plain on tablets, that he may run who reads it. For the vision is yet for an appointed time; but at the end it will speak, and it will not lie. Though it tarries, wait for it; because it will surely come."
            </blockquote>
            <cite className="font-body text-sm" style={{ color: "var(--an-gold)" }}>— Habakkuk 2:2-3</cite>
            <p className="font-body text-base leading-relaxed mt-8" style={{ color: "#555" }}>
              2026 is a year of Voices and Vision at All Nations Life Development Christian Center. God is raising prophetic voices — men and women who will speak His Word with clarity, courage, and conviction. And He is releasing fresh vision — strategic, Spirit-led direction for our church, our community, and each individual believer.
            </p>
            <p className="font-body text-base leading-relaxed mt-4" style={{ color: "#555" }}>
              Under the leadership of Bishop Cornelius Blake and Executive Pastor Shelia Blake, All Nations is pressing forward in six key pillars of vision for this year — each one representing a dimension of the Kingdom work God has called us to in this season.
            </p>
          </div>

          {/* Vision Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionPillars.map((p, i) => (
              <div key={p.title} className="ministry-card bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: p.color }}>
                  {p.icon}
                </div>
                <div className="font-body font-bold text-xs mb-2" style={{ color: p.color }}>Pillar {i + 1}</div>
                <h3 className="font-display font-bold text-lg mb-3" style={{ color: "var(--an-navy)" }}>{p.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Events Timeline */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">The Journey</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Voices of Vision <span style={{ color: "var(--an-gold)" }}>Events</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: "rgba(31,47,92,0.15)" }} />
              <div className="space-y-8">
                {voicesEvents.map(ev => (
                  <div key={ev.title} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10" style={{ background: ev.color }}>
                      <Calendar size={18} className="text-white" />
                    </div>
                    <div className="bg-white rounded-xl p-5 flex-1 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-base" style={{ color: "var(--an-navy)" }}>{ev.title}</h3>
                        <span className="font-body font-bold text-xs px-2 py-1 rounded-full" style={{ background: `${ev.color}18`, color: ev.color }}>
                          {ev.status}
                        </span>
                      </div>
                      <div className="font-body text-sm" style={{ color: ev.color }}>{ev.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--an-navy)" }}>
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Be Part of the Vision
          </h2>
          <p className="font-body text-base mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            God has a role for you in what He is doing at All Nations in 2026. Connect with us and step into your part of the vision.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/connect" className="btn-gold flex items-center gap-2">Get Connected <ArrowRight size={14} /></Link>
            <Link href="/give" className="btn-outline flex items-center gap-2" style={{ borderColor: "#fff", color: "#fff" }}>Support the Vision</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
