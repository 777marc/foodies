import MealItem from "./meal-item";
import styleClasses from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={styleClasses.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
