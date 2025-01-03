import Link from "next/link";
import styles from "./notFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <h2>Not Found</h2>
        <p>Sorry, the page you are looking for does not exist Return</p>
        <Link href="/#lacarte" className={styles.returne}>
          {" "}
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
