"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDrawerOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDrawerOpen]);

  const navLinks = [
    { href: "/reports", label: "Reports" },
    { href: "/trends", label: "Trends" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center">
        <div className="max-w-7xl w-full flex items-center justify-between glass-nav px-8 py-3 rounded-2xl border border-white/20 shadow-sm">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-[#ff6e00] p-1.5 rounded-lg text-white">
              <span className="material-symbols-outlined text-lg">analytics</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Scoutly</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-[#ff6e00] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-[#ff6e00] text-white px-5 py-2 rounded-lg text-sm font-bold tracking-wide hover:glow-orange-strong transition-all">
              Trends
            </button>
            
            {/* Mobile hamburger menu button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 md:hidden ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsDrawerOpen(false)}
            >
              <div className="bg-[#ff6e00] p-1.5 rounded-lg text-white">
                <span className="material-symbols-outlined text-lg">analytics</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Scoutly</span>
            </Link>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className="flex items-center px-4 py-3 text-base font-medium rounded-xl hover:bg-gray-50 hover:text-[#ff6e00] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-gray-100">
            <Link
              href="/trends"
              onClick={() => setIsDrawerOpen(false)}
              className="block w-full bg-[#ff6e00] text-white px-5 py-3 rounded-xl text-center text-sm font-bold tracking-wide hover:glow-orange-strong transition-all"
            >
              Trends
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
