import Section1 from "@/components/section1/Section1";
import styles from "./home.module.css";
import Contact from "../components/contact/Contact";
import LaCarte from "./menu/LaCarte";
import Head from "next/head";
import Image from "next/image";

const Accueil = () => {
  return (
    <>
      <Head>
        <title>Il Diavolletto | Restaurant Italien à Ézy-sur-Eure</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Savourez des pâtes fraîches maison et des spécialités italiennes authentiques à Il Diavolletto, restaurant italien à Ézy-sur-Eure, Eure-et-Loir."
        />
        <meta
          name="keywords"
          content="restaurant italien, pâtes fraîches, Ézy-sur-Eure, Eure-et-Loir, cuisine italienne"
        />
        <meta name="author" content="Il Diavolletto" />
        <meta
          property="og:title"
          content="Il Diavolletto | Restaurant Italien à Ézy-sur-Eure"
        />
        <meta
          property="og:description"
          content="Découvrez notre menu varié avec des options pour tous les goûts, dans un cadre chaleureux et convivial."
        />
        {/* <meta property="og:image" content="/images/restaurant-preview.jpg" />
    <meta property="og:url" content="https://www.il-diavolletto.fr" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="https://www.il-diavolletto.fr" /> */}
      </Head>

      <div>
        <div className={styles.container}>
          <div className={styles.home}>
            <Image
              src="/home1.jpeg"
              layout="fill"
              className="imgHome"
              alt="picture home"
            />
            <div className={styles.overlay}>
              <h1 className={styles.title}>Il Diavolletto</h1>
              <h3 className={styles.subtitle}>Diaboliquement Bon</h3>
            </div>
          </div>
        </div>
        <section>
          <Section1 />
        </section>
        <div className={styles.lacarte}>
          <section id="lacarte">
            <LaCarte />
          </section>
        </div>
        <div className={styles.contact}>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
};

export default Accueil;
