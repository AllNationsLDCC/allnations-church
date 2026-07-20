// Design: Warm, pastoral, professional — Playfair Display headings, Open Sans body
// Brand: Deep Navy #1A2F6B | Gold #C8901A | Cream #F5F0E8 | White #FFFFFF | Dark #222222
// Daily Word by Pastor Shelia Blake — July 2026 Theme: DNA: Designed Not Average
// Timing: Each day unlocks at 12:00 AM Eastern Time (America/New_York)

import { useState } from "react";
import { Flame, Calendar, Facebook, Instagram, Link2, ChevronDown, ChevronUp, Volume2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const PASTOR_SHELIA = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NundXIvqDynhQrGu.png";

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
  videoUrl?: string;
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
  {
    day: 4, date: "May 4, 2026", isoDate: "2026-05-04",
    title: "For Such a Time as This",
    scripture: "Esther 4:14 (KJV)",
    verse: "And who knoweth whether thou art come to the kingdom for such a time as this?",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 4 of Arise and Take Flight.",
    keyPoints: [
      "Esther was comfortable in the palace. She had status. She had security. But God did not elevate her just to make her comfortable. He elevated her for a purpose.",
      "When the dark skies rolled in over her people, she had a choice to make. Stay quiet on the ground, or risk everything to take flight. She chose to arise.",
      "You are not where you are by accident. God has positioned you for such a time as this. Your voice matters. Your courage matters. Your flight is tied to the deliverance of others.",
    ],
    callToAction: "Do not shrink back when the skies get dark. You were built for this altitude. Arise and speak up for such a time as this.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/HRXaYNTrNRJHgWmK.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/iUUzYochjkGpwGBM.jpg",
  },
  {
    day: 5, date: "May 5, 2026", isoDate: "2026-05-05",
    title: "Women on the Move",
    scripture: "Philippians 3:14 (KJV)",
    verse: "I press toward the mark for the prize of the high calling of God in Christ Jesus.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 5 of Arise and Take Flight.",
    keyPoints: [
      "There is something powerful about a woman who knows where she is going. She does not wander. She does not hesitate. She presses. She moves with intention, with purpose, and with the anointing of God on her life.",
      "Paul said, 'I press toward the mark.' That word press means to pursue with intensity, to move forward even when something is pushing back. You are not just walking, you are pressing. You are not just existing, you are moving with divine purpose.",
      "Women of God, you have been issued a boarding pass. Your name is on it. Your seat is assigned. Your destination is set. It is time to get on the plane and move.",
    ],
    callToAction: "Stop waiting for permission to arise. You already have it. God issued it before the foundation of the world. Women on the move — let's go.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/qOAGHhsMpoKATKtq.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/hQfmQXUVhhbBJjTo.jpg",
  },
  {
    day: 6, date: "May 6, 2026", isoDate: "2026-05-06",
    title: "The Faith of Ruth",
    scripture: "Ruth 1:16 (KJV)",
    verse: "And Ruth said, Intreat me not to leave thee, or to return from following after thee: for whither thou goest, I will go; and where thou lodgest, I will lodge.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 6 of Arise and Take Flight.",
    keyPoints: [
      "Ruth was a woman who refused to stay grounded in her grief. She had lost her husband, her future seemed bleak, and Naomi told her to go back. But Ruth made a decision to arise and step into the unknown.",
      "Taking flight requires immense faith. It means leaving the familiar territory behind. Ruth stepped out of Moab and into Bethlehem, trusting God to navigate her journey.",
      "Because she was willing to fly blind by faith, God landed her right in the lineage of Jesus Christ. Your faith today is setting up generations tomorrow.",
    ],
    callToAction: "Step out in faith today. Even if you cannot see the destination, trust the Pilot. Arise and follow where He leads.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/FyCzMMcZhGQNJPXD.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/aejXYjjPECwrhtOc.jpg",
  },
  {
    day: 7, date: "May 7, 2026", isoDate: "2026-05-07",
    title: "Above the Storm",
    scripture: "Psalm 107:29 (KJV)",
    verse: "He maketh the storm a calm, so that the waves thereof are still.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 7 of Arise and Take Flight.",
    keyPoints: [
      "When a storm hits, most birds run for cover. But the eagle does something different. The eagle flies directly into the storm and uses the fierce winds to lift it higher, rising above the clouds.",
      "An airplane does the same thing. It climbs to a cruising altitude where the air is thin and the sun is shining, even while the storm rages below.",
      "God is calling you to climb higher today. Stop fighting the storm on the ground. Elevate your praise. Elevate your prayer. Get above the turbulence.",
    ],
    callToAction: "Do not let the storms of life keep you grounded. Arise, take flight, and soar above the clouds where His peace reigns.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/QAwQVebqwHtvJYTz.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/EqbaWDtYhYgKLJBm.jpg",
  },
  {
    day: 8, date: "May 8, 2026", isoDate: "2026-05-08",
    title: "The Power of Preparation",
    scripture: "Proverbs 21:31 (KJV)",
    verse: "The horse is prepared against the day of battle: but safety is of the Lord.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 8 of Arise and Take Flight.",
    keyPoints: [
      "Before an airplane ever leaves the runway, there is a thorough pre-flight checklist. The pilot does not just jump in and take off — they prepare for the journey ahead. In our spiritual walk, preparation is the runway to our destination.",
      "God gives the vision, but He requires us to do the preparation. Are you preparing for the blessing you are praying for? If you are asking God for rain, you need to start digging ditches. Preparation is an act of faith.",
      "Take time today to prepare for what God has promised you. Clear the runway of distractions, doubt, and fear. Get ready for takeoff.",
    ],
    callToAction: "What has God promised you? Begin preparing for it today. Preparation is not doubt — it is faith in action. Clear your runway and get ready.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/FyISijDebPCiErEV.mp3",
  },
  {
    day: 9, date: "May 9, 2026", isoDate: "2026-05-09",
    title: "Shedding the Extra Weight",
    scripture: "Hebrews 12:1 (KJV)",
    verse: "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 9 of Arise and Take Flight.",
    keyPoints: [
      "For an aircraft to reach its maximum altitude, it cannot carry excess baggage. Every pound is calculated. If there is too much weight, the plane cannot fly.",
      "Many of us are trying to soar into our next season while carrying the baggage of our past — unforgiveness, bitterness, past failures, and toxic relationships. You cannot take flight if you are weighed down.",
      "God is asking you to release what is holding you back so you can rise to where you belong. You are designed to fly, not to be grounded by your past.",
    ],
    callToAction: "Identify the extra weight in your life today. Make the intentional choice to lay it aside. You are designed to fly — not to be grounded by your past.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/hXWvXAgQMnbTKkkm.mp3",
  },
  {
    day: 10, date: "May 10, 2026", isoDate: "2026-05-10",
    title: "A Mother's Wings",
    scripture: "Proverbs 31:25-26 (KJV)",
    verse: "Strength and honour are her clothing; and she shall rejoice in time to come. She openeth her mouth with wisdom; and in her tongue is the law of kindness.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 10 of Arise and Take Flight. Today is Mother's Day, and this word is for every woman who has ever spread her wings so someone else could fly.",
    keyPoints: [
      "A mother is one of God's greatest pictures of flight. She sacrifices her own comfort so her children can soar. She stays up late so they can rest. She prays in the night so they can walk in the light of day. She is clothed in strength and honour — and that is not by accident. God designed her that way.",
      "Whether you are a biological mother, a spiritual mother, a mentor, or a woman who has poured into the life of another — you have been flying. You may not have seen it as flight, but every act of love, every sacrifice, every prayer was a wing beat that carried someone higher.",
      "Today, we celebrate you. We honour you. We say thank you for not staying grounded when it would have been easier to quit. Your wings have carried generations.",
    ],
    callToAction: "Happy Mother's Day. Today, let someone else carry you for a change. Receive the love, the honour, and the blessing. You have earned your wings.",
    close: "I love you, All Nations. Happy Mother's Day. Arise and take flight.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/wHHqBxynNPWwsNTS.mp3",
  },
  {
    day: 11, date: "May 11, 2026", isoDate: "2026-05-11",
    title: "Navigating the Turbulence",
    scripture: "John 16:33 (KJV)",
    verse: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 11 of Arise and Take Flight.",
    keyPoints: [
      "Turbulence is a normal part of flying. It can be uncomfortable and frightening, but it rarely brings down a plane. The pilot simply adjusts and keeps moving forward.",
      "In life, you will experience turbulence. Unexpected challenges, sudden shifts, and rocky seasons are inevitable. But turbulence is not a sign that you are crashing — it is a sign that you are moving.",
      "When the turbulence hits, do not panic. Trust the Captain. Jesus has already overcome the world, and He is navigating you safely to your destination.",
    ],
    callToAction: "Fasten your seatbelt and trust God through the bumpy seasons. Keep your eyes on Him and do not let the turbulence steal your peace.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/VBqNeMdAHarmWNoP.mp3",
  },
  {
    day: 12, date: "May 12, 2026", isoDate: "2026-05-12",
    title: "The Power of Alignment",
    scripture: "Amos 3:3 (KJV)",
    verse: "Can two walk together, except they be agreed?",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 12 of Arise and Take Flight.",
    keyPoints: [
      "For a plane to fly smoothly, every part must be in perfect alignment. If the flaps, the engine, or the landing gear are out of sync, the flight is compromised. Spiritual alignment is just as critical.",
      "You must align your thoughts with God's Word, your actions with His will, and your relationships with His purpose. Are you flying in formation with the right people?",
      "Surround yourself with those who elevate you, pray for you, and push you toward your God-given destiny. Your inner circle determines your altitude.",
    ],
    callToAction: "Check your alignment today. Ensure that your inner circle and your daily habits are in agreement with where God is taking you.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/WUvBDXSTZOdXKkNk.mp3",
  },
  {
    day: 13, date: "May 13, 2026", isoDate: "2026-05-13",
    title: "The Instrument Panel",
    scripture: "Psalm 119:105 (KJV)",
    verse: "Thy word is a lamp unto my feet, and a light unto my path.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 13 of Arise and Take Flight.",
    keyPoints: [
      "When flying through thick clouds or darkness, a pilot cannot rely on what they see out the window. Their senses will lie to them. They must rely entirely on their instrument panel.",
      "In your spiritual life, your feelings will often lie to you. Fear will tell you that you are falling. Anxiety will tell you that you are off course. But God has given you an instrument panel that never fails — His Word.",
      "When the circumstances of your life get cloudy, stop looking out the window and start looking at the Word. The Word of God is your true north. It will always tell you exactly where you are and where you need to go.",
    ],
    callToAction: "Do not let your feelings fly the plane today. Consult your instrument panel. Let the Word of God guide your decisions and your direction.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/aPMHpHHusXkAeIws.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/wDETbqAzuhzLfvFK.png",
  },
  {
    day: 14, date: "May 14, 2026", isoDate: "2026-05-14",
    title: "Trust the Tower",
    scripture: "Proverbs 3:5-6 (KJV)",
    verse: "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 14 of Arise and Take Flight.",
    keyPoints: [
      "Air traffic control sees the entire sky. The pilot only sees what is immediately in front of them. When the tower gives an instruction to change altitude or adjust the flight path, the pilot obeys because the tower sees the bigger picture.",
      "God is your air traffic control. He sees the storms before they form. He sees the obstacles before you reach them. When He tells you to change direction, it is not to delay you; it is to protect you.",
      "Leaning on your own understanding is like trying to fly without the tower. You will eventually run into something you did not see coming. Trusting God means obeying His instructions even when they do not make sense from your limited view.",
    ],
    callToAction: "Acknowledge Him in all your ways today. Trust the Tower. He knows exactly how to direct your path safely to your destination.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/cdQVXwHaUjZVxcNO.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/zFSzCxtgAypaCqGe.png",
  },
  {
    day: 15, date: "May 15, 2026", isoDate: "2026-05-15",
    title: "The Power of the Co-Pilot",
    scripture: "Ecclesiastes 4:9-10 (KJV)",
    verse: "Two are better than one; because they have a good reward for their labour. For if they fall, the one will lift up his fellow.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 15 of Arise and Take Flight.",
    keyPoints: [
      "Commercial flights always have a captain and a co-pilot. When the captain needs to rest, or when the workload gets too heavy, the co-pilot steps in. You were never meant to fly this journey alone.",
      "God designed us for community. The enemy wants to isolate you because an isolated pilot is an exhausted pilot. When you are flying solo, every burden rests entirely on your shoulders.",
      "Who is in the cockpit with you? Who can you hand the controls to when you need prayer, support, or encouragement? Having the right co-pilot can be the difference between a safe landing and a crash.",
    ],
    callToAction: "Reach out to your spiritual co-pilot today. Pray for them, and let them pray for you. Two are always better than one.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OfmwMEpByPLpFbwg.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/LdIkOmyMTCgbFUIy.png",
  },
  {
    day: 16, date: "May 16, 2026", isoDate: "2026-05-16",
    title: "Breaking the Sound Barrier",
    scripture: "Joshua 6:20 (KJV)",
    verse: "And it came to pass at the seventh time, when the priests blew with the trumpets, Joshua said unto the people, Shout; for the Lord hath given you the city.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 16 of Arise and Take Flight.",
    keyPoints: [
      "When an aircraft approaches the speed of sound, it experiences intense resistance and violent shaking. But once it pushes through and breaks the sound barrier, the flight becomes incredibly smooth, and it travels faster than ever before.",
      "Right before your greatest breakthrough, you will experience the greatest resistance. The enemy will throw everything at you to make you turn back or slow down.",
      "But if you will just push a little harder — if you will just raise your praise a little louder — you will break through the barrier. The shaking is not a sign of defeat; it is the evidence that you are about to break through.",
    ],
    callToAction: "Do not let the resistance stop you today. Let out a shout of praise. Break the sound barrier and step into your victory.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/kKzGqeOAEcVqPiGw.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/RcllkiNQjxdWoIIJ.png",
  },
  {
    day: 17, date: "May 17, 2026", isoDate: "2026-05-17",
    title: "Cruising Altitude",
    scripture: "Philippians 4:7 (KJV)",
    verse: "And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 17 of Arise and Take Flight.",
    keyPoints: [
      "The most turbulent part of a flight is usually the climb. But once the plane reaches cruising altitude, the seatbelt sign turns off, the engines quiet down, and the ride becomes peaceful.",
      "Many of you have been in a steep, difficult climb. You have been fighting gravity, fighting resistance, and fighting weariness. But God is bringing you to a cruising altitude.",
      "Cruising altitude is that place in the Spirit where you are no longer striving. You are simply resting in His peace. The circumstances below you may still be chaotic, but up here, the peace of God guards your heart.",
    ],
    callToAction: "Stop fighting the climb and let God bring you into His rest. Receive His peace today — a peace that passes all understanding.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ChaVPEjzGCUniPcH.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/yzjyUOKtVzGVZKxe.png",
  },
  {
    day: 18, date: "May 18, 2026", isoDate: "2026-05-18",
    title: "Course Correction",
    scripture: "Psalm 23:3 (KJV)",
    verse: "He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 18 of Arise and Take Flight.",
    keyPoints: [
      "Even the most advanced autopilot systems drift off course due to wind and weather. The plane must constantly make tiny course corrections to reach its destination.",
      "In our walk with God, we all drift. A little distraction here, a little compromise there, and suddenly we are miles away from where God called us to be. But the Holy Spirit is our course corrector.",
      "He gently nudges us. He restores our soul and leads us back to the path of righteousness. A course correction is not a failure; it is proof that God loves you too much to let you stay lost.",
    ],
    callToAction: "Allow the Holy Spirit to correct your course today. If you have drifted, do not condemn yourself. Just turn the controls back over to Him.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/VpyuJLQAFnTWplYW.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/FmDaUsyEFZMqSMYT.png",
  },
  {
    day: 19, date: "May 19, 2026", isoDate: "2026-05-19",
    title: "The Weight of the Cargo",
    scripture: "Matthew 11:28 (KJV)",
    verse: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 19 of Arise and Take Flight.",
    keyPoints: [
      "Cargo planes are designed to carry massive amounts of weight, but even they have a limit. If a plane is overloaded, it cannot generate enough lift to get off the runway.",
      "You were not designed to carry the weight of the world. You were not built to carry the burden of worry, the heavy load of guilt, or the crushing weight of other people's expectations.",
      "Jesus gave us a direct invitation: Come unto me. He is the only one equipped to carry your heavy cargo. When you give Him your burdens, He gives you His rest.",
    ],
    callToAction: "What heavy cargo are you trying to fly with today? Drop it at the feet of Jesus. You cannot soar while carrying a burden you were never meant to bear.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/cavmcwqnUGcBPROP.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/bFUMxoUuoSTaCgjL.png",
  },
  {
    day: 20, date: "May 20, 2026", isoDate: "2026-05-20",
    title: "Flying Blind",
    scripture: "2 Corinthians 5:7 (KJV)",
    verse: "For we walk by faith, not by sight.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 20 of Arise and Take Flight.",
    keyPoints: [
      "There are times when a pilot must fly through zero visibility. They cannot see the horizon, the ground, or the sky. They must fly entirely by instruments. In aviation, this is called flying blind.",
      "In the kingdom of God, this is called faith. Walking by faith means trusting God when you cannot see the outcome. It means moving forward when the path ahead is completely obscured.",
      "Your natural eyes will only show you the storm, but your spiritual eyes — your faith — will show you the Savior. God does not need you to see the destination; He just needs you to trust the Navigator.",
    ],
    callToAction: "Are you in a season of zero visibility? Stop trying to figure it out with your natural eyes. Walk by faith today, not by sight.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/TVYrmIkPVIxZWoTy.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ItwfkWpRELKwaaoj.png",
  },
  {
    day: 21, date: "May 21, 2026", isoDate: "2026-05-21",
    title: "The Refueling Stop",
    scripture: "Isaiah 40:29 (KJV)",
    verse: "He giveth power to the faint; and to them that have no might he increaseth strength.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 21 of Arise and Take Flight.",
    keyPoints: [
      "No matter how powerful an aircraft is, it eventually has to land and refuel. A plane running on empty is a danger to itself and everyone on board.",
      "Many believers treat rest like a weakness. We push ourselves until we are running on fumes, and then we wonder why we are irritable, exhausted, and easily defeated.",
      "God does not expect you to fly forever without stopping. He invites you to land in His presence, to sit at His feet, and to let Him increase your strength. Refueling is not a delay; it is a necessity.",
    ],
    callToAction: "Check your spiritual fuel gauge today. If you are running on empty, make time to sit in the presence of God and let Him refill you.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NsJVzmSKEnAhxKrY.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/XROOAerZYGubYTyF.png",
  },
  {
    day: 22, date: "May 22, 2026", isoDate: "2026-05-22",
    title: "The Holding Pattern",
    scripture: "Psalm 27:14 (KJV)",
    verse: "Wait on the Lord: be of good courage, and he shall strengthen thine heart: wait, I say, on the Lord.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 22 of Arise and Take Flight.",
    keyPoints: [
      "Sometimes a plane reaches its destination, but the runway is not clear. The tower instructs the pilot to enter a holding pattern — circling the airport until it is safe to land.",
      "You may feel like you are in a holding pattern right now. You have done everything right, you have flown the distance, but the promise has not manifested yet. You are just circling.",
      "A holding pattern is not a denial; it is a delay for your protection. God is clearing the runway. He is moving things out of the way so that when you finally land, you land safely.",
    ],
    callToAction: "Do not lose courage in the holding pattern. Keep circling in prayer. Keep circling in praise. Wait on the Lord, and He will clear the way.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/iOTbIkpvMDqVCLHU.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NivcFlBBAGFWTFtn.png",
  },
  {
    day: 23, date: "May 23, 2026", isoDate: "2026-05-23",
    title: "The Black Box",
    scripture: "Romans 8:28 (KJV)",
    verse: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 23 of Arise and Take Flight.",
    keyPoints: [
      "Every commercial aircraft carries a flight data recorder — commonly called the black box. After an accident, investigators retrieve the black box to understand what happened and why. Nothing is wasted. Every piece of data tells a story.",
      "God has a black box on your life. Every hard season, every painful experience, every moment that felt like a crash — He is using all of it. Nothing in your story is wasted.",
      "Romans 8:28 is not a promise that everything will feel good. It is a promise that God will work everything together for good. The crash, the detour, the delay — it is all data that God is using to build something beautiful.",
    ],
    callToAction: "Stop writing off the difficult chapters of your story. God is not done with the data. Trust that He is working all things together for your good.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/MuqberkMBhgCrpBU.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/FWnzicQOCrTJJxZl.png",
  },
  {
    day: 24, date: "May 24, 2026", isoDate: "2026-05-24",
    title: "New Altitude, New Perspective",
    scripture: "Colossians 3:2 (KJV)",
    verse: "Set your affection on things above, not on things on the earth.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 24 of Arise and Take Flight.",
    keyPoints: [
      "From 35,000 feet, the problems that seemed enormous on the ground look very different. Traffic jams are invisible. City boundaries disappear. The whole landscape looks different from altitude.",
      "When you set your affection on things above, you gain a heavenly perspective on earthly problems. The issue that has been consuming your thoughts looks very different when you view it from God's vantage point.",
      "God is not asking you to ignore your problems. He is asking you to view them from the right altitude. From His perspective, every mountain is small, every enemy is already defeated, and every promise is already fulfilled.",
    ],
    callToAction: "Lift your eyes today. Set your affection on things above. Let God give you a new altitude and a new perspective on your situation.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/YDEAMIEgxZUwbnAK.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/IvmvgjONmKpXVsjb.png",
  },
  {
    day: 25, date: "May 25, 2026", isoDate: "2026-05-25",
    title: "The Parachute of Grace",
    scripture: "Ephesians 2:8 (KJV)",
    verse: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 25 of Arise and Take Flight.",
    keyPoints: [
      "A parachute is not something you earn. You do not build it yourself. You do not deserve it based on your performance. It is given to you, and when you need it, you simply open it and let it carry you safely down.",
      "That is grace. You did not earn it. You cannot buy it. You cannot perform well enough to deserve it. God simply gave it to you through Jesus Christ, and when life sends you into freefall, grace catches you.",
      "Some of you are in a freefall right now. You feel like everything is spinning out of control. Pull the cord. Open the parachute of grace. Let God's unmerited favor carry you safely to solid ground.",
    ],
    callToAction: "Stop trying to earn what God has already given you freely. Open the parachute of grace today and let it carry you.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ShqVxuaHwtkoJpWT.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/WmbTsJuTKwpFLRYF.png",
  },
  {
    day: 26, date: "May 26, 2026", isoDate: "2026-05-26",
    title: "Flying in Formation",
    scripture: "Hebrews 10:25 (KJV)",
    verse: "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 26 of Arise and Take Flight.",
    keyPoints: [
      "Geese fly in a V-formation for a powerful reason. The bird at the front breaks the wind resistance for every bird behind it. When the lead bird gets tired, it rotates to the back and another bird takes the lead. Together, they can fly 71 percent farther than any single bird could fly alone.",
      "The church is God's formation. When you are connected to your local body, you benefit from the lift of others. When you are tired, someone else carries the lead. When they are tired, you step up.",
      "Forsaking the assembly is like a goose breaking from the formation and trying to fly alone. You will exhaust yourself and fall far short of your destination.",
    ],
    callToAction: "Get back in formation. Show up for your church family. Let them lift you, and be willing to lift them in return.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/lvefFXLGmOOpYnYF.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/fmrVHXhhlVDMQsju.png",
  },
  {
    day: 27, date: "May 27, 2026", isoDate: "2026-05-27",
    title: "The Final Approach",
    scripture: "2 Timothy 4:7 (KJV)",
    verse: "I have fought a good fight, I have finished my course, I have kept the faith.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 27 of Arise and Take Flight.",
    keyPoints: [
      "The final approach is one of the most critical phases of flight. The pilot must line up precisely with the runway, manage the speed carefully, and commit fully to the landing. There is no room for hesitation on final approach.",
      "In your life, there are seasons that require you to commit fully. You have done the preparation. You have flown the distance. Now it is time to lock in and finish your course.",
      "Paul did not say he had a perfect flight. He said he fought a good fight, finished his course, and kept the faith. That is all God asks of you — not perfection, but faithfulness to the end.",
    ],
    callToAction: "Line up with your runway today. Commit to finishing what God started in you. Do not pull up at the last moment. Land this thing.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/nJTNCQxBgpBJXlvi.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ZGTbTOASpsCEkENJ.png",
  },
  {
    day: 28, date: "May 28, 2026", isoDate: "2026-05-28",
    title: "Cleared for Landing",
    scripture: "John 14:2-3 (KJV)",
    verse: "In my Father's house are many mansions: if it were not so, I would have told you. I go to prepare a place for you. And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 28 of Arise and Take Flight.",
    keyPoints: [
      "After a long flight, the most beautiful words a pilot can hear are: You are cleared for landing. The journey is complete. The destination is in sight. The runway is ready.",
      "Jesus has gone ahead of us to prepare our final destination. He is the air traffic control who has already cleared our landing. Our eternal home is ready and waiting.",
      "But until that day, we are still flying. We still have a mission. We still have people to reach, prayers to pray, and a purpose to fulfill. Fly with urgency, knowing that your landing is already secured.",
    ],
    callToAction: "Live today with the confidence of someone who knows their landing is secured. Fly boldly, love freely, and serve faithfully until the tower calls you home.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/tUdFmUbcTNImJdsH.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ohmPNLDDnzqqiaRH.png",
  },
  {
    day: 29, date: "May 29, 2026", isoDate: "2026-05-29",
    title: "The Wingspan of a Woman",
    scripture: "Isaiah 40:31 (KJV)",
    verse: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 29 of Arise and Take Flight.",
    keyPoints: [
      "An eagle's wingspan is not just for beauty — it is for function. The wider the wingspan, the more wind the eagle can catch, and the higher it can soar. God has given every woman of God a wingspan — a breadth of anointing, influence, and grace that is uniquely hers.",
      "Some of you have been folding your wings. You have been making yourself smaller to fit into spaces that were never designed for you. But God did not design you to fold — He designed you to spread.",
      "Your wingspan is your calling, your gifts, your voice, and your vision. When you wait on the Lord and let Him renew your strength, He expands your wingspan to reach places you never imagined.",
    ],
    callToAction: "Stop folding your wings. Spread them. Wait on the Lord, let Him renew your strength, and soar to the altitude He designed you for.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/bKsSksqzRhfpXlEy.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/eMjUzOCsaOJbiSXh.png",
  },
  {
    day: 30, date: "May 30, 2026", isoDate: "2026-05-30",
    title: "Leaving a Flight Path",
    scripture: "Proverbs 22:6 (KJV)",
    verse: "Train up a child in the way he should go: and when he is old, he will not depart from it.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 30 of Arise and Take Flight.",
    keyPoints: [
      "Every aircraft that flies leaves a flight path in the sky — a contrail, a trail of condensation that marks where it has been. For a brief time, anyone looking up can see exactly where that plane has traveled.",
      "Your life leaves a flight path. Your children, your spiritual children, your community — they can see where you have been. They are watching how you handle the storms, how you navigate the turbulence, and how you trust God when the skies are dark.",
      "The flight path you leave is the most powerful sermon you will ever preach. Train up the next generation not just with your words, but with the trail your life leaves in the sky.",
    ],
    callToAction: "What flight path are you leaving? Live today in a way that the next generation can follow. Let your trail point them toward God.",
    close: "I love you, All Nations. Arise and take flight. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/fJhEhSSUzeRTkgmJ.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OddIanLmThOgmBEt.png",
  },
  {
    day: 31, date: "May 31, 2026", isoDate: "2026-05-31",
    title: "Arise and Take Flight — You Made It",
    scripture: "Philippians 1:6 (KJV)",
    verse: "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 31 — the final day of our May series, Arise and Take Flight.",
    keyPoints: [
      "You made it. Thirty-one days of showing up, of opening the Word, of choosing to arise when everything in you wanted to stay grounded. That is not a small thing. That is faithfulness.",
      "God began a good work in you before this month started, and He will carry it to completion. The Arise and Take Flight series was not just a devotional — it was a runway. God was building momentum in your spirit, preparing you for the next season of your life.",
      "You are not the same woman who started this series on May 1st. You have been stretched, strengthened, and stirred. You have been reminded of who you are and whose you are. Now it is time to take everything God has deposited in you and fly.",
    ],
    callToAction: "This is not the end — it is the beginning of your next flight. Take what God has given you this month and use it. Arise. Take flight. And never look back.",
    close: "I love you, All Nations. Thank you for flying with me this month. God is not done with you. The best is still ahead. Arise and take flight.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/rIAsvqaIIoHsomnQ.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/abaAqsunRbwjoFVC.png",
  },
  // ===== JUNE 2026 — MEN'S MONTH: FUEL YOUR FIRE, GENERATION TO GENERATION =====
  {
    day: 1, date: "June 1, 2026", isoDate: "2026-06-01",
    title: "Iron Sharpens Iron",
    scripture: "Proverbs 27:17 (KJV)",
    verse: "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 1 of our June Daily Word series — Iron Sharpens Iron. This month is Men's Month, and every word this June is a word for the men of God who are rising, building, and leading.",
    keyPoints: [
      "Iron does not sharpen itself. It requires friction, contact, and the presence of something equally strong. God designed men to sharpen one another — not to compete, but to make each other better.",
      "The men in your life who challenge you, hold you accountable, and push you toward your purpose are not your enemies. They are your sharpeners. A man who isolates himself from godly brotherhood will grow dull.",
      "This month, we are going to look at what it means to be a man of God — a man of faith, family, integrity, and legacy. Iron sharpens iron. Let the sharpening begin.",
    ],
    callToAction: "Identify one man in your life who sharpens you. Reach out to him today. Brotherhood is not accidental — it is intentional.",
    close: "I love you, Kings. Iron sharpens iron. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/rOydrVQPnMZDoiDo.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/iMCJVWhCPDvqqlfL.jpg",
  },
  {
    day: 2, date: "June 2, 2026", isoDate: "2026-06-02",
    title: "The Making of a Man",
    scripture: "1 Samuel 16:7 (KJV)",
    verse: "But the Lord said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 2 of Iron Sharpens Iron.",
    keyPoints: [
      "The world defines a man by his title, his income, his physique, and his accomplishments. But God defines a man by his heart. When Samuel went to anoint the next king of Israel, he nearly missed David because he was looking at the wrong things.",
      "God passed over the tall, impressive brothers and chose the shepherd boy — the one who had been faithful in the hidden place. God is not looking for the most impressive man in the room. He is looking for the most surrendered.",
      "The making of a man of God happens in the hidden places — in the early morning prayers, in the quiet acts of faithfulness, in the moments when no one is watching. That is where God shapes a king.",
    ],
    callToAction: "Tend to your heart today. What is God seeing when He looks at you? Let Him shape you in the hidden place.",
    close: "I love you, Kings. Iron sharpens iron. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/rOydrVQPnMZDoiDo.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/pPsVRdcWeFJZTEbd.jpg",
  },
  {
    day: 3, date: "June 3, 2026", isoDate: "2026-06-03",
    title: "A Man of Prayer",
    scripture: "Daniel 6:10 (KJV)",
    verse: "Now when Daniel knew that the writing was signed, he went into his house; and his windows being open in his chamber toward Jerusalem, he kneeled upon his knees three times a day, and prayed, and gave thanks before his God, as he did aforetime.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 3 of Iron Sharpens Iron.",
    keyPoints: [
      "Daniel was a man of extraordinary influence in one of the most powerful empires in history. He served kings and navigated palace politics. But the foundation of his strength was not his wisdom or his position — it was his prayer life.",
      "When the decree came that made prayer illegal, Daniel did not adjust his schedule. He opened his windows toward Jerusalem and prayed three times a day, as he had always done. His prayer life was not a crisis response — it was a daily discipline.",
      "A praying man is a powerful man. Not because prayer makes him look spiritual, but because prayer keeps him connected to the source of all wisdom, strength, and direction.",
    ],
    callToAction: "Establish your prayer windows today. Not just when crisis comes — but every day. A man who prays consistently is a man who stands consistently.",
    close: "I love you, Kings. Iron sharpens iron. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/xYxPYgGfMwolmiJx.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/dNHmEeyvLdbNHvNG.jpg",
  },
  {
    day: 4, date: "June 4, 2026", isoDate: "2026-06-04",
    title: "Seek the Flame",
    scripture: "Jeremiah 29:13 (KJV)",
    verse: "And ye shall seek me, and find me, when ye shall search for me with all your heart.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 4 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "Anyone who has ever built a campfire knows you cannot light it with one careless match and a divided mind. You give it your full attention. You lean in, you protect the flame, you stay with it until it takes. God makes the same promise about Himself.",
      "He does not hide from the seeker. He says plainly, you will find me when you search for me with all your heart. Not a half-hearted glance, not a once-a-year visit — a whole-hearted seeking that He always rewards.",
      "If God has felt distant, hear this: He is not playing hide and seek to frustrate you. He is inviting you closer. The very desire you feel to know Him is proof that He is already drawing you in.",
    ],
    callToAction: "Seek Him today with your whole heart. Put down the distractions, get quiet, and say, Lord, I want to know you for real. Search like it matters, and the promise is that you will find Him.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/jhZoexhRWyTWTOPk.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/RXHEKMmvPFwkvABi.jpg",
  },
  {
    day: 5, date: "June 5, 2026", isoDate: "2026-06-05",
    title: "One Way to the Fire",
    scripture: "John 14:6 (KJV)",
    verse: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 5 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "When you are cold and lost in the dark, you do not need a hundred maybes. You need one sure way to the fire. The world offers a thousand paths and calls them all equal, but Jesus made a claim no one else could make. He is the way.",
      "He did not say He would show you a way or teach you about a way. He said He is the way, the truth, and the life. He is not one option on a shelf. He is the door that leads home to the Father.",
      "That is not narrow-minded. It is good news. It means you do not have to wonder if you found the right path. There is one person who walked out of the grave, and He is holding the door open for you right now.",
    ],
    callToAction: "Stop searching every other path for the warmth your heart is missing. Come to Jesus directly today. Tell Him, you are the way, and I am following you. He will lead you straight to the Father.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/SHEHvyLlfMqrtMlG.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/fvCOJRlqwTwteNUx.jpg",
  },
  {
    day: 6, date: "June 6, 2026", isoDate: "2026-06-06",
    title: "Made Brand New",
    scripture: "2 Corinthians 5:17 (KJV)",
    verse: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 6 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "Fire does not just warm things — it changes them. What goes into the flame does not come out the same. And the moment you give your life to Jesus, God does not patch up the old you. He makes an entirely new you.",
      "Old things are passed away. That mistake you keep replaying, that label people stuck on you, that version of yourself you were ashamed of — in Christ it is behind you. You are not your worst day anymore.",
      "Maybe you believe Jesus can save other people, but you wonder if your past is too much. Hear the promise: any man, any woman in Christ becomes a new creature. There are no exceptions written into that verse, and there are none for you.",
    ],
    callToAction: "Stop dragging the old you around. If you are in Christ, receive your new beginning today. Thank God that the old has passed away, and step into the new life He has already given you.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/KeNSIjuGCujCQkdn.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/dAaCzaOTidLltycx.jpg",
  },
  {
    day: 7, date: "June 7, 2026", isoDate: "2026-06-07",
    title: "He Lit the Fire First",
    scripture: "Romans 5:8 (KJV)",
    verse: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 7 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "We tend to think love must be earned — that someone will warm up to us once we prove we are worth it. But God flipped that completely. He proved His love before we ever turned toward Him. While we were yet sinners, not after we got it together, not once we deserved it, Christ died for us.",
      "The fire of His love was lit while we still had our backs turned to Him. If you have been waiting until you are good enough to come to God, you will wait forever. The cross settles the question once and for all.",
      "You are already loved — at your worst, on your hardest day. That is the kind of love that can change a life.",
    ],
    callToAction: "Stop trying to earn what God already gave. Receive His love today, just as you are. Whisper, Lord, thank you for loving me before I ever loved you, and let that love begin its work.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/CzWlHaLXNXshhDTJ.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NkqUCDbLmEZCKDLi.jpg",
  },
  {
    day: 8, date: "June 8, 2026", isoDate: "2026-06-08",
    title: "Taste and See",
    scripture: "Psalm 34:8 (KJV)",
    verse: "O taste and see that the Lord is good: blessed is the man that trusteth in him.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 8 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "You can describe a warm meal to a hungry person all day long, but at some point they have to taste it for themselves. God does not ask you to take everyone else's word for who He is. He says, taste and see.",
      "Faith is not meant to stay a theory. It is meant to be experienced. You will not fully know how good God is by arguing about Him or studying Him from a distance. You know it when you trust Him and walk it out.",
      "So many people are standing just outside the goodness of God, analyzing from the doorway, afraid to step in. But the promise is for the one who trusts. Taste, and you will see for yourself that He is good.",
    ],
    callToAction: "Take one real step of trust today. Bring Him something you have been carrying alone, and watch how He responds. Taste His goodness for yourself. Do not settle for hearing about it secondhand.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/LExNzHmrsxVWRvqL.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ziWfGHQdWANRosqJ.jpg",
  },
  {
    day: 9, date: "June 9, 2026", isoDate: "2026-06-09",
    title: "Fire Catches by Hearing",
    scripture: "Romans 10:17 (KJV)",
    verse: "So then faith cometh by hearing, and hearing by the word of God.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 9 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "Fire spreads from one source to the next. One flame leans into another, and suddenly what was small becomes ablaze. God says faith works the very same way. It catches by hearing, and what we hear is His word.",
      "This is why you keep showing up to hear the word — why this Daily Word matters — why a good seed planted in your ear can change the direction of your whole life. Faith is not worked up by trying harder. It comes alive when the word of God lands on your heart.",
      "And here is the generational part: the fire God lights in you was meant to spread. The word you hear today is fuel not only for your faith, but for your children, your family, and everyone within reach of your voice.",
    ],
    callToAction: "Keep putting yourself where the word is, and then pass it on. Share today's word with one person who needs faith to catch. That is how the fire moves from generation to generation.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/EtkZHyvxyQyEXldW.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/jlUZbWBZbsXevXms.jpg",
  },
  {
    day: 10, date: "June 10, 2026", isoDate: "2026-06-10",
    title: "Pass the Fire to Your House",
    scripture: "Acts 16:31 (KJV)",
    verse: "And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 10 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "When a man carries a torch into a dark house, he does not light only the room he is standing in. He lights a lamp, and then another, until the whole house is glowing. God's promise of salvation was never meant to stop with you.",
      "A frightened jailer asked Paul what he must do to be saved, and the answer came with a promise that reached past him: Believe, and thou shalt be saved, and thy house. The fire that begins in one heart was designed to spread through a family and down through the generations.",
      "Some of you are the first in your family to carry this fire. Do not underestimate that. You are not just receiving salvation for yourself. You are becoming the spark for sons, daughters, and a generation that has not even arrived yet.",
    ],
    callToAction: "Say yes to Jesus today, and then carry the flame home. Pray for your house by name. Be the one who starts a fire of faith that burns from generation to generation.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/zRHwSNmcxRFVPpIr.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/PyOHXCowUuDtPIoP.jpg",
  },
  {
    day: 11, date: "June 11, 2026", isoDate: "2026-06-11",
    title: "Keep the Fire Burning",
    scripture: "Leviticus 6:13 (KJV)",
    verse: "The fire shall ever be burning upon the altar; it shall never go out.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 11 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "In the Old Testament, the priest had one standing assignment at the altar: never let the fire go out. Day and night someone added wood and tended the coals so the flame would always be ready.",
      "Your walk with God works the same way. The fire He lit in you was never meant to be a one-time blaze — it is meant to burn continually. And that takes tending: time in His presence, prayer, worship, and the word. This is not because God is hard to please — an attended fire is what keeps you warm and keeps you ready to give light to someone else.",
      "Do not wait for a crisis to stir the coals.",
    ],
    callToAction: "Add one piece of fuel to your fire today. Give God just five quiet minutes before the day gets loud, and let Him keep your flame burning.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/rzTPIEvVGdUxmZsS.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ztjswasyWwLufYqg.jpg",
  },
  {
    day: 12, date: "June 12, 2026", isoDate: "2026-06-12",
    title: "Stir It Up",
    scripture: "2 Timothy 1:6 (KJV)",
    verse: "Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 12 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "Every fire eventually settles. The flames die down, the wood turns to coals, and a gray layer of ash hides the heat underneath. But those coals are not dead. Give them a stir and a little air, and the fire roars back to life.",
      "Paul told young Timothy to do exactly that with his faith: stir up the gift of God that is in you. Maybe your fire feels low right now. You still believe, but the passion has cooled.",
      "Do not mistake settled coals for a dead fire. The gift God placed in you is still there. It has not left. It simply needs stirring.",
    ],
    callToAction: "Stir the coals today. Go back to what first lit you up — a song, a scripture, a memory of God's faithfulness — and thank Him for it. Watch the fire come back to life.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/IsPTwbcqcmmBbaXT.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/PgElpWLtBpRUjbYD.jpg",
  },
  {
    day: 13, date: "June 13, 2026", isoDate: "2026-06-13",
    title: "Feed the Fire",
    scripture: "Jeremiah 15:16 (KJV)",
    verse: "Thy words were found, and I did eat them; and thy word was unto me the joy and rejoicing of mine heart.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 13 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "A fire you never feed will not last the night. No matter how strong it burns at sundown, without fuel it fades to ash by morning. Your spirit is no different. It has to be fed.",
      "The prophet Jeremiah found his fuel in the word of God. He did not just read it — he took it in like a meal, and it became the joy of his heart.",
      "That is how the fire stays strong. When the word becomes your food and not just your information, joy follows, and your fire burns steady through the long nights.",
    ],
    callToAction: "Feed your fire today. Read one verse slowly, and instead of rushing past it, take it in. Let it nourish your spirit the way a meal nourishes your body.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/GLtmqTKtyPwXuiTt.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/lukbNSdhFnhMKCFa.jpg",
  },
  {
    day: 14, date: "June 14, 2026", isoDate: "2026-06-14",
    title: "Don't Quench It",
    scripture: "1 Thessalonians 5:19 (KJV)",
    verse: "Quench not the Spirit.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 14 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "You can put a fire out two ways: stop feeding it, or pour water on it. Paul warns us about the second when he says, quench not the Spirit. There are things that douse the fire God lit in you.",
      "Unforgiveness, constant complaining, the wrong voices in your ear, a sin you keep making peace with — none of them announce themselves as fire killers, but drip by drip they cool what God wants to keep hot.",
      "Guarding your fire is not about being rigid or harsh with yourself. It is about refusing to hand the bucket of water to things that were never meant to put you out.",
    ],
    callToAction: "Name one thing that is quietly quenching your fire and move it away from the flame today. Protect what God lit in you.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ZLrOdgyPAvAMpnEN.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/tZtSVNoOnHSrcsFu.jpg",
  },
  {
    day: 15, date: "June 15, 2026", isoDate: "2026-06-15",
    title: "Let It Shine",
    scripture: "Matthew 5:16 (KJV)",
    verse: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 15 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "Fire was never meant to be hidden. The moment it catches, it does two things automatically: it gives warmth and it gives light. Jesus said the same about the fire He puts in you.",
      "Let your light shine, He said — but notice the goal. It is not to show off. It is so that people look past you and give glory to your Father in heaven.",
      "You do not have to preach a sermon to shine. A kind word, an honest day's work, patience when you are frustrated, generosity when no one is watching — that is light, and a dark world is desperate for it.",
    ],
    callToAction: "Let your light shine in one ordinary way today and quietly point the credit back to God. Let someone see Him in you.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/glFZqIBvqLvUuAlp.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/TQwipPNDuDuLMxDc.jpg",
  },
  {
    day: 16, date: "June 16, 2026", isoDate: "2026-06-16",
    title: "Burning Hearts",
    scripture: "Luke 24:32 (KJV)",
    verse: "And they said one to another, Did not our heart burn within us, while he talked with us by the way, and while he opened to us the scriptures?",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 16 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "Two discouraged disciples were walking the road to Emmaus, certain their hope had died with Jesus on the cross. Then a stranger fell into step beside them and began to open the scriptures. They did not recognize Him yet, but something inside them came alive.",
      "Later they said it plainly: did not our heart burn within us? That burning is the unmistakable mark of an encounter with the risen Christ.",
      "Faith is not only something you decide — it is also something you feel when God draws near. If your heart has felt cold lately, the answer is not to try harder. It is to walk with Him again.",
    ],
    callToAction: "Invite Jesus into your ordinary road today. Talk to Him as you go about your day, and watch how He warms a heart that had grown cold.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OAgmQzJxrCJMxNfL.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ZWVlQndFsjRtFvLD.jpg",
  },
  {
    day: 17, date: "June 17, 2026", isoDate: "2026-06-17",
    title: "Strength to Keep Burning",
    scripture: "Isaiah 40:31 (KJV)",
    verse: "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 17 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "Even a strong fire needs fresh air, or it smothers under its own ash. We are no different. We run out, we grow weary, and the bright flame of last month flickers under the weight of this one.",
      "God's answer to a weary heart is not 'try harder.' His answer is: wait upon the Lord. And to those who wait, He makes a promise — He will renew your strength, and you will rise up like the eagle.",
      "Waiting on God is not doing nothing. It is drawing close enough to be refueled by Him. The fire you cannot keep burning on your own, He will renew.",
    ],
    callToAction: "Stop running on empty today. Sit with God for a few minutes. Hand Him your tiredness, and ask Him to renew your strength. He will.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/uROlOfVgBUoWfEMk.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OLVagrNUnmOnTVXF.jpg",
  },
  {
    day: 18, date: "June 18, 2026", isoDate: "2026-06-18",
    title: "Through the Fire",
    scripture: "Isaiah 43:2 (KJV)",
    verse: "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 18 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "There is a fire God lights inside of us, and there is a fire that life sometimes walks us through. The hard season, the loss, the diagnosis, the waiting that will not end — it can feel like flames all around you.",
      "But hear God's promise to His people: when you walk through the fire, you will not be burned, and the flame will not consume you. He does not always pull you out of the fire. Very often He walks you through it, and what was meant to destroy you — in His hands — only refines you.",
      "You are not being consumed, child of God. You are being purified, and you are not walking through it alone.",
    ],
    callToAction: "Hand God the thing that feels like fire right now. Say to Him, I trust you to walk me through — and lean on the One who is in the flame with you.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/EBFzZKQRJIOycbIt.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/HkqpjHOkMdMvStAf.jpg",
  },
  {
    day: 19, date: "June 19, 2026", isoDate: "2026-06-19",
    title: "Generation to Generation",
    scripture: "Psalm 145:4 (KJV)",
    verse: "One generation shall praise thy works to another, and shall declare thy mighty acts.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 19 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "This whole month has carried one heartbeat: the fire is not meant to stop with you. God designed faith to be handed down. One generation shall declare His mighty acts to another.",
      "The faith you carry was meant for your children, your grandchildren, and the young believer who is quietly watching how you live.",
      "Every testimony you share, every prayer your family hears, every time you declare what God has done — you are passing a torch to a generation coming up behind you. Do not keep your stories to yourself.",
    ],
    callToAction: "Tell one younger person a real story of God's faithfulness in your life today. Hand them the torch and let the fire move from generation to generation.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/osMbdGoezcFoYhWP.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/SlcykuzLFSPdMWcg.jpg",
  },
  {
    day: 20, date: "June 20, 2026", isoDate: "2026-06-20",
    title: "Stay on Fire",
    scripture: "Romans 12:11 (KJV)",
    verse: "Not slothful in business; fervent in spirit; serving the Lord.",
    welcome: "Good morning, All Nations family. This is Pastor Shelia Blake, and welcome to Day 20 of Fuel Your Fire, Generation to Generation.",
    keyPoints: [
      "It is one thing to catch fire. It is another thing entirely to stay on fire. Over time, even the most passionate believer can drift towards simply going through the motions.",
      "Paul gives the cure in three short phrases: not slothful, fervent in spirit, serving the Lord. Fervent means boiling — on fire — fully engaged. And notice how you stay there: by serving.",
      "The believers who burn the longest are the ones who keep pouring out, who keep showing up, who keep loving people in Jesus' name. A fire kept to itself grows cold. A fire that serves stays hot.",
    ],
    callToAction: "Stay fervent today. Do one act of service for someone and offer it to God as worship. Keep your fire burning, generation to generation.",
    close: "I love you, All Nations. Fuel your fire, generation to generation. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/dCUTOYliquyxovgu.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ndsNyGdUgAPUXJgf.jpg",
  },
  {
    day: 21, date: "June 21, 2026", isoDate: "2026-06-21",
    title: "Sunday: The King's Table",
    scripture: "2 Samuel 9:13 (KJV)",
    verse: "So Mephibosheth dwelt in Jerusalem: for he did eat continually at the king's table; and was lame on both his feet.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 21 of Iron Sharpens Iron. Today is Sunday — Father's Day Sunday — the day the kings gather at the table.",
    keyPoints: [
      "Mephibosheth was the son of Jonathan and the grandson of King Saul. After the death of his father, he was dropped by his nurse and became lame in both feet. He lived in a place called Lo-debar — which means 'no pasture,' a place of nothing.",
      "But King David, in an act of extraordinary covenant love, sought him out and brought him to the king's table. Not because of what Mephibosheth had done, but because of the covenant David had made with his father Jonathan.",
      "You may feel like you are in Lo-debar right now. You may feel lame, forgotten, or disqualified. But the King has not forgotten you. He has set a table for you, and your seat is already reserved.",
    ],
    callToAction: "Come to the table today. Come to the house of God. Come broken, come lame, come from Lo-debar — the King is waiting.",
    close: "I love you, Kings. Iron sharpens iron. See you at the table today.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/hCHTtagTTeVvlLGc.mp3",
  },
  {
    day: 22, date: "June 22, 2026", isoDate: "2026-06-22",
    title: "The Man in the Mirror",
    scripture: "James 1:23-24 (KJV)",
    verse: "For if any be a hearer of the word, and not a doer, he is like unto a man beholding his natural face in a glass: For he beholdeth himself, and goeth his way, and straightway forgetteth what manner of man he was.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 22 of Iron Sharpens Iron.",
    keyPoints: [
      "James gives us a sobering picture of the man who hears the Word but does not do it. He looks in the mirror — sees exactly what needs to change — and then walks away and forgets. He heard, but he did not act.",
      "The Word of God is a mirror for the soul. When you sit under the preaching of the Word, when you read the Scriptures, God is showing you what you look like — and what you could become. The question is: what do you do with what you see?",
      "A man of God does not just hear the Word on Sunday and forget it by Monday. He is a doer of the Word. He takes what he sees in the mirror and allows the Holy Spirit to transform him.",
    ],
    callToAction: "What has God been showing you in the mirror of His Word? Do not walk away and forget. Be a doer of the Word today.",
    close: "I love you, Kings. Iron sharpens iron. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/PZXuqCkKDztEAhPc.mp3",
  },
  {
    day: 23, date: "June 23, 2026", isoDate: "2026-06-23",
    title: "The Brotherhood of Covenant",
    scripture: "1 Samuel 18:3 (KJV)",
    verse: "Then Jonathan and David made a covenant, because he loved him as his own soul.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 23 of Iron Sharpens Iron.",
    keyPoints: [
      "David and Jonathan's friendship is one of the greatest examples of covenant brotherhood in all of Scripture. Jonathan was the crown prince — the heir to the throne. David was the one God had chosen to take that throne. By all rights, they should have been rivals. Instead, they became covenant brothers.",
      "Jonathan gave David his robe, his armor, his sword, his bow, and his belt — everything that represented his identity and his position. He was saying: I am for you, not against you. Your success is my success.",
      "That is the spirit of iron sharpening iron. Not competition, but covenant. Not jealousy, but celebration. A man who can celebrate another man's success is a man who is secure in his own identity.",
    ],
    callToAction: "Who is your Jonathan? Who is your David? Invest in a covenant brotherhood relationship this week. Be the man who gives his robe instead of guarding it.",
    close: "I love you, Kings. Iron sharpens iron. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/yJtqdYGJFaQAqDoj.mp3",
  },
  {
    day: 24, date: "June 24, 2026", isoDate: "2026-06-24",
    title: "Finishing What You Started",
    scripture: "Nehemiah 6:3 (KJV)",
    verse: "And I sent messengers unto them, saying, I am doing a great work, so that I cannot come down: why should the work cease, whilst I leave it, and come down to you?",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 24 of Iron Sharpens Iron.",
    keyPoints: [
      "Nehemiah was rebuilding the walls of Jerusalem, and his enemies tried everything to distract him, discourage him, and draw him away from the work. They sent messengers four times. Four times, Nehemiah refused to come down.",
      "His answer is one of the most powerful statements in Scripture: 'I am doing a great work, so that I cannot come down.' He knew his assignment. He refused to let distractions pull him off the wall.",
      "You have a great work to do. God has given you an assignment — in your family, your business, your ministry, your community. The enemy will send messengers to pull you down. Stay on the wall. Finish what you started.",
    ],
    callToAction: "What great work has God assigned to you? Refuse to come down today. Stay focused. Stay on the wall. Finish it.",
    close: "I love you, Kings. Iron sharpens iron. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/dvhtGquOLkTSBXAC.mp3",
  },
  {
    day: 25, date: "June 25, 2026", isoDate: "2026-06-25",
    title: "The Generational Blessing",
    scripture: "Deuteronomy 7:9 (KJV)",
    verse: "Know therefore that the Lord thy God, he is God, the faithful God, which keepeth covenant and mercy with them that love him and keep his commandments to a thousand generations.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 25 of Iron Sharpens Iron.",
    keyPoints: [
      "A thousand generations. That is the scope of God's covenant faithfulness. When you walk in obedience to God, you are not just blessing yourself — you are setting a trajectory for a thousand generations of your family.",
      "Every man who chooses righteousness over compromise is making a deposit into a generational account that his great-great-grandchildren will draw from. Your faithfulness today is someone else's inheritance tomorrow.",
      "You may never see the full fruit of your obedience in your lifetime. But God keeps covenant to a thousand generations. The seeds you plant in faithfulness will produce a harvest that outlasts your name.",
    ],
    callToAction: "Live today with a thousand-generation mindset. Every righteous choice you make is a generational deposit. Your legacy is being written right now.",
    close: "I love you, Kings. Iron sharpens iron. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/aaPgxrfgFwInVcUP.mp3",
  },
  {
    day: 26, date: "June 26, 2026", isoDate: "2026-06-26",
    title: "The Anchor Holds",
    scripture: "Hebrews 6:19 (KJV)",
    verse: "Which hope we have as an anchor of the soul, both sure and stedfast, and which entereth into that within the veil.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 26 of Iron Sharpens Iron.",
    keyPoints: [
      "A ship without an anchor is at the mercy of every wind and wave. It can be driven off course, pushed into dangerous waters, or dashed against the rocks. But a ship with a strong anchor — no matter how fierce the storm — holds its position.",
      "The hope we have in Jesus Christ is the anchor of our souls. It is sure. It is steadfast. It does not move. When the storms of life rage, when the winds of uncertainty blow, when the waves of fear crash — the anchor holds.",
      "A man who is anchored in Christ cannot be permanently moved. He may be shaken. He may be tested. But he will not be swept away. The anchor holds.",
    ],
    callToAction: "Check your anchor today. Is your hope firmly placed in Jesus Christ? In the storms ahead, the anchor is the only thing that will hold.",
    close: "I love you, Kings. Iron sharpens iron. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ohZGNNPLkxkbAqWl.mp3",
  },
  {
    day: 27, date: "June 27, 2026", isoDate: "2026-06-27",
    title: "Family BBQ Fellowship — The Table of Brotherhood",
    scripture: "Acts 2:46 (KJV)",
    verse: "And they, continuing daily with one accord in the temple, and breaking bread from house to house, did eat their meat with gladness and singleness of heart.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 27 of Iron Sharpens Iron. Today is Family BBQ Fellowship day — and this word is about the power of the table.",
    keyPoints: [
      "The early church did not just gather on Sundays. They broke bread together daily. They ate together. They laughed together. They built life together. The table was one of the most powerful places of ministry in the New Testament church.",
      "There is something that happens when men of God gather around a table — not just to eat, but to connect. Walls come down. Masks come off. Iron sharpens iron over a plate of ribs and a cold drink.",
      "Community is not a program. It is a lifestyle. When you show up today for the Family BBQ, you are not just attending an event. You are participating in the ancient practice of breaking bread together — and that is holy ground.",
    ],
    callToAction: "Show up today. Be present. Put the phone down. Look your brother in the eye. The table of fellowship is where brotherhood is built.",
    close: "I love you, Kings. Iron sharpens iron. See you at the BBQ!",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/RYDbiJHeZtcFcVqg.mp3",
  },
  {
    day: 28, date: "June 28, 2026", isoDate: "2026-06-28",
    title: "Sunday: The Final Sunday of Men's Month",
    scripture: "1 Corinthians 16:13 (KJV)",
    verse: "Watch ye, stand fast in the faith, quit you like men, be strong.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 28 of Iron Sharpens Iron. This is the final Sunday of Men's Month, and this word is a charge to every man of God.",
    keyPoints: [
      "Paul's charge to the Corinthian church is one of the most direct commands in all of Scripture: Watch. Stand fast. Quit you like men. Be strong. Four commands in one verse. A complete blueprint for a man of God.",
      "Watch — be alert, be discerning, be aware of the spiritual climate around you. Stand fast — do not waver, do not compromise, do not be moved. Quit you like men — act like the man God created you to be. Be strong — not in your own strength, but in the power of His might.",
      "This is your charge, Kings. Not just for this month, but for every day that follows. The world needs men who watch, stand fast, act like men, and are strong in the Lord.",
    ],
    callToAction: "Take this charge with you out of Men's Month. Watch. Stand fast. Quit you like men. Be strong. The world is waiting for the men of God to arise.",
    close: "I love you, Kings. Iron sharpens iron. See you in the house today.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/iNjtrvARpshJmVhn.mp3",
  },
  {
    day: 29, date: "June 29, 2026", isoDate: "2026-06-29",
    title: "Passing the Torch",
    scripture: "2 Timothy 2:2 (KJV)",
    verse: "And the things that thou hast heard of me among many witnesses, the same commit thou to faithful men, who shall be able to teach others also.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 29 of Iron Sharpens Iron.",
    keyPoints: [
      "Paul's instruction to Timothy was not just about personal growth — it was about multiplication. Take what you have received and pass it to faithful men who will pass it to others. The kingdom advances through the passing of the torch.",
      "Every man of God has a responsibility not just to grow himself, but to invest in the next generation. Who are you mentoring? Who are you discipling? Who is watching your life and learning how to be a man of God?",
      "The torch of faith is meant to be passed, not hoarded. When you invest in a younger man, you are not just changing his life — you are changing the lives of everyone he will ever influence.",
    ],
    callToAction: "Identify a younger man you can pour into. Pass the torch. The greatest legacy you can leave is a man who carries the fire after you are gone.",
    close: "I love you, Kings. Iron sharpens iron. I'll see you tomorrow for our final day.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/uWvhbrpFhFHSEhcC.mp3",
  },
  {
    day: 30, date: "June 30, 2026", isoDate: "2026-06-30",
    title: "Iron Sharpens Iron — Kings, You Made It",
    scripture: "Micah 6:8 (KJV)",
    verse: "He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God.",
    welcome: "Good morning, All Nations Kings. This is Pastor Shelia Blake, and welcome to Day 30 — the final day of our June series, Iron Sharpens Iron. Men's Month 2026 has been extraordinary.",
    keyPoints: [
      "Thirty days. Thirty words. Thirty opportunities to be sharpened, challenged, and strengthened. You showed up. You opened the Word. You chose to be the man God called you to be. That is not a small thing. That is faithfulness.",
      "Micah 6:8 is the simplest and most complete description of what God requires of a man. Do justly — live with integrity, treat people fairly, stand for what is right. Love mercy — extend grace, forgive freely, lead with compassion. Walk humbly — stay surrendered, stay teachable, stay close to God.",
      "You are not the same man who started this series on June 1st. You have been sharpened. You have been strengthened. You have been reminded of who you are and whose you are. Now go and be that man — in your home, in your church, in your community, and in the world.",
    ],
    callToAction: "This is not the end of Men's Month — it is the beginning of a lifestyle. Do justly. Love mercy. Walk humbly. Kings, go and change the world.",
    close: "I love you, Kings. Thank you for being sharpened this month. Iron sharpens iron. The best is still ahead. Arise and lead.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/iSgViGNIrcTevDYp.mp3",
  },

  // ── JULY 2026 — DNA: DESIGNED NOT AVERAGE ──────────────────────────────────
  {
    day: 1, date: "July 1, 2026", isoDate: "2026-07-01",
    title: "Designed on Purpose",
    scripture: "John 3:16 (KJV)",
    verse: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "All month, I want to ask you one question: Do you know Jesus? Because here's the thing about your DNA. You were designed on purpose by someone. You are not an accident, and you are not average.",
      "God didn't love the perfect or the put together. He loved the world — the tired you, the unsure you, the you that nobody else really sees — so much that He gave His Son to bring you home.",
      "You can't know who you truly are until you know the one who designed you. That's where we start this month.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "Go deeper at allnationsldcc.org/daily-word. God bless you.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/TYvACwrLpetcXIFJ.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/kzCfsZvWbzJbIPsw.jpg",
  },
  {
    day: 2, date: "July 2, 2026", isoDate: "2026-07-02",
    title: "Fearfully and Wonderfully Made",
    scripture: "Psalm 139:14 (KJV)",
    verse: "I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Psalm 139: You created my inmost being. You knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made.",
      "Knit together — that's not mass-produced. That's not average. That's God by hand designing you. Your laugh, your mind, the things that make you you. And it says He knew you before a word was on your tongue.",
      "To every young person who has ever felt overlooked, not enough, just one of the crowd — God says: I designed you myself, and I don't make average.",
    ],
    callToAction: "Because you were designed not average. Do you know Jesus? You'll never know who you really are until you know the one who designed you.",
    close: "See you tomorrow. AllNationsLDCC.org/daily-word.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/fEoqgqoxDuUqvIsz.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/pYCeOciAVZLSNlav.jpg",
  },
  {
    day: 3, date: "July 3, 2026", isoDate: "2026-07-03",
    title: "Not a Mistake",
    scripture: "Romans 5:8 (KJV)",
    verse: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Ever think, 'I'd come to God, but not like this — let me fix myself first'? Romans 5:8 says: while we were still sinners, Christ died for us. While we were still sinners — not after you cleaned up.",
      "You don't fix yourself to come to Jesus. You come, and He does the fixing. Your mistakes are not your DNA. Your Designer is.",
      "There is nothing you have done that makes God love you less, and nothing you can do to make Him love you more. Come as you are.",
    ],
    callToAction: "Because you were designed not average. Do you know Jesus? You'll never know who you really are until you know the one who designed you.",
    close: "AllNationsLDCC.org/daily-word.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/HCcKFTlSWtaaDuPD.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/AbNFjSNhMKwqPksi.jpg",
  },
  {
    day: 4, date: "July 4, 2026", isoDate: "2026-07-04",
    title: "Designed to Be Free",
    scripture: "John 8:36 (KJV)",
    verse: "If the Son therefore shall make you free, ye shall be free indeed.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake. Happy 4th of July.",
    keyPoints: [
      "Today we celebrate freedom. But let me ask the deeper question: are you actually free? You can live in the freest nation on Earth and still be bound on the inside by fear, by a habit, by a past that keeps replaying.",
      "Jesus said, 'If the Son sets you free, you will be free indeed.' John 8:36.",
      "You were not designed for chains. You were designed for free indeed — the kind that doesn't fade when the fireworks do.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus? Celebrate well.",
    close: "AllNationsLDCC.org/daily-word.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/XaTCzzeSUaXCWjGa.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/MqUtUBPWfBNorWxX.jpg",
  },
  {
    day: 5, date: "July 5, 2026", isoDate: "2026-07-05",
    title: "Your Past Is Not Your Design",
    scripture: "1 John 1:9 (KJV)",
    verse: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Some of us carry a weight called guilt — the thing you keep apologizing to God for. Hear this: If we confess our sins, He is faithful and just and will forgive us our sins and purify us from all unrighteousness. 1 John 1:9.",
      "All — not most. There is no sin so old or so hidden that Jesus can't wash it clean. Your past is not your DNA. The Designer already dealt with it at the cross.",
      "So put the weight down today and walk lighter. If you don't have a church home, we'd love to worship with you at All Nations.",
    ],
    callToAction: "Because you were designed not average. Do you know Jesus? You'll never know who you really are until you know the one who designed you.",
    close: "AllNationsLDCC.org/daily-word.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/VowpBFberIDutNIu.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NwAlJHJIKsgGBSwx.jpg",
  },
  {
    day: 6, date: "July 6, 2026", isoDate: "2026-07-06",
    title: "Designed for More Than Exhaustion",
    scripture: "Matthew 11:28 (KJV)",
    verse: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Maybe you woke up already tired — tired in a way the weekend didn't fix. Jesus says, 'Come to me all you who are weary and burdened and I will give you rest.' He doesn't say fix yourself first. He says, just come.",
      "You were not designed to run on empty. You were designed to be carried by the One who made you. That is not weakness — that is wisdom.",
      "Start this week leaning on Him.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the One who designed you. Do you know Jesus?",
    close: "AllNationsLDCC.org/daily-word.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/umYpqJjYVwXIWsBe.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/BCQHPllnFPiHpAWp.jpg",
  },
  {
    day: 7, date: "July 7, 2026", isoDate: "2026-07-07",
    title: "Designed with Purpose",
    scripture: "Colossians 3:23 (KJV)",
    verse: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "That knot in your stomach about work, about school, about the week — hear this: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.' Colossians 3:23.",
      "You weren't designed to just clock in and disappear. Wherever God placed you, He placed you on purpose.",
      "Average people blend in, but you were designed to shine right where you are. Someone there may need to see Jesus in you today.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "AllNationsLDCC.org/daily-word.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OdjlZurPBMAExQvm.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/UlzjNXFjsIdBIYYy.jpg",
  },
  {
    day: 8, date: "July 8, 2026", isoDate: "2026-07-08",
    title: "Designed for Peace, Not Panic",
    scripture: "Philippians 4:6-7 (KJV)",
    verse: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "That racing heart, that 2:00 AM worry — God has a word for it.",
      "'Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts.'",
      "You are not designed to carry what only God can hold.",
    ],
    callToAction: "Hand it to Him this morning because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "AllNationsLDCC.org/daily-word.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/lNjEWKucxCZipzfz.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/xTtRaqAajnAHceDh.jpg",
  },
  {
    day: 9, date: "July 9, 2026", isoDate: "2026-07-09",
    title: "Designed to Be Provided For",
    scripture: "Matthew 6:31-33 (KJV)",
    verse: "Therefore take no thought, saying, What shall we eat? or, What shall we drink? or, Wherewithal shall we be clothed? But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Watching the bills stack up? Jesus said, 'Don't worry, saying what shall we eat? Your heavenly Father knows that you need them.'",
      "But seek first His kingdom and His righteousness, and all these things will be given to you as well.",
      "The God who designed you didn't bring you this far to drop you now. Seek Him first today.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "AllNationsLDCC.org/daily-word.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/IhDuYVeLOMEUTPey.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/NhBvXHFASSxcDrPx.jpg",
  },
  {
    day: 10, date: "July 10, 2026", isoDate: "2026-07-10",
    title: "Designed for Your Home",
    scripture: "Joshua 24:15 (KJV)",
    verse: "But as for me and my house, we will serve the Lord.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Maybe your house has been tense lately. Hear Joshua's stand: 'As for me and my household, we will serve the Lord.' It starts with one person deciding. You can be that person.",
      "You can be the one whose faith changes the atmosphere at home. You don't need everyone to agree first. You just need to make the decision.",
      "God designed your family on purpose. Make the Joshua declaration today.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "AllNationsLDCC.org/daily-word.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/sMbXRxnELeJmJUli.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/LfIikCDMRjjSjqWn.jpg",
  },
  // ── JULY DAYS 11–16 ──────────────────────────────────────────────────────
  {
    day: 11, date: "July 11, 2026", isoDate: "2026-07-11",
    title: "Designed with Strength",
    scripture: "Philippians 4:13 (KJV)",
    verse: "I can do all things through Christ which strengtheneth me.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Facing something that feels too big? Philippians 4:13 says: 'I can do all things through Christ which strengtheneth me.' Not some things. Not easy things. All things — through Christ.",
      "The strength was never supposed to come from you. It was always supposed to flow through you from the One who designed you.",
      "Whatever is in front of you today, you do not face it alone or empty. Christ is your strength.",
    ],
    callToAction: "You were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "Go deeper at allnationsldcc.org/daily-word. God bless you.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/gSQZehIfDDmdksPJ.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OHLAfppzwsNCINQA.jpg",
  },
  {
    day: 12, date: "July 12, 2026", isoDate: "2026-07-12",
    title: "Designed to Overcome",
    scripture: "1 Corinthians 10:13 (KJV)",
    verse: "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "That thing you keep fighting in private — God is faithful. He will not let you be tempted beyond what you can bear. But when you are tempted, He will also provide a way out.",
      "There is always a way out. His name is Jesus. You were not designed to stay stuck.",
      "God designed you with the capacity to overcome. Take the door God is opening today. You are not a victim of your circumstances — you are an overcomer by design.",
    ],
    callToAction: "Take the door God's opening today — because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "I'll see you tomorrow. AllNationsLDCC.org/daily-word.",
    audioUrl: "/daily-word-day12-corrected.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/FNvlJUsJlzCodExY.jpg",
  },
  {
    day: 13, date: "July 13, 2026", isoDate: "2026-07-13",
    title: "Designed to Answer the Call",
    scripture: "Revelation 3:20 (KJV)",
    verse: "Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Revelation 3:20 says: 'Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me.'",
      "Jesus is not forcing the door. He is knocking. The question is: will you open it?",
      "You were designed to answer that knock. Your whole identity — your purpose, your calling, your DNA — is on the other side of that door.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "AllNationsLDCC.org/daily-word.",
    audioUrl: "/daily-word-day13-corrected.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/XenNsHUPjueEVbbx.jpg",
  },
  {
    day: 14, date: "July 14, 2026", isoDate: "2026-07-14",
    title: "Designed: Never Alone",
    scripture: "Hebrews 13:5 (KJV)",
    verse: "I will never leave thee, nor forsake thee.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Feeling alone, even in a crowd? Hebrews 13:5 says: 'I will never leave thee, nor forsake thee.' That is God's word to you today.",
      "People may walk out. God never has and never will. The one who designed you stays.",
      "You are not as alone as you feel this morning.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "All Nations. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OujHEPKpSRWeYnsb.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/rnPWcucDwcJFSJHD.jpg",
  },
  {
    day: 15, date: "July 15, 2026", isoDate: "2026-07-15",
    title: "Designed to Be Healed",
    scripture: "Psalm 147:3 (KJV)",
    verse: "He healeth the broken in heart, and bindeth up their wounds.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Carrying a hurt nobody can see? Psalm 147:3 says: 'He healeth the broken in heart, and bindeth up their wounds.' That is God's word to you today.",
      "The same God who designed your heart knows exactly how to mend it. Bring Him the broken pieces today.",
      "He is gentle with them.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/iUVsKpnaQfaVKwEa.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/elFHvvSiLpHgVVtR.jpg",
  },
  {
    day: 16, date: "July 16, 2026", isoDate: "2026-07-16",
    title: "Designed for Peace, Not Chaos",
    scripture: "John 14:27 (KJV)",
    verse: "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "When everything inside feels like chaos — hear this from John 14:27: 'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.'",
      "The world's peace runs out. Christ's peace holds in the storm.",
      "You were designed to carry His calm.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/sIplwKFNpQWBTiDc.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/AISwuCiXIXfMmlVY.jpg",
  },
  // ── JULY DAY 17 ──────────────────────────────────────────────────────
  {
    day: 17, date: "July 17, 2026", isoDate: "2026-07-17",
    title: "Designed to Stand",
    scripture: "Ephesians 6:13 (KJV)",
    verse: "Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake. Happy Friday.",
    keyPoints: [
      "Ephesians 6:13 says: 'Wherefore take unto you the whole armour of God, that ye may be able to withstand in the evil day, and having done all, to stand.'",
      "When pressure comes — peer pressure, temptation, doubt — God didn't design you to crumble. He designed you to stand. Put on His armor. Truth, righteousness, faith, salvation, the Word. You have everything you need to stay on your feet.",
      "You were designed to stand, not fall.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "Go deeper at allnationsldcc.org/daily-word. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/FLBGPyeyuDBOGLuP.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OHLAfppzwsNCINQA.jpg",
  },
  // ── JULY DAY 18 ──────────────────────────────────────────────────────
  {
    day: 18, date: "July 18, 2026", isoDate: "2026-07-18",
    title: "Designed to Be Bold",
    scripture: "2 Timothy 1:7 (KJV)",
    verse: "For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake. Happy Saturday.",
    keyPoints: [
      "2 Timothy 1:7 says: 'For God hath not given us the spirit of fear; but of power, and of love, and of a sound mind.'",
      "Fear is loud, but it's not from God. Power is. Love is. A sound mind is. Whatever has you afraid today — speaking up, stepping out, making a change — that fear is not your design. Boldness is.",
      "You were designed to be bold, not afraid.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "Go deeper at allnationsldcc.org/daily-word. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/xcPGNrmZPvOqFzHx.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OHLAfppzwsNCINQA.jpg",
  },
  // ── JULY DAY 19 ──────────────────────────────────────────────────────
  {
    day: 19, date: "July 19, 2026", isoDate: "2026-07-19",
    title: "Designed to Worship",
    scripture: "Psalm 150:6 (KJV)",
    verse: "Let every thing that hath breath praise the Lord. Praise ye the Lord.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake. Happy Sunday.",
    keyPoints: [
      "Psalm 150:6 says: 'Let every thing that hath breath praise the Lord. Praise ye the Lord.'",
      "If you have breath, you were designed to praise Him. Not because everything is perfect — but because He is. Worship is not about a song. It's about surrender. It's about saying, 'God, You are bigger than what I'm facing.'",
      "If you don't have a church home, we'd love to worship with you at All Nations.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "Go deeper at allnationsldcc.org/daily-word. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/VzpJoWvfpBtMwgCt.wav",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OHLAfppzwsNCINQA.jpg",
  },
  // ── JULY DAY 20 ──────────────────────────────────────────────────────
  {
    day: 20, date: "July 20, 2026", isoDate: "2026-07-20",
    title: "Designed to Lead",
    scripture: "1 Timothy 4:12 (KJV)",
    verse: "Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake. Happy Monday.",
    keyPoints: [
      "1 Timothy 4:12 says: 'Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.'",
      "Young person, your age is not a disqualification. God is not waiting for you to grow up to use you. He wants to use you right now — your voice, your example, your faith.",
      "You were designed to lead, not follow the crowd.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "Go deeper at allnationsldcc.org/daily-word. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/DtmlrrAyZHyfqfSd.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OHLAfppzwsNCINQA.jpg",
  },
  // ── JULY DAY 21 ──────────────────────────────────────────────────────
  {
    day: 21, date: "July 21, 2026", isoDate: "2026-07-21",
    title: "Designed for Community",
    scripture: "Hebrews 10:25 (KJV)",
    verse: "Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.",
    welcome: "Welcome to the Daily Word. It's Youth Month and our theme is DNA: Designed Not Average. I'm Pastor Shelia Blake.",
    keyPoints: [
      "Hebrews 10:25 says: 'Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.'",
      "You were not designed to do life alone. You need people who will push you toward God, not pull you away. The enemy wants you isolated. God wants you connected.",
      "Find your people. Find your church. You were designed for community.",
    ],
    callToAction: "Because you were designed not average, and you'll never know who you really are until you know the one who designed you. Do you know Jesus?",
    close: "Go deeper at allnationsldcc.org/daily-word. I'll see you tomorrow.",
    audioUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ztlAZZWMcmnbFnpJ.mp3",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/OHLAfppzwsNCINQA.jpg",
  },
];

// Returns today's date string in Eastern Time (America/New_York)
// Each day unlocks at 12:00 AM EST/EDT — correct for Port St. Lucie, FL members
function getEasternDateString(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" });
}

function getTodayEntry(): DayEntry | null {
  const today = getEasternDateString();
  return entries.find(e => e.isoDate === today) || null;
}

function getEntryStatus(isoDate: string): "past" | "today" | "future" {
  const today = getEasternDateString();
  if (isoDate < today) return "past";
  if (isoDate === today) return "today";
  return "future";
}

function AudioPlayer({ audioUrl, videoUrl }: { audioUrl?: string; videoUrl?: string }) {
  // If a cinematic video is available, show the full video player
  if (videoUrl) {
    return (
      <div className="rounded-2xl overflow-hidden mb-6" style={{ background: "#000", boxShadow: "0 4px 32px rgba(0,0,0,0.25)" }}>
        <video
          controls
          className="w-full"
          style={{ display: "block", maxHeight: "480px", background: "#000" }}
          poster={undefined}
          preload="metadata"
        >
          <source src={videoUrl} type="video/mp4" />
          {audioUrl && <source src={audioUrl} type="audio/mpeg" />}
          Your browser does not support the video tag.
        </video>
        <div className="flex items-center gap-2 px-4 py-2" style={{ background: NAVY }}>
          <Volume2 size={14} style={{ color: GOLD }} />
          <span className="font-body text-xs text-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            DNA: Designed Not Average · Daily Word with Pastor Shelia Blake
          </span>
        </div>
      </div>
    );
  }
  // Fallback: audio-only player for months without video
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
  return null;
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
      {/* Video / Audio Player */}
      <AudioPlayer audioUrl={entry.audioUrl} videoUrl={entry.videoUrl} />

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

// Month metadata for dynamic labels
const MONTH_META: Record<string, { title: string; theme: string; subtitle: string; archiveLabel: string }> = {
  "2026-04": { title: "KEEP THE FIRE BURNING", theme: "April 2026 Daily Word Theme", subtitle: "Miss a meal, miss a song — but don't miss the Word", archiveLabel: "April 2026 Daily Word Archive" },
  "2026-05": { title: "ARISE AND TAKE FLIGHT", theme: "May 2026 Daily Word Theme — Women's Month", subtitle: "Miss a meal, miss a song — but don't miss the Word", archiveLabel: "May 2026 Daily Word Archive" },
  "2026-06": { title: "KINGS: FUEL THE FIRE", theme: "June 2026 Daily Word Theme — Men's Month", subtitle: "Fuel Your Fire, Generation to Generation", archiveLabel: "June 2026 Daily Word Archive" },
  "2026-07": { title: "DNA: DESIGNED NOT AVERAGE", theme: "July 2026 Daily Word Series", subtitle: "You are not average. You were designed by God.", archiveLabel: "July 2026 Daily Word Archive" },
};

// Per-month hero banner images
const MONTH_HERO: Record<string, string> = {
  "2026-04": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ZYgelpDxFiXnxGvd.jpg",
  "2026-05": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ZYgelpDxFiXnxGvd.jpg",
  "2026-06": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/ZYgelpDxFiXnxGvd.jpg",
  "2026-07": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/dQwEhxZkhpBIbZRX.png",
};

export default function DailyWord() {
  const todayEntry = getTodayEntry();
  // Use Eastern Time for month detection — locks to America/New_York (Port St. Lucie, FL)
  const easternDate = getEasternDateString();
  const currentMonthPrefix = easternDate.substring(0, 7);  // "2026-07"
  const meta = MONTH_META[currentMonthPrefix] || { title: "DAILY WORD", theme: "Daily Devotional", subtitle: "Miss a meal, miss a song — but don't miss the Word", archiveLabel: "Daily Word Archive" };
  const currentMonthEntries = entries.filter(e => e.isoDate.startsWith(currentMonthPrefix));

  return (
    <div className="min-h-screen" style={{ background: CREAM }}>
      <Navbar />

      {/* SECTION 1 — HERO BANNER */}
      <section className="relative overflow-hidden" style={{ borderTop: `4px solid ${GOLD}`, borderBottom: `4px solid ${GOLD}` }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${MONTH_HERO[currentMonthPrefix] || "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/HMJOVsTLWyFutnDI.jpg"}')` }} />
        <div className="absolute inset-0" style={{ background: 'rgba(26,47,107,0.55)' }} />
        <div className="relative z-10 container py-20 text-center">
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
            style={{ fontFamily: "'Playfair Display', Georgia, serif", textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            {meta.title}
          </h1>
          <p className="font-body font-bold text-base mb-2" style={{ color: GOLD, fontFamily: "'Open Sans', sans-serif", textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            {meta.theme}
          </p>
          <p className="font-body text-sm italic" style={{ color: "rgba(255,255,255,0.90)", fontFamily: "'Open Sans', sans-serif", textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
            {meta.subtitle}
          </p>
          <p className="font-body text-xs mt-3" style={{ color: "rgba(255,255,255,0.70)", fontFamily: "'Open Sans', sans-serif" }}>
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
              {todayEntry ? "Today's Word" : meta.archiveLabel.replace(" Archive", "")}
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
                The {meta.archiveLabel.replace(" Archive", "")} series runs all month long. Browse the full archive below to read any day's word.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3 — CURRENT MONTH ARCHIVE GRID */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar size={18} style={{ color: GOLD }} />
            <h2 className="font-display text-3xl font-bold"
                style={{ color: NAVY, fontFamily: "'Playfair Display', Georgia, serif" }}>
              {meta.archiveLabel}
            </h2>
          </div>
          <p className="font-body text-base" style={{ color: GOLD, fontFamily: "'Open Sans', sans-serif" }}>
              Walk the full {meta.title.split(" ").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")} series
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {currentMonthEntries.map(entry => (
              <ArchiveCard key={entry.isoDate} entry={entry} />
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
