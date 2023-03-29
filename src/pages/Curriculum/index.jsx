import React from 'react'
import styles from './Curriculum.module.css'
import gif from './the-office.gif'

export default function Curriculum() {
  return (
    <section className={styles.container}>
    <h1 className={styles.container__title}>
      Opa! Ainda não tem nada para ver aqui!
      Tente novamente mais tarde.
    </h1>
    <img
      className={styles.container__gif}
      src={gif}
      alt="The Office gif from https://tenor.com/"
    />
    {/* <Link to="/">
      <Button text="Voltar" />
    </Link> */}
  </section>
  )
}
