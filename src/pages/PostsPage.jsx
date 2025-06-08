import PostCard from "../components/PostCard.jsx";
import posts from "../assets/data/posts.jsx";
import styles from "../styles/pageStyles/postsPage.module.css";

const PostsPage = () => {
  return (
    <article className={styles.postPageContainer}>
      {posts.map((post) =>
        post.display ? <PostCard key={post.id} post={post} /> : null
      )}
    </article>
  );
};

export default PostsPage;
