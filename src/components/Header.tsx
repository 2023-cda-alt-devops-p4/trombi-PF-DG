import styles from "./Header.module.css";
import logo from "../../src/assets/logo/SimProm.png";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="our simprom logo" />
      </div>
      <div>
        <ul className={styles.links}>
          <li>
            <a
              href="https://github.com/2023-cda-alt-devops-p4/trombi-PF-DG"
              target="_blank"
              className={styles.link}
            >
              GitHub Repository
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
