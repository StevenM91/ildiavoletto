"use client";

import LinksMenu from "@/components/linkmenu/LinksMenu";
import styles from "./lacarte.module.css";
import Image from "next/image";

export const metadata = {
  title: "Il Diavolletto Menu",
  description:
    "Découvrez le menu varié d'Il Diavolletto à Ézy-sur-Eure : des plats italiens savoureux pour tous les goûts, avec ou sans viande. Pâtes fraîches, options végétariennes et recettes authentiques d'Italie vous attendent. Réservez votre table dès maintenant !",
};

const LaCarte = () => {
  return (
    <div className={styles.lacarte}>
      <h2 className={styles.title}>La Carte</h2>
      <Image src="/ic-plate.png" width={30} height={30} />

      <LinksMenu />
    </div>
  );
};

export default LaCarte;
