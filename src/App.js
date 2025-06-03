import logo from './logo.svg';
import './App.css';

import React from "react";

const styles = {
  nav: {
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  link: {
    marginLeft: "16px",
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
  },
  hero: {
    textAlign: "center",
    padding: "64px 16px",
    background: "linear-gradient(to right, #4f46e5, #9333ea)",
    color: "white",
  },
  section: {
    padding: "40px 16px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#333",
  },
  list: {
    paddingLeft: "20px",
  },
  footer: {
    textAlign: "center",
    padding: "24px",
    background: "#f3f4f6",
    marginTop: "32px",
  },
};

const Navbar = () => (
  <nav style={styles.nav}>
    <div style={{ fontWeight: "bold", fontSize: "20px", color: "#4f46e5" }}>Venkatramana</div>
    <div>
      <a href="#about" style={styles.link}>About</a>
      <a href="#skills" style={styles.link}>Skills</a>
      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#achievements" style={styles.link}>Achievements</a>
      <a href="#contact" style={styles.link}>Contact</a>
    </div>
  </nav>
);

const Hero = () => (
  <section style={styles.hero}>
    <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "12px" }}>Venkatramana G S</h1>
    <p style={{ fontSize: "20px" }}>Computer Science Student | Web Developer</p>
  </section>
);

const About = () => (
  <section id="about" style={styles.section}>
    <h2 style={styles.heading}>About Me</h2>
    <p>
      Enthusiastic and detail-oriented Computer Science undergraduate with a
      strong foundation in programming, data structures, algorithms, and software
      development. Proficient in Java, Python, C++, and JavaScript. Experienced in
      building web apps with React, Node.js, and MongoDB.
    </p>
  </section>
);

const Skills = () => (
  <section id="skills" style={styles.section}>
    <h2 style={styles.heading}>Tech Skills</h2>
    <ul style={styles.list}>
      <li>Java</li>
      <li>Python</li>
      <li>C, C++</li>
      <li>JavaScript</li>
      <li>React.js</li>
      <li>Node.js</li>
      <li>MongoDB</li>
      <li>HTML & CSS</li>
    </ul>
  </section>
);

const Projects = () => (
  <section id="projects" style={styles.section}>
    <h2 style={styles.heading}>Projects</h2>
    <ul style={styles.list}>
      <li><strong>Karate School Web Application:</strong> Full-stack app to manage schedules and events using React, Node.js, and MongoDB.</li>
      <li><strong>Tech Heaven Music App:</strong> Music streaming app built using React and Firebase.</li>
    </ul>
  </section>
);

const Achievements = () => (
  <section id="achievements" style={styles.section}>
    <h2 style={styles.heading}>Achievements & Competitions</h2>
    <ul style={styles.list}>
      <li>3rd Place – State-Level Karate Championship</li>
      <li>Presented at 7th International Conference (PECTEAM 2024)</li>
      <li>Global Atomic Quiz 2024 – Russian Center, Chennai</li>
      <li>Ideathon Participant – Panimalar Engineering College 2023</li>
    </ul>
  </section>
);

const Contact = () => (
  <section id="contact" style={{ ...styles.section, ...styles.footer }}>
    <h2 style={styles.heading}>Contact</h2>
    <p>Email: <a href="mailto:gsvenkatramana7@gmail.com" style={{ color: "#2563eb" }}>gsvenkatramana7@gmail.com</a></p>
    <p>Phone: +91 94983 93349</p>
    <p>LinkedIn: <a href="https://linkedin.com/in/venkatramana-g-s-479bb530a" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb" }}>venkatramana-g-s</a></p>
  </section>
);

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f9fafb", color: "#111827" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}


export default App;
