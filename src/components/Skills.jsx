const Skills = () => (
  <section id="skills" className="bg-white py-20 px-6 text-black">
    <div className="max-w-5xl mx-auto text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-10 relative inline-block after:block after:h-1 after:w-24 after:bg-yellow-500 after:mx-auto after:mt-2">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {[
          "HTML5",
          "CSS3",
          "JavaScript",
          "React",
          "Tailwind CSS",
          "Git",
          "GitHub",
          "Firebase",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-yellow-100 text-yellow-800 font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
