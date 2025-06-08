import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle"; // Add this import
import styles from "../styles/componentStyles/nav.module.css";
import logo from "../assets/images/audiodidacts-logo.png";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const Paths = ["/", "/Posts", "/Projects", "/About"]; // Added "/" for home
  const isActive = Paths.some((path) => location.pathname.startsWith(path));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Navigation handler with scroll to top
  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    closeMenu(); // Close mobile menu

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

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show nav when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide nav when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding nav
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let timeoutId = null;
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 10);
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <nav
      className={`${styles.navContainer} ${
        isVisible ? styles.visible : styles.hidden
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.navContent}>
        {/* Left: Logo + Theme Toggle */}
        <div className={styles.headerLinksContainer}>
          <NavLink
            to="/"
            className={styles.logoLink}
            onClick={handleNavigation("/")}
            aria-label="Go to homepage"
          >
            <img src={logo} alt="Audiodidacts Logo" className={styles.logo} />
            <span className={styles.logoText}>Nick DenBleyker</span>
          </NavLink>
          {/* Theme Toggle next to name */}
          <div className={styles.themeToggleContainer}>
            <ThemeToggle />
          </div>
        </div>

        {/* Right: Desktop Navigation & Mobile Toggle */}
        <div className={styles.navRight}>
          <div className={styles.desktopNav}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              onClick={handleNavigation("/")}
            >
              Home
            </NavLink>
            <NavLink
              to="/Projects"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              onClick={handleNavigation("/Projects")}
            >
              Projects
            </NavLink>
            <NavLink
              to="/Posts"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              onClick={handleNavigation("/Posts")}
            >
              Posts
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
              onClick={handleNavigation("/About")}
            >
              About Me
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.menuButton} ${
              isMenuOpen ? styles.menuOpen : ""
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.mobileNavLink} ${isActive ? styles.active : ""}`
            }
            onClick={handleNavigation("/")}
          >
            Home
          </NavLink>
          <NavLink
            to="/Posts"
            className={({ isActive }) =>
              `${styles.mobileNavLink} ${isActive ? styles.active : ""}`
            }
            onClick={handleNavigation("/Posts")}
          >
            Posts
          </NavLink>
          <NavLink
            to="/Projects"
            className={({ isActive }) =>
              `${styles.mobileNavLink} ${isActive ? styles.active : ""}`
            }
            onClick={handleNavigation("/Projects")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/About"
            className={({ isActive }) =>
              `${styles.mobileNavLink} ${isActive ? styles.active : ""}`
            }
            onClick={handleNavigation("/About")}
          >
            About
          </NavLink>
          
          {/* Theme toggle in mobile menu too */}
          <div className={styles.mobileThemeToggle}>
            <span className={styles.themeLabel}>Theme</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;