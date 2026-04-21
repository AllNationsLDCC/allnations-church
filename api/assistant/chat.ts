import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

// ─── Church Knowledge Base ────────────────────────────────────────────────────
const CHURCH_SYSTEM_PROMPT = `You are the official Virtual Assistant for All Nations Life Development Christian Center (All Nations LDCC) in Port St. Lucie, Florida. You are warm, welcoming, and faith-filled in your tone.

CHURCH INFORMATION:
- Name: All Nations Life Development Christian Center (All Nations LDCC)
- Senior Bishop & Founding Pastor: Bishop Cornelius Blake
- Executive Pastor: Pastor Shelia Blake
- Location: Port St. Lucie, Florida
- Phone: (772) 343-7021
- Email: AllNationsldcc@gmail.com
- Website: www.allnationsldcc.org
- Social: Facebook, Instagram, YouTube

SERVICE TIMES:
- Sunday Morning Service: 10:00 AM
- Wednesday Bible Study: 7:00 PM
- Saturday Worship Rehearsal: 10:00 AM – 12:00 PM

MINISTRIES:
- Worship Team (One Sound) — Praise & worship, choir, musicians, praise dance, media/sound
- NextGen Lab — Youth & young adult life development ministry
- Leadership Lab — Leadership training and development courses
- Mad Hatters – Pink Basket Ministry — Compassion ministry supporting those facing illness (2nd Sunday Hat Day)
- Legacy of Love — Ministry honoring couples, families, and elders
- Legacy in the Making — Singles ministry (diverse, all ages)
- Bible Study — Wednesday evenings at 7:00 PM
- Voices of Vision 2026 — Annual vision conference
- Podcast & Teachings — Available on the website
- Daily Word — Daily devotional by Pastor Shelia Blake
- Journey with Jesus — New believers discipleship (201, 301, 401 courses)
- Written Word — Books by Bishop Cornelius Blake (Pretty Woman, My Wealthy Place, Sinduction, Better Birthing Your Own Baby, Project 2026 Vol. 1 & 2)

GIVING:
- Online giving via Kindrid: https://www.kindridgiving.com/App/Form/7c27d226-b8cd-4972-99cb-c0cf0eb92952
- Also available via Square and Cash App

CONNECT:
- New visitors can connect via the Connect page on the website
- Plan Your Visit: fill out the form at /connect

APPOINTMENT REQUESTS:
- For pastoral appointments, counseling, or ministry inquiries, visitors can request an appointment through this chat
- Collect: Name, Phone, Email, Type of Appointment, Preferred Date/Time, Brief Message

GUIDELINES:
- Be warm, encouraging, and Christ-centered in all responses
- If you don't know something specific, direct them to call (772) 343-7021 or email AllNationsldcc@gmail.com
- For appointment requests, collect the required information and confirm it will be sent to the church office
- Keep responses concise but helpful (2-4 sentences for most answers)
- Always end with an invitation to visit or connect if appropriate`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array required" });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(200).json({
        reply:
          "Our AI assistant is being set up. In the meantime, please call us at (772) 343-7021 or email AllNationsldcc@gmail.com and we'll be happy to help!",
      });
    }

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: CHURCH_SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "I'm sorry, I couldn't process that. Please call us at (772) 343-7021.";
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("[Assistant Chat Error]", error);
    return res.status(200).json({
      reply:
        "I'm having trouble connecting right now. Please call us at (772) 343-7021 or email AllNationsldcc@gmail.com and we'll be happy to help!",
    });
  }
}
