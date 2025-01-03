import Image from "next/image";
import styles from "./globalPlat.module.css";

const Formule = () => {
  return (
    <div className={styles.meals}>
      <div className={styles.titleMenu}>
        <div className={styles.blocktitle}>
          <h2 className={styles.h2title}>IL DIAVOLETTO</h2>
          <h3 className={styles.h3title}>Diaboliquement Bon</h3>
          <h4 className={styles.h4title}>Formules Midi</h4>
        </div>
        <Image
          src="/diable.png"
          alt="diable logo il diavoletto"
          width={80}
          height={80}
        />
      </div>
      <div className={styles.mealsContent}>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/neurone.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Formule 17.50€</h3>
          </div>
          <div className={styles.center}>
            <div className={styles.meal}>
              <div className={styles.menu}>
                <p className={styles.pMenu}>Bruschetta</p>
              </div>
              <div className={styles.menu}>
                <p className={styles.pMenu}>Lasagna ou Cannelloni</p>
              </div>
              <div className={styles.menu}>
                <p className={styles.pMenu}>Boisson</p>
              </div>
              <div className={styles.menu}>
                <p className={styles.pMenu}>Café</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/particule.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Formule 15.00€</h3>
          </div>
          <div className={styles.center}>
            <div className={styles.meal}>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Bruschetta</p>
              </div>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Ragù ou Tortellini*</p>
              </div>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Boisson</p>
              </div>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Café</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/ampoule.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Formule 17.50€</h3>
          </div>
          <div className={styles.center}>
            <div className={styles.meal}>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Burger</p>
              </div>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Panna Cotta</p>
              </div>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Boisson</p>
              </div>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Café</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/pomme.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Formule 15.00€</h3>
          </div>
          <div className={styles.center}>
            <div className={styles.meal}>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Aio e Oio ou Pomdoro*</p>
              </div>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Sbriciolata</p>
              </div>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Eau</p>
              </div>
              <div className={styles.menuB}>
                <p className={styles.pMenu}>Café</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mealTextCenter}>
        <div className={styles.centerSan}>
          <h3 className={styles.h3san}>Sandwich Boisson Café 11.00€</h3>
        </div>
        <div className={styles.mealGrid}>
          <div className={styles.p1}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>
                &#8226; Panino Cotto - Mozzarella di Bufala
              </p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>
                &#8226; Panino Crudo - Crudo Mozzarella di Bufala
              </p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>
                &#8226;Mortadella Burrata Pistacchio
              </p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>&#8226;Salame Caciotta Piccante</p>
            </div>
          </div>
          <div className={styles.p2}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>&#8226;Coppa Caciotta Piccante</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>&#8226;Pomodoro Mozzarella Bufala*</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>&#8226;Bresaola Rucola Grana</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>&#8226;Melanzane Mozzarella</p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.pend}>&#8727;Indique un plat sans viande</p>
    </div>
  );
};

export default Formule;
