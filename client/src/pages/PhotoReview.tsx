// Photo Review Page — Internal tool for Pastor Shelia to select gallery photos
// Shows all uploaded photos with current tab assignment, click to reassign

import { useState } from "react";

const BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/";

const TABS = ["Leadership", "Praise & Worship", "Worship", "Praise Team", "Ministry", "Community", "Prayer", "Remove"];

const TAB_COLORS: Record<string, string> = {
  "Leadership": "#1f2f5c",
  "Praise & Worship": "#c9a84c",
  "Worship": "#2a7a6f",
  "Praise Team": "#c0392b",
  "Ministry": "#2980b9",
  "Community": "#8e44ad",
  "Prayer": "#27ae60",
  "Remove": "#888",
  "Unassigned": "#444",
};

const allPhotos: { file: string; label: string; suggested: string }[] = [
  // Named / Special
  { file: "Pastorial Team _b2dbbe76.jpg", label: "Pastoral Team (Full)", suggested: "Leadership" },
  { file: "Pastorial team _93b59188.jpg", label: "Pastoral Team (2)", suggested: "Leadership" },
  { file: "Womens Ministry Leaders_de618dc2.jpg", label: "Women's Ministry Leaders", suggested: "Leadership" },
  { file: "Next Gen leaders_ed1b5978.jpg", label: "Next Gen Leaders", suggested: "Leadership" },
  { file: "Pastor shelia Blake _419f6d67.jpg", label: "Pastor Shelia Blake", suggested: "Leadership" },
  { file: "Pastor shelia and Amaya_bea9dd99.jpg", label: "Pastor Shelia & Amaya", suggested: "Leadership" },
  { file: "Tresha Shawn Pastor she _fac2a9d1.jpg", label: "Tresha, Shawn & Pastor Shelia", suggested: "Leadership" },
  // Leadership numbered
  { file: "4168_23faa605.jpg", label: "4168 — Pastoral Team (Logo Backdrop)", suggested: "Leadership" },
  { file: "4172_a59ccf24.jpg", label: "4172 — Women's Pastoral Team (Logo Backdrop)", suggested: "Leadership" },
  { file: "4163_f594beac.jpg", label: "4163 — Leadership", suggested: "Leadership" },
  { file: "4159_13d545e8.jpg", label: "4159 — Leadership", suggested: "Leadership" },
  { file: "4151_9b7a7482.jpg", label: "4151 — Leadership", suggested: "Leadership" },
  { file: "4141_6afc62d0.jpg", label: "4141 — Leadership", suggested: "Leadership" },
  { file: "3780_a270029f.jpg", label: "3780 — Bishop & Pastor Shelia", suggested: "Leadership" },
  { file: "3727_bd922886.jpg", label: "3727 — Pastoral Team", suggested: "Leadership" },
  { file: "3726_4d1a95af.jpg", label: "3726 — Pastoral Team", suggested: "Leadership" },
  { file: "3866_e30eba93.jpg", label: "3866 — Pastor Joyce Hamilton", suggested: "Leadership" },
  { file: "3863_928c0a44.jpg", label: "3863 — Leadership Moment", suggested: "Leadership" },
  // Praise Team / Worship
  { file: "3728_bc93ccd4.jpg", label: "3728 — All Nations Praise Team", suggested: "Praise Team" },
  { file: "3760_7d773eb8.jpg", label: "3760 — Praise Team", suggested: "Praise Team" },
  { file: "3797_2e212304.jpg", label: "3797 — Tehila Praise Team", suggested: "Praise Team" },
  { file: "3861_5ef8ec8a.jpg", label: "3861 — Praise Team & Media Appreciation", suggested: "Praise Team" },
  { file: "3860_e0df710f.jpg", label: "3860 — Praise Team", suggested: "Praise Team" },
  { file: "3811_9ca58624.jpg", label: "3811 — Worship/Praise", suggested: "Praise Team" },
  { file: "3801_26ea0142.jpg", label: "3801 — Worship Moment", suggested: "Worship" },
  // Ministry / Preaching
  { file: "3798_e11f26d5.jpg", label: "3798 — Ministry in Action", suggested: "Ministry" },
  { file: "3799_5a74adb1.jpg", label: "3799 — Ministry Moment", suggested: "Ministry" },
  { file: "3997_24862919.jpg", label: "3997 — Ministry", suggested: "Ministry" },
  { file: "4026_8d062c08.jpg", label: "4026 — Ministry", suggested: "Ministry" },
  // Community / Congregation
  { file: "3688_7448b06e.jpg", label: "3688 — Congregation", suggested: "Community" },
  { file: "3687_c9d19417.jpg", label: "3687 — Congregation", suggested: "Community" },
  { file: "3686_f3180222.jpg", label: "3686 — Community Moment", suggested: "Community" },
  { file: "3684_b4552dd1.jpg", label: "3684 — Community", suggested: "Community" },
  { file: "3682_14d319ac.jpg", label: "3682 — Community", suggested: "Community" },
  // Prayer
  { file: "3939_5ae934b5.jpg", label: "3939 — Prayer/Altar", suggested: "Prayer" },
  { file: "3937_f2d9f10f.jpg", label: "3937 — Prayer Moment", suggested: "Prayer" },
];

