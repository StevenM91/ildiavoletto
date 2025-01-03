import Image from "next/image";
import styles from "./globalPlat.module.css";

const Entree = () => {
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
        {/* <Image /> */}
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/antipasti.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Antipasti</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Bresaola Roquette Grana</p>
              <p className={styles.pPrix}>8.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Tomates Mozzarella Bufala</p>
              <p className={styles.pPrix}>8.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Burrata Anchoies</p>
              <p className={styles.pPrix}>11.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Plat Charcuterie</p>
              <p className={styles.pPrix}>8.00€</p>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/bruschetta.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Brushetta</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Tomates Fraiches</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Crème Olives</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Crème Artichauts</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.pend}>&#8727;Indique un plat sans viande</p>
    </div>
  );
};

export default Entree;
