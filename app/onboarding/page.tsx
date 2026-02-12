export default function OnboardingPage() {
  return (
    <section>
      <h1>Onboarding</h1>
      <p>Pick one or two focus areas and set up your preferences.</p>
      <ul className="card-list">
        <li className="card">
          <h2>Choose your goals</h2>
          <p>Skin support, Gut support, and Pregnancy prep.</p>
        </li>
        <li className="card">
          <h2>Gentle Mode</h2>
          <p>Toggle a reflection-first view with supportive language.</p>
        </li>
        <li className="card">
          <h2>Dietary preferences</h2>
          <p>Optional preferences to shape food suggestions.</p>
        </li>
      </ul>
    </section>
  );
}
