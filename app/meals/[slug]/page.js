import { getMeal } from "@/db/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import styleClasses from "./page.module.css";

export async function generateMetadata({ params }) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function MealDetailsPage({ params }) {
  const meal = await getMeal(params.slug);

  if (!meal) {
    notFound();
  }

  return (
    <>
      <header className={styleClasses.header}>
        <div className={styleClasses.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={styleClasses.headerText}>
          <h1>{meal.title}</h1>
          <p className={styleClasses.creator}>
            by <a href="#">{meal.creator}</a>
          </p>
          <p className={styleClasses.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styleClasses.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br />"),
          }}
        ></p>
      </main>
    </>
  );
}
