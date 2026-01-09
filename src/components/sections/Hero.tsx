"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { socialLinks } from "@/constants";

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github size={24} />,
  LinkedIn: <Linkedin size={24} />,
  Email: <Mail size={24} />,
};

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-violet-500 font-medium mb-4 tracking-wide"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-slate-900 dark:text-white"
        >
          Abu Hasan Al{" "}
          <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
            Mobarak
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 mb-6"
        >
          Senior Frontend Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          7+ years of experience building scalable web applications using React,
          TypeScript, and modern JavaScript. Passionate about performance
          optimization and creating exceptional user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button href="#projects">
            View My Work
          </Button>
          <Button variant="secondary" href="#contact">
            <Mail size={18} />
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="text-slate-500 dark:text-slate-400 hover:text-violet-500 transition-colors p-2"
            >
              {iconMap[link.name]}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1 },
          y: { delay: 1, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-10 text-slate-500 dark:text-slate-400 hover:text-violet-500 transition-colors"
      >
        <ArrowDown size={28} />
      </motion.a>
    </section>
  );
}
