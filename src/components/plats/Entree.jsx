import Image from "next/image";
import styles from "./globalPlat.module.css";

const Entree = () => {
  return (
    <div className={styles.meals}>
      <img
        src="/menuAntipasti.jpg"
        alt="Menu Diavoletto Antipasti"
        className={styles.img}
      />
    </div>
  );
};

export default Entree;
