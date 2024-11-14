import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styleClasses from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styleClasses.header}>
        <Link className={styleClasses.logo} href="/">
          <Image src={logoImg} alt="NextLevel Food Logo" priority />
          NextLevel Food
        </Link>

        <nav className={styleClasses.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
