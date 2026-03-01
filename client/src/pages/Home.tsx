/**
 * ALL NATIONS LIFE DEVELOPMENT CHRISTIAN CENTER — Home Page
 * Design: Contemporary Evangelical (Elevation Church Inspired)
 * - Dark cinematic (#111) background, white text, gold (#D4A853) accents
 * - Playfair Display headlines + DM Sans body
 * - Full-bleed hero, ministry cards, events, give section
 */

import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

// ─── Image Assets (CDN URLs) ────────────────────────────────────────────────
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-hero-9T4wTkTH3F4Evg6cnaMA67.webp";
const YOUTH_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-youth-8CVHCkjuhJ8BfhKN62od7U.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-community-co9oDMDPDwNJjweot56kVW.webp";
const PASTOR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-pastor-dyxSgeSJZxzmCzConD3BiS.webp";

// ─── Scroll Reveal Hook ──────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

// ─── Navigation ─────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Watch", href: "#watch" },
    { label: "Ministries", href: "#ministries" },
    { label: "Events", href: "#events" },
    { label: "Connect", href: "#connect" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-display text-white font-bold text-base md:text-lg tracking-tight">ALL NATIONS</span>
          <span className="font-body text-[oklch(0.72_0.12_75)] text-[0.6rem] tracking-[0.2em] uppercase">Life Development Christian Center</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Give Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#give" className="btn-gold text-xs py-2.5 px-5">Give</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d]/98 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white font-body font-medium text-base py-2 border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#give" className="btn-gold text-center mt-2">Give</a>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="All Nations Worship"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-[#0d0d0d]/30" />
      </div>

      {/* Content */}
      <div className="relative container pt-32 pb-20">
        <div className="max-w-2xl">
          <p className="section-label mb-4 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
            Welcome to All Nations
          </p>
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.25s", opacity: 0, animationFillMode: "forwards" }}
          >
            Love the Word.<br />
            <span className="text-gold italic">Learn the Word.</span><br />
            Live by the Word.
          </h1>
          <p
            className="font-body text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-up"
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            All Nations Life Development Christian Center is a faith community committed to building people and strengthening institutions for lasting, generational impact.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.55s", opacity: 0, animationFillMode: "forwards" }}
          >
            <a href="#watch" className="btn-gold">Watch Online</a>
            <a href="#connect" className="btn-outline-gold">Get Connected</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

// ─── Service Times Banner ────────────────────────────────────────────────────
function ServiceTimes() {
  return (
    <section className="bg-[oklch(0.72_0.12_75)] py-5">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body font-bold text-[#0d0d0d] text-sm tracking-widest uppercase">
            Join Us This Sunday
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="text-center">
              <p className="font-display font-bold text-[#0d0d0d] text-base">Sunday School</p>
              <p className="font-body text-[#0d0d0d]/70 text-sm">9:00 AM</p>
            </div>
            <div className="w-px h-8 bg-[#0d0d0d]/20 hidden md:block" />
            <div className="text-center">
              <p className="font-display font-bold text-[#0d0d0d] text-base">Morning Worship</p>
              <p className="font-body text-[#0d0d0d]/70 text-sm">11:00 AM</p>
            </div>
            <div className="w-px h-8 bg-[#0d0d0d]/20 hidden md:block" />
            <div className="text-center">
              <p className="font-display font-bold text-[#0d0d0d] text-base">Wednesday Bible Study</p>
              <p className="font-body text-[#0d0d0d]/70 text-sm">7:00 PM</p>
            </div>
          </div>
          <a href="#" className="font-body font-bold text-[#0d0d0d] text-sm tracking-widest uppercase underline underline-offset-4">
            Get Directions →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Watch Section ───────────────────────────────────────────────────────────
function WatchSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="watch" className="py-24 bg-[#0d0d0d]" ref={ref}>
      <div className="container">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">Latest Message</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Watch & <span className="text-gold italic">Grow</span>
          </h2>
          <p className="font-body text-white/60 text-lg mb-12 max-w-xl">
            Miss a service? Catch up on the latest sermons and teachings from All Nations.
          </p>

          {/* Featured Sermon Card */}
          <div className="relative rounded-lg overflow-hidden bg-charcoal-card group cursor-pointer"
            onClick={() => toast.info("Sermon streaming coming soon — stay tuned!")}>
            <div className="aspect-video relative">
              <img src={PASTOR_IMG} alt="Latest Sermon" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-[#0d0d0d]/50 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[oklch(0.72_0.12_75)] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#0d0d0d] ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0d0d0d] to-transparent">
                <p className="section-label mb-1">Current Series</p>
                <h3 className="font-display text-white text-2xl font-bold">Building on the Word</h3>
                <p className="font-body text-white/60 text-sm mt-1">Executive Pastor Shelia Blake</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button onClick={() => toast.info("Full sermon library coming soon!")} className="btn-gold">
              Watch More Sermons
            </button>
            <button onClick={() => toast.info("Podcast coming soon!")} className="btn-outline-gold">
              Listen to Podcast
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Ministries Section ──────────────────────────────────────────────────────
const ministries = [
  {
    title: "Youth Ministry",
    subtitle: "Developing youth who influence culture",
    description: "Our youth ministry creates a space where young people encounter God, build lasting friendships, and discover their God-given purpose.",
    image: YOUTH_IMG,
    tag: "Ages 13–18",
    color: "from-amber-900/80",
  },
  {
    title: "Children's Ministry",
    subtitle: "Partnering with parents to develop kids' faith",
    description: "A safe, fun, and faith-filled environment where children learn about God's love and grow in their relationship with Jesus.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    tag: "Ages 0–12",
    color: "from-blue-900/80",
  },
  {
    title: "Life Groups",
    subtitle: "Connecting people. Activating faith.",
    description: "Small groups that meet throughout the week for Bible study, prayer, and genuine community. No one should do life alone.",
    image: COMMUNITY_IMG,
    tag: "All Ages",
    color: "from-emerald-900/80",
  },
  {
    title: "Outreach Ministry",
    subtitle: "Making an impact locally and globally",
    description: "Serving our community and the world through compassion, generosity, and the transforming power of the Gospel.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
    tag: "Community",
    color: "from-purple-900/80",
  },
  {
    title: "Women's Ministry",
    subtitle: "Empowering women to walk in their calling",
    description: "A community of women growing together in faith, leadership, and purpose — equipped to impact every sphere of life.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    tag: "Women",
    color: "from-rose-900/80",
  },
  {
    title: "Worship Ministry",
    subtitle: "Inspiring faith through authentic worship",
    description: "Creating an atmosphere of worship that draws people into the presence of God through music, arts, and creative expression.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    tag: "All Ages",
    color: "from-indigo-900/80",
  },
];

function MinistriesSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="ministries" className="py-24 bg-[#111111]" ref={ref}>
      <div className="container">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">Get Involved</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            A Place for <span className="text-gold italic">Every Family</span>
          </h2>
          <p className="font-body text-white/60 text-lg mb-12 max-w-xl">
            No matter where you are in your faith journey, there is a place for you here. Discover the ministry that fits your season of life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministries.map((ministry, i) => (
              <div
                key={ministry.title}
                className="ministry-card bg-charcoal-card rounded-lg overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => toast.info(`${ministry.title} — More details coming soon!`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ministry.image}
                    alt={ministry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${ministry.color} to-transparent`} />
                  <span className="absolute top-3 right-3 font-body text-xs font-bold tracking-widest uppercase bg-[oklch(0.72_0.12_75)] text-[#0d0d0d] px-2.5 py-1 rounded">
                    {ministry.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-white text-xl font-bold mb-1">{ministry.title}</h3>
                  <p className="text-gold font-body text-xs font-semibold tracking-wide uppercase mb-3">{ministry.subtitle}</p>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{ministry.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-gold font-body text-sm font-semibold">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Youth & Summer Programs (Grant Focus) ───────────────────────────────────
function YouthPrograms() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="youth-programs" className="py-24 bg-[#0d0d0d]" ref={ref}>
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Image */}
          <div className="relative">
            <img
              src={YOUTH_IMG}
              alt="Youth Programs"
              className="w-full rounded-lg object-cover h-[480px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-[oklch(0.72_0.12_75)] text-[#0d0d0d] p-6 rounded-lg shadow-2xl">
              <p className="font-display font-bold text-3xl">2026</p>
              <p className="font-body font-bold text-sm tracking-widest uppercase">Summer Program</p>
              <p className="font-body text-[#0d0d0d]/70 text-xs mt-1">Registration Opening Soon</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="section-label mb-3">Youth & Community</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Investing in the <span className="text-gold italic">Next Generation</span>
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
              Our youth and summer programs are designed to provide safe, enriching, and faith-centered environments where young people can thrive academically, spiritually, and socially.
            </p>
            <p className="font-body text-white/70 leading-relaxed mb-8">
              Through mentorship, leadership development, arts, athletics, and biblical teaching, we are raising a generation that is equipped to lead with integrity and purpose in every sphere of society.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { number: "100+", label: "Youth Served Annually" },
                { number: "8 Wks", label: "Summer Program" },
                { number: "3", label: "Core Programs" },
                { number: "Free", label: "Community Access" },
              ].map((stat) => (
                <div key={stat.label} className="bg-charcoal-card rounded-lg p-4 border border-white/5">
                  <p className="font-display text-gold text-2xl font-bold">{stat.number}</p>
                  <p className="font-body text-white/60 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => toast.info("Summer program registration opening soon — check back!")} className="btn-gold">
                Register for Summer 2026
              </button>
              <button onClick={() => toast.info("Volunteer interest form coming soon!")} className="btn-outline-gold">
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Events Section ──────────────────────────────────────────────────────────
const events = [
  {
    date: { month: "MAR", day: "15" },
    title: "Youth Night Live",
    description: "An electrifying night of worship, games, and the Word for teens and young adults.",
    time: "6:00 PM – 9:00 PM",
    location: "Main Sanctuary",
  },
  {
    date: { month: "MAR", day: "22" },
    title: "Women's Leadership Brunch",
    description: "A powerful gathering equipping women to lead with faith and excellence in every area of life.",
    time: "10:00 AM – 1:00 PM",
    location: "Fellowship Hall",
  },
  {
    date: { month: "APR", day: "5" },
    title: "Community Easter Celebration",
    description: "Join us for a powerful Easter service celebrating the resurrection of Jesus Christ.",
    time: "10:00 AM & 12:00 PM",
    location: "Main Sanctuary",
  },
  {
    date: { month: "JUN", day: "1" },
    title: "Summer Program Kickoff",
    description: "The official launch of our 2026 Summer Youth Program — activities, worship, and community.",
    time: "9:00 AM",
    location: "All Nations Campus",
  },
];

function EventsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="events" className="py-24 bg-[#111111]" ref={ref}>
      <div className="container">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="section-label mb-3">What's Happening</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
                Upcoming <span className="text-gold italic">Events</span>
              </h2>
            </div>
            <button onClick={() => toast.info("Full events calendar coming soon!")} className="btn-outline-gold self-start md:self-auto">
              View All Events
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {events.map((event, i) => (
              <div
                key={event.title}
                className="ministry-card bg-charcoal-card rounded-lg p-6 flex gap-5 border border-white/5 cursor-pointer"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => toast.info(`${event.title} — More details coming soon!`)}
              >
                {/* Date Badge */}
                <div className="flex-shrink-0 w-16 h-16 bg-[oklch(0.72_0.12_75)] rounded-lg flex flex-col items-center justify-center">
                  <span className="font-body text-[#0d0d0d] text-[0.6rem] font-bold tracking-widest uppercase">{event.date.month}</span>
                  <span className="font-display text-[#0d0d0d] text-2xl font-bold leading-none">{event.date.day}</span>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-white text-lg font-bold mb-1">{event.title}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed mb-3">{event.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs font-body text-white/40">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About / Mission Section ─────────────────────────────────────────────────
function AboutSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-[#0d0d0d]" ref={ref}>
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Content */}
          <div>
            <p className="section-label mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Building People.<br />
              <span className="text-gold italic">Strengthening Nations.</span>
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
              All Nations Life Development Christian Center is a faith community rooted in the belief that the Word of God is the foundation for every area of life — family, business, ministry, and community.
            </p>
            <p className="font-body text-white/60 leading-relaxed mb-8">
              Our mission is simple: <strong className="text-white">Love the Word. Learn the Word. Live by the Word.</strong> We are committed to raising up leaders who carry the Kingdom of God into every sphere of society, creating lasting transformation across generations.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {[
                { title: "Word-Centered", desc: "Every decision, every program, every relationship is anchored in Scripture." },
                { title: "Community-Focused", desc: "We believe in the power of authentic, multigenerational community." },
                { title: "Excellence-Driven", desc: "We honor God by pursuing excellence in all that we do." },
              ].map((value) => (
                <div key={value.title} className="flex gap-4 items-start">
                  <div className="w-1 h-12 bg-[oklch(0.72_0.12_75)] rounded-full flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body font-bold text-white text-sm">{value.title}</p>
                    <p className="font-body text-white/50 text-sm mt-0.5">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pastor Image */}
          <div className="relative">
            <img
              src={PASTOR_IMG}
              alt="Executive Pastor Shelia Blake"
              className="w-full rounded-lg object-cover h-[560px] object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0d0d0d] to-transparent rounded-b-lg">
              <p className="font-body text-gold text-xs font-bold tracking-widest uppercase mb-1">Executive Pastor</p>
              <p className="font-display text-white text-2xl font-bold">Shelia Blake</p>
              <p className="font-body text-white/60 text-sm mt-1">
                "Vision without execution is hallucination. We build with purpose."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Connect Section ─────────────────────────────────────────────────────────
function ConnectSection() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We will be in touch with you soon. God bless you!");
    setForm({ name: "", email: "", phone: "", interest: "" });
  };

  return (
    <section id="connect" className="py-24 bg-[#111111]" ref={ref}>
      <div className="container">
        <div className={`grid md:grid-cols-2 gap-16 items-start transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Left */}
          <div>
            <p className="section-label mb-3">We'd Love to Meet You</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Take Your <span className="text-gold italic">Next Step</span>
            </h2>
            <p className="font-body text-white/70 text-lg leading-relaxed mb-10">
              Whether you are visiting for the first time or looking to get more involved, we want to help you find your place in this community.
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: "All Nations Life Development Christian Center",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "PastorShelia.Blake@allnationsldcc.org",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Service Times",
                  value: "Sunday 9AM & 11AM | Wednesday 7PM",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.72_0.12_75)/15] flex items-center justify-center text-gold flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-white/40 text-xs font-bold tracking-widest uppercase">{item.label}</p>
                    <p className="font-body text-white text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-charcoal-card rounded-xl p-8 border border-white/5">
            <h3 className="font-display text-white text-2xl font-bold mb-6">Connect With Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-body text-white/60 text-xs font-bold tracking-widest uppercase block mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-white/60 text-xs font-bold tracking-widest uppercase block mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-body text-white/60 text-xs font-bold tracking-widest uppercase block mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label className="font-body text-white/60 text-xs font-bold tracking-widest uppercase block mb-2">I'm Interested In</label>
                <select
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-[oklch(0.72_0.12_75)] transition-colors"
                >
                  <option value="">Select an area...</option>
                  <option value="new">I'm New Here</option>
                  <option value="youth">Youth Ministry</option>
                  <option value="lifegroup">Life Groups</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="summer">Summer Program</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <button type="submit" className="btn-gold w-full text-center mt-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Give Section ────────────────────────────────────────────────────────────
function GiveSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="give" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0d0d0d]/85" />
      </div>

      <div className="relative container">
        <div className={`max-w-2xl mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="section-label mb-3">Partner With Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Your Generosity <span className="text-gold italic">Changes Lives</span>
          </h2>
          <p className="font-body text-white/70 text-lg leading-relaxed mb-10">
            Every gift you give supports our youth programs, community outreach, summer initiatives, and the ongoing mission of All Nations Life Development Christian Center. Your investment is building the next generation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => toast.info("Online giving portal coming soon!")} className="btn-gold text-base px-10 py-4">
              Give Online
            </button>
            <button onClick={() => toast.info("Text-to-give setup coming soon!")} className="btn-outline-gold text-base px-10 py-4">
              Text to Give
            </button>
          </div>
          <p className="font-body text-white/40 text-sm mt-6">
            All Nations Life Development Christian Center is a 501(c)(3) nonprofit organization. Your donations are tax-deductible.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <p className="font-display text-white font-bold text-xl tracking-tight">ALL NATIONS</p>
              <p className="font-body text-gold text-xs tracking-[0.2em] uppercase">Life Development Christian Center</p>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed max-w-xs">
              Love the Word. Learn the Word. Live by the Word. Building people and strengthening institutions for lasting, generational impact.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {["Facebook", "Instagram", "YouTube"].map((social) => (
                <button
                  key={social}
                  onClick={() => toast.info(`${social} page coming soon!`)}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[oklch(0.72_0.12_75)/20] flex items-center justify-center text-white/50 hover:text-gold transition-colors text-xs font-bold"
                >
                  {social[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-body font-bold text-white text-xs tracking-widest uppercase mb-4">Quick Links</p>
            <ul className="space-y-2.5">
              {["Watch Online", "Ministries", "Events", "Connect", "Give", "About Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-white/50 hover:text-gold text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body font-bold text-white text-xs tracking-widest uppercase mb-4">Contact</p>
            <div className="space-y-3">
              <p className="font-body text-white/50 text-sm">PastorShelia.Blake@allnationsldcc.org</p>
              <p className="font-body text-white/50 text-sm">Sunday: 9:00 AM & 11:00 AM</p>
              <p className="font-body text-white/50 text-sm">Wednesday: 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            © 2026 All Nations Life Development Christian Center. All rights reserved.
          </p>
          <p className="font-body text-white/20 text-xs">
            Website by AmarAI Consulting Group LLC
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Home Page ──────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <Hero />
      <ServiceTimes />
      <WatchSection />
      <MinistriesSection />
      <YouthPrograms />
      <EventsSection />
      <AboutSection />
      <ConnectSection />
      <GiveSection />
      <Footer />
    </div>
  );
}
