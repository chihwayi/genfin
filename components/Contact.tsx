"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to an API route or email service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#F5A623]/15 text-[#F5A623] text-sm font-semibold tracking-wide uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
            Start Your{" "}
            <span className="gradient-text">Healthcare Journey</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Have a question or ready to join? Reach out and our team will get
            back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <div className="space-y-8">
            <div className="bg-[#1A1A2E] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="tel:+263766323131"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/15 flex items-center justify-center shrink-0 group-hover:bg-[#F5A623] transition-colors">
                    <Phone size={20} className="text-[#F5A623] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="text-white font-medium">+263 766 323 131</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/263774988661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-green-500/15 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                    <MessageCircle size={20} className="text-green-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">WhatsApp</p>
                    <p className="text-white font-medium">+263 774 988 661</p>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/Genfinmedicalaidfund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Mail size={20} className="text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Facebook</p>
                    <p className="text-white font-medium">GenFin Medical Aid Fund</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5A623]/15 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-[#F5A623]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Head Office</p>
                    <p className="text-white font-medium">
                      89 Fife Avenue, 10 Hughson Wynd
                      <br />
                      Mount Pleasant, Harare
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-3xl bg-[#FFF8E7] border-2 border-dashed border-[#F5A623]/30 p-8 text-center">
              <MapPin size={40} className="text-[#F5A623] mx-auto mb-3" />
              <p className="text-[#1A1A2E] font-semibold">
                Visit Our Nearest Branch
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Harare · Bulawayo · Kadoma
              </p>
              <a
                href="#branches"
                className="inline-block mt-4 px-6 py-2.5 rounded-full bg-[#F5A623] text-white text-sm font-semibold hover:bg-[#D4891A] transition-colors"
              >
                View Branches
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Send size={32} className="text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", plan: "", message: "" }); }}
                  className="mt-6 px-6 py-3 rounded-full bg-[#F5A623] text-white font-semibold hover:bg-[#D4891A] transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">
                  Send Us a Message
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+263 7XX XXX XXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Plan of Interest
                  </label>
                  <select
                    name="plan"
                    value={form.plan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent text-sm transition-all bg-white text-gray-700"
                  >
                    <option value="">Select a plan...</option>
                    <option>Essential ($25/month)</option>
                    <option>Standard ($45/month)</option>
                    <option>Premium ($75/month)</option>
                    <option>Executive ($110/month)</option>
                    <option>Corporate / Group Plan</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#F5A623] text-white font-semibold text-base hover:bg-[#D4891A] transition-all hover:shadow-lg hover:shadow-[#F5A623]/30 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
