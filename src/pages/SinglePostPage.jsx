import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadPostBySlug } from "../utils/markdownLoader.js";
import styles from "../styles/pageStyles/singlePostPage.module.css";

const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  const { slug } = useParams();

  // Load post data
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const postData = await loadPostBySlug(slug);
      setPost(postData);
      setLoading(false);
    };

    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  // Track reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <h2>Loading post...</h2>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={styles.notFound}>
        <h1>Post not found</h1>
        <Link to="/posts" className={styles.backLink}>
          ← Back to Posts
        </Link>
      </div>
    );
  }

  // Calculate estimated read time from markdown content
  const estimatedReadTime = Math.ceil(
    post.content.split(' ').length / 200 // Average reading speed
  );

  return (
    <article className={styles.articleContainer}>
      {/* Reading progress bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className={styles.breadcrumb}>
        <Link to="/posts" className={styles.backLink}>
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
          Back to Posts
        </Link>
      </nav>

      <div className={styles.postWrapper}>
        {/* Article Header */}
        <header className={styles.postHeader}>
          {post.category && (
            <span className={styles.category}>{post.category}</span>
          )}

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.postMeta}>
            <div className={styles.authorInfo}>
              <div className={styles.authorAvatar}>
                {post.author ? post.author.charAt(0).toUpperCase() : "A"}
              </div>
              <div className={styles.authorDetails}>
                <span className={styles.authorName}>
                  By {post.author || "Anonymous"}
                </span>
                <time className={styles.publishDate}>
                  {new Date(post.date || Date.now()).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
              </div>
            </div>

            <div className={styles.postStats}>
              <span className={styles.readTime}>
                📖 {estimatedReadTime} min read
              </span>
              {post.tags && post.tags.length > 0 && (
                <div className={styles.tagList}>
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        </header>

        {/* Article Content - Rendered from Markdown */}
        <section className={styles.postContent}>
          <div 
            className={styles.markdownContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>

        {/* Article Footer */}
        <footer className={styles.postFooter}>
          <div className={styles.navigationSection}>
            <Link to="/posts" className={styles.backToPosts}>
              ← View All Posts
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default SinglePostPage;