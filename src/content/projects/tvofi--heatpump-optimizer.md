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
stars: 8
forks: 1
openIssues: 49
closedIssues: 951
watchers: 2
contributors: 13
recentReleases: 10
createdAt: "2026-08-20T19:42:42Z"
lastCommitAt: "2026-11-07T13:55:39Z"
lastReleaseAt: "2026-08-22T17:18:06Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["tvofi", "hpo-author[bot]", "seat"]
openGraphImageUrl: "https://opengraph.githubassets.com/ebdf883502bf545ef0455dac71052a857910c2f02f33e4fa364e8ca0f55e2249/tvofi/heatpump_optimizer"
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
