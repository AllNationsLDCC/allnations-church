import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { BookOpen, ExternalLink, ArrowRight, Feather, Star } from "lucide-react";

/* ─── Book cover images (local) ─── */
const COVER_BIRTHING = "/images/books/birthing-your-own-baby.jpg";
const COVER_PROJECT2026 = "/images/books/project-2026.jpeg";
const COVER_SINDUCTION = "/images/books/sinduction.jpg";
const COVER_MWP = "/images/books/my-wealthy-place.jpg";
const COVER_PRETTY = "/images/books/pretty-woman.jpg";

/* ─── Lady Carolyn Byrd book covers ─── */
const COVER_7STEPS = "/images/books/book_carol_7steps.jpeg";
const COVER_FUCHSIA = "/images/books/book_carol_fuchsia.jpeg";
const COVER_HAPPY_MARRIAGE = "/images/books/book_carol_happy_marriage.png";
const COVER_OTTER = "/images/books/book_carol_otter.png";

/* ─── Author photos ─── */
const BISHOP_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/4701_aa5134ae.jpg";
const PASTOR_SHELIA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663390792871/2Xyh9HUstvJrPT3UDPZkGi/4732_f8ef8a6f.jpg";
const CAROL_BYRD_PHOTO = "/carol-mike-byrd.jpg";

/* ─── Types ─── */
interface Book {
  title: string;
  subtitle?: string;
  cover: string;
  year: string;
  publisher?: string;
  pages?: string;
  description: string;
  amazonUrl?: string;
  barnesUrl?: string;
  comingSoon?: boolean;
  badge?: string;
}

interface Author {
  name: string;
  title: string;
  photo: string;
  bio: string;
  accentColor: string;
  books: Book[];
  comingSoonNote?: string;
}

