import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Heart, Shield, Lock, ExternalLink, CheckCircle,
  Users, BookOpen, Lightbulb, HandHeart, TrendingUp
} from "lucide-react";

// Design: Elevation-quality giving page — warm light bg, gold accents, navy trust elements
// 11 sections per Pastor Shelia's content spec — Updated April 2026
// Kindrid slug: allnationsldcc | Account ID: 48081

const KINDRID_URL = "https://www.kindridgiving.com/App/Form/7c27d226-b8cd-4972-99cb-c0cf0eb92952";

// ── Animated Counter ────────────────────────────────────────────────────────
function AnimatedStat({ label, sub }: { label: string; sub: string }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm text-center border-t-4" style={{ borderTopColor: "var(--an-gold)" }}>
      <div className="font-display font-bold text-3xl mb-2" style={{ color: "var(--an-navy)" }}>{label}</div>
      <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{sub}</p>
    </div>
  );
}

// ── Suggested Amount Card ────────────────────────────────────────────────────
function AmountCard({
  amount, title, desc, popular,
}: {
  amount: string; title: string; desc: string; popular?: boolean;
}) {
  return (
    <a
      href={KINDRID_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl p-6 shadow-sm border-2 transition-all duration-200 cursor-pointer hover:shadow-md hover:-translate-y-1 relative"
      style={{
        borderColor: popular ? "var(--an-gold)" : "#e5e7eb",
        background: popular ? "rgba(197,157,47,0.05)" : "#fff",
      }}
    >
      {popular && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 font-body font-bold text-xs px-3 py-1 rounded-full"
          style={{ background: "var(--an-gold)", color: "var(--an-navy)" }}
        >
          Most Popular
        </span>
      )}
      <div className="font-display font-bold text-3xl mb-1" style={{ color: "var(--an-navy)" }}>{amount}</div>
      <div className="font-body font-semibold text-sm mb-2" style={{ color: popular ? "var(--an-gold)" : "var(--an-teal)" }}>{title}</div>
      <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{desc}</p>
    </a>
  );
}

