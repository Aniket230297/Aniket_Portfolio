import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#06080d] px-5 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Logo / Intro */}
          <div>
            <a
              href="#home"
              className="text-lg font-bold tracking-[0.2em] text-white"
            >
              ANIKET<span className="text-blue-400">.</span>
            </a>

            <p className="mt-2 text-sm text-gray-500">
              Frontend Developer · React.js
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-white"
            >
              <Github size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/aniketkule/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-white"
            >
              <Linkedin size={17} />
            </a>

            <a
              href="mailto:aniketkule231997@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:text-white"
            >
              <Mail size={17} />
            </a>

            {/* Back to Top */}
            <motion.a
              href="#home"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="ml-2 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black transition-colors duration-300 hover:bg-blue-400"
            >
              <ArrowUp size={17} />
            </motion.a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Aniket Kule. All rights reserved.
          </p>

          <p>
            Designed & built with React.js
          </p>
        </div>
      </div>
    </footer>
  );
}