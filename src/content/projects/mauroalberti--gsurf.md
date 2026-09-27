---
repo: "mauroalberti/gSurf"
name: "gSurf"
description: "Geological surfaces and topography"
readmeQualityOk: true
url: "https://github.com/mauroalberti/gSurf"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["structural-geology", "earth-sciences", "geological-surfaces", "python"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2012-04-07T22:30:36Z"
lastCommitAt: "2026-09-27T09:27:22Z"
lastReleaseAt: "2018-02-25T17:46:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 57
maintainers: ["mauroalberti"]
openGraphImageUrl: "https://opengraph.githubassets.com/722c96f3903f926bcc0365a3965ebb57fe0d1217993fb487c647b6462e9380bc/mauroalberti/gSurf"
---

# gSurf

Structural geology you steer by hand: the answer is recomputed on every frame,
not behind a "Calculate" button, so a parameter is something you sweep through
rather than something you guess and check.

```bash
gsurf
```

Four tools so far. **Plane on a DEM** lays an unbounded geological plane on the
topography and shows where it crops out while you turn the dial. **Fold axes**
drags a circular window across a map of bedding attitudes and shows, on a
stereonet that follows it, the girdle the poles spread on and the axis they
turn about. **Sections** drags a section line over the map and redraws the
geology under it as it moves, which turns the section from a result into an
instrument: you find where the fault is by watching where it goes. **Trace
editor** opens a `.gstruct` on the map and draws, along each trace, what is
actually in force at every metre of it and where that comes from — then lets you
write the next line of the file against the picture.

They are picked from one launcher, and the tool comes before the question: pick
one and it asks for the sources *it* takes, with what it cannot run without
marked as required — the plane needs a DEM, the fold axes need…
