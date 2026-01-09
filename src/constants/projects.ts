import { ReactNode } from "react";

export interface Project {
  title: string;
  description: string;
  metrics: string[];
  icon: ReactNode;
  tags: string[];
  link?: string;
  color: string;
}

export const projectsData = [
  {
    title: "Deriv.com Redesign",
    description:
      "Redesigned client-side architecture for a high-traffic financial platform serving 2M+ monthly active users. Implemented React, TypeScript, and Tailwind CSS.",
    metrics: ["2M+ Users", "80% Faster Load", "88% Bundle Reduction"],
    iconName: "Users",
    tags: ["React", "TypeScript", "Tailwind CSS", "Gatsby"],
    link: "https://deriv.com",
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Design System",
    description:
      "Engineered comprehensive design system with component-based architecture using React and Rollup. Used across 5+ digital products.",
    metrics: ["5+ Products", "40% Dev Time Saved", "50% Quality Improvement"],
    iconName: "Code2",
    tags: ["React", "Rollup", "Storybook", "TypeScript"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Nuron NFT Marketplace",
    description:
      "High-performance NFT marketplace template with lightning-fast load speeds (under 0.3s) and 99 PageSpeed score. Features creator profiles, collections, wallet integration, and light/dark themes.",
    metrics: ["99 PageSpeed", "0.3s Load", "Full NFT Features"],
    iconName: "Zap",
    tags: ["React", "Next.js", "SCSS", "Bootstrap"],
    link: "https://themeforest.net/item/nuron-nft-marketplace-react-next-js-template/36659437",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "MaxCoach Learning Platform",
    description:
      "Modern online learning platform with 30+ pre-built pages, 6 home variations, Framer Motion animations, PWA support, and SEO optimization. Built with strict TypeScript and React Context.",
    metrics: ["30+ Pages", "6 Home Variants", "PWA Ready"],
    iconName: "GraduationCap",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://themeforest.net/item/maxcoach-online-learning-react-education-template/39065904",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Doar Admin Dashboard",
    description:
      "Responsive React admin template with modern UI components, multiple layouts, data visualization charts, and complete authentication flows for enterprise applications.",
    metrics: ["Enterprise Ready", "Multiple Layouts", "Rich Components"],
    iconName: "LayoutDashboard",
    tags: ["React", "Redux", "Bootstrap", "ChartJS"],
    link: "https://themeforest.net/item/doar-responsive-react-admin-template/32403518",
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Mitech IT Solutions",
    description:
      "Professional IT solutions and services company template built with React and Gatsby. Features modern design, SEO optimization, and fast static site generation for tech businesses.",
    metrics: ["Gatsby SSG", "SEO Optimized", "Corporate Ready"],
    iconName: "Building2",
    tags: ["React", "Gatsby", "Styled Components", "GraphQL"],
    link: "https://themeforest.net/item/mitech-it-solutions-and-services-company-react-gatsby-template/25766950",
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "CartTime Countdown",
    description:
      "Published Shopify app that creates urgency with countdown timers for cart, products, and promotions. Helps merchants boost conversions through scarcity marketing tactics.",
    metrics: ["Live on Shopify", "Conversion Boost", "Easy Integration"],
    iconName: "TrendingUp",
    tags: ["Remix", "Node.js", "Shopify API", "PostgreSQL"],
    link: "https://apps.shopify.com/carttime-countdown",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Mindful Guard",
    description:
      "Android app for digital wellbeing that helps users manage screen time and app usage. Features app blocking, usage tracking, and mindful notifications.",
    metrics: ["Live on Play Store", "Digital Wellbeing", "React Native"],
    iconName: "Smartphone",
    tags: ["React Native", "TypeScript", "Android", "Expo"],
    link: "https://play.google.com/store/apps/details?id=com.anonymous.mindfulguard",
    color: "from-purple-500 to-fuchsia-500",
  },
];
