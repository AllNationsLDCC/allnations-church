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
    location: "Zoom · Meeting ID: 327 436 787 · Password: JXDddb4EMD · Phone: +1 (234) 203-2766",
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

const upcomingEvents2026 = [
  { title: "Tabernacle 2026 — Cultural Night", date: "Wednesday, April 1, 2026", time: "7:00 PM", desc: "An immersive night celebrating the rich cultural tapestry of All Nations. Come experience faith, culture, and worship in full expression. 862 SW Glenview Ct., Port St. Lucie, FL.", color: "var(--an-gold)" },
  { title: "Tabernacle 2026 — Kings & Queens Night", date: "Date to be Announced", time: "TBA", desc: "A royal celebration of identity, purpose, and Kingdom authority. Watch for the announcement of this powerful night. 862 SW Glenview Ct., Port St. Lucie, FL.", color: "var(--an-navy)" },
  { title: "Tabernacle 2026 — Good Friday Walk", date: "Good Friday, April 18, 2026", time: "Service Times TBA", desc: "Walk Through the Tabernacle — an immersive Good Friday experience honoring the sacrifice of Jesus Christ. 862 SW Glenview Ct., Port St. Lucie, FL.", color: "var(--an-red)" },
  { title: "Palm Sunday", date: "April 5, 2026", time: "8:30 AM & 11:00 AM", desc: "Celebrate the triumphal entry of Jesus Christ into Jerusalem. Join us for a special Palm Sunday worship experience at All Nations LDCC.", color: "var(--an-green)" },
  { title: "Easter Sunday", date: "April 5, 2026", time: "8:30 AM & 11:00 AM", desc: "He is Risen! Join us for a powerful Easter Sunday celebration as we honor the resurrection of Jesus Christ.", color: "var(--an-red)" },
  { title: "Youth Summer Programs", date: "Summer 2026", time: "TBD", desc: "Exciting summer programs for youth and children. Registration details coming soon!", color: "var(--an-orange)" },
  { title: "Women's Ministry Retreat", date: "Spring 2026", time: "TBD", desc: "Annual women's retreat for refreshing, renewal, and deeper connection.", color: "var(--an-red)" },
  { title: "Discipleship 201 — New Cohort", date: "Spring 2026", time: "TBD", desc: "New cohort beginning for Discipleship 201: Foundations of Faith. Certificate awarded upon completion.", color: "var(--an-blue)" },
  { title: "Leadership Lab", date: "Ongoing 2026", time: "TBD", desc: "The Leadership Lab ministry class for emerging leaders. Contact us for current schedule.", color: "var(--an-navy)" },
  { title: "Community Outreach Day", date: "Quarterly", time: "TBD", desc: "Serving Port St. Lucie together through food drives, resource distributions, and community love.", color: "var(--an-green)" },
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
                <div>Password: <strong>5933324363</strong></div>
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
