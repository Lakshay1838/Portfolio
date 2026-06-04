import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-medium rounded-lg transition duration-200 flex items-center justify-center gap-2 btn-base btn-hover';
  
  const variants = {
    primary: 'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700',
    secondary: 'bg-slate-200 text-gray-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600',
    outline: 'border-2 border-teal-500 text-teal-500 hover:bg-teal-50 dark:hover:bg-slate-800',
    ghost: 'text-teal-500 hover:bg-teal-50 dark:text-teal-400 dark:hover:bg-slate-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div 
      className={`bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md dark:shadow-lg card-reveal ${
        hover ? 'hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300' : ''
      } border border-slate-200 dark:border-slate-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const Section = ({ children, className = '', ...props }) => {
  return (
    <section 
      className={`py-16 px-6 md:px-12 lg:px-20 transition-all duration-500 ${className}`}
      {...props}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const SectionHeading = ({ children, subtitle = '', className = '' }) => {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 inline-block border-b-4 border-teal-500 pb-2 animate-fade-in-up">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto animate-fade-in-up animate-stagger-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const Badge = ({ children, variant = 'primary', size = 'md', className = '' }) => {
  const baseStyles = 'font-medium rounded-full inline-block';
  
  const variants = {
    primary: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100',
    success: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    neutral: 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

export const Tag = ({ children, className = '' }) => {
  return (
    <span className={`inline-block bg-slate-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${className}`}>
      {children}
    </span>
  );
};
