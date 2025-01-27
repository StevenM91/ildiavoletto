import Image from "next/image";
import styles from "./qrcode.module.css";
// import Menu from "@/components/menu/Menu";
import Contact from "../contact/page";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("../../components/menu/Menu"), {
  ssr: false,
});

const LaCarte = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Contact />
    </div>
  );
};

export default LaCarte;
