"use client";

import LinksMenu from "@/components/menu/linkmenu/LinksMenu";
import styles from "./lacarte.module.css";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.lacarte}>
      <h2 className={styles.title}>La Carte</h2>
      <img src="/ic-plate.png" />

      <LinksMenu />
    </div>
  );
};

export default Menu;
