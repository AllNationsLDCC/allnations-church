import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const COMMUNITY_IMG = "/manus-storage/pasted_file_W8MUxb_image_1ef86355.jpg";

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
              <span className="section-label">OUR STORY</span>
              <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "var(--an-navy)" }}>
                35+ Years Serving<br />
                <span style={{ color: "var(--an-gold)" }}>Port St. Lucie</span>
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                In 1991, a vision was planted in the heart of Port St. Lucie. With no connections, no guarantee, and no familiar faces — only a word from God and an unshakeable faith — the doors of All Nations Life Development Christian Center opened for the very first time on May 5th of that year.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                What began as a small gathering of Spirit-filled believers quickly grew into something far greater than any one person could have planned. God honored the sacrifice. He honored the faith. And He began building something that would touch thousands of lives across the Treasure Coast and beyond.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                Over 35 years later, All Nations LDCC is a thriving, multicultural community of faith — a place where the Word is preached with power, people are developed with purpose, and no one is turned away. Our campus serves the community every day of the week through worship services, discipleship classes, counseling, outreach, and more.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                Our mission has never changed: <em style={{ color: "var(--an-navy)", fontFamily: "'Playfair Display', serif" }}>Love the Word. Learn the Word. Live by the Word.</em>
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
                Under the visionary leadership of Senior Bishop Cornelius Blake and Executive Pastor Shelia Blake, All Nations has grown from a faithful few into a ministry that heals, restores, equips, and sends. We believe the local church is God's greatest plan for humanity — and we take that responsibility seriously.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "#555", fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
                This is not just a church. This is a family. And there is a place here for you.
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
                  <a href="mailto:AllNationsldcc@gmail.com" className="font-body text-sm hover:text-[#C59D2F] transition-colors" style={{ color: "#555" }}>AllNationsldcc@gmail.com</a>
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

      {/* Leadership Section */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">OUR LEADERSHIP</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Shepherds Who <span style={{ color: "var(--an-gold)" }}>Serve</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-xl mx-auto" style={{ color: "#666" }}>
              Led by the Word. Committed to the people.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bishop Cornelius Blake */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden ministry-card">
              <div className="p-8">
                <div className="w-36 h-36 rounded-full mx-auto mb-5 overflow-hidden border-4" style={{ borderColor: "var(--an-gold)" }}>
                  <img src="/manus-storage/bishop_blake_headshot_62c97627.jpg" alt="Bishop Cornelius Blake" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-display font-bold text-xl text-center mb-1" style={{ color: "var(--an-navy)" }}>Bishop Cornelius Blake</h3>
                <p className="font-body text-sm text-center font-semibold mb-4" style={{ color: "var(--an-gold)" }}>Senior Bishop</p>
                <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#555" }}>
                  Bishop Cornelius Blake is a man of uncompromising faith, prophetic vision, and deep love for God's people. For over 35 years, he has faithfully served as the Senior Bishop of All Nations Life Development Christian Center — shepherding a community that has grown from a handful of believers into a thriving, multicultural ministry impacting the Treasure Coast of Florida.
                </p>
                <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#555" }}>
                  A gifted teacher and preacher, Bishop Blake is known for his ability to unpack the truth of Scripture in a way that is both profound and practical — meeting people exactly where they are and pointing them toward who God has called them to be. His passion is not just to build a church, but to build people — raising up disciples, leaders, and world-changers who carry the Kingdom beyond these walls.
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#555" }}>
                  Bishop Blake's leadership reflects the heart of a true shepherd: one who serves under the Chief Shepherd, Jesus Christ, with humility, integrity, and an unrelenting commitment to excellence.
                </p>
              </div>
            </div>
            {/* Pastor Shelia Blake */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden ministry-card">
              <div className="p-8">
                <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden border-4" style={{ borderColor: "var(--an-gold)" }}>
                  <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/cAqckupGBEISTBCB.jpg" alt="Executive Pastor Shelia Blake" className="w-full h-full object-cover object-top" />
                </div>
                <h3 className="font-display font-bold text-xl text-center mb-1" style={{ color: "var(--an-navy)" }}>Pastor Shelia Blake</h3>
                <p className="font-body text-sm text-center font-semibold mb-4" style={{ color: "var(--an-gold)" }}>Executive Pastor</p>
                <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#555" }}>
                  Pastor Shelia Blake is a dynamic leader, gifted teacher, and passionate developer of people. As Executive Pastor of All Nations Life Development Christian Center, she serves alongside Senior Bishop Cornelius Blake to oversee the vision, administration, and ministry operations of the church — ensuring that every department, every program, and every person is aligned with the mission God has entrusted to this house.
                </p>
                <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#555" }}>
                  With a heart for women, families, and emerging leaders, Pastor Shelia is known for her warmth, her wisdom, and her ability to make people feel seen, valued, and equipped. She is a gifted communicator whose teaching brings the Word to life in practical, transformational ways.
                </p>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#555", fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
                  At the core of everything Pastor Shelia does is one driving conviction: developing people is her business — and God's business is always good.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-8">
            <span className="section-label">Statement of Faith</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              What We <span style={{ color: "var(--an-gold)" }}>Believe</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "#666" }}>
              Rooted in the Word. Grounded in faith. Growing in love.
            </p>
          </div>
          <p className="font-body text-base leading-relaxed max-w-3xl mx-auto text-center mb-12" style={{ color: "#555" }}>
            At All Nations, we don't just talk about what we believe — we live it. Our beliefs are not a checklist. They are the foundation everything else is built on. From how we worship to how we serve our community, every ministry, every message, and every moment in this house flows from these core convictions.
          </p>
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
