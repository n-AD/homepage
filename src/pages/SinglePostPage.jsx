import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import posts from "../assets/data/posts.json";
import styles from "../styles/pageStyles/singlePostPage.module.css";

const SinglePostPage = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  // Scroll to top of webpage when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const { slug } = useParams();
  const post = posts.find((post) => post.slug === slug);

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

  const estimatedReadTime = Math.ceil(
    post.content.reduce((acc, section) => {
      if (section.type === "paragraph") {
        return acc + section.text.split(" ").length;
      }
      return acc;
    }, 0) / 200 // Average reading speed
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

        {/* Article Content */}
        <section className={styles.postContent}>
          {post.content.map((section, index) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={index} className={styles.paragraph}>
                    {section.text}
                  </p>
                );
              case "image":
                return (
                  <figure key={index} className={styles.imageContainer}>
                    <img
                      src={section.src}
                      alt={section.alt}
                      className={styles.image}
                      loading="lazy"
                    />
                    {section.caption && (
                      <figcaption className={styles.imageCaption}>
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              case "header":
                return (
                  <h2 key={index} className={styles.sectionHeader}>
                    {section.text}
                  </h2>
                );
              case "quote":
                return (
                  <blockquote key={index} className={styles.blockquote}>
                    <p>{section.text}</p>
                    {section.author && (
                      <cite className={styles.quoteAuthor}>
                        — {section.author}
                      </cite>
                    )}
                  </blockquote>
                );
              case "list":
                return (
                  <ul key={index} className={styles.list}>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles.listItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              default:
                return null;
            }
          })}
        </section>

        {/* Article Footer */}
        {/* <footer className={styles.postFooter}>
          {
            <div className={styles.shareSection}>
              <h3>Share this post</h3>
              <div className={styles.shareButtons}>
                <button
                  className={styles.shareButton}
                  onClick={() =>
                    navigator.share?.({
                      title: post.title,
                      url: window.location.href,
                    })
                  }
                >
                  📤 Share
                </button>
              </div>
            </div>
          }

          
          <div className={styles.navigationSection}>
            <Link to="/posts" className={styles.backToPosts}>
              ← View All Posts
            </Link>
          </div>
        </footer> */}
      </div>
    </article>
  );
};

export default SinglePostPage;
