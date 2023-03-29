import React from 'react'
import styles from './Portfolio.module.css'
import gif from './the-office.gif'

export default function Portfolio() {
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
