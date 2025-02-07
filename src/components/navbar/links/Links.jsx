"use client";

import { motion } from "framer-motion";
import "../nav.css";
import Link from "next/link";

const Links = () => {
  return (
    <div>
      <div>
        <motion.div className="links">
          <Link rel="dns-prefetch" href="/">
            Accueil
          </Link>
          <Link href="/lacarte">Menu</Link>
          <Link href="/contact">Contact</Link>
        </motion.div>
      </div>
    </div>
  );
};
export default Links;
