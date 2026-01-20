"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        {/* Page Header */}
        <section className="space-y-4 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
            Get in <span className="text-[#ff6e00]">Touch</span>
          </h1>
          <p className="text-lg text-gray-600">
            Have questions about our scouting technology? Want to partner with us?
            We&apos;d love to hear from you. Our team typically responds within 24
            hours.
          </p>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <section className="lg:col-span-2 bento-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#ff6e00] focus:border-transparent text-gray-900"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#ff6e00] focus:border-transparent text-gray-900"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#ff6e00] focus:border-transparent text-gray-900"
                  required
                >
                  <option value="">Select a topic...</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="api">API Access</option>
                  <option value="enterprise">Enterprise Solutions</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#ff6e00] focus:border-transparent text-gray-900 resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff6e00] text-white px-8 py-4 rounded-xl font-bold hover:glow-orange-strong transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </section>

          {/* Contact Info Sidebar */}
          <section className="space-y-6">
            <div className="bento-card p-6 rounded-3xl">
              <div className="bg-[#ff6e00]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#ff6e00] text-2xl">
                  mail
                </span>
              </div>
              <h3 className="font-bold text-lg">Email Us</h3>
              <p className="text-gray-500 text-sm mt-1">
                For general inquiries and support
              </p>
              <a
                href="mailto:nqobilemuyambiri@gmail.com"
                className="text-[#ff6e00] font-medium mt-3 block hover:underline"
              >
                nqobilemuyambiri@gmail.com
              </a>
            </div>

            <div className="bento-card p-6 rounded-3xl">
              <div className="bg-[#ff6e00]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#ff6e00] text-2xl">
                  code
                </span>
              </div>
              <h3 className="font-bold text-lg">GitHub</h3>
              <p className="text-gray-500 text-sm mt-1">
                Check out my projects and contributions
              </p>
              <a
                href="https://github.com/Nqobileee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff6e00] font-medium mt-3 block hover:underline"
              >
                @Nqobileee →
              </a>
            </div>

            <div className="bento-card p-6 rounded-3xl">
              <div className="bg-[#ff6e00]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#ff6e00] text-2xl">
                  schedule
                </span>
              </div>
              <h3 className="font-bold text-lg">Response Time</h3>
              <p className="text-gray-500 text-sm mt-1">
                We aim to respond to all inquiries
              </p>
              <p className="text-[#ff6e00] font-bold mt-3">Within 24 hours</p>
            </div>

            <div className="bento-card p-6 rounded-3xl">
              <div className="bg-[#ff6e00]/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[#ff6e00] text-2xl">
                  link
                </span>
              </div>
              <h3 className="font-bold text-lg">LinkedIn</h3>
              <p className="text-gray-500 text-sm mt-1">
                Connect with me professionally
              </p>
              <a
                href="https://www.linkedin.com/in/nqobile-muyambiri-423522236"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff6e00] font-medium mt-3 block hover:underline"
              >
                Nqobile Muyambiri →
              </a>
            </div>

            <div className="bento-card p-6 rounded-3xl bg-[#181410] text-white border-none">
              <span className="material-symbols-outlined text-[#ff6e00] text-3xl mb-3">
                work
              </span>
              <h3 className="font-bold text-lg">Portfolio</h3>
              <p className="text-gray-400 text-sm mt-1">
                View my complete work and projects
              </p>
              <a
                href="https://nqobilemportfolio.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#ff6e00] text-white px-4 py-2 rounded-lg font-bold text-sm hover:glow-orange-strong transition-all"
              >
                View Portfolio →
              </a>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bento-card p-6 rounded-3xl">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff6e00]">
                  help
                </span>
                How accurate are the scouting reports?
              </h3>
              <p className="text-gray-500 mt-3">
                Our neural engine achieves an average accuracy of 87% across all
                supported games, with continuous improvements through machine
                learning.
              </p>
            </div>
            <div className="bento-card p-6 rounded-3xl">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff6e00]">
                  help
                </span>
                What games do you support?
              </h3>
              <p className="text-gray-500 mt-3">
                We currently support League of Legends, Valorant, CS2, Dota 2,
                Overwatch 2, and more titles are being added regularly.
              </p>
            </div>
            <div className="bento-card p-6 rounded-3xl">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff6e00]">
                  help
                </span>
                Is there an API available?
              </h3>
              <p className="text-gray-500 mt-3">
                Yes! We offer API access for developers and organizations. Contact
                us for API documentation and pricing information.
              </p>
            </div>
            <div className="bento-card p-6 rounded-3xl">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <span className="material-symbols-outlined text-[#ff6e00]">
                  help
                </span>
                How often is data updated?
              </h3>
              <p className="text-gray-500 mt-3">
                Our systems process match data in near real-time, with an average
                delay of just 2 minutes from match completion to data availability.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
