import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const LOGO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-logo_e1bf5a77.jpg";

export default function Footer() {
  return (
    <footer style={{ background: "var(--an-navy)", color: "#e8e8e8" }}>
      {/* Rainbow top bar */}
      <div className="rainbow-bar w-full" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO} alt="All Nations LDCC" className="h-16 w-16 object-contain rounded-full border-2 border-[#C59D2F]" />
              <div>
                <div className="font-display font-bold text-white text-sm leading-tight">ALL NATIONS</div>
                <div className="font-body text-xs leading-tight" style={{ color: "var(--an-gold)", letterSpacing: "0.1em" }}>
                  Life Development<br />Christian Center
                </div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.70)" }}>
              <em style={{ color: "var(--an-gold)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                "Building People is Our Business"
              </em>
            </p>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Love the Word. Learn the Word. Live by the Word.<br />
              Serving Port St. Lucie, FL since 1999.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/AllNationsLDCC/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.10)" }}
                aria-label="Facebook">
                <Facebook size={16} color="#fff" />
              </a>
              <a href="https://www.instagram.com/allnationsldcc/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.10)" }}
                aria-label="Instagram">
                <Instagram size={16} color="#fff" />
              </a>
              <a href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.10)" }}
                aria-label="YouTube">
                <Youtube size={16} color="#fff" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white text-base font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/what-we-believe" },
                { label: "Meet the Pastors", href: "/meet-the-pastors" },
                { label: "Ministries", href: "/ministries" },
                { label: "Events & Calendar", href: "/events" },
                { label: "Podcast & Teachings", href: "/podcast" },
                { label: "Voices of Vision 2026", href: "/voices-of-vision" },
                { label: "Connect With Us", href: "/connect" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="font-body text-sm transition-colors hover:text-[#C59D2F]"
                    style={{ color: "rgba(255,255,255,0.68)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h4 className="font-display text-white text-base font-semibold mb-5">Service Times</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Clock size={16} style={{ color: "var(--an-gold)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="font-body font-600 text-white text-sm">Sunday Worship</div>
                  <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>8:30 AM & 11:00 AM</div>
                  <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Youth & Toddler Lounge at both services</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock size={16} style={{ color: "var(--an-teal)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="font-body font-600 text-white text-sm">Wednesday Bible Study</div>
                  <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>7:00 PM</div>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock size={16} style={{ color: "var(--an-orange)", flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="font-body font-600 text-white text-sm">Prayer Line</div>
                  <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>See Events page for schedule</div>
                </div>
              </li>
            </ul>

            <div className="mt-6 space-y-2">
              <div className="flex gap-2 items-start">
                <MapPin size={15} style={{ color: "var(--an-gold)", flexShrink: 0, marginTop: 2 }} />
                <span className="font-body text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Port St. Lucie, FL
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Mail size={15} style={{ color: "var(--an-gold)", flexShrink: 0 }} />
                <a href="mailto:PastorShelia.Blake@allnationsldcc.org"
                  className="font-body text-xs hover:text-[#C59D2F] transition-colors"
                  style={{ color: "rgba(255,255,255,0.65)" }}>
                  PastorShelia.Blake@allnationsldcc.org
                </a>
              </div>
            </div>
          </div>

          {/* Give + Members */}
          <div>
            <h4 className="font-display text-white text-base font-semibold mb-5">Give & Connect</h4>
            <p className="font-body text-sm mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
              Your generosity fuels life change. Give securely online through our trusted giving platform.
            </p>
            <a
              href="https://kindrid.com/give/allnationsldcc"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2 justify-center mb-4 w-full"
            >
              <Heart size={14} />
              Give Online
            </a>

            {/* Realm Connect — Coming Soon */}
            <div
              className="rounded-lg p-4 mt-4"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <div className="font-body font-bold text-white text-sm mb-1">Members Portal</div>
              <div className="font-body text-xs mb-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                Realm Connect — Member engagement, groups & directory access
              </div>
              <span
                className="inline-block font-body font-bold text-xs px-3 py-1 rounded-full"
                style={{ background: "rgba(197,157,47,0.18)", color: "var(--an-gold)", letterSpacing: "0.1em" }}
              >
                COMING SOON
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            © {new Date().getFullYear()} All Nations Life Development Christian Center. All rights reserved.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            {[
              { label: "Facebook", href: "https://www.facebook.com/AllNationsLDCC/" },
              { label: "Instagram", href: "https://www.instagram.com/allnationsldcc/" },
              { label: "YouTube", href: "https://www.youtube.com/c/allnationslifedevelopmentchristiancenter" },
              { label: "Give", href: "/give" },
            ].map(l => (
              <a key={l.label} href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-body text-xs transition-colors hover:text-[#C59D2F]"
                style={{ color: "rgba(255,255,255,0.50)" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