export default function Give() {
  const kindridRef = useRef<HTMLDivElement>(null);

  const scrollToKindrid = () => {
    kindridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <div
        className="page-hero"
        style={{
          background: "linear-gradient(135deg, var(--an-navy) 0%, #0d2a5e 60%, #1a3a6e 100%)",
        }}
      >
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>35+ Years of Community Impact</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-2 mb-5 leading-tight">
            Partner With Us in<br />
            <span style={{ color: "var(--an-gold)" }}>Making a Difference</span>
          </h1>
          <p className="font-body text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            For more than 35 years, All Nations Life Development Christian Center has served the Port St. Lucie community through faith, outreach, education, and community support. Your generosity helps us continue expanding programs that strengthen families, empower individuals, and uplift our community.
          </p>
          <button
            onClick={scrollToKindrid}
            className="btn-gold inline-flex items-center gap-2 text-base px-8 py-4"
          >
            <Heart size={18} />
            Give Now
          </button>
        </div>
      </div>

      {/* ── 2. KINDRID GIVING SECTION ───────────────────────────────────────── */}
      <section ref={kindridRef} className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-10">
            <span className="section-label">Give Online Securely</span>
            <h2 className="font-display text-4xl font-bold mt-2 mb-4" style={{ color: "var(--an-navy)" }}>
              Give Online Securely
            </h2>
            <p className="font-body text-base max-w-2xl mx-auto mb-3" style={{ color: "#555" }}>
              The easiest and most secure way to support the ministry is through our online giving platform. Kindrid allows you to make a one-time gift or become a monthly partner supporting the ongoing mission of All Nations Life Development Christian Center.
            </p>
            <p className="font-body text-sm font-semibold mb-2" style={{ color: "var(--an-navy)" }}>Your generosity helps fund:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "Community outreach initiatives",
                "Youth development and mentorship programs",
                "Educational and technology training",
                "Counseling and family support services",
                "Ministry programs serving Port St. Lucie",
              ].map(item => (
                <span
                  key={item}
                  className="font-body text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
                  style={{ background: "rgba(197,157,47,0.10)", color: "var(--an-navy)", border: "1px solid rgba(197,157,47,0.25)" }}
                >
                  <CheckCircle size={12} style={{ color: "var(--an-gold)" }} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-3">
                <div>
                  <span className="font-body font-bold text-xs px-2 py-1 rounded-full inline-block" style={{ background: "var(--an-gold)", color: "var(--an-navy)" }}>
                    Recommended
                  </span>
                  <h3 className="font-display font-bold text-xl mt-1" style={{ color: "var(--an-navy)" }}>Give with Kindrid</h3>
                  <p className="font-body text-xs mt-0.5" style={{ color: "#888" }}>
                    Credit · Debit · ACH · Google Pay · Apple Pay — Recurring &amp; One-Time
                  </p>
                </div>
                <a
                  href={KINDRID_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center gap-2 text-sm"
                >
                  Open in New Tab <ExternalLink size={13} />
                </a>
              </div>
              <div className="p-4">
                <iframe
                  src={KINDRID_URL}
                  title="All Nations LDCC — Online Giving powered by Kindrid"
                  width="100%"
                  height="620"
                  frameBorder="0"
                  scrolling="auto"
                  style={{ borderRadius: "12px", border: "1px solid #f0f0f0", display: "block" }}
                  allow="payment"
                />
                <p className="font-body text-xs text-center mt-3" style={{ color: "#bbb" }}>
                  Having trouble?{" "}
                  <a href={KINDRID_URL} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--an-gold)" }}>
                    Open giving page directly <ExternalLink size={10} className="inline" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SUGGESTED GIVING ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Suggested Ways to Give</span>
            <h2 className="font-display text-4xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              Choose Your Giving Level
            </h2>
            <p className="font-body text-base mt-3 max-w-xl mx-auto" style={{ color: "#666" }}>
              Select a suggested amount below — clicking any card will take you directly to our secure giving form.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AmountCard amount="$25" title="Community Support" desc="Helps provide supplies and resources for youth and outreach programs." />
            <AmountCard amount="$50" title="Outreach Partner" desc="Supports ministry outreach and community engagement efforts." popular />
            <AmountCard amount="$100" title="Education & Technology Support" desc="Helps expand education programs and technology training initiatives." />
            <AmountCard amount="$250" title="Community Impact Partner" desc="Supports expanded programs serving families and individuals in the community." />
            <a
              href={KINDRID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-6 shadow-sm border-2 border-dashed transition-all duration-200 cursor-pointer hover:shadow-md hover:-translate-y-1 flex flex-col items-center justify-center text-center"
              style={{ borderColor: "var(--an-teal)", background: "rgba(0,128,128,0.03)" }}
            >
              <div className="font-display font-bold text-3xl mb-1" style={{ color: "var(--an-teal)" }}>Other</div>
              <div className="font-body font-semibold text-sm mb-2" style={{ color: "var(--an-teal)" }}>Custom Amount</div>
              <p className="font-body text-sm" style={{ color: "#666" }}>Enter any amount that reflects your heart for the ministry.</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. MONTHLY IMPACT PARTNER ───────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--an-navy)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label" style={{ color: "var(--an-gold)" }}>Monthly Impact Partner</span>
            <h2 className="font-display text-4xl font-bold text-white mt-2 mb-5">
              Become a Monthly Impact Partner
            </h2>
            <p className="font-body text-base mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
              Consistent support allows the ministry to plan ahead and expand programs that serve the community. When you become a Monthly Impact Partner, your recurring support helps sustain ministry programs and outreach initiatives throughout the year.
            </p>

            <div className="bg-white rounded-2xl overflow-hidden mb-8">
              <table className="w-full text-left">
                <thead>
                  <tr style={{ background: "var(--an-gold)" }}>
                    <th className="font-body font-bold text-sm px-6 py-3" style={{ color: "var(--an-navy)" }}>Monthly Gift</th>
                    <th className="font-body font-bold text-sm px-6 py-3" style={{ color: "var(--an-navy)" }}>Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { amount: "$25 / month", impact: "Helps support youth mentorship programs" },
                    { amount: "$50 / month", impact: "Supports community outreach initiatives" },
                    { amount: "$100 / month", impact: "Helps expand education and technology programs" },
                  ].map((row, i) => (
                    <tr key={row.amount} style={{ background: i % 2 === 0 ? "#fafafa" : "#fff" }}>
                      <td className="font-body font-bold text-sm px-6 py-4" style={{ color: "var(--an-navy)" }}>{row.amount}</td>
                      <td className="font-body text-sm px-6 py-4" style={{ color: "#555" }}>{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href={KINDRID_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 text-base px-8 py-4"
            >
              <Heart size={16} />
              Start Monthly Giving
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. SQUARE PAYMENT ───────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-label">Additional Ways to Give</span>
            <h2 className="font-display text-4xl font-bold mt-2 mb-5" style={{ color: "var(--an-navy)" }}>
              Pay with Card
            </h2>
            <p className="font-body text-base mb-4" style={{ color: "#555" }}>
              Visitors may also make donations or payments using credit or debit cards through our secure Square payment system. Square allows us to provide flexible payment options where available.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-lg mx-auto">
              {[
                "Credit Cards",
                "Debit Cards",
                "Apple Pay",
                "Google Pay",
                "Klarna",
                "Afterpay",
              ].map(method => (
                <div
                  key={method}
                  className="rounded-xl px-4 py-3 font-body text-sm font-semibold text-center"
                  style={{ background: "var(--an-bg)", color: "var(--an-navy)", border: "1px solid #e5e7eb" }}
                >
                  {method}
                </div>
              ))}
            </div>
            <p className="font-body text-xs mb-6" style={{ color: "#aaa" }}>
              Eligibility for installment options depends on Square's availability and user qualifications.
            </p>
            <a
              href="https://square.link/u/WUmkhiWL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy inline-flex items-center gap-2 text-base px-8 py-4"
            >
              Give via Square <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. ZELLE (CONDITIONAL) ──────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl p-8 border-2 border-dashed text-center"
              style={{ borderColor: "rgba(31,47,92,0.20)", background: "rgba(31,47,92,0.03)" }}
            >
              <span
                className="font-body font-bold text-xs px-3 py-1 rounded-full inline-block mb-4"
                style={{ background: "rgba(31,47,92,0.10)", color: "var(--an-navy)" }}
              >
                Pending
              </span>
              <h3 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--an-navy)" }}>
                Zelle Giving
              </h3>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>
                We are currently evaluating Zelle as an additional giving option through our Treasury Management banking platform. If our banking system supports Zelle for nonprofit organizations, this option will be activated to provide another convenient method for giving.
              </p>
              <p className="font-body text-xs mt-4" style={{ color: "#aaa" }}>Please check back for updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. GIVING IMPACT ────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Your Giving Makes a Difference</span>
            <h2 className="font-display text-4xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              Your Giving Makes a Difference
            </h2>
            <p className="font-body text-base mt-3 max-w-xl mx-auto" style={{ color: "#666" }}>
              Your generosity helps make a lasting impact in our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Users size={28} />, title: "Youth & Children's Development", desc: "Programs designed to nurture the next generation through mentorship, education, and faith.", color: "var(--an-orange)" },
              { icon: <Lightbulb size={28} />, title: "Education & Technology Training", desc: "Expanding access to digital skills, AI literacy, and workforce readiness for all ages.", color: "var(--an-teal)" },
              { icon: <HandHeart size={28} />, title: "Community Counseling Services", desc: "Christian counseling, marriage and family support, and ministry leader care.", color: "var(--an-green)" },
              { icon: <TrendingUp size={28} />, title: "Mentorship & Leadership Development", desc: "Building the next generation of leaders through the Nehemiah model of servant leadership.", color: "var(--an-gold)" },
              { icon: <BookOpen size={28} />, title: "Outreach Programs", desc: "Supporting Port St. Lucie families through food drives, care packages, and community engagement.", color: "var(--an-red)" },
            ].map(card => (
              <div key={card.title} className="ministry-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-5" style={{ background: card.color }}>
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--an-navy)" }}>{card.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{card.desc}</p>
              </div>
            ))}
            <div className="ministry-card bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
              <p className="font-display font-bold text-lg mb-2" style={{ color: "var(--an-navy)" }}>Together We Are Building</p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>Stronger families and transforming lives — one community at a time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. IMPACT COUNTERS ──────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Our Impact in the Community</span>
            <h2 className="font-display text-4xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              Our Impact in the Community
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "#666" }}>
              For more than 35 years, All Nations Life Development Christian Center has served the Port St. Lucie community through faith-based leadership, outreach, and ministry support.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <AnimatedStat label="35+ Years" sub="Serving the Port St. Lucie community." />
            <AnimatedStat label="Children, Youth, Adults & Families" sub="Programs designed to strengthen the whole community." />
            <AnimatedStat label="Outreach, Education & Support" sub="Providing practical services and ministry care." />
            <AnimatedStat label="Lives Being Touched Every Season" sub="Continuing the mission through service and leadership." />
          </div>
        </div>
      </section>

      {/* ── 9. SCRIPTURE ────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--an-navy)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <span className="section-label" style={{ color: "var(--an-gold)" }}>Giving as an Act of Worship</span>
            <h2 className="font-display text-3xl font-bold text-white mt-2">Giving as an Act of Worship</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <blockquote className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="font-display text-xl font-bold italic text-white mb-4 leading-relaxed">
                "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."
              </p>
              <cite className="font-body text-sm" style={{ color: "var(--an-gold)" }}>— Luke 6:38</cite>
            </blockquote>
            <blockquote className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="font-display text-xl font-bold italic text-white mb-4 leading-relaxed">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              </p>
              <cite className="font-body text-sm" style={{ color: "var(--an-gold)" }}>— 2 Corinthians 9:7</cite>
            </blockquote>
          </div>
          <p className="font-body text-base text-center max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            When we give, we participate in the work God is doing to transform lives and strengthen our community.
          </p>
        </div>
      </section>

      {/* ── 10. TRUST & SECURITY ────────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl p-8 flex flex-col sm:flex-row items-start gap-6" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#16a34a" }}>
                <Lock size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: "#15803d" }}>Secure and Trusted Giving</h3>
                <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#555" }}>
                  All online donations are processed through secure and encrypted payment systems.
                </p>
                <div className="flex items-start gap-2">
                  <Shield size={15} style={{ color: "#16a34a", flexShrink: 0, marginTop: 2 }} />
                  <p className="font-body text-sm" style={{ color: "#555" }}>
                    All Nations Life Development Christian Center is a registered <strong>501(c)(3) nonprofit organization</strong>, and contributions may be tax deductible as permitted by law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, var(--an-gold) 0%, #b8891f 100%)" }}>
        <div className="container text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-5" style={{ color: "var(--an-navy)" }}>
            Thank You for Your Generosity
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: "rgba(31,47,92,0.85)" }}>
            Your partnership allows us to continue serving our community, strengthening families, and advancing the mission of the ministry. Together we are building a stronger future for the next generation.
          </p>
          <a
            href={KINDRID_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body font-bold text-base px-10 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "var(--an-navy)", color: "#fff" }}
          >
            <Heart size={18} />
            Give Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
