import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Calendar, Clock, MapPin, Phone, ArrowRight, ExternalLink } from "lucide-react";

const recurringEvents = [
  {
    title: "Sunday Morning Worship — 1st Service",
    day: "Every Sunday",
    time: "8:30 AM",
    location: "862 SW Glenview Ct, Port St. Lucie, FL 34953",
    details: "Main sanctuary worship service. Youth ministry and Toddler Lounge available at this service.",
    color: "var(--an-gold)",
  },
  {
    title: "Sunday Morning Worship — 2nd Service",
    day: "Every Sunday",
    time: "11:00 AM",
    location: "862 SW Glenview Ct, Port St. Lucie, FL 34953",
    details: "Main sanctuary worship service. Youth ministry and Toddler Lounge available at this service.",
    color: "var(--an-gold)",
  },
  {
    title: "Youth Ministry",
    day: "Every Sunday",
    time: "8:30 AM & 11:00 AM",
    location: "Youth Wing — All Nations LDCC",
    details: "Dynamic, age-appropriate worship and teaching for children and youth during both Sunday services.",
    color: "var(--an-orange)",
  },
  {
    title: "Toddler Lounge",
    day: "Every Sunday",
    time: "8:30 AM & 11:00 AM",
    location: "Toddler Lounge — All Nations LDCC",
    details: "A safe, nurturing environment for our youngest members (infants through pre-K) during both Sunday services.",
    color: "#D63384",
  },
  {
    title: "Wednesday Bible Study",
    day: "Every Wednesday",
    time: "7:00 PM",
    location: "862 SW Glenview Ct, Port St. Lucie, FL 34953 & Online",
    details: "In-depth study of God's Word with Bishop Cornelius Blake and the pastoral team. Available in-person and online.",
    color: "var(--an-teal)",
  },
  {
    title: "Intercessory Prayer Line",
    day: "Every Monday",
    time: "7:00 PM – 8:30 PM",
    location: "Zoom · Meeting ID: 327 436 787 · Dial-in Password: 5933324363 · Phone: +1 (234) 203-2766",
    details: "Join our corporate prayer line every Monday evening for intercession, worship, and seeking the face of God together. Connect via Zoom or dial in by phone from anywhere.",
    color: "var(--an-blue)",
  },
  {
    title: "Tuesday Bible Talk — Journey with Jesus",
    day: "Every Tuesday",
    time: "7:30 PM",
    location: "Online",
    details: "A mid-week Bible conversation for believers who want to go deeper. Join us every Tuesday at 7:30 PM for the Journey with Jesus Bible Talk series.",
    color: "var(--an-teal)",
  },
];

