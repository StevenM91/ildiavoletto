import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.leftPart}>
        <h2 className={styles.h2}>Il Diavoletto</h2>
        <p className={styles.p}>
          45 rue Isambard <br />
          27530 Ézy-sur-Eure <br />+ 33 (0) 7 49 76 69 15
        </p>{" "}
        <br />
        <p className={styles.p}>contact@diavoletto.fr</p>
      </div>
      <div className={styles.rightPart}></div>
    </div>
  );
};

export default Footer;
