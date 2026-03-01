import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/allnations-community-colorful-LSc7sQDzvXgdnxS4cpfaBX.webp";

const beliefs = [
  { title: "The Bible", desc: "We believe the Bible is the inspired, infallible, and authoritative Word of God — the ultimate standard for faith, life, and practice.", color: "var(--an-gold)" },
  { title: "The Trinity", desc: "We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit — co-equal, co-eternal, and co-existent.", color: "var(--an-blue)" },
  { title: "Salvation", desc: "We believe salvation is by grace through faith in Jesus Christ alone — His death, burial, and resurrection provide the only means of redemption.", color: "var(--an-red)" },
  { title: "The Holy Spirit", desc: "We believe in the present-day ministry of the Holy Spirit — who empowers believers for life, worship, and service through spiritual gifts.", color: "var(--an-teal)" },
  { title: "The Church", desc: "We believe the local church is God's primary vehicle for advancing His Kingdom — a community of believers committed to worship, discipleship, and mission.", color: "var(--an-green)" },
  { title: "The Great Commission", desc: "We believe every follower of Christ is called to make disciples of all nations — sharing the Gospel through word, deed, and transformed lives.", color: "var(--an-orange)" },
  { title: "Prayer", desc: "We believe prayer is the foundation of everything we do — communicating with God, seeking His will, and releasing His power in every situation.", color: "var(--an-navy)" },
  { title: "Eternal Life", desc: "We believe in the bodily resurrection of the dead, the return of Jesus Christ, and the eternal life of all who believe in Him.", color: "#D63384" },
];

const communityInvolvement = [
  { title: "Youth Development Programs", desc: "Investing in the next generation through after-school programs, summer camps, mentorship, and leadership development.", color: "var(--an-orange)" },
  { title: "Community Outreach", desc: "Serving Port St. Lucie through food drives, resource distributions, and partnerships with local organizations.", color: "var(--an-green)" },
  { title: "Mad Hatters — Pink Basket", desc: "Providing care packages and compassionate support to women in our community facing hardship.", color: "#D63384" },
  { title: "Counseling Services", desc: "Offering professional Christian, marriage, family, and ministry leader counseling through licensed counselors.", color: "var(--an-teal)" },
  { title: "Discipleship & Education", desc: "Equipping believers through structured discipleship courses (201, 301, 401) and ministry training classes.", color: "var(--an-blue)" },
  { title: "Grant-Funded Initiatives", desc: "Actively pursuing grant funding to expand youth programs, summer initiatives, and community development projects.", color: "var(--an-gold)" },
];

export default function WhatWeBelieve() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>Our Foundation</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">What We Believe</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            Rooted in the Word. Grounded in faith. Growing in love.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Our Story</span>
              <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "var(--an-navy)" }}>
                25+ Years Serving<br />
                <span style={{ color: "var(--an-gold)" }}>Port St. Lucie</span>
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                All Nations Life Development Christian Center was founded in Port St. Lucie, Florida with a simple but powerful mission: <em style={{ color: "var(--an-navy)", fontFamily: "'Playfair Display', serif" }}>Love the Word. Learn the Word. Live by the Word.</em>
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                Under the visionary leadership of Bishop Cornelius Blake and Executive Pastor Shelia Blake, All Nations has grown from a small gathering of faith-filled believers into a thriving, multicultural ministry that impacts thousands of lives across the Treasure Coast and beyond.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                For over 25 years, we have been a place of healing, transformation, and empowerment — where every person who walks through our doors is welcomed, valued, and equipped to fulfill their God-given purpose.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "#555" }}>
                Our tagline says it all: <strong style={{ color: "var(--an-navy)" }}>"Building People is Our Business."</strong> Everything we do — from Sunday worship to discipleship classes, from counseling services to community outreach — is designed to build people up and send them out transformed.
              </p>
              <div className="space-y-3 p-6 rounded-xl" style={{ background: "var(--an-bg)", border: "1px solid rgba(31,47,92,0.10)" }}>
                <div className="flex items-start gap-3">
                  <MapPin size={16} style={{ color: "var(--an-gold)", flexShrink: 0, marginTop: 2 }} />
                  <span className="font-body text-sm" style={{ color: "#555" }}>862 SW Glenview Ct, Port St. Lucie, FL 34953</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} style={{ color: "var(--an-gold)", flexShrink: 0 }} />
                  <a href="tel:7723437021" className="font-body text-sm hover:text-[#C59D2F] transition-colors" style={{ color: "#555" }}>772-343-7021</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} style={{ color: "var(--an-gold)", flexShrink: 0 }} />
                  <a href="mailto:info@allnationsldcc.org" className="font-body text-sm hover:text-[#C59D2F] transition-colors" style={{ color: "#555" }}>allnationsldcc.org</a>
                </div>
                <div className="font-body text-sm" style={{ color: "#888" }}>
                  <strong style={{ color: "var(--an-navy)" }}>Office Hours:</strong> By appointment — please call to schedule.
                </div>
              </div>
            </div>
            <div>
              <img src={COMMUNITY_IMG} alt="All Nations Community" className="w-full rounded-2xl shadow-2xl object-cover" style={{ height: "500px" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Statement of Faith</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              What We <span style={{ color: "var(--an-gold)" }}>Believe</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {beliefs.map(b => (
              <div key={b.title} className="bg-white rounded-xl p-6 shadow-sm ministry-card border-t-4" style={{ borderTopColor: b.color }}>
                <h3 className="font-display font-bold text-base mb-3" style={{ color: "var(--an-navy)" }}>{b.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Making a Difference</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Community <span style={{ color: "var(--an-gold)" }}>Involvement</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "#666" }}>
              Faith without works is dead. At All Nations, we put our faith into action through tangible, life-changing community investment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityInvolvement.map(c => (
              <div key={c.title} className="ministry-card bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="w-1.5 absolute top-0 left-0 bottom-0" style={{ background: c.color }} />
                <div className="pl-4">
                  <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{c.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--an-navy)" }}>
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Come Be Part of the Family</h2>
          <p className="font-body text-base mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            We would love to meet you. Join us this Sunday at 8:30 AM or 11:00 AM at 862 SW Glenview Ct, Port St. Lucie, FL.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/connect" className="btn-gold flex items-center gap-2">Plan Your Visit <ArrowRight size={14} /></Link>
            <Link href="/meet-the-pastors" className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>Meet Our Pastors</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
