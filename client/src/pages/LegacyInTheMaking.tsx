// Legacy in the Making — Singles Ministry
// All Nations Life Development Christian Center
// A diverse, multigenerational singles community — Black, Caribbean, American, Hispanic

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Star, ArrowRight, Calendar, MapPin, Music, Coffee } from "lucide-react";

const BOWLING_1 = "/manus-storage/pasted_file_xBvKXq_image_d7f049b0.jpg"; // Legacy in the Making — worship on stage
const BOWLING_2 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/hzggWubhGzaAROJs.jpg";
const BOWLING_3 = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/QdXWabZmUglLAjxf.jpg";

const activities = [
  { icon: <Music size={22} />, label: "Worship Nights", desc: "Intimate worship gatherings designed specifically for singles to connect with God and each other." },
  { icon: <Coffee size={22} />, label: "Fellowship Outings", desc: "From bowling nights to dinners, game nights to community service — life is better together." },
  { icon: <Users size={22} />, label: "Life Groups", desc: "Small group settings where singles can grow in faith, share life, and build authentic friendships." },
  { icon: <Star size={22} />, label: "Personal Development", desc: "Workshops and teachings on identity, purpose, finances, relationships, and wholeness." },
  { icon: <Heart size={22} />, label: "Community Service", desc: "Serving together in the community — because a life of purpose is built through giving." },
  { icon: <Calendar size={22} />, label: "Monthly Gatherings", desc: "Regular events, celebrations, and special services that keep the community connected year-round." },
];

