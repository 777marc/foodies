import Link from "next/link";
import styleClasses from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";

export default function page() {
  return (
    <>
      <header className={styleClasses.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styleClasses.highlight}>by you</span>
        </h1>
        <p>cook you favs and time any where....</p>
        <p className={styleClasses.cta}>
          <Link href="/meals/share">Share this recipe</Link>
        </p>
      </header>
      <main className={styleClasses.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
