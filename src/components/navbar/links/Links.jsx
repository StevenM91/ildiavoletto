"use client";

import { motion } from "framer-motion";
import NavLink from "./navLink/navLink";
import "../nav.css";

const links = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "La Carte",
    path: "#lacarte",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const Itemvariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  // const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <motion.div className="links">
          {links.map((link) => (
            <NavLink item={link} key={link.title} className="a" />
          ))}
        </motion.div>
        {/* 
        <Image
          className={styles.menuButton}
          src="/menu.png"
          alt=""
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
        /> */}
        {/* <div>
          {open && (
            <div className={styles.mobileLinks}>
              {links.map((link) => (
                <motion.NavLink item={link} key={link.title} />
              ))}
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};
export default Links;
