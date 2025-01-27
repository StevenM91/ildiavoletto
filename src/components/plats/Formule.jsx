import Image from "next/image";
import styles from "./formule.module.css";

const Formule = () => {
  return (
    <div className={styles.meals}>
      <div className={styles.meal}>
        <img src="/formule.jpg" alt="" className={styles.formule} />
      </div>
    </div>
  );
};

export default Formule;
