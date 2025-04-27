
import React from "react";

const ProjectPage = () => {
  const projects = [
    {
      name: "Chat App",
      description: "Real-time messaging app built with MERN stack and Socket.IO.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      link: "https://linkly-qr3l.onrender.com",
    },
    {
      name: "Blog Website",
      description: "A platform for writing and sharing blog posts with full authentication and markdown support.",
      techStack: ["Next.js", "Node.js", "Express.js", "MongoDB"],
      link: "https://bclient.vercel.app/",
    },
    {
      name: "YouTube Clone",
      description: "A YouTube clone where users can upload, view, and like videos.",
      techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://your-youtube-link.com",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-white">
          {projects.map((project, index) => (
            <div key={index} className=" rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{project.name}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPage

