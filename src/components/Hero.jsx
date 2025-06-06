import styles from "../styles/componentStyles/hero.module.css";
import Links from "./AllLinks";
import MySkills from "./MySkills";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* Main Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.nameContainer}>
          <h1>Lifelong Learner, Problem Solver</h1>
          <h2>Full Stack Developer</h2>
        </div>

        <p className={styles.descriptionText}>
          I love learning new things, solving complex puzzles, and applying what
          I know to improve the world around me. Let's build something amazing
          together.
        </p>

        <div className={styles.socialLinks}>
          <Links />
        </div>

        {/* Call-to-Action Links */}
        <div className={styles.introLinks}>
          <a href="#projects" className={styles.primary}>
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
          <a href="#about" className={styles.secondary}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
      </section>
      {/* Skills Section
       <section className={styles.skills}>
        <h3>Technologies & Skills</h3>
        <MySkills />
      </section>

    
      <div className={styles.scrollIndicator}>
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
