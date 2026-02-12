# Nourish

A food tracking app focused on nourishment and health goals instead of calorie counting.

The goal of this app is to help people (primarily women) understand how their food supports specific outcomes like skin health, gut health, and pregnancy preparation — without triggering restrictive eating patterns.

---

## Vision

Most nutrition apps are built around weight loss and calorie restriction.  
Nourish is designed to:

- Encourage adding nourishing foods instead of restricting
- Focus on nutrient diversity and food quality
- Provide gentle, supportive insights
- Avoid calorie counting entirely

---

## Core Features (MVP)

Users can:

1. Select a health goal
   - Glowy skin
   - Healthy gut
   - Pregnancy prep

2. Log meals
   - Simple food search
   - Quick add foods

3. Track nourishment categories instead of calories
   Examples:
   - Fiber sources
   - Omega-3 sources
   - Fermented foods
   - Iron-rich foods
   - Folate-rich foods

4. See gentle daily insights
   Examples:
   - "You added several fiber foods today."
   - "Adding a fermented food may support gut health."

5. Optional symptom tracking
   - Bloating
   - Energy
   - Skin changes

---

## Design Principles

This app must:

- Never display calories
- Never show "remaining" targets
- Avoid red warning states or restrictive language
- Focus on encouragement and additions
- Use neutral and supportive tone

---

## Target Users

Primary audience:
- Women interested in wellness
- People who want nutrition guidance without diet culture
- People preparing for pregnancy
- People improving gut or skin health

---

## Data Model (High Level)

Users
Meals
Foods
FoodTags
MealItems
Symptoms

---

## Example Food Tags

fiber  
omega3  
fermented  
iron  
folate  
vitamin_c  
protein_anchor  
zinc  
prebiotic  

---

## Tech Direction (Initial)

Frontend:
Mobile app (React Native or Flutter)

Backend:
Simple API + database

Database:
Postgres or Supabase

---

## Future Features

- Photo meal logging
- Grocery list suggestions
- Weekly nourishment reports
- Cycle-aware nutrition insights
- Personalized recommendations

---

## Philosophy

Nourish is not a diet app.  
It is a nourishment and awareness tool.

The experience should feel calm, supportive, and positive.
