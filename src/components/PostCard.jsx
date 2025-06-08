import { Link } from "react-router-dom";
import styles from "../styles/componentStyles/postCard.module.css";

const PostCard = ({ post }) => {
  // Calculate estimated read time
  const estimatedReadTime = Math.ceil(
    post.content.split(' ').length / 200
  );

  return (
    <Link to={`/posts/${post.slug}`} className={styles.cardLink}>
      <article className={styles.postCard}>
        {post.image && (
          <div className={styles.imageContainer}>
            <img 
              src={post.image} 
              alt={post.title}
              className={styles.postImage}
            />
          </div>
        )}
        
        <div className={styles.cardContent}>
          <div className={styles.cardHeader}>
            {post.category && (
              <span className={styles.category}>{post.category}</span>
            )}
            <time className={styles.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>

          <h2 className={styles.title}>{post.title}</h2>
          
          {post.excerpt && (
            <p className={styles.excerpt}>{post.excerpt}</p>
          )}

          <div className={styles.cardFooter}>
            <div className={styles.metaInfo}>
              <span className={styles.readTime}>
                📖 {estimatedReadTime} min read
              </span>
              {post.author && (
                <span className={styles.author}>By {post.author}</span>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className={styles.tags}>
                {post.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;