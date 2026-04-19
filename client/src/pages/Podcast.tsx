import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Youtube, Play, ExternalLink, Headphones, BookOpen, Flame, Bell, Calendar, Mic, ArrowRight } from "lucide-react";

// Podcast page — YouTube is live now; dedicated podcast launches April 20, 2026
// April theme: Keep the Fire Burning

const sermonSeries = [
  { title: "Keep the Fire Burning", desc: "April 2026 — Our new monthly series launching April 20. Sustaining your spiritual fire through worship, the Word, and community.", color: "var(--an-orange)", tag: "Launching April 20" },
  { title: "Voices of Vision 2026", desc: "Prophetic messages for the new season — hearing God's voice and walking boldly in your purpose.", color: "var(--an-red)", tag: "Current Series" },
  { title: "Love. Learn. Live.", desc: "A foundational series on the mission of All Nations — what it means to love, learn, and live by the Word.", color: "var(--an-gold)", tag: "Featured" },
  { title: "Legacy in the Making", desc: "Building a life and legacy that outlasts you — principles for generational impact.", color: "var(--an-navy)", tag: "Series" },
  { title: "The Great Commission", desc: "Unpacking Matthew 28 — what it means for every believer to go, make disciples, and change their world.", color: "var(--an-green)", tag: "Series" },
  { title: "Rooted & Grounded", desc: "Establishing deep spiritual roots in the Word, prayer, and community so you can weather any storm.", color: "var(--an-teal)", tag: "Series" },
];

