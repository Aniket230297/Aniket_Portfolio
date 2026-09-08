import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers3,
  Palette,
  Server,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    description: "My primary professional skillset",
    icon: Code2,
    skills: [
      {
        name: "React.js",
        level: "Professional",
        icon: Code2,
      },
      {
        name: "JavaScript",
        level: "ES6+",
        icon: Braces,
      },
      {
        name: "HTML5",
        level: "Professional",
        icon: Globe,
      },
      {
        name: "CSS3",
        level: "Professional",
        icon: Palette,
      },
      {
        name: "Tailwind CSS",
        level: "Working Knowledge",
        icon: Layers3,
      },
    ],
  },

  {
    title: "API & Backend",
    description: "Supporting knowledge through projects",
    icon: Server,
    skills: [
      {
        name: "REST APIs",
        level: "Professional",
        icon: Globe,
      },
      {
        name: "Axios",
        level: "Professional",
        icon: Braces,
      },
      {
        name: "Node.js",
        level: "Project Experience",
        icon: Server,
      },
      {
        name: "Express.js",
        level: "Project Experience",
        icon: Server,
      },
      {
        name: "MongoDB",
        level: "Project Experience",
        icon: Database,
      },
    ],
  },

  {
    title: "Tools",
    description: "Tools I use to build and ship",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        level: "Working Knowledge",
        icon: GitBranch,
      },
      {
        name: "GitHub",
        level: "Working Knowledge",
        icon: GitBranch,
      },
      {
        name: "VS Code",
        level: "Daily Tool",
        icon: Code2,
      },
      {
        name: "Postman",
        level: "API Testing",
        icon: Globe,
      },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/30">
            02 — Skills
          </p>

          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl">
              Tools I use to{" "}
              <span className="text-white/30">
                build the web.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-white/35">
              Focused on creating clean, responsive interfaces
              with React.js and modern frontend technologies.
            </p>
          </div>
        </motion.div>

        {/* Skill Categories */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">

          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: categoryIndex * 0.12,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition duration-500 hover:-translate-y-2 hover:bg-white/[0.04]"
              >
                {/* Category Header */}
                <div className="flex items-start justify-between">

                  <div>
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      <CategoryIcon
                        size={20}
                        className="text-white/60"
                      />
                    </div>

                    <h3 className="text-xl font-medium">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-xs text-white/30">
                      {category.description}
                    </p>
                  </div>

                  <span className="text-xs text-white/20">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Skills */}
                <div className="mt-8 space-y-3">

                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay:
                            categoryIndex * 0.1 +
                            skillIndex * 0.05,
                        }}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3 transition duration-300 hover:border-white/15 hover:bg-white/[0.04]"
                      >
                        <div className="flex items-center gap-3">
                          <SkillIcon
                            size={16}
                            className="text-white/30"
                          />

                          <span className="text-sm text-white/70">
                            {skill.name}
                          </span>
                        </div>

                        <span className="text-[10px] uppercase tracking-wider text-white/25">
                          {skill.level}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tech Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          <div className="flex min-w-max animate-[marquee_20s_linear_infinite] gap-10 px-8 py-5">
            {[
              "React.js",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "REST APIs",
              "Axios",
              "Git",
              "GitHub",
              "Responsive Design",
            ].map((tech, index) => (
              <div
                key={`${tech}-${index}`}
                className="flex items-center gap-3 text-sm text-white/25"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;