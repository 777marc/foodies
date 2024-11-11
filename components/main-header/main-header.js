import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import styleClasses from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
