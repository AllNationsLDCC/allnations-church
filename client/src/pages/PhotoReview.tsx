// Photo Review Page — Drag & Drop version
// Pastor Shelia drags photos from the left panel into the correct tab column on the right
// Large photos, large labels, fully visual

import { useState, useRef } from "react";

const BASE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/";

const TABS = ["Unassigned", "Leadership", "Praise & Worship", "Worship", "Praise Team", "Ministry", "Community", "Prayer", "Remove"];

const TAB_COLORS: Record<string, string> = {
  "Unassigned": "#555",
  "Leadership": "#1f2f5c",
  "Praise & Worship": "#c9a84c",
  "Worship": "#2a7a6f",
  "Praise Team": "#c0392b",
  "Ministry": "#2980b9",
  "Community": "#8e44ad",
  "Prayer": "#27ae60",
  "Remove": "#888",
};

const allPhotos = [
  { id: "p01", file: "Pastorial Team _b2dbbe76.jpg", label: "Pastoral Team — Full Group" },
  { id: "p02", file: "Pastorial team _93b59188.jpg", label: "Pastoral Team — Group 2" },
  { id: "p03", file: "Womens Ministry Leaders_de618dc2.jpg", label: "Women's Ministry Leaders" },
  { id: "p04", file: "Next Gen leaders_ed1b5978.jpg", label: "Next Gen Leaders" },
  { id: "p05", file: "Pastor shelia Blake _419f6d67.jpg", label: "Pastor Shelia Blake" },
  { id: "p06", file: "Pastor shelia and Amaya_bea9dd99.jpg", label: "Pastor Shelia & Amaya" },
  { id: "p07", file: "Tresha Shawn Pastor she _fac2a9d1.jpg", label: "Tresha, Shawn & Pastor Shelia" },
  { id: "p08", file: "4168_23faa605.jpg", label: "Photo 4168" },
  { id: "p09", file: "4172_a59ccf24.jpg", label: "Photo 4172" },
  { id: "p10", file: "4163_f594beac.jpg", label: "Photo 4163" },
  { id: "p11", file: "4159_13d545e8.jpg", label: "Photo 4159" },
  { id: "p12", file: "4151_9b7a7482.jpg", label: "Photo 4151" },
  { id: "p13", file: "4141_6afc62d0.jpg", label: "Photo 4141" },
  { id: "p14", file: "3780_a270029f.jpg", label: "Photo 3780" },
  { id: "p15", file: "3727_bd922886.jpg", label: "Photo 3727" },
  { id: "p16", file: "3726_4d1a95af.jpg", label: "Photo 3726" },
  { id: "p17", file: "3866_e30eba93.jpg", label: "Photo 3866" },
  { id: "p18", file: "3863_928c0a44.jpg", label: "Photo 3863" },
  { id: "p19", file: "3728_bc93ccd4.jpg", label: "Photo 3728" },
  { id: "p20", file: "3760_7d773eb8.jpg", label: "Photo 3760" },
  { id: "p21", file: "3797_2e212304.jpg", label: "Photo 3797" },
  { id: "p22", file: "3861_5ef8ec8a.jpg", label: "Photo 3861" },
  { id: "p23", file: "3860_e0df710f.jpg", label: "Photo 3860" },
  { id: "p24", file: "3811_9ca58624.jpg", label: "Photo 3811" },
  { id: "p25", file: "3801_26ea0142.jpg", label: "Photo 3801" },
  { id: "p26", file: "3798_e11f26d5.jpg", label: "Photo 3798" },
  { id: "p27", file: "3799_5a74adb1.jpg", label: "Photo 3799" },
  { id: "p28", file: "3997_24862919.jpg", label: "Photo 3997" },
  { id: "p29", file: "4026_8d062c08.jpg", label: "Photo 4026" },
  { id: "p30", file: "3688_7448b06e.jpg", label: "Photo 3688" },
  { id: "p31", file: "3687_c9d19417.jpg", label: "Photo 3687" },
  { id: "p32", file: "3686_f3180222.jpg", label: "Photo 3686" },
  { id: "p33", file: "3684_b4552dd1.jpg", label: "Photo 3684" },
  { id: "p34", file: "3682_14d319ac.jpg", label: "Photo 3682" },
  { id: "p35", file: "3939_5ae934b5.jpg", label: "Photo 3939" },
  { id: "p36", file: "3937_f2d9f10f.jpg", label: "Photo 3937" },
];

