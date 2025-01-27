import Image from "next/image";
import styles from "./globalPlat.module.css";

const Boissons = () => {
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
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/caffe.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Caffè</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Espresso</p>
              <p className={styles.pPrix}>1.80€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Espresso Doppio</p>
              <p className={styles.pPrix}>2.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Cappuccino</p>
              <p className={styles.pPrix}>2.20€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Corretto</p>
              <p className={styles.pPrix}>2.00€</p>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.cl}>
            <Image
              src="/vini.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3vini}>Vini</h3>
            <h5 className={styles.h5}>12cl</h5>
            <h5 className={styles.h5}>75cl</h5>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Nero D'avola DOC</p>
              <p className={styles.pPrix}>3.50€</p>
              <p className={styles.pPrix}>18.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Primitivo IGT</p>
              <p className={styles.pPrix}>3.50€</p>
              <p className={styles.pPrix}>18.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Pinot Grigio DOC</p>
              <p className={styles.pPrix}>3.50€</p>
              <p className={styles.pPrix}>18.50€</p>
            </div>
          </div>
        </div>

        <div className={styles.mealText}>
          <div className={styles.cl}>
            <Image
              src="/liquori.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Liquori</h3>
            <h5 className={styles.h5}>4cl</h5>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Limoncello</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Amaro</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Grappa</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Whisky</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Sambuca</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/analcolico.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3}>Analcolico</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Acqua Frizzante 47cl</p>
              <p className={styles.pPrix}>1.80€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Acqua Naturale 45cl</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Clementina 40cl</p>
              <p className={styles.pPrix}>2.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Limone 40cl</p>
              <p className={styles.pPrix}>2.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Chinotto 40cl</p>
              <p className={styles.pPrix}>2.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Coca Cola 33cl</p>
              <p className={styles.pPrix}>2.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Fanta 33cl</p>
              <p className={styles.pPrix}>2.50€</p>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.cl}>
            <Image
              src="/birra.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3liq}>Birra</h3>
            <h5 className={styles.h5}>33cl</h5>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Nastro Azzurro</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Peroni</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Menabrea</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
          </div>
        </div>
        <div className={styles.mealText}>
          <div className={styles.vini}>
            <Image
              src="/aperitivo.png"
              alt="diable logo il diavoletto"
              width={60}
              height={60}
            />
            <h3 className={styles.h3}>Aperitivo</h3>
          </div>
          <div className={styles.meal}>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Spritz 12cl</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Prosecco Extra Dry 12cl</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Crodino Analcolico 10cl</p>
              <p className={styles.pPrix}>3.00€</p>
            </div>
            <div className={styles.menuB}>
              <p className={styles.pMenu}>Fragolino</p>
              <p className={styles.pPrix}>3.50€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boissons;
