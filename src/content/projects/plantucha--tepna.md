---
repo: "Plantucha/Tepna"
name: "Tepna"
description: "Local-first physiological analyzers — oximetry, HRV, CGM, ECG . No network, no CDNs, no accounts. "
readmeQualityOk: true
url: "https://github.com/Plantucha/Tepna"
homepage: "https://tepna.net/"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [56, 26]
topics: ["cgm", "cpap", "ecg", "h10", "hrv", "lingo", "o2ring", "oximetry", "polar", "resmed"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-01T19:13:11Z"
lastCommitAt: "2026-09-23T08:47:34Z"
lastReleaseAt: "2026-09-07T22:49:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 68
maintainers: ["Plantucha"]
openGraphImageUrl: "https://opengraph.githubassets.com/62d904ac4a6a475b8b35711cc676522228e97ef37357958af227f97b2ded78f7/Plantucha/Tepna"
discussionCount: 1
---

# Tepna — the Dex Suite

### Read one raw biosignal → grade every number → fuse across signals.
**Your data never leaves the browser — and CI proves it on every commit.**

A fleet of local-only, single-signal physiological analyzers. No upload. No accounts. No network.

**[tepna.net](https://tepna.net)**  ·  [github.com/Plantucha/Tepna](https://github.com/Plantucha/Tepna)

<sub>README last synced to commit `cdae44a5` (2026-09-06). Next refresh: `git log --oneline cdae44a5..origin/main`
lists exactly what this page has not seen yet — fold that in, then move this stamp.</sub>

</div>

> **One signal in, honest numbers out.** Each analyzer reads **one** raw biosignal from a consumer
> device, derives metrics from it, and reports inward over a shared event bus (**Ganglior**) so a
> fusion layer (the **Integrator**) can read across them. Every number carries an **evidence grade**,
> so you always know which kind of number you're looking at. And "100% client-side" isn't a promise
> — it's a **test**: a headless privacy gate boots every shipped surface and fails the build if
> anything so much as *reaches* for the network.

---

## 🧭 Why this exists

The story goes that August…
