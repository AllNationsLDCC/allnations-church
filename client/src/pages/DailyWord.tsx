// Design: Warm, pastoral, professional — Playfair Display headings, Open Sans body
// Brand: Deep Navy #1A2F6B | Gold #C8901A | Cream #F5F0E8 | White #FFFFFF | Dark #222222
// Daily Word by Pastor Shelia Blake — May 2026 Theme: Arise and Take Flight

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
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/abaAqsunRbwjoFVC.png",
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
            ARISE AND TAKE FLIGHT
          </h1>
          <p className="font-body font-bold text-base mb-2" style={{ color: GOLD, fontFamily: "'Open Sans', sans-serif" }}>
            May 2026 Daily Word Theme — Women's Month
          </p>
          <p className="font-body text-sm italic" style={{ color: "rgba(255,255,255,0.70)", fontFamily: "'Open Sans', sans-serif" }}>
            Miss a meal, miss a song — but don't miss the Word
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
              {todayEntry ? "Today's Word" : "May 2026 Daily Word"}
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
                The May 2026 Daily Word series — Arise and Take Flight — runs all month long. Browse the full archive below to read any day's word.
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
              May 2026 Daily Word Archive
            </h2>
          </div>
          <p className="font-body text-base" style={{ color: GOLD, fontFamily: "'Open Sans', sans-serif" }}>
              Walk the full Arise and Take Flight series
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {entries.filter(entry => {
              const now = new Date();
              const currentMonthPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
              return entry.isoDate.startsWith(currentMonthPrefix);
            }).map(entry => (
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
