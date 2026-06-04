import React from 'react';
import { Link } from 'react-router-dom';
import { Section, SectionHeading, Card, Badge } from '../components/ui';
import { blogPosts } from '../data/blog';

const Blog = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      {/* Blog Header */}
      <Section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-32 pb-16">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Technical Blog</h1>
          <p className="text-xl text-gray-300">
            Thoughts on test automation, backend development, and building reliable systems for fintech.
          </p>
        </div>
      </Section>

      {/* Featured Post */}
      <Section className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Post</h2>
          
          <Card className="border-2 border-teal-500 hover:shadow-xl">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{featuredPost.title}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="primary">{featuredPost.category}</Badge>
                  <Badge variant="neutral">{featuredPost.readTime}</Badge>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By <span className="font-semibold text-gray-700 dark:text-gray-200">{featuredPost.author}</span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{featuredPost.date}</p>
              </div>
              <Link to={`/blog/${featuredPost.slug}`}>
                <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition font-medium">
                  Read Article →
                </button>
              </Link>
            </div>
          </Card>
        </div>
      </Section>

      {/* All Posts */}
      <Section className="bg-slate-50 dark:bg-slate-800">
        <SectionHeading>All Articles</SectionHeading>

        <div className="max-w-4xl mx-auto space-y-6">
          {otherPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="block group">
              <Card className="hover:border-teal-500">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-500 transition">
                      {post.title}
                    </h3>
                  </div>
                  <Badge variant="neutral">{post.readTime}</Badge>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date} • {post.category}
                    </p>
                  </div>
                  <span className="text-teal-500 font-semibold group-hover:translate-x-2 transition inline-block">
                    Read More →
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Coming Soon */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            New posts coming soon
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'm writing about debugging strategies, backend architecture patterns, and lessons from building production-grade systems.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Blog;
