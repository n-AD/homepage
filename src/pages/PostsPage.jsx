import { useState, useEffect } from 'react';
import PostCard from "../components/PostCard.jsx";
import { loadAllPosts } from "../utils/markdownLoader.js";
import styles from "../styles/pageStyles/postsPage.module.css";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const loadPosts = async () => {
      const postsData = await loadAllPosts();
      setPosts(postsData);
      setLoading(false);
    };
    loadPosts();
  }, []);

  // Filter posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ['All', ...new Set(posts.map(post => post.category).filter(Boolean))];

  if (loading) {
    return (
      <div className={styles.loading}>
        <h2>Loading posts...</h2>
      </div>
    );
  }

  return (
    <article className={styles.postPageContainer}>
      {/* Page Header */}
      <header className={styles.pageHeader}>
        <h1>My Blog</h1>
        <p>
          Posts coming soon.
        </p>
      </header>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className={styles.filterButtons}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.active : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchBox}
        />
      </section>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className={styles.noResults}>
          <h3>No posts found</h3>
          <p>
            {searchTerm || selectedCategory !== 'All' 
              ? "Try adjusting your search or filter criteria."
              : "No posts have been published yet."}
          </p>
        </div>
      ) : (
        filteredPosts.map((post, index) => (
          <PostCard 
            key={post.slug} 
            post={post} 
            featured={index === 0 && searchTerm === '' && selectedCategory === 'All'} 
          />
        ))
      )}
    </article>
  );
};

export default PostsPage;