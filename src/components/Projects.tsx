"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Users, Zap, TrendingUp, Code2, GraduationCap, LayoutDashboard, Building2, Smartphone } from "lucide-react";
import Button from "./Button";

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
    title: "Nuron NFT Marketplace",
    description:
      "High-performance NFT marketplace template with lightning-fast load speeds (under 0.3s) and 99 PageSpeed score. Features creator profiles, collections, wallet integration, and light/dark themes.",
    metrics: ["99 PageSpeed", "0.3s Load", "Full NFT Features"],
    icon: <Zap className="w-6 h-6" />,
    tags: ["React", "Next.js", "SCSS", "Bootstrap"],
    link: "https://themeforest.net/item/nuron-nft-marketplace-react-next-js-template/36659437",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "MaxCoach Learning Platform",
    description:
      "Modern online learning platform with 30+ pre-built pages, 6 home variations, Framer Motion animations, PWA support, and SEO optimization. Built with strict TypeScript and React Context.",
    metrics: ["30+ Pages", "6 Home Variants", "PWA Ready"],
    icon: <GraduationCap className="w-6 h-6" />,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://themeforest.net/item/maxcoach-online-learning-react-education-template/39065904",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Doar Admin Dashboard",
    description:
      "Responsive React admin template with modern UI components, multiple layouts, data visualization charts, and complete authentication flows for enterprise applications.",
    metrics: ["Enterprise Ready", "Multiple Layouts", "Rich Components"],
    icon: <LayoutDashboard className="w-6 h-6" />,
    tags: ["React", "Redux", "Bootstrap", "ChartJS"],
    link: "https://themeforest.net/item/doar-responsive-react-admin-template/32403518",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Mitech IT Solutions",
    description:
      "Professional IT solutions and services company template built with React and Gatsby. Features modern design, SEO optimization, and fast static site generation for tech businesses.",
    metrics: ["Gatsby SSG", "SEO Optimized", "Corporate Ready"],
    icon: <Building2 className="w-6 h-6" />,
    tags: ["React", "Gatsby", "Styled Components", "GraphQL"],
    link: "https://themeforest.net/item/mitech-it-solutions-and-services-company-react-gatsby-template/25766950",
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "CartTime Countdown",
    description:
      "Published Shopify app that creates urgency with countdown timers for cart, products, and promotions. Helps merchants boost conversions through scarcity marketing tactics.",
    metrics: ["Live on Shopify", "Conversion Boost", "Easy Integration"],
    icon: <TrendingUp className="w-6 h-6" />,
    tags: ["Remix", "Node.js", "Shopify API", "PostgreSQL"],
    link: "https://apps.shopify.com/carttime-countdown",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Mindful Guard",
    description:
      "Android app for digital wellbeing that helps users manage screen time and app usage. Features app blocking, usage tracking, and mindful notifications.",
    metrics: ["Live on Play Store", "Digital Wellbeing", "React Native"],
    icon: <Smartphone className="w-6 h-6" />,
    tags: ["React Native", "TypeScript", "Android", "Expo"],
    link: "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard",
    color: "from-purple-500 to-fuchsia-500",
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
            Featured{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Projects
            </span>
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
              className="group bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--primary)] transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}
                >
                  <span className="text-white">{project.icon}</span>
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
                    className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white`}
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
          <Button
            variant="secondary"
            href="https://github.com/hasanm95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
