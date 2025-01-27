import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import styles from "./linksmenu.module.css";
import Entree from "../../plats/Entree";
import Pates from "../../plats/Pates";
import Secondi from "../../plats/Secondi";
import Dessert from "../../plats/Dessert";
import Boissons from "../../plats/Boisson";
import Formule from "../../plats/Formule";

const LinksMenu = () => {
  return (
    <div>
      <BrowserRouter>
        <div className={styles.linksMenu}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <NavLink
                to="/entree"
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
          <Route path="/entree" element={<Entree />} />
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
