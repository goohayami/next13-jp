import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.link} href="/">
            Home
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="/routing">
            Routing
          </Link>
        </li>
      </ul>

      <hr />
    </>
  );
}
