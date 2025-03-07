import React, { useEffect, useState } from "react";

const Education = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getEdu")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) => console.error("Error fetching education data:", error));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-white text-center mb-8 uppercase tracking-wide">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className="bg-gradient-to-r from-[#203a43] to-[#2c5364] text-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
            <p className="text-lg font-medium text-gray-300">{edu.institution}</p>
            <p className="text-sm text-gray-400">{edu.year}</p>
            <p className="text-sm text-gray-400">GPA: {edu.gpa}</p>

            {/* Coursework */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-white">Relevant Coursework:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {edu.coursework.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-white">Achievements:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {edu.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Extracurricular Activities */}
            <div className="mt-4">
              <h4 className="text-lg font-medium text-white">Extracurricular Activities:</h4>
              <ul className="list-disc list-inside text-gray-300">
                {edu.extracurriculars.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