const completedEvents2026 = [
  // ── July 2026 — COMPLETED ──────────────────────────────────────────────────
  {
    title: "🧬 DNA Arts Showcase — Designed Not Average",
    date: "Wednesday, July 15, 2026",
    desc: "All Nations LDCC NextGen celebrated God-given gifts through dance, poetry, singing, musicianship, rap, and other performing arts for His glory.",
    color: "#9B59B6",
  },
  {
    title: "🤖 AI Class 102 — Level Up With More Advanced Skills",
    date: "Wednesday, July 15, 2026",
    desc: "AmarAI Consulting Group LLC presented an in-person advanced AI skills class focused on putting AI to work for participants.",
    color: "#1A2F6B",
  },
  // ── June 2026 — KINGS, FUEL YOUR FIRE (Men's Month) — COMPLETED ──────────
  {
    title: "👑 Kings, Fuel Your Fire — Men's Month June 2026",
    date: "Every Sunday in June 2026",
    desc: "A powerful month of Men's Ministry — Start the Fire, Sustain the Fire, Multiply the Fire, Protect the Fire. Iron sharpens iron. One Church. One Purpose. One Legacy.",
    color: "var(--an-gold)",
  },
  {
    title: "🎮 Legacy In The Making — Singles Game Night",
    date: "Friday, June 12, 2026",
    desc: "Building Friendships · Discovering Purpose · Creating Legacy. A fun, faith-filled chips & dips night for singles.",
    color: "#C8901A",
  },
  {
    title: "🎯 Pre Father's Day — Gun Range Event",
    date: "Saturday, June 20, 2026",
    desc: "Sharpen your focus. Build your discipline. Strengthen your aim. Fellowship. Fire. Focus.",
    color: "var(--an-navy)",
  },
  {
    title: "🍖 Family BBQ Fellowship — Whispering Pines Park",
    date: "Saturday, June 27, 2026",
    desc: "Father & Son Games · Prayer Circle for Fathers · Building Stronger Families · Food. Fun. Fellowship.",
    color: "var(--an-orange)",
  },
  {
    title: "🤖 AI Class 101 with AmarAi — Last Class!",
    date: "Tuesday, June 16, 2026",
    desc: "AI 101: An Introduction to AI That Works for You — presented by AmarAi Consulting Group LLC. In-person interactive class.",
    color: "#1A2F6B",
  },
  {
    title: "🌿 Senior Wellness Afternoon — The Great Commission Team",
    date: "Thursday, June 4, 2026",
    desc: "A FREE wellness afternoon for seniors and caregivers. Three sessions: Mental Wellness After 50, Medicare & Medicaid, and Prescriptions — What You Don't Know.",
    color: "#2E7D32",
  },
  // ── May 2026 — ARISE AND TAKE FLIGHT (Women's Month) — COMPLETED ─────────
  {
    title: "✈️ Women's Month — Arise & Take Flight",
    date: "May 2026",
    desc: "A powerful month celebrating the women of God — worship services, book discussion, Pearls Power Purpose & Possibilities, Couples Night, Women's Conference, and Mother's Day celebration.",
    color: "#D63384",
  },
  // ── April 2026 — TABERNACLE — COMPLETED ──────────────────────────────────
  {
    title: "Tabernacle 2026 — Cultural Night",
    date: "Tuesday, April 1, 2026",
    desc: "A beautiful night of worship, culture, and community united under one roof. Thank you to all who joined us!",
    color: "var(--an-teal)",
  },
  {
    title: "Tabernacle 2026 — Good Friday: Walk Through the Tabernacle",
    date: "Friday, April 3, 2026",
    desc: "A reverent, powerful walk through the Tabernacle of Moses — experiencing the story of redemption step by step.",
    color: "var(--an-red)",
  },
  {
    title: "Easter Sunday Celebration",
    date: "Sunday, April 5, 2026",
    desc: "He is Risen! A powerful Easter Sunday celebration honoring the resurrection of Jesus Christ.",
    color: "var(--an-red)",
  },
];

const upcomingEvents2026 = [
  // ── JULY 2026 — DNA: DESIGNED NOT AVERAGE ────────────────────────────────
  {
    title: "🧬 DNA Daily Word — Designed Not Average",
    date: "Every Day in July 2026",
    time: "12:00 AM (Midnight EST)",
    desc: "Pastor Shelia Blake delivers a fresh Daily Word every single day in July — DNA: Designed Not Average. Each day unlocks at midnight Eastern Time. Watch the cinematic devotional video and be encouraged. Visit allnationsldcc.org/daily-word.",
    color: "var(--an-gold)",
  },
  {
    title: "🎭 Takeover Arts Conference — TKO 2K26",
    date: "July 23–25, 2026",
    time: "Multi-Day Event",
    desc: "The Takeover Arts Conference returns! Visionary Robert Donaldson Jr, Lady Becquell Robinson, and Prophetess Natasha Hines-Duncan. 6666 S US Highway 1, Port Saint Lucie, FL 34956. Register on Eventbrite: TKO 2K26. Jeremiah 20:9.",
    color: "#C8901A",
  },
  {
    title: "💼 A Better Job Fair — Hosted by All Nations LDCC",
    date: "Tuesday, July 28, 2026",
    time: "10:00 AM – 1:00 PM",
    desc: "Save the Date! Better Together is partnering with All Nations LDCC to host a Community Job Fair connecting local businesses with a large pool of diverse job seekers. On-the-spot interviews! Employers, resources, and services onsite. 862 SW Glenview Ct, Port St. Lucie, FL 34953. Text \"JOBS\" to (844) 987-3949 or visit bettertogetherus.org/AllNations.",
    color: "#5B2D8E",
    flyer: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/lgLLJHRQAefwZhRH.jpg",
  },
  // ── All May & June 2026 events are past — see completedEvents2026 below ──
];

