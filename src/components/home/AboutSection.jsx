import React from "react";
import { motion } from "framer-motion";
import { Beer, UtensilsCrossed, Music, Tv } from "lucide-react";

const features = [
  {
    icon: Beer,
    title: "Craft Drinks",
    desc: "Cold beers on tap and handcrafted cocktails made with care.",
  },
  {
    icon: UtensilsCrossed,
    title: "Texas Kitchen",
    desc: "Fresh Texas-style food made daily — steaks, crawfish & more.",
  },
  {
    icon: Music,
    title: "Live Events",
    desc: "Karaoke nights, live music, and celebrations every week.",
  },
  {
    icon: Tv,
    title: "Live Sports",
    desc: "Big screens, cold drinks, and every game that matters.",
  },
];

export default function AboutSection({ foodImage }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4A853] text-xs uppercase tracking-[0.3em] mb-4">
              Welcome to Dukes
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
              Where Humble <br />
              <span className="text-[#D4A853] italic">Comes to Play</span>
            </h2>
            <p className="text-[#8A8278] text-base leading-relaxed mb-8">
              Dukes HTX is the prime entertainment and meeting spot in Humble, TX. 
              Our guests enjoy their favorite drinks alongside Texas-style food made 
              fresh every day. We're the best neighborhood bar and Texas inspired 
              kitchen. Whether it's a casual weeknight or a big celebration — 
              come join the fun.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <f.icon className="w-5 h-5 text-[#D4A853] mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-[#F5F0E8] font-semibold text-sm mb-1">{f.title}</h4>
                  <p className="text-[#8A8278] text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={foodImage}
                alt="Texas food spread at Dukes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#D4A853]/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D4A853]/5 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}