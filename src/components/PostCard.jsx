import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../styles/pageStyles/postsPage.module.css";

const PostCard = ({ post, featured = false }) => {
  return (
    <article
      className={`${styles.postCard} ${featured ? styles.featured : ""}`}
    >
      <Link className={styles.cardLink} to={`/Posts/${post.slug}`}>
        {/* Post metadata section */}
        <div className={styles.postMeta}>
          <div className={styles.postDate}>
            <span>
              {new Date(post.createdAt || Date.now()).toLocaleDateString()}
            </span>
          </div>
          {post.category && (
            <span className={styles.postCategory}>{post.category}</span>
          )}
        </div>

        <h3 className={styles.title}>{post.title}</h3>

        <p className={styles.excerpt}>{post.excerpt}</p>

        {/* Tags section if available */}
        {post.tags && post.tags.length > 0 && (
          <div className={styles.postTags}>
            {post.tags.map((tag, index) => (
              <span key={index} className={styles.postTag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Reading time and button section */}
        <div className={styles.cardFooter}>
          <div className={styles.readingTime}>
            <span>📖 {post.readTime || "5 min read"}</span>
          </div>
          <span className={styles.readMoreButton}>
            Read More
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    createdAt: PropTypes.string,
    readTime: PropTypes.string,
  }).isRequired,
  featured: PropTypes.bool,
};

export default PostCard;
