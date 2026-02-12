const weeklyHighlights = [
  "You logged meals on four days this week.",
  "You included three different fiber-rich foods.",
  "You added one fermented food choice."
];

export default function InsightsPage() {
  return (
    <section>
      <h1>Insights</h1>
      <p>Weekly recap with gentle language and practical ideas for next week.</p>
      <ul className="card-list">
        {weeklyHighlights.map((item) => (
          <li key={item} className="card">
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <div className="card">
        <h2>Suggestions for next week</h2>
        <p>Add one leafy green side to two meals and try one new polyphenol-rich plant.</p>
      </div>
      <div className="card">
        <h2>Optional symptom reflection</h2>
        <p>Track energy, digestion comfort, or skin feel to notice light patterns over time.</p>
      </div>
    </section>
  );
}
