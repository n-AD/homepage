import { Link, useLocation, useNavigate } from "react-router-dom";
import FooterLinks from "../components/FooterLinks";
import styles from "../styles/componentStyles/footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation handler with scroll to top (same as Nav component)
  const handleNavigation = (path) => (e) => {
    e.preventDefault();

    // If we're already on the target page, just scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Otherwise, scroll to top and navigate
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      navigate(path);
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
              <Link to="/" onClick={handleNavigation("/")}>
                Home
              </Link>
              <Link to="/Posts" onClick={handleNavigation("/Posts")}>
                Posts
              </Link>
              <Link to="/Projects" onClick={handleNavigation("/Projects")}>
                Projects
              </Link>
              <Link to="/About" onClick={handleNavigation("/About")}>
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
