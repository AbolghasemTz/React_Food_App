import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const MEALS = [
  {
    id: "m1",
    name: "سوشی",
    description: "مرغوب ترین ماهی و سبزیجات",
    price: 50000,
  },
  {
    id: "m2",
    name: "شنیتسل",
    description: " آلمانی مخصوص",
    price: 16500,
  },
  {
    id: "m3",
    name: "باربیکیو برگر",
    description: "آمریکایی، خام، گوشتی",
    price: 12990,
  },
  {
    id: "m4",
    name: "سبزیجات",
    description: "سالم و سبز...",
    price: 18999,
  },
];

const AvailableMeals = () => {
  const mealsList = MEALS.map((meal) => <MealItem key={meal.id} meal={meal} />);
  return (
    <div className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;
