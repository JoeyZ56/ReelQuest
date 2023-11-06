import React from "react";
import { useState } from "react";
import styles from "./Footer.module.scss";

const Footer = ({ toggleTheme }) => {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => [
    setTheme((curr) => (curr === "theme1" ? "theme2" : "theme1")),
    toggleTheme(),
  ];
  return (
    <>
      <div className="toggleContainer">
        <label className="app__toggle-label">
          <input
            className="app__toggle-input"
            type="checkbox"
            value={theme}
            checked={theme === "theme2"}
            onClick={handleToggleTheme}
            onChange={() => {
              toggleTheme;
            }}
          />

          <div className="app__toggle-fill"></div>
        </label>
      </div>
      <section className={styles.footerLinks}>
        <a href="https://portfolio.joeyzazzi.com/" target="_blank">
          Portfolio
        </a>
        <a href="https://github.com/JoeyZ56/React-Movie-API" target="_blank">
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-zazzi-8bab68a1/"
          target="_blank"
        >
          Linkedin
        </a>
      </section>
    </>
  );
};

export default Footer;
