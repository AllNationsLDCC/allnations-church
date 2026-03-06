import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Award, BookOpen, Users, Star, CheckCircle, ArrowRight, Lightbulb, Target, TrendingUp, Heart } from "lucide-react";

// Design: Elevation-quality, navy + gold, bold typography, warm light bg
// Leadership Lab — flagship leadership development program of All Nations LDCC

const modules = [
  {
    number: "01",
    title: "Identity & Authority",
    desc: "Discover who you are in Christ and the authority you carry as a Kingdom leader. This foundational module establishes the spiritual bedrock of all effective leadership.",
    color: "var(--an-navy)",
    icon: <Star size={18} />,
  },
  {
    number: "02",
    title: "Vision & Strategy",
    desc: "Learn to hear from God, articulate a clear vision, and build strategic plans that translate divine direction into measurable, real-world outcomes.",
    color: "var(--an-blue)",
    icon: <Target size={18} />,
  },
  {
    number: "03",
    title: "Communication & Influence",
    desc: "Master the art of communicating with clarity, conviction, and compassion — from the pulpit to the boardroom. Develop your voice and expand your influence.",
    color: "var(--an-teal)",
    icon: <Lightbulb size={18} />,
  },
  {
    number: "04",
    title: "Team Building & Delegation",
    desc: "Build high-performing teams, identify and develop emerging leaders, and create systems that multiply your impact far beyond your individual capacity.",
    color: "var(--an-green)",
    icon: <Users size={18} />,
  },
  {
    number: "05",
    title: "Organizational Excellence",
    desc: "Apply proven operational frameworks to ministry and marketplace environments — budgeting, accountability structures, performance metrics, and sustainable growth.",
    color: "var(--an-orange)",
    icon: <TrendingUp size={18} />,
  },
  {
    number: "06",
    title: "Legacy & Succession",
    desc: "Build leadership pipelines that outlast your tenure. Learn to identify successors, transfer vision, and create institutions that stand for generations.",
    color: "var(--an-gold)",
    icon: <Award size={18} />,
  },
];

const tracks = [
  {
    title: "Ministry Leadership Track",
    desc: "Designed for pastors, ministers, deacons, ministry directors, and anyone called to lead within the local church. Covers spiritual authority, pastoral care, ministry operations, and church governance.",
    color: "var(--an-navy)",
    icon: <Heart size={22} />,
    audience: "Pastors, Ministers, Ministry Directors, Deacons",
  },
  {
    title: "Marketplace Leadership Track",
    desc: "For entrepreneurs, executives, and professionals who want to lead with Kingdom principles in the workplace. Covers business strategy, ethical leadership, and faith-driven entrepreneurship.",
    color: "var(--an-teal)",
    icon: <TrendingUp size={22} />,
    audience: "Entrepreneurs, Executives, Business Professionals",
  },
  {
    title: "Emerging Leaders Track",
    desc: "For young adults and next-generation leaders (ages 18–35) who are being developed for future ministry and marketplace roles. Includes mentorship pairing with senior leaders.",
    color: "var(--an-orange)",
    icon: <Star size={22} />,
    audience: "Young Adults, Ages 18–35, Next Gen Leaders",
  },
];

const outcomes = [
  "A clear, articulated personal leadership philosophy",
  "Practical tools for team building and organizational management",
  "A completed leadership development project",
  "Certificate of Completion from All Nations LDCC",
  "Access to the All Nations Leadership Alumni Network",
  "Ongoing mentorship opportunities with senior leaders",
];

const faqs = [
  { q: "How long is the Leadership Lab program?", a: "The Leadership Lab is a 12-week intensive program meeting weekly. Each session is approximately 90 minutes, combining teaching, group discussion, and practical application exercises." },
  { q: "Is there a cost to participate?", a: "There is a nominal registration fee to cover materials and resources. Scholarship assistance is available for those with financial need. Contact our office for details." },
  { q: "Do I need prior leadership experience?", a: "No prior leadership experience is required. The Lab is designed to meet leaders at every stage — from those just discovering their calling to seasoned leaders looking to sharpen their skills." },
  { q: "Will I receive a certificate?", a: "Yes. Every participant who completes the full 12-week program and their capstone project receives an official Certificate of Completion from All Nations Life Development Christian Center." },
  { q: "When does the next cohort begin?", a: "New cohorts launch quarterly. Contact us through the Connect page to be added to the interest list and receive notification when registration opens for the next cohort." },
];

