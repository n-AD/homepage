import styles from "../styles/componentStyles/hero.module.css";

import Links from "./AllLinks";
import MySkills from "./MySkills";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <section className={styles.introduction}>
        <div>
          <header className={styles.nameContainer}>
            <h1>
              Lifelong Learner, Problem Solver,
              <br />
              <div className={styles.introLinks}>
                Developer
                <Links />
              </div>
            </h1>
          </header>
        </div>
        <p className={styles.descriptionText}>
          I love learning new things, solving complex puzzles, and applying what
          I know to improve the world around me.
        </p>
      </section>

      <section className={styles.skills}>
        {/* <div>
          <header>
            <h2>My Skills</h2>
          </header>
          
        </div> */}
        <br></br>
      </section>
    </div>
  );
};

export default Hero;