/* ─── Data ─── */
const authors: Author[] = [
  {
    name: "Bishop Cornelius Blake",
    title: "Senior Pastor & Author",
    photo: BISHOP_PHOTO,
    accentColor: "var(--an-gold)",
    bio: "Bishop Cornelius Blake is a prolific author, visionary leader, and the Senior Pastor of All Nations Life Development Christian Center. Through his writing, Bishop Blake addresses the intersections of faith, wealth, purpose, and redemption — equipping readers with biblical wisdom for real-world transformation. His works span ministry leadership, financial stewardship, spiritual warfare, and the power of covenant relationships.",
    books: [
      {
        title: "Pretty Woman",
        subtitle: "A Journey Into Betrothal, Betrayal, and Redemption",
        cover: COVER_PRETTY,
        year: "2026",
        publisher: "WestBow Press",
        pages: "480",
        description: "This powerful narrative unfolds in the language of spiritual gravity — where mercy is militant, and redemption is not passive, but fierce, sensual, and sovereign. A journey through betrothal, betrayal, and the relentless pursuit of restoration.",
        amazonUrl: "https://www.amazon.com/dp/B0GSF3KQCK",
        barnesUrl: "https://www.barnesandnoble.com/w/pretty-woman-cornelius-blake/1149680515",
        badge: "New Release",
      },
      {
        title: "My Wealthy Place",
        subtitle: "How to Go From Being Broke to Being Blessed",
        cover: COVER_MWP,
        year: "2016",
        publisher: "WestBow Press",
        pages: "394",
        description: "Bishop Cornelius Blake shares his thoughts on wealth as a gift from the Almighty to humanity. This book challenges readers to shift their mindset from scarcity to abundance, using biblical principles to build lasting financial freedom and generational blessing.",
        amazonUrl: "https://www.amazon.com/My-Wealthy-Place-Cornelius-Blake/dp/1512747882",
      },
      {
        title: "Sinduction",
        subtitle: "",
        cover: COVER_SINDUCTION,
        year: "2007",
        publisher: "Tate Publishing",
        pages: "272",
        description: "A compelling exploration of spiritual warfare, temptation, and the subtle seductions that pull believers away from their divine assignment. Bishop Blake exposes the enemy's tactics and equips the reader with strategies for victory.",
        amazonUrl: "https://www.amazon.com/dp/1414107307",
      },
      {
        title: "Better Birthing Your Own Baby",
        subtitle: "8 Key Factors to Birthing & Building a Phenomenal Ministry",
        cover: COVER_BIRTHING,
        year: "2005",
        description: "A foundational guide for ministry leaders, this book lays out 8 key factors for birthing and building a phenomenal ministry. Drawing from decades of pastoral experience, Bishop Blake provides a roadmap for those called to build something that lasts.",
      },
      {
        title: "Project Twenty 2026 — Vol. 1",
        subtitle: "Your Daily Blueprint for a Better Life",
        cover: COVER_PROJECT2026,
        year: "2026",
        pages: "23 DIY Projects for Your Personal Peace",
        description: "A prophetic declaration and strategic blueprint for the next season of Kingdom advancement. 23 DIY projects for your personal peace — covering Stronger Relationships, Personal Growth, and Daily Achievements. Volume 1 sets the foundation for what God is building through All Nations and beyond.",
        amazonUrl: "https://www.amazon.com",
        badge: "Now Available — $24.96",
      },
      {
        title: "Project Twenty 2026 — Vol. 2",
        subtitle: "Your Daily Blueprint for a Better Life",
        cover: COVER_PROJECT2026,
        year: "2026",
        pages: "20 DIY Projects for Your Personal Peace",
        description: "The continuation of the Project 2026 vision — 20 DIY projects expanding the framework for generational impact, community transformation, and apostolic leadership in the modern era. Stronger Relationships. Personal Growth. Daily Achievements.",
        amazonUrl: "https://www.amazon.com",
        badge: "Now Available — $24.96",
      },
    ],
  },
  {
    name: "Pastor Mike & Lady Carolyn Byrd",
    title: "Legacy of Love & Legacy in the Making Leaders",
    photo: CAROL_BYRD_PHOTO,
    accentColor: "#9b2c7e",
    bio: "Pastor Mike Byrd and Lady Carolyn Byrd are a dynamic ministry team at All Nations Life Development Christian Center, co-leading two transformative ministries: Legacy of Love — the couples ministry designed to help marriages move from simply existing together to thriving together with purpose — and Legacy in the Making, a vibrant singles ministry building lives of purpose, faith, and authentic connection. Together, they bring a unified vision of covenant, wholeness, and Kingdom legacy to every season of life. Through their writing, Pastor Mike and Lady Carolyn speak directly to the hearts of couples, singles, women, and families — addressing emotional intimacy, marital health, communication, and spiritual wholeness. Their books are a testament to their shared passion for building God-centered marriages and nurturing the next generation in faith.",
    books: [
      {
        title: "7 Steps to Effective Communication in Your Marriage",
        subtitle: "Building Bridges, Not Walls",
        cover: COVER_7STEPS,
        year: "2009",
        publisher: "Michael & Lady Carolyn Byrd",
        description: "A practical, biblically grounded guide to transforming the way couples communicate. Lady Carolyn Byrd walks readers through seven powerful steps to break down walls, build deeper understanding, and create a marriage culture of openness, respect, and love.",
        amazonUrl: "https://www.amazon.com/dp/0981786405",
      },
      {
        title: "Fuchsia",
        subtitle: "",
        cover: COVER_FUCHSIA,
        year: "2009",
        publisher: "Lady Carolyn Byrd",
        description: "A beautifully written journey of identity, color, and purpose. Fuchsia explores the vibrant, bold, and unapologetic nature of a woman who discovers her true worth in God — bold as the color itself, and just as unforgettable.",
        amazonUrl: "https://www.amazon.com/dp/0981786464",
      },
      {
        title: "Yes! You Can Have a Happy Marriage",
        subtitle: "Taking Your Marriage to Another Dimension",
        cover: COVER_HAPPY_MARRIAGE,
        year: "2009",
        publisher: "Michael & Lady Carolyn Byrd",
        description: "An encouraging and empowering declaration that a happy, thriving marriage is not only possible — it is God's design for you. Mike and Carol Byrd share practical wisdom and spiritual insight to help couples take their marriage to an entirely new dimension of joy, unity, and purpose.",
        amazonUrl: "https://www.amazon.com/dp/0981786421",
        badge: "Co-authored with Mike Byrd",
      },
      {
        title: "A Home For Otter",
        subtitle: "The Adventures of Otter — Book 1",
        cover: COVER_OTTER,
        year: "2009",
        publisher: "Lady Carolyn Byrd",
        description: "A charming and heartwarming children's story about belonging, family, and finding your place in the world. The Adventures of Otter Book 1 introduces young readers to Otter's journey — a delightful tale that teaches children about identity, community, and the love of God through the eyes of an endearing character.",
        amazonUrl: "https://www.amazon.com/dp/0981786448",
        badge: "Children's Book",
      },
    ],
  },

];

