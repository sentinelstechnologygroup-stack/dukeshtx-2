import React from "react";
import { motion } from "framer-motion";
import { Clock, PartyPopper } from "lucide-react";

export default function HappyHourBanner() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4A853]/5 via-[#D4A853]/10 to-[#D4A853]/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A853]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#D4A853]/40" />
            <Clock className="w-5 h-5 text-[#D4A853]" />
            <div className="w-12 h-[1px] bg-[#D4A853]/40" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-[#F5F0E8] mb-4">
            Happy Hour
          </h2>
          <p className="text-[#D4A853] text-2xl md:text-3xl font-['Playfair_Display'] italic mb-3">
            7 Days a Week until 7PM
          </p>
          <p className="text-[#8A8278] text-base max-w-md mx-auto mb-8">
            Unbeatable drink specials every single day. Swing by after work 
            or start your weekend early.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#D4A853] text-sm">
            <PartyPopper className="w-4 h-4" />
            <span>Plan your next party with us — office, birthday, or any occasion!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}