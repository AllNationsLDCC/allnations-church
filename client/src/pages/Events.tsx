import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Calendar, Clock, MapPin, Phone, ArrowRight } from "lucide-react";

const recurringEvents = [
  {
    title: "Sunday Morning Worship — 1st Service",
    day: "Every Sunday",
    time: "8:30 AM",
    location: "862 SW Glenview Ct, Port St. Lucie, FL 34953",
    details: "Main sanctuary worship service. Youth ministry and Toddler Lounge available at this service.",
    color: "var(--an-gold)",
  },
  {
    title: "Sunday Morning Worship — 2nd Service",
    day: "Every Sunday",
    time: "11:00 AM",
    location: "862 SW Glenview Ct, Port St. Lucie, FL 34953",
    details: "Main sanctuary worship service. Youth ministry and Toddler Lounge available at this service.",
    color: "var(--an-gold)",
  },
  {
    title: "Youth Ministry",
    day: "Every Sunday",
    time: "8:30 AM & 11:00 AM",
    location: "Youth Wing — All Nations LDCC",
    details: "Dynamic, age-appropriate worship and teaching for children and youth during both Sunday services.",
    color: "var(--an-orange)",
  },
  {
    title: "Toddler Lounge",
    day: "Every Sunday",
    time: "8:30 AM & 11:00 AM",
    location: "Toddler Lounge — All Nations LDCC",
    details: "A safe, nurturing environment for our youngest members (infants through pre-K) during both Sunday services.",
    color: "#D63384",
  },
  {
    title: "Wednesday Bible Study",
    day: "Every Wednesday",
    time: "7:00 PM",
    location: "862 SW Glenview Ct, Port St. Lucie, FL 34953 & Online",
    details: "In-depth study of God's Word with Bishop Cornelius Blake and the pastoral team. Available in-person and online.",
    color: "var(--an-teal)",
  },
  {
    title: "Intercessory Prayer Line",
    day: "Every Monday",
    time: "7:00 PM – 8:30 PM",
    location: "Zoom · Meeting ID: 327 436 787 · Dial-in Password: 5933324363 · Phone: +1 (234) 203-2766",
    details: "Join our corporate prayer line every Monday evening for intercession, worship, and seeking the face of God together. Connect via Zoom or dial in by phone from anywhere.",
    color: "var(--an-blue)",
  },
  {
    title: "Tuesday Bible Talk — Journey with Jesus",
    day: "Every Tuesday",
    time: "7:30 PM",
    location: "Online",
    details: "A mid-week Bible conversation for believers who want to go deeper. Join us every Tuesday at 7:30 PM for the Journey with Jesus Bible Talk series.",
    color: "var(--an-teal)",
  },
];

const completedEvents2026 = [
  {
    title: "Tabernacle 2026 — Cultural Night",
    date: "Tuesday, April 1, 2026",
    desc: "A beautiful night of worship, culture, and community united under one roof. Thank you to all who joined us!",
    color: "var(--an-teal)",
  },
  {
    title: "Tabernacle 2026 — Good Friday: Walk Through the Tabernacle",
    date: "Friday, April 3, 2026",
    desc: "A reverent, powerful walk through the Tabernacle of Moses — experiencing the story of redemption step by step.",
    color: "var(--an-red)",
  },
  {
    title: "Easter Sunday Celebration",
    date: "Sunday, April 5, 2026",
    desc: "He is Risen! A powerful Easter Sunday celebration honoring the resurrection of Jesus Christ.",
    color: "var(--an-red)",
  },
];

