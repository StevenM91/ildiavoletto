import styles from "./qrcode.module.css";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("../../components/menu/Menu"), {
  ssr: false,
});

const LaCarte = () => {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  );
};

export default LaCarte;
