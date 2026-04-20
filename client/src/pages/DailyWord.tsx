// Design: Warm, pastoral, professional — Montserrat/Playfair Display headings, Open Sans body
// Brand: Deep Navy #1A2F6B, Gold #C8901A, Cream #F5F0E8, White #FFFFFF
// Daily Word by Pastor Shelia Blake — April 2026 Theme: Keep the Fire Burning

import { useState } from "react";
import { Flame, Calendar, Share2, Facebook, Instagram, Link2, ChevronDown, ChevronUp, Volume2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const PASTOR_SHELIA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485607175/PdktnDvnsnrtAxYXxEkePm/pastor_shelia_cropped-DzHQnEZvfMxWJAMHJPGhBT.png";

const NAVY = "#1A2F6B";
const GOLD = "#C8901A";
const CREAM = "#F5F0E8";

interface DayEntry {
  day: number;
  date: string; // "April 20, 2026"
  isoDate: string; // "2026-04-20"
  title: string;
  scripture: string;
  verse: string;
  narrative: string[];
  audioUrl?: string;
}

const entries: DayEntry[] = [
  {
    day: 1,
    date: "April 20, 2026",
    isoDate: "2026-04-20",
    title: "The Command That Starts the Fire",
    scripture: "Leviticus 6:13 (KJV)",
    verse: "The fire shall ever be burning upon the altar; it shall never go out.",
    narrative: [
      "The very first instruction God gave about the altar was not how to build it or what to offer on it — it was about the fire. \"Keep it burning. Never let it go out.\" That command still stands over every believer's life today. The fire on the altar was the priest's daily responsibility, not a miracle they waited on. Every morning, fresh wood. Every evening, tended coals. The flame did not survive on yesterday's effort.",
      "This season, we are going back to the altar. We are going to examine the fire in our own lives — the fire of prayer, the fire of praise, the fire of purpose. If it has grown cold, we will stir it. If it is already burning, we will guard it. The God who called us to Himself deserves a fire that never goes out.",
    ],
  },
  {
    day: 2,
    date: "April 21, 2026",
    isoDate: "2026-04-21",
    title: "The Bush That Would Not Burn Up",
    scripture: "Exodus 3:2-3 (KJV)",
    verse: "And the angel of the Lord appeared unto him in a flame of fire out of the midst of a bush: and he looked, and, behold, the bush burned with fire, and the bush was not consumed.",
    narrative: [
      "Moses had been in the wilderness for forty years. Forty years of silence. Forty years of thinking God had forgotten. And then one ordinary day, on an ordinary hillside, he saw something that stopped him — a bush on fire that would not burn up. The fire of God does not destroy what He has called. It marks it. It sets it apart.",
      "You may feel like you have been in a wilderness season. You may feel overlooked. But God is not finished. The same fire that set Moses' life on a new course is still burning today. It calls the forgotten, the disqualified, the ones who thought their best days were behind them. Keep watching. Your bush moment may be closer than you think.",
    ],
  },
  {
    day: 3,
    date: "April 22, 2026",
    isoDate: "2026-04-22",
    title: "A Pillar to Lead You",
    scripture: "Exodus 13:21-22 (KJV)",
    verse: "And the Lord went before them by day in a pillar of a cloud, to lead them the way; and by night in a pillar of fire, to give them light.",
    narrative: [
      "Israel never had to guess which way God was leading. By day, a cloud. By night, a fire. The same God who moved in front of them wanted to be seen — and followed. Notice this: the fire showed up when the cloud could no longer be seen. When life gets dark, God does not disappear. He changes the way He shows Himself.",
      "If you are walking through a dark night right now — a season of uncertainty, loss, or confusion — look up. The pillar is still there. It may not look like what you were used to seeing during the day, but God has not stopped leading. Keep moving. Keep following. The fire is your guide.",
    ],
  },
  {
    day: 4,
    date: "April 23, 2026",
    isoDate: "2026-04-23",
    title: "When the Fire Fell",
    scripture: "Leviticus 9:24 (KJV)",
    verse: "And there came a fire out from before the Lord, and consumed upon the altar the burnt offering and the fat: which when all the people saw, they shouted, and fell on their faces.",
    narrative: [
      "The altar had been built. The offering had been placed. Aaron had done everything the Lord required. And then, without warning, fire fell from heaven and consumed the sacrifice. The response of the people was not polite applause. They shouted. They fell on their faces. That is what happens when the fire of God meets the work of obedient hands.",
      "You do your part. You build the altar. You bring the offering. You live faithfully even when no one is watching. And at the right moment, God answers. He sends the fire. Keep building. Keep offering. Keep showing up. The same God who answered Aaron is the God who sees you right now. Your fire is coming.",
    ],
  },
  {
    day: 5,
    date: "April 24, 2026",
    isoDate: "2026-04-24",
    title: "The Priest's Daily Work",
    scripture: "Leviticus 6:12 (KJV)",
    verse: "And the fire upon the altar shall be burning in it; it shall not be put out: and the priest shall burn wood on it every morning, and lay the burnt offering in order upon it.",
    narrative: [
      "Notice who was responsible for keeping the altar fire going. Not God. The priest. Every single morning, before the sun got too high, before the crowds came, before the duties of the day, the priest had one job — put fresh wood on the fire.",
      "Our relationship with God works the same way. God sends the fire, yes. But we tend it. We put on the wood. We lay the offering in order. No one else can do this for you — not your pastor, not your spouse, not your small group leader. If the fire in your walk with God has grown low, it is not because God stopped showing up. It is because the altar has been unattended. Start tomorrow morning. Put on the wood. He will honor it.",
    ],
  },
  {
    day: 6,
    date: "April 25, 2026",
    isoDate: "2026-04-25",
    title: "New Mercies, New Fire",
    scripture: "Lamentations 3:22-23 (KJV)",
    verse: "It is of the Lord's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.",
    narrative: [
      "Here is a truth that will keep your fire burning: God gives new mercy every single day. He does not run out. He does not grow tired. He does not look at yesterday's failure and hold it against this morning's prayer. His faithfulness is the fuel.",
      "Some of us are trying to run today on yesterday's grace. We are tired because we are living out of an old supply. But fresh mercy is available the moment your eyes open. Receive it. Breathe it in. Let it reignite what has grown cold. The fire on your altar will never outlast the mercy of God — and His mercy is new every morning. You cannot out-need His supply.",
    ],
  },
  {
    day: 7,
    date: "April 26, 2026",
    isoDate: "2026-04-26",
    title: "The Fire That Silenced the Critics",
    scripture: "1 Kings 18:38 (KJV)",
    verse: "Then the fire of the Lord fell, and consumed the burnt sacrifice, and the wood, and the stones, and the dust, and licked up the water that was in the trench.",
    narrative: [
      "Elijah stood on Mount Carmel, outnumbered 450 to one. The prophets of Baal had cried out all day and gotten nothing. Then Elijah stepped up, soaked the altar with water, and prayed a simple prayer. The fire fell. It did not just touch the sacrifice. It consumed everything — the wood, the stones, the dust, the water. Complete. Total. Unmistakable.",
      "When God vindicates you, there will be no doubt. You do not have to defend yourself in every argument. You do not have to prove what God already knows. Keep serving. Keep praying. Keep walking in integrity. The fire that fell on Carmel still falls today. Your answer may take all day — but when it comes, it will leave no room for debate. Trust Him. The fire is coming.",
    ],
  },
  {
    day: 8,
    date: "April 27, 2026",
    isoDate: "2026-04-27",
    title: "Fire Shut Up in My Bones",
    scripture: "Jeremiah 20:9 (KJV)",
    verse: "Then I said, I will not make mention of him, nor speak any more in his name. But his word was in mine heart as a burning fire shut up in my bones, and I was weary with forbearing, and I could not stay.",
    narrative: [
      "Jeremiah tried to quit. He was tired of being mocked. Tired of being persecuted. Tired of speaking a word no one wanted to hear. So he made up his mind: \"I'm done.\" But then the fire showed up. God's word inside of him would not let him stop. It burned in his bones.",
      "Have you ever tried to walk away from your calling? Have you ever said, \"I'm not doing this anymore\"? And then something inside you would not sit still? That is the fire of God. He does not call you and then forget. What He placed in you is stronger than your frustration. Let the fire move you again. The world needs what God put in your bones.",
    ],
  },
  {
    day: 9,
    date: "April 28, 2026",
    isoDate: "2026-04-28",
    title: "When You Walk Through the Fire",
    scripture: "Isaiah 43:2 (KJV)",
    verse: "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.",
    narrative: [
      "God did not promise us that we would avoid the fire. He promised that when we walk through it, we will not be burned. Read that again. The fire is real — but so is His presence. Some fires do not come to destroy us; they come to display Him.",
      "You may be in a fiery season right now. A hard diagnosis. A strained relationship. A financial pressure. A spiritual battle. Hear the promise: you will not be burned. The flames may be hot, but they will not consume you. God is walking through this with you. Do not look for a way out. Look for His face. On the other side of this fire, you will come out smelling like heaven, not smoke.",
    ],
  },
  {
    day: 10,
    date: "April 29, 2026",
    isoDate: "2026-04-29",
    title: "Stir Up the Gift",
    scripture: "2 Timothy 1:6 (KJV)",
    verse: "Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee by the putting on of my hands.",
    narrative: [
      "Paul was writing to Timothy, who was growing weary. The church was hard. The opposition was loud. Timothy was beginning to pull back. And Paul reminded him of something critical: \"Stir up the gift.\" The fire is still in you. The gift did not leave. It just needs to be stirred.",
      "What has God placed in your hand? A teaching gift? A hospitality gift? A song? A prayer ministry? A calling on the mission field? A business that was meant to bless others? Do not let it sit in the ashes. Stir the coals. Put on fresh wood. What God gave you, He never intended to be buried. Today is a good day to get back to what He called you to do. The flame is still there. Stir it.",
    ],
  },
  {
    day: 11,
    date: "April 30, 2026",
    isoDate: "2026-04-30",
    title: "Our God Is a Consuming Fire",
    scripture: "Hebrews 12:29 (KJV)",
    verse: "For our God is a consuming fire.",
    narrative: [
      "We do not serve a casual God. We serve a consuming fire. Everything about Him is total. His love is total. His holiness is total. His mercy is total. His judgment is total. He does not dabble. He does not partly show up. When He is present, He consumes the room.",
      "This truth is meant to wake us up. We cannot approach a consuming fire with a half-hearted faith. We cannot worship a consuming fire with one eye on the world. He deserves all of us. Today, take inventory. Where have you been holding back? Where have you been giving Him leftovers? Bring it all. Lay it down. The consuming fire will not destroy what you surrender to Him — He will purify it and make it burn with His own glory.",
    ],
  },
];

function getTodayEntry(): DayEntry | null {
  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];
  return entries.find(e => e.isoDate === todayStr) || null;
}

