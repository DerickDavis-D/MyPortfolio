import React, { useEffect, useState } from "react";

const Experience = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getExp")
      .then((response) => response.json())
      .then((data) => setExperienceData(data))
      .catch((error) => console.error("Error fetching experience data:", error));
  }, []);

  return (
    <section id="experience" className="container mx-auto px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-gradient mb-10">
        Experience
      </h2>
      <div className="space-y-8">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
            <p className="text-gray-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-500 italic">{exp.duration}</p>

            {/* Responsibilities */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-primary">Responsibilities:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-primary">Achievements:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-primary">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-[#203a43] to-[#2c5364] text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
