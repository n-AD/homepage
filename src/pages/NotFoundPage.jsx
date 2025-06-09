import { FaExclamationTriangle, FaHome, FaBriefcase, FaUser, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styles/pageStyles/notFoundPage.module.css";

const NotFoundPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can implement search functionality here
    // For now, redirect to home with search query
    if (searchValue.trim()) {
      window.location.href = `/?search=${encodeURIComponent(searchValue)}`;
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section className={styles.section}>
      <div className={styles.errorContainer}>
        {/* Large 404 number */}
        <h1 className={styles.errorNumber}>404</h1>
        
        {/* Icon */}
        <FaExclamationTriangle className={styles.icon} />
        
        {/* Title and message */}
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.message}>
          Sorry, the page you're looking for doesn't exist or may have been moved.
        </p>
        
        {/* Action buttons */}
        <div className={styles.actionButtons}>
          <Link to="/" className={styles.link}>
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
          <Link to="/projects" className={styles.secondaryLink}>
            <FaBriefcase />
            <span>View Projects</span>
          </Link>
        </div>
        
        {/* Search suggestion */}
        <form onSubmit={handleSearchSubmit} className={styles.searchContainer}>
          <input 
            type="text" 
            className={styles.searchInput}
            placeholder="Search for something..."
            value={searchValue}
            onChange={handleSearchChange}
            aria-label="Search"
          />
        </form>
        
        {/* Helpful suggestions */}
        <div className={styles.suggestions}>
          <h3>Popular Pages</h3>
          <ul className={styles.suggestionsList}>
            <li>
              <FaHome className={styles.suggestionIcon} />
              <Link to="/">Home</Link>
            </li>
            <li>
              <FaBriefcase className={styles.suggestionIcon} />
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <FaUser className={styles.suggestionIcon} />
              <Link to="/about">About</Link>
            </li>
            <li>
              <FaEnvelope className={styles.suggestionIcon} />
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;