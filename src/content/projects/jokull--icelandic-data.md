---
repo: "jokull/icelandic-data"
name: "icelandic-data"
description: "Data toolkit for Icelandic public data, built around Claude Code"
readmeQualityOk: true
url: "https://github.com/jokull/icelandic-data"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 57
forks: 3
openIssues: 0
closedIssues: 5
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-01-04T16:10:14Z"
lastCommitAt: "2026-11-19T12:00:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 43
maintainers: ["jokull", "gudrodur", "ShakyPizza"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c494a71330c3fbfe637926da6237ea96a48bd99ca843886479287560baddb73/jokull/icelandic-data"
---

# Icelandic Data

Data toolkit for Icelandic public data. The `.agents/skills/` files document each data source — API endpoints, series codes, encoding quirks, classification changes — and the `scripts/` directory has Python scripts that fetch, clean, and transform the data. It's harness-agnostic: any agent that can read the skills and run the scripts they reference (Claude Code, Codex, and others) works.

    &nbsp; <strong><a href="https://hjalli.com/about/">Hjálmar Gíslason</a></strong><br>
    &nbsp; Founder &amp; CEO of GRID<br>
    &nbsp; Previously founder of DataMarket (acquired by Qlik)

The **data sources** badge reports upstream health, not this repo's code: a source only turns it
red after **7 straight days** down or returning the wrong shape. Anything shorter is weather —
these are public APIs and they blink. Details in
[`AGENTS.md`](https://github.com/jokull/icelandic-data/blob/HEAD/AGENTS.md#flake-vs-dead); raw history is on the
[`health-history`](https://github.com/jokull/icelandic-data/tree/health-history) branch.
