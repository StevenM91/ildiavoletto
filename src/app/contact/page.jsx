// "use client";

import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Il Diavoletto Menu",
  description:
    "Contactez Il Diavoletto, votre restaurant italien à Ézy-sur-Eure, ouvert du mardi au dimanche. Retrouvez-nous au  45 rue Isambard 27530 Ézy-sur-Eure ou appelez-nous au 07 49 76 69 15. Réservez votre table dès aujourd'hui !",
};

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.formContent}>
        <div className={styles.hours}>
          <div className={styles.hoursContent}>
            <h3 className={styles.h3Hours}>Horaires</h3>
            <div className={styles.iconPlate}>
              <img
                src="/images/ic-plate.png"
                alt="icon plate"
                className={styles.iconPlate}
                width={30}
                height={30}
              />
            </div>
            <h5 className={styles.h5Date}>Mardi - vendredi</h5>
            <p className={styles.p}>11:30 - 14:00</p>
            <p className={styles.p}>18:30 - 22:00</p>
            <h5 className={styles.h5Date}>Samedi</h5>
            <p className={styles.p}>11:30 - 14:00</p>
            <p className={styles.p}>18:30 : 22:30</p>
            <h5 className={styles.h5Date}>Dimanche</h5>
            <p className={styles.p}>10:00 - 14:30</p>
            <h5 className={styles.h5Date}>+33 (0) 7 49 76 69 15</h5>
            <h5 className={styles.h5Date}>contact@diavoletto.fr</h5>
          </div>
        </div>
        <iframe
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.232036649741!2d1.4176382768519327!3d48.86553210020348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6ad64bb400bc3%3A0xebf80e3abfc211fa!2s45%20Rue%20Isambard%2C%2027530%20%C3%89zy-sur-Eure!5e0!3m2!1sfr!2sfr!4v1729081025205!5m2!1sfr!2sfr"
          // width="650"
          // height="554"

          loading="lazy"
          className={styles.map}
          alt="map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
