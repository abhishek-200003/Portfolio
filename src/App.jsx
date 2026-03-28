import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
  VscClose,
  VscChromeMinimize,
  VscChromeRestore,
  VscCheck,
  VscWarning,
  VscError,
  VscBell,
  VscRemote,
} from "react-icons/vsc";
import { DiReact, DiCss3 } from "react-icons/di";
import { motion } from "framer-motion";
import "./App.css";

/* ─── VSCode card: GitHub Dark Pitch Black color tokens ── */
const C = {
  base: "#0d1117",
  mantle: "#010409",
  surface0: "#30363d",
  overlay1: "#8b949e",
  text: "#c9d1d9",
  mauve: "#ff7b72",
  red: "#f85149",
  peach: "#ffa657",
  green: "#a5d6ff",
  sky: "#79c0ff",
  blue: "#58a6ff",
  yellow: "#d29922",
  statusBg: "#21262d",
  statusTxt: "#8b949e",
};

/* ─── UPDATED VSCode card: component ────────────────────────── */
function VSCodeCard() {
  const [activeTab, setActiveTab] = useState("Portfolio.jsx");
  const tabs = ["Portfolio.jsx", "App.css"];

  const fileIcon = (name) => {
    if (name.endsWith(".jsx"))
      return <DiReact style={{ color: "#58a6ff", fontSize: 16 }} />;
    if (name.endsWith(".css"))
      return <DiCss3 style={{ color: "#79c0ff", fontSize: 16 }} />;
    return null;
  };

  return (
    <div
      className="vsc-card"
      style={{
        width: "100%",
        maxWidth: 640,
        background: C.base,
        color: C.text,
        fontSize: 13,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
        fontFamily: "'Cascadia Code','Fira Code','Consolas',monospace",
        border: `1px solid ${C.surface0}`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Title Bar ── */}
      <div
        style={{
          background: C.mantle,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          userSelect: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ff5f56",
              }}
            />
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ffbd2e",
              }}
            />
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#27c93f",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              fontSize: 12,
              color: C.overlay1,
            }}
          >
            <span>File</span>
            <span>Edit</span>
            <span>Selection</span>
            <span>Help</span>
          </div>
        </div>

        <span style={{ fontSize: 11, color: C.overlay1 }}>
          Portfolio — Visual Studio Code
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: C.overlay1,
          }}
        >
          <VscChromeMinimize />
          <VscChromeRestore />
          <VscClose />
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Activity Bar */}
        <div
          style={{
            width: 48,
            background: C.mantle,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 0",
            borderRight: `1px solid ${C.surface0}`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              color: C.overlay1,
              fontSize: 22,
            }}
          >
            <VscFiles style={{ color: "#fff" }} />
            <VscSearch />
            <VscSourceControl />
            <VscDebugAlt />
            <VscExtensions />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              color: C.overlay1,
              fontSize: 22,
            }}
          >
            <VscAccount />
            <VscSettingsGear />
          </div>
        </div>

        {/* Editor Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Tab bar */}
          <div style={{ display: "flex", background: C.mantle }}>
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "8px 16px",
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  background: tab === activeTab ? C.base : "#161b22",
                  color: tab === activeTab ? "#fff" : C.overlay1,
                  borderRight: `1px solid ${C.surface0}`,
                  borderTop:
                    tab === activeTab
                      ? "1px solid #f78166"
                      : "1px solid transparent",
                }}
              >
                {fileIcon(tab)}
                {tab}
                <VscClose style={{ fontSize: 14, marginLeft: 4 }} />
              </div>
            ))}
          </div>

          {/* Code content */}
          <div
            style={{
              padding: "20px",
              lineHeight: "1.6",
              background: C.base,
              flex: 1,
              display: "flex",
              gap: "20px",
            }}
          >
            <div
              style={{
                color: "#484f58",
                textAlign: "right",
                userSelect: "none",
                fontSize: 13,
              }}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div style={{ color: C.text, fontSize: 14 }}>
              {activeTab === "Portfolio.jsx" ? (
                <pre style={{ margin: 0, fontFamily: "inherit" }}>
                  <span style={{ color: C.mauve }}>const</span>{" "}
                  <span style={{ color: C.blue }}>developer</span> = {"{"} <br />
                  &nbsp;&nbsp;<span style={{ color: C.blue }}>name</span>:{" "}
                  <span style={{ color: C.green }}>'Abhishek S'</span>,<br />
                  &nbsp;&nbsp;<span style={{ color: C.blue }}>role</span>:{" "}
                  <span style={{ color: C.green }}>'Data Scientist'</span>,<br />
                  &nbsp;&nbsp;<span style={{ color: C.blue }}>skills</span>: [
                  <span style={{ color: C.green }}>'Python'</span>,{" "}
                  <span style={{ color: C.green }}>'SQL'</span>,{" "}
                  <span style={{ color: C.green }}>'ML'</span>],<br />
                  &nbsp;&nbsp;<span style={{ color: C.blue }}>motto</span>:{" "}
                  <span style={{ color: C.green }}>'Build. Scale. Repeat.'</span>
                  <br />
                  {"}"};
                </pre>
              ) : (
                <div style={{ color: C.overlay1, fontStyle: "italic" }}>
                  {"/* App.css styles applied here */"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Status Bar ── */}
      <div
        style={{
          background: C.statusBg,
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2px 12px",
          fontSize: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              background: "#238636",
              padding: "0 8px",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <VscRemote /> main*
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <VscError />
            <span>0</span>
            <VscWarning />
            <span>0</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span>Ln 1, Col 1</span>
          <span>UTF-8</span>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <VscCheck />
            <span>Prettier</span>
          </div>
          <VscBell />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
    UPDATED SKILLS USING PNG IMAGES
═══════════════════════════════════════════════════════════════ */

const socialLinks = {
  github: "https://github.com/abhishek-200003",
  linkedin: "https://www.linkedin.com/in/abhishek-s2003",
  email: "mailto:abhisheks200327@gmail.com",
  resume:"/public/resume/resume.pdf",
};

const skills = [
  { name: "Python", image: "/images/skills/python.png" },
  { name: "MySQL", image: "/images/skills/mysql.png" },
  { name: "Pandas", image: "/images/skills/pandas.png" },
  { name: "NumPy", image: "/images/skills/numpy.png" },
  { name: "Matplotlib", image: "/images/skills/matplotlib.png" },
  { name: "Seaborn", image: "/images/skills/seaborns.png" },
  { name: "NLP", image: "/images/skills/nlp.png" },
  { name: "Power BI", image: "/images/skills/powerbi.png" },
  { name: "Machine Learning", image: "/images/skills/ml.png" },
  { name: "Deep Learning", image: "/images/skills/dl.png" },
  { name: "Streamlit", image: "/images/skills/streamlit.png" },
  { name: "Git", image: "/images/skills/git.png" },
  { name: "GitHub", image: "/images/skills/github.png" },
  { name: "HTML5", image: "/images/skills/html.png" },
  { name: "CSS3", image: "/images/skills/css.png" },
  { name: "JavaScript", image: "/images/skills/javascript.png" },
  { name: "React JS", image: "/images/skills/reactjs.png" },
];

const projects = [
  {
    title: "EV Charging Network Intelligence Dashboard",
    description:
      "An interactive Power BI dashboard built to analyze EV charging network performance, utilization, revenue, city-level demand, operator insights, and time-based trends.",
    tags: ["Power BI", "Data Analytics", "Dashboard"],
    images: ["/images/ev1.png", "/images/ev2.png", "/images/ev3.png"],
    github: "#",
    live: "#",
  },
  {
    title: "Early Employee Attrition Prediction",
    description:
      "A machine learning project to identify employees at risk of leaving early by analyzing workforce patterns and predictive HR features.",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Streamlit"],
    images: ["/images/attrition1.png", "/images/attrition2.png"],
    github: "https://github.com/abhishek-200003/HR-analytics",
    live: "https://employee-attrition-risk.streamlit.app/",
  },
  {
    title: "AI Based Attendance System",
    description:
      "An AI-powered attendance tracking system using intelligent recognition and automation concepts for efficient attendance management.",
    tags: ["Python", "AI", "Computer Vision", "Face Recognition"],
    images: ["/images/attendance1.png", "/images/attendance2.png"],
    github:
      "https://github.com/abhishek-200003/AI-Based-Real-Time-Face-Recognition-Attendance-System",
    live:
      "https://github.com/abhishek-200003/AI-Based-Real-Time-Face-Recognition-Attendance-System",
  },
];

function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function SkillCard({ skill, index }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <div className="skill-icon">
        <img
          src={skill.image}
          alt={skill.name}
          className="skill-image"
        />
      </div>
      <span>{skill.name}</span>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!project.images || project.images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % project.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image-wrap">
        <img
          src={project.images[current]}
          alt={project.title}
          className="project-image"
        />
        <div className="slider-dots">
          {project.images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>

        <div className="project-buttons">
          <a href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={project.live} target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">AS</div>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      <main className="main-container">
        {/* HERO */}
        <section className="hero" id="about">
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <video autoPlay loop muted playsInline className="hero-video">
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay" />
          </motion.div>

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-intro">Hello, I'm</p>
            <h1>Abhishek S</h1>
            <h2>Aspiring Data Scientist & Software Developer</h2>

            <p className="hero-description">
              I build practical projects in data, machine learning, dashboards,
              and software systems with a strong focus on real-world problem solving.
            </p>

            <div className="hero-socials">
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href={socialLinks.email}>
                <FaEnvelope />
              </a>
            </div>

            <div className="hero-buttons">
              <a
            href={socialLinks.resume}
            target="_blank"
            rel="noreferrer"
            className="primary-btn"
              >View Resume</a>
              <a href="#projects" className="secondary-btn">
                View Projects
              </a>
            </div>

            <a href="#skills" className="scroll-down">
              <FaArrowDown />
            </a>
          </motion.div>
        </section>

        {/* ABOUT */}
        <section className="about-section">
          <SectionTitle
            title="About Me"
            subtitle="A focused learner building practical projects in data, analytics, machine learning, and software."
          />

          <div className="about-grid items-start">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-slate-300 leading-relaxed">
                I am a passionate <span className="text-blue-400">Data Science learner</span> with a strong interest in analytics, machine learning, and solving real-world problems through data.
                <br /><br />
                I completed my <span className="text-blue-400">Bachelor of Technology in Computer Science</span> and continuously improve my skills by building practical projects in data science, dashboards, and software development.
                <br /><br />
                I enjoy working with <span className="text-orange-400">Python, SQL, Power BI</span>, and machine learning concepts while exploring ways to turn data into meaningful insights.
              </p>
            </motion.div>

            <motion.div
              className="about-code-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <VSCodeCard />
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <SectionTitle title="Skills" />
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <SectionTitle title="Projects" />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <SectionTitle title="Contact" />
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              If you'd like to collaborate, discuss projects, or connect professionally,
              feel free to reach out.
            </p>

            <div className="contact-buttons">
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={socialLinks.email}>Email Me</a>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}