export default function Podcast() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, var(--an-navy) 60%, #0d3b5e 100%)" }}>
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>The Word, Wherever You Are</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">Podcast & Teachings</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            Watch, listen, and grow. Sermons, teachings, and messages from All Nations LDCC — available anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Podcast Coming Soon Banner */}
      <section className="py-16" style={{ background: "var(--an-orange)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 font-body font-bold text-sm"
              style={{ background: "rgba(255,255,255,0.20)", color: "#fff" }}>
              <Calendar size={14} /> Launching Sunday, April 20, 2026
            </div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              All Nations Podcast — <span style={{ color: "var(--an-navy)" }}>Coming Soon</span>
            </h2>
            <p className="font-body text-lg mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.90)" }}>
              Our dedicated podcast channel launches this Sunday. Every sermon, teaching, and special message from Bishop Cornelius Blake and the All Nations pastoral team — available on all major platforms.
            </p>
            <div className="rounded-2xl p-6 mb-6" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              <Flame size={32} className="mx-auto mb-3 text-white" />
              <div className="font-display font-bold text-xl text-white mb-2">April Theme: Keep the Fire Burning</div>
              <p className="font-body text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                The first episode drops April 20 — and it's going to set the tone for the entire month. Don't miss it.
              </p>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm transition-all hover:scale-105"
                style={{ background: "var(--an-navy)", color: "#fff" }}>
                <Bell size={14} /> Watch on YouTube Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="container">
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ background: "var(--an-navy)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-10 flex flex-col justify-center">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "#FF0000" }}>
                  <Youtube size={28} className="text-white" />
                </div>
                <h2 className="font-display text-3xl font-bold text-white mb-4">
                  Watch on YouTube
                </h2>
                <p className="font-body text-base mb-6" style={{ color: "rgba(255,255,255,0.80)" }}>
                  Subscribe to our YouTube channel for live Sunday services, sermon archives, Bible study recordings, and special events from All Nations Life Development Christian Center. New messages every week.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a
                    href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex items-center gap-2"
                  >
                    <Youtube size={16} /> Visit Our Channel
                  </a>
                  <a
                    href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2"
                    style={{ borderColor: "#fff", color: "#fff" }}
                  >
                    <Play size={16} /> Watch Live
                  </a>
                </div>
              </div>
              <div className="relative bg-black flex items-center justify-center min-h-64">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ background: "rgba(255,0,0,0.20)", border: "2px solid rgba(255,0,0,0.40)" }}>
                    <Youtube size={32} style={{ color: "#FF0000" }} />
                  </div>
                  <p className="font-display font-bold text-lg text-white mb-2">
                    New Messages Every Week
                  </p>
                  <p className="font-body text-sm mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                    Subscribe to our YouTube channel and never miss a sermon, Bible study, or special message from All Nations LDCC.
                  </p>
                  <a
                    href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-xs flex items-center gap-1 px-4 py-2 rounded-full"
                    style={{ background: "#FF0000", color: "#fff" }}
                  >
                    <Youtube size={12} /> Subscribe on YouTube <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Series */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Message Archive</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Sermon <span style={{ color: "var(--an-gold)" }}>Series</span>
            </h2>
            <p className="font-body text-sm mt-2 max-w-xl mx-auto" style={{ color: "#888" }}>
              Explore our message series — each one designed to equip, inspire, and transform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermonSeries.map(s => (
              <a
                key={s.title}
                href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter"
                target="_blank"
                rel="noopener noreferrer"
                className="ministry-card bg-white rounded-xl overflow-hidden shadow-sm block"
              >
                <div className="h-3" style={{ background: s.color }} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-body font-bold text-xs px-2 py-1 rounded-full" style={{ background: `${s.color}18`, color: s.color }}>
                      {s.tag}
                    </span>
                    {s.tag === "Launching April 20" ? <Flame size={16} style={{ color: s.color }} /> : <Play size={16} style={{ color: s.color }} />}
                  </div>
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{s.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast / Audio Coming Soon */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="section-label">Listen Anywhere</span>
              <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--an-navy)" }}>
                All Nations <span style={{ color: "var(--an-teal)" }}>Podcast</span>
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                Our dedicated podcast is launching April 20, 2026 — available on Spotify, Apple Podcasts, and all major platforms. Every sermon, teaching, and special message from Bishop Cornelius Blake and the All Nations pastoral team, available wherever you listen.
              </p>
              <p className="font-body text-sm mb-6" style={{ color: "#888" }}>
                Until then, all messages are available on our YouTube channel.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter" target="_blank" rel="noopener noreferrer"
                  className="btn-navy flex items-center gap-2 text-sm">
                  <Youtube size={14} /> YouTube
                </a>
                <a href="https://www.facebook.com/AllNationsLDCC/" target="_blank" rel="noopener noreferrer"
                  className="btn-outline flex items-center gap-2 text-sm">
                  <Headphones size={14} /> Facebook Live
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(232,98,42,0.06) 0%, rgba(31,47,92,0.06) 100%)", border: "2px dashed rgba(232,98,42,0.30)" }}>
              <Mic size={40} style={{ color: "var(--an-orange)" }} className="mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl mb-2" style={{ color: "var(--an-navy)" }}>
                Podcast Launching April 20
              </h3>
              <p className="font-body text-sm mb-2" style={{ color: "#666" }}>
                Subscribe on your favorite platform and be ready for the first episode — <strong>Keep the Fire Burning</strong>.
              </p>
              <p className="font-body text-xs mb-4" style={{ color: "#999" }}>
                Spotify · Apple Podcasts · Google Podcasts · Amazon Music
              </p>
              <a
                href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy flex items-center gap-2 w-fit mx-auto text-sm"
              >
                <Play size={14} /> Watch on YouTube Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Study */}
      <section className="py-16" style={{ background: "var(--an-bg)" }}>
        <div className="container max-w-2xl mx-auto text-center">
          <BookOpen size={36} style={{ color: "var(--an-teal)" }} className="mx-auto mb-4" />
          <h3 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--an-navy)" }}>
            Wednesday Bible Study
          </h3>
          <p className="font-body text-base mb-6" style={{ color: "#666" }}>
            Join us every Wednesday at 7:00 PM for in-depth Bible study — in person and online. Recordings available on our YouTube channel.
          </p>
          <a
            href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-teal flex items-center gap-2 w-fit mx-auto"
          >
            <Play size={14} /> Watch Recordings
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
