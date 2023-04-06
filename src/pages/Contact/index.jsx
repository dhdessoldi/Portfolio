import Button from 'components/Button';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Contact.module.css'
import gif from './the-office.gif'

export default function Contact() {
  const navigate = useNavigate();
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
      <div onClick={()=>navigate("/")}>
        <Button text="Voltar" />
      </div>
  </section>
  )
}
