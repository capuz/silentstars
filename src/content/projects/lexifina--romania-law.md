---
repo: "lexifina/romania-law"
name: "romania-law"
description: "Romania: law history, one commit per law taking effect (sources so far)"
readmeQualityOk: true
url: "https://github.com/lexifina/romania-law"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 148
forks: 10
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 0
recentReleases: 0
createdAt: "2026-10-28T16:02:00Z"
lastCommitAt: "2026-11-03T11:14:30Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 25
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/d58812dc79a9d365cf31d628e055d305414a885ec7e5e4c57278fdb0fc8eef57/lexifina/romania-law"
---

# Romania: law history in git

The law of Romania as a git history: one file per article, one commit per law on the day it took effect, and the act that made each change as the commit's author. `git blame` names the act behind every paragraph; `git log` lists every change to an article; checking out a date gives the text in force that day.

It follows the shared design of [lexifina/global-law](https://github.com/lexifina/global-law), which places it at `romania/national/acts/`. The texts are in Romanian, as published.

## How it is organised

| Where | What |
| --- | --- |
| `constitutie/1991/` | the Constitution |
| `lege/<year>/<number>/` | laws, codes adopted by law included: Codul civil is `lege/2009/287/`, Legea societăților `lege/1990/31/` |
| `oug/<year>/<number>/` | Government emergency ordinances (Codul administrativ is `oug/2019/57/`) |
| `og/<year>/<number>/` | Government ordinances |
| `hg/<year>/<number>/` | Government decisions |
| `<act folder>/art-NNN.md` | one article per file, one paragraph, letter or point per line; `README.md` lists every article and the act's decisions made by hand |
| [ACTS.md](https://github.com/lexifina/romania-law/blob/HEAD/ACTS.md) |…
