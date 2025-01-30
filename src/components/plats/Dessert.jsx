import Image from "next/image";
import styles from "./globalPlat.module.css";

const Dessert = () => {
  return (
    <div className={styles.meals}>
      <img
        src="/menuDessert.jpg"
        className={styles.img}
        alt="Menu Dessert Diavoletto"
      />
    </div>
  );
};

export default Dessert;
