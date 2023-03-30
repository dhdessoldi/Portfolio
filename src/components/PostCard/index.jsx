
import Button from "components/Button";
import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.post__banner}
          src={`/assets/posts/${post.id}/1.PNG`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.post__title}>{post.title}</h2>
        <Button text="Ler" />
      </div>
    </Link>
  );
}
