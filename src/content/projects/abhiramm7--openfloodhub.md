---
repo: "abhiramm7/openfloodhub"
name: "openfloodhub"
description: "Open-source, self-hostable flood-forecasting model — a free alternative to Google Flood Hub. Per-gauge 1D CNN with pretrained checkpoints."
readmeQualityOk: true
url: "https://github.com/abhiramm7/openfloodhub"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 21
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-18T16:40:22Z"
lastCommitAt: "2026-08-11T04:50:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 39
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5d99e33abd0343a10b63d831a04fe7623e159ce8fded117e91478ca93ff7376/abhiramm7/openfloodhub"
---

# OpenFloodHub

An open-source, self-hostable alternative to [Google Flood Hub](https://sites.research.google/floods/).

Google Flood Hub runs one global model: a single neural network, trained across thousands of basins, that predicts streamflow everywhere from one set of weights. OpenFloodHub does the opposite. It trains a separate small model for each river gauge, on that gauge's own history.

That tradeoff is the whole point of the project:

- A model that only has to learn one catchment can be tiny (about 50k parameters), train in 90 seconds on a laptop CPU, and you can actually inspect what it learned for that specific river.
- A global model generalizes to places with no gauge at all, which a per-site model cannot do. You need a few years of record for each gauge before you can train it.

So this is not a drop-in replacement for everything Flood Hub does. It is a different bet: that for a known set of gauges you care about, a specialized local model is simpler to run, cheaper to retrain, and easier to reason about than one big model trying to cover the planet.

The repo ships with a working deployment for the gauges around Washington, DC.

> **Caveat.** This is a research…
