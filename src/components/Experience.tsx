"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "4X Software (Deriv)",
    location: "Cyberjaya, Malaysia",
    period: "02/2023 – 10/2025",
    highlights: [
      "Redesigned deriv.com client-side architecture leveraging React, TypeScript, and Tailwind CSS, enhancing user experience and performance for a high-traffic financial platform serving 2M+ monthly active users",
      "Engineered comprehensive design system implementing component-based architecture with React, Tailwind CSS, and Rollup, ensuring consistency across 5+ digital products and reducing development time by 40%",
      "Architected separate build pipelines for ROW and EU regions utilizing Gatsby's SSG capabilities, improving SEO rankings by 35% and page load speeds by 40%",
      "Optimized application bundle size from 42MB to 5MB (88% reduction) through tree shaking, code splitting, and Webpack optimization, improving load time by 80%",
      "Mentored 3 junior developers on modern React patterns and conducted code reviews, improving team code quality scores by 50%",
    ],
  },
  {
    title: "Frontend Developer",
    company: "HasTech",
    location: "Dhaka, Bangladesh",
    period: "09/2018 – 12/2022",
    highlights: [
      "Crafted 15+ production-ready templates for ThemeForest leveraging React, Next.js, and Gatsby with server-side rendering capabilities, generating $20K+ in total sales",
      "Built complex admin dashboards implementing TypeScript, Redux, and real-time data visualizations with ChartJS and ApexCharts, serving enterprise clients",
      "Developed Shopify applications using Remix, Node.js, and PostgreSQL that integrated seamlessly with client stores",
      "Achieved 100% cross-browser compatibility and 95+ Lighthouse scores through responsive design patterns and mobile-first architecture",
      "Collaborated with UI/UX designers and backend engineers to deliver pixel-perfect implementations, reducing customer support tickets by 35%",
    ],
  },
  {
    title: "Web Developer",
    company: "Freelance",
    location: "Bangladesh",
    period: "01/2017 – 09/2018",
    highlights: [
      "Delivered 20+ custom websites for small and medium businesses using HTML5, CSS3, JavaScript, React, and modern frameworks",
      "Worked directly with clients to translate business requirements into technical solutions and polished user interfaces",
      "Implemented responsive layouts and cross-browser compatibility, reducing bounce rates by 25% on average through improved UX and performance optimization",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            A timeline of my professional journey and key accomplishments.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--secondary)] to-transparent md:transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute w-4 h-4 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] border-4 border-[var(--background)] ${
                  index % 2 === 0
                    ? "left-0 md:left-1/2 md:transform md:-translate-x-1/2"
                    : "left-0 md:left-1/2 md:transform md:-translate-x-1/2"
                }`}
                style={{ top: "1.5rem" }}
              />

              <div
                className={`bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border)] rounded-2xl p-6 ml-8 md:ml-0 transition-all duration-300 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : ""}`}>
                  <h3 className="text-xl font-bold text-[var(--foreground)]">{exp.title}</h3>
                  <p className="text-[var(--primary)] font-medium">{exp.company}</p>
                  
                  <div className={`flex flex-wrap gap-4 mt-2 text-sm text-[var(--muted)] ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-2 text-sm text-[var(--muted)]"
                    >
                      <Briefcase size={14} className="mt-1 flex-shrink-0 text-[var(--primary)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
