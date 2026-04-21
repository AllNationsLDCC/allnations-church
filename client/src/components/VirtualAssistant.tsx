import { useState, useRef, useEffect } from "react";
import { X, MessageCircle, Send, Loader2, ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

type ChatView = "chat" | "appointment";

interface AppointmentForm {
  name: string;
  phone: string;
  email: string;
  appointmentType: string;
  preferredDateTime: string;
  message: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const AN_GOLD = "#C59D2F";
const AN_NAVY = "#1B2A4A";
const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663485607175/PdktnDvnsnrtAxYXxEkePm/all_nations_logo_transparent_5ce01bdd.png";

const QUICK_QUESTIONS = [
  "What time is Sunday service?",
  "How do I give online?",
  "Tell me about your ministries",
  "How do I connect with the church?",
  "Who is Bishop Blake?",
];

const APPOINTMENT_TYPES = [
  "Pastoral Counseling",
  "Prayer Request",
  "Ministry Inquiry",
  "New Member Meeting",
  "General Meeting",
  "Baptism Inquiry",
];

// ─── Welcome Message ──────────────────────────────────────────────────────────
const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content:
    "Welcome to All Nations LDCC! 🙏 I'm here to help answer your questions about our church, services, ministries, and more. You can also request an appointment with our pastoral team. How can I help you today?",
  timestamp: new Date(),
};

// ─── Main Component ───────────────────────────────────────────────────────────
export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<ChatView>("chat");
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState<AppointmentForm>({
    name: "",
    phone: "",
    email: "",
    appointmentType: "",
    preferredDateTime: "",
    message: "",
  });
  const [appointmentStatus, setAppointmentStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && view === "chat") {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, view]);

  // Track unread messages when closed
  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      const assistantMessages = messages.filter((m) => m.role === "assistant").length - 1;
      setUnreadCount(assistantMessages > 0 ? 1 : 0);
    }
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen, messages]);

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const conversationHistory = [...messages, userMessage]
        .filter((m) => m.role !== "assistant" || messages.indexOf(m) > 0) // skip welcome for API
        .map((m) => ({ role: m.role, content: m.content }));

      const response = await fetch("/api/assistant/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversationHistory }),
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply || "I'm sorry, I couldn't process that. Please call us at (772) 343-7021.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please call us at (772) 343-7021 or email AllNationsldcc@gmail.com and we'll be happy to help!",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const submitAppointment = async (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentStatus("sending");

    try {
      const response = await fetch("/api/assistant/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentForm),
      });

      if (response.ok) {
        setAppointmentStatus("success");
        // Add confirmation to chat
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Thank you, ${appointmentForm.name}! Your appointment request for "${appointmentForm.appointmentType}" has been sent to our office. We will contact you at ${appointmentForm.email} within 1-2 business days. God bless you! 🙏`,
            timestamp: new Date(),
          },
        ]);
        // Reset form and go back to chat
        setTimeout(() => {
          setView("chat");
          setAppointmentStatus("idle");
          setAppointmentForm({
            name: "",
            phone: "",
            email: "",
            appointmentType: "",
            preferredDateTime: "",
            message: "",
          });
        }, 2000);
      } else {
        setAppointmentStatus("error");
      }
    } catch {
      setAppointmentStatus("error");
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <>
      {/* ── Floating Button ─────────────────────────────────────────────── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open Virtual Assistant"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: AN_NAVY,
          border: `2px solid ${AN_GOLD}`,
          boxShadow: `0 4px 20px rgba(0,0,0,0.3), 0 0 0 0 ${AN_GOLD}44`,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 6px 25px rgba(0,0,0,0.4), 0 0 0 4px ${AN_GOLD}33`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 4px 20px rgba(0,0,0,0.3), 0 0 0 0 ${AN_GOLD}44`;
        }}
      >
        {isOpen ? (
          <ChevronDown size={24} color={AN_GOLD} />
        ) : (
          <MessageCircle size={24} color={AN_GOLD} />
        )}
        {/* Unread badge */}
        {!isOpen && unreadCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-4px",
              right: "-4px",
              background: "#E8622A",
              color: "white",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              fontSize: "11px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {unreadCount}
          </span>
        )}
      </button>

      {/* ── Chat Window ─────────────────────────────────────────────────── */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "96px",
            right: "24px",
            zIndex: 9998,
            width: "360px",
            maxWidth: "calc(100vw - 32px)",
            height: "540px",
            maxHeight: "calc(100vh - 120px)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            display: "flex",
            flexDirection: "column",
            background: "#FFFFFF",
            border: `1px solid ${AN_GOLD}44`,
            animation: "slideUpFade 0.25s ease",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: AN_NAVY,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <img
              src={LOGO_URL}
              alt="All Nations LDCC"
              style={{ width: "36px", height: "36px", objectFit: "contain", borderRadius: "50%" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ color: AN_GOLD, fontWeight: "700", fontSize: "13px", fontFamily: "'Playfair Display', serif" }}>
                All Nations LDCC
              </div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", fontFamily: "'Lato', sans-serif" }}>
                Virtual Assistant • Online
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              {view === "chat" ? (
                <button
                  onClick={() => setView("appointment")}
                  style={{
                    background: `${AN_GOLD}22`,
                    border: `1px solid ${AN_GOLD}55`,
                    color: AN_GOLD,
                    borderRadius: "6px",
                    padding: "4px 8px",
                    fontSize: "10px",
                    cursor: "pointer",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Book Appt
                </button>
              ) : (
                <button
                  onClick={() => setView("chat")}
                  style={{
                    background: `${AN_GOLD}22`,
                    border: `1px solid ${AN_GOLD}55`,
                    color: AN_GOLD,
                    borderRadius: "6px",
                    padding: "4px 8px",
                    fontSize: "10px",
                    cursor: "pointer",
                    fontFamily: "'Lato', sans-serif",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  ← Chat
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", padding: "2px" }}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* ── Chat View ──────────────────────────────────────────────── */}
          {view === "chat" && (
            <>
              {/* Messages */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  background: "#F8F6F2",
                }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: msg.role === "user" ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "82%",
                        padding: "10px 14px",
                        borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                        background: msg.role === "user" ? AN_NAVY : "#FFFFFF",
                        color: msg.role === "user" ? "#FFFFFF" : "#1B2A4A",
                        fontSize: "13px",
                        lineHeight: "1.5",
                        fontFamily: "'Lato', sans-serif",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {msg.content}
                    </div>
                    <div
                      style={{
                        fontSize: "10px",
                        color: "rgba(0,0,0,0.35)",
                        marginTop: "3px",
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                ))}

                {/* Loading indicator */}
                {isLoading && (
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <div
                      style={{
                        padding: "10px 14px",
                        borderRadius: "16px 16px 16px 4px",
                        background: "#FFFFFF",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <Loader2 size={14} color={AN_GOLD} style={{ animation: "spin 1s linear infinite" }} />
                      <span style={{ fontSize: "12px", color: "#666", fontFamily: "'Lato', sans-serif" }}>
                        Typing...
                      </span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions (show only at start) */}
              {messages.length <= 1 && (
                <div
                  style={{
                    padding: "8px 12px",
                    background: "#F8F6F2",
                    borderTop: "1px solid #E8E4DC",
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                    flexShrink: 0,
                  }}
                >
                  {QUICK_QUESTIONS.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(q)}
                      style={{
                        background: "white",
                        border: `1px solid ${AN_GOLD}66`,
                        borderRadius: "20px",
                        padding: "4px 10px",
                        fontSize: "11px",
                        color: AN_NAVY,
                        cursor: "pointer",
                        fontFamily: "'Lato', sans-serif",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = AN_GOLD;
                        (e.currentTarget as HTMLButtonElement).style.color = "white";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = AN_GOLD;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "white";
                        (e.currentTarget as HTMLButtonElement).style.color = AN_NAVY;
                        (e.currentTarget as HTMLButtonElement).style.borderColor = `${AN_GOLD}66`;
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div
                style={{
                  padding: "12px",
                  background: "#FFFFFF",
                  borderTop: "1px solid #E8E4DC",
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                  flexShrink: 0,
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
                  placeholder="Ask a question..."
                  disabled={isLoading}
                  style={{
                    flex: 1,
                    border: `1px solid ${AN_GOLD}55`,
                    borderRadius: "24px",
                    padding: "8px 14px",
                    fontSize: "13px",
                    fontFamily: "'Lato', sans-serif",
                    outline: "none",
                    color: AN_NAVY,
                    background: "#F8F6F2",
                  }}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: input.trim() && !isLoading ? AN_NAVY : "#E0DDD6",
                    border: "none",
                    cursor: input.trim() && !isLoading ? "pointer" : "not-allowed",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.15s ease",
                    flexShrink: 0,
                  }}
                >
                  <Send size={16} color={input.trim() && !isLoading ? AN_GOLD : "#999"} />
                </button>
              </div>
            </>
          )}

          {/* ── Appointment View ────────────────────────────────────────── */}
          {view === "appointment" && (
            <div style={{ flex: 1, overflowY: "auto", padding: "16px", background: "#F8F6F2" }}>
              {appointmentStatus === "success" ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    gap: "12px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "48px" }}>✅</div>
                  <div style={{ color: AN_NAVY, fontWeight: "700", fontSize: "16px", fontFamily: "'Playfair Display', serif" }}>
                    Request Sent!
                  </div>
                  <div style={{ color: "#555", fontSize: "13px", fontFamily: "'Lato', sans-serif", lineHeight: "1.5" }}>
                    We'll be in touch within 1-2 business days. God bless you!
                  </div>
                </div>
              ) : (
                <form onSubmit={submitAppointment} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ color: AN_NAVY, fontWeight: "700", fontSize: "14px", fontFamily: "'Playfair Display', serif", marginBottom: "4px" }}>
                    Request an Appointment
                  </div>
                  <div style={{ color: "#666", fontSize: "11px", fontFamily: "'Lato', sans-serif", marginBottom: "4px" }}>
                    Fill out the form below and our office will contact you within 1-2 business days.
                  </div>

                  {[
                    { label: "Full Name *", key: "name", type: "text", placeholder: "Your full name" },
                    { label: "Phone Number", key: "phone", type: "tel", placeholder: "(555) 000-0000" },
                    { label: "Email Address *", key: "email", type: "email", placeholder: "your@email.com" },
                    { label: "Preferred Date & Time", key: "preferredDateTime", type: "text", placeholder: "e.g., Tuesday afternoon" },
                  ].map((field) => (
                    <div key={field.key} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      <label style={{ fontSize: "11px", fontWeight: "600", color: AN_NAVY, fontFamily: "'Lato', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={appointmentForm[field.key as keyof AppointmentForm]}
                        onChange={(e) => setAppointmentForm((prev) => ({ ...prev, [field.key]: e.target.value }))}
                        required={field.label.includes("*")}
                        style={{
                          border: `1px solid ${AN_GOLD}55`,
                          borderRadius: "8px",
                          padding: "8px 10px",
                          fontSize: "12px",
                          fontFamily: "'Lato', sans-serif",
                          outline: "none",
                          color: AN_NAVY,
                          background: "white",
                        }}
                      />
                    </div>
                  ))}

                  {/* Appointment Type */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <label style={{ fontSize: "11px", fontWeight: "600", color: AN_NAVY, fontFamily: "'Lato', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Appointment Type *
                    </label>
                    <select
                      value={appointmentForm.appointmentType}
                      onChange={(e) => setAppointmentForm((prev) => ({ ...prev, appointmentType: e.target.value }))}
                      required
                      style={{
                        border: `1px solid ${AN_GOLD}55`,
                        borderRadius: "8px",
                        padding: "8px 10px",
                        fontSize: "12px",
                        fontFamily: "'Lato', sans-serif",
                        outline: "none",
                        color: appointmentForm.appointmentType ? AN_NAVY : "#999",
                        background: "white",
                      }}
                    >
                      <option value="" disabled>Select type...</option>
                      {APPOINTMENT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <label style={{ fontSize: "11px", fontWeight: "600", color: AN_NAVY, fontFamily: "'Lato', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Brief Message
                    </label>
                    <textarea
                      placeholder="Tell us a little about what you'd like to discuss..."
                      value={appointmentForm.message}
                      onChange={(e) => setAppointmentForm((prev) => ({ ...prev, message: e.target.value }))}
                      rows={3}
                      style={{
                        border: `1px solid ${AN_GOLD}55`,
                        borderRadius: "8px",
                        padding: "8px 10px",
                        fontSize: "12px",
                        fontFamily: "'Lato', sans-serif",
                        outline: "none",
                        color: AN_NAVY,
                        background: "white",
                        resize: "none",
                      }}
                    />
                  </div>

                  {appointmentStatus === "error" && (
                    <div style={{ color: "#E8622A", fontSize: "11px", fontFamily: "'Lato', sans-serif" }}>
                      Something went wrong. Please call us at (772) 343-7021.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={appointmentStatus === "sending"}
                    style={{
                      background: AN_NAVY,
                      color: AN_GOLD,
                      border: "none",
                      borderRadius: "8px",
                      padding: "12px",
                      fontSize: "12px",
                      fontWeight: "700",
                      fontFamily: "'Lato', sans-serif",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      cursor: appointmentStatus === "sending" ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      opacity: appointmentStatus === "sending" ? 0.7 : 1,
                    }}
                  >
                    {appointmentStatus === "sending" ? (
                      <>
                        <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} />
                        Sending...
                      </>
                    ) : (
                      "Send Appointment Request"
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tooltip label */}
      {!isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "36px",
            right: "92px",
            zIndex: 9997,
            background: AN_NAVY,
            color: "white",
            padding: "6px 12px",
            borderRadius: "6px",
            fontSize: "12px",
            fontFamily: "'Lato', sans-serif",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            opacity: 0,
            animation: "tooltipFade 0.5s ease 2s forwards",
          }}
        >
          Ask us anything 👋
          <div
            style={{
              position: "absolute",
              right: "-6px",
              top: "50%",
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: `6px solid ${AN_NAVY}`,
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes tooltipFade {
          0%   { opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
