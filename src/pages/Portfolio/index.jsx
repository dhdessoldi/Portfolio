import styles from "./Portfolio.module.css";
import posts from "json/posts.json";
import PostCard from "components/PostCard";


export default function Portfolio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
