import React from 'react';
import { Section, SectionHeading, Card, Badge, Tag } from '../components/ui';
import { experienceData, educationData } from '../data/experience';

const Experience = () => {
  const exp = experienceData.internship;
  const edu = educationData.degree;

  return (
    <>
      {/* Internship Section */}
      <Section className="pt-32">
        <SectionHeading>Professional Experience</SectionHeading>

        <Card className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{exp.title}</h2>
              <p className="text-xl text-teal-500 font-semibold mt-1">{exp.company}</p>
            </div>
            <div className="text-right">
              <Badge variant="primary" size="lg">{exp.durationMonths} months</Badge>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.duration}</p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">📍 {exp.location}</p>

          {/* Responsibilities */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Responsibilities</h3>
            <ul className="space-y-3">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="text-teal-500 font-bold text-xl flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 p-4 rounded mb-8">
            <p className="text-gray-800 dark:text-gray-200 text-lg font-medium">
              💡 {exp.impact}
            </p>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {exp.tools.map((tool) => (
                <Badge key={tool} variant="neutral">{tool}</Badge>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Learnings</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {exp.keyLearnings.map((learning, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-teal-500">→</span>
                  <span className="text-gray-700 dark:text-gray-300">{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills Developed */}
          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Skills Developed</h3>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <Badge key={skill} variant="primary">{skill}</Badge>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* Education Section */}
      <Section className="bg-slate-50 dark:bg-slate-800">
        <SectionHeading>Education</SectionHeading>

        <Card className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{edu.program}</h2>
            <p className="text-xl text-teal-500 font-semibold mt-2">{edu.school}</p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Expected Graduation: <span className="font-semibold">{edu.expectedGraduation}</span>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Relevant Coursework</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {edu.relevantCoursework.map((course) => (
                <div key={course} className="flex gap-2 items-start">
                  <span className="text-teal-500 font-bold mt-1">•</span>
                  <span className="text-gray-700 dark:text-gray-300">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* Career Goals */}
      <Section>
        <SectionHeading>Career Focus</SectionHeading>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🎯 Target Role</h3>
            <p className="text-gray-700 dark:text-gray-300">SDE focused on backend and full-stack development with strong quality engineering mindset.</p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🏢 Target Industry</h3>
            <p className="text-gray-700 dark:text-gray-300">Product-based companies, especially fintech, with emphasis on reliability and security.</p>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">🌍 Work Mode</h3>
            <p className="text-gray-700 dark:text-gray-300">Remote and global opportunities. Comfortable working across timezones (IST based).</p>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default Experience;