export default function PhotoReview() {
  const [assignments, setAssignments] = useState<Record<string, string>>(
    Object.fromEntries(allPhotos.map((p) => [p.file, p.suggested]))
  );
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [filterTab, setFilterTab] = useState<string>("All");

  const assign = (file: string, tab: string) => {
    setAssignments((prev) => ({ ...prev, [file]: tab }));
  };

  const filtered = filterTab === "All" ? allPhotos : allPhotos.filter((p) => assignments[p.file] === filterTab);

  const counts = TABS.reduce((acc, t) => {
    acc[t] = allPhotos.filter((p) => assignments[p.file] === t).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen" style={{ background: "#0a1628", color: "#fff" }}>
      {/* Header */}
      <div className="sticky top-0 z-40 shadow-xl" style={{ background: "#060f1e", borderBottom: "2px solid #c9a84c" }}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
          <div>
            <h1 className="text-lg font-bold" style={{ color: "#c9a84c", fontFamily: "Georgia, serif" }}>
              Photo Review — All Nations Gallery
            </h1>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Click a photo to enlarge · Use buttons below each photo to assign to a tab
            </p>
          </div>
          <div className="ml-auto flex flex-wrap gap-2">
            {["All", ...TABS.slice(0, -1)].map((t) => (
              <button
                key={t}
                onClick={() => setFilterTab(t)}
                className="px-3 py-1 text-xs font-semibold rounded transition-all"
                style={{
                  background: filterTab === t ? "#c9a84c" : "rgba(255,255,255,0.08)",
                  color: filterTab === t ? "#0a1628" : "rgba(255,255,255,0.7)",
                }}
              >
                {t} {t !== "All" && counts[t] ? `(${counts[t]})` : ""}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-3">
        {TABS.slice(0, -1).map((t) => (
          <div key={t} className="flex items-center gap-1 text-xs px-3 py-1 rounded-full"
            style={{ background: `${TAB_COLORS[t]}30`, border: `1px solid ${TAB_COLORS[t]}60`, color: TAB_COLORS[t] }}>
            <span className="font-bold">{counts[t]}</span> {t}
          </div>
        ))}
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((photo) => {
            const tab = assignments[photo.file];
            const color = TAB_COLORS[tab] || "#444";
            return (
              <div
                key={photo.file}
                className="rounded-lg overflow-hidden"
                style={{ border: `2px solid ${color}`, background: "#0d1e3a" }}
              >
                {/* Photo */}
                <div
                  className="relative cursor-pointer"
                  style={{ aspectRatio: "4/3" }}
                  onClick={() => setLightbox(BASE + photo.file)}
                >
                  <img
                    src={BASE + photo.file}
                    alt={photo.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Tab badge */}
                  <div
                    className="absolute top-2 left-2 px-2 py-0.5 text-xs font-bold rounded"
                    style={{ background: color, color: "#fff" }}
                  >
                    {tab}
                  </div>
                  {/* Zoom hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                    style={{ background: "rgba(0,0,0,0.4)" }}>
                    <span className="text-white text-2xl">🔍</span>
                  </div>
                </div>

                {/* Label */}
                <div className="px-2 py-1">
                  <p className="text-xs truncate" style={{ color: "rgba(255,255,255,0.6)" }}>{photo.label}</p>
                </div>

                {/* Tab assignment buttons */}
                <div className="px-2 pb-2 flex flex-wrap gap-1">
                  {TABS.map((t) => (
                    <button
                      key={t}
                      onClick={() => assign(photo.file, t)}
                      className="text-xs px-2 py-0.5 rounded font-semibold transition-all"
                      style={{
                        background: tab === t ? TAB_COLORS[t] : "rgba(255,255,255,0.07)",
                        color: tab === t ? "#fff" : "rgba(255,255,255,0.5)",
                        fontSize: "10px",
                      }}
                    >
                      {t === "Remove" ? "✕" : t.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Preview"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            style={{ maxHeight: "90vh", objectFit: "contain" }}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
            style={{ background: "#c9a84c", color: "#0a1628" }}
          >✕</button>
        </div>
      )}
    </div>
  );
}
