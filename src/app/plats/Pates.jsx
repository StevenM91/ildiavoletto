import Image from "next/image";
import styles from "./globalPlat.module.css";

const Pates = () => {
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
      <div className={styles.mealsContent}>
        {/* <Image /> */}
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/ripiena.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Pasta Ripiena</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Lasagna - Bolognaise</p>
              <p className={styles.pPrix}>12.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Lasagna* - Légumes</p>
              <p className={styles.pPrix}>12.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Cannelloni - Bolognaise</p>
              <p className={styles.pPrix}>12.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Girasoli* - Burrata Zest Citron</p>
              <p className={styles.pPrix}>12.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Tortellini* - Ricotta épinard</p>
              <p className={styles.pPrix}>9.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Ravioli Alice* - Ricotta Truffe</p>
              <p className={styles.pPrix}>11.50€</p>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/pates.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Pasta Bianca</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Cacio Pepe* - Pecorino Poivre</p>
              <p className={styles.pPrix}>8.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Gricia - Pecorino Guanciale</p>
              <p className={styles.pPrix}>9.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Carbonara - La Vraie</p>
              <p className={styles.pPrix}>11.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Pistacchio - Pistaches Guanciale</p>
              <p className={styles.pPrix}>12.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Pesto* - Pignon Basilique Parmesan</p>
              <p className={styles.pPrix}>11.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Aie e Oio</p>
              <p className={styles.pPrix}>8.50€</p>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/pates.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Pasta Rossa</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Pomodoro* - Sauce Tomate</p>
              <p className={styles.pPrix}>8.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Ragù - Sauce Bolognaise</p>
              <p className={styles.pPrix}>9.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Arrabbiata* - Sauce Pimentée</p>
              <p className={styles.pPrix}>9.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Matriciana - Sauce et Gaunciale</p>
              <p className={styles.pPrix}>9.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Vodka - Sauce Panna Guanciale</p>
              <p className={styles.pPrix}>10.00€</p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.pend}>&#8727;Indique un plat sans viande</p>
    </div>
  );
};

export default Pates;
