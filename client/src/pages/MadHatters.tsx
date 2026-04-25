// Mad Hatters — Pink Basket Ministry
// All Nations Life Development Christian Center
// Founded 2010 by Pastor Sheila Blake

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ArrowRight, Gift, Car, Pill, Scissors, ShieldCheck } from "lucide-react";

const HAT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485607175/QUcZahytSDrYuMjNtsqNpd/pink_cowgirl_hat-2aDMPdELL6jfpETUJR3uy6.png";
const BASKET_IMG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/KXiwUSAroRWhVfQl.jpg";

const basketItems = [
  { icon: <Pill size={22} />, label: "Medications", desc: "Helping cover the cost of prescriptions and over-the-counter needs during treatment." },
  { icon: <Car size={22} />, label: "Transportation", desc: "Providing rides to treatment centers, doctor appointments, and follow-up care." },
  { icon: <Scissors size={22} />, label: "Head Coverings", desc: "Scarves, wraps, and coverings for those experiencing hair loss during treatment." },
  { icon: <Gift size={22} />, label: "Care Packages", desc: "Thoughtfully assembled baskets filled with comfort items, personal care products, and encouragement." },
  { icon: <Heart size={22} />, label: "Emotional Support", desc: "Prayer, visits, and the presence of a loving community walking alongside every step." },
  { icon: <ShieldCheck size={22} />, label: "Practical Assistance", desc: "Meals, errands, household help — meeting real needs with real love." },
];

