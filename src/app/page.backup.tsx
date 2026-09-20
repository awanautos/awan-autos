"use client";

import { useState } from "react";

const businessInfo = {
  address: "Shara-e-Zarghoon",
  mobile: "03337844515",
  phone1: "2843057",
  phone2: "2843087",
  hours: "6:00 AM – 12:00 AM",
};

const mainServices = [
  "Petrol",
  "Diesel",
  "Engine Oil & Lubricants",
  "Car Wash",
  "Oil Change",
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Fuel", "#services"],
    ["About", "#about"],
    ["Gallery", "#gallery"],
    ["Location", "#location"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="text-xl font-black tracking-tight">
            AWAN <span className="text-[#fbcf24]">AUTOS</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map(([name, href]) => (
              <a key={name} href={href} className="text-sm text-white/65 transition hover:text-[#fbcf24]">
                {name}
              </a>
            ))}
          </nav>

          <a href="tel:03337844515" className="hidden rounded-full bg-[#fbcf24] px-5 py-2.5 text-sm font-bold text-black md:block">
            Call Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/10 px-3 py-2 text-xl md:hidden"
            aria-label="Menu"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {open && (
          <nav className="border-t border-white/10 bg-black/90 px-6 py-5 backdrop-blur-2xl md:hidden">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-4 text-white/75"
              >
                {name}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(255,190,0,.16),transparent_28%),radial-gradient(circle_at_15%_80%,rgba(222,36,33,.12),transparent_30%),linear-gradient(135deg,#090909_0%,#111_45%,#050505_100%)]" />

        <div className="absolute -right-40 top-1/2 h-[620px] w-[620px] -translate-y-1/2 rounded-full border border-white/5 shadow-[0_0_120px_rgba(255,190,0,.08)]" />

        <div className="absolute right-[-8%] top-1/2 w-[680px] max-w-[85vw] -translate-y-1/2 animate-[float_7s_ease-in-out_infinite] opacity-[.18] md:w-[760px]">
          <img
            src="/images/shell-pecten.png"
            alt=""
            aria-hidden="true"
            className="w-full drop-shadow-[0_25px_70px_rgba(251,207,36,.25)] [transform:perspective(900px)_rotateY(-12deg)_rotateX(5deg)]"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="max-w-3xl animate-[fadeUp_1s_ease-out]">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#fbcf24]" />
              <span className="text-xs uppercase tracking-[.25em] text-white/60">
                Dealers: Shell Pakistan Limited
              </span>
            </div>

            <h1 className="text-6xl font-black leading-[.9] tracking-[-.055em] sm:text-7xl md:text-8xl lg:text-[9.5rem]">
              AWAN
              <span className="block text-white/90">AUTOS</span>
            </h1>

            <p className="mt-7 text-lg font-semibold tracking-[.12em] text-[#fbcf24] sm:text-xl">
              Quantity and Quality Assured
            </p>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/55 sm:text-lg">
              Quality fuel, automotive products and dependable service — built around your journey.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#services" className="rounded-full bg-[#fbcf24] px-7 py-3.5 font-bold text-black transition duration-300 hover:-translate-y-1">
                Explore Services
              </a>
              <a href="#contact" className="rounded-full border border-white/15 bg-white/[.04] px-7 py-3.5 font-semibold backdrop-blur-xl transition duration-300 hover:-translate-y-1">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-white/5 bg-[#0b0b0b] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[.3em] text-[#fbcf24]">OUR FUELS</p>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">Fuel your journey with confidence.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              ["01", "Petrol", "Quality fuel for everyday journeys."],
              ["02", "Diesel", "Reliable fuel for cars, SUVs and commercial vehicles."],
              ["03", "Engine Oil & Lubricants", "Trusted lubrication for smoother vehicle performance."],
              ["04", "Car Wash", "Professional care to keep your vehicle looking fresh."],
              ["05", "Oil Change", "Oil check and change for dependable engine care."],
            ].map(([tag, title, text, bottom]) => (
              <div key={title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04] p-8 shadow-2xl transition duration-500 hover:-translate-y-2 hover:border-[#fbcf24]/30">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#fbcf24]/10 blur-3xl transition duration-500 group-hover:scale-150" />
                <p className="text-sm uppercase tracking-[.25em] text-white/40">{tag}</p>
                <h3 className="mt-3 text-4xl font-black">{title}</h3>
                <p className="mt-4 max-w-md leading-7 text-white/50">{text}</p>
                <div className="mt-8 h-px bg-white/10" />
                <p className="mt-5 text-sm font-semibold text-[#fbcf24]">{bottom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/5 bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[.3em] text-[#fbcf24]">ABOUT US</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Built around trust.</h2>
            <p className="mt-6 max-w-xl leading-8 text-white/50">
              AWAN AUTOS is focused on delivering dependable fuel, quality automotive products and a professional customer experience every time you visit.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["⛽", "Quality Fuel"],
              ["⚙️", "Auto Care"],
              ["✓", "Trusted"],
            ].map(([icon, title]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[.04] p-6 backdrop-blur-xl">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/40">Quantity and Quality Assured.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="border-t border-white/5 bg-[#0b0b0b] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[.3em] text-[#fbcf24]">OUR STATION</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Experience AWAN AUTOS.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Fuel Station", "Quality Service", "On The Road"].map((item) => (
              <div key={item} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04] p-5">
                <div className="flex h-64 items-end rounded-[1.5rem] bg-gradient-to-br from-[#fbcf24]/15 via-white/[.03] to-[#de2421]/10 p-6 transition duration-500 group-hover:scale-[1.02]">
                  <span className="text-xl font-bold">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="border-t border-white/5 bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[.3em] text-[#fbcf24]">FIND US</p>
            <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Your journey starts here.</h2>
            <p className="mt-6 max-w-lg leading-7 text-white/45">
              Visit AWAN AUTOS for quality fuel and a dependable customer experience.
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=Shara-e-Zarghoon" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#fbcf24] px-7 py-3.5 font-bold text-black transition hover:-translate-y-1">
              Get Directions
            </a>
          </div>
          <div className="flex min-h-[330px] items-center justify-center rounded-[2rem] border border-white/10 bg-white/[.035] shadow-2xl">
            <span className="text-sm uppercase tracking-[.25em] text-white/25">OUR LOCATION</span>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/5 bg-[#080808] px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[.3em] text-[#fbcf24]">GET IN TOUCH</p>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">We’re here for your journey.</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="tel:03337844515" className="rounded-full bg-[#fbcf24] px-8 py-3.5 font-bold text-black">Call Now</a>
          <a href="https://wa.me/923337844515" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/[.04] px-8 py-3.5 font-semibold">WhatsApp</a>
        </div>
        <p className="mt-10 text-sm text-white/35">AWAN AUTOS • Dealers: Shell Pakistan Limited</p>
      </section>
    </main>
  );
}
