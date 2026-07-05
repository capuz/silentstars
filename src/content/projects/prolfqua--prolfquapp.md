---
repo: "prolfqua/prolfquapp"
name: "prolfquapp"
description: "Generating Dynamic DEA Reports with the prolfqua R Package"
readmeQualityOk: true
url: "https://github.com/prolfqua/prolfquapp"
language: "R"
languages: ["R"]
languagePcts: [66]
stars: 6
forks: 5
openIssues: 8
closedIssues: 11
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-05-19T12:21:31Z"
lastCommitAt: "2026-07-05T20:56:03Z"
lastReleaseAt: "2025-03-04T16:34:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 82
maintainers: ["wolski", "leoschwarz"]
openGraphImageUrl: "https://opengraph.githubassets.com/de76d5c759b65decd26186470465c22089693592b61367929af5486d8a816719/prolfqua/prolfquapp"
---

# prolfquapp (ˌproʊˈlɛf.kə.ˌæp): Generating Dynamic DEA Reports using a command line interface to the prolfqua R Package

Read on JPR <https://pubs.acs.org/doi/10.1021/acs.jproteome.4c00911> "prolfquapp ─ A User-Friendly Command-Line Tool Simplifying Differential Expression Analysis in Quantitative Proteomics"

*Prolfquapp* is a command-line interface to the [prolfqua](https://github.com/fgcz/prolfqua) R package ([doi](https://pubs.acs.org/doi/10.1021/acs.jproteome.2c00441)) for protein differential expression analysis. It preprocesses outputs from DIA-NN, MaxQuant, FragPipe, and Spectronaut, and generates HTML reports, Excel tables, rank files, and SummarizedExperiment objects for downstream tools such as [ExploreDE](https://github.com/fgcz/exploreDE).

## Using an LLM agent to set up the analysis

If you are using an LLM coding agent (such as Claude Code) to set up your differential expression analysis with
prolfquapp, point it at the bundled [prolfquapp-dea skill](https://github.com/prolfqua/prolfquapp/blob/HEAD/prolfquapp-dea/SKILL.md). The skill file captures the full
CLI workflow — preparing the input directory, designing the annotation and contrasts, choosing the software…
