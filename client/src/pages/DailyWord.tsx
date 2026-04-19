import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { BookOpen, Bell, ArrowRight, Flame, Calendar, Mic, Video, Loader2 } from "lucide-react";
import { useState } from "react";
import { sendEmail, TEMPLATE_NEWSLETTER } from "@/lib/emailjs";
import { toast } from "sonner";

// Design: Warm, intimate, personal — Pastor Shelia's voice and presence
// Daily Word page — Launching Monday April 20, 2026
// April theme: Keep the Fire Burning

const PASTOR_SHELIA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/CopyofIMG_4616_f4ce05ab.jpg";

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

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSending(true);
    const success = await sendEmail(TEMPLATE_NEWSLETTER, { from_email: email });
    setSending(false);
    if (success) {
      setSubscribed(true);
      toast.success("Subscribed! You will receive the Daily Word starting April 20.");
    } else {
      toast.error("Something went wrong. Please try again or email AllNationsldcc@gmail.com.");
    }
  };

  if (subscribed) {
    return (
      <div className="text-center">
        <p className="font-body text-base font-bold" style={{ color: "var(--an-gold)" }}>You are subscribed!</p>
        <p className="font-body text-xs mt-2" style={{ color: "#aaa" }}>Watch your inbox — your first Daily Word arrives Monday, April 20.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 rounded-full border font-body text-sm focus:outline-none focus:ring-2"
          style={{ borderColor: "var(--an-gold)" }}
        />
        <button
          onClick={handleSubscribe}
          disabled={sending}
          className="btn-gold flex items-center gap-2 whitespace-nowrap disabled:opacity-60"
        >
          {sending ? <Loader2 size={14} className="animate-spin" /> : <Bell size={14} />}
          {sending ? "Sending..." : "Notify Me"}
        </button>
      </div>
      <p className="font-body text-xs mt-3" style={{ color: "#aaa" }}>
        No spam. Unsubscribe anytime. Your information is safe with us.
      </p>
    </>
  );
}

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
                Start every day anchored in the Word. Executive Pastor Shelia Blake delivers a fresh, faith-filled word of encouragement, instruction, and inspiration — every single morning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#launch" className="btn-gold flex items-center gap-2">
                  <Flame size={16} /> See What's Coming
                </Link>
                <Link href="#subscribe" className="btn-outline flex items-center gap-2" style={{ borderColor: "#fff", color: "#fff" }}>
                  <Bell size={16} /> Get Notified at Launch
                </Link>
              </div>
            </div>
            {/* Pastor Photo Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-72 h-80 rounded-3xl overflow-hidden shadow-2xl border-4" style={{ borderColor: "var(--an-gold)" }}>
                  <img src={PASTOR_SHELIA} alt="Executive Pastor Shelia Blake" className="w-full h-full object-cover object-top" />
                </div>
                {/* Launch badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap"
                  style={{ background: "var(--an-gold)", color: "var(--an-navy)" }}>
                  <Flame size={14} />
                  <span className="font-body font-bold text-sm">Launching April 20, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Launch Announcement */}
      <section id="launch" className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 font-body font-bold text-sm"
                style={{ background: "rgba(232,98,42,0.10)", color: "var(--an-orange)" }}>
                <Calendar size={14} /> Launching Monday, April 20, 2026
              </div>
              <h2 className="font-display text-4xl font-bold mb-3" style={{ color: "var(--an-navy)" }}>
                April Theme: <span style={{ color: "var(--an-orange)" }}>Keep the Fire Burning</span>
              </h2>
              <p className="font-body text-base max-w-xl mx-auto" style={{ color: "#666" }}>
                The Daily Word launches this Sunday — and the theme for April is one that will ignite your spirit and sustain your walk all month long.
              </p>
            </div>

            {/* Launch Card */}
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
                <h3 className="font-display text-2xl font-bold text-white mb-2">Keep the Fire Burning</h3>
                <div className="flex items-center gap-2">
                  <Flame size={14} style={{ color: "var(--an-orange)" }} />
                  <span className="font-body text-sm font-bold" style={{ color: "var(--an-orange)" }}>April 2026 — Monthly Theme</span>
                </div>
              </div>

              <div className="p-8">
                {/* Coming Soon Message */}
                <div className="rounded-2xl p-8 text-center mb-8" style={{ background: "linear-gradient(135deg, rgba(232,98,42,0.06) 0%, rgba(31,47,92,0.06) 100%)", border: "2px dashed rgba(232,98,42,0.25)" }}>
                  <Flame size={48} className="mx-auto mb-4" style={{ color: "var(--an-orange)" }} />
                  <h4 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--an-navy)" }}>
                    First Word Drops Monday
                  </h4>
                  <p className="font-body text-base leading-relaxed mb-2" style={{ color: "#555" }}>
                    <strong>Sunday, April 20</strong> is launch day — and the first Daily Word goes live that morning. Pastor Shelia's scripture, voice, and message for the month of April will be right here.
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#888" }}>
                    Subscribe below to receive it directly in your inbox the moment it goes live. Don't miss the first word of the fire.
                  </p>
                </div>

                {/* Theme Preview */}
                <div className="rounded-xl p-6 mb-6" style={{ background: "var(--an-bg)" }}>
                  <h4 className="font-display font-bold text-base mb-3 flex items-center gap-2" style={{ color: "var(--an-navy)" }}>
                    <Flame size={16} style={{ color: "var(--an-orange)" }} /> About This Month's Theme
                  </h4>
                  <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#555" }}>
                    <strong>Keep the Fire Burning</strong> is the prophetic word for April 2026 at All Nations LDCC. As we step into a new season of the church, Pastor Shelia will take us through scripture, prayer, and practical teaching on how to sustain your spiritual fire — through worship, the Word, and community.
                  </p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#555" }}>
                    Every morning, a fresh word. Every word, a fresh flame.
                  </p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link href="#subscribe">
                    <button className="btn-gold flex items-center gap-2 mx-auto">
                      <Bell size={14} /> Subscribe — Get the First Word <ArrowRight size={14} />
                    </button>
                  </Link>
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

      {/* Subscribe */}
      <section id="subscribe" className="py-16" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Flame size={36} style={{ color: "var(--an-orange)" }} className="mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--an-navy)" }}>
              Be Ready for April 20
            </h2>
            <p className="font-body text-base mb-2" style={{ color: "#666" }}>
              Subscribe now and receive Pastor Shelia's first Daily Word — <strong>Keep the Fire Burning</strong> — the moment it drops on launch morning.
            </p>
            <p className="font-body text-sm mb-8" style={{ color: "#999" }}>
              Delivered to your inbox every morning at 6 AM, starting Monday, April 20, 2026.
            </p>
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
