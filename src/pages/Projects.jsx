import React, { useState } from 'react';
import { Section, SectionHeading, Card, Badge, Tag, Button } from '../components/ui';
import { projectsData } from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.status.toLowerCase() === filter.toLowerCase());

  return (
    <>
      {/* Projects Header */}
      <Section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-32 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Projects & Portfolio</h1>
          <p className="text-xl text-gray-300">
            A collection of full-stack projects demonstrating backend reliability, test automation, and fintech-ready architecture.
          </p>
        </div>
      </Section>

      {/* Filter Section */}
      <Section className="py-8">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
          <Button
            variant={filter === 'in progress' ? 'primary' : 'secondary'}
            onClick={() => setFilter('in progress')}
          >
            In Progress
          </Button>
          <Button
            variant={filter === 'live' ? 'primary' : 'secondary'}
            onClick={() => setFilter('live')}
          >
            Live
          </Button>
        </div>
      </Section>

      {/* Projects Grid */}
      <Section className="bg-slate-50 dark:bg-slate-800 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">ID: {project.id}</p>
                </div>
                <Badge variant={project.status === 'In Progress' ? 'warning' : 'success'}>
                  {project.status}
                </Badge>
              </div>

              {/* Problem & Solution */}
              <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Problem</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{project.problem}</p>

                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Solution</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.solution}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Engineering Focus</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-teal-500">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fintech Focus */}
              <div className="mb-4 p-3 bg-teal-50 dark:bg-teal-900/20 rounded border-l-4 border-teal-500">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1">Fintech Relevance</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{project.fintech_focus}</p>
              </div>

              {/* Metrics */}
              <div className="mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase mb-1">Key Metric</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{project.metrics}</p>
              </div>

              {/* Links */}
              <div className="flex gap-3 flex-wrap mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    GitHub
                  </Button>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button size="sm" className="w-full">
                    Live Demo
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">More projects coming soon</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm actively building new projects to strengthen my portfolio. Check back soon for live deployments and additional portfolio work.
        </p>
        <a href="https://github.com/Lakshay1838" target="_blank" rel="noopener noreferrer">
          <Button size="lg">View GitHub Profile</Button>
        </a>
      </Section>
    </>
  );
};

export default Projects;
