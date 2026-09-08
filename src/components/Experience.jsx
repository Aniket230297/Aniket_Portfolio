import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    company: "Bridgeview Maritime Pvt Ltd",
    role: "Junior Software Developer — Frontend",
    type: "Full-time",
    location: "Navi Mumbai",
    duration: "Jun 2025 — Jun 2026",
    period: "1 Year 1 Month",
    description:
      "Worked on production web applications using React.js and modern frontend technologies.",
    highlights: [
      "Developed and maintained 3+ responsive production web applications using React.js, JavaScript ES6+, HTML5 and CSS3.",
      "Built 15+ reusable React components to improve code reusability and development efficiency.",
      "Integrated 10+ REST API endpoints using Axios and React Hooks.",
      "Converted UI designs into responsive and user-friendly interfaces.",
      "Collaborated with backend developers and UI/UX designers during feature development.",
      "Debugged UI issues and improved cross-device responsiveness.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Axios",
      "Git",
    ],
  },
  {
    id: 2,
    company: "Bridgeview Maritime Pvt Ltd",
    role: "Frontend Developer Intern",
    type: "Internship",
    location: "Navi Mumbai",
    duration: "Dec 2024 — May 2025",
    period: "6 Months",
    description:
      "Started my professional frontend development journey by working on real-world web application tasks.",
    highlights: [
      "Developed responsive UI components using React.js, JavaScript, HTML5 and CSS3.",
      "Worked with REST APIs and integrated frontend data into application interfaces.",
      "Fixed UI bugs and improved existing application screens.",
      "Collaborated with senior developers to understand development practices and workflows.",
      "Worked on responsive layouts for different screen sizes.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: 3,
    company: "GrayQuest",
    role: "Frontend Developer Intern",
    type: "Internship",
    location: "Mumbai",
    duration: "Mar 2024 — Jun 2024",
    period: "4 Months",
    description:
      "Gained hands-on experience in frontend development and working with responsive web interfaces.",
    highlights: [
      "Built responsive and interactive web pages using HTML, CSS, JavaScript and React.js.",
      "Worked with RESTful APIs to display and manage application data.",
      "Created reusable and responsive frontend components.",
      "Fixed UI issues and improved website responsiveness.",
      "Participated in code reviews and followed development best practices.",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function ExperienceCard({ experience, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-10 md:pl-16"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-7 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-blue-400/50 bg-[#080b12]">
        <div className="h-2 w-2 rounded-full bg-blue-400" />
      </div>

      {/* Card */}
      <motion.div
        layout
        className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
          isOpen
            ? "border-blue-500/40 bg-white/[0.06] shadow-[0_0_40px_rgba(59,130,246,0.08)]"
            : "border-white/10 bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]"
        }`}
      >
        {/* Header */}
        <button
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
        >
          <div className="flex gap-4">
            {/* Icon */}
            <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-blue-400 sm:flex">
              <Briefcase size={20} />
            </div>

            {/* Main Info */}
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {experience.role}
                </h3>

                {index === 0 && (
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
                    Latest
                  </span>
                )}
              </div>

              <p className="font-medium text-blue-400">
                {experience.company}
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {experience.duration}
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {experience.location}
                </span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="mt-1 shrink-0 text-gray-500"
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>

        {/* Expandable Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
            >
              <div className="border-t border-white/10 px-5 pb-6 pt-5 md:px-6">
                {/* Description */}
                <p className="mb-5 max-w-3xl text-sm leading-7 text-gray-400">
                  {experience.description}
                </p>

                {/* Key Contributions */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Key Contributions
                  </p>

                  <div className="space-y-3">
                    {experience.highlights.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.05,
                          duration: 0.3,
                        }}
                        className="flex gap-3"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-1 shrink-0 text-blue-400"
                        />

                        <p className="text-sm leading-6 text-gray-400">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const [openId, setOpenId] = useState(1);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#080b12] px-5 py-24 md:px-8 md:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/[0.04] blur-[130px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            03 — Experience
          </p>

          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Building experience,
            <span className="block text-gray-500">
              one product at a time.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            My journey from learning frontend development to working on
            real-world production applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute bottom-5 left-0 top-7 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent" />

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isOpen={openId === experience.id}
                onToggle={() => handleToggle(experience.id)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}