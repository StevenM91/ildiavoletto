import Image from "next/image";
import styles from "./globalPlat.module.css";

const Pates = () => {
  return (
    <div className={styles.meals}>
      <img
        src="/menuPasta.jpg"
        alt="Menu Diavoletto Pasta"
        className={styles.img}
      />
    </div>
  );
};

export default Pates;
