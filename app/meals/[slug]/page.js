import { Suspense } from "react";
import MealItem from "@/components/meals/meal-item";
import { getMeal } from "@/db/meals";

async function Meal({ slug }) {
  const meal = await getMeal(slug);
  return <MealItem {...meal} />;
}

function page({ params }) {
  return (
    <main>
      <Suspense fallback={<p className="loading">Loading...</p>}>
        <Meal slug={params.slug} />
      </Suspense>
    </main>
  );
}

export default page;
