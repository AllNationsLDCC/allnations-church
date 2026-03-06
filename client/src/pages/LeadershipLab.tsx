import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useState } from "react";
import { Award, BookOpen, Users, Star, CheckCircle, ArrowRight, Lightbulb, Target, TrendingUp, Heart, MapPin, Video, Clock, Mail, Calendar } from "lucide-react";

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

      {/* Registration Section */}
      <LabRegistration />

      <Footer />
    </div>
  );
}

// ─── Quarterly Session Info ───────────────────────────────────────────────
const quarters = [
  {
    label: "Q1 — January through March",
    theme: "Identity & Foundation",
    sessions: ["Session 1: Who You Are in Christ", "Session 2: The Leader's Character", "Session 3: Vision Casting 101"],
    color: "var(--an-navy)",
  },
  {
    label: "Q2 — April through June",
    theme: "Communication & Influence",
    sessions: ["Session 4: Speaking with Authority", "Session 5: Building Trust & Teams", "Session 6: Conflict Resolution"],
    color: "var(--an-teal)",
  },
  {
    label: "Q3 — July through September",
    theme: "Systems & Strategy",
    sessions: ["Session 7: Organizational Leadership", "Session 8: Financial Stewardship", "Session 9: Strategic Planning"],
    color: "var(--an-gold)",
  },
  {
    label: "Q4 — October through December",
    theme: "Legacy & Launch",
    sessions: ["Session 10: Mentoring the Next Generation", "Session 11: Kingdom Entrepreneurship", "Session 12: Capstone Project & Graduation"],
    color: "var(--an-red)",
  },
];

type LabForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  track: string;
  attendance: string;
  quarter: string;
};

const initialLabForm: LabForm = {
  firstName: "", lastName: "", email: "", phone: "",
  track: "", attendance: "", quarter: "",
};

