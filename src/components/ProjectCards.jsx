import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/componentStyles/projectsContainer.module.css";
import backupImage from "../assets/images/audiodidacts-logo.png";
import ProjectLinks from "./ProjectLinks";

const ProjectCards = ({ project, index }) => {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    e.preventDefault(); // Prevent default link behavior

    // Scroll to top first
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Then navigate after a short delay to allow scroll to complete
    setTimeout(() => {
      navigate(`/Projects/${project.slug}`);
    }, 100);
  };

  const handleLinkClick = (e) => {
    // Prevent card link when clicking on external links
    e.stopPropagation();
  };

  return (
    <div
      className={styles.projectCardLink}
      style={{
        animationDelay: `${(index % 6) * 0.1}s`,
      }}
      onClick={handleCardClick}
    >
      <article className={styles.projectCard}>
        {/* Fixed Image Area - Top 33% */}
        <div className={styles.imageContainer}>
          {project.image ? (
            <img
              src={project.image}
              className={styles.projectPicture}
              alt={`${project.title} preview`}
              loading="lazy"
            />
          ) : (
            <div className={styles.placeholderImage}>
              <div className={styles.placeholderContent}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21,15 16,10 5,21" />
                </svg>
                <span>{project.title}</span>
              </div>
            </div>
          )}

          {project.status && (
            <span
              className={`${styles.statusBadge} ${
                styles[project.status?.toLowerCase()]
              }`}
            >
              {project.status}
            </span>
          )}
        </div>

        {/* Project Details - Bottom 67% */}
        <div className={styles.projectDetails}>
          {/* Category Tag */}
          {project.category && (
            <span className={styles.categoryTag}>{project.category}</span>
          )}

          {/* Title and Description */}
          <div className={styles.projectContent}>
            <h4 className={styles.projectTitle}>{project.title}</h4>
            <p className={styles.projectText}>
              {project.description || project.summary}
            </p>
          </div>

          {/* Technology Tags */}
          {project.technologies && project.technologies.length > 0 && (
            <div className={styles.techTags}>
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <span key={techIndex} className={styles.techTag}>
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className={styles.techTag}>
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Project Links */}
          <div className={styles.linkIcons} onClick={handleLinkClick}>
            <ProjectLinks project={project} />
            <div className={styles.viewProjectIndicator}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
              View Details
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

ProjectCards.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string,
    summary: PropTypes.string,
    liveURL: PropTypes.string,
    github: PropTypes.string,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string,
    status: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number,
};

export default ProjectCards;