export default function MadHatters() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="page-hero" style={{ background: "linear-gradient(135deg, #6a0032 0%, #c0185a 50%, #f472b6 100%)" }}>
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "#fce7f3" }}>All Nations LDCC</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">Mad Hatters — Pink Basket</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.88)" }}>
            A ministry of compassion, covering, and community — standing with those who face life's hardest seasons with a basket full of love and a hat full of faith.
          </p>
        </div>
      </div>

      {/* Scripture Banner */}
      <section className="py-10 px-4" style={{ background: "#fce7f3" }}>
        <div className="container text-center">
          <p className="font-display text-xl font-semibold" style={{ color: "#6a0032" }}>
            "Bear one another's burdens, and so fulfill the law of Christ."
          </p>
          <p className="font-body text-sm mt-1" style={{ color: "#9d174d" }}>Galatians 6:2</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-5xl mx-auto">
            <div>
              <span className="section-label" style={{ color: "#c0185a" }}>The Story Behind the Hat</span>
              <h2 className="font-display text-3xl font-bold mt-2 mb-6" style={{ color: "var(--an-navy)" }}>
                A Word from God in 2010
              </h2>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "var(--an-text-muted)" }}>
                In 2010, God spoke clearly to <strong>Pastor Sheila Blake</strong> with a simple but profound directive: <em>"We can stand with individuals and collect for our community."</em> It was not a program born out of a committee meeting or a strategic plan — it was a divine assignment, a call to wrap the arms of the church around those walking through the valley of illness, treatment, and uncertainty.
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "var(--an-text-muted)" }}>
                From that word, the <strong>Mad Hatters — Pink Basket Ministry</strong> was born. The vision was as beautiful as it was practical: on the <strong>2nd Sunday of every month</strong>, the women of All Nations would wear their most elegant, elaborate hats — a visible, joyful declaration to every member facing a health battle: <em>"We see you. We are covered with you. You are not alone."</em>
              </p>
              <p className="font-body text-base leading-relaxed mb-4" style={{ color: "var(--an-text-muted)" }}>
                The hat became a symbol of solidarity. Just as a hat covers the head, this ministry covers the whole person — spiritually, emotionally, and practically. And the Pink Basket? Filled with medications, rides to treatment, head coverings, care packages, and the irreplaceable gift of presence — it is the tangible expression of the love of Christ delivered to the doorstep of those who need it most.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "var(--an-text-muted)" }}>
                Over the years, the Mad Hatters have stood with members facing cancer, chronic illness, surgery, and recovery. They have sat in waiting rooms, driven to chemotherapy appointments, prayed over hospital beds, and delivered baskets overflowing with roses, ribbons, and the reminder that God's people do not abandon their own.
              </p>
            </div>
            <div className="flex flex-col gap-6 items-center">
              <div className="rounded-2xl overflow-hidden w-full max-w-sm" style={{ boxShadow: "0 8px 32px rgba(192,24,90,0.18)", border: "2px solid #f9a8d4" }}>
                <img src={HAT_IMG} alt="Elegant Pink Church Hat — Mad Hatters Ministry" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
                <div className="p-4 text-center" style={{ background: "#fce7f3" }}>
                  <p className="font-display text-sm font-bold" style={{ color: "#6a0032" }}>The Hat — A Crown of Solidarity</p>
                  <p className="font-body text-xs mt-1" style={{ color: "#c0185a" }}>Worn every 2nd Sunday in honor of those in treatment</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden w-full max-w-sm" style={{ boxShadow: "0 8px 32px rgba(192,24,90,0.18)", border: "2px solid #f9a8d4" }}>
                <img src={BASKET_IMG} alt="Pink Basket with Roses — Mad Hatters Ministry" className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
                <div className="p-4 text-center" style={{ background: "#fce7f3" }}>
                  <p className="font-display text-sm font-bold" style={{ color: "#6a0032" }}>The Pink Basket — Love Made Tangible</p>
                  <p className="font-body text-xs mt-1" style={{ color: "#c0185a" }}>Filled with care, comfort, and the fragrance of God's love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's in the Basket */}
      <section className="py-20 px-4" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "#c0185a" }}>What We Provide</span>
            <h2 className="font-display text-3xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              What's in the Pink Basket
            </h2>
            <p className="font-body text-base mt-3 max-w-2xl mx-auto" style={{ color: "var(--an-text-muted)" }}>
              Every basket is assembled with prayer, intention, and the specific needs of the recipient in mind. No two baskets are the same — because no two journeys are the same.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {basketItems.map((item, i) => (
              <div key={i} className="rounded-xl p-6 bg-white" style={{ border: "1px solid #f9a8d4", boxShadow: "0 2px 12px rgba(192,24,90,0.08)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white" style={{ background: "#c0185a" }}>
                  {item.icon}
                </div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "var(--an-navy)" }}>{item.label}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "var(--an-text-muted)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2nd Sunday Tradition */}
      <section className="py-20 px-4" style={{ background: "#6a0032" }}>
        <div className="container max-w-3xl text-center">
          <div className="text-6xl mb-6">👒</div>
          <span className="section-label" style={{ color: "#f9a8d4" }}>Our Tradition</span>
          <h2 className="font-display text-3xl font-bold text-white mt-2 mb-6">
            2nd Sunday — Hat Day
          </h2>
          <p className="font-body text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
            On the <strong style={{ color: "#f9a8d4" }}>2nd Sunday of every month</strong>, the women of All Nations LDCC wear their finest, most beautiful hats to Sunday service. It is not just fashion — it is a declaration of faith and fellowship.
          </p>
          <p className="font-body text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.85)" }}>
            Every hat worn is a message to every member who is battling illness, undergoing treatment, or walking through a health challenge: <em style={{ color: "#f9a8d4" }}>"We are covered with you. Your head is not uncovered. We stand with you."</em>
          </p>
          <p className="font-body text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
            It is one of the most beautiful traditions at All Nations — a Sunday morning filled with color, elegance, and the unmistakable presence of a community that refuses to let anyone walk alone.
          </p>
        </div>
      </section>

      {/* How to Give / Get Help */}
      <section className="py-20 px-4" style={{ background: "#fff" }}>
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <span className="section-label" style={{ color: "#c0185a" }}>Get Involved</span>
            <h2 className="font-display text-3xl font-bold mt-2" style={{ color: "var(--an-navy)" }}>
              Give a Basket. Receive a Basket.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ background: "#fce7f3", border: "1px solid #f9a8d4" }}>
              <Heart size={36} className="mb-4" style={{ color: "#c0185a" }} />
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: "#6a0032" }}>Do You Need a Basket?</h3>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#9d174d" }}>
                If you or a loved one is going through a health challenge — cancer treatment, surgery, chronic illness, or recovery — please let us know. This ministry exists for you. You do not have to carry this alone.
              </p>
              <Link href="/connect">
                <button className="inline-flex items-center gap-2 px-6 py-3 font-display font-semibold text-sm text-white transition-all hover:opacity-90" style={{ background: "#c0185a", borderRadius: "4px" }}>
                  Reach Out to Us <ArrowRight size={15} />
                </button>
              </Link>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "var(--an-bg)", border: "1px solid #f9a8d4" }}>
              <Gift size={36} className="mb-4" style={{ color: "#c0185a" }} />
              <h3 className="font-display text-xl font-bold mb-3" style={{ color: "#6a0032" }}>Want to Give?</h3>
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "var(--an-text-muted)" }}>
                You can sow into the Pink Basket ministry through financial gifts, donated items, or your time and service. Every contribution — large or small — becomes part of someone's healing journey.
              </p>
              <Link href="/give">
                <button className="inline-flex items-center gap-2 px-6 py-3 font-display font-semibold text-sm text-white transition-all hover:opacity-90" style={{ background: "#c0185a", borderRadius: "4px" }}>
                  Give to the Ministry <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: "var(--an-navy)" }}>
        <div className="container max-w-2xl text-center">
          <Heart size={40} className="mx-auto mb-4" style={{ color: "#f9a8d4" }} />
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            You Are Seen. You Are Loved. You Are Not Alone.
          </h2>
          <p className="font-body text-base mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            The Mad Hatters — Pink Basket Ministry is a living testimony that the church of Jesus Christ shows up — with a hat on, a basket in hand, and love that does not quit.
          </p>
          <Link href="/connect">
            <button className="inline-flex items-center gap-2 px-8 py-3 font-display font-semibold text-sm transition-all hover:opacity-90" style={{ background: "#c0185a", color: "#fff", borderRadius: "4px" }}>
              Connect With Us <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
