"use client";

import { useState, useEffect } from "react";
import {Bebas_Neue, Manrope} from "next/font/google";
import Script from "next/script";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function HiddenStudiosV1() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCalendlyOpen = () => setCalendlyOpen(true);

  return (
    <div
      className={`${bebas.variable} ${manrope.variable} min-h-screen`}
      style={{
        background: "#0A0A0B",
        color: "#F5F5F5",
        fontFamily: "var(--font-manrope), sans-serif",
        overflowX: "hidden",
      }}
    >
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.08,
        }}
      />

      {/* NAV */}
      <nav
        data-landright-section="Nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(10,10,11,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(232,0,29,0.15)" : "none",
          transition: "all 0.3s ease",
          padding: "0 clamp(16px, 5vw, 80px)",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="data:image/jpeg;base64,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" alt="Hidden Studios" style={{ height: "36px", width: "auto" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a
            href="https://x.com/HiddenStudiosGG"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#6B6B7A", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#E8001D")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6B6B7A")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/hiddenstudiosinc/about/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#6B6B7A", transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#E8001D")}
            onMouseLeave={e => (e.currentTarget.style.color = "#6B6B7A")}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        data-landright-section="Hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px clamp(16px, 5vw, 80px) 160px",
          overflow: "hidden",
        }}
      >
        {/* Red diagonal slash background */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            right: "-80px",
            width: "70%",
            height: "340px",
            background: "linear-gradient(135deg, #E8001D 0%, #FF4D00 100%)",
            transform: "skewY(-8deg)",
            opacity: 0.12,
            zIndex: 0,
          }}
        />
        {/* Secondary slash */}
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            right: "10%",
            width: "40%",
            height: "6px",
            background: "linear-gradient(90deg, transparent, #E8001D, #FF4D00)",
            transform: "skewX(-20deg)",
            zIndex: 0,
          }}
        />
        {/* Top-left accent line */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "0",
            width: "4px",
            height: "200px",
            background: "linear-gradient(180deg, #E8001D, transparent)",
            zIndex: 0,
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "900px" }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
              padding: "6px 16px",
              border: "1px solid rgba(232,0,29,0.4)",
              borderRadius: "2px",
              background: "rgba(232,0,29,0.08)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#E8001D",
                boxShadow: "0 0 8px #E8001D",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#E8001D",
              }}
            >
              Fortnite Creative Agency
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(72px, 12vw, 160px)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              margin: "0 0 8px 0",
              color: "#F5F5F5",
            }}
          >
            BUILD INSIDE
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(72px, 12vw, 160px)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              margin: "0 0 8px 0",
              WebkitTextStroke: "2px #E8001D",
              color: "transparent",
            }}
          >
            THE GAME.
          </h1>
          <h1
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(72px, 12vw, 160px)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              margin: "0 0 40px 0",
              color: "#F5F5F5",
            }}
          >
            WIN OUTSIDE IT.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: 1.7,
              color: "#6B6B7A",
              maxWidth: "560px",
              marginBottom: "48px",
            }}
          >
            Hidden Studios engineers Fortnite Creative maps and in-game marketing campaigns that put your brand in front of millions of active players — where they already live.
          </p>

          {/* CTA */}
          <button
            type="button"
            onClick={handleCalendlyOpen}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "22px",
              letterSpacing: "0.12em",
              color: "#F5F5F5",
              background: "linear-gradient(135deg, #E8001D 0%, #FF4D00 100%)",
              border: "none",
              padding: "0 48px",
              height: "56px",
              cursor: "pointer",
              clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
              transition: "opacity 0.2s, transform 0.2s",
              textTransform: "uppercase",
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            CALL
          </button>

          {/* Calendly widget */}
          {calendlyOpen && (
            <div
              style={{
                marginTop: "32px",
                border: "1px solid rgba(232,0,29,0.3)",
                borderRadius: "4px",
                overflow: "hidden",
                background: "#111114",
              }}
            >
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          )}
        </div>

        {/* Floating campaign preview card */}
        <div
          style={{
            position: "absolute",
            right: "clamp(16px, 6vw, 100px)",
            bottom: "clamp(80px, 12vw, 140px)",
            width: "clamp(240px, 28vw, 340px)",
            background: "rgba(17,17,20,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(232,0,29,0.25)",
            borderRadius: "12px",
            padding: "16px",
            transform: "rotate(4deg)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(232,0,29,0.08)",
            zIndex: 2,
          }}
        >
          {/* Map thumbnail */}
          <div
            style={{
              width: "100%",
              height: "clamp(100px, 12vw, 140px)",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #1a0a0a 0%, #2a0d0d 40%, #1a1a2e 100%)",
              marginBottom: "12px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Grid lines for map feel */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(232,0,29,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,0,29,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 60% 40%, rgba(232,0,29,0.2), transparent 60%)" }} />
            <span style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(14px, 2vw, 18px)", letterSpacing: "0.1em", color: "rgba(245,245,245,0.5)", position: "relative", zIndex: 1 }}>FORTNITE MAP</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ fontFamily: "var(--font-manrope)", fontSize: "13px", fontWeight: 700, color: "#F5F5F5" }}>Brand Campaign</span>
            <span
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "10px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                color: "#F5F5F5",
                background: "#E8001D",
                padding: "2px 8px",
                borderRadius: "2px",
                textTransform: "uppercase",
              }}
            >
              LIVE
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#E8001D">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span style={{ fontFamily: "var(--font-manrope)", fontSize: "12px", color: "#6B6B7A" }}>2.4M active players</span>
          </div>
        </div>
      </section>

      {/* DIAGONAL DIVIDER */}
      <div
        style={{
          position: "relative",
          height: "80px",
          background: "#0A0A0B",
          overflow: "hidden",
          marginTop: "-2px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-5%",
            right: "-5%",
            height: "100%",
            background: "#111114",
            transform: "skewY(-2deg)",
            transformOrigin: "top left",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            right: "0",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #E8001D 30%, #FF4D00 70%, transparent)",
            transform: "skewY(-2deg)",
          }}
        />
      </div>

      {/* FEATURES */}
      <section
        data-landright-section="Features"
        style={{
          background: "#111114",
          padding: "80px clamp(16px, 5vw, 80px) 100px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(40px, 6vw, 72px)",
                letterSpacing: "0.04em",
                color: "#F5F5F5",
                margin: "0 0 12px 0",
              }}
            >
              WHAT WE BUILD
            </h2>
            <div style={{ width: "60px", height: "3px", background: "linear-gradient(90deg, #E8001D, #FF4D00)" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
            }}
          >
            {[
              {
                icon: "🎯",
                title: "IN-GAME AD EXPERIENCES",
                body: "Fortnite-native ad experiences built to convert players into customers. No banner blindness. No skip buttons. Just immersive brand moments inside the world.",
                accent: "#E8001D",
              },
              {
                icon: "🗺️",
                title: "CUSTOM CREATIVE MAPS",
                body: "Custom Creative map development that keeps audiences engaged for hours. Your brand becomes the destination — not just a sponsor.",
                accent: "#FF4D00",
              },
              {
                icon: "📈",
                title: "FULL-FUNNEL STRATEGY",
                body: "Full-funnel in-game marketing strategy from concept to campaign launch. We handle creative, build, distribution, and analytics.",
                accent: "#E8001D",
              },
            ].map((card, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0B",
                  padding: "40px 32px",
                  position: "relative",
                  overflow: "hidden",
                  borderTop: `3px solid ${card.accent}`,
                  transition: "transform 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "80px",
                    height: "80px",
                    background: `radial-gradient(circle at top right, ${card.accent}18, transparent 70%)`,
                  }}
                />
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>{card.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(22px, 3vw, 28px)",
                    letterSpacing: "0.06em",
                    color: "#F5F5F5",
                    margin: "0 0 16px 0",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-manrope)",
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "#6B6B7A",
                    margin: 0,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section
        data-landright-section="Stats"
        style={{
          background: "#0A0A0B",
          padding: "64px clamp(16px, 5vw, 80px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(232,0,29,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(232,0,29,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {[
            { num: "500M+", label: "Monthly Fortnite Players" },
            { num: "2.4M", label: "Avg Campaign Reach" },
            { num: "8hrs", label: "Avg Map Session Time" },
            { num: "100%", label: "In-Game Native" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(48px, 6vw, 72px)",
                  color: i % 2 === 0 ? "#E8001D" : "#F5F5F5",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6B6B7A",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DIAGONAL DIVIDER 2 */}
      <div style={{ position: "relative", height: "60px", background: "#0A0A0B", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-5%",
            right: "-5%",
            height: "100%",
            background: "#111114",
            transform: "skewY(2deg)",
            transformOrigin: "bottom right",
          }}
        />
      </div>

      {/* WHY SECTION */}
      <section
        data-landright-section="Why"
        style={{
          background: "#111114",
          padding: "80px clamp(16px, 5vw, 80px) 100px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "60px",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(40px, 6vw, 72px)",
                  letterSpacing: "0.04em",
                  color: "#F5F5F5",
                  margin: "0 0 8px 0",
                  lineHeight: 0.95,
                }}
              >
                YOUR BRAND.
              </h2>
              <h2
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(40px, 6vw, 72px)",
                  letterSpacing: "0.04em",
                  WebkitTextStroke: "2px #E8001D",
                  color: "transparent",
                  margin: "0 0 32px 0",
                  lineHeight: 0.95,
                }}
              >
                FORTNITE'S AUDIENCE.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-manrope)",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#6B6B7A",
                }}
              >
                Traditional ads get skipped. Fortnite players don't skip their favorite map. We build the map. We build your brand into it. The result is an ad that players choose to spend hours inside.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "No ad blockers inside Fortnite",
                "Players actively seek out branded maps",
                "Dwell time measured in hours, not seconds",
                "Organic sharing amplifies reach for free",
                "First-party data through in-game interactions",
              ].map((point, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 20px",
                    background: "#0A0A0B",
                    borderLeft: "3px solid #E8001D",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "18px",
                      color: "#E8001D",
                      minWidth: "24px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-manrope)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#F5F5F5",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        data-landright-section="Footer"
        style={{
          background: "#0A0A0B",
          borderTop: "1px solid rgba(232,0,29,0.2)",
          padding: "48px clamp(16px, 5vw, 80px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCADIAMgDASIAAhEBAxEB/8QAHAAAAgMAAwEAAAAAAAAAAAAAAAIDBAcFBggB/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAHpCUY/u+LkjjQ5I40OSONDkjjQ5I40OSONDkjjQ5I40OSONDkjjQ5I40OVOOIii+Q1MVxLBXCwVwsFcLBXCwVwsFcLBXCwVwsFcLH2sxcISWGB645CE3yIqYhCb5EExCRN8iKmISJvkRUxCExCEzV3i4RkqV5q0AvynEBxHA7/AKvy15pNywrUcQ3HOz7Ry15x7v6u7D5+nifqGz4r6eTiHSO8TRbFM1K81YBAcjDSvUXnX0p4e10zHFc3QPPElf28ZCM3PRm7+SJfH19Y/fMvo3jvzljWvY97uLkf3pl3hctikqV5q0HxflOIGwejfNfobxdfPuS6nlPp5udr7/WKm2NliJ3LpXSa76Q80eifH1wDItWyb083EOkkeF4tikLWmrQfF+U4gavv/nnePJ1wvLtKzL0Y1zevJvceWvQJ59XF5PHex9Z9GNU9Bedt74bw7K9Ny/vhxDeZHhcuCGalaerAIU4gabuWDbV5+mNZvo/G9c9KO5dK1lxCnG7hLy26dA7h5945muh5z2w4huO8LlwUzUrT1ZT4ojiFaHseK63w3fOvdOlmyjluG7YcQ1NZ03G+V470+hh3Wq7f1JDplxCx3iaLogqVp6uR8UphfhzknAEP8UphQYUGEBxQYT6ML8JHhcuCkqVp6uR8X5TiA4gOIDiA4gOIDiA4gOIEjwuXBSErT1c34L8pxAcQHEBxAcQHEBxAcQRxBXkhcuCkJWCWMAAAAAAAAAAAAAAAAJALQEf/xAAoEAABAgUFAAMBAAMBAAAAAAAAAREDBAUGMgIHEhQgECJAFxYlMDH/2gAIAQEAAQUC1TKovbU7SnbU7anbU7anbU7anbU7anbU7anbU7anbU7anaU7anbU7anbU7anbU0zKqutfs44444444444444444444445oX7a1+zjjjjjjjjjjjjjjjjjjjjjjmhftEX7OOOOOOOOOOOOOOOOOOOOOOOQ1+0Rfs44444444444444444444445DX7RMhxxxxxxxxxxxxxxxxxxxx/iHlEy/7/wDpTLMq9VLkt2JbUz5h5RMvWjTqiaqbYlYqJTdrpSCbjUmSpMn80O2564dVN2tl4ZTaDTqQcjdRf915h5RMvNjUWVrlUkKXJUzTyOZurqeB87VK0vyOZzN0Ves+YeUTLztirVjmXLecK3YtR3Bqs8Ro8SZifNpXXBtuWqO4lUnDbqbjTVwczc5XrHhCHlFy87aq1X5m5SvWve2qtWuZuUr1fzDyi5eduFarczcZXrJblA/yCP8AzY/mx/NtJctvJb8Q25VqzzNx1ereYWUXLzt4rVXmbhK9YNu9TVDmczmbjK8c29VqxzNw1eq+YWUXLzYCtVOZf6vViiVyJQ4/9Cmz+hTh/QZ0rVfjVzUWArVbmX+r1TzCyi5ebEVqnzL7V6r7sRWqvMvtXqfmFlFyXzY6tUeZeMKJM1aTtGdmCv0OHRoPzDha42qTtOemSiW/Co0TmXwr1HwhCyi5ebLVqhzORzL21PC+bJVoXM5kzUpeTS5KnBqc74QhZRcl82erT/MmarLSZNXjD0lRq8xU1+bXn4EjAmrxhaCauOemhdS6l8oQsouXmmVPVTIs1XJya/DCyi5L+ZCFlFy/PCyi5L+eFlFyX8yELKLkv5kIWUXNfzwsv//EAB0RAAICAgMBAAAAAAAAAAAAAAABAjERIBASIVD/2gAIAQMBAT8B+WotjWOFFsUBr3eNDkkP3hSSQnkle8aHZhnVmCNDveNDsTOyGRod7rTAh7rXP2f/xAAiEQACAQMEAwEBAAAAAAAAAAABAgADETIQEiAxEyFQBFL/2gAIAQIBAT8B+WaqrFbcL6NUVe436P5EQkqCdTwrE7rRaTNEG0W0emWa8ZdptKeI51comIhcDueRYDeVcomI51MomMdSTPGYvoWlTuJjzfuA2EBvpe0Y3MXrm3ctB6GhFzNv2f/EAEIQAAECAgYECAsGBwAAAAAAAAECAwAEEBESIHPBEyExQBQiQVFSkbLCBTAyNDVhYnFydKEjM6Ox4eJCQ1BjgZPR/9oACAEBAAY/Av6kd5O8CDvJ3gQdxBblFNtn+Y9xBDLDryXVuN2zYGoa/wBLwg3wlIKlHYBAPB+DI6UxxfptgKnZlcwroN8RMeD0ScshgFS67I1nZtNxfBUpso8pa1VAQFT02p49BkWR1wOCyjbSunVWrrNEr8v3jeEG861NhSm0N27INVesRVKyzbHrSnX10+DviXlc8I/EjO5K/L943hBvTOB3hQlnQLfeUi2NdSavf/iCG1plEczQ19cFbrinVn+JZrNybC2VvOOlJSBqHLywQyUSaP7YrV1mJlx91by+DnjLVWfKTRLYHeN4Qb0zgd4US/y47SvETHy57SaJbA7xvCDemMDMUMYA7SqHW9PoLCbVdm1HpH8H90ekfwf3R6RP+n9YYSH9PpAT5NVVD+Ae0miXwMzeEG9MYOYoYwB2jRNYWdyS+FWVD+Ae0KJfBzN4Qbz+DmKGcAdo0OONtpcK02eNHmzP1jzdn6x5ux9f+w0XkIRo66rFD2Ae0KGMHM3hBvP4WYoZwR+Z8Q9gn8xQxhZm8IN5/CzFDKWkKcVoRqSK+UxW5Zl0+1t6ol7LinFrJrJ2XLLaFLVzJFcVrCZdPtnX1Qp0OqddUmyeQUMYWZvCDeewsxclPerK5N+9OdNbzyW/UTrhC2SSlKLNZHrvCDeew8xR9q8lJ5uWKpdkr9peqE6YipOxKRsuTJedDdZG2KmGlOHnVqEfe6JPM3qisms3xBvLcQkKUpNnXHGeKU9FGrcRB3gQd4EHeBB3gQd4EHeBH//EACgQAAMAAQMCBgIDAQAAAAAAAAABESEQMYFBUUCRobHB8GFxIOHx0f/aAAgBAQABPyFtXiHVVVVXVVTUZHiAAAAYniY//wD/AOJoD8N//wD+tbU/Df8A/wD6OKOTfhgAAAmOTk2NlKUpSlKUpSlFWSWW+hwx4vfOXwmX/cmLIUr38hSlExMcnJsbKUpRpMInWzeV9b6ODvRZHBct+hdxl6DFMvkpSi2v0l1O35ez2R3wp6xVv0E0c+jN+um/6w0pRMTHJybGylKNgrRu0MtZmTYeo0q/e586yUrn4DSlPqLbTmy50caDSlExMcnJsbKUpyvomXkwkVTWcn1dCkp/1NflDfjUy7llKUYwaNYFu6N+zK7H6B7JDUJzr9w9HC40pRMYcmJsbKUpzpqlBSlKUpdVA40GlKJiY5MTY2UpTlbXZijE6RUzZndCfqhJTIBc1yx7Zr8vuXXMOFjpSiYmMTE2NlLpyrrsDTiL2fwFH9aLrgXCJ0pRMTGJibGylKc5axY0sGATuLN6D/uv+h/T/I/6gnfZEi82b1vsXVYuMipSiYmMTE2NlKU5x1i7pSlKUuqLcYldKJiYxMTDZSlOVdJvmQZjh1PffI+YPpeqiWE2XPcpSiu49nGI7Z6+0fMKgYTSjU8Ljvo4VKlKJjDExNjZSlOVNBvvXR9hbClKfcW2o85KDjcsmsgrp48ylKJjDExMNlKU5R0Ctz3ffIslxi7seX+DGz5yVXqUpRM6hW54ey3Za+pd19iynZ0/fv6jwwzdspSlExhiYmxspSkNOF4WU/gppq/D9BuvcpSlKUpSlKUomJjExMNlKUpSlKUpSlKUpSlExhiYmxspSlKUpSlKUpSlKUomJjE5MNlKUpSlKUpSlKUpSlExMYnJhspSlKUpSlKUpSlKUomMOTkw2UpSlKUpSlKUpSlKUTGHJwYbKUpSlKUpSlKUpSlKJiY5f//aAAwDAQACAAMAAAAQcyyyyyyyyyy2P4rDTjjjDTDD79pKQAQCQCQAAK81kMMAMMKEHM2yhqOSxnOfxqKqwgU89/8AP9P/AHwLMNX3fz7P7xT0kLekGEgkEguMH3LbsGMQEGxQAHcCdnVNHHH3HnU3Cd33333333303G6Qwwwwwww0yTGCIIIIIIIIIKIL/8QAHREAAwACAwEBAAAAAAAAAAAAAAERECEgMDFBQP/aAAgBAwEBPxClKUpSlKUpRdqJ1wXCHxCiY8BCfrFJksrgq2NAPVwoJkFPTKIQhoF2E7awNlpmoXYhOR7Cko8DV1YPbMIQh5Gm2NTTIJmJFD0QhMTHgsHt3CcWD2TlemfqXd//xAAfEQEBAQADAAEFAAAAAAAAAAAAAREQITEwUWGRsdH/2gAIAQIBAT8QkjIyMjIyMjIyMjIyLInyWpWta1rWta1q1K1rXvX8Jzlrpa7V/o90K1qkrWqOzpA2eMd1Xx5xy1rVqVrXauJTyn3/ANozsduE1q1K1rseDVzhmzp2fBrVqVrXZlHahGxqz6qWkV1a1a1reKVfE9FatTE+up1MjWrWtaybrWta1rWrWta1rWta1rVrWta1rWta1q35a//EACYQAAICAAYCAwEAAwAAAAAAAAABEXEQITFBYZEggUBRobEw0fD/2gAIAQEAAT8QWjRfIIAAAAIAB6NGd34O/h74b4b4b4b+Hv4bsyPO3GGv2XLly5cuXLly5cuXLly5cuXFzFyO3IbsBm5cuXw3Lly5fDcuXw3Lly4uZykmZuQWYD5FixYsWLFixYsWLFixYsWLFhcsCS07zDYkSJEiRIkSJEiRIkSJEiRIkLB94d5hchYsWLFixYsWLFixYVENiEiltmTYjWoNiivki4XZkcPA9yY1aFixYzNTmJbDuMJskyZMmSb/AAX/AKSWbZkNh7WvV/z5IrVDRSbtkXKZTqkllLXKOXEnEv7JkyZOezl55lnNuGhEZYaBD+nCKTjIVcJ519CLk21PmTJjZwu4O8w8zUsWLClb2xMXaD6NPTMiXsgC+b9jLliAiD43grFixqrUa40KyyTaU5tLX+rssSKR7FixyYfeHceEJEiRzAlhc5z+BfcJyE+UZmdfqy7rmEfJZoQL8GNslgkJGxL6Uc0vMkRuGcbCSlFzNnyROKRvTnGyxMhJEiZmYEVh2hzHIWLFiRyZYkU7ZWLFixYsWJFJ1iQyZYsWOTC7g7LCaTJkyQhW/SRcYTPsguVyoytfs2CqQ3bOi3TKUq3btTKkRnTQmSIy36SkKZMmNwuwOwOY5CxYnkms6hWJjJtiCTqFYsWM8toLExk2xN50CsWLHJhdgdl5b5XoXYlfBg48uaEQkpa5GwRZmNF3I7NNsC022ikdnQNMMrBuSvyvv2B22FyFixYmM7Q3JpIdixYsWLFibzqHcmsk2J5LHJhdsd15D5VINx1XoVEyTG62eN5fxLnwwh6teSOoZa1at4fWZKZpJNmoaGehxI54BiIKOHYhlzK5ti5Kp8h6d0dhhchYsWJLOwVyKbJJQ3uXNTaAWLFjljzAuXGXI8pODhc3pCpSHaNKR5xCapFixY5MDsDuvJfKirmuE3+/vwbLzXsaSW1bDMJiIehMatotW9PDtRRuTHLDOotFuQnjJP8AYkpZWJ7P+UWyY+eW2239tvz9e6O6wuQsWLDAaUOWqGlm+ErU9D0D9PU1bY1jcm823uWLFixYsWLFixYsWOTC7o7rA5C2G2GxYt4pYuWLFsNi2Kd0d18iAAABd0dliHpg9D0/xAD0PQ9MHoemJd0dl8gAAAAdkdl8gAAAAdkdh8cAAABnHZH/2Q==" alt="Hidden Studios" style={{ height: "32px", width: "auto" }} />
          </div>

          <p
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "13px",
              color: "#6B6B7A",
              margin: 0,
              textAlign: "center",
            }}
          >
            © 2024 Hidden Studios. Build Inside the Game.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a
              href="https://x.com/HiddenStudiosGG"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#6B6B7A",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8001D")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6B6B7A")}
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/hiddenstudiosinc/about/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-manrope)",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#6B6B7A",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8001D")}
              onMouseLeave={e => (e.currentTarget.style.color = "#6B6B7A")}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #E8001D; }
          50% { opacity: 0.5; box-shadow: 0 0 16px #E8001D; }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
