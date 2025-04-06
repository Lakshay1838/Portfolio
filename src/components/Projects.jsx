import React from 'react';

const projects = [
  {
    title: "FixMate",
    description: "A platform that connects customers with local electricians, plumbers, and carpenters.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    live: "#", // Replace with actual link if available
    github: "https://github.com/Lakshay1838/Fix-Me.git"
  },
  {
    title: "Easy To Learn",
    description: "An educational site designed for students to access class-wise study materials easily.",
    techStack: ["React", "Tailwind CSS"],
    live: "https://lakshay1838.github.io/Easy-to-Learn/", // Replace with actual link if available
    github: "https://github.com/Lakshay1838/Easy-to-Learn.git"
  },
//   {
//     title: "Portfolio Website",
//     description: "My personal portfolio website built with React and Tailwind CSS.",
//     techStack: ["React", "Tailwind CSS"],
//     live: "#",
//     github: "https://github.com/yourusername/portfolio"
//   }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-slate-100 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 underline">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="mb-2"><strong>Tech Used:</strong> {project.techStack.join(", ")}</p>
              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-gray-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
