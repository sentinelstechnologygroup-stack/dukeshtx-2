// src/lib/PageNotFound.jsx
import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.replace(/^\//, "") || "this page";

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#FAFAF5] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center border border-white/10 rounded-2xl bg-[#1A1A1A] p-10 md:p-14 shadow-2xl shadow-black/30">
        <p className="text-[#D4A04A] text-xs uppercase tracking-[0.3em] mb-4">
          404
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-white/60 leading-relaxed mb-8">
          The page <span className="text-white">“{pageName}”</span> does not
          exist in this site build.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#D4A04A] text-[#0F0F0F] text-sm font-semibold hover:bg-[#e0b05c] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}