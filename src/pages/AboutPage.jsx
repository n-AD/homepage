import { useState } from "react";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../styles/pageStyles/aboutPage.module.css";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const experienceData = [
    {
      title: "Technical Support Specialist",
      company: "PayBright",
      period: "2024 - Present",
      type: "Support",
      description:
        "Provide inbound/outbound support for payment solutions, including technical troubleshooting, onboarding, and implementation walkthroughs.",
    },
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      period: "2022 - Present",
      type: "Development",
      description:
        "Building modern web applications with focus on user experience and performance optimization.",
    },
    {
      title: "Audio Production",
      company: "Contract",
      period: "2021 - Present",
      type: "Creative",
      description:
        "Deliver high quality vocal recordings for audiobooks and commercial projects.",
    },
    {
      title: "Personal Trainer",
      company: "Fitness Together",
      period: "2020 - 2023",
      type: "Health & Fitness",
      description:
        "Developed personalized fitness programs and built strong client relationships through results-driven coaching.",
    },
    {
      title: "Sales Development Representative",
      company: "IronNet",
      period: "2019 - 2020",
      type: "Technology Sales",
      description:
        "Generated qualified leads and managed client relationships in the cybersecurity technology sector.",
    },
    {
      title: "Program Coordinator",
      company: "HealthTrax",
      period: "2018 - 2019",
      type: "Program Management",
      description:
        "Coordinated wellness programs and managed operations to enhance member experience and engagement.",
    },
  ];

  const skillsData = {
    technical: [
      "JavaScript",
      "React",
      "Node.js",
      "HTML/CSS",
      "Git/GitHub",
      "Python",
      "SQL",
      "REST APIs",
      "MongoDB",
      "Express.js",
    ],
    tools: [
      "VS Code",
      "Figma",
      "Postman",
      "Docker",
      "AWS",
      "Notion",
      "Slack",
      "Jira",
      "Google Workspace",
      "Terminal",
    ],
    writing: [
      "Technical Documentation",
      "API Documentation",
      "User Guides",
      "Process Documentation",
      "Content Strategy",
      "UX Writing",
    ],
  };

  const booksData = [
    {
      title: "Don't Make Me Think",
      author: "Steve Krug",
      category: "UX/Design",
      description:
        "Essential principles of intuitive web usability and design.",
    },
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      category: "Development",
      description:
        "Timeless techniques for writing better, more maintainable code.",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Productivity",
      description: "Building systems for continuous learning and improvement.",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Development",
      description:
        "Best practices for writing readable, maintainable software.",
    },
    {
      title: "The Elements of Style",
      author: "Strunk & White",
      category: "Writing",
      description: "Fundamental principles of clear, effective writing.",
    },
    {
      title: "Made to Stick",
      author: "Chip Heath & Dan Heath",
      category: "Communication",
      description: "How to make ideas memorable and impactful.",
    },
  ];

  return (
    <article className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Technical Writer & Creative Problem Solver
            </h1>
          </div>
          <div className={styles.heroVisual}></div>
        </section>

        {/* Professional Summary */}
        <section id="summary" className={styles.summarySection}>
          <div className={styles.sectionHeader}>
            <h2>Professional Overview</h2>
            <div className={styles.ctaContainer}>
              <a
                href="/homepage/public/Resume_Nick_DenBleyker-5.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <FaDownload />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
          <div className={styles.summaryContent}>
            <p className={styles.summaryText}>
              I&apos;m a resourceful, technically skilled, and people-focused
              professional with a knack for mastering complex systems and
              turning knowledge into practical solutions.
            </p>
            <p className={styles.summaryText}>
              I specialize in crafting concise, actionable documentation for
              users, developers, and teams. I understand how to spot gaps,
              explain complex processes, and reduce friction. I create clean,
              no-fluff docs that help users help themselves, and help teams
              scale without burning out their help desks.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className={styles.experienceSection}>
          <div className={styles.sectionHeader}>
            <h2>Professional Experience</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.timeline}>
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`${styles.timelineItem} ${
                  activeSection === index ? styles.active : ""
                }`}
                onClick={() =>
                  setActiveSection(activeSection === index ? null : index)
                }
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <div className={styles.titleCompany}>
                      <h3>{exp.title}</h3>
                      <span className={styles.company}>{exp.company}</span>
                    </div>
                    <div className={styles.periodType}>
                      <span className={styles.period}>{exp.period}</span>
                      <span className={styles.type}>{exp.type}</span>
                    </div>
                  </div>
                  <p className={styles.timelineDescription}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.skillsSection}>
          <div className={styles.sectionHeader}>
            <h2>Skills & Learning</h2>
            <div className={styles.sectionLine}></div>
          </div>

          {/* Skills Grid */}
          <div className={styles.skillsContainer}>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h3>Technical Skills</h3>
                <div className={styles.skillTags}>
                  {skillsData.technical.map((skill, index) => (
                    <span key={index} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3>Tools & Platforms</h3>
                <div className={styles.skillTags}>
                  {skillsData.tools.map((tool, index) => (
                    <span key={index} className={styles.skillTag}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h3>Writing & Documentation</h3>
                <div className={styles.skillTags}>
                  {skillsData.writing.map((skill, index) => (
                    <span key={index} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Books Section */}
          <div className={styles.booksContainer}>
            <h3 className={styles.booksTitle}>Recent Reads</h3>
            <div className={styles.booksGrid}>
              {booksData.map((book, index) => (
                <div key={index} className={styles.bookCard}>
                  <div className={styles.bookHeader}>
                    <h4 className={styles.bookTitle}>{book.title}</h4>
                    <span className={styles.bookCategory}>{book.category}</span>
                  </div>
                  <p className={styles.bookAuthor}>by {book.author}</p>
                  <p className={styles.bookDescription}>{book.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Collaborate?</h2>
            <p>
              I&apos;m always interested in discussing new opportunities and
              innovative projects.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="/homepage/public/Resume_Nick_DenBleyker-5.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <FaDownload />
                <span>View Full Resume</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default AboutPage;
