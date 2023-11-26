import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <div>
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <p>Voltar ao topo</p>
          <img src="" alt="" />
        </div>
      </div>

      <div className={styles.copyright}>
        <p className={styles.year}>©2023</p>

        <div className={styles.createdBy}>
          <p>
            <img src="" alt="" />
            Layout criado por <span>Henrique Souza</span>
          </p>
          <p>
            <img src="" alt="" />
            Desenvolvido por <span>Luiz Felipe Silva</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
