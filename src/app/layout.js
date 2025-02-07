// import localFont from "next/font";
import "./global.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Copyright from "@/components/copyright/Copyright";
import BurgerMenu from "@/components/burgerMenu/BurgerMenu";

export const metadata = {
  title: "Il Diavoletto",
  description:
    "Il Diavoletto, votre restaurant italien à Ézy-sur-Eure en Eure-et-Loir, vous invite à savourer des pâtes fraîches maison et des spécialités italiennes authentiques. Profitez d'une expérience gourmande unique dans un cadre chaleureux. Réservez dès maintenant !",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="fr">
        <body>
          <main>
            {/* <Navbar /> */}
            <BurgerMenu />
            {children}
            <Footer />
            <Copyright />
          </main>
        </body>
      </html>
    </>
  );
}
