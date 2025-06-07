import { useNavigate } from "react-router-dom";
import styles from "../styles/componentStyles/hero.module.css";
import Links from "./AllLinks";
import MySkills from "./MySkills";

const Hero = () => {
  const navigate = useNavigate();

  const handleNavigateToProjects = (e) => {
    e.preventDefault();
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navigate after scroll completes
    setTimeout(() => {
      navigate("/projects");
    }, 100);
  };

  const handleNavigateToContact = (e) => {
    e.preventDefault();
    // Scroll to top first
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navigate after scroll completes
    setTimeout(() => {
      navigate("/about");
    }, 100);
  };

  const handleScrollClick = () => {
    const nextSection =
      document.querySelector("#projects") ||
      document.querySelector("main") ||
      document.querySelector('[data-section="projects"]');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.hero}>
      {/* Main Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.nameContainer}>
          {/* <h1>Read Less</h1> */}
          {/* <h1>Do More</h1> */}
          {/* <h1>Sharp Docs, Smooth Ops</h1> */}
          {/* <h1>Understand. Execute. Repeat.</h1> */}
          <h1>
            Open Docs,
            <br />
            Close Tickets
          </h1>
          {/* <h1>Read Less, Do More</h1> */}
          <h2>Cut Down Training Time</h2>
          <h2>Reduce Errors</h2>
          <h2>Scale your Team</h2>
          {/* Social Links */}
          <div className={styles.socialLinks}>
            <Links />
          </div>
        </div>
      </section>

      <p className={styles.descriptionText}>
        I specialize in technical documentation that empowers developers, teams,
        and end users. From API references and internal SOPs to onboarding
        guides and knowledge bases, I build systems that turn tribal knowledge
        into accessible tools.
      </p>

      {/* Call-to-Action Links */}
      <div className={styles.introLinks}>
        <a
          href="/projects"
          className={styles.primary}
          onClick={handleNavigateToProjects}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          View My Work
        </a>
        <a
          href="/about"
          className={styles.secondary}
          onClick={handleNavigateToContact}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          About Me
        </a>
      </div>

      {/* Skills Section */}
      {/* <section className={styles.skills}>
        <h3>Technologies & Skills</h3>
        <MySkills />
      </section> */}

      {/* Scroll Indicator */}
      {/* <div className={styles.scrollIndicator} onClick={handleScrollClick}>
        <span>Scroll to explore</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 13l3 3 3-3" />
          <path d="M7 6l3 3 3-3" />
        </svg>
      </div> */}
    </div>
  );
};

export default Hero;
