# Nourish

Nourish is a food tracking app focused on nourishment and specific wellness goals instead of calorie counting.

The product is designed for women who want practical, evidence-informed nutrition support for goals like:

- Glowy skin
- Healthy gut
- Pregnancy prep

without diet-culture framing or restrictive tracking patterns.

## Core Product Principles

- **No calorie counting anywhere in the UI**
- **No weight-loss framing**
- **No red deficit warnings**
- **Supportive, additive language** ("what to include")
- **Nutrient pattern and food variety tracking**

## Why this app exists

Many nutrition apps can unintentionally encourage fixation on calorie numbers. Nourish takes a different route:

- Track meals and foods
- Convert foods into nutrient-support tags
- Show progress toward nutrient-supportive patterns
- Provide gentle, practical suggestions

## Goal Tracks (MVP)

Goal profiles are stored in [`data/goal_profiles.json`](data/goal_profiles.json).

1. **Glowy Skin**
   - Vitamin C-rich produce
   - Carotenoid-rich produce
   - Omega-3 sources
   - Protein anchors

2. **Healthy Gut**
   - Fiber-rich foods
   - Prebiotic foods
   - Fermented foods
   - Polyphenol-rich plants

3. **Pregnancy Prep**
   - Folate-rich foods
   - Iron-rich foods
   - Choline sources
   - Omega-3 sources

## Evidence-backed framework

Scientific rationale and references are documented in [`docs/evidence.md`](docs/evidence.md), including:

- Skin appearance and low-glycemic dietary pattern studies
- Dietary fiber and fermented food evidence for gut health
- Folic acid, iron, and choline relevance for preconception nutrition

## Example data model (high level)

- `users`
- `goals`
- `foods`
- `food_tags`
- `meals`
- `meal_items`
- `symptom_logs` (optional)

## Suggested first build sequence

1. Build food logging + search
2. Add deterministic food tag mapping
3. Show daily goal-track dashboard (no calories)
4. Add positive nudges and simple substitutions
5. Add optional symptom correlation view

## Medical and safety posture

Nourish should always be educational and supportive, not diagnostic.

Recommended in-app disclaimer:

> Nourish provides general educational information and is not a substitute for medical advice, diagnosis, or treatment. If you are pregnant, trying to conceive, or have a medical condition, consult a qualified healthcare professional.
