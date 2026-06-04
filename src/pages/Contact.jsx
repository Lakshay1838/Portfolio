import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { Section, SectionHeading, Card, Button } from '../components/ui';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'lakshaypahuja777@gmail.com',
      href: 'mailto:lakshaypahuja777@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91-9817156085',
      href: 'tel:+919817156085',
      color: 'text-green-500',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'lakshay-pahuja',
      href: 'https://www.linkedin.com/in/lakshay-pahuja-099a6924b/',
      color: 'text-blue-700',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Lakshay1838',
      href: 'https://github.com/Lakshay1838',
      color: 'text-gray-800 dark:text-white',
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      value: 'lakshay_pahuja',
      href: 'https://leetcode.com/lakshay_pahuja',
      color: 'text-orange-500',
    },
    {
      icon: SiGeeksforgeeks,
      label: 'GeeksForGeeks',
      value: 'lakshaypa79tq',
      href: 'https://www.geeksforgeeks.org/user/lakshaypa79tq/',
      color: 'text-green-600',
    },
  ];

  const socialLinksRelevant = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lakshay-pahuja-099a6924b/',
      description: 'Professional network and career updates'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Lakshay1838',
      description: 'Source code and project repositories'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/lakshay_pahuja',
      description: 'DSA problem solving and coding profile'
    },
  ];

  return (
    <>
      {/* Contact Header */}
      <Section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-32 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
          <p className="text-xl text-gray-300">
            I'm actively seeking SDE roles in product-based companies, especially fintech. Open to remote opportunities worldwide.
          </p>
        </div>
      </Section>

      {/* Quick Contact CTA */}
      <Section className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Whether you have an opportunity, a question, or just want to chat about tech—I'd love to hear from you!
          </p>
          
          <a href="mailto:lakshaypahuja777@gmail.com" className="inline-block mb-12">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              📧 Send Email Now
            </Button>
          </a>

          <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
            <p className="text-gray-700 dark:text-gray-300">
              ⏱️ <span className="font-semibold">Response time:</span> Usually reply within 24 hours
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              🕐 <span className="font-semibold">Timezone:</span> IST (UTC +5:30)
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              🌍 <span className="font-semibold">Availability:</span> Open to remote global opportunities
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Methods Grid */}
      <Section className="bg-slate-50 dark:bg-slate-800 py-16">
        <SectionHeading>Contact Methods</SectionHeading>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.slice(0, 2).map((info, idx) => {
            const Icon = info.icon;
            return (
              <a 
                key={idx}
                href={info.href}
                target={info.label !== 'Email' && info.label !== 'Phone' ? '_blank' : '_self'}
                rel={info.label !== 'Email' && info.label !== 'Phone' ? 'noopener noreferrer' : ''}
                className="block group"
              >
                <Card className="h-full flex flex-col items-center text-center hover:border-teal-500">
                  <Icon className={`text-5xl mb-4 ${info.color}`} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-500">
                    {info.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
                    {info.value}
                  </p>
                  <p className="text-teal-500 font-semibold mt-4 group-hover:translate-y-1 transition">
                    {info.label === 'Email' ? 'Send Email' : info.label === 'Phone' ? 'Call Me' : 'Visit'}
                  </p>
                </Card>
              </a>
            );
          })}
        </div>
      </Section>

      {/* Social Profiles */}
      <Section className="py-16">
        <SectionHeading>Social & Coding Profiles</SectionHeading>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.slice(2).map((info, idx) => {
            const Icon = info.icon;
            return (
              <a 
                key={idx}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="h-full flex flex-col items-center text-center hover:border-teal-500">
                  <Icon className={`text-4xl mb-3 ${info.color}`} />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-500">
                    {info.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-xs mb-3 flex-grow">
                    @{info.value}
                  </p>
                  <p className="text-teal-500 font-semibold group-hover:translate-y-1 transition">
                    Visit →
                  </p>
                </Card>
              </a>
            );
          })}
        </div>
      </Section>

      {/* Featured Profiles */}
      <Section className="bg-slate-50 dark:bg-slate-800 py-16">
        <SectionHeading>Featured Profiles</SectionHeading>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinksRelevant.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="h-full hover:border-teal-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-teal-500">
                  {link.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                  {link.description}
                </p>
                <p className="text-teal-500 font-semibold group-hover:translate-x-1 transition inline-block">
                  Visit Profile →
                </p>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* CTA Footer */}
      <Section className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Looking forward to connecting!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Whether it's a job opportunity, project collaboration, or just technical discussion—I'm always open to conversations.
        </p>
      </Section>
    </>
  );
};

export default Contact;
