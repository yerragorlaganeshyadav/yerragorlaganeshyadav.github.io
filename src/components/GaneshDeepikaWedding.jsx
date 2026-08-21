import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaGlassCheers,
  FaCalendarAlt,
  FaGlobe,
  FaTimes,
  FaDirections,
  FaChevronUp,
  FaPhoneAlt,
  FaClock,
  FaCalendarCheck,
  FaEnvelope,
} from "react-icons/fa";
import { translations } from "./GaneshDeepika/translations";

const GaneshDeepikaWedding = () => {
  // Default language is Telugu ('te')
  const [lang, setLang] = useState("te");
  const [showSaveDateModal, setShowSaveDateModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  // Countdown timer to Muhurtham (Aug 23, 2026, 08:15 AM IST)
  const targetDate = new Date("2026-08-23T04:30:00+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === "te" ? "en" : "te"));
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Ganesh & Deepika Wedding (కళ్యాణ మహోత్సవం)"
  )}&dates=20260823T024500Z/20260823T073000Z&details=${encodeURIComponent(
    "Join us to celebrate the wedding of Ganesh & Deepika at PGR Function Hall, Pamidi!"
  )}&location=${encodeURIComponent(
    "PGR Function Hall, Bypass Link Road, Pamidi, Anantapur, Andhra Pradesh"
  )}`;

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#4A0E17] font-serif transition-colors duration-300 relative selection:bg-[#D4AF37] selection:text-white">
      {/* Google Fonts Link Inject for Telugu & English serif */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=Cormorant+Garamond:ital,wght@0,500;0,700;1,400&family=Noto+Serif+Telugu:wght@400;600;700&display=swap');

        .font-wedding {
          font-family: 'Noto Serif Telugu', 'Cormorant Garamond', 'Cinzel', serif;
        }
        .font-brand {
          font-family: 'Cinzel', 'Noto Serif Telugu', serif;
        }
        .bg-pattern {
          background-color: #FAF7F2;
          background-image: radial-gradient(#D4AF37 0.75px, transparent 0.75px), radial-gradient(#D4AF37 0.75px, #FAF7F2 0.75px);
          background-size: 30px 30px;
          background-position: 0 0, 15px 15px;
          background-opacity: 0.15;
        }
      `}</style>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6C280]/30 shadow-sm py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#top" className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold font-brand tracking-wider text-[#4A0E17]">
              {t.brand}
            </span>
            <span className="text-[10px] tracking-widest text-[#B8860B] uppercase font-sans">
              {t.brandSubtitle}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#5C121D]">
            <a href="#story" className="hover:text-[#B8860B] transition">
              {t.ourStory}
            </a>
            <a href="#events" className="hover:text-[#B8860B] transition">
              {t.events}
            </a>
            <a href="#venue" className="hover:text-[#B8860B] transition">
              {t.location}
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#D4AF37] text-xs font-sans font-semibold text-[#4A0E17] hover:bg-[#4A0E17] hover:text-white transition shadow-sm"
              title="Toggle Telugu / English"
            >
              <FaGlobe className="text-[#D4AF37]" />
              <span>{lang === "te" ? "English" : "తెలుగు"}</span>
            </button>

            {/* Save the Date CTA Button */}
            <button
              onClick={() => setShowSaveDateModal(true)}
              className="bg-[#4A0E17] hover:bg-[#6b1422] text-white text-xs sm:text-sm font-sans font-medium px-4 py-2 rounded-full shadow-md hover:shadow-lg transition duration-200 tracking-wide"
            >
              {t.saveTheDate}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Wedding Mandap Banner */}
      <section
        id="top"
        className="relative min-h-[85vh] flex items-center justify-center text-center px-4 py-16 overflow-hidden"
      >
        {/* Mandap Background Image with Subtle Parallax Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/wedding_mandap_bg.jpg"
            alt="Traditional Wedding Mandap"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.88] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C070D] via-[#4A0E17]/40 to-transparent" />
        </div>

        {/* Hero Central Luxury Card */}
        <div className="relative z-10 max-w-3xl mx-auto bg-[#FAF7F2]/90 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-2xl border border-[#D4AF37]/50 my-8">
          <div className="inline-block border-y border-[#D4AF37] py-1 px-6 mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-sans font-semibold text-[#8B0000]">
              {t.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-brand text-[#4A0E17] mb-6 tracking-wide drop-shadow-sm leading-tight">
            {t.coupleNames}
          </h1>

          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAF7F2] px-2 text-[#D4AF37]">
              ❖
            </div>
          </div>

          <p className="text-base sm:text-xl font-wedding leading-relaxed text-[#3D0B12] max-w-2xl mx-auto mb-8">
            "{t.invitationText}"
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#events"
              className="bg-[#4A0E17] hover:bg-[#6b1422] text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              {t.events}
            </a>
            <a
              href="#venue"
              className="border-2 border-[#4A0E17] text-[#4A0E17] hover:bg-[#4A0E17] hover:text-white font-sans text-sm font-semibold px-6 py-3 rounded-lg transition"
            >
              {t.location}
            </a>
          </div>
        </div>
      </section>

      {/* Original Wedding Couple Portrait Section */}
      <section
        id="story"
        className="py-16 px-4 bg-gradient-to-b from-[#FAF7F2] to-[#F4EFE6] border-y border-[#E6C280]/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#4A0E17]/10 text-[#4A0E17] px-4 py-1.5 rounded-full text-xs font-sans font-bold tracking-wider mb-4 border border-[#4A0E17]/20">
            <span>✨ {t.ghibliBadge}</span>
          </div>

          <div className="relative max-w-lg mx-auto bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-[#D4AF37]/40 mb-6 group hover:shadow-2xl transition">
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/original_wedding_couple.jpg"
                alt="Ganesh & Deepika Wedding Couple"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
            <p className="mt-4 font-wedding text-sm sm:text-base italic text-[#5C121D]">
              "{t.ghibliCaption}"
            </p>
          </div>
        </div>
      </section>

      {/* Event Schedule & Timings Section */}
      <section id="events" className="py-20 px-4 bg-pattern relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold font-brand text-[#4A0E17] mb-4">
            {t.eventScheduleTitle}
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-16 rounded-full" />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Event 1: Reception */}
            <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg border border-[#E6C280]/40 flex flex-col justify-between hover:border-[#D4AF37] transition group text-left">
              <div>
                <div className="w-14 h-14 bg-[#FAF7F2] text-[#4A0E17] border border-[#D4AF37] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4A0E17] group-hover:text-white transition">
                  <FaGlassCheers className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold font-brand text-[#4A0E17] mb-2">
                  {t.receptionTitle}
                </h3>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#B8860B]">
                    <FaCalendarCheck />
                    <span>{t.receptionDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-base font-extrabold text-[#8B0000]">
                    <FaClock className="text-[#D4AF37]" />
                    <span>{t.receptionTime}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base font-wedding text-[#5C121D] leading-relaxed">
                  {t.receptionDesc}
                </p>
              </div>
            </div>

            {/* Event 2: The Knot (Muhurtham) */}
            <div className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg border border-[#E6C280]/40 flex flex-col justify-between hover:border-[#D4AF37] transition group text-left">
              <div>
                <div className="w-14 h-14 bg-[#FAF7F2] text-[#4A0E17] border border-[#D4AF37] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#4A0E17] group-hover:text-white transition">
                  <FaHeart className="text-2xl text-[#8B0000]" />
                </div>
                <h3 className="text-2xl font-bold font-brand text-[#4A0E17] mb-2">
                  {t.knotTitle}
                </h3>
                <div className="space-y-1 mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#B8860B]">
                    <FaCalendarCheck />
                    <span>{t.knotDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-base font-extrabold text-[#8B0000]">
                    <FaClock className="text-[#D4AF37]" />
                    <span>{t.knotTime}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base font-wedding text-[#5C121D] leading-relaxed">
                  {t.knotDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue & Location Section */}
      <section id="venue" className="py-20 px-4 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map Preview Artwork Card */}
            <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-[#E6C280]/50 overflow-hidden group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/venue_map_preview.jpg"
                  alt="Venue Map Preview"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />

                {/* Overlaid Couple Badge Emblem on Map */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#D4AF37] overflow-hidden shadow-2xl bg-white p-1">
                    <img
                      src="/images/original_wedding_couple.jpg"
                      alt="Ganesh Deepika Emblem"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Get Directions Floating Action */}
              <div className="mt-4 text-center">
                <a
                  href={t.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#4A0E17] hover:bg-[#6b1422] text-white font-sans text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow transition"
                >
                  <FaDirections className="text-base text-[#D4AF37]" />
                  <span>{t.getDirections}</span>
                </a>
              </div>
            </div>

            {/* Venue Details Box */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-5xl font-bold font-brand text-[#4A0E17]">
                {t.venueTitle}
              </h2>
              <p className="text-base sm:text-lg font-wedding text-[#5C121D] leading-relaxed">
                {t.venueSubtitle}
              </p>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border-l-4 border-l-[#4A0E17] border border-[#E6C280]/30 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FAF7F2] rounded-full text-[#4A0E17]">
                    <FaMapMarkerAlt className="text-2xl text-[#8B0000]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-brand text-[#4A0E17]">
                      {t.venueName}
                    </h4>
                    <p className="text-sm sm:text-base font-wedding text-gray-700 mt-1">
                      {t.venueAddress}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={t.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans font-bold text-[#8B0000] hover:underline break-all"
                  >
                    <span>{t.mapUrl}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Timings Summary Highlight Card (Replaces RSVP) */}
      <section className="py-16 px-4 bg-pattern">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border-2 border-[#D4AF37] relative">
            <div className="w-14 h-14 bg-[#4A0E17] text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-[#D4AF37]">
              <FaClock className="text-2xl" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-brand text-[#4A0E17] mb-2">
              {t.eventTimingsCardTitle}
            </h3>
            <p className="text-sm sm:text-base font-wedding text-[#5C121D] mb-8">
              {t.eventTimingsCardSubtitle}
            </p>

            {/* Event Timings Table/Card Grid */}
            <div className="grid sm:grid-cols-2 gap-6 text-left mb-8">
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E6C280]/60 space-y-2">
                <div className="text-xs uppercase font-sans font-bold tracking-wider text-[#B8860B]">
                  Day 1 • రిసెప్షన్ (วิందు)
                </div>
                <div className="text-lg font-bold font-brand text-[#4A0E17]">
                  {t.receptionDate}
                </div>
                <div className="flex items-center gap-2 text-base font-extrabold text-[#8B0000]">
                  <FaClock className="text-[#D4AF37]" />
                  <span>{t.receptionTime}</span>
                </div>
              </div>

              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E6C280]/60 space-y-2">
                <div className="text-xs uppercase font-sans font-bold tracking-wider text-[#B8860B]">
                  Day 2 • సుముహూర్తం (కళ్యాణం)
                </div>
                <div className="text-lg font-bold font-brand text-[#4A0E17]">
                  {t.knotDate}
                </div>
                <div className="flex items-center gap-2 text-base font-extrabold text-[#8B0000]">
                  <FaClock className="text-[#D4AF37]" />
                  <span>{t.knotTime}</span>
                </div>
              </div>
            </div>

            {/* Countdown Display */}
            <div className="bg-[#4A0E17] text-white p-6 rounded-2xl shadow-inner">
              <div className="text-xs font-sans uppercase tracking-widest text-[#D4AF37] mb-3">
                కళ్యాణ సుముహూర్తానికి మిగిలిన సమయం
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <span className="block text-2xl sm:text-3xl font-bold font-brand text-[#FAF7F2]">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] uppercase text-[#D4AF37]">
                    {t.days}
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-bold font-brand text-[#FAF7F2]">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] uppercase text-[#D4AF37]">
                    {t.hours}
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-bold font-brand text-[#FAF7F2]">
                    {timeLeft.mins}
                  </span>
                  <span className="text-[10px] uppercase text-[#D4AF37]">
                    {t.mins}
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-bold font-brand text-[#FAF7F2]">
                    {timeLeft.secs}
                  </span>
                  <span className="text-[10px] uppercase text-[#D4AF37]">
                    {t.secs}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D0B12] text-[#FAF7F2] py-12 px-4 border-t border-[#D4AF37]/30 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold font-brand">{t.brand}</h3>
          <p className="text-sm font-wedding text-[#D4AF37]">{t.copyright}</p>

          <div className="flex justify-center gap-6 text-xs font-sans">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:underline opacity-80 hover:opacity-100"
            >
              {t.privacyPolicy}
            </button>
            <span>•</span>
            <button
              onClick={() => setShowContactModal(true)}
              className="hover:underline opacity-80 hover:opacity-100"
            >
              {t.contactUs}
            </button>
          </div>

          <div className="pt-4">
            <a
              href="#top"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#3D0B12] transition"
              title="Back to Top"
            >
              <FaChevronUp />
            </a>
          </div>
        </div>
      </footer>

      {/* Save The Date Countdown & Calendar Modal */}
      {showSaveDateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FAF7F2] w-full max-w-lg rounded-2xl shadow-2xl p-6 sm:p-8 border-2 border-[#D4AF37] relative text-center">
            <button
              onClick={() => setShowSaveDateModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#4A0E17]"
            >
              <FaTimes className="text-xl" />
            </button>

            <h3 className="text-2xl font-bold font-brand text-[#4A0E17] mb-2">
              {t.modalTitle}
            </h3>
            <p className="text-sm font-wedding text-[#5C121D] mb-6">
              Aug 22 & 23, 2026 • PGR Function Hall, Pamidi
            </p>

            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-3 mb-8">
              <div className="bg-white p-3 rounded-xl border border-[#E6C280]">
                <span className="block text-2xl font-bold font-brand text-[#4A0E17]">
                  {timeLeft.days}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-600">
                  {t.days}
                </span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E6C280]">
                <span className="block text-2xl font-bold font-brand text-[#4A0E17]">
                  {timeLeft.hours}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-600">
                  {t.hours}
                </span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E6C280]">
                <span className="block text-2xl font-bold font-brand text-[#4A0E17]">
                  {timeLeft.mins}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-600">
                  {t.mins}
                </span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#E6C280]">
                <span className="block text-2xl font-bold font-brand text-[#4A0E17]">
                  {timeLeft.secs}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-gray-600">
                  {t.secs}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#4A0E17] hover:bg-[#6b1422] text-white font-sans text-sm font-semibold py-3 rounded-xl shadow transition"
              >
                <FaCalendarAlt />
                <span>{t.addToCalendar}</span>
              </a>

              <button
                onClick={() => setShowSaveDateModal(false)}
                className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-sans text-sm font-medium py-2.5 rounded-xl transition"
              >
                {t.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#FAF7F2] w-full max-w-md rounded-2xl shadow-2xl p-6 border-2 border-[#D4AF37] relative text-center">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#4A0E17]"
            >
              <FaTimes className="text-xl" />
            </button>
            <h3 className="text-2xl font-bold font-brand text-[#4A0E17] mb-4">
              {t.contactUs}
            </h3>
            <p className="text-sm font-wedding text-gray-700 mb-6">
              For any queries or assistance regarding the venue or wedding
              arrangements, please contact us:
            </p>
            <div className="bg-white p-4 rounded-xl border border-[#E6C280] space-y-3 text-left">
              <div className="flex items-center gap-3 text-sm text-[#4A0E17]">
                <FaPhoneAlt />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4A0E17]">
                <FaEnvelope />
                <span>ganesh.deepika.wedding@gmail.com</span>
              </div>
            </div>
            <button
              onClick={() => setShowContactModal(false)}
              className="mt-6 w-full bg-[#4A0E17] text-white font-sans text-sm font-semibold py-2.5 rounded-xl"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#FAF7F2] w-full max-w-md rounded-2xl shadow-2xl p-6 border-2 border-[#D4AF37] relative text-center">
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#4A0E17]"
            >
              <FaTimes className="text-xl" />
            </button>
            <h3 className="text-2xl font-bold font-brand text-[#4A0E17] mb-4">
              {t.privacyPolicy}
            </h3>
            <p className="text-sm font-wedding text-gray-700 leading-relaxed">
              We respect your privacy. Any inquiries or messages sent regarding
              the Ganesh & Deepika wedding celebration are handled with care and
              confidentiality.
            </p>
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="mt-6 w-full bg-[#4A0E17] text-white font-sans text-sm font-semibold py-2.5 rounded-xl"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GaneshDeepikaWedding;