export default function Events() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>Stay Connected</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">Events & Calendar</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            There is always something happening at All Nations. Join us for worship, study, outreach, and community.
          </p>
        </div>
      </div>

      {/* ── JULY 2026 MONTH THEME — DNA: DESIGNED NOT AVERAGE ── */}
      <section style={{ background: "linear-gradient(135deg, #0a0020 0%, #1a0040 50%, #0a0020 100%)", borderBottom: "4px solid #9B59B6" }}>
        <div className="container py-0">
          <div className="flex flex-col md:flex-row items-center gap-0 md:gap-10">
            <div className="w-full md:w-3/5 flex-shrink-0">
              <img
                src="/nextgen-dna-designed-not-average-flyer.png"
                alt="NextGen DNA: Designed Not Average — July 2026 Youth Month Theme | All Nations LDCC"
                className="w-full h-auto object-contain"
                style={{ maxHeight: "520px", objectPosition: "center" }}
              />
            </div>
            <div className="flex-1 py-12 px-6 md:px-0 text-center md:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full font-body font-bold text-xs uppercase tracking-widest mb-3" style={{ background: "rgba(155,89,182,0.25)", color: "#C39BD3" }}>
                🧬 July 2026 — Youth Month Theme
              </span>
              <h2 className="font-display font-bold text-white mt-3 mb-2" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: 1.1 }}>
                DNA: Designed Not Average
              </h2>
              <p className="font-body text-base font-bold mb-2" style={{ color: "#C39BD3" }}>Discover · Develop · Activate · Release</p>
              <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.80)", maxWidth: 480 }}>
                All Nations LDCC NextGen presents July Youth Month — DNA: Designed Not Average. Different Gifts. One Spirit. One Purpose. One Kingdom. <em>1 Corinthians 12:4</em>
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["You Are Chosen.", "You Are Equipped.", "Built for Purpose."].map((tag: string) => (
                  <span key={tag} className="font-body font-bold text-xs px-3 py-1 rounded-full" style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REMOVED: Senior Wellness Afternoon — June 4, 2026 (past event) */}
      {/* Featured Event — Takeover Arts Conference — July 23-25, 2026 */}
      <section style={{ background: "linear-gradient(135deg, #0a0020 0%, #1a0040 50%, #0a0020 100%)", borderBottom: "4px solid #C8901A" }}>
        <div className="container py-0">
          <div className="flex flex-col md:flex-row items-center gap-0 md:gap-10">
            {/* Flyer Image */}
            <div className="w-full md:w-2/5 flex-shrink-0 flex justify-center py-8 md:py-0">
              <img
                src="/takeover-arts-conference-flyer.png"
                alt="Takeover Arts Conference — July 23-25, 2026 | Port Saint Lucie, FL"
                className="h-auto object-contain rounded-2xl shadow-2xl"
                style={{ maxHeight: "560px", maxWidth: "380px", width: "100%", border: "3px solid rgba(200,144,26,0.5)" }}
              />
            </div>
            {/* Event Details */}
            <div className="flex-1 py-12 px-6 md:px-0 text-center md:text-left">
              <span className="section-label" style={{ color: "var(--an-gold)", letterSpacing: "0.15em" }}>The Takeover Arts Conference Presents</span>
              <h2 className="font-display font-bold text-white mt-3 mb-2" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: 1.1 }}>
                TAKEOVER Arts Conference
              </h2>
              <p className="font-body text-base font-bold mb-1" style={{ color: "var(--an-gold)" }}>TKO 2K26 — Jeremiah 20:9</p>
              <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.80)", maxWidth: 480 }}>
                Visionary Robert Donaldson Jr · Lady Becquell Robinson · Prophetess Natasha Hines-Duncan. A powerful multi-day arts conference celebrating the gifts of the Spirit through creative expression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                <div className="flex items-center gap-2 text-white">
                  <Calendar size={16} style={{ color: "var(--an-gold)" }} />
                  <span className="font-body font-bold text-sm">July 23–25, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MapPin size={16} style={{ color: "var(--an-gold)" }} />
                  <span className="font-body text-sm">6666 S US Hwy 1, Port Saint Lucie, FL 34956</span>
                </div>
              </div>
              <div className="rounded-xl p-4 mb-6 text-left" style={{ background: "rgba(200,144,26,0.12)", border: "1px solid rgba(200,144,26,0.4)" }}>
                <div className="font-body font-bold text-sm mb-2" style={{ color: "var(--an-gold)" }}>Register on Eventbrite</div>
                <div className="font-body text-xs text-white mb-1">Search: <strong>TKO 2K26</strong> on Eventbrite</div>
                <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>"But his word was in my heart like a burning fire shut up in my bones" — Jeremiah 20:9</div>
              </div>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="https://www.eventbrite.com" target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2">
                  Register on Eventbrite — TKO 2K26
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REMOVED: AI Class 101 — June 16, 2026 (past event) */}
      {/* Featured Event — A Better Job Fair — July 28, 2026 */}
      <section style={{ background: "linear-gradient(135deg, #1a0040 0%, #3b0080 50%, #1a0040 100%)", borderBottom: "4px solid #00BFFF" }}>
        <div className="container py-0">
          <div className="flex flex-col md:flex-row-reverse items-center gap-0 md:gap-10">
            {/* Flyer Image */}
            <div className="w-full md:w-2/5 flex-shrink-0 flex justify-center py-8 md:py-0">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/lgLLJHRQAefwZhRH.jpg"
                alt="A Better Job Fair — Tuesday, July 28, 2026 | 10:00 AM – 1:00 PM | All Nations LDCC"
                className="h-auto object-contain rounded-2xl shadow-2xl"
                style={{ maxHeight: "560px", maxWidth: "400px", width: "100%", border: "3px solid rgba(0,191,255,0.5)" }}
              />
            </div>
            {/* Event Details */}
            <div className="flex-1 py-12 px-6 md:px-0 text-center md:text-left">
              <span className="section-label" style={{ color: "#00BFFF", letterSpacing: "0.15em" }}>Save the Date — Hosted by All Nations LDCC</span>
              <h2 className="font-display font-bold text-white mt-3 mb-2" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: 1.1 }}>
                A Better Job Fair
              </h2>
              <p className="font-body text-base font-bold mb-1" style={{ color: "#00BFFF" }}>Are You Looking for a New Job?</p>
              <p className="font-body text-sm mb-6" style={{ color: "rgba(255,255,255,0.80)", maxWidth: 480 }}>
                Better Together is partnering with All Nations LDCC to connect local businesses with a large pool of diverse job seekers. On-the-spot interviews! Employers, resources, and services onsite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
                <div className="flex items-center gap-2 text-white">
                  <Calendar size={16} style={{ color: "#00BFFF" }} />
                  <span className="font-body font-bold text-sm">Tuesday, July 28, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Clock size={16} style={{ color: "#00BFFF" }} />
                  <span className="font-body font-bold text-sm">10:00 AM – 1:00 PM</span>
                </div>
              </div>
              <div className="rounded-xl p-4 mb-6 text-left" style={{ background: "rgba(0,191,255,0.10)", border: "1px solid rgba(0,191,255,0.4)" }}>
                <div className="font-body font-bold text-sm mb-2" style={{ color: "#00BFFF" }}>Event Details</div>
                <div className="font-body text-xs text-white mb-1">📍 862 SW Glenview Ct, Port St. Lucie, FL 34953</div>
                <div className="font-body text-xs text-white mb-1">💼 On-the-spot interviews available</div>
                <div className="font-body text-xs text-white mb-1">🆓 FREE to attend for job seekers</div>
                <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>Text "JOBS" to (844) 987-3949 or visit bettertogetherus.org/AllNations</div>
              </div>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="https://bettertogetherus.org/AllNations" target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2">
                  More Info → bettertogetherus.org/AllNations
                </a>
                <a href="tel:7723437021" className="btn-outline flex items-center gap-2" style={{ borderColor: "#00BFFF", color: "#00BFFF" }}>
                  <Phone size={14} /> Call 772-343-7021
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Every Week</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Weekly <span style={{ color: "var(--an-gold)" }}>Schedule</span>
            </h2>
            <p className="font-body text-sm mt-2" style={{ color: "#888" }}>
              862 SW Glenview Ct, Port St. Lucie, FL 34953 &nbsp;|&nbsp; 772-343-7021
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recurringEvents.map(ev => (
              <div key={ev.title} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden ministry-card flex">
                <div className="w-2 flex-shrink-0" style={{ background: ev.color }} />
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display font-bold text-base" style={{ color: "var(--an-navy)" }}>{ev.title}</h3>
                    <span className="font-body font-bold text-xs px-2 py-1 rounded-full flex-shrink-0" style={{ background: `${ev.color}18`, color: ev.color }}>
                      {ev.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={13} style={{ color: ev.color }} />
                    <span className="font-body text-sm font-bold" style={{ color: ev.color }}>{ev.day}</span>
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin size={13} style={{ color: "#aaa", flexShrink: 0, marginTop: 2 }} />
                    <span className="font-body text-xs" style={{ color: "#888" }}>{ev.location}</span>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{ev.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events 2026 */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">What's Ahead</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Upcoming Events <span style={{ color: "var(--an-gold)" }}>2026</span>
            </h2>
            <p className="font-body text-sm mt-2" style={{ color: "#888" }}>
              July 2026 · DNA: Designed Not Average · Takeover Arts Conference · Job Fair
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents2026.map(ev => (
              <div key={ev.title} className="bg-white rounded-xl shadow-sm ministry-card border-t-4 overflow-hidden relative" style={{ borderTopColor: ev.color }}>
                {(ev as any).thisWeek && (
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2 py-0.5 rounded-full font-body font-bold text-xs" style={{ background: "#2E7D32", color: "#fff" }}>
                    🌿 THIS WEEK
                  </div>
                )}
                {(ev as any).flyer && (
                  <img
                    src={(ev as any).flyer}
                    alt={`${ev.title} flyer`}
                    className="w-full object-cover"
                    style={{ maxHeight: "220px", objectPosition: "top" }}
                  />
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={16} style={{ color: ev.color }} />
                    <span className="font-body font-bold text-xs" style={{ color: ev.color }}>{ev.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{ev.title}</h3>
                  {ev.time !== "TBD" && (
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={12} style={{ color: "#aaa" }} />
                      <span className="font-body text-xs" style={{ color: "#888" }}>{ev.time}</span>
                    </div>
                  )}
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Completed Events */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <span className="section-label">Recently Completed</span>
              <h3 className="font-display text-2xl font-bold" style={{ color: "var(--an-navy)" }}>
                Events We <span style={{ color: "var(--an-gold)" }}>Celebrated Together</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {completedEvents2026.map(ev => (
                <div key={ev.title} className="rounded-xl p-5 border border-gray-200 bg-gray-50 relative opacity-80">
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    <span>✓</span> Completed
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} style={{ color: ev.color }} />
                    <span className="font-body font-bold text-xs" style={{ color: ev.color }}>{ev.date}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm mb-1" style={{ color: "var(--an-navy)" }}>{ev.title}</h4>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "#888" }}>{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Line Info */}
      <section className="py-16" style={{ background: "var(--an-blue)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label" style={{ color: "rgba(255,255,255,0.70)" }}>Join Us in Prayer</span>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Weekly Prayer Line
              </h2>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                Our corporate prayer line is one of the most powerful tools in our ministry. Join believers from across the Treasure Coast as we come together to intercede, worship, and seek the face of God.
              </p>
              <div className="font-body text-sm mb-6 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.85)" }}>
                <div className="font-bold mb-1" style={{ color: "var(--an-gold)" }}>Mondays at 7:00 PM</div>
                <div>Dial-In: <strong>1 (234) 203-2766</strong></div>
                <div>Meeting ID: <strong>327 436 787</strong></div>
                <div>Dial-in Password: <strong>5933324363</strong></div>
                <div className="mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>Or visit <a href="https://www.allnationsldcc.org" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--an-gold)" }}>www.allnationsldcc.org</a> for updates.</div>
              </div>
              <a href="tel:7723437021" className="btn-gold flex items-center gap-2 w-fit">
                <Phone size={14} /> Call 772-343-7021
              </a>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-display font-bold text-white text-xl mb-6">Service Times at a Glance</h3>
              <div className="space-y-4">
                {[
                  { label: "Sunday 1st Service", time: "8:30 AM", note: "Youth & Toddler Lounge" },
                  { label: "Sunday 2nd Service", time: "11:00 AM", note: "Youth & Toddler Lounge" },
                  { label: "Wednesday Bible Study", time: "7:00 PM", note: "In-person & Online" },
                  { label: "Prayer Line", time: "7:00 PM", note: "Mondays · Dial-In Available" },
                ].map(s => (
                  <div key={s.label} className="flex items-center justify-between py-3 border-b border-white/10">
                    <div>
                      <div className="font-body font-bold text-sm text-white">{s.label}</div>
                      <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.60)" }}>{s.note}</div>
                    </div>
                    <div className="font-display font-bold text-base" style={{ color: "var(--an-gold)" }}>{s.time}</div>
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
          <h2 className="font-display text-3xl font-bold text-white mb-4">Plan Your Visit</h2>
          <p className="font-body text-base mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            We would love to see you this Sunday. Join us at 862 SW Glenview Ct, Port St. Lucie, FL 34953.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/connect" className="btn-gold flex items-center gap-2">Plan Your Visit <ArrowRight size={14} /></Link>
            <a href="https://www.facebook.com/AllNationsLDCC/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>Watch Online</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
