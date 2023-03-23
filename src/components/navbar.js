import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/logo.png"
          width="100"
          height="80"
          alt="Star Wars"
        />
      </div>
      <ul className={styles.link_items}>
        <li>
          <Link href="/">
            <h1>Films</h1>
          </Link>
        </li>
        <li>
          <Link href="/sobre">
            <h1>About</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
