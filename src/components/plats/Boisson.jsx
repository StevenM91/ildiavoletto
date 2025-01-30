import Image from "next/image";
import styles from "./globalPlat.module.css";

const Boissons = () => {
  return (
    <div className={styles.meals}>
      <img
        src="/menuBoissons.jpg"
        className={styles.img}
        alt="Menu boissons Diavoletto"
      />
    </div>
  );
};

export default Boissons;
