// src/Layout.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" }
];

const linkClass = ({ isActive }) =>
  `px-5 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
    isActive
      ? "text-[#D4A853] bg-[#D4A853]/10"
      : "text-[#F5F0E8]/70 hover:text-[#D4A853] hover:bg-white/5"
  }`;

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-[#F5F0E8]">
      <div className="hidden md:block bg-[#111] border-b border-white/5 text-[#8A8278] text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a
              href="tel:8326441861"
              className="flex items-center gap-1.5 hover:text-[#D4A853] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4A853]" />
              (832) 644-1861
            </a>

            <a
              href="https://www.google.com/maps/search/6303+FM+1960+Humble+TX+77338"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#D4A853] transition-colors"
            >
              <MapPin className="w-3 h-3 text-[#D4A853]" />
              6303 FM 1960, Humble, TX 77338
            </a>
          </div>

          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-[#D4A853]" />
            Open Daily 11AM — Happy Hour till 7PM
          </span>
        </div>
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5"
            : "bg-[#1A1A1A]/88 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full border-2 border-[#D4A853] flex items-center justify-center bg-[#1A1A1A]">
              <span className="font-['Playfair_Display'] text-[#D4A853] text-lg font-bold">
                D
              </span>
            </div>

            <div>
              <div className="font-['Playfair_Display'] text-xl font-bold tracking-wide text-[#F5F0E8]">
                DUKES HTX
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-[#D4A853]">
                Booze · Brews · Kitchen
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="tel:8326441861"
              className="ml-4 px-6 py-2.5 bg-[#D4A853] text-[#1A1A1A] text-sm font-semibold rounded-full hover:bg-[#E8C97A] transition-all duration-300"
            >
              Call Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 text-[#F5F0E8]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/5 bg-[#111]/98 backdrop-blur-xl"
            >
              <div className="px-6 py-6 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? "text-[#D4A853] bg-[#D4A853]/10"
                          : "text-[#F5F0E8]/75 hover:text-[#D4A853] hover:bg-white/5"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <a
                  href="tel:8326441861"
                  className="block mt-4 text-center px-6 py-3 bg-[#D4A853] text-[#1A1A1A] font-semibold rounded-xl"
                >
                  Call (832) 644-1861
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>{children}</main>

      <footer className="bg-[#111] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#F5F0E8] mb-2">
                DUKES HTX
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] text-[#D4A853] mb-4">
                Booze · Brews · Kitchen
              </p>
              <p className="text-[#8A8278] text-sm leading-relaxed">
                Great drinks, Texas-style food, weekly specials, and a laid-back
                neighborhood atmosphere in Humble.
              </p>
            </div>

            <div>
              <h4 className="text-[#D4A853] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                Hours
              </h4>
              <div className="space-y-2 text-sm text-[#8A8278]">
                <div className="flex justify-between">
                  <span>Mon – Tue</span>
                  <span className="text-[#F5F0E8]/70">11AM – 12AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Wed – Sat</span>
                  <span className="text-[#F5F0E8]/70">11AM – 2AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#F5F0E8]/70">11AM – 12AM</span>
                </div>
                <div className="pt-2 text-[#D4A853]">Happy Hour daily until 7PM</div>
              </div>
            </div>

            <div>
              <h4 className="text-[#D4A853] text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-[#8A8278]">
                <p>6303 FM 1960, Humble, TX 77338</p>
                <a
                  href="tel:8326441861"
                  className="block hover:text-[#D4A853] transition-colors"
                >
                  (832) 644-1861
                </a>
                <a
                  href="https://www.facebook.com/DukesHTX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-[#D4A853] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-[#8A8278]/60">
            © {new Date().getFullYear()} Dukes HTX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}