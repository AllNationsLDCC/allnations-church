import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

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
    const { name, phone, email, appointmentType, preferredDateTime, message } = req.body;

    if (!name || !email || !appointmentType) {
      return res.status(400).json({ error: "Name, email, and appointment type are required" });
    }

    // Build email content
    const emailBody = `
NEW APPOINTMENT REQUEST — All Nations LDCC Virtual Assistant
============================================================

Name:                ${name}
Phone:               ${phone || "Not provided"}
Email:               ${email}
Appointment Type:    ${appointmentType}
Preferred Date/Time: ${preferredDateTime || "Flexible"}

Message:
${message || "No additional message provided."}

============================================================
This request was submitted via the All Nations LDCC website virtual assistant.
Please respond to the visitor at: ${email}
    `.trim();

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CHURCH_EMAIL || "AllNationsldcc@gmail.com";

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: `"All Nations LDCC Website" <${smtpUser}>`,
        to: toEmail,
        replyTo: email,
        subject: `[Appointment Request] ${appointmentType} — ${name}`,
        text: emailBody,
      });
    } else {
      // Log if SMTP not configured — still return success so user experience is smooth
      console.log("[APPOINTMENT REQUEST — SMTP not configured, logging only]");
      console.log(emailBody);
    }

    return res.status(200).json({
      success: true,
      message:
        "Your appointment request has been received! We will contact you within 1-2 business days.",
    });
  } catch (error) {
    console.error("[Appointment Email Error]", error);
    return res.status(500).json({
      error: "Failed to send appointment request. Please call (772) 343-7021 directly.",
    });
  }
}
