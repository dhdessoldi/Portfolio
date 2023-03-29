import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import navbarIcon from './navbarIcon.png'
import logo from './logo.png'


export default function Header() {
    const [show, setShow] = useState('false')

    return (
      <header className={styles.container}>
        <Link
          to="/"
          onClick={()=>setShow('false')}
        >
          <img src={logo} alt="Logo de duas engrenagens" />
        </Link>
        <div>
          <img
            className={styles.container__navbar_icon}
            src={navbarIcon}
            alt="Ícone de menu hamburguer"
            onClick={()=>setShow(!show)}
                    />
          <nav id="navbar" className={[styles.container__navbar, (!show?styles.container__show:'')].join(' ')}>
            <Link
              to="/"
              onClick={()=>setShow(!show)}
            >
              Meu currículo
            </Link>
            <Link
              to="/"
              onClick={()=>setShow(!show)}
            >
              Meu trabalho
            </Link>
            <Link
              to="/"
              onClick={()=>setShow(!show)}
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>
    );
  }

