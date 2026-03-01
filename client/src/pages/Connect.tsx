import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Connect() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", visit: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! We will be in touch with you shortly. God bless you!");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container relative z-10 text-center">
          <span className="section-label" style={{ color: "var(--an-gold)" }}>We'd Love to Hear From You</span>
          <h1 className="font-display text-5xl font-bold text-white mt-2 mb-4">Connect With Us</h1>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.80)" }}>
            Whether you are visiting for the first time, seeking counseling, or looking to get involved — we are here for you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="section-label">Find Us</span>
                <h2 className="font-display text-3xl font-bold mb-6" style={{ color: "var(--an-navy)" }}>
                  Get in <span style={{ color: "var(--an-gold)" }}>Touch</span>
                </h2>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--an-gold)" }}>
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-sm mb-1" style={{ color: "var(--an-navy)" }}>Address</div>
                    <div className="font-body text-sm" style={{ color: "#666" }}>
                      862 SW Glenview Ct<br />Port St. Lucie, FL 34953
                    </div>
                    <a
                      href="https://maps.google.com/?q=862+SW+Glenview+Ct+Port+St+Lucie+FL+34953"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs font-bold mt-2 inline-block"
                      style={{ color: "var(--an-teal)" }}
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--an-teal)" }}>
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-sm mb-1" style={{ color: "var(--an-navy)" }}>Phone</div>
                    <a href="tel:7723437021" className="font-body text-sm hover:opacity-80 transition-opacity" style={{ color: "#666" }}>
                      772-343-7021
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--an-blue)" }}>
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-sm mb-1" style={{ color: "var(--an-navy)" }}>Email</div>
                    <a href="mailto:info@allnationsldcc.org" className="font-body text-sm hover:opacity-80 transition-opacity" style={{ color: "#666" }}>
                      info@allnationsldcc.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "var(--an-green)" }}>
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-sm mb-1" style={{ color: "var(--an-navy)" }}>Office Hours</div>
                    <div className="font-body text-sm" style={{ color: "#666" }}>
                      By appointment — please call to schedule.
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div className="p-6 rounded-xl" style={{ background: "var(--an-navy)" }}>
                <div className="font-display font-bold text-white text-base mb-4">Service Times</div>
                <div className="space-y-3">
                  {[
                    { label: "Sunday 1st Service", time: "8:30 AM" },
                    { label: "Sunday 2nd Service", time: "11:00 AM" },
                    { label: "Wednesday Bible Study", time: "7:00 PM" },
                  ].map(s => (
                    <div key={s.label} className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="font-body text-sm" style={{ color: "rgba(255,255,255,0.80)" }}>{s.label}</span>
                      <span className="font-body font-bold text-sm" style={{ color: "var(--an-gold)" }}>{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="font-body font-bold text-sm mb-4" style={{ color: "var(--an-navy)" }}>Follow Us</div>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/AllNationsLDCC/" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                    style={{ background: "#1877F2" }}>
                    <Facebook size={18} />
                  </a>
                  <a href="https://www.instagram.com/allnationsldcc/" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                    style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                    <Instagram size={18} />
                  </a>
                  <a href="https://www.youtube.com/c/allnationslifedevelopmentchristiancenter" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-opacity hover:opacity-80"
                    style={{ background: "#FF0000" }}>
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "var(--an-green)" }}>
                      <Mail size={28} className="text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--an-navy)" }}>Message Received!</h3>
                    <p className="font-body text-base" style={{ color: "#666" }}>
                      Thank you for reaching out to All Nations LDCC. We will be in touch with you shortly. God bless you!
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-bold mb-2" style={{ color: "var(--an-navy)" }}>Send Us a Message</h3>
                    <p className="font-body text-sm mb-6" style={{ color: "#888" }}>
                      Fill out the form below and a member of our team will respond within 24–48 hours.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-body font-bold text-xs mb-1.5 block" style={{ color: "var(--an-navy)" }}>Full Name *</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={e => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg font-body text-sm border outline-none focus:ring-2 transition-all"
                            style={{ border: "1px solid #e5e7eb", color: "#333" }}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="font-body font-bold text-xs mb-1.5 block" style={{ color: "var(--an-navy)" }}>Email Address *</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg font-body text-sm border outline-none focus:ring-2 transition-all"
                            style={{ border: "1px solid #e5e7eb", color: "#333" }}
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-body font-bold text-xs mb-1.5 block" style={{ color: "var(--an-navy)" }}>Phone Number</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg font-body text-sm border outline-none focus:ring-2 transition-all"
                            style={{ border: "1px solid #e5e7eb", color: "#333" }}
                            placeholder="(772) 000-0000"
                          />
                        </div>
                        <div>
                          <label className="font-body font-bold text-xs mb-1.5 block" style={{ color: "var(--an-navy)" }}>Subject</label>
                          <select
                            value={form.subject}
                            onChange={e => setForm({ ...form, subject: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg font-body text-sm border outline-none focus:ring-2 transition-all"
                            style={{ border: "1px solid #e5e7eb", color: form.subject ? "#333" : "#aaa" }}
                          >
                            <option value="">Select a topic</option>
                            <option value="visit">Plan a Visit</option>
                            <option value="membership">Membership</option>
                            <option value="counseling">Counseling Services</option>
                            <option value="ministry">Ministry / Classes</option>
                            <option value="prayer">Prayer Request</option>
                            <option value="giving">Giving / Tithing</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="font-body font-bold text-xs mb-1.5 block" style={{ color: "var(--an-navy)" }}>Message *</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg font-body text-sm border outline-none focus:ring-2 transition-all resize-none"
                          style={{ border: "1px solid #e5e7eb", color: "#333" }}
                          placeholder="How can we help you? Share your prayer request, question, or how you'd like to connect with us..."
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          id="visit"
                          checked={form.visit}
                          onChange={e => setForm({ ...form, visit: e.target.checked })}
                          className="w-4 h-4 rounded"
                        />
                        <label htmlFor="visit" className="font-body text-sm" style={{ color: "#666" }}>
                          I am interested in planning a visit to All Nations LDCC
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn-gold w-full py-4 text-base font-bold"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
