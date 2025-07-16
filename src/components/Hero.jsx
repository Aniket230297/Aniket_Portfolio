import { Github, Linkedin } from 'lucide-react';

const Hero = () => (
  <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-yellow-100 to-yellow-300 text-black text-center px-6 pt-20">
    <div className="max-w-3xl">

      {/* Intro */}
      <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
        Hi, I’m <span className="text-yellow-700">Aniket</span> 👨‍💻
      </h2>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-gray-800 mb-2">
        Frontend Developer | React Enthusiast
      </p>
      <p className="text-sm md:text-base text-gray-700 uppercase tracking-wide">
        Crafting interactive & accessible web experiences
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <a
          href="/Resume_Aniket.pdf"
          download
          className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition"
        >
          📄 Download Resume
        </a>
        <a
          href="#contact"
          className="border-2 border-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition"
        >
          💬 Let’s Connect
        </a>
      </div>

      {/* Tech stack */}
      <div className="mt-8 flex justify-center flex-wrap gap-3 text-sm font-medium">
        <span className="bg-white px-3 py-1 rounded shadow">React</span>
        <span className="bg-white px-3 py-1 rounded shadow">JavaScript</span>
        <span className="bg-white px-3 py-1 rounded shadow">TailwindCSS</span>
        <span className="bg-white px-3 py-1 rounded shadow">Git</span>
      </div>

      {/* Social links */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://github.com/Aniket230297"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-yellow-600 transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/aniket-kule-a7358714b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-yellow-600 transition"
        >
          <Linkedin size={28} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
