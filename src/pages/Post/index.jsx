import "./Post.css";
import styles from "./Post.module.css";
import posts from "json/posts.json";
import { Route, Routes, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import PostCard from "components/PostCard";
import NotFound from "pages/NotFound";
import BasePage from "pages/BasePage";
import PostModel from "components/PostModel";

export default function Post() {
  const parameters = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parameters.id);
  });

  if (!post) {
    return <NotFound />;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  const postsFilter = posts.filter(
    (post) => post.id !== Number(parameters.id)
  );
  const postsRandomize = shuffle(postsFilter);
  const postsRecomend = postsRandomize.slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<BasePage />}>
        <Route
          index
          element={
            <PostModel
              title={post.title}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.text}</ReactMarkdown>
              </div>
              <h2 className={styles.tituloOutrosPosts}>
                Outros conteúdos que você pode gostar:
              </h2>
              <ul className={styles.postsRecomendados}>
                {postsRecomend.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModel>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
