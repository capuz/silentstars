---
repo: "energy-monitor/explore"
name: "explore"
description: "Codebase for data wrangling and analyis of https://energie.wifo.ac.at"
readmeQualityOk: true
url: "https://github.com/energy-monitor/explore"
homepage: "https://energie.wifo.ac.at"
language: "R"
languages: ["R", "Jupyter Notebook"]
languagePcts: [64, 22]
topics: ["austria", "energy", "monitoring", "analysis", "wrangling"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-11-09T19:03:14Z"
lastCommitAt: "2026-11-04T13:05:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 74
maintainers: ["petres", "joph"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac49f94ca14762b9dc052afd2c73aa485840cdf736cec8ba5e254609bda6ba34/energy-monitor/explore"
---

# Energy Data Analysis

Joint project by [Johannes Schmidt](https://github.com/joph) and me. Provides data loading, preparation and analysis scripts. These script are also the base for the visualisations on [energy.abteil.org](https://energy.abteil.org).

## Data sources

Following data sources are used:

- [E-Control](https://www.e-control.at/)
    - Gas consumption
- [entsoe](https://www.entsoe.eu/)
    - Electricity generation (also hourly by source)
    - Electricity load
    - Day-ahead prices of all bidding zones (hourly, daily)
    - Physical flows per neighbour
- [GIE - Gas Infrastructure Europe](https://www.gie.eu/)
    - Gas Storage
- [AGGM - Austrian Gas Grid Managment AG](https://www.aggm.at/)
    - Gas Consumption
- [ASFINAG](https://www.asfinag.at/verkehr-sicherheit/verkehrszaehlung/)
    - Traffic on motorways and expressways
- [Eurostat](https://ec.europa.eu/eurostat/)
    - Rail transport (goods quarterly, passengers annual)
    - Electricity and gas prices of households (half-yearly, all countries)
- [Umweltbundesamt](https://www.umweltbundesamt.at/)
    - Greenhouse gas inventory by CRT sector…
