---
repo: "lnds/kimun"
name: "kimun"
description: "Code health from the terminal: a grade for your project, complexity, duplication, git hotspots, ownership and the impact of a change. A CLI written in Rust."
readmeQualityOk: true
url: "https://github.com/lnds/kimun"
homepage: "https://kimun.tools"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["cli", "code-metrics", "code-quality", "cognitive-complexity", "cyclomatic-complexity", "developer-tools", "git", "rust", "static-analysis", "technical-debt"]
stars: 27
forks: 8
openIssues: 6
closedIssues: 85
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-02-07T16:21:11Z"
lastCommitAt: "2026-10-21T21:15:25Z"
lastReleaseAt: "2026-05-28T19:12:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 54
maintainers: ["lnds", "roramirez"]
openGraphImageUrl: "https://opengraph.githubassets.com/a11fb65d2d4de51b6908243d5f69d0b2870692d57202948a955d3e14123ddef3/lnds/kimun"
fundingLinks: ["GITHUB:https://github.com/lnds", "PATREON:https://patreon.com/lnds"]
---

# Kimün (km)

A fast command-line tool for code analysis, written in Rust. Run `km score` on any project to get an overall health grade (A++ to F--) across five quality dimensions — cognitive complexity, duplication, indentation depth, Halstead effort, and file size — with a list of the files that need the most attention.

```
$ km score
Code Health Score
──────────────────────────────────────────────────────────────────
 Project Score:  A (91.2)
 Files Analyzed: 142
 Total LOC:      19,084
──────────────────────────────────────────────────────────────────
 Dimension                 Weight   Score   Grade
──────────────────────────────────────────────────────────────────
 Cognitive Complexity         32%    84.1   B+
 Duplication                  21%   100.0   A++
 Indentation Complexity       16%    93.2   A+
 Halstead Effort              21%    87.5   A-
 File Size                    10%   100.0   A++
──────────────────────────────────────────────────────────────────

 Files Needing Attention (worst per-file scores, excl. duplication)
──────────────────────────────────────────────────────────────────
 Score  Grade  File                       Issues…
