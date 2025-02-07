import styles from "./section1.module.css";

const Section1 = () => {
  return (
    <div>
      <section className={styles.section1}>
        <div className={styles.introText}>
          <h2 className={styles.titreh2}>Découvrez</h2>
          <h3 className={styles.texth3}>IL DIAVOLETTO</h3>
          <div className={styles.imgIconPlate}>
            <img
              src="/images/ic-plate.png"
              alt="icon-plate"
              className={styles.imgIconPlate}
              width={30}
              height={30}
            />
          </div>
          <p className={styles.p}>
            Notre restaurant se veut un lieu chaleureux, où l’on vient pour
            partager un moment convivial autour d’un bon repas, entre amis ou en
            famille. Avec Il Diavoletto, laissez-vous tenter par un voyage
            culinaire au cœur de l'Italie, là où chaque bouchée raconte une
            histoire de terroir et de passion. <br />
            <br /> Venez nous rencontrer et découvrir l’Italie sous un nouveau
            jour, celle où la qualité des ingrédients et l’authenticité sont au
            centre de tout ce que nous faisons. Il Diavoletto, c’est l’âme
            italienne dans chaque assiette, avec une touche de caractère...
            diaboliquement bon !
          </p>
          <div className={styles.imgAvatar}>
            <img
              src="/images/diable.png"
              alt="chef resto picture"
              className={styles.imgAvatar}
            />
          </div>
          <h4 className={styles.h4}>Vente à Emporter</h4>
        </div>
        <div className={styles.introPic}></div>
      </section>
    </div>
  );
};

export default Section1;
