import logoPromo from "../../src/assets/logo/SimProm_prom.png";
import logoFooter from "../../src/assets/logo/SimProm_title_logo.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <img
        src={logoFooter}
        alt="P4 logo in the footer"
        className={styles.logoFooter}
      />
      <p className={styles.textFooter}>
      &copy; Réalisé par Pierre et Diego, promotion{" "}
        <img
          src={logoPromo}
          alt="P4 logo in the footer"
          className={styles.logoPromo}
        />
        , septembre 2023
      </p>
    </div>
  );
};