/* ─── Component ─── */
export default function WrittenWord() {
  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>
            <Feather size={16} className="inline mr-2 -mt-0.5" />
            Books &amp; Publications
          </span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">The Written Word</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            Faith-filled literature from the leaders of All Nations LDCC — equipping believers with wisdom, strategy, and Kingdom perspective for every season of life.
          </p>
        </div>
      </div>

      {/* Scripture Banner */}
      <section className="py-10" style={{ background: "linear-gradient(135deg, var(--an-navy) 0%, #2c4a8a 100%)" }}>
        <div className="container text-center">
          <blockquote className="font-display text-xl md:text-2xl font-bold text-white italic">
            "Your word is a lamp to my feet and a light to my path."
          </blockquote>
          <p className="font-body text-sm mt-3" style={{ color: "var(--an-gold)" }}>— Psalm 119:105 (NKJV)</p>
        </div>
      </section>

      {/* Authors & Books */}
      {authors.map((author, authorIdx) => (
        <section key={author.name} className="py-20" style={{ background: authorIdx % 2 === 1 ? "rgba(31,47,92,0.03)" : "transparent" }}>
          <div className="container">

            {/* Author Header */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start mb-16">
              {/* Author Photo */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <div className="absolute -inset-3 rounded-2xl opacity-15" style={{ background: `linear-gradient(135deg, ${author.accentColor}, transparent)` }} />
                  <img
                    src={author.photo}
                    alt={author.name}
                    className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
                    style={{ height: "320px", objectPosition: "top" }}
                  />
                  <div className="absolute bottom-3 left-3 right-3 z-20 rounded-lg p-3" style={{ background: "rgba(31,47,92,0.92)", backdropFilter: "blur(8px)" }}>
                    <div className="font-display text-white font-bold text-sm">{author.name}</div>
                    <div className="font-body text-xs mt-0.5" style={{ color: author.accentColor }}>{author.title}</div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="lg:col-span-3">
                <span className="section-label" style={{ color: author.accentColor }}>Featured Author</span>
                <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--an-navy)" }}>{author.name}</h2>
                <p className="font-body text-base leading-relaxed mb-6" style={{ color: "#555" }}>{author.bio}</p>
                {author.books.length > 0 && (
                  <div className="flex items-center gap-2 font-body text-sm" style={{ color: author.accentColor }}>
                    <BookOpen size={16} />
                    <span className="font-semibold">{author.books.length} Published &amp; Upcoming Works</span>
                  </div>
                )}
              </div>
            </div>

            {/* Books Grid */}
            {author.books.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {author.books.map((book) => (
                  <div
                    key={book.title}
                    className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    style={{ background: "#fff", border: "1px solid rgba(31,47,92,0.08)" }}
                  >
                    {/* Badge */}
                    {book.badge && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="font-body text-xs font-bold px-3 py-1 rounded-full" style={{ background: "var(--an-gold)", color: "var(--an-navy)" }}>
                          {book.badge}
                        </span>
                      </div>
                    )}
                    {book.comingSoon && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="font-body text-xs font-bold px-3 py-1 rounded-full" style={{ background: "var(--an-navy)", color: "#fff" }}>
                          Coming Soon
                        </span>
                      </div>
                    )}

                    {/* Cover Image */}
                    <div className="relative overflow-hidden" style={{ height: "320px", background: book.comingSoon ? "linear-gradient(135deg, var(--an-navy) 0%, #2c4a8a 60%, var(--an-gold) 100%)" : "#f5f0e8" }}>
                      {book.cover ? (
                        <img
                          src={book.cover}
                          alt={book.title}
                          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-center px-8">
                          <BookOpen size={48} className="mb-4" style={{ color: "var(--an-gold)" }} />
                          <div className="font-display text-xl font-bold text-white mb-2">{book.title}</div>
                          <div className="font-body text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Coming {book.year}</div>
                        </div>
                      )}
                    </div>

                    {/* Book Info */}
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold mb-1" style={{ color: "var(--an-navy)" }}>{book.title}</h3>
                      {book.subtitle && (
                        <p className="font-body text-xs font-semibold mb-3" style={{ color: author.accentColor }}>{book.subtitle}</p>
                      )}
                      <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "#666" }}>{book.description}</p>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {book.publisher && (
                          <span className="font-body text-xs px-2 py-1 rounded-full" style={{ background: "rgba(31,47,92,0.06)", color: "var(--an-navy)" }}>
                            {book.publisher}
                          </span>
                        )}
                        {book.year && !book.comingSoon && (
                          <span className="font-body text-xs px-2 py-1 rounded-full" style={{ background: "rgba(197,157,47,0.12)", color: "var(--an-gold)" }}>
                            {book.year}
                          </span>
                        )}
                        {book.pages && (
                          <span className="font-body text-xs px-2 py-1 rounded-full" style={{ background: "rgba(31,47,92,0.06)", color: "#888" }}>
                            {book.pages} pages
                          </span>
                        )}
                      </div>

                      {/* Purchase Links */}
                      {!book.comingSoon && (book.amazonUrl || book.barnesUrl) && (
                        <div className="flex gap-3 flex-wrap">
                          {book.amazonUrl && (
                            <a
                              href={book.amazonUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-navy text-xs flex items-center gap-1.5"
                              style={{ padding: "8px 16px" }}
                            >
                              <ExternalLink size={12} /> Amazon
                            </a>
                          )}
                          {book.barnesUrl && (
                            <a
                              href={book.barnesUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-outline text-xs flex items-center gap-1.5"
                              style={{ padding: "8px 16px" }}
                            >
                              <ExternalLink size={12} /> Barnes &amp; Noble
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Coming Soon Placeholder for Authors with No Books Yet */
              <div className="rounded-2xl p-12 text-center" style={{ background: "rgba(31,47,92,0.04)", border: "2px dashed rgba(31,47,92,0.12)" }}>
                <Star size={40} className="mx-auto mb-4" style={{ color: author.accentColor }} />
                <h3 className="font-display text-xl font-bold mb-3" style={{ color: "var(--an-navy)" }}>Coming Soon</h3>
                <p className="font-body text-sm max-w-lg mx-auto" style={{ color: "#888" }}>
                  {author.comingSoonNote}
                </p>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16" style={{ background: "var(--an-navy)" }}>
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Support Our Authors
          </h2>
          <p className="font-body text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.70)" }}>
            Every book purchased supports the ministry of All Nations LDCC and the continued work of Kingdom building in our community and beyond.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/give" className="btn-gold flex items-center gap-2">
              Support the Ministry <ArrowRight size={14} />
            </Link>
            <Link href="/connect" className="btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
