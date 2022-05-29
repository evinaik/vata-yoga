import Link from "next/link";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href="/yogis">
            <a>meet the team</a>
          </Link>
        </li>
        <li>
          <Link href="/privates">
            <a>privates</a>
          </Link>
        </li>
        <li>
          <a
            href="https://goo.gl/maps/UFJw4BCz6GC7Wu4FA"
            target="_blank"
            rel="noreferrer"
          >
            map
          </a>
        </li>
      </ul>
    </nav>
  );
}
