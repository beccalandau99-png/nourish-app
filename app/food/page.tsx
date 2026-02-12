const foodExample = {
  name: "Lentils",
  supports: ["Gut support", "Pregnancy prep"],
  whyItMatters:
    "Lentils offer fiber and folate-supportive nutrients that can fit well across nourishment goals.",
  pairings: ["Lentils + leafy greens", "Lentils + roasted carrots"]
};

export default function FoodPage() {
  return (
    <section>
      <h1>Food Detail</h1>
      <p>Explore what each food supports and simple ways to pair it with other foods.</p>
      <div className="card">
        <h2>{foodExample.name}</h2>
        <p>Supports: {foodExample.supports.join(", ")}</p>
        <p>Why it matters: {foodExample.whyItMatters}</p>
        <p>Easy pairings: {foodExample.pairings.join(" • ")}</p>
      </div>
    </section>
  );
}
