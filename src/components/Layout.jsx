import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' 
      ? localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
      : false
  );
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-md z-50 border-b border-slate-200 dark:border-slate-700">
          <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto w-full">
            {/* Logo */}
            <Link to="/" className="text-2xl md:text-3xl font-bold tracking-wide hover:opacity-80 transition">
              Lakshay<span className="text-teal-500">Pahuja</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition ${
                    isActive(link.path)
                      ? 'text-teal-500 font-semibold'
                      : 'hover:text-teal-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Theme Toggle + Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
                aria-label="Toggle theme"
              >
                {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-2xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-6 pb-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 transition ${
                    isActive(link.path)
                      ? 'text-teal-500 font-semibold'
                      : 'hover:text-teal-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 dark:bg-black text-gray-300 dark:text-gray-400 text-center py-8 mt-20 border-t border-slate-700 dark:border-slate-800">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Lakshay Pahuja. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Targeting fintech • Open to remote opportunities • IST Timezone
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
