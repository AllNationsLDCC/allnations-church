// Legacy of Love — All Nations LDCC
// Celebrating the couples, families, and elders who carry the legacy of faith at All Nations

import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ArrowRight, X } from "lucide-react";

const galleryPhotos = [
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/XTmMVyyHkYLFHOKB.jpg", caption: "Lady Carol & Minister Mike Byrd", sub: "Pillars of Faith & Family" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/HCIJXpNVUdOjliMw.jpg", caption: "Lady Carol & Minister Mike Byrd", sub: "A Legacy of Love" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ZJgwXJAXDxKgSFsm.jpg", caption: "Khalil & Alish Virgo", sub: "Love That Grows in Faith" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/nnwQAnjlyvKkUXQS.jpg", caption: "Isacc & Constance", sub: "Together in Purpose" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/wOGyQVKEhWjuLygw.jpg", caption: "The Byrds & The Blakes", sub: "Family, Faith & Fellowship" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ElobqGlQcWEnMPMz.jpg", caption: "The Ladies of All Nations", sub: "Strength, Grace & Sisterhood" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/YDhSfviQNOZPbxjl.jpg", caption: "Minister Jimmie & Sister Sandy Dixon", sub: "Faithful Servants of the Lord" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/scumGTafBtXjMTos.jpg", caption: "Ministers Ann Marie & Desmond Bryan", sub: "United in Ministry & Marriage" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/CqpMocmSrDGrNGGj.jpg", caption: "Ministers Debbie & Michael Wright", sub: "Walking Together in the Word" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/hzGEvnloyrNwctPH.jpg", caption: "Pastor R.B. Thomas & Sister Mary Thomas", sub: "A Lifetime of Kingdom Service" },
  { url: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/pKNWqoHLSkVBRKJY.jpg", caption: "Visiting Couple", sub: "Welcome to the All Nations Family" },
];

export default function LegacyOfLove() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + galleryPhotos.length) % galleryPhotos.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % galleryPhotos.length : null));

  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero" style={{ background: "linear-gradient(135deg, #0a1628 0%, #1a2a4a 60%, #2d1a3e 100%)" }}>
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>All Nations LDCC</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">Legacy of Love</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            Celebrating the couples, families, and elders whose faith, love, and faithfulness have shaped the heart of All Nations. Their legacy is our foundation.
          </p>
        </div>
      </div>

      {/* Scripture Banner */}
      <section className="py-10 px-4" style={{ background: "var(--an-gold)" }}>
        <div className="container text-center">
          <p className="font-display text-xl font-semibold" style={{ color: "#0a1628" }}>
            "A good person leaves an inheritance for their children's children."
          </p>
          <p className="font-body text-sm mt-1" style={{ color: "rgba(10,22,40,0.75)" }}>Proverbs 13:22</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4" style={{ background: "#fff" }}>
        <div className="container max-w-3xl text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>Our Heritage</span>
          <h2 className="font-display text-3xl font-bold mt-2 mb-6" style={{ color: "var(--an-navy)" }}>
            Love That Outlasts a Lifetime
          </h2>
          <p className="font-body text-base leading-relaxed" style={{ color: "var(--an-text-muted)" }}>
            The Legacy of Love ministry honors the wisdom, experience, and enduring faith of the couples and families who have walked faithfully with God and with this church. These are the men and women whose prayers, sacrifices, and steadfast love have built something that will outlast them — a community rooted in Christ, growing in purpose, and reaching toward eternity.
          </p>
          <p className="font-body text-base leading-relaxed mt-4" style={{ color: "var(--an-text-muted)" }}>
            We celebrate them not just for what they have done, but for who they are — living testimonies of God's faithfulness across generations.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "var(--an-gold)" }}>Photo Gallery</span>
            <h2 className="font-display text-3xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              Faces of Our Legacy
            </h2>
            <p className="font-body text-base mt-3 max-w-xl mx-auto" style={{ color: "var(--an-text-muted)" }}>
              Click any photo to view it full size.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden cursor-pointer group"
                style={{ boxShadow: "0 4px 24px rgba(10,22,40,0.12)", border: "1px solid rgba(201,168,76,0.15)" }}
                onClick={() => openLightbox(i)}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    style={{ background: "linear-gradient(to top, rgba(10,22,40,0.85) 0%, transparent 60%)" }}>
                    <div className="p-4">
                      <p className="font-display text-sm font-bold text-white">{photo.caption}</p>
                      <p className="font-body text-xs mt-0.5" style={{ color: "var(--an-gold)" }}>{photo.sub}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4" style={{ background: "#fff" }}>
                  <p className="font-display text-sm font-semibold" style={{ color: "var(--an-navy)" }}>{photo.caption}</p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "var(--an-gold)" }}>{photo.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 text-white hover:text-yellow-400 text-4xl font-bold transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            ‹
          </button>
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryPhotos[lightbox].url}
              alt={galleryPhotos[lightbox].caption}
              className="w-full rounded-xl object-contain"
              style={{ maxHeight: "75vh" }}
            />
            <div className="text-center mt-4">
              <p className="font-display text-lg font-bold text-white">{galleryPhotos[lightbox].caption}</p>
              <p className="font-body text-sm mt-1" style={{ color: "var(--an-gold)" }}>{galleryPhotos[lightbox].sub}</p>
              <p className="font-body text-xs mt-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                {lightbox + 1} of {galleryPhotos.length}
              </p>
            </div>
          </div>
          <button
            className="absolute right-4 text-white hover:text-yellow-400 text-4xl font-bold transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            ›
          </button>
        </div>
      )}

      {/* Programs Section */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "var(--an-gold)" }}>What We Offer</span>
            <h2 className="font-display text-3xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              Ministry Programs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Senior Fellowship", desc: "Regular gatherings where our elders share wisdom, build friendships, and are celebrated for their contributions to the body of Christ." },
              { title: "Visitation Ministry", desc: "Bringing the love of the church to those who cannot attend — through home visits, hospital care, and personal encouragement." },
              { title: "Legacy Events", desc: "Special celebrations honoring milestones — anniversaries, birthdays, and years of faithful service — because every year of faithfulness matters." },
              { title: "Intergenerational Programs", desc: "Connecting the wisdom of our elders with the energy of our youth, creating mentorship bonds that carry the legacy forward." },
            ].map((p, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "var(--an-bg)", border: "1px solid rgba(201,168,76,0.2)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Heart size={20} style={{ color: "var(--an-gold)" }} />
                  <h3 className="font-display text-base font-bold" style={{ color: "var(--an-navy)" }}>{p.title}</h3>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--an-text-muted)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: "var(--an-navy)" }}>
        <div className="container max-w-2xl text-center">
          <Heart size={40} className="mx-auto mb-4" style={{ color: "var(--an-gold)" }} />
          <h2 className="font-display text-3xl font-bold text-white mb-4">Be Part of the Legacy</h2>
          <p className="font-body text-base mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            Whether you are honoring a loved one, seeking community, or wanting to invest in the next generation — there is a place for you in Legacy of Love.
          </p>
          <Link href="/connect">
            <button
              className="inline-flex items-center gap-2 px-8 py-3 font-display font-semibold text-sm transition-all hover:opacity-90"
              style={{ background: "var(--an-gold)", color: "#0a1628", borderRadius: "4px" }}
            >
              Connect With Us <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
