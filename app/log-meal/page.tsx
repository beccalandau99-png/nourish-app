const curatedFoods = ["Greek yogurt", "Spinach", "Oats", "Salmon", "Lentils", "Berries"];

export default function LogMealPage() {
  return (
    <section>
      <h1>Log Meal</h1>
      <p>Select your meal type, search foods, and save your meal entry.</p>
      <ul className="card-list">
        <li className="card">
          <h2>Meal type</h2>
          <p>Breakfast, Lunch, Dinner, or Snack.</p>
        </li>
        <li className="card">
          <h2>Curated food search</h2>
          <p>{curatedFoods.join(" • ")}</p>
        </li>
        <li className="card">
          <h2>Portion options</h2>
          <p>Optional size labels: Small, Medium, Large.</p>
        </li>
        <li className="card">
          <h2>Optional shortcuts</h2>
          <p>Repeat your last meal or pick from recent foods.</p>
        </li>
      </ul>
    </section>
  );
}
