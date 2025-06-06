import { useState } from "react";
import {
  FaDownload,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaMusic,
  FaDumbbell,
  FaChartLine,
  FaUsers,
  FaCalculator,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import resume from "../assets/images/resume.png";
import styles from "../styles/pageStyles/aboutPage.module.css";

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "JavaScript", "CSS", "HTML", "Responsive Design"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "API Development", "Database Management"],
    },
    {
      category: "Tools",
      skills: ["Git", "VS Code", "Audio Production", "Project Management"],
    },
    {
      category: "Soft Skills",
      skills: [
        "Communication",
        "Problem Solving",
        "Team Leadership",
        "Client Relations",
      ],
    },
  ];

  const experienceData = [
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      period: "2022 - Present",
      type: "Development",
      icon: <FaCode />,
      description:
        "Building modern web applications with focus on user experience and performance optimization.",
    },
    {
      title: "Audio Production Specialist",
      company: "Freelance",
      period: "2021 - Present",
      type: "Creative",
      icon: <FaMusic />,
      description:
        "Delivering high-quality audio solutions for diverse client needs and creative projects.",
    },
    {
      title: "Personal Trainer",
      company: "Fitness Together",
      period: "2020 - 2023",
      type: "Health & Fitness",
      icon: <FaDumbbell />,
      description:
        "Developed personalized fitness programs and built strong client relationships through results-driven coaching.",
    },
    {
      title: "Sales Development Representative",
      company: "IronNet",
      period: "2019 - 2020",
      type: "Technology Sales",
      icon: <FaChartLine />,
      description:
        "Generated qualified leads and managed client relationships in the cybersecurity technology sector.",
    },
    {
      title: "Program Coordinator",
      company: "HealthTrax",
      period: "2018 - 2019",
      type: "Program Management",
      icon: <FaUsers />,
      description:
        "Coordinated wellness programs and managed operations to enhance member experience and engagement.",
    },
    {
      title: "Assistant Store Accountant",
      company: "Harris Teeter",
      period: "2017 - 2018",
      type: "Finance",
      icon: <FaCalculator />,
      description:
        "Managed financial operations and inventory systems with attention to accuracy and efficiency.",
    },
  ];

  const educationData = [
    {
      institution: "Appalachian State University",
      degree: "Bachelor of Science",
      field: "Health and Fitness",
      icon: <FaGraduationCap />,
      description:
        "Comprehensive study in health sciences, exercise physiology, and wellness program development.",
    },
    {
      institution: "The Odin Project",
      degree: "Full Stack Web Development",
      field: "Self-Directed Learning",
      icon: <FaCode />,
      description:
        "Intensive curriculum covering modern web development technologies and best practices.",
      link: "/Posts/the-top-experience",
      linkText: "Read about my TOP experience",
    },
    {
      institution: "CompTIA A+",
      degree: "IT Fundamentals Certification",
      field: "Hardware & Software",
      icon: <FaCode />,
      description:
        "Comprehensive understanding of computer hardware, software, and troubleshooting methodologies.",
    },
    {
      institution: "freeCodeCamp",
      degree: "Web Development Curriculum",
      field: "Continuous Learning",
      icon: <FaCode />,
      description:
        "Ongoing education through hands-on projects and comprehensive programming challenges.",
    },
  ];

  return (
    <article className={styles.aboutContainer}>
      <div className={styles.aboutWrapper}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Full Stack Developer & Creative Problem Solver
            </h1>
            <p className={styles.heroSubtitle}>
              Transforming ideas into digital experiences through code,
              creativity, and strategic thinking.
            </p>
            <div className={styles.ctaContainer}>
              <a
                href="/homepage/public/Resume_Nick_DenBleyker-4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <FaDownload />
                <span>Download Resume</span>
              </a>
              {/* <button 
                className={styles.ctaButtonSecondary}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Let's Connect</span>
                <FaArrowRight />
              </button> */}
            </div>
          </div>
          <div className={styles.heroVisual}>
            {/* <div className={styles.resumePreview}>
              <img src={resume} alt="Resume Preview" className={styles.resumeImage} />
              <div className={styles.resumeOverlay}>
                <FaExternalLinkAlt />
              </div>
            </div> */}
          </div>
        </section>

        {/* Professional Summary */}
        <section id="summary" className={styles.summarySection}>
          <div className={styles.sectionHeader}>
            <h2>Professional Overview</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.summaryContent}>
            <p className={styles.summaryText}>
              I'm a versatile full stack developer with a unique background
              spanning technology, healthcare, and creative industries. My
              diverse experience has shaped me into a well-rounded professional
              who approaches challenges with both technical expertise and
              human-centered thinking.
            </p>
            <p className={styles.summaryText}>
              I specialize in building modern web applications that prioritize
              performance, accessibility, and user experience. My passion for
              continuous learning drives me to stay current with emerging
              technologies while maintaining a strong foundation in proven
              methodologies.
            </p>
          </div>
        </section>

        {/* Skills Grid */}
        <section className={styles.skillsSection}>
          <div className={styles.sectionHeader}>
            <h2>Core Competencies</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.skillsGrid}>
            {skillsData.map((skillGroup, index) => (
              <div key={index} className={styles.skillCard}>
                <h3 className={styles.skillCategory}>{skillGroup.category}</h3>
                <div className={styles.skillTags}>
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
                <div className={styles.timelineIcon}>{exp.icon}</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3>{exp.title}</h3>
                    <span className={styles.timelinePeriod}>{exp.period}</span>
                  </div>
                  <p className={styles.timelineCompany}>
                    {exp.company} • {exp.type}
                  </p>
                  <p className={styles.timelineDescription}>
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className={styles.educationSection}>
          <div className={styles.sectionHeader}>
            <h2>Education & Certifications</h2>
            <div className={styles.sectionLine}></div>
          </div>
          <div className={styles.educationGrid}>
            {educationData.map((edu, index) => (
              <div key={index} className={styles.educationCard}>
                <div className={styles.educationIcon}>{edu.icon}</div>
                <div className={styles.educationContent}>
                  <h3>{edu.degree}</h3>
                  <p className={styles.educationInstitution}>
                    {edu.institution}
                  </p>
                  <p className={styles.educationField}>{edu.field}</p>
                  <p className={styles.educationDescription}>
                    {edu.description}
                  </p>
                  {edu.link && (
                    <Link to={edu.link} className={styles.educationLink}>
                      {edu.linkText} <FaArrowRight />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Ready to Collaborate?</h2>
            <p>
              I'm always interested in discussing new opportunities and
              innovative projects.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="/homepage/public/Resume_Nick_DenBleyker-4.pdf"
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
