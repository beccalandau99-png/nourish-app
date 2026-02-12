import Link from "next/link";

const routes = [
  { href: "/onboarding", description: "Choose goals, set Gentle Mode, and add preferences." },
  { href: "/today", description: "View daily progress and one add-one suggestion." },
  { href: "/log-meal", description: "Log your meal from a curated list of foods." },
  { href: "/food", description: "Explore food details, why they matter, and easy pairings." },
  { href: "/insights", description: "Review a gentle weekly recap and next-step ideas." }
];

export default function HomePage() {
  return (
    <section>
      <h1>Welcome to Nourish</h1>
      <p>
        This starter app includes all MVP routes with supportive, additive language and no restrictive
        metrics.
      </p>
      <ul className="card-list">
        {routes.map((route) => (
          <li key={route.href} className="card">
            <h2>
              <Link href={route.href}>{route.href}</Link>
            </h2>
            <p>{route.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
