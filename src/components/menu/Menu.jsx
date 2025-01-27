"use client";

import LinksMenu from "@/components/menu/linkcarte/LinksCarte";
import styles from "./lacarte.module.css";
import Image from "next/image";

const Lacarte = () => {
  return (
    <div className={styles.lacarte}>
      <h2 className={styles.title}>La Carte</h2>
      <Image src="/ic-plate.png" width={30} height={30} />

      <LinksMenu />
    </div>
  );
};

export default Lacarte;