function getEntryStatus(isoDate: string): "past" | "today" | "future" {
  const today = new Date().toISOString().split("T")[0];
  if (isoDate < today) return "past";
  if (isoDate === today) return "today";
  return "future";
}

function AudioPlayer({ audioUrl, dayTitle }: { audioUrl?: string; dayTitle: string }) {
  if (audioUrl) {
    return (
      <div className="rounded-2xl p-4 mb-6" style={{ background: NAVY }}>
        <div className="flex items-center gap-3 mb-3">
          <Volume2 size={18} style={{ color: GOLD }} />
          <span className="font-body font-bold text-sm text-white">Listen to Today's Word</span>
        </div>
        <audio controls className="w-full" style={{ accentColor: GOLD }}>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
  return (
    <div className="rounded-2xl p-4 mb-6 flex items-center gap-3" style={{ background: "rgba(26,47,107,0.07)", border: `1.5px dashed ${GOLD}` }}>
      <Volume2 size={18} style={{ color: GOLD }} />
      <div>
        <p className="font-body font-bold text-sm" style={{ color: NAVY }}>Audio Coming Soon</p>
        <p className="font-body text-xs" style={{ color: "#888" }}>Voice recording for this day will be uploaded shortly.</p>
      </div>
    </div>
  );
}

function ShareButtons({ title, date }: { title: string; date: string }) {
  const url = window.location.href;
  const text = `"${title}" — Daily Word by Pastor Shelia Blake, ${date}. All Nations LDCC`;

  return (
    <div className="flex items-center gap-3 flex-wrap pt-4" style={{ borderTop: `1px solid #eee` }}>
      <span className="font-body text-xs font-bold" style={{ color: "#999" }}>Share:</span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-bold transition-opacity hover:opacity-80"
        style={{ background: "#1877F2", color: "#fff" }}
      >
        <Facebook size={12} /> Facebook
      </a>
      <a
        href={`https://www.instagram.com/`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-bold transition-opacity hover:opacity-80"
        style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", color: "#fff" }}
      >
        <Instagram size={12} /> Instagram
      </a>
      <button
        onClick={() => { navigator.clipboard.writeText(url); toast.success("Link copied!"); }}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-bold transition-opacity hover:opacity-80"
        style={{ background: "#eee", color: "#333" }}
      >
        <Link2 size={12} /> Copy Link
      </button>
    </div>
  );
}

function TodayCard({ entry }: { entry: DayEntry }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border-2 max-w-2xl mx-auto" style={{ borderColor: GOLD, background: "#fff" }}>
      {/* Card header */}
      <div className="px-8 py-5 flex items-center justify-between" style={{ background: NAVY }}>
        <div className="flex items-center gap-2">
          <Flame size={16} style={{ color: GOLD }} />
          <span className="font-body font-bold text-xs tracking-widest uppercase" style={{ color: GOLD }}>
            Today's Word • {entry.date}
          </span>
        </div>
        <span className="font-body text-xs px-3 py-1 rounded-full font-bold" style={{ background: GOLD, color: NAVY }}>
          Day {entry.day}
        </span>
      </div>
      {/* Card body */}
      <div className="px-8 py-8">
        <h2 className="font-display text-3xl font-bold mb-2 leading-tight" style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
          {entry.title}
        </h2>
        <p className="font-body font-bold text-sm mb-3" style={{ color: GOLD }}>
          {entry.scripture}
        </p>
        <blockquote className="font-body text-base italic leading-relaxed mb-6 pl-4" style={{ color: "#444", borderLeft: `3px solid ${GOLD}` }}>
          "{entry.verse}"
        </blockquote>
        <AudioPlayer audioUrl={entry.audioUrl} dayTitle={entry.title} />
        {entry.narrative.map((para, i) => (
          <p key={i} className="font-body text-base leading-relaxed mb-4" style={{ color: "#333" }}>
            {para}
          </p>
        ))}
        <ShareButtons title={entry.title} date={entry.date} />
      </div>
    </div>
  );
}

function ArchiveCard({ entry }: { entry: DayEntry }) {
  const status = getEntryStatus(entry.isoDate);
  const [expanded, setExpanded] = useState(false);

  if (status === "future") {
    return (
      <div className="rounded-2xl p-5 border-2 border-dashed" style={{ borderColor: "#ddd", background: "#fafafa" }}>
        <div className="font-body font-bold text-xs mb-2" style={{ color: "#bbb" }}>
          DAY {entry.day} • {entry.date.toUpperCase()}
        </div>
        <p className="font-body text-sm font-bold" style={{ color: "#ccc" }}>Coming {entry.date}</p>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl border-2 overflow-hidden transition-shadow hover:shadow-lg cursor-pointer"
      style={{ borderColor: status === "today" ? GOLD : "#e5e5e5", background: "#fff" }}
      onClick={() => setExpanded(v => !v)}
    >
      <div className="px-5 py-4">
        <div className="flex items-center justify-between mb-1">
          <span className="font-body font-bold text-xs" style={{ color: GOLD }}>
            DAY {entry.day} • {entry.date.toUpperCase()}
          </span>
          {status === "today" && (
            <span className="font-body text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: GOLD, color: NAVY }}>Today</span>
          )}
        </div>
        <h3 className="font-display font-bold text-base leading-snug mb-1" style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
          {entry.title}
        </h3>
        <p className="font-body text-xs mb-3" style={{ color: "#888" }}>{entry.scripture}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Volume2 size={13} style={{ color: entry.audioUrl ? GOLD : "#ccc" }} />
            <span className="font-body text-xs" style={{ color: entry.audioUrl ? GOLD : "#ccc" }}>
              {entry.audioUrl ? "Audio available" : "Audio coming soon"}
            </span>
          </div>
          {expanded ? <ChevronUp size={16} style={{ color: "#999" }} /> : <ChevronDown size={16} style={{ color: "#999" }} />}
        </div>
      </div>
      {expanded && (
        <div className="px-5 pb-5 border-t" style={{ borderColor: "#f0f0f0" }}>
          <blockquote className="font-body text-sm italic leading-relaxed my-4 pl-3" style={{ color: "#555", borderLeft: `2px solid ${GOLD}` }}>
            "{entry.verse}"
          </blockquote>
          <AudioPlayer audioUrl={entry.audioUrl} dayTitle={entry.title} />
          {entry.narrative.map((para, i) => (
            <p key={i} className="font-body text-sm leading-relaxed mb-3" style={{ color: "#444" }}>{para}</p>
          ))}
          <ShareButtons title={entry.title} date={entry.date} />
        </div>
      )}
    </div>
  );
}

export default function DailyWord() {
  const todayEntry = getTodayEntry();

  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <Navbar />

      {/* SECTION 1 — HERO BANNER */}
      <section style={{ background: NAVY, borderTop: `4px solid ${GOLD}`, borderBottom: `4px solid ${GOLD}` }}>
        <div className="container py-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={PASTOR_SHELIA} alt="Pastor Shelia Blake" className="w-14 h-14 rounded-full object-cover object-top border-2" style={{ borderColor: GOLD }} />
            <div className="text-left">
              <p className="font-body font-bold text-sm text-white">Pastor Shelia Blake</p>
              <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Executive Pastor, All Nations LDCC</p>
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            KEEP THE FIRE BURNING
          </h1>
          <p className="font-body font-bold text-base mb-2" style={{ color: GOLD }}>April 2026 Daily Word Theme</p>
          <p className="font-body text-sm italic" style={{ color: "rgba(255,255,255,0.70)" }}>
            A Daily Word for the Soul that Refuses to Grow Cold
          </p>
        </div>
      </section>

      {/* SECTION 2 — TODAY'S DAILY WORD */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 font-body font-bold text-sm" style={{ background: `rgba(200,144,26,0.12)`, color: GOLD }}>
              <Flame size={14} /> Daily Word
            </div>
            <h2 className="font-display text-3xl font-bold" style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
              {todayEntry ? "Today's Word" : "April 2026 Daily Word"}
            </h2>
          </div>

          {todayEntry ? (
            <TodayCard entry={todayEntry} />
          ) : (
            <div className="max-w-2xl mx-auto rounded-3xl p-10 text-center border-2 border-dashed" style={{ borderColor: GOLD, background: "#fff" }}>
              <Flame size={48} className="mx-auto mb-4" style={{ color: GOLD }} />
              <h3 className="font-display text-2xl font-bold mb-3" style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
                The Fire Is Still Burning
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: "#666" }}>
                The April 2026 Daily Word series runs April 20–30. Browse the full archive below to read any day's word.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3 — APRIL ARCHIVE GRID */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar size={18} style={{ color: GOLD }} />
              <h2 className="font-display text-3xl font-bold" style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
                April 2026 Daily Word Archive
              </h2>
            </div>
            <p className="font-body text-base" style={{ color: GOLD }}>Walk the full Keep the Fire Burning series</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {entries.map(entry => (
              <ArchiveCard key={entry.day} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — SUBSCRIBE / FOLLOW */}
      <section className="py-16" style={{ background: CREAM }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Flame size={36} className="mx-auto mb-4" style={{ color: GOLD }} />
            <h2 className="font-display text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
              Never Miss a Daily Word
            </h2>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: "#555" }}>
              Follow All Nations Life Development Christian Center on Facebook for daily encouragement, and join us Sunday in person or online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.facebook.com/allnationsldcc"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#1877F2", color: "#fff" }}
              >
                <Facebook size={16} /> Follow on Facebook
              </a>
              <a
                href="/"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm border-2 transition-opacity hover:opacity-80"
                style={{ borderColor: NAVY, color: NAVY, background: "#fff" }}
              >
                Visit Our Website
              </a>
              <a
                href="/connect"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: GOLD, color: "#fff" }}
              >
                Sunday Service Info
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Small credit line above footer */}
      <div className="py-3 text-center" style={{ background: NAVY }}>
        <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.50)" }}>
          Daily Word by Pastor Shelia Blake • All Nations Life Development Christian Center • Port St. Lucie, FL
        </p>
      </div>
    </div>
  );
}
