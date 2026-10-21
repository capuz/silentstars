---
repo: "Plantucha/Tepna"
name: "Tepna"
description: "Local-first physiological analyzers — oximetry, HRV, CGM, ECG . No network, no CDNs, no accounts. "
readmeQualityOk: true
url: "https://github.com/Plantucha/Tepna"
homepage: "https://tepna.net/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [52, 27]
topics: ["cgm", "cpap", "ecg", "h10", "hrv", "lingo", "o2ring", "oximetry", "polar", "resmed"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-01T19:13:11Z"
lastCommitAt: "2026-10-21T17:30:49Z"
lastReleaseAt: "2026-09-07T22:49:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["Plantucha"]
openGraphImageUrl: "https://opengraph.githubassets.com/f808f248477893b41a0817437aa78c2ae1116ba996c68f6339d76f3da12e4e45/Plantucha/Tepna"
discussionCount: 1
---

# Tepna — the Dex Suite

### Read one raw biosignal → grade every number → fuse across signals.
**Your data never leaves the browser — and CI proves it on every commit.**

**[tepna.net](https://tepna.net)**  ·  [github.com/Plantucha/Tepna](https://github.com/Plantucha/Tepna)

lists what this page has not seen yet — fold that in, then move this stamp.</sub>

Tepna is a set of single-signal analyzers for the physiology sensors people actually own — a ring
oximeter, a chest strap, an armband, a CGM, a CPAP machine — plus one capture box that records them
all night on one clock. Each analyzer reads **one** raw signal, derives its metrics, and reports over a
shared bus (**Ganglior**) so a fusion layer (the **Integrator**) can read across signals. Every number
carries an **evidence grade**. The suite uploads nothing, ever: a headless gate boots every shipped surface
and fails the build if anything reaches for the network.

What it finds that **holds** ships as a graded metric. The project publishes what **fails** too — [*Dead
Ends*](https://github.com/Plantucha/Tepna/blob/HEAD/papers/dead-ends.html) is the citable map of the walls. The long-form *why* is…
