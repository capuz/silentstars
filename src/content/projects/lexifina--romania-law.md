---
repo: "lexifina/romania-law"
name: "romania-law"
description: "Romania: law history, one commit per law taking effect (sources so far)"
readmeQualityOk: true
url: "https://github.com/lexifina/romania-law"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 152
forks: 10
openIssues: 0
closedIssues: 0
watchers: 6
contributors: 0
recentReleases: 0
createdAt: "2026-10-28T16:02:00Z"
lastCommitAt: "2026-11-04T02:58:00Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 25
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/bbba53360ff015ef790e3b87f79e39b630ff30ac9daebdaa56a489bf0b727845/lexifina/romania-law"
---

# Romania: law history in git

The law of Romania as a git history: one file per article, one commit per change on the day it took effect, and the act that made each change as the commit's author. `git blame` names the act behind every paragraph, `git log` lists every change to an article, and the tools give the text in force on any date. The texts are in Romanian, as published.

It follows the shared design of [lexifina/global-law](https://github.com/lexifina/global-law), which places it at `romania/national/acts/`.

## Layout

| Where | What |
| --- | --- |
| `constitutie/1991/` | the Constitution |
| `lege/<year>/<number>/` | laws, including the codes adopted by law (Codul civil is `lege/2009/287/`) |
| `oug/<year>/<number>/` | Government emergency ordinances (Codul administrativ is `oug/2019/57/`) |
| `og/<year>/<number>/` · `hg/<year>/<number>/` | Government ordinances · Government decisions |
| `<act>/art-NNN.md` | one article per file, one paragraph, letter or point per line; art. 112^1 is `art-112-1.md` |
| `<act>/README.md` | the act's articles, versions and the decisions made by hand for it |
| [ACTS.md](https://github.com/lexifina/romania-law/blob/HEAD/ACTS.md) | every…
