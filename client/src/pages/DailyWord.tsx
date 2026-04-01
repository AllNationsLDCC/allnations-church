import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { BookOpen, Play, Heart, Share2, Bell, ArrowRight, Calendar, Mic, Video } from "lucide-react";

// Design: Warm, intimate, personal — Pastor Shelia's voice and presence
// Daily Word page — AI twin/clone delivers daily live devotional word

const PASTOR_SHELIA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/CopyofIMG_4616_f4ce05ab.jpg";

// Sample devotional entries (to be replaced with live content)
const recentDevotionals = [
  {
    date: "April 1, 2026",
    day: "Wednesday",
    title: "New Month, New Mercies",
    scripture: "Lamentations 3:22-23",
    scriptureText: "\"The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.\"",
    excerpt: "April is here — a month of resurrection, renewal, and fresh beginnings. God's mercies are not recycled; they are brand new this morning. Step into this new month with expectation. What God could not do in March, He is ready to do in April.",
    color: "var(--an-teal)",
    duration: "4 min read",
    type: "written",
  },
  {
    date: "March 31, 2026",
    day: "Tuesday",
    title: "Finish Strong",
    scripture: "Philippians 3:14",
    scriptureText: "\"I press toward the mark for the prize of the high calling of God in Christ Jesus.\"",
    excerpt: "As March closes, do not coast into April — press. Finish this month with the same fire you started with. Every seed you planted this month is about to break ground. Press toward the mark.",
    color: "var(--an-gold)",
    duration: "3 min read",
    type: "written",
  },
  {
    date: "March 30, 2026",
    day: "Monday",
    title: "He Is Risen — Walk in Resurrection Power",
    scripture: "Romans 8:11",
    scriptureText: "\"But if the Spirit of him who raised Jesus from the dead dwells in you, he who raised Christ Jesus from the dead will also give life to your mortal bodies through his Spirit who dwells in you.\"",
    excerpt: "Easter is almost here. The same Spirit that raised Jesus from the dead lives in you. That is not a metaphor — that is resurrection power available to you right now. Walk in it this week.",
    color: "var(--an-navy)",
    duration: "5 min read",
    type: "written",
  },
];

const features = [
  {
    icon: <Video size={22} />,
    title: "Daily Video Word",
    desc: "A short, powerful daily message delivered by Pastor Shelia — available every morning to start your day anchored in the Word.",
    color: "var(--an-red)",
  },
  {
    icon: <Mic size={22} />,
    title: "AI Twin Devotional",
    desc: "Experience Pastor Shelia's voice and teaching style through our AI-powered digital twin — delivering personalized daily encouragement 24/7.",
    color: "var(--an-teal)",
    badge: "Coming Soon",
  },
  {
    icon: <BookOpen size={22} />,
    title: "Written Devotionals",
    desc: "In-depth written devotionals with scripture, reflection questions, and practical application for your daily walk.",
    color: "var(--an-green)",
  },
  {
    icon: <Bell size={22} />,
    title: "Daily Notifications",
    desc: "Subscribe to receive your Daily Word every morning at 6 AM directly to your phone or email — never miss a word.",
    color: "var(--an-gold)",
  },
];

