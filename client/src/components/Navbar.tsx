import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-logo_e1bf5a77.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/what-we-believe" },
  { label: "Pastors", href: "/meet-the-pastors" },
  { label: "Ministries", href: "/ministries" },
  { label: "Journey", href: "/journey-with-jesus" },
  { label: "NextGen Lab", href: "/nextgen-lab" },
  { label: "Leadership Lab", href: "/leadership-lab" },
  { label: "Daily Word", href: "/daily-word" },
  { label: "Events", href: "/events" },
  { label: "Podcast", href: "/podcast" },
  { label: "Vision 2026", href: "/voices-of-vision" },
  { label: "Connect", href: "/connect" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      {/* Rainbow bar at very top */}
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
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src={LOGO}
                alt="All Nations LDCC Logo"
                className="h-14 w-14 object-contain rounded-full border-2 border-[#C59D2F] shadow-sm"
              />
              <div className="hidden sm:block">
                <div
                  className="font-display font-bold leading-tight"
                  style={{ color: "var(--an-navy)", fontSize: "1rem" }}
                >
                  ALL NATIONS
                </div>
                <div
                  className="font-body text-xs leading-tight"
                  style={{ color: "var(--an-gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}
                >
                  Life Development Christian Center
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link"
                  style={{ color: location === item.href ? "var(--an-gold)" : undefined }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Give Button (desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/give" className="btn-gold flex items-center gap-2">
                <Heart size={14} />
                Give
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md"
              style={{ color: "var(--an-navy)" }}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="lg:hidden border-t animate-fade-in"
            style={{ background: "#FAF8F4", borderColor: "var(--an-gold)" }}
          >
            <div className="container py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 px-4 rounded-lg font-body font-medium text-sm transition-colors"
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

      {/* Floating Give Button — site-wide */}
      <a
        href="https://kindrid.com/give/allnationsldcc"
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
