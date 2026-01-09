"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills, certifications } from "@/constants";

export default function About() {

  return (
    <section id="about" aria-labelledby="about-heading" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I specialize in building performant, accessible, and scalable web applications
            with modern technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl p-8"
          >
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
              Who I Am
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p>
                I&apos;m a Senior Frontend Developer based in Feni, Bangladesh, with a passion
                for creating exceptional digital experiences. With over 7 years in the industry,
                I&apos;ve had the opportunity to work on high-traffic platforms serving millions of users.
              </p>
              <p>
                At <strong className="text-slate-900 dark:text-white">4X Software (Deriv)</strong>, I redesigned
                client-side architecture for a financial platform with 2M+ monthly active users, optimized
                bundle sizes by 88%, and built comprehensive design systems used across 5+ products.
              </p>
              <p>
                I hold a Master&apos;s degree in Mathematics from Noakhali Govt. College, which helps me
                approach complex problems with analytical precision.
              </p>
            </div>

            {/* Certificates */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-3 text-slate-900 dark:text-white">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.5 + categoryIndex * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl p-4"
              >
                <h4 className="text-sm font-medium text-violet-500 mb-3">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-full text-slate-600 dark:text-slate-300 hover:text-violet-500 hover:border-violet-500 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
