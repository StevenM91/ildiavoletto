import Image from "next/image";
import styles from "./globalPlat.module.css";

const Secondi = () => {
  return (
    <div className={styles.meals}>
      <img
        src="/menuSecondi.jpg"
        alt="Menu Diavoletto Secondi"
        className={styles.img}
      />
    </div>
  );
};

export default Secondi;