export default function LeadershipLab() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="page-hero" style={{ background: "linear-gradient(135deg, var(--an-navy) 0%, #0d2a4a 100%)" }}>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="section-label" style={{ color: "var(--an-gold)" }}>Ministry & Marketplace Development</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-2 mb-4 leading-tight">
              The Leadership <span style={{ color: "var(--an-gold)" }}>Lab</span>
            </h1>
            <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              All Nations LDCC's flagship leadership development program — equipping ministry leaders, marketplace professionals, and emerging voices with the tools, frameworks, and spiritual foundation to lead with excellence and build lasting legacy.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/connect" className="btn-gold flex items-center gap-2">
                Apply for the Next Cohort <ArrowRight size={16} />
              </Link>
              <a href="#curriculum" className="btn-outline flex items-center gap-2" style={{ borderColor: "#fff", color: "#fff" }}>
                View Curriculum <BookOpen size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <section style={{ background: "var(--an-gold)" }} className="py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "12", label: "Weeks of Intensive Training" },
              { number: "3", label: "Leadership Tracks" },
              { number: "6", label: "Core Curriculum Modules" },
              { number: "1", label: "Certificate of Completion" },
            ].map(stat => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>{stat.number}</div>
                <div className="font-body text-sm font-medium" style={{ color: "var(--an-navy)", opacity: 0.8 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Lab */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">About the Program</span>
              <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "var(--an-navy)" }}>
                Where Leaders Are <span style={{ color: "var(--an-gold)" }}>Built, Not Born</span>
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                The Leadership Lab is more than a class — it is a transformational experience. Rooted in the Nehemiah model of servant leadership, the Lab combines biblical principles with practical, real-world leadership frameworks used by executives, pastors, and entrepreneurs at the highest levels.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                Led by Executive Pastor Shelia Blake — a 30-year banking executive, AI consultant, and ministry strategist — the Leadership Lab draws from decades of experience leading in both the church and the corporate world. Every session is designed to be immediately applicable, deeply transformational, and Kingdom-aligned.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "#555" }}>
                Whether you are a new believer discovering your calling, a ministry leader looking to sharpen your skills, or a marketplace professional wanting to lead with Kingdom principles, the Leadership Lab has a track designed specifically for you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Biblical Foundation", desc: "Every principle is rooted in Scripture and proven through real-world application.", color: "var(--an-navy)" },
                { title: "Practical Tools", desc: "Walk away with frameworks, templates, and systems you can use immediately.", color: "var(--an-teal)" },
                { title: "Peer Community", desc: "Learn alongside a cohort of like-minded leaders who will challenge and encourage you.", color: "var(--an-green)" },
                { title: "Expert Mentorship", desc: "Access to senior leaders and mentors who have walked the path before you.", color: "var(--an-gold)" },
              ].map(item => (
                <div key={item.title} className="ministry-card bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="w-3 h-3 rounded-full mb-3" style={{ background: item.color }} />
                  <h4 className="font-display font-bold text-sm mb-2" style={{ color: "var(--an-navy)" }}>{item.title}</h4>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "#666" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Choose Your Path</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Three Leadership <span style={{ color: "var(--an-gold)" }}>Tracks</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "#666" }}>
              The Leadership Lab offers three specialized tracks so your training is directly relevant to your calling and context.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map(track => (
              <div key={track.title} className="ministry-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5" style={{ background: track.color }}>
                  {track.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--an-navy)" }}>{track.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#666" }}>{track.desc}</p>
                <div className="rounded-lg px-3 py-2" style={{ background: `${track.color}12` }}>
                  <span className="font-body font-bold text-xs" style={{ color: track.color }}>For: </span>
                  <span className="font-body text-xs" style={{ color: "#555" }}>{track.audience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">The Curriculum</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              6 Core <span style={{ color: "var(--an-gold)" }}>Modules</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map(mod => (
              <div key={mod.number} className="ministry-card bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: mod.color }}>
                    {mod.icon}
                  </div>
                  <span className="font-display font-bold text-2xl" style={{ color: "var(--an-gold)", opacity: 0.5 }}>{mod.number}</span>
                </div>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{mod.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20" style={{ background: "var(--an-navy)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label" style={{ color: "rgba(255,255,255,0.55)" }}>What You'll Walk Away With</span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Program <span style={{ color: "var(--an-gold)" }}>Outcomes</span>
              </h2>
              <p className="font-body text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Every participant who completes the Leadership Lab walks away with more than knowledge — they walk away transformed, equipped, and connected.
              </p>
              <ul className="space-y-3">
                {outcomes.map(outcome => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: "var(--an-gold)", flexShrink: 0, marginTop: 2 }} />
                    <span className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <Award size={40} style={{ color: "var(--an-gold)" }} className="mb-4" />
              <h3 className="font-display text-2xl font-bold text-white mb-3">Certificate of Completion</h3>
              <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.70)" }}>
                Upon successful completion of all 12 sessions and your capstone leadership project, you will receive an official Certificate of Completion from All Nations Life Development Christian Center — a credential that reflects your commitment to Kingdom excellence.
              </p>
              <div className="rounded-xl p-4 text-center" style={{ background: "rgba(197,157,47,0.15)", border: "1px solid rgba(197,157,47,0.30)" }}>
                <div className="font-display font-bold text-lg" style={{ color: "var(--an-gold)" }}>All Nations LDCC</div>
                <div className="font-body text-xs mt-1" style={{ color: "rgba(255,255,255,0.60)" }}>Leadership Lab — Certificate of Completion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="section-label">Common Questions</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Frequently Asked <span style={{ color: "var(--an-gold)" }}>Questions</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{faq.q}</h4>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--an-gold)" }}>
        <div className="container text-center">
          <h2 className="font-display text-4xl font-bold mb-4" style={{ color: "var(--an-navy)" }}>
            Ready to Step Into Your Leadership Calling?
          </h2>
          <p className="font-body text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(31,47,92,0.80)" }}>
            The next cohort is forming now. Apply today and take the most important step in your leadership journey.
          </p>
          <Link href="/connect" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-bold text-base transition-all hover:scale-105"
            style={{ background: "var(--an-navy)", color: "#fff" }}>
            Apply for the Leadership Lab <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
