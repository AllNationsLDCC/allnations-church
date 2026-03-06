import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Lock, ExternalLink } from "lucide-react";

export default function Give() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>Generosity Changes Lives</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">Give Online</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            Your generosity fuels our mission — from youth programs and community outreach to discipleship and the Great Commission.
          </p>
        </div>
      </div>

      {/* Giving Options */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

            {/* Kindrid — Primary with Live Embed */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="font-body font-bold text-xs px-2 py-1 rounded-full mb-2 inline-block" style={{ background: "var(--an-gold)", color: "var(--an-navy)" }}>
                      Recommended
                    </span>
                    <h2 className="font-display text-2xl font-bold" style={{ color: "var(--an-navy)" }}>Give with Kindrid</h2>
                    <p className="font-body text-sm mt-1" style={{ color: "#888" }}>
                      Our primary giving platform — secure, simple, and ministry-focused. Accepts Credit, Debit, ACH, Google Pay &amp; Apple Pay.
                    </p>
                  </div>
                </div>

                {/* Live Kindrid Embed */}
                <div className="p-4">
                  <iframe
                    src="https://www.kindridgiving.com/app/giving/allnationsldcc"
                    title="All Nations LDCC — Online Giving powered by Kindrid"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="auto"
                    style={{ borderRadius: "12px", border: "1px solid #f0f0f0", display: "block" }}
                    allow="payment"
                  />
                  <p className="font-body text-xs text-center mt-3" style={{ color: "#aaa" }}>
                    Having trouble? <a href="https://www.kindridgiving.com/app/giving/allnationsldcc" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--an-gold)" }}>Open giving page directly <ExternalLink size={11} className="inline" /></a>
                  </p>
                </div>
              </div>
            </div>

            {/* Side Options */}
            <div className="space-y-6">
              {/* Text to Give */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--an-green)" }}>
                  <span className="font-display font-bold text-white text-lg">✉</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--an-navy)" }}>Text to Give</h3>
                <p className="font-body text-sm mb-3" style={{ color: "#888" }}>
                  Give instantly from your phone — no app needed.
                </p>
                <div className="rounded-xl p-4 text-center" style={{ background: "rgba(197,157,47,0.08)", border: "1px solid rgba(197,157,47,0.25)" }}>
                  <p className="font-body text-xs mb-1" style={{ color: "#888" }}>Text any amount to</p>
                  <p className="font-display font-bold text-2xl" style={{ color: "var(--an-navy)" }}>772-343-7021</p>
                  <p className="font-body text-xs mt-1" style={{ color: "#aaa" }}>Powered by Kindrid</p>
                </div>
              </div>

              {/* PayPal */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "#003087" }}>
                  <span className="font-display font-bold text-white text-sm">PP</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--an-navy)" }}>Give with PayPal</h3>
                <p className="font-body text-sm mb-5" style={{ color: "#888" }}>
                  Use your PayPal account or any major credit/debit card to give securely.
                </p>
                <a
                  href="https://www.paypal.com/donate/?hosted_button_id=ALLNATIONSLDCC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy flex items-center gap-2 w-full justify-center text-sm"
                >
                  Give via PayPal <ExternalLink size={13} />
                </a>
              </div>

              {/* Realm Connect — Coming Soon */}
              <div className="bg-white rounded-2xl shadow-md p-6 relative overflow-hidden">
                <div className="absolute top-3 right-3">
                  <span className="font-body font-bold text-xs px-2 py-1 rounded-full" style={{ background: "rgba(31,47,92,0.10)", color: "var(--an-navy)" }}>
                    Coming Soon
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: "var(--an-teal)" }}>
                  <Shield size={20} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--an-navy)" }}>Realm Connect</h3>
                <p className="font-body text-sm" style={{ color: "#888" }}>
                  Member giving portal through Realm Connect — coming soon for registered members of All Nations LDCC.
                </p>
              </div>

              {/* Security Badge */}
              <div className="rounded-xl p-5 flex items-start gap-3" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.20)" }}>
                <Lock size={18} style={{ color: "#16a34a", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="font-body font-bold text-sm mb-1" style={{ color: "#16a34a" }}>Safe &amp; Secure</div>
                  <p className="font-body text-xs" style={{ color: "#555" }}>
                    All transactions are encrypted and processed through industry-leading secure payment platforms. Account ID: 48081.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why We Give */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Tithes & Offerings", desc: "Honor God with the first fruits of your increase. Tithing is an act of worship and trust in God's provision.", color: "var(--an-gold)", verse: "Malachi 3:10" },
              { title: "Youth & Summer Programs", desc: "Your giving directly funds our youth programs, summer camps, and next-generation ministry initiatives.", color: "var(--an-orange)", verse: "Proverbs 22:6" },
              { title: "Community Outreach", desc: "Support our food drives, care packages, counseling services, and community development efforts.", color: "var(--an-green)", verse: "Matthew 25:35" },
            ].map(g => (
              <div key={g.title} className="bg-white rounded-xl p-6 shadow-sm border-t-4 ministry-card" style={{ borderTopColor: g.color }}>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{g.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#666" }}>{g.desc}</p>
                <span className="font-body text-xs italic" style={{ color: g.color }}>{g.verse}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="py-16" style={{ background: "var(--an-navy)" }}>
        <div className="container text-center">
          <blockquote className="font-display text-2xl md:text-3xl font-bold text-white mb-4 italic max-w-3xl mx-auto">
            "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
          </blockquote>
          <cite className="font-body text-base" style={{ color: "var(--an-gold)" }}>— 2 Corinthians 9:7</cite>
        </div>
      </section>

      <Footer />
    </div>
  );
}
