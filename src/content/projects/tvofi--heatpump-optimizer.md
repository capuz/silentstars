---
repo: "tvofi/heatpump_optimizer"
name: "heatpump_optimizer"
description: "Home Assistant integration that plans heat pump space heating and hot water against electricity prices, weather and a two-zone thermal model."
readmeQualityOk: true
url: "https://github.com/tvofi/heatpump_optimizer"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["energy", "hacs", "heat-pump", "home-assistant", "home-automation", "optimization"]
stars: 5
forks: 0
openIssues: 75
closedIssues: 870
watchers: 2
contributors: 12
recentReleases: 10
createdAt: "2026-08-20T19:42:42Z"
lastCommitAt: "2026-10-26T03:02:56Z"
lastReleaseAt: "2026-08-22T17:18:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 60
maintainers: ["tvofi", "github-actions[bot]", "hpo-author[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c775c15aa9eb0c53f7bea20b6bc0ce91bd2e38dd5ec1da16e653f2a4f6ae1587/tvofi/heatpump_optimizer"
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

## Acknowledgement

This project began as a fork of
[**strutsfarm/heatpump_optimizer**](https://github.com/strutsfarm/heatpump_optimizer)
at version 2.2.0. The MPC formulation, the two-zone thermal model with its slab
and buffer tank, the Tibber and weather integration, the config flow and the
ECL110 heat-curve path are all…
