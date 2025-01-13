import Image from "next/image";
import styles from "./qrcode.module.css";

const QrCode = () => {
  return (
    <div className={styles.container}>
      {/* <Image
        src="/menu.jpeg"
        alt="menu Il diavoletto"
        className={styles.img}
        fill={true}
      /> */}
      <img src="/menu.jpeg" alt="" className={styles.img} />
      <img src="/boissons.jpeg" alt="" className={styles.img} />
      <img src="/formule.jpg" alt="" className={styles.img} />
    </div>
  );
};

export default QrCode;
