import React from "react";
import styles from "./Banner.module.css";
import banner from "assets/sobre_mim_capa.png";

export default function Banner() {
  return (
    <div
      className={styles.container__banner}
      style={{ backgroundImage: `url(${banner})` }}
    />
  );
}
