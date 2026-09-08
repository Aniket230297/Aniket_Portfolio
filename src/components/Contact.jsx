import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "aniketkule231997@gmail.com",
    href: "mailto:aniketkule231997@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aniketkule",
    href: "https://www.linkedin.com/in/aniketkule/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "View my repositories",
    href: "#",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080b12] px-5 py-24 md:px-8 md:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.07] blur-[140px]" />

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Main CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
          }}
          className="text-center"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            05 — Contact
          </p>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Let's build something
            <span className="block text-gray-500">
              great together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            I'm currently looking for Frontend Developer opportunities where
            I can contribute, learn and build meaningful web experiences.
          </p>

          {/* Primary CTA */}
          <motion.a
            href="mailto:aniketkule231997@gmail.com"
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-400"
          >
            Get In Touch
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          className="mt-16 grid gap-4 md:grid-cols-3"
        >
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={
                  item.href.startsWith("http") ? "_blank" : undefined
                }
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-400 transition-colors group-hover:border-blue-400/30 group-hover:bg-blue-400/10">
                    <Icon size={18} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                  />
                </div>

                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-gray-500">
                  {item.label}
                </p>

                <p className="mt-2 truncate text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                  {item.value}
                </p>
              </a>
            );
          })}
        </motion.div>

        {/* Availability */}
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
            delay: 0.4,
            duration: 0.6,
          }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-500"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <span>Open to Frontend Developer opportunities</span>
        </motion.div>

        {/* Location */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-600">
          <MapPin size={13} />
          Mumbai, India
        </div>
      </div>
    </section>
  );
}