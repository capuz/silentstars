---
repo: "Elured-code/traveller-world-gen"
name: "traveller-world-gen"
description: "Generate detailed Traveller star systems using the Core Rulebook 2022 and World Builder's Handbook rules."
url: "https://github.com/Elured-code/traveller-world-gen"
language: "Python"
languages: ["Python"]
languagePcts: [88]
topics: ["python", "rpg", "traveller-rpg"]
stars: 9
forks: 0
openIssues: 12
closedIssues: 131
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-04-21T23:20:38Z"
lastCommitAt: "2026-06-25T06:41:12Z"
lastReleaseAt: "2026-06-23T10:34:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 98
undervaluedScore: 56
maintainers: ["Elured-code"]
openGraphImageUrl: "https://opengraph.githubassets.com/bdd8637eddbe4c1bd49261cac71f4d506942672bcad59d96a0b9511d78d17b70/Elured-code/traveller-world-gen"
discussionCount: 0
---

# Traveller World Generator

A Python implementation of the star system and mainworld generation rules
from the **Traveller 2022 Core Rulebook** and **World Builder's Handbook**
(Mongoose Publishing), with a REST API built on Azure Functions.

All 13 mainworld generation steps are implemented in rulebook order, each
feeding into the next exactly as the rules describe. The stellar and orbit
generation modules implement the full WBH expanded procedure. Output is
available as a plain-text summary, structured JSON, or a self-contained
HTML display card.

> **Note:** This project requires the Traveller 2022 Core Rulebook and
> World Builder's Handbook (Sept 2023).
> The Traveller game in all forms is owned by Mongoose Publishing.
> Copyright 1977–2025 Mongoose Publishing. All rights reserved.
> This project is an unofficial fan work created under the Mongoose
> Publishing Fair Use Policy. It is not affiliated with or endorsed by
> Mongoose Publishing. No commercial use is intended or permitted.

---

## Features

- **Stellar generation** (WBH pp.14–29): primary star type, subtype, mass,
  temperature, diameter, luminosity, system age, multiple stars (Close/Near/Far/
  Companion), and…
