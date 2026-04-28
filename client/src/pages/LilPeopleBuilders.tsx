import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lil' People Builders — Kids Activity Page (Ages 6–10)
// Phase 1: Welcome Hero section only

export default function LilPeopleBuilders() {
  return (
    <div className="min-h-screen" style={{ background: "#FFFDF7" }}>
      <Navbar />

      {/* ── WELCOME HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #FFFDF7 0%, #FFF8E7 50%, #F0FAF0 100%)",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        {/* Decorative background bubbles */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(255, 200, 50, 0.12)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(72, 187, 120, 0.10)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "40%",
            left: "5%",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            background: "rgba(237, 137, 54, 0.08)",
            pointerEvents: "none",
          }}
        />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">

            {/* Tagline pill */}
            <div
              className="inline-block mb-4 px-5 py-2 rounded-full font-body font-semibold text-sm tracking-widest uppercase"
              style={{
                background: "rgba(237, 137, 54, 0.15)",
                color: "#C05621",
                letterSpacing: "0.12em",
              }}
            >
              We are in the people-building business
            </div>

            {/* Main headline */}
            <h1
              className="font-display font-extrabold leading-tight mb-5"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4rem)",
                color: "#1A4731",
                lineHeight: 1.15,
              }}
            >
              Welcome,{" "}
              <span style={{ color: "#E07B00" }}>Lil'</span>{" "}
              <span style={{ color: "#2B7A4B" }}>People</span>{" "}
              <span style={{ color: "#3B82C4" }}>Builders!</span>
            </h1>

            {/* Warm subheadline */}
            <p
              className="font-body text-xl md:text-2xl mb-5 leading-relaxed"
              style={{ color: "#4A3728" }}
            >
              Hey friend!{" "}
              <span style={{ color: "#3B82C4", fontWeight: 700 }}>Bentley</span>{" "}
              and{" "}
              <span style={{ color: "#2B7A4B", fontWeight: 700 }}>London</span>{" "}
              can't wait to play, learn, and have fun with God's Word with you!
            </p>

            {/* Bible verse */}
            <p
              className="font-body text-base md:text-lg mb-12"
              style={{
                color: "#7B5E3A",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              "Let the little children come to me." — Matthew 19:14
            </p>

            {/* Character photo placeholders */}
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">

              {/* Bentley */}
              <div className="flex flex-col items-center gap-3">
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    border: "6px solid #3B82C4",
                    background: "linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(59,130,196,0.20)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Placeholder silhouette */}
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="40" cy="28" r="18" fill="#93C5FD" />
                    <ellipse cx="40" cy="72" rx="28" ry="20" fill="#93C5FD" />
                  </svg>
                  {/* Photo-coming-soon label */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "10px",
                      color: "#1E40AF",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Photo coming soon
                  </span>
                </div>
                <span
                  className="font-display font-bold text-xl"
                  style={{ color: "#3B82C4" }}
                >
                  Bentley
                </span>
              </div>

              {/* London */}
              <div className="flex flex-col items-center gap-3">
                <div
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    border: "6px solid #2B7A4B",
                    background: "linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(43,122,75,0.20)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/* Placeholder silhouette */}
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="40" cy="28" r="18" fill="#6EE7B7" />
                    <ellipse cx="40" cy="72" rx="28" ry="20" fill="#6EE7B7" />
                  </svg>
                  {/* Photo-coming-soon label */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "10px",
                      color: "#065F46",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Photo coming soon
                  </span>
                </div>
                <span
                  className="font-display font-bold text-xl"
                  style={{ color: "#2B7A4B" }}
                >
                  London
                </span>
              </div>

            </div>
            {/* end character placeholders */}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