export default function LegacyInTheMaking() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="page-hero" style={{ background: "linear-gradient(135deg, var(--an-navy) 0%, #1a3a5c 50%, var(--an-teal) 100%)" }}>
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.65)" }}>Singles Ministry</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">Legacy in the Making</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.88)" }}>
            A vibrant, diverse community of single men and women — building lives of purpose, faith, and authentic connection at All Nations LDCC.
          </p>
        </div>
      </div>

      {/* Scripture */}
      <section className="py-10 px-4" style={{ background: "var(--an-teal)" }}>
        <div className="container text-center">
          <p className="font-display text-xl font-semibold text-white">
            "For I know the plans I have for you, declares the Lord — plans to prosper you and not to harm you, plans to give you hope and a future."
          </p>
          <p className="font-body text-sm mt-1" style={{ color: "rgba(255,255,255,0.75)" }}>Jeremiah 29:11</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "var(--an-teal)" }}>Who We Are</span>
            <h2 className="font-display text-3xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              More Than a Ministry — <span style={{ color: "var(--an-teal)" }}>A Family</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "var(--an-text-muted)" }}>
                <strong>Legacy in the Making</strong> is the singles ministry of All Nations Life Development Christian Center — and it is one of the most beautifully diverse communities you will ever find. We are Black, Caribbean, African American, Hispanic, and everything in between. We are young professionals and seasoned saints, newly single and long-time singles, those who have never married and those who are walking a new chapter after loss or transition.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "var(--an-text-muted)" }}>
                What unites us is not our relationship status — it is our faith, our hunger for purpose, and our commitment to building something that will outlast us. We believe that the single season is not a waiting room. It is a launching pad. It is a time to discover who you are, deepen your walk with God, sharpen your gifts, and build friendships that will last a lifetime.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "var(--an-text-muted)" }}>
                Every person who walks through the doors of Legacy in the Making is in the process of building something extraordinary — a legacy of faith, character, and purpose. And we are building it together.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 32px rgba(10,22,40,0.12)", border: "1px solid rgba(0,128,128,0.15)" }}>
              <img src={BOWLING_1} alt="Legacy in the Making — Worship on Stage" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              <div className="p-4 text-center" style={{ background: "var(--an-bg)" }}>
                <p className="font-display text-sm font-bold" style={{ color: "var(--an-navy)" }}>Legacy in the Making — Worship Night</p>
                <p className="font-body text-xs mt-1" style={{ color: "var(--an-teal)" }}>Singing, dancing, and celebrating together</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bowling Outing Feature */}
      <section className="py-20 px-4" style={{ background: "var(--an-bg)" }}>
        <div className="container max-w-5xl">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "var(--an-teal)" }}>Recent Outing</span>
            <h2 className="font-display text-3xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              Strikes, Spares & <span style={{ color: "var(--an-orange)" }}>Laughter</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "var(--an-text-muted)" }}>
              Our most recent outing brought the whole crew to the bowling alley — and it was everything. Young and not-so-young, competitive and completely terrible, everyone showed up and showed out. This is what Legacy in the Making looks like on a Friday night.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(10,22,40,0.10)", border: "1px solid rgba(0,128,128,0.12)" }}>
              <img src={BOWLING_3} alt="Singles Bowling Night — All Nations" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              <div className="p-4" style={{ background: "#fff" }}>
                <p className="font-display text-sm font-bold" style={{ color: "var(--an-navy)" }}>All ages. All backgrounds. One family.</p>
                <p className="font-body text-xs mt-1" style={{ color: "var(--an-text-muted)" }}>Black, Caribbean, American, Hispanic — together at the lanes</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 24px rgba(10,22,40,0.10)", border: "1px solid rgba(0,128,128,0.12)" }}>
              <img src={BOWLING_2} alt="Seniors at Bowling — Legacy in the Making" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              <div className="p-4" style={{ background: "#fff" }}>
                <p className="font-display text-sm font-bold" style={{ color: "var(--an-navy)" }}>The seasoned saints showed up and showed out.</p>
                <p className="font-body text-xs mt-1" style={{ color: "var(--an-text-muted)" }}>Our older singles bring the wisdom — and the competitive spirit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "var(--an-teal)" }}>What We Do</span>
            <h2 className="font-display text-3xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              Life Together — <span style={{ color: "var(--an-teal)" }}>In Every Season</span>
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "var(--an-text-muted)" }}>
              Legacy in the Making is not just a Sunday ministry. We do life together — from worship to outings, from small groups to community service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activities.map((act, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "var(--an-bg)", border: "1px solid rgba(0,128,128,0.15)", boxShadow: "0 2px 12px rgba(10,22,40,0.06)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white" style={{ background: "var(--an-teal)" }}>
                  {act.icon}
                </div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "var(--an-navy)" }}>{act.label}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--an-text-muted)" }}>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-20 px-4" style={{ background: "var(--an-navy)" }}>
        <div className="container max-w-3xl text-center">
          <Users size={40} className="mx-auto mb-4" style={{ color: "var(--an-teal)" }} />
          <span className="section-label" style={{ color: "rgba(255,255,255,0.55)" }}>Our Community</span>
          <h2 className="font-display text-3xl font-bold text-white mt-2 mb-6">
            A Ministry That Looks Like the <span style={{ color: "var(--an-teal)" }}>Kingdom</span>
          </h2>
          <p className="font-body text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.80)" }}>
            We are proudly and beautifully diverse. Our singles community reflects the rich tapestry of All Nations LDCC — Black Americans, Jamaicans, Haitians, Trinidadians, Barbadians, Guyanese, Puerto Ricans, and more. We span every decade of adult life — from our twenties to our sixties and beyond.
          </p>
          <p className="font-body text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.80)" }}>
            Some of us are never-married. Some are widowed. Some are divorced. Some are in seasons of transition. But every single one of us is <strong style={{ color: "var(--an-teal)" }}>whole</strong>, <strong style={{ color: "var(--an-teal)" }}>valued</strong>, and <strong style={{ color: "var(--an-teal)" }}>building a legacy</strong> — right now, in this season, exactly as we are.
          </p>
          <p className="font-body text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
            If you are single and looking for a community where you truly belong — where you can grow, laugh, serve, worship, and be yourself — Legacy in the Making is your home.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="container max-w-2xl text-center">
          <Star size={40} className="mx-auto mb-4" style={{ color: "var(--an-orange)" }} />
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--an-navy)" }}>
            Ready to Join the Legacy?
          </h2>
          <p className="font-body text-base mb-8 max-w-xl mx-auto" style={{ color: "var(--an-text-muted)" }}>
            Come as you are. You don't need to have it all together. You just need to show up — and we'll take it from there. Your legacy is in the making.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/connect">
              <button className="btn-gold flex items-center gap-2">
                Connect With Us <ArrowRight size={16} />
              </button>
            </Link>
            <a href="tel:7723437021" className="btn-outline flex items-center gap-2" style={{ borderColor: "var(--an-navy)", color: "var(--an-navy)" }}>
              <MapPin size={15} /> (772) 343-7021
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
