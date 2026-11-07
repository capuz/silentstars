---
repo: "drumtorben/thermocast"
name: "thermocast"
description: "Predictive heating release for Home Assistant: online-learned room models, sun per surface, block planner for oversized boilers, explainable panel"
readmeQualityOk: true
url: "https://github.com/drumtorben/thermocast"
homepage: "https://github.com/drumtorben/thermocast"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["hacs", "heating", "home-assistant", "home-automation", "homeassistant-integration"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-05T07:08:57Z"
lastCommitAt: "2026-11-07T09:30:38Z"
lastReleaseAt: "2026-10-06T08:22:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 54
maintainers: ["drumtorben"]
openGraphImageUrl: "https://opengraph.githubassets.com/2bac1fdd3625e5d2843c099499261d49fdd7d09825ee7bff93197873761f77cb/drumtorben/thermocast"
---

# Thermocast

[Deutsch](https://github.com/drumtorben/thermocast/blob/HEAD/README.de.md) · **English**

Predictive heating release for Home Assistant – with **room models that learn online**,
**solar gain per window and roof surface** (Open-Meteo) and a **block planner** that lets an
oversized boiler run long and rarely instead of short and often.
Built for underfloor heating (slow screed) plus radiators; a heat pump is the next target.

> Status: v0.9 – 289 tests (synthetic test house + Home Assistant); running on a real system since October 2026
> (gas condensing boiler, Buderus RC310 via EMS-ESP, underfloor heating + radiators with Better Thermostat).
> Still young – feedback and issues welcome.
> **Starts in observe mode** and switches nothing until you turn on `Control active`.

## Why

Many modern houses have a boiler whose *minimum* output is far above what the house needs in spring and
autumn (e.g. 7 kW vs. 1–2 kW). The boiler cycles – dozens of short burner starts a day, which costs gas
and wears the burner. Weather-compensated control alone can't fix that.

Thermocast predicts per room how warm it will be **without** heating – outdoor temperature, sun on each
window and…
