"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit form");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-6">
            Get Started with VoltSense
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to take control of your energy? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Email</h3>
                <p className="text-sm text-neutral-600">support@voltsense.io</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Phone</h3>
                <p className="text-sm text-neutral-600">1-800-VOLT-SNS</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Response Time</h3>
                <p className="text-sm text-neutral-600">Within 24 hours</p>
              </div>
            </div>

            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input"
                    placeholder="Acme Inc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="input resize-none"
                    placeholder="Tell us about your energy monitoring needs..."
                  />
                </div>

                {status === "success" && (
                  <div className="p-4 bg-primary-50 border border-primary-200 rounded-lg text-primary-800" role="alert">
                    <p className="font-semibold">Thank you for your interest!</p>
                    <p className="text-sm">We've received your message and will get back to you within 24 hours.</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800" role="alert">
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm">{errorMessage || "Please try again later."}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-semibold text-neutral-900 mb-2">How long does installation take?</h3>
                <p className="text-neutral-600">Most installations are completed in 2-3 hours by a licensed electrician. We provide detailed guides and support throughout the process.</p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-neutral-900 mb-2">Do I need a subscription?</h3>
                <p className="text-neutral-600">No! VoltSense works completely locally. All features are included with your one-time hardware purchase. Optional cloud backup is available for $4.99/month.</p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-neutral-900 mb-2">Is VoltSense compatible with my solar system?</h3>
                <p className="text-neutral-600">VoltSense works with virtually all solar inverters and battery systems. We support Enphase, SolarEdge, Tesla Powerwall, and many more via standard protocols.</p>
              </div>
              <div className="card">
                <h3 className="font-semibold text-neutral-900 mb-2">What's included in the box?</h3>
                <p className="text-neutral-600">Your VoltSense kit includes the main monitor unit, 16 current clamps, mounting hardware, and everything needed for installation. A detailed setup guide is also included.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
