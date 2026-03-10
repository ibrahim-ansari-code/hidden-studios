"use client";

import { useState } from "react";
import {Bebas_Neue, Manrope} from "next/font/google";
import Script from "next/script";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function HiddenStudiosV4() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Hidden Studios Inquiry");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:ibrahim.ansari4161@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`${bebas.variable} ${manrope.variable} bg-[#0A0A0B] text-[#F5F5F5] min-h-screen overflow-x-hidden`}
      style={{ fontFamily: "var(--font-manrope)" }}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      {/* GRAIN OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
        opacity: 0.08
      }} />

      {/* NAV */}
      <nav data-landright-section="Nav" className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
        <img src="data:image/jpeg;base64,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" alt="Hidden Studios" className="h-8 w-auto" />
        <div className="flex items-center gap-4">
          <a href="https://x.com/HiddenStudiosGG" target="_blank" rel="noopener noreferrer"
            className="text-[#6B6B7A] hover:text-[#F5F5F5] transition-colors text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
            Twitter
          </a>
          <a href="https://www.linkedin.com/company/hiddenstudiosinc/about/" target="_blank" rel="noopener noreferrer"
            className="text-[#6B6B7A] hover:text-[#F5F5F5] transition-colors text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
            LinkedIn
          </a>
        </div>
      </nav>

      {/* HERO — DIAGONAL TYPOGRAPHIC-LED */}
      <section data-landright-section="Hero" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
        {/* Diagonal background slashes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            background: "linear-gradient(135deg, #111114 0%, #0A0A0B 50%, #0D0D10 100%)"
          }} />
          {/* Red diagonal slash */}
          <div className="absolute" style={{
            top: "-10%",
            right: "-5%",
            width: "55%",
            height: "130%",
            background: "linear-gradient(135deg, transparent 40%, #E8001D08 40%, #E8001D12 60%, transparent 60%)",
            transform: "skewX(-8deg)"
          }} />
          <div className="absolute" style={{
            top: "-10%",
            right: "5%",
            width: "3px",
            height: "130%",
            background: "linear-gradient(180deg, transparent, #E8001D60, #E8001D, #E8001D60, transparent)",
            transform: "skewX(-8deg)"
          }} />
          <div className="absolute" style={{
            top: "-10%",
            right: "18%",
            width: "1px",
            height: "130%",
            background: "linear-gradient(180deg, transparent, #E8001D20, #E8001D40, transparent)",
            transform: "skewX(-8deg)"
          }} />
          {/* Grid lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
          {/* Overline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#E8001D]" />
            <span className="text-[#E8001D] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-manrope)" }}>Fortnite Creative Agency</span>
          </div>

          {/* Massive diagonal headline */}
          <div className="relative">
            <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(72px, 14vw, 180px)", lineHeight: "0.88", letterSpacing: "0.02em" }}
              className="text-[#F5F5F5] leading-none">
              <span className="block">BUILD</span>
              <span className="block" style={{ WebkitTextStroke: "2px #E8001D", color: "transparent" }}>INSIDE</span>
              <span className="block">THE GAME.</span>
            </h1>
            {/* Offset second line */}
            <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(72px, 14vw, 180px)", lineHeight: "0.88", letterSpacing: "0.02em" }}
              className="text-[#E8001D] leading-none mt-2 md:ml-16 lg:ml-32">
              WIN OUTSIDE IT.
            </h1>
          </div>

          <div className="mt-10 max-w-xl">
            <p className="text-[#6B6B7A] text-base md:text-lg leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>
              Hidden Studios engineers Fortnite Creative maps and in-game marketing campaigns that put your brand in front of millions of active players — where they already live.
            </p>
          </div>

          {/* HERO CTA — ONLY PLACEMENT */}
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <button
              type="button"
              onClick={() => setCalendlyOpen(true)}
              className="group relative overflow-hidden bg-[#E8001D] text-white px-10 py-4 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-[#FF1A35] hover:scale-105 active:scale-95"
              style={{ fontFamily: "var(--font-manrope)", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              <span className="relative z-10">call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00] to-[#E8001D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <div className="flex items-center gap-3 text-[#6B6B7A] text-sm" style={{ fontFamily: "var(--font-manrope)" }}>
              <div className="w-2 h-2 rounded-full bg-[#E8001D] animate-pulse" />
              <span>2.4M+ players reached</span>
            </div>
          </div>

          {/* Calendly widget */}
          {calendlyOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="relative bg-[#111114] border border-white/10 w-full max-w-2xl rounded-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setCalendlyOpen(false)}
                  className="absolute top-3 right-4 text-[#6B6B7A] hover:text-white z-10 text-xl font-bold"
                >
                  ×
                </button>
                <div
                  className="calendly-inline-widget w-full"
                  data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
                  style={{ minWidth: "320px", height: "630px" }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Floating preview card */}
        <div className="absolute bottom-12 right-6 md:right-16 z-20 hidden md:block" style={{ transform: "rotate(3deg)" }}>
          <div className="bg-[#111114]/90 backdrop-blur-md border border-white/10 p-4 w-64"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] tracking-widest text-[#6B6B7A] uppercase" style={{ fontFamily: "var(--font-manrope)" }}>Live Campaign</span>
              <span className="bg-[#E8001D] text-white text-[9px] px-2 py-0.5 tracking-widest uppercase" style={{ fontFamily: "var(--font-manrope)" }}>● LIVE</span>
            </div>
            <div className="bg-[#1A1A1E] h-28 mb-3 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0" style={{
                background: "linear-gradient(135deg, #1a0a0a 0%, #0d0d14 50%, #0a1a0a 100%)"
              }} />
              <div className="relative text-center">
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "28px", color: "#E8001D" }}>FORTNITE</div>
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "14px", color: "#6B6B7A", letterSpacing: "0.2em" }}>CREATIVE MAP</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-manrope)" }}>2.4M</div>
                <div className="text-[#6B6B7A] text-[10px]" style={{ fontFamily: "var(--font-manrope)" }}>Active Players</div>
              </div>
              <div className="text-right">
                <div className="text-[#E8001D] text-sm font-bold" style={{ fontFamily: "var(--font-manrope)" }}>↑ 847%</div>
                <div className="text-[#6B6B7A] text-[10px]" style={{ fontFamily: "var(--font-manrope)" }}>Engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGONAL DIVIDER */}
      <div className="relative h-16 bg-[#0A0A0B] overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(170deg, #0A0A0B 49%, #111114 50%)"
        }} />
      </div>

      {/* FEATURES — DIAGONAL LAYOUT */}
      <section data-landright-section="Features" className="relative bg-[#111114] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(232,0,29,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,0,29,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#E8001D]" />
            <span className="text-[#E8001D] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-manrope)" }}>What We Build</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(48px, 8vw, 100px)", lineHeight: "0.9", letterSpacing: "0.02em" }}
            className="text-[#F5F5F5] mb-16">
            FULL-STACK<br />
            <span className="text-[#E8001D]">IN-GAME</span> MARKETING
          </h2>

          {/* Three feature blocks — staggered diagonal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px bg-transparent md:bg-white/5">
            {[
              {
                icon: "🎯",
                number: "01",
                title: "NATIVE AD EXPERIENCES",
                body: "Fortnite-native ad experiences built to convert players into customers. No banner blindness. No skip buttons.",
                accent: "#E8001D"
              },
              {
                icon: "🗺️",
                number: "02",
                title: "CUSTOM MAP DEVELOPMENT",
                body: "Custom Creative map development that keeps audiences engaged for hours — your brand embedded in the gameplay loop.",
                accent: "#FF4D00"
              },
              {
                icon: "📈",
                number: "03",
                title: "FULL-FUNNEL STRATEGY",
                body: "Full-funnel in-game marketing strategy from concept to campaign launch. We own the entire pipeline.",
                accent: "#E8001D"
              }
            ].map((feat, i) => (
              <div key={i}
                className="bg-[#111114] p-8 md:p-10 group hover:bg-[#141418] transition-colors duration-300 relative overflow-hidden"
                style={{ transform: `translateY(${i * 0}px)` }}>
                <div className="absolute top-0 left-0 w-full h-px" style={{ background: `linear-gradient(90deg, ${feat.accent}, transparent)` }} />
                <div className="absolute bottom-0 right-0 w-px h-full" style={{ background: `linear-gradient(180deg, transparent, ${feat.accent}20)` }} />
                <div className="text-3xl mb-6">{feat.icon}</div>
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "64px", color: feat.accent, opacity: 0.15, lineHeight: 1 }}
                  className="absolute top-6 right-6">{feat.number}</div>
                <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: "28px", letterSpacing: "0.05em" }}
                  className="text-[#F5F5F5] mb-4">{feat.title}</h3>
                <p className="text-[#6B6B7A] text-sm leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>{feat.body}</p>
                <div className="mt-6 w-8 h-px group-hover:w-16 transition-all duration-500" style={{ background: feat.accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGONAL DIVIDER 2 */}
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(170deg, #111114 49%, #0A0A0B 50%)"
        }} />
      </div>

      {/* STATS SECTION */}
      <section data-landright-section="Stats" className="relative bg-[#0A0A0B] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 50%, #E8001D08 0%, transparent 70%)"
        }} />
        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
            {[
              { value: "2.4M+", label: "Players Reached" },
              { value: "84K", label: "Peak CCU Record" },
              { value: "100%", label: "Fortnite Native" },
              { value: "#1", label: "Creative Agency" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:px-8">
                <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(48px, 6vw, 80px)", color: i % 2 === 0 ? "#E8001D" : "#F5F5F5", lineHeight: 1 }}>
                  {stat.value}
                </div>
                <div className="text-[#6B6B7A] text-xs tracking-widest uppercase mt-2" style={{ fontFamily: "var(--font-manrope)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — DIAGONAL COMPOSITION */}
      <section data-landright-section="Process" className="relative bg-[#0D0D10] py-20 md:py-32 overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full" style={{
          background: "linear-gradient(135deg, transparent 30%, #E8001D04 100%)"
        }} />
        <div className="absolute right-0 top-0 w-px h-full" style={{
          background: "linear-gradient(180deg, transparent, #E8001D30, #E8001D60, #E8001D30, transparent)"
        }} />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-[#E8001D]" />
            <span className="text-[#E8001D] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-manrope)" }}>The Process</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(48px, 8vw, 100px)", lineHeight: "0.9", letterSpacing: "0.02em" }}
            className="text-[#F5F5F5] mb-16">
            FROM BRIEF<br />
            TO <span className="text-[#E8001D]">LIVE</span>
          </h2>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-8 right-8 h-px" style={{ background: "linear-gradient(90deg, #E8001D, #E8001D40, transparent)" }} />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "STRATEGY CALL", body: "We map your brand goals to Fortnite's audience. Define KPIs, creative direction, and campaign scope." },
                { step: "02", title: "BUILD & LAUNCH", body: "Our team engineers your custom Creative map and deploys the campaign across Fortnite's discovery channels." },
                { step: "03", title: "SCALE & REPORT", body: "Real-time player data, engagement metrics, and conversion tracking. We optimize until you win." }
              ].map((step, i) => (
                <div key={i} className="relative pl-6 border-l border-[#E8001D]/30 hover:border-[#E8001D] transition-colors duration-300">
                  <div style={{ fontFamily: "var(--font-bebas)", fontSize: "80px", color: "#E8001D", opacity: 0.1, lineHeight: 1, position: "absolute", top: "-10px", right: "0" }}>
                    {step.step}
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#E8001D] mb-6 -ml-8" />
                  <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: "24px", letterSpacing: "0.05em" }}
                    className="text-[#F5F5F5] mb-3">{step.title}</h3>
                  <p className="text-[#6B6B7A] text-sm leading-relaxed" style={{ fontFamily: "var(--font-manrope)" }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — EMAIL FORM + SOCIALS */}
      <footer data-landright-section="Footer" className="relative bg-[#0A0A0B] border-t border-white/5 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #E8001D, transparent)" }} />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Left: Brand */}
            <div>
              <img src="data:image/jpeg;base64,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" alt="Hidden Studios" className="h-10 w-auto mb-6" />
              <p className="text-[#6B6B7A] text-sm leading-relaxed max-w-sm mb-8" style={{ fontFamily: "var(--font-manrope)" }}>
                Hidden Studios builds and markets Fortnite Creative experiences that put brands and creators in front of massive in-game audiences.
              </p>
              <div style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(32px, 5vw, 56px)", lineHeight: "0.9", letterSpacing: "0.02em" }}
                className="text-[#F5F5F5]">
                BUILD INSIDE<br />
                <span className="text-[#E8001D]">THE GAME.</span>
              </div>
            </div>

            {/* Right: Email form */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-[#E8001D]" />
                <span className="text-[#E8001D] text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-manrope)" }}>Get In Touch</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-bebas)", fontSize: "36px", letterSpacing: "0.05em" }}
                className="text-[#F5F5F5] mb-6">EMAIL US</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#111114] border border-white/10 text-[#F5F5F5] px-4 py-3 text-sm placeholder-[#6B6B7A] focus:outline-none focus:border-[#E8001D] transition-colors"
                      style={{ fontFamily: "var(--font-manrope)", clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#111114] border border-white/10 text-[#F5F5F5] px-4 py-3 text-sm placeholder-[#6B6B7A] focus:outline-none focus:border-[#E8001D] transition-colors"
                      style={{ fontFamily: "var(--font-manrope)", clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                    />
                  </div>
                </div>
                <textarea
                  placeholder="Tell us about your brand and campaign goals..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#111114] border border-white/10 text-[#F5F5F5] px-4 py-3 text-sm placeholder-[#6B6B7A] focus:outline-none focus:border-[#E8001D] transition-colors resize-none"
                  style={{ fontFamily: "var(--font-manrope)", clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                />
                <button
                  type="submit"
                  className="bg-[#E8001D] text-white px-8 py-3 text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#FF1A35] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-manrope)", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                >
                  email us
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#6B6B7A] text-xs" style={{ fontFamily: "var(--font-manrope)" }}>
              © 2024 Hidden Studios. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://x.com/HiddenStudiosGG" target="_blank" rel="noopener noreferrer"
                className="text-[#6B6B7A] hover:text-[#E8001D] transition-colors text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-manrope)" }}>
                Twitter
              </a>
              <a href="https://www.linkedin.com/company/hiddenstudiosinc/about/" target="_blank" rel="noopener noreferrer"
                className="text-[#6B6B7A] hover:text-[#E8001D] transition-colors text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-manrope)" }}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
