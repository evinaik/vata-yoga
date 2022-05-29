import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";

export function Nav() {
  const { pathname } = useRouter();
  console.log(pathname);

  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link passHref href="/">
            <a className={pathname === "/" ? styles.active : undefined}>home</a>
          </Link>
        </li>
        <li>
          <Link passHref href="/yogis">
            <a className={pathname === "/yogis" ? styles.active : undefined}>
              meet the team
            </a>
          </Link>
        </li>
        <li>
          <Link passHref href="/privates">
            <a className={pathname === "/privates" ? styles.active : undefined}>
              privates
            </a>
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
