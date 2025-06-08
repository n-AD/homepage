import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectLinks from "../components/ProjectLinks";
import projects from "../assets/data/projects.jsx";
import styles from "../styles/pageStyles/singleProjectPage.module.css";

const SingleProjectPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (index) => {
    setCurrentImage(index);
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const { slug } = useParams();
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project not found</h1>
        <Link to="/projects" className={styles.backLink}>
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <article className={styles.projectContainer}>
      {/* Navigation */}
      <nav className={styles.breadcrumb}>
        <Link to="/projects" className={styles.backLink}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </nav>

      <div className={styles.projectWrapper}>
        {/* Project Header */}
        <header className={styles.projectHeader}>
          {project.category && (
            <span className={styles.category}>{project.category}</span>
          )}

          <h1 className={styles.title}>{project.title}</h1>

          <div className={styles.projectMeta}>
            <div className={styles.techStack}>
              {project.technologies?.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            {/* <div className={styles.projectStatus}>
              <span
                className={`${styles.statusBadge} ${
                  styles[project.status?.toLowerCase()]
                }`}
              >
                {project.status || "Completed"}
              </span>
            </div> */}
          </div>
        </header>

        {/* Project Summary */}
        <section className={styles.summarySection}>
          <div className={styles.summaryContent}>
            <h2 className={styles.sectionTitle}>Project Overview</h2>
            <p className={styles.summaryText}>{project.summary}</p>

            {project.highlights && (
              <div className={styles.highlights}>
                <h3 className={styles.highlightsTitle}>Key Features</h3>
                <ul className={styles.highlightsList}>
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className={styles.highlightItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={styles.projectLinks}>
            <h3 className={styles.linksTitle}>Project Links</h3>
            <ProjectLinks project={project} />
          </div>
        </section>

        {/* Image Gallery */}
        {project.moreImages && project.moreImages.length > 0 && (
          <section className={styles.gallerySection}>
            <h2 className={styles.sectionTitle}>Project Gallery</h2>

            {/* Main Image Display */}
            <div className={styles.mainImageContainer}>
              <div
                className={`${styles.imageWrapper} ${
                  !imageLoaded ? styles.loading : ""
                }`}
                onClick={openLightbox}
              >
                <img
                  src={project.moreImages[currentImage]}
                  alt={`${project.title} - Image ${currentImage + 1}`}
                  className={styles.currentImage}
                  onLoad={handleImageLoad}
                />
                <div className={styles.expandIcon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
                  </svg>
                </div>
              </div>

              {/* Image Description */}
              {project.moreDetails && project.moreDetails[currentImage] && (
                <div className={styles.imageDescription}>
                  <p className={styles.descriptionText}>
                    {project.moreDetails[currentImage]}
                  </p>
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            <div className={styles.thumbnailContainer}>
              {project.moreImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`${styles.thumbnail} ${
                    index === currentImage ? styles.activeThumbnail : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    className={styles.thumbnailImage}
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Project Details */}
        {project.details && (
          <section className={styles.detailsSection}>
            <h2 className={styles.sectionTitle}>Technical Details</h2>
            <div className={styles.detailsContent}>
              {project.details.map((detail, index) => (
                <div key={index} className={styles.detailItem}>
                  <h3 className={styles.detailTitle}>{detail.title}</h3>
                  <p className={styles.detailText}>{detail.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <div className={styles.lightboxContent}>
            <button className={styles.closeButton} onClick={closeLightbox}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img
              src={project.moreImages[currentImage]}
              alt={`${project.title} - Full Size`}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </article>
  );
};

export default SingleProjectPage;
