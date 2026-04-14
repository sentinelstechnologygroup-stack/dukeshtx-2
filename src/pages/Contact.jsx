import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Mail, Facebook } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#D4A853] text-xs uppercase tracking-[0.3em] mb-4">
            We'd Love to Hear From You
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold text-[#F5F0E8] mb-4">
            Get in Touch
          </h1>
          <div className="w-16 h-[1px] bg-[#D4A853] mx-auto mb-6" />
          <p className="text-[#8A8278] text-base max-w-lg mx-auto">
            Stop by, give us a call, or plan your next event with us.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              line1: "6303 FM 1960",
              line2: "Humble, Texas 77338",
              action: { label: "Get Directions", href: "https://www.google.com/maps/search/6303+FM+1960+Humble+TX+77338" },
            },
            {
              icon: Phone,
              title: "Call Us",
              line1: "(832) 644-1861",
              line2: "We're happy to help!",
              action: { label: "Call Now", href: "tel:8326441861" },
            },
            {
              icon: Clock,
              title: "Hours",
              line1: "Mon-Tue & Sun: 11AM – 12AM",
              line2: "Wed-Sat: 11AM – 2AM",
              action: null,
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-[#111] border border-white/5 text-center hover:border-[#D4A853]/20 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/10 flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-6 h-6 text-[#D4A853]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#F5F0E8] mb-2">
                {card.title}
              </h3>
              <p className="text-[#8A8278] text-sm">{card.line1}</p>
              <p className="text-[#8A8278] text-sm">{card.line2}</p>
              {card.action && (
                <a
                  href={card.action.href}
                  target={card.action.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 mt-4 text-[#D4A853] text-sm font-medium hover:underline"
                >
                  <Navigation className="w-3 h-3" /> {card.action.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.0!2d-95.27!3d29.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU4JzQ4LjAiTiA5NcKwMTYnMTIuMCJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3)" }}
              allowFullScreen=""
              loading="lazy"
              title="Dukes HTX Location"
            />
          </motion.div>
        </div>
      </section>

      {/* Full Hours */}
      <section className="px-6 pb-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#111] border border-white/5"
          >
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#F5F0E8] text-center mb-6">
              Full Hours
            </h3>
            <div className="space-y-3">
              {[
                { day: "Monday", hours: "11:00 AM – 12:00 AM" },
                { day: "Tuesday", hours: "11:00 AM – 12:00 AM" },
                { day: "Wednesday", hours: "11:00 AM – 2:00 AM" },
                { day: "Thursday", hours: "11:00 AM – 2:00 AM" },
                { day: "Friday", hours: "11:00 AM – 2:00 AM" },
                { day: "Saturday", hours: "11:00 AM – 2:00 AM" },
                { day: "Sunday", hours: "11:00 AM – 12:00 AM" },
              ].map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-[#8A8278] text-sm">{item.day}</span>
                  <span className="text-[#F5F0E8]/80 text-sm font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#D4A853]/20 text-center">
              <p className="text-[#D4A853] text-sm font-medium">
                Happy Hour Every Day until 7PM
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Party Banner */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-2xl bg-gradient-to-br from-[#D4A853]/10 to-[#D4A853]/5 border border-[#D4A853]/20 text-center"
          >
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#F5F0E8] mb-4">
              Book Your Next Event
            </h2>
            <p className="text-[#8A8278] text-base max-w-md mx-auto mb-8">
              Office parties, birthdays, celebrations — we're here to have fun! 
              Call us today to discuss your event.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8326441861"
                className="px-8 py-4 bg-[#D4A853] text-[#1A1A1A] font-semibold rounded-full hover:bg-[#E8C97A] transition-all duration-300 text-sm tracking-wide"
              >
                Call (832) 644-1861
              </a>
              <a
                href="https://www.facebook.com/DukesHTX"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#F5F0E8]/20 text-[#F5F0E8] font-medium rounded-full hover:border-[#D4A853] hover:text-[#D4A853] transition-all duration-300 text-sm tracking-wide flex items-center gap-2"
              >
                <Facebook className="w-4 h-4" /> Follow on Facebook
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}