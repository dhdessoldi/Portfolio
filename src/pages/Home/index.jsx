import PostModel from 'components/PostModel'
import React from 'react'
import styles from './Home.module.css'
import myPhoto from "assets/profile.jpg";

export default function Home() {
  return (
    <PostModel>
      <h3 className={styles.subtitle}>Olá, eu sou o Daniel!</h3>
      <img
        src={myPhoto}
        alt="Uma foto do Daniel deitado em um balanço"
        className={styles.myPhoto}
      />
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        placerat felis, ac fringilla dui. Sed imperdiet pharetra velit auctor
        iaculis. In eu ultricies orci, sit amet molestie ex. Morbi eu mauris
        dictum, pharetra metus sed, interdum justo. Donec rutrum sed velit sed
        consectetur. Suspendisse bibendum pharetra egestas. Donec dignissim
        tempor nunc, in elementum sapien. Donec sagittis sagittis elit quis
        pharetra. Praesent bibendum ut sem blandit gravida. Fusce interdum
        aliquam ante, et tempus eros dictum eu. Nunc rhoncus ac erat quis
        porttitor. Ut elementum enim eget enim sollicitudin, nec elementum
        turpis rhoncus. Nam congue odio id nisi suscipit, sed aliquam tortor
        volutpat. Maecenas vitae augue eu tortor pretium fringilla ut quis erat.
      </p>
      <p className={styles.paragraph}>
        Pellentesque congue augue et nisl malesuada porta. Praesent semper
        tortor sit amet ex commodo ultricies. Sed id dapibus leo. Maecenas id
        velit volutpat ante mattis mollis. Sed a volutpat mi. Proin sed odio
        laoreet, efficitur massa ut, elementum nibh. Proin eu libero eu orci
        dignissim egestas.
      </p>

      <p className={styles.paragraph}>
        In non nibh varius, mollis magna at, cursus risus. Nulla augue nisi,
        euismod sit amet imperdiet sit amet, tempor eu ex. Nullam laoreet, urna
        ac varius scelerisque, enim eros vehicula tellus, vel eleifend felis
        risus et est. Suspendisse aliquet congue nunc. Etiam id elit sit amet
        turpis sodales consectetur. Ut efficitur, nisl vel feugiat feugiat, ante
        augue hendrerit justo, a congue orci nulla nec metus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Phasellus aliquet diam elit, eget tincidunt massa ultrices sit amet.
        Curabitur pulvinar velit non leo mattis, sed mattis metus ultrices.
        Etiam ipsum nunc, ullamcorper at dolor eu, porttitor suscipit est.
        Aenean est nisi, maximus eget nisi in, aliquam maximus nulla. Curabitur
        aliquam cursus est, vitae dapibus elit. Etiam ut purus at dolor
        ultricies facilisis. In lobortis pretium enim.
      </p>

      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        placerat felis, ac fringilla dui. Sed imperdiet pharetra velit auctor
        iaculis. In eu ultricies orci, sit amet molestie ex. Morbi eu mauris
        dictum, pharetra metus sed, interdum justo. Donec rutrum sed velit sed
        consectetur. Suspendisse bibendum pharetra egestas. Donec dignissim
        tempor nunc, in elementum sapien. Donec sagittis sagittis elit quis
        pharetra. Praesent bibendum ut sem blandit gravida. Fusce interdum
        aliquam ante, et tempus eros dictum eu. Nunc rhoncus ac erat quis
        porttitor. Ut elementum enim eget enim sollicitudin, nec elementum
        turpis rhoncus. Nam congue odio id nisi suscipit, sed aliquam tortor
        volutpat. Maecenas vitae augue eu tortor pretium fringilla ut quis erat.
      </p>

      <p className={styles.paragraph}>
        Pellentesque congue augue et nisl malesuada porta. Praesent semper
        tortor sit amet ex commodo ultricies. Sed id dapibus leo. Maecenas id
        velit volutpat ante mattis mollis. Sed a volutpat mi. Proin sed odio
        laoreet, efficitur massa ut, elementum nibh. Proin eu libero eu orci
        dignissim egestas.
      </p>

      <p className={styles.paragraph}>
        In non nibh varius, mollis magna at, cursus risus. Nulla augue nisi,
        euismod sit amet imperdiet sit amet, tempor eu ex. Nullam laoreet, urna
        ac varius scelerisque, enim eros vehicula tellus, vel eleifend felis
        risus et est. Suspendisse aliquet congue nunc. Etiam id elit sit amet
        turpis sodales consectetur. Ut efficitur, nisl vel feugiat feugiat, ante
        augue hendrerit justo, a congue orci nulla nec metus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Phasellus aliquet diam elit, eget tincidunt massa ultrices sit amet.
        Curabitur pulvinar velit non leo mattis, sed mattis metus ultrices.
        Etiam ipsum nunc, ullamcorper at dolor eu, porttitor suscipit est.
        Aenean est nisi, maximus eget nisi in, aliquam maximus nulla. Curabitur
        aliquam cursus est, vitae dapibus elit. Etiam ut purus at dolor
        ultricies facilisis. In lobortis pretium enim.
      </p>
    </PostModel>
  )
}
