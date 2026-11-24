---
repo: "rhiza-research/rhiza-weather-skills"
name: "rhiza-weather-skills"
description: "AI skills"
readmeQualityOk: true
url: "https://github.com/rhiza-research/rhiza-weather-skills"
homepage: "https://rhizaresearch.org/rhiza-weather-skills/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 28
closedIssues: 10
watchers: 0
contributors: 8
recentReleases: 1
createdAt: "2026-04-15T20:06:37Z"
lastCommitAt: "2026-11-24T01:57:43Z"
lastReleaseAt: "2026-11-21T01:13:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 62
maintainers: ["geflaspohler", "tescalada", "adkinsjd"]
openGraphImageUrl: "https://opengraph.githubassets.com/24be2f108979d8f599a9fe84a335df4ffab6a92f8a19cdc12483be7b1f869fb2/rhiza-research/rhiza-weather-skills"
---

# Weather Skills

> ⚠️ **Under active development — not production ready.**
>
> These skills are an early experiment in tool composition for weather/climate
> data pipelines. Interfaces, dataset schema, and skill boundaries may change
> without notice. Fetchers hit real APIs and require credentials; middle-
> pipeline skills have only been smoke-tested on small synthetic data. Do not
> use in any automated workflow you rely on, and do not assume outputs are
> scientifically validated. Expect breakage.

Small tools an AI agent can run to fetch weather data and transform it. Each
skill is a command-line script. They share one Zarr file format so outputs of
one skill can feed into the next — see
[`STANDARD_DATASET.md`](https://github.com/weather-skills/weather-skills-core/blob/main/docs/weather-skill-authoring/references/STANDARD_DATASET.md).

Built as [Agent Skills](https://agentskills.io) by Rhiza Research.
