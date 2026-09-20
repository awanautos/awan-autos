"use client";

import { useState } from "react";

const services = [
  ["01", "Petrol", "Quality fuel for everyday journeys.", "/images/services/01-petrol.png"],
  ["02", "Diesel", "Reliable fuel for every journey.", "/images/services/02-diesel.jpg"],
  ["03", "Engine Oil & Lubricants", "Trusted care for smoother engine performance.", "/images/services/03-engine-oil-lubricants.png"],
  ["04", "Car Wash", "Professional care for a cleaner vehicle.", "/images/pump/pump-car-wash.png"],
  ["05", "Oil Change", "Oil check and change for dependable engine care.", "/images/services/oil-change.png"],
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="group">
            <div className="text-lg font-black tracking-[0.18em]">
              AWAN <span className="text-[#fbcf24]">AUTOS</span>
            </div>
            <div className="mt-0.5 text-[9px] uppercase tracking-[0.25em] text-white/45">
              Shell Pakistan Limited Dealers
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-white/70 transition hover:text-[#fbcf24]"
              >
                {label}
              </a>
            ))}
            <a
              href="tel:03337844515"
              className="rounded-full bg-[#fbcf24] px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5"
            >
              Call Now
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-white/10 px-3 py-2 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-0.5 w-5 bg-white" />
            <span className="my-1.5 block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black/95 px-5 py-5 md:hidden">
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

      <section id="home" className="relative flex min-h-screen items-center px-5 pt-28 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_42%,rgba(251,207,36,.14),transparent_25%),radial-gradient(circle_at_20%_70%,rgba(255,255,255,.05),transparent_28%)]" />

        <div className="absolute right-[-8%] top-1/2 w-[680px] max-w-[85vw] -translate-y-1/2 animate-[float_7s_ease-in-out_infinite] opacity-[.18] md:w-[760px]">
          <img
            src="/images/shell-pecten.png"
            alt=""
            aria-hidden="true"
            className="w-full drop-shadow-[0_25px_70px_rgba(251,207,36,.25)] [transform:perspective(900px)_rotateY(-12deg)_rotateX(5deg)]"
          />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-[#fbcf24]/20 bg-[#fbcf24]/5 px-4 py-2 text-xs font-semibold uppercase tracking-[.2em] text-[#fbcf24]">
              Dealers • Shell Pakistan Limited
            </div>

            <h1 className="text-5xl font-black leading-[.92] tracking-[-.05em] sm:text-7xl lg:text-[92px]">
              AWAN
              <span className="block text-[#fbcf24]">AUTOS</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 sm:text-xl">
              Quantity and Quality Assured.
              <span className="mt-2 block text-sm text-white/40">
                Fuel, vehicle care and trusted automotive essentials at one destination.
              </span>
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                className="rounded-full bg-[#fbcf24] px-8 py-4 text-center font-bold text-black transition hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(251,207,36,.18)]"
              >
                Explore Services
              </a>
              <a
                href="https://wa.me/923337844515"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/[.04] px-8 py-4 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white/[.08]"
              >
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                <div className="text-xl font-black text-[#fbcf24]">5+</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/40">Core Services</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                <div className="text-xl font-black text-[#fbcf24]">18h</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/40">Open Daily</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[.035] p-4">
                <div className="text-xl font-black text-[#fbcf24]">24/7</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/40">On Your Mind</div>
              </div>
            </div>
          </div>

          </div>
      </section>

      <section id="services" className="relative border-t border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[.3em] text-[#fbcf24]">
              What We Offer
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Essential services.
              <span className="block text-white/35">Done properly.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map(([number, title, text, image]) => (
              <div
                key={number}
                className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/[.07] to-white/[.025] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#fbcf24]/30"
              >
                <img
                  src={image}
                  alt={title}
                  className="mb-6 h-52 w-full rounded-2xl object-cover"
                />
                <div className="text-sm font-black text-[#fbcf24]">{number}</div>
                <h3 className="mt-12 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
                <div className="mt-7 h-px w-10 bg-[#fbcf24]/50 transition-all group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative border-t border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-[.3em] text-[#fbcf24]">
              About Awan Autos
            </div>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              A trusted stop for
              <span className="block text-[#fbcf24]">your journey.</span>
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[.035] p-7 sm:p-9">
            <p className="text-base leading-8 text-white/60">
              Awan Autos, Dealers of Shell Pakistan Limited, provides quality fuel
              and essential vehicle care services with a simple promise:
              <span className="font-semibold text-white"> Quantity and Quality Assured.</span>
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/[.04] p-5">
                <div className="text-xs uppercase tracking-[.2em] text-white/35">Location</div>
                <div className="mt-2 font-semibold">Shara-e-Zarghoon</div>
              </div>
              <div className="rounded-2xl bg-white/[.04] p-5">
                <div className="text-xs uppercase tracking-[.2em] text-white/35">Hours</div>
                <div className="mt-2 font-semibold">6:00 AM – 12:00 AM</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="gallery" className="border-t border-white/5 bg-[#0b0b0b] px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[.3em] text-[#fbcf24]">OUR STATION</p>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Experience AWAN AUTOS.</h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["/images/pump/pump-office.png", "Awan Autos", "Our location and business frontage."],
              ["/images/pump/pump-canopy.png", "Fuel Station", "Our main fueling area."],
              ["/images/pump/pump-sign.png", "Shell Station", "Our station signage."],
              ["/images/pump/pump-car-wash.png", "Car Wash", "Vehicle care at Awan Autos."],
              ["/images/pump/pump-fuel-dispenser.png", "Fuel Dispensers", "Petrol and diesel fueling area."],
            ].map(([image, title, text]) => (
              <div key={title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04]">
                <div className="overflow-hidden">
                  <img src={image} alt={title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="text-lg font-bold">{title}</div>
                  <div className="mt-1 text-sm text-white/40">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="border-t border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[.06] to-transparent p-7 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="text-xs font-bold uppercase tracking-[.3em] text-[#fbcf24]">
                  Find Us
                </div>
                <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                  Shara-e-Zarghoon
                </h2>
                <p className="mt-4 text-white/50">
                  Open daily from <span className="text-white">6:00 AM to 12:00 AM</span>.
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shara-e-Zarghoon"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#fbcf24] px-8 py-4 text-center font-bold text-black"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3">
            <a
              href="tel:03337844515"
              className="rounded-3xl border border-white/10 bg-white/[.04] p-7 transition hover:-translate-y-1 hover:border-[#fbcf24]/30"
            >
              <div className="text-xs uppercase tracking-[.25em] text-white/35">Mobile</div>
              <div className="mt-4 text-2xl font-black">03337844515</div>
              <div className="mt-2 text-sm text-[#fbcf24]">Call Now →</div>
            </a>

            <div className="rounded-3xl border border-white/10 bg-white/[.04] p-7">
              <div className="text-xs uppercase tracking-[.25em] text-white/35">Landline</div>
              <div className="mt-4 text-2xl font-black">2843057</div>
              <div className="mt-1 text-2xl font-black">2843087</div>
            </div>

            <a
              href="https://wa.me/923337844515"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-[#fbcf24]/20 bg-[#fbcf24]/5 p-7 transition hover:-translate-y-1"
            >
              <div className="text-xs uppercase tracking-[.25em] text-[#fbcf24]/60">WhatsApp</div>
              <div className="mt-4 text-2xl font-black">03337844515</div>
              <div className="mt-2 text-sm text-[#fbcf24]">Message Us →</div>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center sm:px-8">
        <div className="text-lg font-black tracking-[.15em]">
          AWAN <span className="text-[#fbcf24]">AUTOS</span>
        </div>
        <div className="mt-2 text-xs text-white/35">
          Dealers: Shell Pakistan Limited
        </div>
        <div className="mt-5 text-xs text-white/25">
          © {new Date().getFullYear()} Awan Autos. Quantity and Quality Assured.
        </div>
      </footer>
    </main>
  );
}