const upcomingEvents2026 = [
  // ── April 2026 — NEXT GEN SUNDAY ────────────────────────────────────────────────────────────────────────
  {
    title: "⭐ Next Gen Sunday — Both Services",
    date: "Sunday, April 26, 2026",
    time: "8:30 AM & 11:00 AM",
    desc: "Next Gen Sunday is here! Join us for both morning services as we celebrate and elevate the next generation of All Nations LDCC. Featuring special messages by Sister Chenille Dixon and Minister Junior Sherman. Come expecting a powerful move of God through the voices of the next generation!",
    color: "var(--an-teal)",
    speakers: "Sister Chenille Dixon & Minister Junior Sherman",
  },
  // ── May 2026 — ARISE AND TAKE FLIGHT (Women's Month) ────────────────────────────────────────────────────────────────────────
  {
    title: "✈️ Women's Service — Arise & Take Flight",
    date: "Sunday, May 3, 2026",
    time: "8:30 AM & 11:00 AM",
    desc: "Women's Month officially takes flight! Join us for both Sunday morning services as we launch our May theme: Arise & Take Flight. A powerful worship experience celebrating the women of God — mothers, daughters, sisters, and queens who carry vision, build families, and walk boldly in purpose. Come expecting a fresh word, a fresh fire, and a fresh wind! Isaiah 40:31. 🤍✨ DRESS CODE: Ladies, wear your WHITE & GOLD this Sunday as we kick off the Arise and Take Flight theme in style and unity!",
    color: "#D63384",
  },
  {
    title: "📖 Book Discussion — \"Pretty Women\"",
    date: "Wednesday, May 6, 2026",
    time: "7:00 PM",
    desc: "Join us for a special book discussion on \"Pretty Women\" — open to everyone! This is not just a women's event; all are welcome to come and be part of the conversation. Bishop Cornelius Blake will be in the discussion, sharing his thoughts, answering questions, and signing books. Can't make it in person? Watch and participate live on YouTube. Come ready for a rich, eye-opening dialogue!",
    color: "var(--an-teal)",
  },
  {
    title: "💑 Table It & Talk It Out — A Couples Connection Night",
    date: "Friday, May 22, 2026",
    time: "7:00 PM",
    desc: "Legacy of Love presents Table It & Talk It Out — A Couples Connection Night! Chips · Dip · Real Conversations. Experience Table It: Emotions Matter Live — a guided, interactive connection experience. This is a FREE event open to all couples. Come ready to reconnect, communicate, and grow together. You didn't fall out of love... you just need space to reconnect. All Nations Life Development Christian Center, 862 SW Glenview Ct., Port St. Lucie, FL.",
    color: "#C8901A",
  },
  {
    title: "🍞 Daily Word — Arise & Take Flight",
    date: "Every Day in May 2026",
    time: "12:00 AM (Midnight)",
    desc: "Miss a meal. Miss a song. But don't miss the Word! Pastor Shelia Blake is delivering a fresh Daily Word every single day in May — straight to your screen at midnight. \"Give us this day our daily bread.\" (Matthew 6:11) Make it part of your morning devotion. Visit allnationsldcc.org/daily-word to listen.",
    color: "var(--an-gold)",
  },
  {
    title: "🌹 Mother’s Day Celebration — Arise & Take Flight",
    date: "Sunday, May 10, 2026",
    time: "8:30 AM & 11:00 AM",
    desc: "A special Mother’s Day worship experience honoring the mothers, grandmothers, and mother figures of All Nations LDCC. Come celebrate the women who shape our families and our faith. Special recognitions, worship, and the Word. All are welcome!",
    color: "var(--an-red)",
  },
  {
    title: "Women’s Worship Night — Arise & Take Flight",
    date: "May 2026 — Date TBA",
    time: "7:00 PM",
    desc: "An evening of praise, testimony, and worship dedicated to the women of All Nations. Come be refreshed, encouraged, and empowered. Guest speakers and special music. Watch for the confirmed date announcement.",
    color: "#D63384",
  },
  {
    title: "Women’s Ministry Retreat — Arise & Take Flight",
    date: "May 2026 — Date TBA",
    time: "TBD",
    desc: "Annual women’s retreat for refreshing, renewal, and deeper connection. This year’s theme: Arise & Take Flight. Registration details coming soon. Contact the church office for more information.",
    color: "var(--an-navy)",
  },
  // ── Great Commission ────────────────────────────────────────────────────────────────────────
  {
    title: "🌍 Senior Wellness Afternoon — The Great Commission Team",
    date: "Wednesday, June 4, 2026",
    time: "1:00 PM – 4:00 PM",
    desc: "A free wellness afternoon for seniors and caregivers hosted by the Great Commission Team. Sessions include Mental Wellness After 50, Medicare & Medicaid, and Prescriptions — What You Don’t Know. Light refreshments provided. 862 SW Glenview Ct., Port St. Lucie, FL.",
    color: "var(--an-green)",
  },
  // ── April 2026 ────────────────────────────────────────────────────────────────────────
  {
    title: "Community Outreach Day — Q2",
    date: "April 2026 — Date TBA",
    time: "TBD",
    desc: "Serving Port St. Lucie together through food drives, resource distributions, and community love. Watch for the confirmed date announcement.",
    color: "var(--an-green)",
  },
  {
    title: "Discipleship 201 — New Cohort",
    date: "Spring 2026 — Enrollment Open",
    time: "TBD",
    desc: "New cohort beginning for Discipleship 201: Foundations of Faith. Certificate awarded upon completion. Contact us to reserve your spot.",
    color: "var(--an-blue)",
  },
  // ── Summer & Beyond ───────────────────────────────────────────────────────
  {
    title: "☀️ Vacation Bible School — Rooted in Faith",
    date: "Monday–Thursday, June 1–12, 2026",
    time: "9:00 AM – 12:30 PM",
    desc: "Children's Ministry presents VBS 2026: Rooted in Faith — Growing in God. Shining His Light. (Matthew 5:16) Ages 5–12. Activities include Arts & Crafts, Games In & Outdoors, Prizes & Surprises, Nature Walks, and Lunch is provided! Sign up at the front desk. Volunteers are welcome! Ends with the Back to School Extravaganza on June 12.",
    color: "var(--an-orange)",
  },
  {
    title: "🎒 Back to School Extravaganza",
    date: "Friday, June 12, 2026",
    time: "9:00 AM – 12:30 PM",
    desc: "VBS wraps up with a Back to School Extravaganza on 6/12! Wear your Rooted in Faith theme T-shirt with pride. A celebration of faith, fun, and friends. All Nations Children's Ministry — a summer to remember!",
    color: "var(--an-orange)",
  },
  {
    title: "Leadership Lab",
    date: "Ongoing 2026",
    time: "TBD",
    desc: "The Leadership Lab ministry class for emerging leaders. Rooted in the Nehemiah model of servant leadership. Contact us for the current schedule.",
    color: "var(--an-navy)",
  },
  {
    title: "✨ Women's Conference — Evangelist Shadae Brown Clark",
    date: "Friday, May 29, 2026",
    time: "7:30 PM",
    desc: "All Nations Women's Ministry presents a powerful Friday night service featuring Evangelist Shadae Brown Clark. Come expecting a fresh word, breakthrough, and an encounter with God. All women are welcome — bring a friend!",
    color: "var(--an-pink, #d63384)",
  },
  {
    title: "✨ Women's Conference — Prophetess Angela Brown",
    date: "Sunday, May 31, 2026",
    time: "8:30 AM",
    desc: "All Nations Women's Ministry continues with a special Sunday morning service featuring Prophetess Angela Brown. A prophetic word for the women of God — come prepared to receive, be activated, and walk boldly in your purpose.",
    color: "var(--an-pink, #d63384)",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>Stay Connected</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">Events & Calendar</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            There is always something happening at All Nations. Join us for worship, study, outreach, and community.
          </p>
        </div>
      </div>

      {/* Weekly Schedule */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Every Week</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Weekly <span style={{ color: "var(--an-gold)" }}>Schedule</span>
            </h2>
            <p className="font-body text-sm mt-2" style={{ color: "#888" }}>
              862 SW Glenview Ct, Port St. Lucie, FL 34953 &nbsp;|&nbsp; 772-343-7021
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recurringEvents.map(ev => (
              <div key={ev.title} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden ministry-card flex">
                <div className="w-2 flex-shrink-0" style={{ background: ev.color }} />
                <div className="p-6 flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-display font-bold text-base" style={{ color: "var(--an-navy)" }}>{ev.title}</h3>
                    <span className="font-body font-bold text-xs px-2 py-1 rounded-full flex-shrink-0" style={{ background: `${ev.color}18`, color: ev.color }}>
                      {ev.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={13} style={{ color: ev.color }} />
                    <span className="font-body text-sm font-bold" style={{ color: ev.color }}>{ev.day}</span>
                  </div>
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin size={13} style={{ color: "#aaa", flexShrink: 0, marginTop: 2 }} />
                    <span className="font-body text-xs" style={{ color: "#888" }}>{ev.location}</span>
                  </div>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{ev.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events 2026 */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">What's Ahead</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Upcoming Events <span style={{ color: "var(--an-gold)" }}>2026</span>
            </h2>
            <p className="font-body text-sm mt-2" style={{ color: "#888" }}>
              May 2026 (Arise &amp; Take Flight) &amp; Beyond
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents2026.map(ev => (
              <div key={ev.title} className="bg-white rounded-xl p-6 shadow-sm ministry-card border-t-4" style={{ borderTopColor: ev.color }}>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} style={{ color: ev.color }} />
                  <span className="font-body font-bold text-xs" style={{ color: ev.color }}>{ev.date}</span>
                </div>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{ev.title}</h3>
                {ev.time !== "TBD" && (
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={12} style={{ color: "#aaa" }} />
                    <span className="font-body text-xs" style={{ color: "#888" }}>{ev.time}</span>
                  </div>
                )}
                <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{ev.desc}</p>
              </div>
            ))}
          </div>

          {/* Completed Events */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <span className="section-label">Recently Completed</span>
              <h3 className="font-display text-2xl font-bold" style={{ color: "var(--an-navy)" }}>
                Events We <span style={{ color: "var(--an-gold)" }}>Celebrated Together</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {completedEvents2026.map(ev => (
                <div key={ev.title} className="rounded-xl p-5 border border-gray-200 bg-gray-50 relative opacity-80">
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">
                    <span>✓</span> Completed
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} style={{ color: ev.color }} />
                    <span className="font-body font-bold text-xs" style={{ color: ev.color }}>{ev.date}</span>
                  </div>
                  <h4 className="font-display font-bold text-sm mb-1" style={{ color: "var(--an-navy)" }}>{ev.title}</h4>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "#888" }}>{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Line Info */}
      <section className="py-16" style={{ background: "var(--an-blue)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label" style={{ color: "rgba(255,255,255,0.70)" }}>Join Us in Prayer</span>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Weekly Prayer Line
              </h2>
              <p className="font-body text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                Our corporate prayer line is one of the most powerful tools in our ministry. Join believers from across the Treasure Coast as we come together to intercede, worship, and seek the face of God.
              </p>
              <div className="font-body text-sm mb-6 rounded-xl p-4" style={{ background: "rgba(255,255,255,0.10)", color: "rgba(255,255,255,0.85)" }}>
                <div className="font-bold mb-1" style={{ color: "var(--an-gold)" }}>Mondays at 7:00 PM</div>
                <div>Dial-In: <strong>1 (234) 203-2766</strong></div>
                <div>Meeting ID: <strong>327 436 787</strong></div>
                <div>Dial-in Password: <strong>5933324363</strong></div>
                <div className="mt-2" style={{ color: "rgba(255,255,255,0.65)" }}>Or visit <a href="https://www.allnationsldcc.org" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--an-gold)" }}>www.allnationsldcc.org</a> for updates.</div>
              </div>
              <a href="tel:7723437021" className="btn-gold flex items-center gap-2 w-fit">
                <Phone size={14} /> Call 772-343-7021
              </a>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-display font-bold text-white text-xl mb-6">Service Times at a Glance</h3>
              <div className="space-y-4">
                {[
                  { label: "Sunday 1st Service", time: "8:30 AM", note: "Youth & Toddler Lounge" },
                  { label: "Sunday 2nd Service", time: "11:00 AM", note: "Youth & Toddler Lounge" },
                  { label: "Wednesday Bible Study", time: "7:00 PM", note: "In-person & Online" },
                  { label: "Prayer Line", time: "7:00 PM", note: "Mondays · Dial-In Available" },
                ].map(s => (
                  <div key={s.label} className="flex items-center justify-between py-3 border-b border-white/10">
                    <div>
                      <div className="font-body font-bold text-sm text-white">{s.label}</div>
                      <div className="font-body text-xs" style={{ color: "rgba(255,255,255,0.60)" }}>{s.note}</div>
                    </div>
                    <div className="font-display font-bold text-base" style={{ color: "var(--an-gold)" }}>{s.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--an-navy)" }}>
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Plan Your Visit</h2>
          <p className="font-body text-base mb-8 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            We would love to see you this Sunday. Join us at 862 SW Glenview Ct, Port St. Lucie, FL 34953.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/connect" className="btn-gold flex items-center gap-2">Plan Your Visit <ArrowRight size={14} /></Link>
            <a href="https://www.facebook.com/AllNationsLDCC/" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>Watch Online</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
