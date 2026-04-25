import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Heart, Users, Star, Globe, Music, BookOpen, Award, ArrowRight, Phone } from "lucide-react";

const DANCE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-worship-dance-Jybwyq5RpWn9U8UhX9ebEc.webp";
const YOUTH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-youth-colorful-nKbLKyEu7hHmoL54WdXhom.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-community-colorful-LSc7sQDzvXgdnxS4cpfaBX.webp";

const ministries = [
  {
    id: "women", name: "Women's Ministry", tagline: "Empowered. Equipped. Elevated.",
    color: "var(--an-red)", icon: <Heart size={26} />,
    description: "A safe, nurturing space where women of all ages grow in faith, build authentic relationships, and walk boldly in their God-given purpose. Through Bible study, mentorship, retreats, and community outreach, we equip women to lead with grace and strength.",
    programs: ["Women's Bible Study", "Annual Women's Retreat", "Mentorship Program", "Community Outreach"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ylglDAjMHQDEfZUB.jpg", // Women's Ministry Leaders — real All Nations
  },
  {
    id: "men", name: "Men's Ministry", tagline: "Men of Integrity. Men of Impact.",
    color: "var(--an-blue)", icon: <Users size={26} />,
    description: "Building men of faith, integrity, and purpose. We create environments where men can be transparent, grow spiritually, and develop as leaders in their homes, workplaces, and communities.",
    programs: ["Men's Fellowship", "Leadership Development", "Father-Son Events", "Community Service"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/VWpZQhooKkrafWcQ.jpg", // Men's Ministry — men worshipping on stage with full band
  },
  {
    id: "youth", name: "Youth & Next Gen", tagline: "The Future is Now.",
    color: "var(--an-orange)", icon: <Star size={26} />,
    description: "Where the next generation discovers who they are in Christ. Dynamic worship, relevant teaching, and real community. Youth services at both 8:30 AM and 11:00 AM on Sundays, with a dedicated Toddler Lounge.",
    programs: ["Sunday Youth Service (8:30 AM & 11 AM)", "Toddler Lounge", "Youth Bible Study", "Summer Programs", "Youth Voice Training"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/TpvUttJFgSJQLbEG.jpeg",
  },
  {
    id: "great-commission", name: "The Great Commission", tagline: "Go. Make Disciples. Change the World.",
    color: "var(--an-green)", icon: <Globe size={26} />,
    description: "Inspired by Matthew 28:19-20, this ministry is the outward expression of our faith — through evangelism, community outreach, mission trips, and partnerships that bring the love of Christ to those who need it most.",
    programs: ["Community Outreach", "Evangelism Teams", "Mission Partnerships", "Food & Resource Drives"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/mqYUeojBYQajAhyT.jpeg",
  },
  {
    id: "arts", name: "The Arts — Worship in Dance", tagline: "Every Movement is an Offering.",
    color: "var(--an-teal)", icon: <Music size={26} />,
    description: "Celebrating the full spectrum of creative worship. Our liturgical dance ministry, worship teams, and creative artists are anointed vessels who carry the presence of God through movement, music, and expression.",
    programs: ["Liturgical Dance", "Praise Dance Classes", "Worship Team", "Youth Voice Training", "Creative Arts Workshop"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/CysZrOZZAIvlWCWA.jpg", // The Arts — mime performer in full costume
  },
  {
    id: "mad-hatters", name: "Mad Hatters — Pink Basket", tagline: "Compassion in Action.",
    color: "#D63384", icon: <Heart size={26} />,
    description: "Our beloved Pink Basket ministry — a compassionate outreach initiative dedicated to serving women in our community facing challenges. Through care packages, encouragement, and practical support, we remind every woman she is seen, valued, and loved.",
    programs: ["Pink Basket Distributions", "Women's Care Packages", "Community Partnerships", "Encouragement Campaigns"],
    link: "/mad-hatters",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485607175/QUcZahytSDrYuMjNtsqNpd/pink_cowgirl_hat-2aDMPdELL6jfpETUJR3uy6.png",
  },
  {
    id: "legacy-love", name: "Legacy of Love", tagline: "Love That Outlasts a Lifetime.",
    color: "var(--an-gold)", icon: <Heart size={26} />,
    description: "Honoring and serving our senior members and families. The wisdom, experience, and faith of our elders are among our greatest treasures. This ministry creates meaningful connections and celebrates the legacy of those who paved the way.",
    programs: ["Senior Fellowship", "Visitation Ministry", "Legacy Events", "Intergenerational Programs"],
    link: "/legacy-of-love",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/HCIJXpNVUdOjliMw.jpg",
  },
  {
    id: "armorbearers", name: "Armorbearers", tagline: "Covering. Protecting. Serving.",
    color: "var(--an-navy)", icon: <Award size={26} />,
    description: "The Armorbearers are a dedicated team of servants who provide spiritual covering, practical support, and faithful service to the pastoral leadership and the body of Christ. Called to serve with excellence, discretion, and a heart of humility, they stand as a vital pillar of the ministry.",
    programs: ["Pastoral Support", "Event Coverage", "Security & Protocol", "Leadership Service", "Prayer & Intercession"],
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/YBouLNSZGzHhtbft.jpg", // Armorbearers team photo in front of All Nations logo
  },
  {
    id: "journey", name: "Journey with Jesus", tagline: "Every Step. Every Season. With Jesus.",
    color: "var(--an-gold)", icon: <Heart size={26} />,
    description: "A ministry dedicated to walking alongside every person at every stage of their faith journey — from the moment of salvation through baptism, discipleship, community, and purpose. No matter where you are, there is a next step waiting for you.",
    programs: ["Salvation & New Believer Support", "Baptism Classes", "Discipleship 201, 301 & 401", "One-on-One Mentorship", "Next Steps Pathway"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485607175/PdktnDvnsnrtAxYXxEkePm/journey_bible_study-Hgk56XdNmpLGsdbGo34z42.png",
  },
  {
    id: "worship-team", name: "Worship Team", tagline: "Where Anointing Meets Excellence.",
    color: "var(--an-gold)", icon: <Music size={26} />,
    description: "The All Nations Worship Team is a prophetic, anointed company of worshipers called to lead the body of Christ into the presence of God. From psalmists and musicians to praise dancers and the media team — every gift has a home here. We are committed to excellence in preparation, humility in spirit, and boldness in expression.",
    programs: ["Psalmists & Vocalists", "Musicians & Instrumentalists", "Praise Dance & Creative Arts", "Media & Sound Team", "Rehearsals Wed & Sat"],
    link: "/worship-team",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/hOZpguhLcDLiUNcQ.jpg", // Worship Team group photo in front of All Nations logo — real All Nations
  },
  {
    id: "legacy-making", name: "Legacy in the Making", tagline: "Single. Whole. Purposeful.",
    color: "var(--an-teal)", icon: <Heart size={26} />,
    description: "Our vibrant singles ministry — a diverse, multigenerational community of Black, Caribbean, American, and Hispanic singles of all ages. From bowling nights to worship gatherings, we are building lives of purpose, faith, and authentic connection together.",
    programs: ["Worship Nights", "Fellowship Outings", "Life Groups", "Personal Development", "Community Service", "Monthly Gatherings"],
    link: "/legacy-in-the-making",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/DCyqXjPXGLUOFgEd.jpg", // Legacy in the Making — singles ministry worship on stage
  },
];

const counselingServices = [
  { title: "Christian Counseling", desc: "Faith-based counseling that integrates biblical principles with professional therapeutic approaches to bring healing and wholeness.", color: "var(--an-teal)" },
  { title: "Marriage Counseling", desc: "Strengthening marriages through Christ-centered guidance, communication tools, and practical strategies for lasting partnership.", color: "var(--an-red)" },
  { title: "Family Counseling", desc: "Restoring and strengthening family relationships through professional, compassionate, faith-based family therapy.", color: "var(--an-green)" },
  { title: "Ministry Leader Counseling", desc: "Specialized support for pastors, ministers, and ministry leaders navigating the unique challenges of spiritual leadership.", color: "var(--an-gold)" },
];

const discipleshipCourses = [
  { level: "201", title: "Foundations of Faith", desc: "Establishing your identity in Christ, understanding salvation, and building the foundational disciplines of a thriving Christian life.", color: "var(--an-blue)", badge: "Certificate Awarded" },
  { level: "301", title: "Growing in Purpose", desc: "Discovering your spiritual gifts, understanding your calling, and learning to operate effectively in your God-given assignment.", color: "var(--an-teal)", badge: "Certificate Awarded" },
  { level: "401", title: "Leadership & Legacy", desc: "Advanced discipleship for emerging leaders — building systems, developing others, and creating lasting kingdom impact.", color: "var(--an-gold)", badge: "Certificate Awarded" },
];

const ministryClasses = [
  { name: "The Leadership Lab", desc: "A dynamic, hands-on leadership development program equipping ministers, team leaders, and emerging voices with the skills to lead with excellence.", color: "var(--an-navy)", icon: <Award size={20} /> },
  { name: "Praise Dance & The Arts", desc: "Professional instruction in liturgical dance, worship movement, and creative expression for all skill levels — from beginners to advanced dancers.", color: "var(--an-teal)", icon: <Music size={20} /> },
  { name: "Youth Voice Training", desc: "Developing the next generation of worship leaders, speakers, and communicators through vocal training, stage presence, and spiritual formation.", color: "var(--an-orange)", icon: <Star size={20} /> },
];

export default function Ministries() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>Our Ministries</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">A Place for Every Person</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            At All Nations, every ministry is a branch of the same tree — rooted in faith, growing in purpose, reaching toward heaven.
          </p>
        </div>
      </div>

      {/* Ministry Cards */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {ministries.map((m, i) => (
              <div key={m.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg" style={{ background: m.color }}>{m.icon}</div>
                  <span className="section-label" style={{ color: m.color }}>{m.tagline}</span>
                  <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--an-navy)" }}>{m.name}</h2>
                  <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#555" }}>{m.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {m.programs.map(p => (
                      <span key={p} className="font-body text-xs px-3 py-1 rounded-full font-medium" style={{ background: `${m.color}18`, color: m.color, border: `1px solid ${m.color}30` }}>{p}</span>
                    ))}
                  </div>
                  <Link href={(m as any).link || "/connect"} className="btn-navy flex items-center gap-2 w-fit">{(m as any).link ? "Learn More" : "Get Involved"} <ArrowRight size={14} /></Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute -inset-3 rounded-2xl opacity-15" style={{ background: `linear-gradient(135deg, ${m.color}, transparent)` }} />
                    <img src={m.image} alt={m.name} className="relative z-10 w-full rounded-2xl object-cover shadow-xl" style={{ height: "400px", objectPosition: m.id === 'legacy-making' || m.id === 'great-commission' ? 'center center' : m.id === 'youth' ? 'center top' : 'center 20%' }} />
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full font-body font-bold text-xs text-white" style={{ background: m.color }}>{m.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling Services */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Professional Services</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Counseling <span style={{ color: "var(--an-gold)" }}>Services</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "#666" }}>
              All Nations offers professional counseling services through licensed counselors committed to bringing healing, restoration, and wholeness through faith-based, evidence-informed care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {counselingServices.map(s => (
              <div key={s.title} className="ministry-card bg-white p-6 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="w-2 absolute top-0 left-0 bottom-0 rounded-l-xl" style={{ background: s.color }} />
                <div className="pl-3">
                  <h3 className="font-display font-bold text-base mb-3" style={{ color: "var(--an-navy)" }}>{s.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-8 text-center" style={{ background: "var(--an-bg)", border: "1px solid rgba(31,47,92,0.10)" }}>
            <p className="font-body text-base mb-4" style={{ color: "#555" }}>
              <strong style={{ color: "var(--an-navy)" }}>Office Hours:</strong> By appointment — please call to schedule your consultation.
            </p>
            <a href="tel:7723437021" className="btn-navy flex items-center gap-2 w-fit mx-auto">
              <Phone size={16} /> Call 772-343-7021
            </a>
          </div>
        </div>
      </section>

      {/* Discipleship Courses */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Grow in the Word</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Discipleship <span style={{ color: "var(--an-gold)" }}>Classes</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "#666" }}>
              Our structured discipleship curriculum takes you from new believer to seasoned leader — with a certificate awarded upon completion of each level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discipleshipCourses.map(c => (
              <div key={c.level} className="bg-white rounded-2xl overflow-hidden shadow-md ministry-card">
                <div className="p-2 text-center font-display font-bold text-5xl text-white" style={{ background: c.color }}>{c.level}</div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--an-navy)" }}>{c.title}</h3>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "#666" }}>{c.desc}</p>
                  <div className="flex items-center gap-2">
                    <Award size={16} style={{ color: c.color }} />
                    <span className="font-body font-bold text-xs" style={{ color: c.color }}>{c.badge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-sm mt-8" style={{ color: "#888" }}>
            Classes are offered throughout the year. Contact us to register or learn about upcoming start dates.
          </p>
        </div>
      </section>

      {/* Ministry Classes */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Develop Your Gift</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Ministry <span style={{ color: "var(--an-gold)" }}>Classes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ministryClasses.map(c => (
              <div key={c.name} className="ministry-card bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white mx-auto mb-4" style={{ background: c.color }}>{c.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--an-navy)" }}>{c.name}</h3>
                <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "#666" }}>{c.desc}</p>
                <Link href="/connect" className="btn-outline text-xs">Inquire About Classes</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Leader Spotlight */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "var(--an-gold)" }}>Ministry Leadership</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Led with <span style={{ color: "var(--an-gold)" }}>Purpose</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "#666" }}>
              Every ministry at All Nations is led by anointed, equipped leaders committed to serving with excellence and building people for lasting impact.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl opacity-10" style={{ background: "linear-gradient(135deg, var(--an-gold), var(--an-teal))" }} />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/4732_f8ef8a6f.jpg"
                alt="Executive Pastor Shelia Blake"
                className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
                style={{ height: "480px", objectPosition: "top" }}
              />
              <div className="absolute bottom-4 left-4 z-20 px-4 py-2 rounded-xl font-body font-bold text-sm text-white" style={{ background: "var(--an-navy)" }}>
                Executive Pastor Shelia Blake
              </div>
            </div>
            <div>
              <span className="section-label" style={{ color: "var(--an-gold)" }}>Ministry Director</span>
              <h3 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--an-navy)" }}>Executive Pastor Shelia Blake</h3>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                Executive Pastor Shelia Blake provides strategic oversight and spiritual direction across all ministry departments at All Nations Life Development Christian Center. With more than 35 years of combined executive and ministry leadership, she ensures every ministry operates with excellence, purpose, and accountability.
              </p>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#555" }}>
                Her vision: every person finds their place, every gift is activated, and every ministry reflects the heart of God. Under her leadership, All Nations continues to build people, strengthen families, and advance the Kingdom in Port St. Lucie and beyond.
              </p>
              <Link href="/meet-the-pastors" className="btn-navy flex items-center gap-2 w-fit">Meet the Pastors <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--an-navy)" }}>
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Find Your Ministry Home</h2>
          <p className="font-body text-base mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Every person has a place at All Nations. Connect with us today and discover where you belong.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/connect" className="btn-gold">Connect With Us</Link>
            <a href="tel:7723437021" className="btn-outline flex items-center gap-2" style={{ borderColor: "#fff", color: "#fff" }}>
              <Phone size={14} /> 772-343-7021
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
