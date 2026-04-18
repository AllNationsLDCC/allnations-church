import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { BookOpen, Star, Users, Lightbulb, Award, ArrowRight, CheckCircle, Heart, Mic, Globe, Pencil } from "lucide-react";

// Design: Vibrant, energetic, youthful — orange, teal, green — All Nations brand colors
// NextGen Lab — Youth Literacy & Development Program of All Nations LDCC

const YOUTH_IMG = "/manus-storage/pasted_file_y4psnf_BDB0F9B1-47FF-4EFA-B0BF-6FE20B5EA4DB_4_5005_c_72d0f5fd.jpeg"; // kids choir on stage
const TEAM_IMG_2 = "/manus-storage/pasted_file_CjmIbG_73E77500-F0E3-40A9-9D4A-1CB9B2C0DDF1_4_5005_c_74bc6ee5.jpeg"; // Sis. Marry Jean-Charles at podium
const SANCTUARY_IMG = "/manus-storage/pasted_file_ujZh5H_3E0D498C-7FF8-4729-A92D-9E841530E578_4_5005_c_ddcc0bc2.jpeg"; // sanctuary service
const YOUTH_BUS_IMG = "/manus-storage/pasted_file_aMRjLm_FCDA423D-5C4A-4192-92DC-F92F92F55F85_4_5005_c_c8a8be4c.jpeg"; // youth bus interior

const programs = [
  {
    icon: <BookOpen size={24} />,
    title: "Reading & Literacy Foundations",
    age: "Ages 5–10",
    color: "var(--an-orange)",
    desc: "Building confident readers through phonics, comprehension, and a love for the written word. Every child learns to read with joy, purpose, and biblical encouragement woven throughout.",
    features: ["Phonics & Decoding", "Reading Comprehension", "Vocabulary Building", "Scripture-Based Stories"],
  },
  {
    icon: <Pencil size={24} />,
    title: "Creative Writing & Expression",
    age: "Ages 10–14",
    color: "var(--an-teal)",
    desc: "Unlocking the power of written expression. Young writers discover their voice, craft compelling stories, write poetry, and develop communication skills that will serve them for life.",
    features: ["Creative Writing", "Poetry & Spoken Word", "Journaling & Reflection", "Digital Storytelling"],
  },
  {
    icon: <Mic size={24} />,
    title: "Voice Training & Public Speaking",
    age: "Ages 12–18",
    color: "var(--an-green)",
    desc: "Developing confident communicators and future leaders. Youth learn to speak with clarity, conviction, and presence — from classroom presentations to ministry and marketplace stages.",
    features: ["Vocal Technique", "Public Speaking", "Debate & Discussion", "Ministry Communication"],
  },
  {
    icon: <Lightbulb size={24} />,
    title: "STEM & Digital Literacy",
    age: "Ages 10–18",
    color: "var(--an-blue)",
    desc: "Preparing the next generation for a technology-driven world. Youth explore coding, AI basics, digital tools, and technology with a Kingdom perspective on innovation and stewardship.",
    features: ["Coding Basics", "AI & Technology Literacy", "Digital Safety", "Innovation Projects"],
  },
  {
    icon: <Globe size={24} />,
    title: "Kingdom Entrepreneurship",
    age: "Ages 14–18",
    color: "var(--an-gold)",
    desc: "Equipping young entrepreneurs with the mindset, skills, and faith to build businesses and organizations that honor God and serve their communities. Business meets Kingdom purpose.",
    features: ["Business Planning", "Financial Literacy", "Pitching & Presentation", "Faith & Marketplace"],
  },
  {
    icon: <Heart size={24} />,
    title: "Character & Leadership Development",
    age: "Ages 8–18",
    color: "var(--an-red)",
    desc: "Building the whole person — not just academic skills. This program develops integrity, emotional intelligence, servant leadership, and Kingdom identity in every young person.",
    features: ["Integrity & Character", "Emotional Intelligence", "Servant Leadership", "Identity in Christ"],
  },
];

const outcomes = [
  "Measurable improvement in reading level and comprehension",
  "Confidence in public speaking and self-expression",
  "Digital literacy and technology readiness",
  "Kingdom entrepreneurship mindset and financial literacy",
  "Certificate of Achievement for each completed program level",
  "Mentorship connections with adult leaders in ministry and marketplace",
  "Portfolio of creative work and projects",
  "Scholarship and college readiness support (ages 14–18)",
];

