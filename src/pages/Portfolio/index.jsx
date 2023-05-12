import styles from "./Portfolio.module.css";
import posts from "json/posts.json";
import PostCard from "components/PostCard";
import { Link } from "react-router-dom";


export default function Portfolio() {
  return (
    <section className={styles.container}>
      <h1 className={styles.container__title}>Um pouco sobre meu trabalho</h1>
      <p className={styles.container__text}>Aqui estão um pouco mais dos meus trabalhos como calculista e projetista de estruturas em aço. Separei os tipos mais usuais de estruturas no mercado, ressalto que as descrições são simplificadas e as imagens são apenas ilustrativas. Caso tenham alguma dúvida, ou queira saber mais, sinta-se à vontade de entrar em <Link to='/contato'>contato</Link>.</p>
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
