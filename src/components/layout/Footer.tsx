"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { navItems, socialLinks } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github size={20} />,
  LinkedIn: <Linkedin size={20} />,
  Email: <Mail size={20} />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent"
            >
              Hasan
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 flex items-center justify-center md:justify-start gap-1">
              © {currentYear} Made with <Heart size={14} className="text-red-500" /> by Abu Hasan Al Mobarak
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-violet-500 transition-colors"
                aria-label={link.name}
              >
                {iconMap[link.name]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
