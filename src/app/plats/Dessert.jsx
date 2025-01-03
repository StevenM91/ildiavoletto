import Image from "next/image";
import styles from "./globalPlat.module.css";

const Dessert = () => {
  return (
    <div className={styles.meals}>
      <div className={styles.titleMenu}>
        <div className={styles.blocktitle}>
          <h2 className={styles.h2title}>IL DIAVOLETTO</h2>
          <h3 className={styles.h3title}>Diaboliquement Bon</h3>
        </div>
        <Image
          src="/diable.png"
          alt="diable logo il diavoletto"
          width={80}
          height={80}
        />
      </div>
      <div className={styles.mealsContententre}>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/dessert.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Desserts</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Panna Cotta</p>
              <p className={styles.pPrix}>5.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Sbriciolata</p>
              <p className={styles.pPrix}>6.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Fondente al Cioccolato</p>
              <p className={styles.pPrix}>6.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Mousse al Cioccolato</p>
              <p className={styles.pPrix}>5.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Crème Caramel</p>
              <p className={styles.pPrix}>5.50€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dessert;
