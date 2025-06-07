import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import FooterLinks from "../components/FooterLinks";
import styles from "../styles/componentStyles/footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLeft}>
            <h3>Nick DenBleyker</h3>
            <p>Thanks for stopping by!</p>
          </div>

          <div className={styles.footerCenter}>
            <div className={styles.footerLinks}>
              <Link to="/Posts" onClick={scrollToTop}>
                Posts
              </Link>
              <Link to="/Projects" onClick={scrollToTop}>
                Projects
              </Link>
              <Link to="/About" onClick={scrollToTop}>
                About Me
              </Link>
            </div>
          </div>

          <div className={styles.footerRight}>
            <FooterLinks />
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} Nick DenBleyker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
