"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { contactInfo, socialLinks } from "@/constants";

const contactIconMap: Record<string, React.ReactNode> = {
  Email: <Mail className="w-5 h-5 text-white" />,
  Phone: <Phone className="w-5 h-5 text-white" />,
  Location: <MapPin className="w-5 h-5 text-white" />,
};

const socialIconMap: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-6 h-6" />,
  LinkedIn: <Linkedin className="w-6 h-6" />,
  Email: <Mail className="w-6 h-6" />,
};

export default function Contact() {

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500">
                    {contactIconMap[item.label]}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-900 dark:text-white hover:text-violet-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Feel free to reach out through any of these platforms. I typically respond within 24 hours.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-300 hover:text-violet-500 hover:border-violet-500 transition-all"
                  aria-label={link.name}
                >
                  {socialIconMap[link.name]}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
