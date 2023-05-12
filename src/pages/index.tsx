import { Button } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import { useAuthContext } from "@/context/auth";

const Home = () => {
  const { userValidator } = useAuthContext();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    setUser(userValidator());
  }, []);
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
        <Link href={user ? "/subjects" : "/access"}>
          <Button className={styles.homePageButton}>Empezar ya</Button>
        </Link>
      </article>
    </section>
  );
};

export default Home;
