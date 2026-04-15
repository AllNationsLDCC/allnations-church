/**
 * EmailJS Configuration for All Nations LDCC
 * 
 * All form submissions are sent to AllNationsldcc@gmail.com via EmailJS.
 * 
 * SETUP REQUIRED:
 * 1. Go to https://www.emailjs.com and sign up with AllNationsldcc@gmail.com
 * 2. Add Gmail as an email service (Service ID will be needed)
 * 3. Create email templates for each form (see template instructions below)
 * 4. Copy your Public Key from Account > API Keys
 * 5. Update the constants below with your actual IDs
 * 
 * TEMPLATE INSTRUCTIONS:
 * 
 * Template: "contact_form" — for the Connect page contact form
 *   Variables: {{from_name}}, {{from_email}}, {{phone}}, {{subject}}, {{message}}, {{visit}}
 *   Subject line: New Contact Form: {{subject}} from {{from_name}}
 * 
 * Template: "registration_form" — for Bible Study & Leadership Lab registrations
 *   Variables: {{from_name}}, {{from_email}}, {{phone}}, {{program}}, {{attendance}}, {{details}}
 *   Subject line: New Registration: {{program}} — {{from_name}}
 * 
 * Template: "newsletter_signup" — for Daily Word email signup
 *   Variables: {{from_email}}
 *   Subject line: New Daily Word Subscriber: {{from_email}}
 */

import emailjs from "@emailjs/browser";

// ═══════════════════════════════════════════════════════════════════════════════
// UPDATE THESE VALUES after setting up your EmailJS account
// ═══════════════════════════════════════════════════════════════════════════════
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "KRwGI1QmAafrdSHGv";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_pqxnli4";

// Template IDs — create these in your EmailJS dashboard
export const TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || "contact_form";
export const TEMPLATE_REGISTRATION = import.meta.env.VITE_EMAILJS_TEMPLATE_REGISTRATION || "registration_form";
export const TEMPLATE_NEWSLETTER = import.meta.env.VITE_EMAILJS_TEMPLATE_NEWSLETTER || "registration_form";

// Initialize EmailJS
let initialized = false;
function ensureInit() {
  if (!initialized) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    initialized = true;
  }
}

/**
 * Send an email via EmailJS
 * @param templateId - The EmailJS template ID
 * @param templateParams - Key-value pairs matching template variables
 * @returns Promise<boolean> - true if sent successfully
 */
export async function sendEmail(
  templateId: string,
  templateParams: Record<string, string>
): Promise<boolean> {
  ensureInit();
  try {
    const result = await emailjs.send(EMAILJS_SERVICE_ID, templateId, templateParams);
    console.log("EmailJS success:", result.status, result.text);
    return true;
  } catch (error) {
    console.error("EmailJS error:", error);
    return false;
  }
}
