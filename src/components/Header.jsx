import React from "react";
import styles from "./Header.module.css";
import PremierLeagueLogo from "./PremierLeagueLogo.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={PremierLeagueLogo} className="img" />
      EPL 2022/2023
    </div>
  );
};

export default Header;
