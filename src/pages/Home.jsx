import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { Section, SectionHeading, Button, Card, Badge, Tag } from '../components/ui';
import { projectsData } from '../data/projects';
import { skillsData, codingProfiles } from '../data/skills';
import { experienceData } from '../data/experience';

const Home = () => {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-black text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <Badge variant="success" className="mb-6">
              🚀 SDE-focused • Test Automation • Fintech Ready
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building reliable products for fintech with clean backend engineering
            </h1>
            
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Hi, I'm Lakshay Pahuja — an SDE-focused developer and EPAM Test Automation Intern. I build full-stack applications with React, Spring Boot 3, and MongoDB, and ensure quality with Selenium, TestNG, REST Assured, and BDD.
            </p>
            
            <p className="text-lg text-gray-400 mb-8">
              Targeting SDE roles in product-based companies with focus on fintech. Open to remote opportunities worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <Button size="lg">View Projects</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Get in Touch</Button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700 flex flex-wrap gap-4">
              <div>
                <p className="text-sm text-gray-400">Current Role</p>
                <p className="text-lg font-semibold text-teal-400">Test Automation Intern</p>
                <p className="text-sm text-gray-400">EPAM Systems</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location & Timezone</p>
                <p className="text-lg font-semibold text-teal-400">India (IST)</p>
                <p className="text-sm text-gray-400">Open to Remote Global</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Focus Area</p>
                <p className="text-lg font-semibold text-teal-400">Fintech SDE</p>
                <p className="text-sm text-gray-400">Backend + Quality</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Internship Highlight */}
      <Section className="bg-slate-50 dark:bg-slate-800">
        <SectionHeading>Current Experience</SectionHeading>
        
        <Card className="max-w-2xl mx-auto">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {experienceData.internship.title}
              </h3>
              <p className="text-lg text-teal-500 font-semibold">{experienceData.internship.company}</p>
            </div>
            <Badge variant="primary">{experienceData.internship.durationMonths} months</Badge>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {experienceData.internship.duration} • {experienceData.internship.location}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Responsibilities</h4>
            <ul className="space-y-2">
              {experienceData.internship.responsibilities.slice(0, 3).map((resp, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700 dark:text-gray-300">
                  <span className="text-teal-500 font-bold">✓</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-600 dark:text-gray-300 italic border-l-4 border-teal-500 pl-4 mb-4">
            {experienceData.internship.impact}
          </p>

          <div className="flex flex-wrap gap-2">
            {experienceData.internship.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>

          <Link to="/experience" className="mt-6 block">
            <Button variant="ghost" className="w-full md:w-auto">
              View Full Experience →
            </Button>
          </Link>
        </Card>
      </Section>

      {/* Skills Preview */}
      <Section>
        <SectionHeading>Tech Stack</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skillsData).slice(0, 3).map(([category, data]) => (
            <Card key={category}>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <Badge key={skill} variant="neutral">{skill}</Badge>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                Proficiency: <span className="font-semibold text-teal-500">{data.proficiency}</span>
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-slate-50 dark:bg-slate-800">
        <SectionHeading>Featured Projects</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredProjects.map((project) => (
            <Card key={project.id}>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex-1">{project.title}</h3>
                <Badge variant="success" size="sm">{project.status}</Badge>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 font-medium">
                  GitHub →
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 font-medium">
                  Live Demo →
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/projects">
            <Button size="lg" variant="outline">View All Projects</Button>
          </Link>
        </div>
      </Section>

      {/* Coding Profiles */}
      <Section>
        <SectionHeading>Coding Profiles & Problem Solving</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-6">
          {codingProfiles.map((profile) => (
            <a 
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="h-full hover:border-teal-500">
                <div className="text-4xl mb-3">
                  {profile.name === 'LeetCode' && <SiLeetcode className="text-orange-500" />}
                  {profile.name === 'Codolio' && <FaCode className="text-green-500" />}
                  {profile.name === 'GitHub' && <FaGithub className="text-gray-800 dark:text-white" />}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-teal-500">
                  {profile.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{profile.description}</p>
                <p className="text-teal-500 font-semibold mt-3 group-hover:translate-x-2 transition">
                  Visit Profile →
                </p>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to build something great?</h2>
          <p className="text-xl mb-8 text-teal-100">
            Let's connect! I'm actively seeking SDE roles in fintech and product companies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:lakshaypahuja777@gmail.com">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                Send Email
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-teal-700">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
