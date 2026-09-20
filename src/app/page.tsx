"use client";

import { useState } from "react";
import { motion } from "motion/react";

const ASSET = (path: string) =>
  process.env.NODE_ENV === "production" ? `/awan-autos${path}` : path;

const services = [
  ["01", "Petrol", "Quality fuel for everyday journeys.", ASSET("/images/services/01-petrol.png")],
  ["02", "Diesel", "Reliable fuel for every journey.", ASSET("/images/services/02-diesel.jpg")],
  ["03", "Engine Oil & Lubricants", "Trusted care for smoother engine performance.", ASSET("/images/services/03-engine-oil-lubricants.png")],
  ["04", "Car Wash", "Professional care for a cleaner vehicle.", ASSET("/images/pump/pump-car-wash.png")],
  ["05", "Oil Change", "Oil check and change for dependable engine care.", ASSET("/images/services/oil-change.png")],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = [
    ["Home", "#home"],
    ["Services", "#services"],
    ["About", "#about"],
    ["Location", "#location"],
    ["Contact", "#contact"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur-xl">
        <div className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
          <a href="#home" className="group">
            <div className="text-base font-black tracking-[0.16em] sm:text-lg sm:tracking-[0.18em]">
              AWAN <span className="text-[#fbcf24]">AUTOS</span>
            </div>
            <div className="mt-1 hidden w-fit rounded-full border border-[#fbcf24]/20 bg-[#fbcf24]/5 px-3 py-1 text-[8px] font-semibold uppercase tracking-[.12em] leading-none text-[#fbcf24] sm:block">
              Dealers • Shell Pakistan Limited
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[13px] font-semibold tracking-[.025em] text-white/65 transition duration-300 hover:-translate-y-0.5 hover:text-[#fbcf24]"
              >
                {label}
              </a>
            ))}
            <a
              href="tel:03337844515"
              className="rounded-full bg-[#fbcf24] px-5 py-2.5 text-[13px] font-extrabold tracking-[.02em] text-black shadow-[0_8px_25px_rgba(251,207,36,.10)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(251,207,36,.18)]"
            >
              Call Now
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 bg-white/[.03] px-3 py-2.5 transition hover:border-white/20 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="my-1.5 block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-5 py-6 shadow-2xl md:hidden">
            <div className="flex flex-col gap-4">
              {nav.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-white/80"
                >
                  {label}
                </a>
              ))}
              <a
                href="tel:03337844515"
                className="mt-1 rounded-xl bg-[#fbcf24] px-5 py-3 text-center font-bold text-black"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      <section id="home" className="scroll-mt-24 relative flex min-h-[620px] items-center px-5 pb-12 pt-24 sm:min-h-[680px] sm:px-8 sm:pb-14 lg:min-h-[680px] lg:pt-24 lg:pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_42%,rgba(251,207,36,.14),transparent_25%),radial-gradient(circle_at_20%_70%,rgba(255,255,255,.05),transparent_28%)]" />

        <div className="pointer-events-none absolute right-14 top-[68%] w-[320px] max-w-[50vw] -translate-y-1/2 opacity-[.13] sm:right-10 sm:w-[360px] sm:max-w-[36vw] sm:opacity-[.15] lg:right-16 lg:w-[440px] lg:max-w-[32vw] lg:opacity-[.17]">
          <div className="animate-[float_7s_ease-in-out_infinite]">

          <img
            src={ASSET("/images/shell-pecten.png")}
            alt=""
            aria-hidden="true"
            className="w-full drop-shadow-[0_25px_70px_rgba(251,207,36,.25)] [transform:none]"
          />
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-[clamp(3.4rem,15vw,5rem)] font-black leading-[.88] tracking-[-.02em] sm:text-7xl lg:text-[92px]">
              AWAN
              <span className="block text-[#fbcf24]">AUTOS</span>
            </h1>

            <div className="mt-4 inline-flex rounded-full border border-[#fbcf24]/20 bg-[#fbcf24]/5 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[.16em] text-[#fbcf24] sm:mt-5 sm:px-4 sm:text-xs sm:tracking-[.2em]">
              Dealers • Shell Pakistan Limited
            </div>

            <p className="mt-6 max-w-xl text-[15px] font-medium leading-8 tracking-[.015em] text-white/60 sm:mt-7 sm:text-xl sm:leading-8">
              Quantity and Quality Assured.
              <span className="mt-2 block text-[14px] font-medium tracking-[.02em] text-white/45">
                Fuel, vehicle care and trusted automotive essentials at one destination.
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href="#services"
                className="group rounded-full bg-[#fbcf24] px-8 py-4 text-center text-sm font-extrabold tracking-[.02em] text-black shadow-[0_12px_35px_rgba(251,207,36,.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(251,207,36,.22)]"
              >
                Explore Services
              </a>
              <a
                href="https://wa.me/923337844515"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/[.04] px-8 py-4 text-center text-sm font-bold tracking-[.02em] text-white backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[.08]"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-2.5 sm:mt-10 sm:gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-3.5 sm:p-4">
                <div className="text-2xl font-black tracking-[-.025em] text-[#fbcf24]">5+</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[.14em] text-white/45">Core Services</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-3.5 sm:p-4">
                <div className="text-2xl font-black tracking-[-.025em] text-[#fbcf24]">18h</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[.14em] text-white/45">Open Daily</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-3.5 sm:p-4">
                <div className="text-2xl font-black tracking-[-.025em] text-[#fbcf24]">24/7</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[.14em] text-white/45">On Your Mind</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 relative border-t border-white/10 px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[.3em] text-[#fbcf24]">
              What We Offer
            </div>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.02em] sm:text-6xl lg:text-[64px]">
              Essential services.
              <span className="block text-white/35">Done properly.</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(([number, title, text, image]) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: Number(number) * 0.08 }}
                className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[.07] to-white/[.025] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#fbcf24]/30"
              >
                <img
                  src={image}
                  alt={title}
                  className="mb-5 h-48 w-full rounded-2xl object-cover sm:h-52"
                />
                <div className="text-sm font-black text-[#fbcf24]">{number}</div>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 tracking-[.01em] text-white/50">{text}</p>
                <div className="mt-6 h-px w-10 bg-[#fbcf24]/50 transition-all duration-300 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 relative border-t border-white/10 px-5 py-20 sm:px-8 lg:py-24">
        <motion.div
          className="mx-auto grid max-w-7xl gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[.3em] text-[#fbcf24]">
              About Awan Autos
            </div>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-.02em] sm:text-6xl lg:text-[64px]">
              A trusted stop for
              <span className="block text-[#fbcf24]">your journey.</span>
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[.035] p-6 sm:p-9">
            <p className="max-w-2xl text-[15px] font-medium leading-8 tracking-[.015em] text-white/60 sm:text-lg">
              Awan Autos, Dealers of Shell Pakistan Limited, provides quality fuel
              and essential vehicle care services with a simple promise:
              <span className="font-semibold text-white"> Quantity and Quality Assured.</span>
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/[.04] p-5">
                <div className="text-[10px] font-bold uppercase tracking-[.24em] text-[#fbcf24]/75">Location</div>
                <div className="mt-2 text-lg font-bold tracking-[-.01em]">Shara-e-Zarghoon</div>
              </div>
              <div className="rounded-2xl bg-white/[.04] p-5">
                <div className="text-[10px] font-bold uppercase tracking-[.24em] text-[#fbcf24]/75">Hours</div>
                <div className="mt-2 text-lg font-bold tracking-[-.01em]">6:00 AM – 12:00 AM</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>


      <section id="gallery" className="scroll-mt-24 border-t border-white/5 bg-[#0b0b0b] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[.28em] text-[#fbcf24]">OUR STATION</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Experience AWAN AUTOS.</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [ASSET("/images/pump/pump-office.png"), "Awan Autos", "Our location and business frontage."],
              [ASSET("/images/pump/pump-canopy.png"), "Fuel Station", "Our main fueling area."],
              [ASSET("/images/pump/pump-sign.png"), "Shell Station", "Our station signage."],
              [ASSET("/images/pump/pump-car-wash.png"), "Car Wash", "Vehicle care at Awan Autos."],
              [ASSET("/images/pump/pump-fuel-dispenser.png"), "Fuel Dispensers", "Petrol and diesel fueling area."],
            ].map(([image, title, text]) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04]"
              >
                <div className="overflow-hidden">
                  <img src={image} alt={title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="text-lg font-bold">{title}</div>
                  <div className="mt-1 text-[14px] font-medium tracking-[.02em] text-white/45">{text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="scroll-mt-24 border-t border-white/10 px-5 py-24 sm:px-8">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[.07] via-white/[.03] to-transparent">
            <div className="grid lg:grid-cols-[1.3fr_.7fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="text-xs font-bold uppercase tracking-[.3em] text-[#fbcf24]">
                  Visit Awan Autos
                </div>
                <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-.025em] sm:text-6xl lg:text-[62px]">
                  Shara-e-Zarghoon, Quetta
                </h2>
                <p className="mt-5 max-w-2xl text-[15px] font-medium leading-8 tracking-[.015em] text-white/55 sm:text-lg">
                  Find AWAN AUTOS on Shara-e-Zarghoon in Quetta. Quality fuel,
                  trusted service and convenient hours for your everyday journey.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="text-[10px] font-bold uppercase tracking-[.24em] text-[#fbcf24]/75">Location</div>
                    <div className="mt-2 font-bold text-white">Shara-e-Zarghoon</div>
                    <div className="mt-1 text-[14px] font-medium tracking-[.02em] text-white/50">Quetta, Balochistan</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="text-[10px] font-bold uppercase tracking-[.24em] text-[#fbcf24]/75">Open Daily</div>
                    <div className="mt-2 font-bold text-white">6:00 AM – 12:00 AM</div>
                    <div className="mt-1 text-[14px] font-medium tracking-[.02em] text-white/50">Every day</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center border-t border-white/10 bg-[#fbcf24] p-7 lg:border-l lg:border-t-0 lg:p-10">
                <div className="w-full">
                  <div className="text-sm font-bold uppercase tracking-[.2em] text-black/55">
                    Get There
                  </div>
                  <div className="mt-3 text-3xl font-black text-black">
                    AWAN AUTOS
                  </div>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Open the map for directions to our station in Quetta.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/euEPTpm6hH3jXEM49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 block rounded-full bg-black px-7 py-4 text-center font-bold text-white transition hover:scale-[1.02]"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/10 px-5 py-20 sm:px-8 lg:py-24">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
            <a
              href="tel:03337844515"
              className="rounded-3xl border border-white/10 bg-white/[.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#fbcf24]/30 sm:p-7"
            >
              <div className="text-[10px] font-bold uppercase tracking-[.24em] text-[#fbcf24]/75">Mobile</div>
              <div className="mt-4 text-2xl font-black tracking-[-.02em] sm:text-3xl">03337844515</div>
              <div className="mt-3 inline-flex text-[13px] font-bold tracking-[.08em] text-[#fbcf24] transition hover:tracking-[.12em]">Call Now →</div>
            </a>

            <div className="rounded-3xl border border-white/10 bg-white/[.04] p-6 sm:p-7">
              <div className="text-[10px] font-bold uppercase tracking-[.24em] text-[#fbcf24]/75">Landline</div>
              <div className="mt-4 text-2xl font-black tracking-[-.02em] sm:text-3xl">2843057</div>
              <div className="mt-1 text-2xl font-black tracking-[-.02em] sm:text-3xl">2843087</div>
            </div>

            <a
              href="https://wa.me/923337844515"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[#fbcf24]/20 bg-[#fbcf24]/5 p-7 transition hover:-translate-y-1"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[.2em] text-[#fbcf24]/75">WhatsApp</div>
              <div className="mt-4 text-2xl font-black tracking-[-.02em] sm:text-3xl">03337844515</div>
              <div className="mt-3 inline-flex text-[13px] font-bold tracking-[.08em] text-[#fbcf24] transition hover:tracking-[.12em]">Message Us →</div>
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/[.08] bg-white/[.015] px-5 py-12 sm:px-8">
        <div className="text-xl font-black tracking-[.12em]">
          AWAN <span className="text-[#fbcf24]">AUTOS</span>
        </div>
        <div className="mt-2 text-[13px] font-medium tracking-[.025em] text-white/40">
          Fuel • Auto Care • Trusted Service
        </div>
        <div className="mt-2 text-[10px] font-bold uppercase tracking-[.25em] text-[#fbcf24]/75">
          Dealers: Shell Pakistan Limited
        </div>
        <div className="mt-5 text-[12px] font-medium tracking-[.03em] text-white/35">
          © {new Date().getFullYear()} Awan Autos. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
