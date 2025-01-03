import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import styles from "./linksmenu.module.css";
import Entree from "../../app/plats/Entree";
import Pates from "../../app/plats/Pates";
import Secondi from "../../app/plats/Secondi";
import Dessert from "../../app/plats/Dessert";
import Boissons from "../../app/plats/Boisson";
import Formule from "../../app/plats/Formule";

const LinksMenu = () => {
  return (
    <div>
      <BrowserRouter>
        <div className={styles.linksMenu}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
              >
                Entrée
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/pates"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
              >
                Pasta
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/secondi"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
              >
                Secondi
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/dessert"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
              >
                Desserts
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/boissons"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
              >
                Boissons
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/formules"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
              >
                Formule
              </NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Entree />} />
          <Route path="/pates" element={<Pates />} />
          <Route path="/secondi" element={<Secondi />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/boissons" element={<Boissons />} />
          <Route path="/formules" element={<Formule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default LinksMenu;
