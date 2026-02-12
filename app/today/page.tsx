import Link from "next/link";

const goalCards = [
  { title: "Skin", status: "Growing", tile: "Vitamin C-rich produce" },
  { title: "Gut", status: "Not yet", tile: "Fiber-rich foods" },
  { title: "Pregnancy prep", status: "Strong", tile: "Choline sources" }
];

export default function TodayPage() {
  return (
    <section>
      <h1>Today</h1>
      <p>Track your meal patterns and build momentum with one simple add-one idea.</p>
      <p>
        <Link href="/log-meal" className="cta-link">
          Log a meal
        </Link>
      </p>
      <ul className="card-list">
        {goalCards.map((goal) => (
          <li key={goal.title} className="card">
            <h2>{goal.title}</h2>
            <p>Status: {goal.status}</p>
            <p>Category tile: {goal.tile}</p>
          </li>
        ))}
      </ul>
      <div className="card">
        <h2>Add-One Suggestion</h2>
        <p>Add one side of berries to a meal today for extra color and variety.</p>
      </div>
    </section>
  );
}
