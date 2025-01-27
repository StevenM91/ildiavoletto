"use client";

import { motion } from "framer-motion";
import NavLink from "./navLink/navLink";
import "../nav.css";
import Link from "next/link";

const links = [
  {
    title: "Accueil",
    path: "/",
  },
  {
    title: "La Carte",
    path: "/menu",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

// const variants = {
//   open: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: -1,
//     },
//   },
// };

// const Itemvariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//   },
// };

const Links = () => {
  return (
    <div>
      <div>
        <motion.div className="links">
          {/* {links.map((link) => (
            <NavLink item={link} key={link.title} className="a" />
          ))} */}
          <Link href="/">Accueil</Link>
          <Link href="/lacarte">Menu</Link>
          <Link href="/contact">Contact</Link>
        </motion.div>
      </div>
    </div>
  );
};
export default Links;
