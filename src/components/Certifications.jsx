import React from "react";

const Certifications = () => {
  const certs = [
    {
      title: "Google Generative AI",
      issuer: "Google Cloud",
      link: "https://www.cloudskillsboost.google/public_profiles/635088bd-56a9-4599-bcf4-fd92a645ec85", // replace with actual link
      date: "2024",
    },
    {
      title: "Postman Student Expert",
      issuer: "Postman API",
      link: "https://api.badgr.io/public/assertions/gU0E4IUVQxGvlgPD6mIUMw?identity__email=lakshaypahuja777%40gmail.com", // replace with actual link
      date: "2024",
    },
  ];

  return (
    <section id="certifications" className="bg-slate-100 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">🎓 Certifications</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{cert.title}</h3>
            <p className="text-gray-600 mb-2">Issued by: <strong>{cert.issuer}</strong></p>
            <p className="text-gray-500 mb-4">Year: {cert.date}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
