import Link from "next/link";
import { Suspense } from "react";
import styleClasses from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/db/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

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
        <Suspense
          fallback={<p className={styleClasses.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
