import React from 'react';

const skills = {
  "Frontend": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  "Backend": ["Node.js", "Express.js"],
  "Database": ["MongoDB"],
  "Other Tools": ["Git", "GitHub", "Postman", "VS Code"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 underline">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <ul className="flex flex-wrap justify-center gap-4">
                {items.map(skill => (
                  <li key={skill} className="bg-slate-100 px-4 py-2 rounded shadow text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// import React from 'react';

// const Skills = () =>{
//     return(
//         <div className='bg-slate-200 text-gray-900 py-16'>
//             {/* C++ , Java , Javascript , React , SpringBoot , DSA , Frontend , Backend , Full Stack , Cloud  */}
//             <h1>Skills</h1>
//             <div>
//                 <h2>Technical Skills</h2>
//                 <ol>
//                     <li>HTML, CSS, JavaScript</li>
//                     <li>React.js, Tailwind CSS</li>
//                     <li>Node.js, Express.js</li>
//                     <li>MongoDB / Firebase</li>
//                     <li>Git & GitHub</li>
//                     <li>REST APIs</li>
//                     <li>C++ / Java (DSA)</li>
//                 </ol>
//             </div>
//             <div>
//                 <h2>Technical Skills</h2>
//                 <ol>
//                     <li>HTML, CSS, JavaScript</li>
//                     <li>React.js, Tailwind CSS</li>
//                     <li>Node.js, Express.js</li>
//                     <li>MongoDB / Firebase</li>
//                     <li>Git & GitHub</li>
//                     <li>REST APIs</li>
//                     <li>C++ / Java (DSA)</li>
//                 </ol>
//             </div>

//         </div>
//     );
// }

// export default Skills;