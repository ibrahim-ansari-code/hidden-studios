"use client";

import { useState } from "react";
import {Bebas_Neue, Manrope} from "next/font/google";
import Script from "next/script";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function HiddenStudiosV2() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Hidden Studios Inquiry");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:ibrahim.ansari4161@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`${bebas.variable} ${manrope.variable} min-h-screen`} style={{ background: "#06080F", fontFamily: "var(--font-manrope)" }}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      {/* Grain overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        opacity: 0.06,
      }} />

      {/* Ambient gold bloom */}
      <div style={{
        position: "fixed", top: "-20%", left: "50%", transform: "translateX(-50%)",
        width: "900px", height: "600px", borderRadius: "50%",
        background: "radial-gradient(ellipse at center, rgba(201,168,76,0.18) 0%, rgba(26,16,53,0.12) 45%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* NAV */}
      <nav data-landright-section="Nav" style={{ position: "relative", zIndex: 50 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <img src="data:image/jpeg;base64,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" alt="Hidden Studios" className="h-9 w-auto" />
          <div className="flex items-center gap-6">
            <a href="https://x.com/HiddenStudiosGG" target="_blank" rel="noopener noreferrer" style={{ color: "#7A7060" }} className="hover:opacity-80 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/hiddenstudiosinc/about/" target="_blank" rel="noopener noreferrer" style={{ color: "#7A7060" }} className="hover:opacity-80 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section data-landright-section="hero" style={{ position: "relative", zIndex: 10 }} className="pt-12 pb-32 md:pt-20 md:pb-48">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div style={{ width: "40px", height: "1px", background: "#C9A84C" }} />
            <span style={{ color: "#C9A84C", fontFamily: "var(--font-manrope)", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Fortnite Creative Agency</span>
            <div style={{ width: "40px", height: "1px", background: "#C9A84C" }} />
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(64px, 12vw, 148px)",
            lineHeight: 0.92,
            color: "#EEE8D5",
            letterSpacing: "0.02em",
            marginBottom: "32px",
          }}>
            YOUR BRAND.
            <br />
            <span style={{ color: "#C9A84C" }}>FORTNITE'S</span>
            <br />
            AUDIENCE.
          </h1>

          {/* Subhead */}
          <p style={{
            color: "#7A7060",
            fontSize: "clamp(15px, 2vw, 18px)",
            lineHeight: 1.75,
            maxWidth: "580px",
            margin: "0 auto 48px",
            fontFamily: "var(--font-manrope)",
          }}>
            Hidden Studios engineers Fortnite Creative maps and in-game marketing campaigns that put your brand in front of millions of active players — where they already live.
          </p>

          {/* CTA Group */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <button
              type="button"
              onClick={() => setShowCalendly(true)}
              data-landright-cta="call"
              style={{
                background: "linear-gradient(135deg, #D4001A 0%, #A8001A 100%)",
                color: "#EEE8D5",
                fontFamily: "var(--font-bebas)",
                fontSize: "22px",
                letterSpacing: "0.15em",
                padding: "18px 56px",
                border: "none",
                cursor: "pointer",
                position: "relative",
                clipPath: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              SCHEDULE CALL
            </button>
            <a
              href="mailto:hello@hiddenstudios.gg"
              data-landright-cta="email-link"
              style={{
                color: "#C9A84C",
                fontFamily: "var(--font-manrope)",
                fontSize: "14px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 600,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#EEE8D5")}
              onMouseLeave={e => (e.currentTarget.style.color = "#C9A84C")}
            >
              Or email us directly
            </a>
          </div>

          {/* Calendly modal */}
          {showCalendly && (
            <div
              style={{
                position: "fixed", inset: 0, zIndex: 1000,
                background: "rgba(6,8,15,0.92)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "20px",
              }}
              onClick={e => { if (e.target === e.currentTarget) setShowCalendly(false); }}
            >
              <div style={{ background: "#0E1018", border: "1px solid rgba(201,168,76,0.25)", borderRadius: "12px", overflow: "hidden", width: "100%", maxWidth: "700px", position: "relative" }}>
                <button
                  onClick={() => setShowCalendly(false)}
                  style={{ position: "absolute", top: "12px", right: "16px", background: "none", border: "none", color: "#7A7060", fontSize: "24px", cursor: "pointer", zIndex: 10 }}
                >
                  ×
                </button>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
                  style={{ minWidth: "320px", height: "630px" }}
                />
              </div>
            </div>
          )}

          {/* Floating campaign preview card */}
          <div style={{ position: "relative", marginTop: "72px", display: "flex", justifyContent: "center" }}>
            <div style={{
              transform: "rotate(-2.5deg)",
              background: "linear-gradient(145deg, rgba(26,16,53,0.9) 0%, rgba(14,10,28,0.95) 100%)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "16px",
              padding: "20px",
              width: "min(420px, 90vw)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.08), inset 0 1px 0 rgba(201,168,76,0.1)",
            }}>
              {/* Map thumbnail */}
              <div style={{
                borderRadius: "10px",
                height: "160px",
                background: "linear-gradient(135deg, #0D1B2A 0%, #1A2744 40%, #0A1628 100%)",
                marginBottom: "16px",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {/* Grid lines */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }} />
                {/* Map nodes */}
                {[[30,40],[60,25],[75,60],[45,70],[20,65]].map(([x,y],i) => (
                  <div key={i} style={{
                    position: "absolute",
                    left: `${x}%`, top: `${y}%`,
                    width: i === 0 ? "12px" : "8px",
                    height: i === 0 ? "12px" : "8px",
                    borderRadius: "50%",
                    background: i === 0 ? "#C9A84C" : "rgba(201,168,76,0.4)",
                    boxShadow: i === 0 ? "0 0 12px rgba(201,168,76,0.6)" : "none",
                    transform: "translate(-50%,-50%)",
                  }} />
                ))}
                <span style={{ fontFamily: "var(--font-bebas)", fontSize: "28px", color: "rgba(201,168,76,0.3)", letterSpacing: "0.1em", zIndex: 1 }}>CREATIVE MAP</span>
                {/* LIVE badge */}
                <div style={{
                  position: "absolute", top: "10px", right: "10px",
                  background: "#D4001A",
                  borderRadius: "4px",
                  padding: "3px 8px",
                  display: "flex", alignItems: "center", gap: "5px",
                }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff", animation: "pulse 1.5s infinite" }} />
                  <span style={{ fontFamily: "var(--font-manrope)", fontSize: "10px", fontWeight: 700, color: "#fff", letterSpacing: "0.1em" }}>LIVE</span>
                </div>
              </div>
              {/* Card content */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-manrope)", fontSize: "11px", color: "#7A7060", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>Active Campaign</div>
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: "20px", color: "#EEE8D5", letterSpacing: "0.05em" }}>BRAND ACTIVATION MAP</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: "26px", color: "#C9A84C", lineHeight: 1 }}>2.4M</div>
                  <div style={{ fontFamily: "var(--font-manrope)", fontSize: "10px", color: "#7A7060" }}>players reached</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section data-landright-section="Features" style={{ position: "relative", zIndex: 10 }} className="py-24 md:py-32">
        {/* Top divider */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
        }} />

        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div style={{ width: "30px", height: "1px", background: "#C9A84C" }} />
              <span style={{ color: "#C9A84C", fontFamily: "var(--font-manrope)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>What We Build</span>
              <div style={{ width: "30px", height: "1px", background: "#C9A84C" }} />
            </div>
            <h2 style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(42px, 7vw, 80px)",
              color: "#EEE8D5",
              letterSpacing: "0.03em",
              lineHeight: 0.95,
            }}>
              FORTNITE ADS THAT
              <br />
              <span style={{ color: "#C9A84C" }}>ACTUALLY HIT</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🎯",
                title: "Native Ad Experiences",
                desc: "Fortnite-native ad experiences built to convert players into customers. No banner blindness — pure immersion.",
                accent: "#C9A84C",
              },
              {
                icon: "🗺️",
                title: "Custom Creative Maps",
                desc: "Custom Creative map development that keeps audiences engaged for hours inside your branded world.",
                accent: "#C9A84C",
              },
              {
                icon: "📈",
                title: "Full-Funnel Strategy",
                desc: "Full-funnel in-game marketing strategy from concept to campaign launch — we own every step.",
                accent: "#C9A84C",
              },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(145deg, rgba(26,16,53,0.5) 0%, rgba(14,10,28,0.7) 100%)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  borderRadius: "16px",
                  padding: "36px 28px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.12)")}
              >
                {/* Corner accent */}
                <div style={{
                  position: "absolute", top: 0, right: 0,
                  width: "60px", height: "60px",
                  background: `linear-gradient(225deg, rgba(201,168,76,0.08) 0%, transparent 60%)`,
                  borderRadius: "0 16px 0 0",
                }} />
                <div style={{ fontSize: "32px", marginBottom: "20px" }}>{f.icon}</div>
                <h3 style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "26px",
                  color: "#EEE8D5",
                  letterSpacing: "0.05em",
                  marginBottom: "12px",
                }}>{f.title}</h3>
                <p style={{ color: "#7A7060", fontSize: "15px", lineHeight: 1.7, fontFamily: "var(--font-manrope)" }}>{f.desc}</p>
                <div style={{ marginTop: "24px", width: "32px", height: "2px", background: f.accent, borderRadius: "1px" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section data-landright-section="Stats" style={{ position: "relative", zIndex: 10 }} className="py-16">
        <div style={{
          background: "linear-gradient(90deg, rgba(201,168,76,0.04) 0%, rgba(201,168,76,0.08) 50%, rgba(201,168,76,0.04) 100%)",
          borderTop: "1px solid rgba(201,168,76,0.12)",
          borderBottom: "1px solid rgba(201,168,76,0.12)",
        }}>
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
              {[
                { num: "350M+", label: "Monthly Fortnite Players" },
                { num: "2.4M", label: "Avg. Campaign Reach" },
                { num: "8hrs", label: "Avg. Map Session Time" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "clamp(48px, 7vw, 72px)",
                    color: "#C9A84C",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}>{s.num}</div>
                  <div style={{ color: "#7A7060", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "var(--font-manrope)", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section data-landright-section="Process" style={{ position: "relative", zIndex: 10 }} className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div style={{ width: "30px", height: "1px", background: "#C9A84C" }} />
                <span style={{ color: "#C9A84C", fontFamily: "var(--font-manrope)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>How It Works</span>
              </div>
              <h2 style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(40px, 6vw, 72px)",
                color: "#EEE8D5",
                letterSpacing: "0.03em",
                lineHeight: 0.95,
                marginBottom: "24px",
              }}>
                BUILD INSIDE
                <br />
                <span style={{ color: "#C9A84C" }}>THE GAME.</span>
                <br />
                WIN OUTSIDE IT.
              </h2>
              <p style={{ color: "#7A7060", fontSize: "16px", lineHeight: 1.75, fontFamily: "var(--font-manrope)", maxWidth: "440px" }}>
                We handle everything from creative concept to live campaign — so your brand shows up exactly where your audience spends their time.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { step: "01", title: "Strategy & Concept", desc: "We map your brand goals to Fortnite's ecosystem and design a campaign architecture built to perform." },
                { step: "02", title: "Map Development", desc: "Our team builds a fully custom Fortnite Creative map — immersive, branded, and engineered for engagement." },
                { step: "03", title: "Launch & Amplify", desc: "We publish, promote, and optimize your campaign in real-time, tracking every player interaction." },
              ].map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "20px",
                    background: "rgba(26,16,53,0.3)",
                    border: "1px solid rgba(201,168,76,0.1)",
                    borderRadius: "12px",
                    padding: "20px 24px",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{
                    fontFamily: "var(--font-bebas)",
                    fontSize: "32px",
                    color: "rgba(201,168,76,0.3)",
                    lineHeight: 1,
                    minWidth: "40px",
                    letterSpacing: "0.02em",
                  }}>{p.step}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-bebas)", fontSize: "20px", color: "#EEE8D5", letterSpacing: "0.05em", marginBottom: "6px" }}>{p.title}</div>
                    <div style={{ color: "#7A7060", fontSize: "14px", lineHeight: 1.65, fontFamily: "var(--font-manrope)" }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <footer data-landright-section="Footer" style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(201,168,76,0.12)" }}>
        {/* Gold bloom at footer */}
        <div style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "300px",
          background: "radial-gradient(ellipse at center bottom, rgba(201,168,76,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left: brand + social */}
            <div>
              <img src="data:image/jpeg;base64,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" alt="Hidden Studios" className="h-10 w-auto mb-6" />
              <p style={{ color: "#7A7060", fontSize: "15px", lineHeight: 1.75, fontFamily: "var(--font-manrope)", maxWidth: "340px", marginBottom: "32px" }}>
                We build Fortnite Creative experiences that put brands and creators in front of massive in-game audiences.
              </p>
              <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
                <a
                  href="https://x.com/HiddenStudiosGG"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    color: "#7A7060", fontFamily: "var(--font-manrope)", fontSize: "13px",
                    letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#7A7060")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/company/hiddenstudiosinc/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    color: "#7A7060", fontFamily: "var(--font-manrope)", fontSize: "13px",
                    letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
                    textDecoration: "none", transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#7A7060")}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>
              <div style={{ color: "#3A3428", fontSize: "12px", fontFamily: "var(--font-manrope)" }}>
                © 2024 Hidden Studios. All rights reserved.
              </div>
            </div>

            {/* Right: contact form */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div style={{ width: "24px", height: "1px", background: "#C9A84C" }} />
                <span style={{ color: "#C9A84C", fontFamily: "var(--font-manrope)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Get In Touch</span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(32px, 5vw, 52px)",
                color: "#EEE8D5",
                letterSpacing: "0.03em",
                lineHeight: 0.95,
                marginBottom: "24px",
              }}>EMAIL US</h3>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    background: "rgba(26,16,53,0.4)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "8px",
                    padding: "14px 18px",
                    color: "#EEE8D5",
                    fontFamily: "var(--font-manrope)",
                    fontSize: "15px",
                    outline: "none",
                    width: "100%",
                  }}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    background: "rgba(26,16,53,0.4)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "8px",
                    padding: "14px 18px",
                    color: "#EEE8D5",
                    fontFamily: "var(--font-manrope)",
                    fontSize: "15px",
                    outline: "none",
                    width: "100%",
                  }}
                />
                <textarea
                  placeholder="Tell us about your project..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    background: "rgba(26,16,53,0.4)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    borderRadius: "8px",
                    padding: "14px 18px",
                    color: "#EEE8D5",
                    fontFamily: "var(--font-manrope)",
                    fontSize: "15px",
                    outline: "none",
                    width: "100%",
                    resize: "vertical",
                  }}
                />
                <button
                  type="submit"
                  data-landright-cta="email-us"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(201,168,76,0.4)",
                    color: "#C9A84C",
                    fontFamily: "var(--font-bebas)",
                    fontSize: "18px",
                    letterSpacing: "0.15em",
                    padding: "16px 40px",
                    cursor: "pointer",
                    borderRadius: "6px",
                    transition: "all 0.2s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(201,168,76,0.1)";
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.7)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                  }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        input::placeholder, textarea::placeholder {
          color: #3A3428;
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
