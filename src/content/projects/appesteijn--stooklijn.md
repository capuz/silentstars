---
repo: "Appesteijn/stooklijn"
name: "stooklijn"
description: "Quatt heat pump performance analysis for Home Assistant"
readmeQualityOk: true
url: "https://github.com/Appesteijn/stooklijn"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [79, 21]
topics: ["custom-integration", "hacs", "home-assistant", "quatt", "heat-pump-"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-02-13T19:25:14Z"
lastCommitAt: "2026-11-21T11:32:54Z"
lastReleaseAt: "2026-11-21T11:34:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 66
maintainers: ["Appesteijn", "marnixt"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b7b3dc50c23f97763412d6a71c73c724a61d572fe49d4b3fb750fc645fd317f/Appesteijn/stooklijn"
---

# Quatt Warmteanalyse

Home Assistant custom integration for analyzing your Quatt heat pump performance. It measures
what your house actually needs — heat loss, balance point, the temperature where the gas
boiler has to assist — and turns that into concrete settings you can ask Quatt to change.
Optionally compares against your gas consumption from before the heat pump.

Everything it does is read-only by default: it advises, it does not steer your installation.
Two optional features do write to the heat pump, and both are off until you enable them:
[sound level compensation](#geluidsniveaucompensatie) and
[supply-temperature control](#supply-temperature-control).

*The Overzicht tab: current COP, your home's measured heat loss and balance point, the knee
temperature where the boiler has to assist, and the concrete change to ask Quatt for.*

## What can you do with it?

Install it, let it run, and it answers these questions from your own data. The answers are on
the dashboard the integration creates for you.
