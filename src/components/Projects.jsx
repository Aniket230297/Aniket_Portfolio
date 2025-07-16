import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Crypto Tracker",
    duration: "Mar 2023 - Jun 2023",
    description:
      "Crypto Tracker is the tracker you always needed – view live graphs, prices, volume, market cap, and search from top 100 cryptocurrencies in real time.",
    tech: ["React.js", "Material-UI", "Chart.js", "Axios", "CSS3"],
    liveLink: "https://crypto-tracker-site.netlify.app/",
    githubLink: "https://github.com/aniket/crypto-tracker",
  },
  {
    title: "Personal Finance Tracker",
    duration: "Oct 2022 - Jan 2023",
    description:
      "Developed a robust personal finance tracker using React and Firebase with clean UI, secure authentication, and advanced features for budget and expense tracking.",
    tech: ["React.js", "Firebase", "TailwindCSS"],
    liveLink: "https://personal-fin-tracker.netlify.app/",
    githubLink: "https://github.com/aniket/finance-tracker",
  },
];

const Projects = () => (
  <section id="projects" className="bg-gray-100 py-20 px-6 text-black">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center relative inline-block after:block after:h-1 after:w-24 after:bg-yellow-500 after:mx-auto after:mt-2">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{project.duration}</p>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-700 px-3 py-1 text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mt-auto">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                <ExternalLink size={16} /> Live Site
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
