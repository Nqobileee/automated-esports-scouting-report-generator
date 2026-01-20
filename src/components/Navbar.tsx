"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between glass-nav px-8 py-3 rounded-2xl border border-white/20 shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#ff6e00] p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined text-lg">analytics</span>
          </div>
          <span className="text-xl font-bold tracking-tight">Scoutly</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/reports"
            className="text-sm font-medium hover:text-[#ff6e00] transition-colors"
          >
            Reports
          </Link>
          <Link
            href="/trends"
            className="text-sm font-medium hover:text-[#ff6e00] transition-colors"
          >
            Trends
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-[#ff6e00] transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#ff6e00] text-white px-5 py-2 rounded-lg text-sm font-bold tracking-wide hover:glow-orange-strong transition-all">
            Trends
          </button>
        </div>
      </div>
    </nav>
  );
}
