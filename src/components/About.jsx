import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
} from "lucide-react";

const journey = [
  {
    year: "2019 — 2024",
    title: "Process & Operations",
    company: "Back-office Experience",
    description:
      "Built strong attention to detail, discipline and process-oriented thinking through a structured back-office role.",
    icon: BriefcaseBusiness,
  },
  {
    year: "2024",
    title: "Frontend Developer Intern",
    company: "GrayQuest",
    description:
      "Started my professional journey in web development, working with React.js, JavaScript, HTML, CSS and REST APIs.",
    icon: Code2,
  },
  {
    year: "2024 — 2025",
    title: "Frontend Developer Intern",
    company: "Bridgeview Maritime",
    description:
      "Worked closely with developers and designers to build responsive interfaces and reusable React components.",
    icon: Code2,
  },
  {
    year: "2025 — 2026",
    title: "Junior Software Developer",
    company: "Bridgeview Maritime",
    description:
      "Developed production web applications using React.js, integrated REST APIs and built reusable, responsive UI components.",
    icon: BriefcaseBusiness,
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/30">
            01 — About Me
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl">
            From learning to{" "}
            <span className="text-white/30">
              building real products.
            </span>
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="mt-16 grid gap-12 md:grid-cols-[1.3fr_0.7fr]">

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg leading-8 text-white/60 md:text-xl">
              I'm a{" "}
              <span className="text-white">
                Frontend Developer
              </span>{" "}
              with 1+ year of professional experience building
              responsive web applications using React.js,
              JavaScript, HTML5 and CSS3.
            </p>

            <p className="mt-6 leading-7 text-white/40">
              My work focuses on creating reusable components,
              integrating REST APIs and turning UI designs into
              clean, responsive and user-friendly experiences.
            </p>

            <p className="mt-6 leading-7 text-white/40">
              I transitioned into web development in 2024 and
              have continued to strengthen my frontend skills
              through professional projects and independent
              full-stack projects.
            </p>

            {/* Highlight */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="rounded-xl border border-white/10 p-3">
                <Code2 size={22} />
              </div>

              <div>
                <p className="text-sm font-medium">
                  Currently focused on
                </p>

                <p className="mt-1 text-sm text-white/40">
                  React.js · JavaScript · Responsive UI
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-3 self-start"
          >
            <Stat number="1+" label="Year Professional Experience" />
            <Stat number="3+" label="Production Web Apps" />
            <Stat number="15+" label="Reusable React Components" />
            <Stat number="10+" label="REST API Integrations" />
          </motion.div>
        </div>

        {/* Career Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/30">
                Career Journey
              </p>

              <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
                My path so far
              </h3>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative ml-2 border-l border-white/10 pl-8 md:ml-6 md:pl-12">

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative pb-14 last:pb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[49px] flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#050505] md:-left-[61px]">
                    <Icon size={16} className="text-white/60" />
                  </div>

                  {/* Year */}
                  <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                    {item.year}
                  </p>

                  <h4 className="mt-3 text-xl font-medium md:text-2xl">
                    {item.title}
                  </h4>

                  <p className="mt-1 text-sm text-white/40">
                    {item.company}
                  </p>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Personal MERN Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-10"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-white/40">
                <GraduationCap size={18} />

                <span className="text-xs uppercase tracking-[0.2em]">
                  Beyond Frontend
                </span>
              </div>

              <h3 className="text-2xl font-semibold md:text-3xl">
                Exploring the full stack through personal projects.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/40">
                Alongside my professional frontend work, I built a
                MERN e-commerce project independently to strengthen
                my understanding of backend development,
                authentication, APIs and databases.
              </p>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex shrink-0 items-center gap-2 self-start rounded-full border border-white/10 px-5 py-3 text-sm transition hover:bg-white hover:text-black md:self-center"
            >
              See Project

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* Stats Component */
function Stat({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.04]">
      <p className="text-3xl font-semibold md:text-4xl">
        {number}
      </p>

      <p className="mt-2 text-xs leading-5 text-white/35">
        {label}
      </p>
    </div>
  );
}

export default About;