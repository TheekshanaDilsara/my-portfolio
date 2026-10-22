"use client";

import { useState } from "react";
import { personalInfo } from "../data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields before dispatching.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration preserved from active project
      const SERVICE_ID = "service_ukx167x";
      const TEMPLATE_ID = "template_usb55go";
      const PUBLIC_KEY = "jtUjjmmbYnp27OFGq";

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: "Theekshana Dilsara",
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Transmission received successfully! I will review and respond promptly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Transmission error:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Unable to send message via the gateway right now. Please email directly at theekshanadilsaras@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20 relative bg-[#07080a]/40 backdrop-blur-[2px] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono-code text-xs text-orange-400 tracking-wider uppercase mb-3">
              <span className="w-8 h-px bg-orange-500"></span>
              <span>05 // Transmission &amp; Contact</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Something <br className="hidden sm:inline" />
              <span className="text-gradient-orange">Impactful Together</span>.
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Open for data science internships, full-stack collaborations, and software engineering opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                <span>Direct Connection Channels</span>
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Feel free to reach out directly via email, phone, or LinkedIn. I typically review and reply to messages within 24 hours.
              </p>

              {/* Email Card with 1-click Copy */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-orange-500/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono-code text-[11px] text-gray-400 uppercase tracking-wider">
                    Primary Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="font-mono-code text-[11px] text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    {copiedEmail ? "✓ Copied!" : "Copy Address"}
                  </button>
                </div>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-sm md:text-base font-semibold text-white hover:text-orange-400 transition-colors break-all"
                >
                  {personalInfo.contact.email}
                </a>
              </div>

              {/* Telephone Card */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-orange-500/40 transition-colors">
                <div className="font-mono-code text-[11px] text-gray-400 uppercase tracking-wider mb-1.5">
                  Telephone Contact
                </div>
                <div className="flex flex-col gap-1">
                  {personalInfo.contact.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="text-sm font-semibold text-white hover:text-orange-400 transition-colors font-mono-code"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              {/* Profiles Row */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-neutral-900 border border-white/10 hover:border-orange-500/40 flex items-center gap-3 transition-colors group"
                >
                  <svg className="w-5 h-5 fill-current text-gray-400 group-hover:text-orange-400 transition-colors" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <div className="text-xs">
                    <div className="text-gray-400">LinkedIn</div>
                    <div className="font-bold text-white group-hover:text-orange-400">Connect &rarr;</div>
                  </div>
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-neutral-900 border border-white/10 hover:border-orange-500/40 flex items-center gap-3 transition-colors group"
                >
                  <svg className="w-5 h-5 fill-current text-gray-400 group-hover:text-orange-400 transition-colors" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <div className="text-xs">
                    <div className="text-gray-400">GitHub</div>
                    <div className="font-bold text-white group-hover:text-orange-400">Repositories &rarr;</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
              <div className="text-xs text-orange-200">
                Currently actively reviewing opportunities for Data Science, AI, and Software Engineering.
              </div>
            </div>
          </div>

          {/* Right: Interactive Form */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 md:p-10">
            <h3 className="text-xl font-bold text-white mb-2">Send Direct Transmission</h3>
            <p className="text-xs text-gray-400 mb-6 font-light">
              Fill out the parameters below to initiate email delivery.
            </p>

            {submitStatus && (
              <div
                className={`p-4 rounded-xl text-xs font-mono-code mb-6 border ${
                  submitStatus.type === "success"
                    ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                    : "bg-rose-500/15 border-rose-500/40 text-rose-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono-code text-xs text-gray-400 mb-2">
                    IDENTIFIER (YOUR NAME) *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-code text-xs text-gray-400 mb-2">
                    REPLY ADDRESS (YOUR EMAIL) *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono-code text-xs text-gray-400 mb-2">
                  SUBJECT TOPIC *
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Data Science Opportunity / Project Collaboration"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono-code text-xs text-gray-400 mb-2">
                  MESSAGE PAYLOAD *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, timeline, or discussion topic..."
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-neutral-800 text-gray-500 cursor-not-allowed border border-white/5"
                    : "bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/20 hover:shadow-orange-500/35"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Dispatch Transmission</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
