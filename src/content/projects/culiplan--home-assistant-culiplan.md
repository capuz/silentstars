---
repo: "culiplan/home-assistant-culiplan"
name: "home-assistant-culiplan"
description: "Culiplan meal planning integration for Home Assistant"
readmeQualityOk: true
url: "https://github.com/culiplan/home-assistant-culiplan"
homepage: "https://culiplan.com/home-assistant"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["hacs", "home-assistant", "home-assistant-custom", "meal-planning", "smart-home", "culiplan"]
stars: 29
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-25T20:52:07Z"
lastCommitAt: "2026-09-17T08:51:47Z"
lastReleaseAt: "2026-06-07T12:39:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 21
maintainers: ["culiplan"]
openGraphImageUrl: "https://opengraph.githubassets.com/18078cbe0c2c2d219923f2bf867b4eb0cec404020bd3b295e0d6321cddb5f3f1/culiplan/home-assistant-culiplan"
---

# Culiplan for Home Assistant

Bring your [Culiplan](https://culiplan.com) meal planning account into Home Assistant.

> **Phase 3** — Cooking Mode card (`culiplan-cooking-mode`) is now live. Calendar, to-do,
> sensor entities, Assist intents and the full Lovelace card pack (Kitchen Dashboard + Pantry
> Tracker + Cooking Mode) are available. Report issues at [GitHub Issues](https://github.com/culiplan/home-assistant-culiplan/issues).

---

## Features

### Entities

| Entity | Description |
|---|---|
| `calendar.culiplan_meal_plan` | One event per planned meal; dinner-party events included |
| `todo.culiplan_shopping_list` | Active shopping list — items can be checked off or added |
| `sensor.culiplan_meals_today` | Number of meals planned today |
| `sensor.culiplan_shopping_items` | Count of unchecked shopping list items |
| `sensor.culiplan_expiring_pantry` | Pantry items expiring within 3 days |
| `sensor.culiplan_planned_kwh_today` | Estimated cooking energy (kWh) for today's planned meals — Phase 3 |

### Voice (Assist)

The integration ships its Assist sentences for English, Dutch, German, French and Spanish. Home Assistant only reads sentence files from…
