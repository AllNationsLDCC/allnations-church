import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Mail, Phone, ArrowRight } from "lucide-react";

const PASTOR_SHELIA = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NundXIvqDynhQrGu.png";
const BISHOP_AND_PASTOR = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/VqJHSlAGuVdPixUz.jpg";

const pastors = [
  {
    name: "Bishop Cornelius Blake",
    title: "Senior Bishop",
    color: "var(--an-navy)",
    accentColor: "var(--an-gold)",
    photo: BISHOP_AND_PASTOR,
    photoNote: null,
    bio: [
      "Bishop Cornelius Blake is the visionary founder and Senior Pastor of All Nations Life Development Christian Center, a thriving multicultural faith community in Port St. Lucie, Florida. For over 35 years, Bishop Blake has led with a prophetic voice, pastoral heart, and unwavering commitment to the transforming power of God's Word.",
      "Under his leadership, All Nations has grown from a small gathering of believers into a dynamic ministry that impacts thousands of lives through worship, discipleship, outreach, and community development. Bishop Blake's teaching is rooted in the conviction that every person has a divine purpose — and that the local church is God's primary vehicle for revealing it.",
      "Known for his depth of Scripture, clarity of vision, and genuine love for people, Bishop Blake continues to build a legacy that will outlast his lifetime — raising up leaders, strengthening families, and advancing the Kingdom of God in Port St. Lucie and beyond.",
    ],
    credentials: ["Senior Pastor, All Nations LDCC", "Bishop, 35+ Years in Ministry", "Community Leader, Port St. Lucie, FL"],
  },
  {
    name: "Executive Pastor Shelia Blake",
    title: "Executive Pastor",
    color: "var(--an-teal)",
    accentColor: "var(--an-teal)",
    photo: PASTOR_SHELIA,
    photoNote: null,
    bio: [
      "Executive Pastor Shelia Blake is a visionary leader, entrepreneur, and faith-driven strategist committed to building people and strengthening institutions for lasting impact. As Executive Pastor of All Nations Life Development Christian Center, she provides operational leadership, strategic planning, ministry development, and organizational oversight — ensuring that vision translates into measurable transformation across generations.",
      "With more than 30 years of executive experience in banking and financial services, Shelia brings corporate governance, operational structure, and performance excellence into both ministry and marketplace environments. Her leadership framework blends faith, strategic execution, and innovation — creating sustainable systems that support long-term growth.",
      "Shelia is also the founder of She's Sew and Sew and More (a custom embroidery and branding company) and AmarAI Consulting Group LLC (an AI-driven business strategy firm). Known for her integrity, clarity, and executional strength, she leads with both compassion and structure — elevating people, implementing excellence, and creating legacy-driven impact.",
    ],
    credentials: [
      "Executive Pastor, All Nations LDCC",
      "Founder, AmarAI Consulting Group LLC",
      "Founder, She's Sew and Sew and More",
      "30+ Years Executive Banking & Finance",
      "Leadership Strategist & Business Consultant",
    ],
  },
];

export default function MeetThePastors() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>Leadership</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">Meet the Pastors</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            Servant leaders committed to building people, advancing the Kingdom, and creating generational legacy in Port St. Lucie and beyond.
          </p>
        </div>
      </div>

      {/* Pastors */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-24">
            {pastors.map((p, i) => (
              <div key={p.name} className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-start`}>
                {/* Photo */}
                <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <div className="absolute -inset-4 rounded-3xl opacity-20" style={{ background: `linear-gradient(135deg, ${p.accentColor}, transparent)` }} />
                    <img
                      src={p.photo}
                      alt={p.name}
                      className="relative z-10 w-full rounded-2xl object-cover shadow-2xl"
                      style={{ height: "480px", objectPosition: i === 0 ? "72% 28%" : "50% 15%" }}
                    />
                    {p.photoNote && (
                      <div className="absolute bottom-3 left-3 right-3 z-20 text-center">
                        <span className="font-body text-xs px-3 py-1 rounded-full" style={{ background: "rgba(0,0,0,0.6)", color: "rgba(255,255,255,0.7)" }}>
                          {p.photoNote}
                        </span>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl p-4" style={{ background: "rgba(31,47,92,0.92)", backdropFilter: "blur(8px)" }}>
                      <div className="font-display text-white font-bold text-base">{p.name}</div>
                      <div className="font-body text-xs mt-1" style={{ color: p.accentColor }}>{p.title}</div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="section-label" style={{ color: p.accentColor }}>All Nations LDCC Leadership</span>
                  <h2 className="font-display text-3xl font-bold mb-2" style={{ color: "var(--an-navy)" }}>{p.name}</h2>
                  <div className="font-body font-bold text-sm mb-6" style={{ color: p.accentColor }}>{p.title}</div>
                  <div className="space-y-4 mb-8">
                    {p.bio.map((para, j) => (
                      <p key={j} className="font-body text-base leading-relaxed" style={{ color: "#555" }}>{para}</p>
                    ))}
                  </div>
                  <div className="mb-8">
                    <div className="font-body font-bold text-sm mb-3" style={{ color: "var(--an-navy)" }}>Roles & Credentials</div>
                    <ul className="space-y-2">
                      {p.credentials.map(c => (
                        <li key={c} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.accentColor }} />
                          <span className="font-body text-sm" style={{ color: "#555" }}>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    <Link href="/connect" className="btn-navy flex items-center gap-2">
                      <Mail size={14} /> Contact Us
                    </Link>
                    <a href="tel:7723437021" className="btn-outline flex items-center gap-2">
                      <Phone size={14} /> 772-343-7021
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section className="py-16" style={{ background: "var(--an-navy)" }}>
        <div className="container text-center">
          <blockquote className="font-display text-2xl md:text-3xl font-bold text-white mb-4 italic">
            "Building People is Our Business."
          </blockquote>
          <p className="font-body text-base mb-8" style={{ color: "rgba(255,255,255,0.70)" }}>
            All Nations Life Development Christian Center — Port St. Lucie, FL
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/what-we-believe" className="btn-gold flex items-center gap-2">
              Our Story <ArrowRight size={14} />
            </Link>
            <Link href="/connect" className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
