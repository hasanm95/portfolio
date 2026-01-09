"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle } from "lucide-react";
import Button from "./Button";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success state
    // In production, you'd integrate with a backend service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hasanmobarak25@gmail.com",
      href: "mailto:hasanmobarak25@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+880 1716 008633",
      href: "tel:+8801716008633",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Feni, Chattogram, Bangladesh",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/hasanm95",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/hasanm025/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:hasanmobarak25@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 gradient-text">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-opacity-20">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted)]">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[var(--foreground)]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-bold mb-6 gradient-text">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-card text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[var(--muted)] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[var(--muted)] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[var(--muted)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-lg text-[var(--foreground)] focus:outline-none focus:border-[var(--primary)] transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <Button type="submit" className="w-full" disabled={submitted}>
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
