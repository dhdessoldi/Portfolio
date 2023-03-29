import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.container__social}>
        <p className={styles.container__social_text}>Acesse minhas redes:</p>
        <ul className={styles.container__social_links}>
          <a href="https://github.com/dhdessoldi">
            <img src="/assets/icons/github.png" alt="logo do github" />
          </a>
          <a href="https://instagram.com/dhdessoldi">
            <img src="/assets/icons/instagram.png" alt="logo do instagram" />
          </a>
          <a href="https://linkedin.com">
            <img src="/assets/icons/linkedin.png" alt="logo do linkedin" />
          </a>
        </ul>
      </div>
      <p className={styles.container__text}>
        Desenvolvido por Daniel Hermano Dessoldi.
        <br />
      </p>
    </footer>
  );
}
