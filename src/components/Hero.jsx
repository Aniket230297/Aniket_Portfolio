import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const techStack = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
];

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute right-0 top-20 h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      {/* Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl">

        {/* Small Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

          <span className="text-sm tracking-wide text-white/50">
            Available for Frontend Opportunities
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="max-w-5xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
          >
            FRONTEND
            <br />

            <span className="text-white/25">
              DEVELOPER
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="mt-8 max-w-2xl text-base leading-7 text-white/50 sm:text-lg"
          >
            I build responsive, interactive and user-focused web
            experiences using React.js, JavaScript and modern
            frontend technologies.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/50 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
            >
              View My Work

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <a
              href="/Aniket_Kule_Frontend_Developer.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://github.com/Aniket230297"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 transition hover:text-white"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/aniketkule"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 transition hover:text-white"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="mailto:aniketkule231997@gmail.com"
              className="text-white/40 transition hover:text-white"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-0 hidden flex-col items-center gap-2 md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <ArrowDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;