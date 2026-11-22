---
repo: "tvofi/heatpump_optimizer"
name: "heatpump_optimizer"
description: "Home Assistant integration that plans heat pump space heating and hot water against electricity prices, weather and a two-zone thermal model."
readmeQualityOk: true
url: "https://github.com/tvofi/heatpump_optimizer"
language: "Python"
languages: ["Python"]
languagePcts: [84]
topics: ["energy", "hacs", "heat-pump", "home-assistant", "home-automation", "optimization"]
stars: 8
forks: 1
openIssues: 64
closedIssues: 1008
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2026-08-20T19:42:42Z"
lastCommitAt: "2026-11-22T01:11:53Z"
lastReleaseAt: "2026-08-22T17:18:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 51
maintainers: ["tvofi", "github-actions[bot]", "hpo-author[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2679f99719e8f2b807f1c759f0005bd1447403e408d5cca080c5fec5b304855f/tvofi/heatpump_optimizer"
---

# Heat Pump Cost Optimizer for Home Assistant

Model-predictive heating control for Home Assistant. It plans your heat pump and
your hot water 24 hours ahead against hourly electricity prices, the weather
forecast, and a thermal model of your own house that it keeps correcting from
your own sensors — so the house stays as warm as you asked, bought in better
hours.

[coffee]: https://buymeacoffee.com/rpgshcwb2tp

[Product page](https://tvofi.github.io/heatpump_optimizer/): the project at a glance, every sentence of it quoted from this README and the docs.

*The next 24 hours as the optimizer sees them — price, forecast, solar, and the
slots it picked for heating and for hot water. Screenshot of the shipped card
against a solved plan; [docs/dashboard-card.md](https://github.com/tvofi/heatpump_optimizer/blob/HEAD/docs/dashboard-card.md) reads
every mark on it.*