const stats = [
  { number: "35+", label: "Years Serving Port St. Lucie" },
  { number: "6", label: "Program Tracks" },
  { number: "5–18", label: "Age Range Served" },
  { number: "100%", label: "Faith-Centered Curriculum" },
];

export default function NextGenLab() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${YOUTH_IMG})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(31,47,92,0.90) 0%, rgba(0,128,128,0.75) 100%)" }} />
        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: "var(--an-orange)", color: "#fff" }}>
              <Star size={14} />
              <span className="font-body font-bold text-sm">All Nations Youth & Next Gen Ministry</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-2 mb-4 leading-tight">
              NextGen <span style={{ color: "var(--an-gold)" }}>Lab</span>
            </h1>
            <p className="font-body text-xl font-bold mb-2" style={{ color: "var(--an-gold)" }}>
              Youth Literacy & Life Development Program
            </p>
            <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              Empowering the next generation with literacy, voice, technology, and Kingdom purpose. Where young people discover who they are, what they are capable of, and why they were created.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/connect" className="btn-gold flex items-center gap-2">
                Enroll Your Child <ArrowRight size={16} />
              </Link>
              <a href="#programs" className="btn-outline flex items-center gap-2" style={{ borderColor: "#fff", color: "#fff" }}>
                Explore Programs <BookOpen size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: "var(--an-orange)" }} className="py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map(s => (
              <div key={s.label}>
                <div className="font-display text-4xl font-bold text-white">{s.number}</div>
                <div className="font-body text-sm font-medium text-white opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Our Mission</span>
            <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "var(--an-navy)" }}>
              Building the <span style={{ color: "var(--an-orange)" }}>Whole Child</span> for a <span style={{ color: "var(--an-teal)" }}>Whole Life</span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
              The NextGen Lab is All Nations Life Development Christian Center's comprehensive youth literacy and life development program — designed to address the whole child: mind, voice, skills, character, and spirit. We believe that every young person carries extraordinary potential, and our role is to create the environment where that potential is discovered, developed, and deployed.
            </p>
            <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
              From early literacy for our youngest readers to entrepreneurship and technology training for our teenagers, the NextGen Lab meets young people exactly where they are — and takes them further than they ever imagined. Every program is grounded in Scripture, taught by qualified instructors, and designed to produce measurable, lasting results.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: "#555" }}>
              With over 35 years of community impact in Port St. Lucie, All Nations LDCC has a proven track record of investing in the next generation. The NextGen Lab is the next chapter in that legacy.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">Program Tracks</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Six Pathways to <span style={{ color: "var(--an-gold)" }}>Excellence</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "#666" }}>
              Each program track is designed for a specific age group and developmental stage — ensuring every young person receives instruction that is relevant, engaging, and transformational.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map(prog => (
              <div key={prog.title} className="ministry-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-2" style={{ background: prog.color }} />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ background: prog.color }}>
                      {prog.icon}
                    </div>
                    <span className="font-body font-bold text-xs px-3 py-1 rounded-full" style={{ background: `${prog.color}18`, color: prog.color }}>
                      {prog.age}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--an-navy)" }}>{prog.title}</h3>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#666" }}>{prog.desc}</p>
                  <ul className="space-y-1">
                    {prog.features.map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle size={13} style={{ color: prog.color, flexShrink: 0 }} />
                        <span className="font-body text-xs" style={{ color: "#555" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              <span className="section-label" style={{ color: "rgba(255,255,255,0.55)" }}>What We Produce</span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Program <span style={{ color: "var(--an-orange)" }}>Outcomes</span>
              </h2>
              <p className="font-body text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                The NextGen Lab is results-oriented. We measure success not just in academic improvement, but in the whole-life transformation of every young person who participates.
              </p>
              <ul className="space-y-3">
                {outcomes.map(o => (
                  <li key={o} className="flex items-start gap-3">
                    <CheckCircle size={18} style={{ color: "var(--an-orange)", flexShrink: 0, marginTop: 2 }} />
                    <span className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <Award size={32} style={{ color: "var(--an-gold)" }} className="mb-3" />
                <h3 className="font-display font-bold text-xl text-white mb-2">Certificates of Achievement</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                  Every participant who completes a NextGen Lab program level receives an official Certificate of Achievement from All Nations LDCC — a meaningful recognition of their hard work and growth.
                </p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: "rgba(255,165,0,0.12)", border: "1px solid rgba(255,165,0,0.25)" }}>
                <Users size={32} style={{ color: "var(--an-orange)" }} className="mb-3" />
                <h3 className="font-display font-bold text-xl text-white mb-2">Summer Programs</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.70)" }}>
                  Our Summer NextGen Lab intensives provide full-day enrichment programs during the summer months — keeping young people engaged, growing, and connected to community during the critical summer season. <strong style={{ color: "var(--an-orange)" }}>Summer 2026 enrollment is now open!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Funding Note */}
      <section className="py-12" style={{ background: "var(--an-teal)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Grant-Funded Programming Available
            </h3>
            <p className="font-body text-base mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
              All Nations LDCC actively pursues grant funding to ensure that NextGen Lab programs are accessible to every family in our community — regardless of financial circumstance. Many of our programs are available at no cost to qualifying families through our grant-funded initiatives.
            </p>
            <Link href="/connect" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm transition-all hover:scale-105"
              style={{ background: "#fff", color: "var(--an-teal)" }}>
              Ask About Financial Assistance <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Next Gen Leaders Team Photos */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "var(--an-orange)" }}>Our Team</span>
            <h2 className="font-display text-3xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              Next Gen <span style={{ color: "var(--an-orange)" }}>Leaders</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-xl mx-auto" style={{ color: "#666" }}>
              The dedicated leaders and mentors who pour into the next generation every week at All Nations LDCC.
            </p>
          </div>
          {/* Youth Bus — featured full width */}
          <div className="rounded-2xl overflow-hidden mb-8" style={{ boxShadow: "0 8px 32px rgba(10,22,40,0.18)", border: "2px solid var(--an-orange)" }}>
            <img src={YOUTH_BUS_IMG} alt="All Nations Youth Bus" className="w-full object-cover" style={{ maxHeight: "380px" }} />
            <div className="p-5 text-center" style={{ background: "var(--an-navy)" }}>
              <p className="font-display text-base font-bold text-white">The All Nations Youth Bus</p>
              <p className="font-body text-sm mt-1" style={{ color: "var(--an-gold)" }}>A Mobile Classroom — Taking Education & Faith Into the Community</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(10,22,40,0.12)", border: "1px solid rgba(255,165,0,0.15)" }}>
              <img src={YOUTH_IMG} alt="Kids Choir — All Nations" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              <div className="p-4 text-center" style={{ background: "var(--an-bg)" }}>
                <p className="font-display text-sm font-bold" style={{ color: "var(--an-navy)" }}>Kids Choir on Stage</p>
                <p className="font-body text-xs mt-1" style={{ color: "var(--an-orange)" }}>Voices Raised for God's Glory</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(10,22,40,0.12)", border: "1px solid rgba(255,165,0,0.15)" }}>
              <img src={TEAM_IMG_2} alt="Sis. Marry Jean-Charles at NxtArtGen" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              <div className="p-4 text-center" style={{ background: "var(--an-bg)" }}>
                <p className="font-display text-sm font-bold" style={{ color: "var(--an-navy)" }}>NxtArtGen Ministry</p>
                <p className="font-body text-xs mt-1" style={{ color: "var(--an-orange)" }}>Developing Creative Leaders</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(10,22,40,0.12)", border: "1px solid rgba(255,165,0,0.15)" }}>
              <img src={SANCTUARY_IMG} alt="All Nations Youth Service" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              <div className="p-4 text-center" style={{ background: "var(--an-bg)" }}>
                <p className="font-display text-sm font-bold" style={{ color: "var(--an-navy)" }}>Sunday Youth Service</p>
                <p className="font-body text-xs mt-1" style={{ color: "var(--an-orange)" }}>The Future is Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="container text-center">
          <Star size={40} style={{ color: "var(--an-orange)" }} className="mx-auto mb-4" />
          <h2 className="font-display text-4xl font-bold mb-4" style={{ color: "var(--an-navy)" }}>
            Ready to Enroll Your Child in the NextGen Lab?
          </h2>
          <p className="font-body text-base mb-8 max-w-xl mx-auto" style={{ color: "#666" }}>
            Spaces are limited. Contact us today to learn about available programs, schedules, and enrollment for the upcoming session.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/connect" className="btn-gold flex items-center gap-2">
              Enroll Now <ArrowRight size={16} />
            </Link>
            <a href="tel:7723437021" className="btn-outline flex items-center gap-2" style={{ borderColor: "var(--an-navy)", color: "var(--an-navy)" }}>
              Call Us: (772) 343-7021
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
