"use client";

import { useState } from "react";
import {Bebas_Neue, Manrope} from "next/font/google";
import Script from "next/script";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function HiddenStudiosV3() {
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Hidden Studios Inquiry");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:ibrahim.ansari4161@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`${bebas.variable} ${manrope.variable} min-h-screen bg-[#F2EDE6] text-[#0D0D0D] overflow-x-hidden`}>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      <style>{`
        * { box-sizing: border-box; }
        :root {
          --font-bebas: ${bebas.style.fontFamily};
          --font-manrope: ${manrope.style.fontFamily};
        }
        .font-bebas { font-family: var(--font-bebas), sans-serif; }
        .font-manrope { font-family: var(--font-manrope), sans-serif; }
        .diagonal-clip {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .diagonal-clip-reverse {
          clip-path: polygon(0 15%, 100% 0, 100% 100%, 0 100%);
        }
        .grain-overlay::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }
        .ticker-track {
          display: flex;
          animation: ticker 20s linear infinite;
          white-space: nowrap;
        }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slash-divider {
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #D4001A 30%, #FF6B00 70%, transparent);
        }
        .card-tilt {
          transform: rotate(-2deg);
          transition: transform 0.3s ease;
        }
        .card-tilt:hover {
          transform: rotate(0deg) scale(1.02);
        }
        .card-tilt-right {
          transform: rotate(1.5deg);
          transition: transform 0.3s ease;
        }
        .card-tilt-right:hover {
          transform: rotate(0deg) scale(1.02);
        }
        .btn-primary {
          background: #D4001A;
          color: #F2EDE6;
          font-family: var(--font-bebas);
          letter-spacing: 0.12em;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover {
          background: #FF1A35;
          transform: translateY(-2px);
        }
        .btn-outline {
          border: 2px solid #0D0D0D;
          color: #0D0D0D;
          font-family: var(--font-bebas);
          letter-spacing: 0.12em;
          transition: background 0.2s, color 0.2s, transform 0.15s;
        }
        .btn-outline:hover {
          background: #0D0D0D;
          color: #F2EDE6;
          transform: translateY(-2px);
        }
        .stat-card {
          background: #0D0D0D;
          color: #F2EDE6;
        }
        .feature-card {
          background: #E8E2DA;
          border: 1px solid #C8C0B4;
        }
        .feature-card:hover {
          background: #DDD6CC;
        }
        .preview-card {
          background: #0D0D0D;
          color: #F2EDE6;
        }
        .live-badge {
          background: #D4001A;
          animation: pulse-badge 2s ease-in-out infinite;
        }
        @keyframes pulse-badge {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .number-accent {
          color: #D4001A;
        }
        .text-muted-warm { color: #7A7060; }
        .border-warm { border-color: #C8C0B4; }
        .bg-dark-section { background: #0D0D0D; }
        .bg-mid-section { background: #E0D9D0; }
        .input-field {
          background: #F2EDE6;
          border: 1.5px solid #C8C0B4;
          color: #0D0D0D;
          font-family: var(--font-manrope);
          transition: border-color 0.2s;
        }
        .input-field:focus {
          outline: none;
          border-color: #D4001A;
        }
        .input-field::placeholder { color: #9A9080; }
        .calendly-modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .calendly-modal-inner {
          background: #F2EDE6;
          border-radius: 12px;
          width: 100%;
          max-width: 700px;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 12px;
          right: 16px;
          background: #0D0D0D;
          color: #F2EDE6;
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        .diagonal-hero {
          position: relative;
          background: #0D0D0D;
        }
        .hero-shape {
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 120px;
          background: #F2EDE6;
          clip-path: polygon(0 60%, 100% 0, 100% 100%, 0 100%);
        }
        .section-label {
          font-family: var(--font-manrope);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #D4001A;
        }
        .big-number {
          font-family: var(--font-bebas);
          line-height: 0.9;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 0 32px;
          font-family: var(--font-bebas);
          font-size: 20px;
          letter-spacing: 0.1em;
          color: #F2EDE6;
        }
        .marquee-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D4001A;
          flex-shrink: 0;
        }
        .zigzag-border {
          background: linear-gradient(135deg, #D4001A 25%, transparent 25%) -10px 0,
            linear-gradient(225deg, #D4001A 25%, transparent 25%) -10px 0,
            linear-gradient(315deg, #D4001A 25%, transparent 25%),
            linear-gradient(45deg, #D4001A 25%, transparent 25%);
          background-size: 20px 20px;
          background-color: #D4001A;
          height: 8px;
          width: 100%;
        }
      `}</style>

      {/* Calendly Modal */}
      {calendlyOpen && (
        <div className="calendly-modal" onClick={(e) => { if (e.target === e.currentTarget) setCalendlyOpen(false); }}>
          <div className="calendly-modal-inner">
            <button className="close-btn" onClick={() => setCalendlyOpen(false)}>×</button>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/ibrahim-ansari4161/new-meeting"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      )}

      {/* NAV */}
      <nav data-landright-section="Nav" className="relative z-50 bg-[#F2EDE6] border-b border-[#C8C0B4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="data:image/jpeg;base64,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" alt="Hidden Studios" className="h-9 w-auto" />
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCalendlyOpen(true)}
              className="btn-primary px-6 py-2.5 text-lg rounded-sm"
            >
              CALL
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section data-landright-section="hero" className="diagonal-hero grain-overlay relative pt-16 pb-40 md:pt-24 md:pb-52 overflow-hidden">
        {/* Background texture lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, #F2EDE6 60px, #F2EDE6 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #F2EDE6 60px, #F2EDE6 61px)"
        }} />

        {/* Red accent bar top */}
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-[#D4001A]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="section-label mb-6">Fortnite Creative Marketing</div>
              <h1 className="font-bebas text-[#F2EDE6] leading-none mb-6" style={{ fontSize: "clamp(64px, 10vw, 140px)" }}>
                YOUR<br />
                <span className="text-[#D4001A]">BRAND.</span><br />
                FORTNITE'S<br />
                AUDIENCE.
              </h1>
              <p className="font-manrope text-[#9A9080] text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                Hidden Studios engineers Fortnite Creative maps and in-game marketing campaigns that put your brand in front of millions of active players — where they already live.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button
                  type="button"
                  onClick={() => setCalendlyOpen(true)}
                  className="btn-primary px-10 py-4 text-2xl rounded-sm font-bebas tracking-wider"
                >
                  SCHEDULE CALL
                </button>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-8 h-px bg-[#6B6B7A]" />
                  <span className="font-manrope text-[#6B6B7A] text-sm">15 min strategy session</span>
                </div>
              </div>
            </div>

            {/* Right: Floating Preview Card */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Main preview card */}
              <div className="preview-card card-tilt rounded-lg overflow-hidden w-full max-w-sm shadow-2xl">
                <div className="relative">
                  {/* Mock map thumbnail */}
                  <div className="w-full h-48 bg-gradient-to-br from-[#1A2A4A] via-[#0D1A30] to-[#0A0A0B] relative overflow-hidden">
                    <div className="absolute inset-0" style={{
                      backgroundImage: "radial-gradient(ellipse at 30% 40%, rgba(212,0,26,0.3) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(0,100,200,0.2) 0%, transparent 50%)"
                    }} />
                    {/* Grid overlay */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 21px)"
                    }} />
                    {/* Map elements */}
                    <div className="absolute top-4 left-4 w-16 h-12 bg-[#1E3A5F] rounded opacity-80" />
                    <div className="absolute top-8 left-24 w-10 h-8 bg-[#2A4A6F] rounded opacity-60" />
                    <div className="absolute bottom-6 right-8 w-20 h-14 bg-[#1A3050] rounded opacity-70" />
                    <div className="absolute bottom-4 left-8 w-12 h-10 bg-[#D4001A] rounded opacity-40" />
                    {/* LIVE badge */}
                    <div className="absolute top-3 right-3 live-badge text-white text-xs font-manrope font-bold px-2 py-1 rounded-sm flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      LIVE
                    </div>
                  </div>
                  {/* Card content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bebas text-[#F2EDE6] text-xl tracking-wider">BRAND ACTIVATION MAP</span>
                      <span className="font-manrope text-[#D4001A] text-xs font-bold">ACTIVE</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#D4001A]" />
                        <span className="font-manrope text-[#9A9080] text-xs">2.4M players</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#4A9A4A]" />
                        <span className="font-manrope text-[#9A9080] text-xs">84K peak CCU</span>
                      </div>
                    </div>
                    <div className="mt-3 w-full bg-[#1A1A1A] rounded-full h-1.5">
                      <div className="bg-[#D4001A] h-1.5 rounded-full" style={{ width: "73%" }} />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-manrope text-[#6B6B7A] text-xs">Engagement</span>
                      <span className="font-manrope text-[#F2EDE6] text-xs font-bold">73%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat chip */}
              <div className="card-tilt-right absolute -bottom-4 -left-4 stat-card rounded-lg px-4 py-3 shadow-xl">
                <div className="font-bebas text-[#D4001A] text-3xl leading-none">84K</div>
                <div className="font-manrope text-[#9A9080] text-xs">Peak CCU Record</div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal shape transition */}
        <div className="hero-shape" />
      </section>

      {/* MARQUEE TICKER */}
      <section data-landright-section="Ticker" className="bg-dark-section py-4 overflow-hidden">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {["FORTNITE CREATIVE", "BRAND ACTIVATION", "IN-GAME MARKETING", "CUSTOM MAP DEVELOPMENT", "FULL-FUNNEL STRATEGY", "2.4M PLAYERS REACHED", "84K PEAK CCU", "CAMPAIGN LAUNCH"].map((item, j) => (
                <div key={j} className="marquee-item">
                  <div className="marquee-dot" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section data-landright-section="Features" className="bg-[#F2EDE6] py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Headline */}
            <div className="lg:sticky lg:top-24">
              <div className="section-label mb-4">What We Build</div>
              <h2 className="font-bebas text-[#0D0D0D] leading-none mb-6" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
                FORTNITE ADS<br />
                THAT<br />
                <span className="text-[#D4001A]">ACTUALLY</span><br />
                HIT
              </h2>
              <p className="font-manrope text-[#7A7060] text-base leading-relaxed max-w-md">
                We don't run banner ads. We build worlds. Fortnite Creative maps that embed your brand into gameplay — where players spend hours, not seconds.
              </p>
              {/* Stats row */}
              <div className="flex gap-8 mt-10">
                <div>
                  <div className="big-number number-accent" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>2.4M</div>
                  <div className="font-manrope text-[#7A7060] text-xs uppercase tracking-widest mt-1">Players Reached</div>
                </div>
                <div className="w-px bg-[#C8C0B4]" />
                <div>
                  <div className="big-number text-[#0D0D0D]" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>84K</div>
                  <div className="font-manrope text-[#7A7060] text-xs uppercase tracking-widest mt-1">Peak CCU</div>
                </div>
                <div className="w-px bg-[#C8C0B4]" />
                <div>
                  <div className="big-number text-[#0D0D0D]" style={{ fontSize: "clamp(40px, 5vw, 64px)" }}>#1</div>
                  <div className="font-manrope text-[#7A7060] text-xs uppercase tracking-widest mt-1">Ranked Maps</div>
                </div>
              </div>
            </div>

            {/* Right: Feature cards */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: "🎯",
                  title: "Native Ad Experiences",
                  desc: "Fortnite-native ad experiences built to convert players into customers. No interruptions — pure immersion.",
                  tag: "CONVERSION"
                },
                {
                  icon: "🗺️",
                  title: "Custom Creative Maps",
                  desc: "Custom Creative map development that keeps audiences engaged for hours. Your brand becomes the game.",
                  tag: "ENGAGEMENT"
                },
                {
                  icon: "📈",
                  title: "Full-Funnel Strategy",
                  desc: "Full-funnel in-game marketing strategy from concept to campaign launch. We handle everything.",
                  tag: "STRATEGY"
                }
              ].map((feature, i) => (
                <div key={i} className="feature-card rounded-lg p-6 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <span className="font-manrope text-[10px] font-bold tracking-widest text-[#D4001A] border border-[#D4001A] px-2 py-1 rounded-sm">
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="font-bebas text-[#0D0D0D] text-2xl tracking-wide mb-2">{feature.title}</h3>
                  <p className="font-manrope text-[#7A7060] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIAGONAL DIVIDER + DARK SECTION */}
      <section data-landright-section="Process" className="relative bg-[#F2EDE6]">
        {/* Diagonal top */}
        <div className="w-full h-24 bg-[#0D0D0D]" style={{ clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)" }} />

        <div className="bg-[#0D0D0D] py-16 md:py-24 relative grain-overlay">
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="section-label mb-4">The Process</div>
              <h2 className="font-bebas text-[#F2EDE6] leading-none" style={{ fontSize: "clamp(48px, 7vw, 96px)" }}>
                BUILD INSIDE THE GAME.<br />
                <span className="text-[#D4001A]">WIN OUTSIDE IT.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "STRATEGY", desc: "We map your brand goals to Fortnite's player behavior. Audience analysis, campaign architecture, KPI definition." },
                { step: "02", title: "BUILD", desc: "Our Creative team engineers your custom map — immersive, on-brand, and optimized for maximum dwell time." },
                { step: "03", title: "LAUNCH", desc: "Campaign goes live. We monitor, optimize, and report. Real metrics from real players in real time." }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="font-bebas text-[#D4001A] opacity-20 absolute -top-4 -left-2" style={{ fontSize: "80px", lineHeight: 1 }}>{item.step}</div>
                  <div className="relative z-10 pt-8">
                    <div className="w-8 h-0.5 bg-[#D4001A] mb-4" />
                    <h3 className="font-bebas text-[#F2EDE6] text-3xl tracking-wider mb-3">{item.title}</h3>
                    <p className="font-manrope text-[#6B6B7A] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diagonal bottom */}
        <div className="w-full h-24 bg-[#0D0D0D]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }} />
      </section>

      {/* EMAIL CONTACT SECTION */}
      <section data-landright-section="contact" className="bg-[#F2EDE6] py-20 md:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <div>
        <div className="section-label mb-4">Get In Touch</div>
        <h2 className="font-bebas text-[#0D0D0D] leading-none mb-6" style={{ fontSize: "clamp(48px, 6vw, 80px)" }}>
          READY TO<br />
          <span className="text-[#D4001A]">DOMINATE</span><br />
          FORTNITE?
        </h2>
        <p className="font-manrope text-[#7A7060] text-base leading-relaxed mb-8 max-w-md">
          Tell us about your brand and campaign goals. We'll get back to you within 24 hours with a custom strategy outline.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            type="button"
            onClick={() => setCalendlyOpen(true)}
            className="btn-primary px-8 py-3 text-xl rounded-sm font-bebas tracking-wider"
          >
            BOOK A CALL
          </button>
          <span className="font-manrope text-[#7A7060] text-sm">or complete the form →</span>
        </div>
      </div>

      {/* Right: Email form */}
      <div className="bg-[#E8E2DA] border border-[#C8C0B4] rounded-lg p-8">
        <h3 className="font-bebas text-[#0D0D0D] text-2xl tracking-wide mb-6">EMAIL US</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="font-manrope text-[#7A7060] text-xs uppercase tracking-widest block mb-1.5">Name</label>
            <input
              type="text"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-field w-full px-4 py-3 rounded-sm text-sm"
            />
          </div>
          <div>
            <label className="font-manrope text-[#7A7060] text-xs uppercase tracking-widest block mb-1.5">Email</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input-field w-full px-4 py-3 rounded-sm text-sm"
            />
          </div>
          <div>
            <label className="font-manrope text-[#7A7060] text-xs uppercase tracking-widest block mb-1.5">Message</label>
            <textarea
              required
              placeholder="Tell us about your brand and campaign goals..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="input-field w-full px-4 py-3 rounded-sm text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full py-3.5 text-xl rounded-sm mt-2 font-bebas tracking-wider"
          >
            EMAIL US
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer data-landright-section="Footer" className="bg-[#0D0D0D] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            {/* Brand */}
            <div className="max-w-xs">
              <img src="data:image/jpeg;base64,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" alt="Hidden Studios" className="h-10 w-auto mb-4" />
              <p className="font-manrope text-[#6B6B7A] text-sm leading-relaxed">
                Build Inside the Game. Win Outside It.
              </p>
              <p className="font-manrope text-[#6B6B7A] text-xs mt-3">
                Fortnite Creative marketing for brands that want to reach the next generation of consumers.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <div className="font-bebas text-[#D4001A] text-4xl">2.4M</div>
                <div className="font-manrope text-[#6B6B7A] text-xs uppercase tracking-widest">Players Reached</div>
              </div>
              <div>
                <div className="font-bebas text-[#F2EDE6] text-4xl">84K</div>
                <div className="font-manrope text-[#6B6B7A] text-xs uppercase tracking-widest">Peak CCU</div>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="font-manrope text-[#6B6B7A] text-xs uppercase tracking-widest mb-4">Follow Us</div>
              <div className="flex flex-col gap-3">
                <a
                  href="https://x.com/HiddenStudiosGG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bebas text-[#F2EDE6] text-lg tracking-wider hover:text-[#D4001A] transition-colors"
                >
                  TWITTER
                </a>
                <a
                  href="https://www.linkedin.com/company/hiddenstudiosinc/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bebas text-[#F2EDE6] text-lg tracking-wider hover:text-[#D4001A] transition-colors"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>

          <div className="slash-divider mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-manrope text-[#6B6B7A] text-xs">
              © {new Date().getFullYear()} Hidden Studios. All rights reserved.
            </p>
            <p className="font-manrope text-[#6B6B7A] text-xs">
              Not affiliated with Epic Games or Fortnite.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
