---
repo: "oaustegard/experiments"
name: "experiments"
description: "Random vibe-experiments"
readmeQualityOk: true
url: "https://github.com/oaustegard/experiments"
language: "Python"
languages: ["Python", "C"]
languagePcts: [41, 31]
stars: 5
forks: 0
openIssues: 5
closedIssues: 11
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-07-28T13:13:56Z"
lastCommitAt: "2026-11-05T14:05:20Z"
lastReleaseAt: "2026-10-22T02:13:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 58
maintainers: ["oaustegard", "web-flow"]
openGraphImageUrl: "https://opengraph.githubassets.com/fdddef2dbc496e84d16f01739be8aff59429beeb6872b420e6844f88dde4ac90/oaustegard/experiments"
---

# Experiments

Random vibe-experiments — one-off explorations and data products. Each
subdirectory is self-contained: scripts, data, and a results file
(`RESULTS.md` for pipeline runs, `README.md` for build/recipe artifacts,
or the artifact itself when it speaks for itself, like an HTML page).

**Trust conventions.** [`ANCHORS.md`](https://github.com/oaustegard/experiments/blob/HEAD/ANCHORS.md) registers every published
constant in use with its *covered range*, because a range gap is invisible from
inside a green run. Each experiment should carry an `ERRORS.md` (what was wrong,
how it was caught, which direction it pushed the conclusion — the base rate is
the most useful calibration number about a body of work) and a `recheck.py`
(a sub-5-minute fixture that checks the prose against the artifacts, so the
writeup and the data cannot drift apart between full rebuilds).
`remex-vs-higgs-ablation/` carries all three and is the reference shape.

Results are reported as they came out. Several of these are negative
results, one is a correction of earlier rejected work, and one turned
out to reproduce a 2004 paper rather than extend it — all labelled as
such rather than quietly dropped.…
