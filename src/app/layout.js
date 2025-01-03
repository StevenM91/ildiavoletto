import localFont from "next/font/local";
import "./global.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Il Diavolletto",
  description:
    "Il Diavolletto, votre restaurant italien à Ézy-sur-Eure en Eure-et-Loir, vous invite à savourer des pâtes fraîches maison et des spécialités italiennes authentiques. Profitez d'une expérience gourmande unique dans un cadre chaleureux. Réservez dès maintenant !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
