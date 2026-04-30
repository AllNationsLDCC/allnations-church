// Design: Warm, pastoral, professional — Playfair Display headings, Open Sans body
// Brand: Deep Navy #1A2F6B | Gold #C8901A | Cream #F5F0E8 | White #FFFFFF | Dark #222222
// Daily Word by Pastor Shelia Blake — April 2026 Theme: Keep the Fire Burning

import { useState } from "react";
import { Flame, Calendar, Facebook, Instagram, Link2, ChevronDown, ChevronUp, Volume2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const PASTOR_SHELIA = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485607175/PdktnDvnsnrtAxYXxEkePm/pastor_shelia_cropped-DzHQnEZvfMxWJAMHJPGhBT.png";

const NAVY = "#1A2F6B";
const GOLD = "#C8901A";
const CREAM = "#F5F0E8";

interface DayEntry {
  day: number;
  date: string;
  isoDate: string;
  title: string;
  scripture: string;
  verse: string;
  welcome: string;
  keyPoints: string[];
  callToAction: string;
  close: string;
  audioUrl?: string;
  imageUrl?: string;
}

const entries: DayEntry[] = [
  {
    day: 1, date: "April 20, 2026", isoDate: "2026-04-20",
    title: "The Command That Starts the Fire",
    scripture: "Leviticus 6:13 (KJV)",
    verse: "The fire shall ever be burning upon the altar; it shall never go out.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 1 of our April Daily Word series — Keep the Fire Burning.",
    keyPoints: [
      "The very first instruction God gave about the altar was not how to build it or what to offer on it — it was about the fire. 'Keep it burning. Never let it go out.' That command still stands over every believer's life today.",
      "The fire on the altar was the priest's daily responsibility, not a miracle they waited on. Every morning, fresh wood. Every evening, tended coals. The flame did not survive on yesterday's effort.",
      "This season, we are going back to the altar. We are going to examine the fire in our own lives — the fire of prayer, the fire of praise, the fire of purpose. If it has grown cold, we will stir it. If it is already burning, we will guard it.",
    ],
    callToAction: "The God who called us to Himself deserves a fire that never goes out. Today, ask yourself: what does my altar look like right now? Is there fresh wood on it?",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/XhAfraUdUAePNsfP.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/enwptABUooxaWtTs.jpg",
  },
  {
    day: 2, date: "April 21, 2026", isoDate: "2026-04-21",
    title: "The Bush That Would Not Burn Up",
    scripture: "Exodus 3:2-3 (KJV)",
    verse: "And the angel of the Lord appeared unto him in a flame of fire out of the midst of a bush: and he looked, and, behold, the bush burned with fire, and the bush was not consumed.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 2 of Keep the Fire Burning.",
    keyPoints: [
      "Moses had been in the wilderness for forty years. Forty years of silence. Forty years of thinking God had forgotten. And then one ordinary day, on an ordinary hillside, he saw something that stopped him — a bush on fire that would not burn up.",
      "The fire of God does not destroy what He has called. It marks it. It sets it apart. You may feel like you have been in a wilderness season. You may feel overlooked. But God is not finished.",
      "The same fire that set Moses' life on a new course is still burning today. It calls the forgotten, the disqualified, the ones who thought their best days were behind them.",
    ],
    callToAction: "Keep watching. Your bush moment may be closer than you think. Do not walk past the ordinary moments — God may be speaking right in the middle of one.",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/mlXTqtHAXIgAKQqF.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/PcMdiKxURQWaEbRi.jpg",
  },
  {
    day: 3, date: "April 22, 2026", isoDate: "2026-04-22",
    title: "Elijah and the Still Small Voice",
    scripture: "1 Kings 19:12 (KJV)",
    verse: "And after the earthquake a fire; but the Lord was not in the fire: and after the fire a still small voice.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 3 of Keep the Fire Burning.",
    keyPoints: [
      "Elijah had just called down fire from heaven on Mount Carmel, but soon after, he found himself running for his life, hiding in a cave, looking for God in the dramatic. He looked for Him in the wind, the earthquake, and the fire.",
      "But God was not in the fire this time. He was in the still, small voice. Sometimes, keeping your fire burning does not mean looking for the next big, explosive moment. It means getting quiet enough to hear the whisper of God.",
      "The fire of your faith is sustained just as much in the quiet, hidden moments of obedience as it is in the public victories. Do not ignore the whisper while you are waiting for the roar.",
    ],
    callToAction: "Today, find a quiet place. Turn off the noise, silence the distractions, and listen for the still, small voice. He is speaking.",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/AEKUUZyqoqLGsyUe.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ikmPtfXmwdZJhcHA.jpg",
  },
  {
    day: 4, date: "April 23, 2026", isoDate: "2026-04-23",
    title: "When the Fire Fell",
    scripture: "Leviticus 9:24 (KJV)",
    verse: "And there came a fire out from before the Lord, and consumed upon the altar the burnt offering and the fat: which when all the people saw, they shouted, and fell on their faces.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 4 of Keep the Fire Burning.",
    keyPoints: [
      "The altar had been built. The offering had been placed. Aaron had done everything the Lord required. And then, without warning, fire fell from heaven and consumed the sacrifice.",
      "The response of the people was not polite applause. They shouted. They fell on their faces. That is what happens when the fire of God meets the work of obedient hands.",
      "You do your part. You build the altar. You bring the offering. You live faithfully even when no one is watching. And at the right moment, God answers. He sends the fire.",
    ],
    callToAction: "Keep building. Keep offering. Keep showing up. The same God who answered Aaron is the God who sees you right now. Your fire is coming.",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/TNCZaDuSVVGGFKoj.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/vOtihoIKiEWePuAG.jpg",
  },
  {
    day: 5, date: "April 24, 2026", isoDate: "2026-04-24",
    title: "Tongues of Fire",
    scripture: "Acts 2:3 (KJV)",
    verse: "And there appeared unto them cloven tongues like as of fire, and it sat upon each of them.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 5 of Keep the Fire Burning.",
    keyPoints: [
      "The believers were gathered in one place, in one accord, waiting for the promise. And when the Holy Ghost fell, He did not come quietly. He came with the sound of a rushing mighty wind, and He appeared as cloven tongues of fire.",
      "Notice that the fire did not just fill the room — it sat upon each of them individually. God's fire is personal. He wants to ignite your life, your prayer language, and your witness.",
      "When the fire of the Holy Ghost sits on you, it changes the way you speak, the way you love, and the way you live. It is a fire that empowers you to be a bold witness for Jesus Christ.",
    ],
    callToAction: "Ask the Holy Spirit to fall fresh on you today. Let His fire ignite your words and your actions. Do not settle for an ember when God has promised a blaze.",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/AmBUYQUKkfCLWmYC.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/QOQCZxNqKuSCWYpm.jpg",
  },
  {
    day: 6, date: "April 25, 2026", isoDate: "2026-04-25",
    title: "Stir Up the Gift",
    scripture: "2 Timothy 1:6 (KJV)",
    verse: "Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee by the putting on of my hands.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 6 of Keep the Fire Burning.",
    keyPoints: [
      "Paul was writing to Timothy, who was growing weary. The church was hard. The opposition was loud. Timothy was beginning to pull back. And Paul reminded him of something critical: 'Stir up the gift.' The fire is still in you. The gift did not leave. It just needs to be stirred.",
      "What has God placed in your hand? A teaching gift? A hospitality gift? A song? A prayer ministry? A calling on the mission field? A business that was meant to bless others?",
      "Do not let it sit in the ashes. Stir the coals. Put on fresh wood. What God gave you, He never intended to be buried.",
    ],
    callToAction: "Today is a good day to get back to what He called you to do. The flame is still there. Stir it.",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/genKElAzzoqajEKB.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/cAccovEIyKWlERhW.jpg",
  },
  {
    day: 7, date: "April 26, 2026", isoDate: "2026-04-26",
    title: "The Refiner's Fire",
    scripture: "Malachi 3:2 (KJV)",
    verse: "But who may abide the day of his coming? and who shall stand when he appeareth? for he is like a refiner's fire, and like fullers' soap.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 7 of Keep the Fire Burning.",
    keyPoints: [
      "We often pray for the fire of God to bless us, to empower us, and to lead us. But Malachi reminds us of another kind of fire — the refiner's fire. This fire does not come to comfort; it comes to cleanse.",
      "A refiner uses fire to melt down silver and gold, burning away all the dross and impurities until he can see his own reflection in the metal. God uses the heat of our circumstances to burn away what does not look like Him.",
      "If you feel like you are in the heat of the fire right now, do not run from it. God is not trying to destroy you. He is purifying you. He is making you holy.",
    ],
    callToAction: "Surrender to the refining process today. Ask God to burn away anything in your life that does not bring Him glory. Trust the hands of the Refiner.",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/jfqPuYCOvsfZorvP.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/RxqfKiLJfBLyMHta.jpg",
  },
  {
    day: 8, date: "April 27, 2026", isoDate: "2026-04-27",
    title: "The Road to Emmaus",
    scripture: "Luke 24:32 (KJV)",
    verse: "And they said one to another, Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures?",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 8 of Keep the Fire Burning.",
    keyPoints: [
      "Two disciples were walking away from Jerusalem, defeated and confused. They thought the story was over. But Jesus joined them on the road, walking right beside them in their disappointment.",
      "As He opened the Scriptures and revealed the truth, something shifted inside them. Later, they realized what had happened: 'Did not our heart burn within us?' The Word of God had reignited their hope.",
      "When you are walking through a season of doubt or grief, the quickest way to get your fire back is to get back into the Word. The presence of Jesus and the truth of Scripture will make a cold heart burn again.",
    ],
    callToAction: "Open your Bible today. Do not just read it — let Jesus speak to you through it. Let His Word start a fire in your heart.",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/RVpsFvjiLEvkWmyV.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/JPsINXNCwdwroLyq.jpg",
  },
  {
    day: 9, date: "April 28, 2026", isoDate: "2026-04-28",
    title: "Jeremiah's Burning Bones",
    scripture: "Jeremiah 20:9 (KJV)",
    verse: "Then I said, I will not make mention of him, nor speak any more in his name. But his word was in mine heart as a burning fire shut up in my bones, and I was weary with forbearing, and I could not stay.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 9 of Keep the Fire Burning.",
    keyPoints: [
      "Jeremiah tried to quit. He was tired of being mocked. Tired of being persecuted. Tired of speaking a word no one wanted to hear. So he made up his mind: 'I'm done.' But then the fire showed up.",
      "God's word inside of him would not let him stop. It burned in his bones. Have you ever tried to walk away from your calling? Have you ever said, 'I'm not doing this anymore'?",
      "And then something inside you would not sit still? That is the fire of God. He does not call you and then forget. What He placed in you is stronger than your frustration.",
    ],
    callToAction: "Let the fire move you again. The world needs what God put in your bones. Do not let weariness have the final word.",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NgZkoTqlNPcJXAte.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ctOuYlXwFmabXXEa.jpg",
  },
  {
    day: 10, date: "April 29, 2026", isoDate: "2026-04-29",
    title: "The Lampstand That Must Not Go Out",
    scripture: "Exodus 27:20 (KJV)",
    verse: "And thou shalt command the children of Israel, that they bring thee pure oil olive beaten for the light, to cause the lamp to burn always.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 10 of Keep the Fire Burning.",
    keyPoints: [
      "In the tabernacle, the golden lampstand was the only source of light in the Holy Place. God commanded that it must burn always. It was never allowed to go out. But to keep it burning, it required pure, beaten olive oil.",
      "Fire needs fuel. You cannot expect the light of your faith to shine brightly if you are not continually filled with the oil of the Holy Spirit. The oil comes from crushing, from pressing, from time spent in His presence.",
      "We are called to be the light of the world, but we cannot shine on our own strength. We must be constantly replenished.",
    ],
    callToAction: "Check your oil today. Are you running on empty? Spend time in prayer and worship, and let the Holy Spirit fill you fresh so your lamp will burn always.",
    close: "I love you, All Nations. Keep the fire burning. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/RXXQPkMIIxMIbkCt.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/nKVspWnQSQauMvck.jpg",
  },
  {
    day: 11, date: "April 30, 2026", isoDate: "2026-04-30",
    title: "Our God Is a Consuming Fire",
    scripture: "Hebrews 12:29 (KJV)",
    verse: "For our God is a consuming fire.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to the final day of our April series — Keep the Fire Burning.",
    keyPoints: [
      "We do not serve a casual God. We serve a consuming fire. Everything about Him is total. His love is total. His holiness is total. His mercy is total. His judgment is total. He does not dabble. He does not partly show up. When He is present, He consumes the room.",
      "This truth is meant to wake us up. We cannot approach a consuming fire with a half-hearted faith. We cannot worship a consuming fire with one eye on the world. He deserves all of us.",
      "Today, take inventory. Where have you been holding back? Where have you been giving Him leftovers? Bring it all. Lay it down.",
    ],
    callToAction: "The consuming fire will not destroy what you surrender to Him — He will purify it and make it burn with His own glory. Give Him everything.",
    close: "Thank you for walking through this April series with me. The fire is still burning — and it will never go out. I love you, All Nations. See you Sunday.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/XSkgvpVkuWCTeqET.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/cxnfGVzTbKxgtvqO.jpg",
  },
  {
    day: 1, date: "May 1, 2026", isoDate: "2026-05-01",
    title: "Arise and Shine",
    scripture: "Isaiah 60:1 (KJV)",
    verse: "Arise, shine; for thy light is come, and the glory of the Lord is risen upon thee.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 1 of our May series — Arise and Take Flight.",
    keyPoints: [
      "Women of God, the runway is clear. The holding pattern is over. It is time to arise and shine. God did not call you to stay grounded when He gave you the wings to soar.",
      "You have been waiting for the right season, the right opportunity — but God is saying, 'Thy light is come.' Your time is now. Do not let fear keep you taxiing on the runway.",
      "When an airplane takes off, it pushes against the wind — not with it. The resistance you have been feeling is not there to stop you. It is there to lift you up.",
    ],
    callToAction: "It is time to lift your nose and pull back the throttle. Leave the baggage on the ground. Arise, shine, and take flight today.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/aOLHCSnQUyIzVFnQ.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/QVnDVkTEskkkGstn.jpg",
  },
  {
    day: 2, date: "May 2, 2026", isoDate: "2026-05-02",
    title: "Mount Up With Wings",
    scripture: "Isaiah 40:31 (KJV)",
    verse: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 2 of Arise and Take Flight.",
    keyPoints: [
      "An airplane does not fly on its own power alone. It uses the aerodynamics of the wind. When you wait on the Lord, you are not just sitting idle. You are positioning yourself to catch His wind.",
      "Some of you are exhausted from flapping your own wings, trying to make things happen in your own strength. But God says, 'Wait on me, and I will renew your strength.'",
      "When you finally catch the thermal currents of the Holy Spirit, you stop striving and start soaring. You mount up with wings as eagles. The altitude changes everything.",
    ],
    callToAction: "Stop trying to force the takeoff. Wait on the Lord, catch His wind, and let Him carry you higher than you could ever go on your own.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/XOGtgWaWntLvkaAV.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/rhygsXqCqLsWAifC.jpg",
  },
  {
    day: 3, date: "May 3, 2026", isoDate: "2026-05-03",
    title: "Awake, Deborah, Awake",
    scripture: "Judges 5:12 (KJV)",
    verse: "Awake, awake, Deborah: awake, awake, utter a song: arise, Barak, and lead thy captivity captive.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 3 of Arise and Take Flight.",
    keyPoints: [
      "Deborah was a mother in Israel, a prophetess, and a judge. But there came a moment when she had to awake and take her position. The nation was in crisis, and God needed a woman to arise.",
      "Sometimes the hardest part of the flight is waking up to your own potential. You have been sleeping on your gifts. You have been downplaying your calling. But God is saying, 'Awake, awake!'",
      "Your family needs you to arise. Your community needs you to take flight. You carry a song of victory that the enemy cannot silence. It is time to lead your captivity captive.",
    ],
    callToAction: "Shake off the slumber today. Step into the cockpit of your calling. God has given you the authority to arise and lead.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/AQyYsJtXNQGOfpbB.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ZcvPNPrpaWeDUprc.jpg",
  },
];

function getTodayEntry(): DayEntry | null {
  const today = new Date().toISOString().split("T")[0];
  return entries.find(e => e.isoDate === today) || null;
}

function getEntryStatus(isoDate: string): "past" | "today" | "future" {
  const today = new Date().toISOString().split("T")[0];
  if (isoDate < today) return "past";
  if (isoDate === today) return "today";
  return "future";
}

function AudioPlayer({ audioUrl }: { audioUrl?: string }) {
  if (audioUrl) {
    return (
      <div className="rounded-2xl p-5 mb-6" style={{ background: NAVY }}>
        <div className="flex items-center gap-2 mb-3">
          <Volume2 size={16} style={{ color: GOLD }} />
          <span className="font-body font-bold text-sm text-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Listen to Today's Word
          </span>
        </div>
        <audio controls className="w-full" style={{ accentColor: GOLD }}>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
  return (
    <div className="rounded-2xl p-4 mb-6 flex items-center gap-3"
      style={{ background: `rgba(200,144,26,0.08)`, border: `1.5px dashed ${GOLD}` }}>
      <Volume2 size={18} style={{ color: GOLD }} />
      <div>
        <p className="font-body font-bold text-sm" style={{ color: NAVY, fontFamily: "'Open Sans', sans-serif" }}>
          Audio Coming Soon
        </p>
        <p className="font-body text-xs" style={{ color: "#888", fontFamily: "'Open Sans', sans-serif" }}>
          Voice recording will be uploaded shortly.
        </p>
      </div>
    </div>
  );
}

function ShareButtons({ title, date }: { title: string; date: string }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <div className="flex items-center gap-3 flex-wrap pt-5 mt-5" style={{ borderTop: `1px solid #e8e0d0` }}>
      <span className="font-body text-xs font-bold" style={{ color: "#aaa", fontFamily: "'Open Sans', sans-serif" }}>Share:</span>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-opacity hover:opacity-80"
        style={{ background: "#1877F2", color: "#fff", fontFamily: "'Open Sans', sans-serif" }}>
        <Facebook size={12} /> Facebook
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-opacity hover:opacity-80"
        style={{ background: "linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", color: "#fff", fontFamily: "'Open Sans', sans-serif" }}>
        <Instagram size={12} /> Instagram
      </a>
      <button onClick={() => { navigator.clipboard.writeText(url); toast.success("Link copied!"); }}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-opacity hover:opacity-80"
        style={{ background: "#eee", color: "#333", fontFamily: "'Open Sans', sans-serif" }}>
        <Link2 size={12} /> Copy Link
      </button>
    </div>
  );
}

function DayContent({ entry }: { entry: DayEntry }) {
  return (
    <div>
      {/* Audio Player */}
      <AudioPlayer audioUrl={entry.audioUrl} />

      {/* Welcome */}
      <p className="font-body text-base leading-relaxed mb-5" style={{ color: "#444", fontFamily: "'Open Sans', sans-serif" }}>
        {entry.welcome}
      </p>

      {/* Scripture Block */}
      <div className="rounded-xl p-5 mb-5" style={{ background: CREAM, borderLeft: `4px solid ${GOLD}` }}>
        <p className="font-body font-bold text-sm mb-2" style={{ color: NAVY, fontFamily: "'Open Sans', sans-serif" }}>
          {entry.scripture}
        </p>
        <blockquote className="font-body text-base italic leading-relaxed" style={{ color: "#333", fontFamily: "'Playfair Display', Georgia, serif" }}>
          "{entry.verse}"
        </blockquote>
      </div>

      {/* Key Points */}
      {entry.keyPoints.map((point, i) => (
        <p key={i} className="font-body text-base leading-relaxed mb-4" style={{ color: "#333", fontFamily: "'Open Sans', sans-serif" }}>
          {point}
        </p>
      ))}

      {/* Call to Action */}
      <div className="rounded-xl p-5 mb-5" style={{ background: `rgba(200,144,26,0.10)`, borderLeft: `4px solid ${GOLD}` }}>
        <p className="font-body text-base leading-relaxed font-semibold" style={{ color: NAVY, fontFamily: "'Open Sans', sans-serif" }}>
          {entry.callToAction}
        </p>
      </div>

      {/* Close */}
      <p className="font-body text-base italic leading-relaxed" style={{ color: "#666", fontFamily: "'Open Sans', sans-serif" }}>
        {entry.close}
      </p>
    </div>
  );
}

function TodayCard({ entry }: { entry: DayEntry }) {
  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl border-2 max-w-2xl mx-auto"
      style={{ borderColor: NAVY, background: "#fff" }}>
      {/* Header */}
      <div className="px-8 py-5 flex items-center justify-between" style={{ background: NAVY }}>
        <div className="flex items-center gap-2">
          <Flame size={15} style={{ color: GOLD }} />
          <span className="font-body font-bold text-xs tracking-widest uppercase" style={{ color: GOLD, fontFamily: "'Open Sans', sans-serif" }}>
            Today's Word • {entry.date}
          </span>
        </div>
        <span className="font-body text-xs font-bold px-3 py-1 rounded-full" style={{ background: GOLD, color: NAVY, fontFamily: "'Open Sans', sans-serif" }}>
          Day {entry.day}
        </span>
      </div>
      {/* Featured Graphic */}
      {entry.imageUrl && (
        <div className="w-full overflow-hidden" style={{ maxHeight: "280px" }}>
          <img src={entry.imageUrl} alt={entry.title}
            className="w-full object-cover object-center"
            style={{ maxHeight: "280px" }} />
        </div>
      )}
      {/* Body */}
      <div className="px-8 py-8">
        <h2 className="font-display text-3xl font-bold mb-6 leading-tight"
          style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
          {entry.title}
        </h2>
        <DayContent entry={entry} />
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
        <div className="font-body font-bold text-xs mb-2" style={{ color: "#bbb", fontFamily: "'Open Sans', sans-serif" }}>
          DAY {entry.day} • {entry.date.toUpperCase()}
        </div>
        <p className="font-body text-sm font-bold" style={{ color: "#ccc", fontFamily: "'Open Sans', sans-serif" }}>
          Coming {entry.date}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 overflow-hidden transition-shadow hover:shadow-lg"
      style={{ borderColor: status === "today" ? GOLD : "#e5e5e5", background: "#fff" }}>
      <div className="px-5 py-4 cursor-pointer" onClick={() => setExpanded(v => !v)}>
        <div className="flex items-center justify-between mb-1">
          <span className="font-body font-bold text-xs" style={{ color: GOLD, fontFamily: "'Open Sans', sans-serif" }}>
            DAY {entry.day} • {entry.date.toUpperCase()}
          </span>
          {status === "today" && (
            <span className="font-body text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: GOLD, color: NAVY, fontFamily: "'Open Sans', sans-serif" }}>Today</span>
          )}
        </div>
        <h3 className="font-display font-bold text-base leading-snug mb-1"
          style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
          {entry.title}
        </h3>
        <p className="font-body text-xs mb-3" style={{ color: "#888", fontFamily: "'Open Sans', sans-serif" }}>
          {entry.scripture}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Volume2 size={13} style={{ color: entry.audioUrl ? GOLD : "#ccc" }} />
            <span className="font-body text-xs" style={{ color: entry.audioUrl ? GOLD : "#ccc", fontFamily: "'Open Sans', sans-serif" }}>
              {entry.audioUrl ? "Audio available" : "Audio coming soon"}
            </span>
          </div>
          {expanded ? <ChevronUp size={16} style={{ color: "#999" }} /> : <ChevronDown size={16} style={{ color: "#999" }} />}
        </div>
      </div>
      {expanded && (
        <div className="pb-6" style={{ borderTop: `1px solid #f0f0f0` }}>
          {entry.imageUrl && (
            <div className="w-full overflow-hidden" style={{ maxHeight: "200px" }}>
              <img src={entry.imageUrl} alt={entry.title}
                className="w-full object-cover object-center"
                style={{ maxHeight: "200px" }} />
            </div>
          )}
          <div className="px-5 pt-4">
            <DayContent entry={entry} />
            <ShareButtons title={entry.title} date={entry.date} />
          </div>
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={PASTOR_SHELIA} alt="Pastor Shelia Blake"
              className="w-16 h-16 rounded-full object-cover object-top border-2"
              style={{ borderColor: GOLD }} />
            <div className="text-left">
              <p className="font-body font-bold text-sm text-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
                Pastor Shelia Blake
              </p>
              <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Open Sans', sans-serif" }}>
                Executive Pastor, All Nations LDCC
              </p>
            </div>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-3 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            KEEP THE FIRE BURNING
          </h1>
          <p className="font-body font-bold text-base mb-2" style={{ color: GOLD, fontFamily: "'Open Sans', sans-serif" }}>
            April 2026 Daily Word Theme
          </p>
          <p className="font-body text-sm italic" style={{ color: "rgba(255,255,255,0.70)", fontFamily: "'Open Sans', sans-serif" }}>
            A Daily Word for the Soul that Refuses to Grow Cold
          </p>
          <p className="font-body text-xs mt-3" style={{ color: "rgba(255,255,255,0.50)", fontFamily: "'Open Sans', sans-serif" }}>
            With Pastor Shelia Blake, Executive Pastor
          </p>
        </div>
      </section>

      {/* SECTION 2 — TODAY'S DAILY WORD */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 font-body font-bold text-sm"
              style={{ background: `rgba(200,144,26,0.12)`, color: GOLD, fontFamily: "'Open Sans', sans-serif" }}>
              <Flame size={14} /> Daily Word
            </div>
            <h2 className="font-display text-3xl font-bold"
              style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
              {todayEntry ? "Today's Word" : "April 2026 Daily Word"}
            </h2>
          </div>

          {todayEntry ? (
            <TodayCard entry={todayEntry} />
          ) : (
            <div className="max-w-2xl mx-auto rounded-3xl p-10 text-center border-2 border-dashed"
              style={{ borderColor: GOLD, background: "#fff" }}>
              <Flame size={48} className="mx-auto mb-4" style={{ color: GOLD }} />
              <h3 className="font-display text-2xl font-bold mb-3"
                style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
                The Fire Is Still Burning
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: "#666", fontFamily: "'Open Sans', sans-serif" }}>
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
              <h2 className="font-display text-3xl font-bold"
                style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
                April 2026 Daily Word Archive
              </h2>
            </div>
            <p className="font-body text-base" style={{ color: GOLD, fontFamily: "'Open Sans', sans-serif" }}>
              Walk the full Keep the Fire Burning series
            </p>
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
            <h2 className="font-display text-3xl font-bold mb-3"
              style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
              Never Miss a Daily Word
            </h2>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: "#555", fontFamily: "'Open Sans', sans-serif" }}>
              Follow All Nations Life Development Christian Center on Facebook for daily encouragement, and join us Sunday in person or online.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://www.facebook.com/allnationsldcc" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#1877F2", color: "#fff", fontFamily: "'Open Sans', sans-serif" }}>
                <Facebook size={16} /> Follow on Facebook
              </a>
              <a href="/"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm border-2 transition-opacity hover:opacity-80"
                style={{ borderColor: NAVY, color: NAVY, background: "#fff", fontFamily: "'Open Sans', sans-serif" }}>
                Visit Our Website
              </a>
              <a href="/connect"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-body font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: GOLD, color: "#fff", fontFamily: "'Open Sans', sans-serif" }}>
                Sunday Service Info
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div className="py-3 text-center" style={{ background: NAVY }}>
        <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'Open Sans', sans-serif" }}>
          Daily Word by Pastor Shelia Blake • All Nations Life Development Christian Center • Port St. Lucie, FL
        </p>
      </div>
    </div>
  );
}
