import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Clock, MapPin, Video, CheckCircle, Users, ArrowRight, Mail, Loader2 } from "lucide-react";
import { sendEmail, TEMPLATE_REGISTRATION } from "@/lib/emailjs";
import { toast } from "sonner";

// Design: Elevation-quality, warm light bg, teal accent for Bible Study
// Wednesday Night Bible Study — Pastor R.B. Thomas, hybrid (in-person + Zoom), free

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  attendance: "in-person" | "online" | "";
};

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  attendance: "",
};

export default function BibleStudy() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "A valid email address is required.";
    if (!form.attendance) (e as Record<string,string>).attendance = "Please select your attendance type.";
    return e;
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    const success = await sendEmail(TEMPLATE_REGISTRATION, {
      from_name: `${form.firstName} ${form.lastName}`,
      from_email: form.email,
      phone: form.phone || "Not provided",
      program: "Wednesday Night Bible Study",
      attendance: form.attendance === "in-person" ? "In-Person" : "Online (Zoom)",
      details: `Attendance: ${form.attendance === "in-person" ? "In-Person" : "Online (Zoom)"}`,
    });
    setSending(false);
    if (success) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      toast.success("Registration submitted! We will be in touch shortly.");
    } else {
      toast.error("Something went wrong. Please try again or email us at AllNationsldcc@gmail.com.");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--an-bg)" }}>
      <Navbar />

      {/* Hero */}
      <div className="page-hero" style={{ background: "linear-gradient(135deg, var(--an-teal) 0%, #0a3d3d 100%)" }}>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="section-label" style={{ color: "var(--an-gold)" }}>Every Wednesday Evening</span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-2 mb-4 leading-tight">
              Wednesday Night <span style={{ color: "var(--an-gold)" }}>Bible Study</span>
            </h1>
            <p className="font-body text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              Join us every Wednesday evening as we go deeper into the Word of God together. Led by Pastor R.B. Thomas, this is your invitation to grow, learn, and be transformed by Scripture — in person or online.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white">
                <Clock size={18} style={{ color: "var(--an-gold)" }} />
                <span className="font-body font-semibold">7:00 PM Every Wednesday</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <MapPin size={18} style={{ color: "var(--an-gold)" }} />
                <span className="font-body font-semibold">In-Person & Online via Zoom</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <BookOpen size={18} style={{ color: "var(--an-gold)" }} />
                <span className="font-body font-semibold">Free — All Are Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
              {[
              {
                icon: <Users size={28} />,
                title: "Led by Pastor R.B. Thomas",
                desc: "Pastor R.B. Thomas brings depth, clarity, and passion to every study session — making Scripture accessible, relevant, and life-changing for every believer.",
                color: "var(--an-teal)",
                photo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663485607175/UjQckkeLHiyBEZNT.jpeg",
              },
              {
                icon: <Video size={28} />,
                title: "Hybrid Participation",
                desc: "Join us in the sanctuary at 862 SW Glenview Ct, Port St. Lucie, or connect live from anywhere in the world via Zoom. The Word reaches you wherever you are.",
                color: "var(--an-navy)",
              },
              {
                icon: <BookOpen size={28} />,
                title: "Free & Open to All",
                desc: "Wednesday Night Bible Study is completely free. Whether you are a lifelong believer or just beginning your faith journey, you are welcome at this table.",
                color: "var(--an-gold)",
              },
            ].map(card => (
              <div key={card.title} className="ministry-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center">
                {(card as any).photo ? (
                  <div className="relative w-full" style={{ height: "300px" }}>
                    <img src={(card as any).photo} alt={card.title} className="w-full h-full object-cover" style={{ objectPosition: '50% 15%' }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.5) 100%)" }} />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mt-8 mb-5" style={{ background: card.color }}>
                    {card.icon}
                  </div>
                )}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--an-navy)" }}>{card.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#666" }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20" style={{ background: "var(--an-bg)" }}>
        <div className="container">
          <div className="max-w-2xl mx-auto">

            {submitted ? (
              /* Confirmation State */
              <div className="bg-white rounded-3xl shadow-lg p-10 text-center border border-gray-100">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "var(--an-teal)" }}>
                  <CheckCircle size={40} className="text-white" />
                </div>
                <h2 className="font-display text-3xl font-bold mb-3" style={{ color: "var(--an-navy)" }}>
                  You're Registered!
                </h2>
                <p className="font-body text-base mb-6" style={{ color: "#555" }}>
                  Thank you, <strong>{form.firstName}</strong>! A confirmation email has been sent to <strong>{form.email}</strong> with all the details you need.
                </p>

                <div className="rounded-2xl p-6 mb-6 text-left" style={{ background: "var(--an-bg)", border: "1px solid #e5e7eb" }}>
                  <h3 className="font-display font-bold text-lg mb-4" style={{ color: "var(--an-navy)" }}>
                    Your Registration Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <BookOpen size={16} style={{ color: "var(--an-teal)", marginTop: 2 }} />
                      <div>
                        <span className="font-body font-bold text-sm" style={{ color: "var(--an-navy)" }}>Class: </span>
                        <span className="font-body text-sm" style={{ color: "#555" }}>Wednesday Night Bible Study</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users size={16} style={{ color: "var(--an-teal)", marginTop: 2 }} />
                      <div>
                        <span className="font-body font-bold text-sm" style={{ color: "var(--an-navy)" }}>Instructor: </span>
                        <span className="font-body text-sm" style={{ color: "#555" }}>Pastor R.B. Thomas</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} style={{ color: "var(--an-teal)", marginTop: 2 }} />
                      <div>
                        <span className="font-body font-bold text-sm" style={{ color: "var(--an-navy)" }}>Schedule: </span>
                        <span className="font-body text-sm" style={{ color: "#555" }}>Every Wednesday at 7:00 PM</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={16} style={{ color: "var(--an-teal)", marginTop: 2 }} />
                      <div>
                        <span className="font-body font-bold text-sm" style={{ color: "var(--an-navy)" }}>Location: </span>
                        <span className="font-body text-sm" style={{ color: "#555" }}>All Nations Life Development Christian Center, 862 SW Glenview Ct, Port St. Lucie, FL 34953</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Video size={16} style={{ color: "var(--an-teal)", marginTop: 2 }} />
                      <div>
                        <span className="font-body font-bold text-sm" style={{ color: "var(--an-navy)" }}>Attendance: </span>
                        <span className="font-body text-sm" style={{ color: "#555" }}>{form.attendance === "online" ? "Online via Zoom" : "In Person"}</span>
                      </div>
                    </div>
                  </div>

                  {form.attendance === "online" && (
                    <div className="mt-5 rounded-xl p-4" style={{ background: "var(--an-teal)", color: "#fff" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Video size={16} />
                        <span className="font-body font-bold text-sm">Zoom Details</span>
                      </div>
                      <p className="font-body text-sm opacity-90 mb-1">Zoom Link: <em>Will be included in your confirmation email</em></p>
                      <p className="font-body text-sm opacity-90 mb-1">Meeting ID: <em>Provided in confirmation email</em></p>
                      <p className="font-body text-sm opacity-90">Passcode: <em>Provided in confirmation email</em></p>
                    </div>
                  )}
                </div>

                <div className="rounded-xl p-4 mb-6" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <Mail size={16} style={{ color: "#16a34a" }} />
                    <span className="font-body font-bold text-sm" style={{ color: "#16a34a" }}>Confirmation Email Sent</span>
                  </div>
                  <p className="font-body text-sm" style={{ color: "#555" }}>
                    Check <strong>{form.email}</strong> for your full confirmation with Zoom details (if attending online).
                  </p>
                </div>

                <button
                  onClick={() => { setForm(initialForm); setSubmitted(false); }}
                  className="font-body text-sm font-semibold"
                  style={{ color: "var(--an-teal)" }}
                >
                  Register Another Person
                </button>
              </div>
            ) : (
              /* Registration Form */
              <div className="bg-white rounded-3xl shadow-lg p-10 border border-gray-100">
                <div className="text-center mb-8">
                  <span className="section-label">Join Us</span>
                  <h2 className="font-display text-3xl font-bold mt-1" style={{ color: "var(--an-navy)" }}>
                    Register for Bible Study
                  </h2>
                  <p className="font-body text-sm mt-2" style={{ color: "#777" }}>
                    Registration is free. Complete the form below and we will send your confirmation immediately.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body font-semibold text-sm block mb-1" style={{ color: "var(--an-navy)" }}>
                        First Name <span style={{ color: "var(--an-red)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={e => handleChange("firstName", e.target.value)}
                        placeholder="Your first name"
                        className="w-full rounded-xl border px-4 py-3 font-body text-sm outline-none transition-all"
                        style={{
                          borderColor: errors.firstName ? "var(--an-red)" : "#e5e7eb",
                          background: "#fafafa",
                        }}
                      />
                      {errors.firstName && <p className="font-body text-xs mt-1" style={{ color: "var(--an-red)" }}>{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="font-body font-semibold text-sm block mb-1" style={{ color: "var(--an-navy)" }}>
                        Last Name <span style={{ color: "var(--an-red)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={e => handleChange("lastName", e.target.value)}
                        placeholder="Your last name"
                        className="w-full rounded-xl border px-4 py-3 font-body text-sm outline-none transition-all"
                        style={{
                          borderColor: errors.lastName ? "var(--an-red)" : "#e5e7eb",
                          background: "#fafafa",
                        }}
                      />
                      {errors.lastName && <p className="font-body text-xs mt-1" style={{ color: "var(--an-red)" }}>{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="font-body font-semibold text-sm block mb-1" style={{ color: "var(--an-navy)" }}>
                      Email Address <span style={{ color: "var(--an-red)" }}>*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => handleChange("email", e.target.value)}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border px-4 py-3 font-body text-sm outline-none transition-all"
                      style={{
                        borderColor: errors.email ? "var(--an-red)" : "#e5e7eb",
                        background: "#fafafa",
                      }}
                    />
                    {errors.email && <p className="font-body text-xs mt-1" style={{ color: "var(--an-red)" }}>{errors.email}</p>}
                  </div>

                  <div>
                    <label className="font-body font-semibold text-sm block mb-1" style={{ color: "var(--an-navy)" }}>
                      Phone Number <span style={{ color: "#999" }}>(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => handleChange("phone", e.target.value)}
                      placeholder="(772) 000-0000"
                      className="w-full rounded-xl border px-4 py-3 font-body text-sm outline-none transition-all"
                      style={{ borderColor: "#e5e7eb", background: "#fafafa" }}
                    />
                  </div>

                  <div>
                    <label className="font-body font-semibold text-sm block mb-2" style={{ color: "var(--an-navy)" }}>
                      Attendance Type <span style={{ color: "var(--an-red)" }}>*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { value: "in-person", label: "In Person", icon: <MapPin size={18} />, desc: "862 SW Glenview Ct, Port St. Lucie" },
                        { value: "online", label: "Online via Zoom", icon: <Video size={18} />, desc: "Join from anywhere — Zoom link in email" },
                      ].map(opt => (
                        <button
                          type="button"
                          key={opt.value}
                          onClick={() => handleChange("attendance", opt.value)}
                          className="rounded-xl border-2 p-4 text-left transition-all"
                          style={{
                            borderColor: form.attendance === opt.value ? "var(--an-teal)" : "#e5e7eb",
                            background: form.attendance === opt.value ? "rgba(13,148,136,0.06)" : "#fafafa",
                          }}
                        >
                          <div className="flex items-center gap-2 mb-1" style={{ color: form.attendance === opt.value ? "var(--an-teal)" : "var(--an-navy)" }}>
                            {opt.icon}
                            <span className="font-body font-bold text-sm">{opt.label}</span>
                          </div>
                          <p className="font-body text-xs" style={{ color: "#888" }}>{opt.desc}</p>
                        </button>
                      ))}
                    </div>
                    {errors.attendance && <p className="font-body text-xs mt-1" style={{ color: "var(--an-red)" }}>{errors.attendance}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full btn-gold flex items-center justify-center gap-2 py-4 text-base disabled:opacity-60"
                  >
                    {sending ? (<><Loader2 size={18} className="animate-spin" /> Submitting...</>) : (<>Register for Bible Study <ArrowRight size={18} /></>)}
                  </button>

                  <p className="font-body text-xs text-center" style={{ color: "#999" }}>
                    Your registration will be sent to the church office. We will follow up with details and Zoom info for online attendees.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Find Us</span>
            <h2 className="font-display text-3xl font-bold mb-8" style={{ color: "var(--an-navy)" }}>
              Location & Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl p-6 text-left" style={{ background: "var(--an-bg)", border: "1px solid #e5e7eb" }}>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} style={{ color: "var(--an-teal)" }} />
                  <span className="font-display font-bold" style={{ color: "var(--an-navy)" }}>Physical Location</span>
                </div>
                <p className="font-body text-sm" style={{ color: "#555" }}>
                  All Nations Life Development Christian Center<br />
                  862 SW Glenview Ct<br />
                  Port St. Lucie, FL 34953
                </p>
              </div>
              <div className="rounded-2xl p-6 text-left" style={{ background: "var(--an-bg)", border: "1px solid #e5e7eb" }}>
                <div className="flex items-center gap-3 mb-3">
                  <Video size={20} style={{ color: "var(--an-teal)" }} />
                  <span className="font-display font-bold" style={{ color: "var(--an-navy)" }}>Online Access</span>
                </div>
                <p className="font-body text-sm" style={{ color: "#555" }}>
                  Register above to receive the Zoom link, Meeting ID, and Passcode for online attendance. Zoom details are sent automatically to your email upon registration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
