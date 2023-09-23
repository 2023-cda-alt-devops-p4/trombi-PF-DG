import styles from "./MainSection.module.css";
import logoText from "../../src/assets/logo/SimProm_title_logo.png";

export const MainSection = () => {
  return (
    <>
      <div className={styles.title}>
        <img src={logoText} alt="" />
      </div>
      <p className={styles.presentationText}>
        Laissez-nous vous présenter la promo P4, la crème de la crème des
        Concepteurs Développeurs d'Applications en plein cœur du monde DevOps.
        Avec nos 14 talents répartis entre la vibrante Paris et la pittoresque
        région des Hauts de France, nous sommes prêts à repousser les limites du
        développement et à apporter de la fraîcheur à l'écosystème tech.
      </p>
      <p className={styles.presentationText}>
        Entre la culture cosmopolite de la capitale et la chaleur des Hauts de
        France, la synergie de notre groupe est sans pareil. Que vous soyez à la
        recherche de solutions innovantes ou juste curieux de connaître les
        visages derrière la promo P4, sachez que vous êtes au bon endroit. On a
        hâte de vous montrer de quoi on est capable !
      </p>
    </>
  );
};