export default function DailyWord() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="page-hero" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, var(--an-navy) 60%, #0d3b5e 100%)" }}>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label" style={{ color: "var(--an-gold)" }}>Fresh Every Morning</span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-2 mb-4 leading-tight">
                Daily Word<br />
                <span style={{ color: "var(--an-gold)", fontStyle: "italic" }}>from Pastor Shelia</span>
              </h1>
              <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
                Start every day anchored in the Word. Executive Pastor Shelia Blake delivers a fresh, faith-filled word of encouragement, instruction, and inspiration — every single day.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#today" className="btn-gold flex items-center gap-2">
                  <Play size={16} /> Today's Word
                </Link>
                <Link href="#subscribe" className="btn-outline flex items-center gap-2" style={{ borderColor: "#fff", color: "#fff" }}>
                  <Bell size={16} /> Subscribe for Daily Alerts
                </Link>
              </div>
            </div>
            {/* Pastor Photo Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: "var(--an-gold)" }}>
                  <img src={PASTOR_SHELIA} alt="Executive Pastor Shelia Blake" className="w-full h-full object-cover object-top" />
                </div>
                {/* Live badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full shadow-lg flex items-center gap-2"
                  style={{ background: "var(--an-gold)", color: "var(--an-navy)" }}>
                  <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  <span className="font-body font-bold text-sm">Daily Word — Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Word Feature */}
      <section id="today" className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="section-label">Today's Devotional</span>
              <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
                April 1, 2026 — <span style={{ color: "var(--an-gold)" }}>Wednesday</span>
              </h2>
            </div>

            {/* Featured Devotional Card */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="p-8 border-b border-gray-100" style={{ background: "linear-gradient(135deg, var(--an-navy) 0%, #0d3b5e 100%)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <img src={PASTOR_SHELIA} alt="Pastor Shelia Blake" className="w-12 h-12 rounded-full object-cover object-top border-2" style={{ borderColor: "var(--an-gold)" }} />
                  <div>
                    <div className="font-body font-bold text-white text-sm">Executive Pastor Shelia Blake</div>
                    <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.60)" }}>All Nations Life Development Christian Center</div>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">New Month, New Mercies</h3>
                <div className="flex items-center gap-2">
                  <BookOpen size={14} style={{ color: "var(--an-gold)" }} />
                  <span className="font-body text-sm font-bold" style={{ color: "var(--an-gold)" }}>Lamentations 3:22-23</span>
                </div>
              </div>

              <div className="p-8">
                {/* Scripture */}
                <blockquote className="rounded-xl p-5 mb-6 border-l-4" style={{ background: "rgba(197,157,47,0.07)", borderLeftColor: "var(--an-gold)" }}>
                  <p className="font-body text-base italic leading-relaxed" style={{ color: "#444" }}>
                    "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness."
                  </p>
                  <cite className="font-body text-xs font-bold mt-2 block" style={{ color: "var(--an-gold)" }}>— Lamentations 3:22-23 (ESV)</cite>
                </blockquote>

                {/* Message */}
                <div className="space-y-4 mb-8">
                  <p className="font-body text-base leading-relaxed" style={{ color: "#444" }}>
                    April is here — and with it comes a fresh wave of God's mercy, grace, and possibility. This is not just a new month on the calendar; it is a divine reset. <strong>God's mercies are not recycled — they are brand new this morning.</strong>
                  </p>
                  <p className="font-body text-base leading-relaxed" style={{ color: "#444" }}>
                    Whatever you carried into this month from last month — the disappointments, the unanswered prayers, the setbacks — God says: release it. His faithfulness is not contingent on your performance. It is rooted in His character. He was faithful in January. He was faithful in March. And He will be faithful in April.
                  </p>
                  <p className="font-body text-base leading-relaxed" style={{ color: "#444" }}>
                    Step into this new month with expectation. <strong>What God could not complete in March, He is ready to accomplish in April.</strong> This is also the month of resurrection — Easter Sunday is April 5. Let the power of the risen Christ breathe new life into every area of your world.
                  </p>
                </div>

                {/* Reflection */}
                <div className="rounded-xl p-5 mb-6" style={{ background: "var(--an-bg)" }}>
                  <h4 className="font-display font-bold text-base mb-3" style={{ color: "var(--an-navy)" }}>Today's Reflection</h4>
                  <ul className="space-y-2">
                    {[
                      "What are you believing God for in April that you did not see in March?",
                      "How does the resurrection of Jesus Christ change the way you face your current challenges?",
                      "What new mercy do you need to receive from God today — and what old burden do you need to release?",
                    ].map(q => (
                      <li key={q} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--an-gold)" }} />
                        <span className="font-body text-sm leading-relaxed" style={{ color: "#555" }}>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prayer */}
                <div className="rounded-xl p-5 mb-6" style={{ background: "linear-gradient(135deg, var(--an-navy) 0%, #0d3b5e 100%)" }}>
                  <h4 className="font-display font-bold text-base text-white mb-2">Today's Prayer</h4>
                  <p className="font-body text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
                    "Father, thank You for new mercies this morning. I receive the fresh start You are offering me in this new month. I release every disappointment and delay from last month into Your hands. Fill me with resurrection faith as Easter approaches. Let Your faithfulness be my confidence and Your Word be my foundation. In Jesus' name, Amen."
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-bold transition-all hover:scale-105"
                    style={{ background: "var(--an-gold)", color: "var(--an-navy)" }}>
                    <Heart size={14} /> Save This Word
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-bold transition-all hover:scale-105 border"
                    style={{ borderColor: "var(--an-navy)", color: "var(--an-navy)" }}>
                    <Share2 size={14} /> Share
                  </button>
                  <a href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-bold transition-all hover:scale-105"
                    style={{ background: "var(--an-navy)", color: "#fff" }}>
                    <Play size={14} /> Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">How It Works</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Your Daily Word, <span style={{ color: "var(--an-gold)" }}>Your Way</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className="ministry-card bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
                {f.badge && (
                  <span className="absolute top-4 right-4 font-body font-bold text-xs px-2 py-1 rounded-full"
                    style={{ background: "var(--an-gold)", color: "var(--an-navy)" }}>
                    {f.badge}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: f.color }}>
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{f.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Twin Section */}
      <section className="py-20" style={{ background: "var(--an-navy)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label" style={{ color: "rgba(255,255,255,0.55)" }}>Innovation Meets Ministry</span>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Pastor Shelia's <span style={{ color: "var(--an-gold)" }}>AI Digital Twin</span>
            </h2>
            <p className="font-body text-base mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              We are pioneering a groundbreaking ministry innovation — an AI-powered digital twin of Executive Pastor Shelia Blake that delivers personalized daily devotionals, answers faith questions, and provides encouragement in her voice and teaching style, available 24 hours a day, 7 days a week.
            </p>
            <p className="font-body text-sm mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.60)" }}>
              This technology ensures that no member of the All Nations family ever goes without a word of encouragement, guidance, or prayer — regardless of time zone, schedule, or circumstance. The Word is always available.
            </p>
            <div className="rounded-2xl p-6 mb-8" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="font-display font-bold text-xl text-white mb-2">Coming Soon</div>
              <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                The AI Twin is currently in development. Subscribe below to be among the first to experience this revolutionary ministry tool when it launches.
              </p>
            </div>
            <Link href="/connect" className="btn-gold flex items-center gap-2 w-fit mx-auto">
              Get Notified When It Launches <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Devotionals Archive */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Devotional Archive</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Recent <span style={{ color: "var(--an-gold)" }}>Daily Words</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {recentDevotionals.map(dev => (
              <div key={dev.title} className="ministry-card bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-2" style={{ background: dev.color }} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar size={13} style={{ color: dev.color }} />
                    <span className="font-body text-xs" style={{ color: "#888" }}>{dev.date} — {dev.day}</span>
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{dev.title}</h3>
                  <div className="font-body text-xs font-bold mb-3" style={{ color: dev.color }}>{dev.scripture}</div>
                  <blockquote className="font-body text-xs italic leading-relaxed mb-3" style={{ color: "#666" }}>
                    {dev.scriptureText}
                  </blockquote>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#555" }}>
                    {dev.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs" style={{ color: "#aaa" }}>{dev.duration}</span>
                    <button className="font-body font-bold text-xs flex items-center gap-1" style={{ color: dev.color }}>
                      Read More <ArrowRight size={11} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="py-16" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Bell size={36} style={{ color: "var(--an-gold)" }} className="mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--an-navy)" }}>
              Never Miss a Daily Word
            </h2>
            <p className="font-body text-base mb-8" style={{ color: "#666" }}>
              Subscribe to receive Pastor Shelia's Daily Word every morning at 6 AM — delivered directly to your inbox or phone.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full border font-body text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: "var(--an-gold)" }}
              />
              <button className="btn-gold flex items-center gap-2 whitespace-nowrap">
                <Bell size={14} /> Subscribe
              </button>
            </div>
            <p className="font-body text-xs mt-3" style={{ color: "#aaa" }}>
              No spam. Unsubscribe anytime. Your information is safe with us.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
