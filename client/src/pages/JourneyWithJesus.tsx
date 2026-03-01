import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Heart, BookOpen, Users, Star, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Salvation — Beginning the Journey",
    desc: "Every journey with Jesus begins with a decision. If you have never accepted Jesus Christ as your Lord and Savior, today is your day. Salvation is the foundation — the moment everything changes.",
    verse: "Romans 10:9",
    verseText: "\"If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.\"",
    color: "var(--an-red)",
  },
  {
    number: "02",
    title: "Baptism — Going Public with Your Faith",
    desc: "Baptism is an outward declaration of an inward transformation. It is your public statement that you have died to your old life and risen to new life in Christ. We celebrate baptisms regularly at All Nations LDCC.",
    verse: "Matthew 28:19",
    verseText: "\"Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.\"",
    color: "var(--an-blue)",
  },
  {
    number: "03",
    title: "Discipleship — Growing in the Word",
    desc: "A journey with Jesus is a journey of growth. Through our Discipleship courses (201, 301, and 401), Wednesday Bible Study, and personal devotion, we help you build a strong, rooted faith that sustains you through every season.",
    verse: "2 Timothy 2:15",
    verseText: "\"Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth.\"",
    color: "var(--an-green)",
  },
  {
    number: "04",
    title: "Community — Walking Together",
    desc: "You were not meant to walk this journey alone. At All Nations, you will find a family — people who will pray with you, celebrate with you, and stand with you through every chapter of your story.",
    verse: "Hebrews 10:24-25",
    verseText: "\"And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together.\"",
    color: "var(--an-teal)",
  },
  {
    number: "05",
    title: "Purpose — Living on Mission",
    desc: "Your journey with Jesus is not just for you — it is for the world around you. Discover your gifts, step into your calling, and join us in the Great Commission. Every believer has a role in God's kingdom story.",
    verse: "Jeremiah 29:11",
    verseText: "\"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.\"",
    color: "var(--an-gold)",
  },
];

const nextSteps = [
  { title: "Accept Christ Today", desc: "Pray the salvation prayer and begin your journey right now.", icon: <Heart size={20} />, color: "var(--an-red)", link: "/connect" },
  { title: "Get Baptized", desc: "Contact us to schedule your baptism — a powerful milestone in your faith walk.", icon: <Star size={20} />, color: "var(--an-blue)", link: "/connect" },
  { title: "Join a Discipleship Class", desc: "Enroll in Discipleship 201 and begin building your foundation in the Word.", icon: <BookOpen size={20} />, color: "var(--an-green)", link: "/ministries" },
  { title: "Connect with Community", desc: "Join a ministry, attend Bible study, and find your place in the All Nations family.", icon: <Users size={20} />, color: "var(--an-teal)", link: "/connect" },
];

const salvationPrayer = `Heavenly Father, I come to You today acknowledging that I am a sinner in need of Your grace. I believe that Jesus Christ is Your Son, that He died on the cross for my sins, and that You raised Him from the dead. I confess Jesus as my Lord and Savior. I turn from my old ways and surrender my life to You. Fill me with Your Holy Spirit and lead me on this journey. Thank You for saving me. In Jesus' name, Amen.`;

