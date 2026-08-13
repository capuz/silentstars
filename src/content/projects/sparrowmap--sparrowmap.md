---
repo: "SparrowMap/sparrowmap"
name: "sparrowmap"
description: "A system for an open, public record of government vehicles on public roads, run by volunteers. Private number plates are destroyed on the camera and are never stored."
readmeQualityOk: true
url: "https://github.com/SparrowMap/sparrowmap"
homepage: "https://sparrowmap.com"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [65, 22]
stars: 13
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-08-11T04:12:03Z"
lastCommitAt: "2026-08-13T05:17:52Z"
lastReleaseAt: "2026-08-11T23:42:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 70
undervaluedScore: 34
maintainers: ["mattmontneyjr"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1330481471/9bdb51bc-76aa-412b-a7ed-226caadac7ff"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/sparrowmap"]
---

# SparrowMap

**sparrowmap.com** — a licence-plate camera network that the neighbourhood owns
instead of a police department renting.

> "And ye shall be brought before governors and kings for my sake,
> **for a testimony against them**." — Matthew 10:18

Volunteers point a camera at a public road from their own property. The camera
does all recognition locally and sends a detection event, never video. The
results land on a public map anyone can open with no account.

```
Start Sparrow.bat
  map          http://localhost:8150/
  transparency http://localhost:8150/transparency
  camera app   https://localhost:8151/app          <- note https
```

The hub ships with a **simulated town** (`sources/synthetic.py`) so the whole
system is testable against known ground truth with no hardware attached. It is
off by default; `python hub.py --sim` turns it on.

**Running a camera?** The one-tap browser camera needs no install — open the
site and press *Add a camera*. For the full local pipeline (accurate vehicle
classification, plate reading, and the trained government-vehicle head), see
**[docs/DESKTOP_NODE.md](https://github.com/SparrowMap/sparrowmap/blob/HEAD/docs/DESKTOP_NODE.md)**.

---…
