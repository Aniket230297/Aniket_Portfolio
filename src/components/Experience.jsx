const experiences = [
    {
        company: "Bridgeview Maritime Pvt Ltd",
        role: "Frontend Web Developer",
        type: "Full-time",
        duration: "Dec 2024 - Present · 8 mos",
        location: "Navi Mumbai, Maharashtra, India · On-site",
        description: [
            "🚀 Developing scalable and responsive UIs using React.js",
            "📡 Integrating frontend with MongoDB and Node.js APIs",
            "🎨 Implementing user-friendly designs with Material-UI and CSS",
            "🛠 Optimizing component performance and debugging",
            "💡 Collaborating cross-functionally with product and backend teams"
        ],
        tech: ["React.js", "Node.js", "MongoDB", "Material-UI", "CSS3", "Git"]
    },
    {
        company: "GrayQuest",
        role: "Frontend Developer",
        type: "Internship",
        duration: "Mar 2024 - Jun 2024 · 4 mos",
        location: "Mumbai, Maharashtra, India · Hybrid",
        description: [
            "🔄 Built responsive pages with HTML, CSS, JS, and ReactJS",
            "🌐 Integrated REST APIs for dynamic data flow",
            "🛠️ Debugged code and optimized page load times",
            "📝 Participated in code reviews and clean code practices",
            "📱 Translated UI/UX designs into mobile-first components"
        ],
        tech: ["React.js", "JavaScript", "REST APIs", "HTML5", "CSS3"]
    }
];

const Experience = () => (
    <section
        id="experience"
        className="bg-gradient-to-br from-yellow-50 via-white to-yellow-100 py-20 px-6 text-black"
    >
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center relative inline-block after:block after:h-1 after:w-24 after:bg-yellow-500 after:mx-auto after:mt-2">
                Experience
            </h2>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <p className="text-sm text-gray-600">
                                    {exp.company} · {exp.type}
                                </p>
                            </div>
                            <div className="text-sm text-gray-500 mt-2 md:mt-0">
                                {exp.duration}
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">{exp.location}</p>

                        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                            {exp.description.map((line, i) => (
                                <li key={i}>{line}</li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-yellow-100 text-yellow-800 px-3 py-1 text-xs rounded-full font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;
