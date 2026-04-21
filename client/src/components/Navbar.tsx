import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart, ChevronDown, BookOpen } from "lucide-react";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-logo_e1bf5a77.jpg";

// 5 primary visible nav links
const primaryNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/what-we-believe" },
  { label: "Ministries", href: "/ministries" },
  { label: "Events", href: "/events" },
  { label: "Give", href: "/give", isGive: true },
];

const DAILY_WORD = { label: "Daily Word", href: "/daily-word" };

// All other pages in the hamburger dropdown
const moreNav = [
  { label: "Pastors", href: "/meet-the-pastors" },
  { label: "Written Word", href: "/written-word" },
  { label: "Journey with Jesus", href: "/journey-with-jesus" },
  { label: "NextGen Lab", href: "/nextgen-lab" },
  { label: "Leadership Lab", href: "/leadership-lab" },
  { label: "Bible Study", href: "/bible-study" },
  { label: "Gallery", href: "/gallery" },
  { label: "Podcast", href: "/podcast" },
  { label: "Vision 2026", href: "/voices-of-vision" },
  { label: "Worship Team", href: "/worship-team" },
  { label: "Connect", href: "/connect" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* Rainbow bar */}
      <div className="rainbow-bar w-full" />

      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(250,248,244,0.97)" : "#FAF8F4",
          boxShadow: scrolled ? "0 2px 20px rgba(31,47,92,0.10)" : "none",
          backdropFilter: scrolled ? "blur(10px)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between py-3">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <img
                src={LOGO}
                alt="All Nations LDCC Logo"
                className="h-14 w-14 object-contain rounded-full border-2 border-[#C59D2F] shadow-sm"
              />
              <div className="hidden sm:block">
                <div className="font-display font-bold leading-tight" style={{ color: "var(--an-navy)", fontSize: "1rem" }}>
                  ALL NATIONS
                </div>
                <div className="font-body text-xs leading-tight" style={{ color: "var(--an-gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  Life Development Christian Center
                </div>
              </div>
            </Link>

            {/* Desktop Nav — 5 primary links */}
            <nav className="hidden lg:flex items-center gap-7">
              {primaryNav.filter(i => !i.isGive).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link font-body font-semibold text-sm transition-colors"
                  style={{ color: location === item.href ? "var(--an-gold)" : "var(--an-navy)" }}
                >
                  {item.label}
                </Link>
              ))}

              {/* More dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 font-body font-semibold text-sm transition-colors"
                  style={{ color: "var(--an-navy)" }}
                >
                  More <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-52 rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in"
                    style={{ background: "#FAF8F4" }}
                  >
                    {moreNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-5 py-2.5 font-body text-sm transition-colors hover:bg-amber-50"
                        style={{ color: location === item.href ? "var(--an-gold)" : "var(--an-navy)" }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Daily Word + Give Buttons (desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/daily-word"
                className="flex items-center gap-2 px-4 py-2 rounded-full font-body font-semibold text-sm transition-all"
                style={{
                  background: location === "/daily-word" ? "var(--an-navy)" : "rgba(31,47,92,0.08)",
                  color: location === "/daily-word" ? "#fff" : "var(--an-navy)",
                  border: "1.5px solid var(--an-navy)",
                }}
              >
                <BookOpen size={14} />
                Daily Word
              </Link>
              <Link href="/give" className="btn-gold flex items-center gap-2">
                <Heart size={14} />
                Give
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md"
              style={{ color: "var(--an-navy)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu — all pages */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t animate-fade-in"
            style={{ background: "#FAF8F4", borderColor: "var(--an-gold)" }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {/* Primary links first */}
              {primaryNav.filter(i => !i.isGive).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 px-4 rounded-lg font-body font-semibold text-sm transition-colors"
                  style={{
                    color: location === item.href ? "var(--an-gold)" : "var(--an-navy)",
                    background: location === item.href ? "rgba(197,157,47,0.08)" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              {/* Daily Word highlight in mobile */}
              <Link
                href="/daily-word"
                className="py-3 px-4 rounded-lg font-body font-semibold text-sm flex items-center gap-2"
                style={{
                  background: location === "/daily-word" ? "var(--an-navy)" : "rgba(31,47,92,0.06)",
                  color: location === "/daily-word" ? "#fff" : "var(--an-navy)",
                  border: "1.5px solid var(--an-navy)",
                }}
              >
                <BookOpen size={14} />
                Daily Word
              </Link>
              {/* Divider */}
              <div className="my-2 border-t" style={{ borderColor: "rgba(197,157,47,0.2)" }} />
              <p className="px-4 text-xs font-body uppercase tracking-widest mb-1" style={{ color: "var(--an-gold)" }}>More Pages</p>
              {moreNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2.5 px-4 rounded-lg font-body text-sm transition-colors"
                  style={{
                    color: location === item.href ? "var(--an-gold)" : "var(--an-navy)",
                    background: location === item.href ? "rgba(197,157,47,0.08)" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/give" className="btn-gold mt-3 text-center flex items-center justify-center gap-2">
                <Heart size={14} />
                Give Online
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Floating Give Button */}
      <a
        href="https://www.kindridgiving.com/App/Form/7c27d226-b8cd-4972-99cb-c0cf0eb92952"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-give-btn"
        aria-label="Give online"
      >
        <Heart size={16} />
        Give
      </a>
    </>
  );
}
