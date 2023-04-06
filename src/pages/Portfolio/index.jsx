import styles from "./Portfolio.module.css";
import posts from "json/posts.json";
import PostCard from "components/PostCard";


export default function Portfolio() {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>Um pouco sobre meu trabalho</h1>
      <p className={styles.container__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus nisl augue, a fringilla ipsum egestas pellentesque. Vestibulum accumsan feugiat porttitor. Proin vehicula quis ligula sed consequat. Sed sodales ut augue a venenatis. Ut venenatis fermentum tincidunt. Phasellus lorem leo, tincidunt id lacus id, placerat varius odio. Cras sollicitudin lectus non mollis condimentum.</p>
    <ul className={styles.container__posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
    </section>
  );
}