function LabRegistration() {
  const [form, setForm] = useState<LabForm>(initialLabForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<LabForm>>({});

  const validate = () => {
    const e: Partial<LabForm> = {};
    if (!form.firstName.trim()) e.firstName = "Required.";
    if (!form.lastName.trim()) e.lastName = "Required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required.";
    if (!form.track) e.track = "Please select a track.";
    if (!form.attendance) e.attendance = "Please select attendance type.";
    if (!form.quarter) e.quarter = "Please select a starting quarter.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const set = (field: keyof LabForm, val: string) => {
    setForm(prev => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const inputStyle = (field: keyof LabForm) => ({
    borderColor: errors[field] ? "var(--an-red)" : "#e5e7eb",
    background: "#fafafa",
  });

  return (
    <>
      {/* Quarterly Schedule */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">2026 Schedule</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Quarterly <span style={{ color: "var(--an-gold)" }}>Session Plan</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-xl mx-auto" style={{ color: "#666" }}>
              The Leadership Lab runs year-round in four quarterly cohorts. Each quarter covers three sessions with a distinct leadership theme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quarters.map(q => (
              <div key={q.label} className="rounded-2xl p-7 border border-gray-100 shadow-sm bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-10 rounded-full flex-shrink-0" style={{ background: q.color }} />
                  <div>
                    <div className="font-body text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: q.color }}>{q.label}</div>
                    <div className="font-display font-bold text-lg" style={{ color: "var(--an-navy)" }}>{q.theme}</div>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {q.sessions.map(s => (
                    <li key={s} className="flex items-start gap-2">
                      <CheckCircle size={15} style={{ color: q.color, flexShrink: 0, marginTop: 2 }} />
                      <span className="font-body text-sm" style={{ color: "#555" }}>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl p-6 text-center" style={{ background: "var(--an-bg)", border: "1px solid #e5e7eb" }}>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <Clock size={16} style={{ color: "var(--an-gold)" }} />
                <span className="font-body text-sm font-semibold" style={{ color: "var(--an-navy)" }}>Schedule announced each quarter</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} style={{ color: "var(--an-teal)" }} />
                <span className="font-body text-sm font-semibold" style={{ color: "var(--an-navy)" }}>862 SW Glenview Ct, Port St. Lucie, FL 34953</span>
              </div>
              <div className="flex items-center gap-2">
                <Video size={16} style={{ color: "var(--an-navy)" }} />
                <span className="font-body text-sm font-semibold" style={{ color: "var(--an-navy)" }}>Hybrid — In-Person & Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-white rounded-3xl shadow-lg p-10 text-center border border-gray-100">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "var(--an-navy)" }}>
                  <Award size={40} className="text-white" />
                </div>
                <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--an-navy)" }}>
                  Application Received!
                </h2>
                <p className="font-body text-base mb-6" style={{ color: "#555" }}>
                  Thank you, <strong>{form.firstName}</strong>! Your Leadership Lab application has been submitted. A confirmation email has been sent to <strong>{form.email}</strong>.
                </p>
                <div className="rounded-2xl p-6 text-left mb-6" style={{ background: "var(--an-bg)", border: "1px solid #e5e7eb" }}>
                  <h3 className="font-display font-bold text-base mb-4" style={{ color: "var(--an-navy)" }}>Your Application Summary</h3>
                  <div className="space-y-2">
                    {[
                      { icon: <Users size={14} />, label: "Track", value: form.track },
                      { icon: <Calendar size={14} />, label: "Starting Quarter", value: form.quarter },
                      { icon: <MapPin size={14} />, label: "Attendance", value: form.attendance === "online" ? "Online via Zoom" : "In Person" },
                      { icon: <Mail size={14} />, label: "Confirmation sent to", value: form.email },
                    ].map(row => (
                      <div key={row.label} className="flex items-start gap-2">
                        <span style={{ color: "var(--an-gold)", marginTop: 2 }}>{row.icon}</span>
                        <span className="font-body text-sm font-bold" style={{ color: "var(--an-navy)" }}>{row.label}: </span>
                        <span className="font-body text-sm" style={{ color: "#555" }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="font-body text-sm" style={{ color: "#888" }}>
                  Our team will contact you with session dates, times, and Zoom details before your cohort begins.
                </p>
                <button onClick={() => { setForm(initialLabForm); setSubmitted(false); }}
                  className="mt-4 font-body text-sm font-semibold" style={{ color: "var(--an-navy)" }}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
                <div className="text-center mb-8">
                  <span className="section-label">Apply Now</span>
                  <h2 className="font-display text-3xl font-bold mt-1" style={{ color: "var(--an-navy)" }}>
                    Register for the Leadership Lab
                  </h2>
                  <p className="font-body text-sm mt-2" style={{ color: "#777" }}>
                    Complete the form below. Our team will confirm your cohort placement and send all session details.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {(["firstName", "lastName"] as const).map(field => (
                      <div key={field}>
                        <label className="font-body font-semibold text-sm block mb-1" style={{ color: "var(--an-navy)" }}>
                          {field === "firstName" ? "First Name" : "Last Name"} <span style={{ color: "var(--an-red)" }}>*</span>
                        </label>
                        <input type="text" value={form[field]} onChange={e => set(field, e.target.value)}
                          placeholder={field === "firstName" ? "Your first name" : "Your last name"}
                          className="w-full rounded-xl border px-4 py-3 font-body text-sm outline-none"
                          style={inputStyle(field)} />
                        {errors[field] && <p className="font-body text-xs mt-1" style={{ color: "var(--an-red)" }}>{errors[field]}</p>}
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="font-body font-semibold text-sm block mb-1" style={{ color: "var(--an-navy)" }}>
                      Email Address <span style={{ color: "var(--an-red)" }}>*</span>
                    </label>
                    <input type="email" value={form.email} onChange={e => set("email", e.target.value)}
                      placeholder="your@email.com" className="w-full rounded-xl border px-4 py-3 font-body text-sm outline-none"
                      style={inputStyle("email")} />
                    {errors.email && <p className="font-body text-xs mt-1" style={{ color: "var(--an-red)" }}>{errors.email}</p>}
                  </div>
                  <div>
                    <label className="font-body font-semibold text-sm block mb-1" style={{ color: "var(--an-navy)" }}>
                      Phone Number <span style={{ color: "#999" }}>(Optional)</span>
                    </label>
                    <input type="tel" value={form.phone} onChange={e => set("phone", e.target.value)}
                      placeholder="(772) 000-0000" className="w-full rounded-xl border px-4 py-3 font-body text-sm outline-none"
                      style={{ borderColor: "#e5e7eb", background: "#fafafa" }} />
                  </div>
                  <div>
                    <label className="font-body font-semibold text-sm block mb-2" style={{ color: "var(--an-navy)" }}>
                      Leadership Track <span style={{ color: "var(--an-red)" }}>*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Ministry Track", "Marketplace Track", "Emerging Leaders Track"].map(t => (
                        <button type="button" key={t} onClick={() => set("track", t)}
                          className="rounded-xl border-2 p-3 text-center transition-all"
                          style={{ borderColor: form.track === t ? "var(--an-navy)" : "#e5e7eb", background: form.track === t ? "rgba(31,47,92,0.06)" : "#fafafa" }}>
                          <span className="font-body font-bold text-xs" style={{ color: form.track === t ? "var(--an-navy)" : "#555" }}>{t}</span>
                        </button>
                      ))}
                    </div>
                    {errors.track && <p className="font-body text-xs mt-1" style={{ color: "var(--an-red)" }}>{errors.track}</p>}
                  </div>
                  <div>
                    <label className="font-body font-semibold text-sm block mb-2" style={{ color: "var(--an-navy)" }}>
                      Starting Quarter <span style={{ color: "var(--an-red)" }}>*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Q1 (Jan–Mar)", "Q2 (Apr–Jun)", "Q3 (Jul–Sep)", "Q4 (Oct–Dec)"].map(q => (
                        <button type="button" key={q} onClick={() => set("quarter", q)}
                          className="rounded-xl border-2 p-3 text-center transition-all"
                          style={{ borderColor: form.quarter === q ? "var(--an-gold)" : "#e5e7eb", background: form.quarter === q ? "rgba(197,157,47,0.08)" : "#fafafa" }}>
                          <span className="font-body font-bold text-xs" style={{ color: form.quarter === q ? "var(--an-navy)" : "#555" }}>{q}</span>
                        </button>
                      ))}
                    </div>
                    {errors.quarter && <p className="font-body text-xs mt-1" style={{ color: "var(--an-red)" }}>{errors.quarter}</p>}
                  </div>
                  <div>
                    <label className="font-body font-semibold text-sm block mb-2" style={{ color: "var(--an-navy)" }}>
                      Attendance Type <span style={{ color: "var(--an-red)" }}>*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "in-person", label: "In Person", sub: "862 SW Glenview Ct, Port St. Lucie" },
                        { value: "online", label: "Online via Zoom", sub: "Zoom link sent in confirmation" },
                      ].map(opt => (
                        <button type="button" key={opt.value} onClick={() => set("attendance", opt.value)}
                          className="rounded-xl border-2 p-4 text-left transition-all"
                          style={{ borderColor: form.attendance === opt.value ? "var(--an-teal)" : "#e5e7eb", background: form.attendance === opt.value ? "rgba(13,148,136,0.06)" : "#fafafa" }}>
                          <div className="font-body font-bold text-sm mb-1" style={{ color: form.attendance === opt.value ? "var(--an-teal)" : "var(--an-navy)" }}>{opt.label}</div>
                          <div className="font-body text-xs" style={{ color: "#888" }}>{opt.sub}</div>
                        </button>
                      ))}
                    </div>
                    {errors.attendance && <p className="font-body text-xs mt-1" style={{ color: "var(--an-red)" }}>{errors.attendance}</p>}
                  </div>
                  <button type="submit"
                    className="w-full btn-gold flex items-center justify-center gap-2 py-4 text-base">
                    Submit Application <ArrowRight size={18} />
                  </button>
                  <p className="font-body text-xs text-center" style={{ color: "#999" }}>
                    A confirmation email will be sent immediately. Our team will follow up with session dates and details.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
