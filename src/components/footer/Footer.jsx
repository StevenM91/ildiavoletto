import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContent}>
      <div className={styles.leftPart}>
        <h2 className={styles.h2}>Il DIAVOLETTO</h2>
        <p className={styles.p}>
          45 rue Isambard <br />
          27530 Ézy-sur-Eure <br />+ 33 (0) 7 49 76 69 15
        </p>{" "}
        <br />
        <div className={styles.contact}>
          <p className={styles.p}>contact@diavoletto.fr</p>
          <div className={styles.social}>
            <Link
              href="https://www.facebook.com/profile.php?id=61573018222427"
              target="_blank"
            >
              <img
                src="/images/facebook.png"
                width={30}
                height={30}
                className={styles.img}
              />
            </Link>
            <Link
              href="https://www.instagram.com/diavoletto_ristorante/"
              target="_blank"
            >
              <img
                src="/images/insta.png"
                width={30}
                height={30}
                className={styles.img}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.rightPart}></div>
    </div>
  );
};

export default Footer;
