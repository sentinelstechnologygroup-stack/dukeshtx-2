import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="py-24 px-6 bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#D4A853] text-xs uppercase tracking-[0.3em] mb-4">
            Come Visit Us
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#F5F0E8]">
            Find Us in Humble
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-video lg:aspect-auto lg:h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/5"
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

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#D4A853]/10">
                  <MapPin className="w-5 h-5 text-[#D4A853]" />
                </div>
                <div>
                  <h4 className="text-[#F5F0E8] font-semibold mb-1">Address</h4>
                  <p className="text-[#8A8278] text-sm">6303 FM 1960, Humble, Texas 77338</p>
                  <a
                    href="https://www.google.com/maps/search/6303+FM+1960+Humble+TX+77338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-[#D4A853] text-xs font-medium hover:underline"
                  >
                    <Navigation className="w-3 h-3" /> Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#D4A853]/10">
                  <Phone className="w-5 h-5 text-[#D4A853]" />
                </div>
                <div>
                  <h4 className="text-[#F5F0E8] font-semibold mb-1">Phone</h4>
                  <a href="tel:8326441861" className="text-[#8A8278] text-sm hover:text-[#D4A853] transition-colors">
                    (832) 644-1861
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/5">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#D4A853]/10">
                  <Clock className="w-5 h-5 text-[#D4A853]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[#F5F0E8] font-semibold mb-3">Hours</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { day: "Monday", hours: "11:00 AM – 12:00 AM" },
                      { day: "Tuesday", hours: "11:00 AM – 12:00 AM" },
                      { day: "Wednesday", hours: "11:00 AM – 2:00 AM" },
                      { day: "Thursday", hours: "11:00 AM – 2:00 AM" },
                      { day: "Friday", hours: "11:00 AM – 2:00 AM" },
                      { day: "Saturday", hours: "11:00 AM – 2:00 AM" },
                      { day: "Sunday", hours: "11:00 AM – 12:00 AM" },
                    ].map((item) => (
                      <div key={item.day} className="flex justify-between">
                        <span className="text-[#8A8278]">{item.day}</span>
                        <span className="text-[#F5F0E8]/70">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}