export default function PhotoReview() {
  const [assignments, setAssignments] = useState<Record<string, string>>(
    Object.fromEntries(allPhotos.map((p) => [p.id, "Unassigned"]))
  );
  const [lightbox, setLightbox] = useState<{ file: string; label: string } | null>(null);
  const [dragOver, setDragOver] = useState<string | null>(null);
  const draggingId = useRef<string | null>(null);

  const handleDragStart = (id: string) => {
    draggingId.current = id;
  };

  const handleDrop = (tab: string) => {
    if (draggingId.current) {
      setAssignments((prev) => ({ ...prev, [draggingId.current!]: tab }));
      draggingId.current = null;
    }
    setDragOver(null);
  };

  const counts = TABS.reduce((acc, t) => {
    acc[t] = allPhotos.filter((p) => assignments[p.id] === t).length;
    return acc;
  }, {} as Record<string, number>);

  const unassigned = allPhotos.filter((p) => assignments[p.id] === "Unassigned");
  const assigned = TABS.filter((t) => t !== "Unassigned");

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0a1628", color: "#fff", fontFamily: "Georgia, serif" }}>

      {/* ── Header ── */}
      <div className="sticky top-0 z-50 px-6 py-4 flex items-center gap-4 flex-wrap"
        style={{ background: "#060f1e", borderBottom: "2px solid #c9a84c" }}>
        <div>
          <h1 className="text-xl font-bold" style={{ color: "#c9a84c" }}>Photo Review — All Nations Gallery</h1>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Drag photos from the top into the correct tab below · Click any photo to enlarge
          </p>
        </div>
        <div className="ml-auto flex flex-wrap gap-2 text-sm">
          {assigned.map((t) => (
            <span key={t} className="px-3 py-1 rounded-full font-semibold"
              style={{ background: `${TAB_COLORS[t]}30`, border: `1px solid ${TAB_COLORS[t]}60`, color: TAB_COLORS[t] }}>
              {t}: {counts[t]}
            </span>
          ))}
        </div>
      </div>

      {/* ── Unassigned Photos (large grid at top) ── */}
      <div className="p-6">
        <h2 className="text-base font-bold mb-4 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
          {unassigned.length > 0 ? `${unassigned.length} Photos — Drag each one into the correct tab below` : "✓ All photos assigned!"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {allPhotos.map((photo) => {
            const tab = assignments[photo.id];
            const color = TAB_COLORS[tab] || "#555";
            return (
              <div
                key={photo.id}
                draggable
                onDragStart={() => handleDragStart(photo.id)}
                className="rounded-xl overflow-hidden cursor-grab active:cursor-grabbing transition-transform hover:scale-105"
                style={{
                  border: `3px solid ${color}`,
                  background: "#0d1e3a",
                  opacity: tab === "Remove" ? 0.35 : 1,
                  boxShadow: tab !== "Unassigned" ? `0 0 12px ${color}60` : "none",
                }}
              >
                {/* Photo — large */}
                <div
                  className="relative"
                  style={{ aspectRatio: "3/4" }}
                  onClick={() => setLightbox({ file: photo.file, label: photo.label })}
                >
                  <img
                    src={BASE + photo.file}
                    alt={photo.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {/* Tab badge */}
                  <div className="absolute top-2 left-2 px-2 py-1 rounded-lg text-xs font-bold"
                    style={{ background: color, color: "#fff", fontSize: "11px" }}>
                    {tab}
                  </div>
                  {/* Enlarge hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                    style={{ background: "rgba(0,0,0,0.5)" }}>
                    <span className="text-white text-3xl">🔍</span>
                  </div>
                </div>
                {/* Label — large and readable */}
                <div className="px-2 py-2">
                  <p className="font-bold text-sm leading-tight" style={{ color: "#fff" }}>{photo.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Drop Zones ── */}
      <div className="px-6 pb-10">
        <h2 className="text-base font-bold mb-4 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>
          Drop Zones — Drag photos here
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {assigned.map((tab) => {
            const color = TAB_COLORS[tab];
            const photos = allPhotos.filter((p) => assignments[p.id] === tab);
            const isOver = dragOver === tab;
            return (
              <div
                key={tab}
                onDragOver={(e) => { e.preventDefault(); setDragOver(tab); }}
                onDragLeave={() => setDragOver(null)}
                onDrop={() => handleDrop(tab)}
                className="rounded-xl p-3 min-h-[160px] transition-all"
                style={{
                  border: `2px dashed ${isOver ? color : `${color}50`}`,
                  background: isOver ? `${color}20` : `${color}08`,
                  transform: isOver ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Tab header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                  <span className="font-bold text-base" style={{ color }}>{tab}</span>
                  <span className="ml-auto text-sm font-bold" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {photos.length}
                  </span>
                </div>

                {/* Drop hint */}
                {photos.length === 0 && (
                  <div className="flex items-center justify-center h-20 rounded-lg"
                    style={{ border: `1px dashed ${color}40`, color: `${color}60` }}>
                    <p className="text-sm text-center">Drop photos here</p>
                  </div>
                )}

                {/* Assigned photo thumbnails */}
                <div className="grid grid-cols-3 gap-1 mt-1">
                  {photos.map((photo) => (
                    <div key={photo.id}
                      draggable
                      onDragStart={() => handleDragStart(photo.id)}
                      className="relative rounded overflow-hidden cursor-grab"
                      style={{ aspectRatio: "1" }}
                      onClick={() => setLightbox({ file: photo.file, label: photo.label })}
                    >
                      <img src={BASE + photo.file} alt={photo.label}
                        className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.96)" }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={BASE + lightbox.file}
            alt={lightbox.label}
            className="rounded-xl shadow-2xl"
            style={{ maxHeight: "80vh", maxWidth: "90vw", objectFit: "contain" }}
          />
          <p className="mt-4 text-lg font-bold" style={{ color: "#c9a84c" }}>{lightbox.label}</p>
          <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Click anywhere to close</p>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl"
            style={{ background: "#c9a84c", color: "#0a1628" }}
          >✕</button>
        </div>
      )}

      {/* ── CSS ── */}
      <style>{`
        [draggable] { user-select: none; }
      `}</style>
    </div>
  );
}
