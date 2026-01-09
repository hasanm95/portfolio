"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Users, Zap, TrendingUp, Code2 } from "lucide-react";

const projects = [
  {
    title: "Deriv.com Redesign",
    description:
      "Redesigned client-side architecture for a high-traffic financial platform serving 2M+ monthly active users. Implemented React, TypeScript, and Tailwind CSS.",
    metrics: ["2M+ Users", "80% Faster Load", "88% Bundle Reduction"],
    icon: <Users className="w-6 h-6" />,
    tags: ["React", "TypeScript", "Tailwind CSS", "Gatsby"],
    link: "https://deriv.com",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Design System",
    description:
      "Engineered comprehensive design system with component-based architecture using React and Rollup. Used across 5+ digital products.",
    metrics: ["5+ Products", "40% Dev Time Saved", "50% Quality Improvement"],
    icon: <Code2 className="w-6 h-6" />,
    tags: ["React", "Rollup", "Storybook", "TypeScript"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "ThemeForest Templates",
    description:
      "Crafted 15+ production-ready templates with React, Next.js, and Gatsby featuring server-side rendering capabilities.",
    metrics: ["15+ Templates", "$20K+ Sales", "95+ Lighthouse"],
    icon: <TrendingUp className="w-6 h-6" />,
    tags: ["Next.js", "Gatsby", "React", "SSR"],
    link: "https://themeforest.net",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Shopify Applications",
    description:
      "Developed custom Shopify applications using Remix, Node.js, and PostgreSQL with seamless store integration.",
    metrics: ["Enterprise Clients", "100% Compatibility", "Real-time Sync"],
    icon: <Zap className="w-6 h-6" />,
    tags: ["Remix", "Node.js", "PostgreSQL", "Shopify API"],
    color: "from-green-500 to-emerald-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            A selection of projects that showcase my expertise and impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group glass-card p-6 hover:border-[var(--primary)] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-20`}
                >
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} bg-opacity-10 text-white`}
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs text-[var(--muted)] border border-[var(--border)] rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/hasanm95"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
