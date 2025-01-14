
import Link from "next/link";
import Image from "next/image";
import styles from "./main-header.module.css"; 
import logoImg from "@/assets/logo.png";
import NavLink from "./nav-link";
export default function MainHeader() {
    return (
    <header className={styles.header}>
      
        <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="MyApp logo"   />
            </Link>
        <nav className={styles.nav}>
            <ul className={styles.ul}>
            <li>
                <NavLink href="/meals"> Browse Meals </NavLink>
            </li>
            <li>
                <NavLink href="/community">Foodies Community</NavLink>
            </li>
            </ul>
        </nav>
    </header>
  );
}