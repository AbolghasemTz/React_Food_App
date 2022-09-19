import classes from "../Meals/MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>غذای خوشمزه، تحویل به شما</h2>
      <p>
        غذاهای مورد علاقه خود را از میان مجموعه گسترده غذاهای موجود ما انتخاب
        کنید و از یک ناهار یا شام خوشمزه در خانه لذت ببرید.
      </p>
      <p>
        تمام وعده های غذایی ما با مواد اولیه مرغوب و البته توسط سرآشپزهای مجرب
        طبخ می شود.
      </p>
    </section>
  );
};

export default MealsSummary;
