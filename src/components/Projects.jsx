import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  ChevronDown,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

const projects = [
  {
    id: 1,
    number: "01",
    title: "MERN E-Commerce Platform",
    category: "Full-Stack Web Application",
    featured: true,

    description:
      "A full-stack e-commerce platform built to understand and implement real-world shopping workflows, authentication, product management and order processing.",

    longDescription:
      "Built a complete e-commerce experience with a React frontend and Node.js/Express backend connected to MongoDB. The project includes authentication, product management, shopping cart functionality, order placement and an admin dashboard.",

    icon: ShoppingBag,

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
    ],

    features: [
      "User registration and login",
      "JWT-based authentication",
      "Role-based user and admin access",
      "Product catalog and management",
      "Shopping cart functionality",
      "Order placement workflow",
      "Admin dashboard",
      "Responsive design",
    ],

    liveUrl: "https://mern-ecommerce-eta-lyart.vercel.app/",
    githubUrl: "https://github.com/Aniket230297",
  },

  {
    id: 2,
    number: "02",
    title: "Crypto Tracker",
    category: "React Web Application",
    featured: false,

    description:
      "A responsive cryptocurrency tracking application that displays real-time market information and helps users explore the crypto market.",

    longDescription:
      "Built a React-based cryptocurrency dashboard that fetches market data from an external API and presents prices, market capitalization, trading volume and other information through a clean responsive interface.",

    icon: TrendingUp,

    technologies: [
      "React.js",
      "JavaScript",
      "Material UI",
      "REST API",
      "Axios",
      "Chart.js",
    ],

    features: [
      "Real-time cryptocurrency data",
      "Top 100 cryptocurrencies",
      "Search functionality",
      "Price and market cap information",
      "Trading volume data",
      "Interactive charts",
      "Responsive interface",
    ],

    liveUrl: "https://crypto-tracker-site.netlify.app/",
    githubUrl: "https://github.com/Aniket230297",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  const Icon = project.icon;

  return (
    <motion.article
      variants={cardVariants}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]"
    >
      {/* Hover Glow */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-blue-600/[0.08] blur-[100px] transition-all duration-700 group-hover:bg-blue-600/[0.15]" />

      <div className="relative p-6 md:p-8 lg:p-10">
        {/* Top Row */}
        <div className="mb-10 flex items-start justify-between">
          <div className="flex items-center gap-4">
            {/* Project Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-blue-400 transition-all duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400/10">
              <Icon size={22} />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                {project.category}
              </p>

              {project.featured && (
                <span className="mt-1 inline-block text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  Featured Project
                </span>
              )}
            </div>
          </div>

          {/* Number */}
          <span className="text-4xl font-bold tracking-tight text-white/[0.08] md:text-5xl">
            {project.number}
          </span>
        </div>

        {/* Project Content */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400 md:text-3xl">
              {project.title}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-gray-300 transition-colors duration-200 hover:border-blue-400/30 hover:text-blue-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-blue-400"
              >
                Live Demo
                <ExternalLink
                  size={15}
                  className="transition-transform duration-300 group-hover/button:rotate-12"
                />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:text-white"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right — Features */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5 md:p-6">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Key Features
            </p>

            <div className="space-y-3">
              {project.features.slice(0, 5).map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-sm text-gray-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-8 flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-400"
        >
          {expanded ? "Hide details" : "View project details"}

          <motion.div
            animate={{
              rotate: expanded ? 180 : 0,
            }}
            transition={{ duration: 0.25 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>

        {/* Expanded Details */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  About the Project
                </p>

                <p className="max-w-4xl text-sm leading-7 text-gray-400">
                  {project.longDescription}
                </p>

                <div className="mt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    All Features
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-400"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Accent */}
      <div className="h-px w-0 bg-blue-400 transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080b12] px-5 py-24 md:px-8 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/[0.035] blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            04 — Projects
          </p>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Things I've built,
            <span className="block text-gray-500">
              from frontend to full-stack.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            A selection of projects that demonstrate my frontend development
            skills, API integration experience and full-stack learning.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-500">
            More projects and experiments coming soon.
          </p>

          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            Let's build something
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}