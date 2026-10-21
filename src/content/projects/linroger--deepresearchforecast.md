---
repo: "linroger/DeepResearchForecast"
name: "DeepResearchForecast"
description: "One prompt → auto web research → knowledge graph → multi-agent population simulation → forecast report. Live demo: https://linroger.github.io/DeepResearchForecast/"
readmeQualityOk: true
url: "https://github.com/linroger/DeepResearchForecast"
homepage: "https://linroger.github.io/DeepResearchForecast/"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-08T23:48:56Z"
lastCommitAt: "2026-10-21T08:48:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 46
maintainers: ["linroger"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a81b59d8d66e3898e5ba65ad65d77b3a199d0390f58fea8a9751170dfdbffdc/linroger/DeepResearchForecast"
---

# DeepAgentForecast

**English** | [简体中文](https://github.com/linroger/DeepResearchForecast/blob/HEAD/README.zh-CN.md)

> **Ask one question about the future. Get a researched, simulated and audited forecast.**

DeepAgentForecast is a forecasting engine that runs on your own machine. You type a question such as *"Who wins the US AI race by 2030?"* and it:

1. researches the open web and every important actor with DeerFlow 2 research agents;
2. turns what it learned into a temporal knowledge graph;
3. casts the real-world actors as LLM agents on a simulated Twitter and Reddit, advancing one calendar period per round;
4. writes a sectioned forecast report with scenario probabilities, 10 or more yes/no forecasts that can be checked later, charts, and prediction-market cross-checks.

The report is only served after it passes a strict citation and consistency audit. One dashboard shows every stage while it runs.

### Two world engines

**Default engine (`oasis-legacy`) with the reflexive world model.** Every run uses the OASIS social simulation unless it pins another engine. With `SIM_WORLD_MODEL=true` (the default, calendar mode) it keeps an explicit world state per period: each actor…
