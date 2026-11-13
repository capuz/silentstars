---
repo: "peterhudson/timegrapher"
name: "timegrapher"
description: "Open-source mechanical watch timegrapher with per-beat analysis"
readmeQualityOk: true
url: "https://github.com/peterhudson/timegrapher"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 23
forks: 1
openIssues: 41
closedIssues: 337
watchers: 0
contributors: 3
recentReleases: 2
createdAt: "2026-10-08T17:55:49Z"
lastCommitAt: "2026-11-13T05:41:34Z"
lastReleaseAt: "2026-11-09T21:03:16Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 46
maintainers: ["claude", "peterhudson"]
openGraphImageUrl: "https://opengraph.githubassets.com/3660b058cda7fb311e6848746880d14f11adfd0af0ca20107d6486b5504a5eca/peterhudson/timegrapher"
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

The software is a measuring tool: it reports what it measured and the
conditions it detected (clipping, a short take, an unknown lift angle, no
regular beat found), with no grades, verdicts or fault names. Reading
those…
