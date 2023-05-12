import { Button } from "antd";
import Link from "next/link";
import React from "react";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <section className={styles.homePage}>
      <h1>Quizzy</h1>
      <h3>La mejor forma de estudiar</h3>
      <article className={styles.homePageArticle}>
        <ul>
          <li>Accesible</li>
          <li>Comodo</li>
          <li>Facil</li>
        </ul>
        <Link href="/access">
          <Button className={styles.homePageButton}>Empezar ya</Button>
        </Link>
      </article>
    </section>
  );
};

export default Home;
