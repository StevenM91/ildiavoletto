import styles from "./home.module.css";
import Head from "next/head";
import dynamic from "next/dynamic";
const Section1 = dynamic(() => import("@/components/section1/Section1"), {
  ssr: false,
});
const Contact = dynamic(() => import("./contact/page"), {
  ssr: false,
});
const LaCarte = dynamic(() => import("./lacarte/page"), {
  ssr: false,
});

const Accueil = () => {
  <Head>
    <title>Il Diavoletto | Restaurant Italien à Ézy-sur-Eure</title>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="description"
      content="Savourez des pâtes fraîches maison et des spécialités italiennes authentiques à Il Diavoletto, restaurant italien à Ézy-sur-Eure, Eure-et-Loir."
    />
    <meta
      name="keywords"
      content="restaurant italien, pâtes fraîches, Ézy-sur-Eure, Eure-et-Loir, cuisine italienne"
    />
    <meta name="author" content="MAITRE STEVEN" />
    <meta
      property="og:title"
      content="Il Diavoletto | Restaurant Italien à Ézy-sur-Eure"
    />
    <meta
      property="og:description"
      content="Découvrez notre menu varié avec des options pour tous les goûts, dans un cadre chaleureux et convivial."
    />
    <meta property="og:image" content="/images/restaurant-preview.jpg" />
    <meta property="og:url" content="https://www.diavoletto.fr" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="https://www.diavoletto.fr" />
  </Head>;

  return (
    <>
      <div>
        <div className={styles.container}>
          <div className={styles.home}>
            <img
              src="/images/imgHome2.webp"
              className={styles.imgHome}
              alt="picture home"
            />

            <div className={styles.homeRes}>
              <h1 className={styles.title}>IL DIAVOLETTO</h1>
              <h2 className={styles.subtitle}>Diaboliquement Bon</h2>
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


