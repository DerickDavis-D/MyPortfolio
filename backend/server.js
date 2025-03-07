const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

// Enable CORS for React app running on port 3000
app.use(cors());

// Sample data for resume sections
const experience = [
    {
      id: 1,
      title: "Software Developer",
      company: "Tech Corp",
      duration: "2022-Present",
      responsibilities: [
        "Developed scalable web applications using React and Node.js.",
        "Collaborated with cross-functional teams to deliver high-quality software.",
        "Optimized application performance and reduced load times by 30%.",
      ],
      achievements: [
        "Led a team of 5 developers to deliver a major feature ahead of schedule.",
        "Implemented a CI/CD pipeline that reduced deployment time by 50%.",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
    },
    {
      id: 2,
      title: "Intern",
      company: "Startup Inc",
      duration: "2021-2022",
      responsibilities: [
        "Assisted in the development of a customer management system.",
        "Wrote unit tests to improve code coverage by 20%.",
        "Debugged and fixed critical production issues.",
      ],
      achievements: [
        "Reduced server response time by optimizing database queries.",
        "Received the 'Best Intern' award for outstanding performance.",
      ],
      technologies: ["JavaScript", "Express", "MySQL", "Git"],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Example",
      year: "2020-2024",
      gpa: "3.8/4.0",
      coursework: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Web Development",
        "Machine Learning",
      ],
      achievements: [
        "Dean's List for 4 consecutive semesters.",
        "Winner of the University Hackathon 2023.",
      ],
      extracurriculars: [
        "President of the Computer Science Club.",
        "Volunteer at local coding bootcamps.",
      ],
    },
    {
      id: 2,
      degree: "High School Diploma",
      institution: "Example High School",
      year: "2016-2020",
      gpa: "4.0/4.0",
      coursework: [
        "Advanced Mathematics",
        "Physics",
        "Computer Programming",
      ],
      achievements: [
        "Valedictorian of the graduating class.",
        "National Science Fair Winner.",
      ],
      extracurriculars: [
        "Captain of the Robotics Team.",
        "Member of the Debate Club.",
      ],
    },
  ];

const overview = {
  name: "John Doe",
  title: "Software Developer",
  description: "A passionate developer with expertise in modern web technologies.",
};

// Endpoints
app.get("/getEdu", (req, res) => {
  res.json(education);
});

app.get("/getExp", (req, res) => {
  res.json(experience);
});

app.get("/getOverview", (req, res) => {
  res.json(overview);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});