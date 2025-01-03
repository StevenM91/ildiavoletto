import Image from "next/image";
import styles from "./globalPlat.module.css";

const Secondi = () => {
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
              src="/secondi.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Secondi</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Cevapcici - Rouleaux Viande Hachée</p>
              <p className={styles.pPrix}>12.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Hamburger - Burger</p>
              <p className={styles.pPrix}>10.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Braciola - Steack Porc</p>
              <p className={styles.pPrix}>11.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Cotolla Panatta - Viande Panée</p>
              <p className={styles.pPrix}>11.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Bresoala - Bresoala Roquette Grana</p>
              <p className={styles.pPrix}>12.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>
                Caprese* - Tomates Mozzarella Bufala
              </p>
              <p className={styles.pPrix}>11.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Melanzana Parmigiana</p>
              <p className={styles.pPrix}>12.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Affettati - Plat Charcuterie</p>
              <p className={styles.pPrix}>12.50€</p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.pend}>&#8727;Indique un plat sans viande</p>
    </div>
  );
};

export default Secondi;
