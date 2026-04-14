import React from "react";
import { motion } from "framer-motion";

export default function MenuCategory({ title, items, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="p-8 rounded-2xl bg-[#111] border border-white/5"
    >
      <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#D4A853] mb-6 pb-4 border-b border-[#D4A853]/20">
        {title}
      </h3>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={i} className="group">
            <div className="flex justify-between items-baseline gap-4">
              <h4 className="text-[#F5F0E8] font-medium text-sm group-hover:text-[#D4A853] transition-colors">
                {item.name}
              </h4>
              <div className="flex-1 border-b border-dotted border-[#8A8278]/20 min-w-[40px] translate-y-[-4px]" />
              {item.price && (
                <span className="text-[#D4A853] font-semibold text-sm whitespace-nowrap">
                  {item.price}
                </span>
              )}
            </div>
            {item.desc && (
              <p className="text-[#8A8278] text-xs mt-1 leading-relaxed">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}