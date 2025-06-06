import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/componentStyles/nav.module.css";
import logo from "../assets/images/audiodidacts-logo.png";

const Nav = () => {
  const location = useLocation();
  const Paths = ["/Posts", "/Projects", "/About"];
  const isActive = Paths.some((path) => location.pathname.startsWith(path));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${isActive ? styles.sticky : ""}`}>
  <nav className={styles.headerLinksContainer}>
    <div className={styles.navRoot}>
      <NavLink to="/" className={styles.rootLink} onClick={closeMenu}>
        <img src={logo} alt="Logo" className={styles.logo} />
        Nick DenBleyker
      </NavLink>
    </div>

    <div className={styles.navLinks}>
      <NavLink to="/Posts" className={styles.navLink}>Posts</NavLink>
      <NavLink to="/Projects" className={styles.navLink}>Projects</NavLink>
      <NavLink to="/About" className={styles.navLink}>About</NavLink>
    </div>

    <div
      className={`${styles.hamburger} ${
        isMenuOpen ? styles.open : ""
      }`}
      onClick={toggleMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>

  {/* Move this outside of headerLinksContainer */}
  {isMenuOpen && (
    <div className={styles.mobileNav}>
      <NavLink to="/Posts" className={styles.navLink} onClick={closeMenu}>Posts</NavLink>
      <NavLink to="/Projects" className={styles.navLink} onClick={closeMenu}>Projects</NavLink>
      <NavLink to="/About" className={styles.navLink} onClick={closeMenu}>About</NavLink>
    </div>
  )}
</header>

  ); 
};

export default Nav;
