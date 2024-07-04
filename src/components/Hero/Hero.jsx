import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Thavashankar</h1>
        <p className={styles.description}>
        I am a passionate MERN developer who builds innovative web applications, bringing ideas to life with clean and efficient code.Reach out if you'd like to learn more!
        </p>
        <a href="mailto:thavashankarj@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/3d-cartoon-avatar_113255-5517.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
