// Gallery Page — All Nations Life Development Christian Center
// Design: Deep navy/gold, tabbed gallery with lightbox, real church photos
// Tabs: Worship | Praise Team | Leadership | Ministry | Community | Sanctuary | Prayer

import { useState } from "react";

const BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/";

const tabs = [
  {
    id: "worship",
    label: "Worship",
    photos: [
      { url: BASE + "3578-enhanced_ac220916.jpg", caption: "All Nations Worship Team — Stage with Logo" },
      { url: BASE + "3599_f408c501.jpg", caption: "Bro. Renald Achille — Worship Musician (Best)" },
      { url: BASE + "3588_1b41e822.jpg", caption: "Bro. Renald Achille — Music Ministry" },
      { url: BASE + "3589_506ef5ef.jpg", caption: "Worship Team on Stage" },
      { url: BASE + "3603_833dbbd8.jpg", caption: "Worship Musician" },
    ],
  },
  {
    id: "praise",
    label: "Praise Team",
    photos: [
      { url: BASE + "3728_5e181583.jpg", caption: "All Nations Praise Team" },
      { url: BASE + "3760_20364b9a.jpg", caption: "Praise Team — More of the Team" },
      { url: BASE + "3797_1105bbd1.jpg", caption: "Tehila Praise Team" },
      { url: BASE + "3861_5948d6b6.jpg", caption: "Praise Team, Musicians & Media Team Appreciation Day" },
    ],
  },
  {
    id: "leadership",
    label: "Leadership",
    photos: [
      { url: BASE + "3780_f83434a1.jpg", caption: "Bishop Cornelius Blake & Pastor Shelia Blake" },
      { url: BASE + "3727_0e11e03c.jpg", caption: "All Nations Pastoral Team" },
      { url: BASE + "3726_4305e09d.jpg", caption: "Pastoral Team — Leadership" },
      { url: BASE + "3866_ce68fb90.jpg", caption: "Pastor Joyce Hamilton" },
    ],
  },
  {
    id: "ministry",
    label: "Ministry",
    photos: [
      { url: BASE + "bishop-blake-3657-headshot_7cf45ce8.jpg", caption: "Bishop Cornelius Blake — Preaching" },
      { url: BASE + "3655_6e6b7284.jpg", caption: "Bishop Cornelius Blake — The Word" },
      { url: BASE + "3798_c0a668d6.jpg", caption: "All Nations Ministry in Action" },
      { url: BASE + "3799_1bad746e.jpg", caption: "Ministry Moment" },
    ],
  },
  {
    id: "community",
    label: "Community",
    photos: [
      { url: BASE + "3688_5df84ff2.jpg", caption: "All Nations Congregation" },
      { url: BASE + "3632_a15b256f.jpg", caption: "Congregation in Worship" },
      { url: BASE + "3579_f536e05b.jpg", caption: "All Nations Family — Together" },
    ],
  },
  {
    id: "prayer",
    label: "Prayer",
    photos: [
      { url: BASE + "938_f45bb783.jpg", caption: "Altar Call — All Nations in Prayer" },
      { url: BASE + "3936_1a245222.jpg", caption: "Intercessory Prayer Gathering" },
    ],
  },
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("worship");
  const [lightbox, setLightbox] = useState<{ url: string; caption: string } | null>(null);

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen" style={{ background: "var(--an-navy, #0a1628)" }}>
      {/* Hero */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #1a2d50 50%, #0a1628 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${BASE}3578-enhanced_ac220916.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "var(--an-gold, #c9a84c)" }}>
            35+ Years of Community & Faith
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            style={{ color: "#fff", fontFamily: "Georgia, serif" }}
          >
            Our Gallery
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
            Moments of worship, ministry, community, and the love of God in action at All Nations LDCC.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-0 z-30 shadow-lg" style={{ background: "#0d1e3a", borderBottom: "2px solid var(--an-gold, #c9a84c)" }}>
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto">
          <div className="flex gap-1 py-1 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap"
                style={{
                  color: activeTab === tab.id ? "#0a1628" : "rgba(255,255,255,0.7)",
                  background: activeTab === tab.id ? "var(--an-gold, #c9a84c)" : "transparent",
                  borderRadius: "4px",
                  letterSpacing: "0.05em",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTab.photos.map((photo, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer overflow-hidden"
              style={{ borderRadius: "8px", aspectRatio: "4/3" }}
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, transparent 60%)",
                }}
              >
                <p className="text-white text-sm font-medium px-4 pb-4 leading-snug">
                  {photo.caption}
                </p>
              </div>
              {/* Gold corner accent */}
              <div
                className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, var(--an-gold, #c9a84c) 0%, transparent 70%)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Photo count */}
        <p className="text-center mt-8 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
          {currentTab.photos.length} photo{currentTab.photos.length !== 1 ? "s" : ""} in {currentTab.label}
        </p>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.url}
              alt={lightbox.caption}
              className="w-full rounded-lg shadow-2xl"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
            <p
              className="text-center mt-3 text-sm font-medium"
              style={{ color: "var(--an-gold, #c9a84c)" }}
            >
              {lightbox.caption}
            </p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
              style={{ background: "var(--an-gold, #c9a84c)", color: "#0a1628" }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="py-16 px-4 text-center" style={{ background: "#060f1e" }}>
        <p className="text-sm tracking-widest uppercase mb-3" style={{ color: "var(--an-gold, #c9a84c)" }}>
          Come Experience It In Person
        </p>
        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>
          You Belong Here
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Every photo tells a story of lives transformed. Join us Sunday at 10:00 AM and become part of the story.
        </p>
        <a
          href="/connect"
          className="inline-block px-8 py-3 font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
          style={{
            background: "var(--an-gold, #c9a84c)",
            color: "#0a1628",
            borderRadius: "4px",
            letterSpacing: "0.05em",
          }}
        >
          Plan Your Visit
        </a>
      </section>
    </div>
  );
}
