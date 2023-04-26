import React from "react";
import styles from "./About.module.css";
import Henry from "./henry-trophy.jpg..webp";

const About = () => {
  return (
    <div className={styles.about}>
      <div className="article">
        This app is for football fans that wants more data regarding Premier
        League teams' matches.
      </div>
      <br />
      <div className={styles.coyg}>COYG</div>
      <br />
      <img src={Henry} />
    </div>
  );
};

export default About;
