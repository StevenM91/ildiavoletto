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
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
                className={styles.a}
              >
                Entrée
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/lacarte/pates"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
                className={styles.a}
              >
                Pasta
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/lacarte/secondi"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
                className={styles.a}
              >
                Secondi
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/lacarte/dessert"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
                className={styles.a}
              >
                Desserts
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to="/lacarte/boissons"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
                className={styles.a}
              >
                Boissons
              </NavLink>
            </li>
            {/* <li className={styles.li}>
              <NavLink
                to="/lacarte/formules"
                style={({ isActive }) => ({
                  color: isActive ? "rgb(166, 114, 69)" : "white",
                })}
                className={styles.a}
              >
                Formule
              </NavLink>
            </li> */}
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Entree />} />
          <Route path="/lacarte/pates" element={<Pates />} />
          <Route path="/lacarte/secondi" element={<Secondi />} />
          <Route path="/lacarte/dessert" element={<Dessert />} />
          <Route path="/lacarte/boissons" element={<Boissons />} />
          {/* <Route path="/lacarte/formules" element={<Formule />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default LinksMenu;
