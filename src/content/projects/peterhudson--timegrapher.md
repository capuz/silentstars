---
repo: "peterhudson/timegrapher"
name: "timegrapher"
description: "Open-source mechanical watch timegrapher with per-beat analysis"
readmeQualityOk: true
url: "https://github.com/peterhudson/timegrapher"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 32
forks: 3
openIssues: 153
closedIssues: 603
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2026-10-08T17:55:49Z"
lastCommitAt: "2026-11-22T02:08:49Z"
lastReleaseAt: "2026-11-21T22:29:11Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 45
maintainers: ["claude", "peterhudson", "Ryfly86"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d968aa257d162504dca71976455989d3e537ded5be7f8c3e0e3860e7b8dd3a8/peterhudson/timegrapher"
---

# timegrapher

An open-source timegrapher for mechanical watches that measures **every
beat** and keeps the record. Most timegraphers, including the open-source
[tg](https://github.com/vacaboja/tg) family, average a few seconds of sound
into each reading. Measuring each beat makes two kinds of analysis
possible that no open-source tool offers today:

- **Gear-train analysis over hours or days.** A damaged tooth or an
  eccentric wheel repeats once per turn of its wheel. Searching the rate
  and amplitude for periodic components points at the wheel: the escape
  wheel turns every few seconds, the fourth wheel every minute, the centre
  wheel every hour.
- **Tick-shape measurement.** Each beat has three sounds (unlock,
  impulse, drop). Their timing, levels and separation are measured on each
  pallet stone and reported as figures (see
  [docs/reference/fault-signatures.md](https://github.com/peterhudson/timegrapher/blob/HEAD/docs/reference/fault-signatures.md)).