export default function JourneyWithJesus() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>Your Story Starts Here</span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-2 mb-4">
            Journey with Jesus
          </h1>
          <p className="font-body text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Whether you are just starting out or looking to go deeper, there is a place for you at All Nations. The journey with Jesus is the greatest adventure you will ever take.
          </p>
          <Link href="/connect" className="btn-gold flex items-center gap-2 w-fit mx-auto">
            Begin Your Journey <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">The Foundation</span>
            <h2 className="font-display text-4xl font-bold mb-6" style={{ color: "var(--an-navy)" }}>
              Every Great Journey Begins with <span style={{ color: "var(--an-gold)" }}>One Step</span>
            </h2>
            <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#555" }}>
              At All Nations Life Development Christian Center, we believe that a relationship with Jesus Christ is not a destination — it is a lifelong journey of discovery, growth, transformation, and purpose. No matter where you are in your walk — whether you are taking your very first step or you have been walking with God for decades — there is always more to explore, more to learn, and more to become.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: "#555" }}>
              Our Journey with Jesus ministry is designed to walk alongside you at every stage — from the moment of salvation through discipleship, community, and ultimately into your God-given purpose and calling.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="section-label">The Path</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              Five Milestones of the <span style={{ color: "var(--an-gold)" }}>Journey</span>
            </h2>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.number} className={`flex gap-6 items-start ${i % 2 === 1 ? "flex-row-reverse" : ""}`}>
                {/* Number Badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-xl text-white shadow-lg" style={{ background: step.color }}>
                  {step.number}
                </div>
                {/* Content */}
                <div className="bg-white rounded-2xl p-7 flex-1 shadow-sm ministry-card border-l-4" style={{ borderLeftColor: step.color }}>
                  <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--an-navy)" }}>{step.title}</h3>
                  <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#555" }}>{step.desc}</p>
                  <div className="rounded-xl p-4" style={{ background: `${step.color}0D` }}>
                    <div className="font-body font-bold text-xs mb-1" style={{ color: step.color }}>{step.verse}</div>
                    <blockquote className="font-body text-sm italic leading-relaxed" style={{ color: "#444" }}>{step.verseText}</blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salvation Prayer */}
      <section className="py-20" style={{ background: "var(--an-navy)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label" style={{ color: "rgba(255,255,255,0.60)" }}>Start Right Now</span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              The Salvation <span style={{ color: "var(--an-gold)" }}>Prayer</span>
            </h2>
            <p className="font-body text-base mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
              If you are ready to begin your journey with Jesus today, pray this prayer from your heart:
            </p>
            <div className="rounded-2xl p-8 text-left" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <blockquote className="font-body text-base leading-relaxed italic text-white">
                {salvationPrayer}
              </blockquote>
            </div>
            <p className="font-body text-sm mt-6 mb-8" style={{ color: "rgba(255,255,255,0.70)" }}>
              If you prayed that prayer today, we want to celebrate with you and help you take your next steps. Please reach out to us — this is the most important decision you will ever make.
            </p>
            <Link href="/connect" className="btn-gold flex items-center gap-2 w-fit mx-auto">
              I Made a Decision Today <Heart size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Take the Next Step</span>
            <h2 className="font-display text-4xl font-bold" style={{ color: "var(--an-navy)" }}>
              What Comes <span style={{ color: "var(--an-gold)" }}>Next?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextSteps.map(step => (
              <Link key={step.title} href={step.link} className="ministry-card bg-white rounded-xl p-6 shadow-sm border border-gray-100 block text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-4" style={{ background: step.color }}>
                  {step.icon}
                </div>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: "var(--an-navy)" }}>{step.title}</h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#666" }}>{step.desc}</p>
                <span className="font-body font-bold text-xs flex items-center gap-1 justify-center" style={{ color: step.color }}>
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Discipleship Courses CTA */}
      <section className="py-16" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, var(--an-green) 0%, var(--an-teal) 100%)" }}>
            <BookOpen size={40} className="text-white mx-auto mb-4" />
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Deepen Your Journey with Discipleship
            </h2>
            <p className="font-body text-base mb-6 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.85)" }}>
              Enroll in our Discipleship courses — 201, 301, and 401 — and receive a certificate upon completion. Each course is designed to take you deeper in your walk with God.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              {["Discipleship 201", "Discipleship 301", "Discipleship 401"].map(course => (
                <div key={course} className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.20)" }}>
                  <CheckCircle size={14} className="text-white" />
                  <span className="font-body font-bold text-sm text-white">{course}</span>
                </div>
              ))}
            </div>
            <Link href="/connect" className="btn-gold flex items-center gap-2 w-fit mx-auto mt-6">
              Enroll Today <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
