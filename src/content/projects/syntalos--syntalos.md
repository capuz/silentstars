---
repo: "syntalos/syntalos"
name: "syntalos"
description: "Synchronized data acquisition from diverse sources and flexible control for behavior experiments"
readmeQualityOk: true
url: "https://github.com/syntalos/syntalos"
homepage: "https://syntalos.org"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["neuroscience", "miniscope", "data-acquisition", "camera", "behavior", "genicam", "python", "science"]
stars: 61
forks: 7
openIssues: 16
closedIssues: 85
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2017-02-28T10:44:47Z"
lastCommitAt: "2026-09-04T08:10:50Z"
lastReleaseAt: "2024-10-01T20:03:49Z"
status: "thriving"
tags: ["legacy_hero", "funded", "community_hub"]
healthScore: 93
undervaluedScore: 53
maintainers: ["ximion", "dependabot[bot]", "caenrigen"]
openGraphImageUrl: "https://opengraph.githubassets.com/2efc6fa87fa3850393011acb14d2a80c02cc27c6c9ff75f21462b5bfda83b9a7/syntalos/syntalos"
fundingLinks: ["GITHUB:https://github.com/ximion"]
discussionCount: 25
---

Syntalos
========

Syntalos (formerly known as MazeAmaze) is a software for timestamp-synchronized parallel data acquisition from diverse data sources,
such as cameras, microendoscopes, Intan electrophysiology amplifiers or Firmata-based serial interfaces.
The software also allows user-defined closed-loop interventions via its built-in Python scripting support.
It is specifically designed for use in (neuro)scientific in vivo behavior experiments.

Syntalos is built with a set of core principles in mind:
 * Timestamps of all data sources of an experiment should be synchronized (within tolerance limits), so data at
   specific points in time can be directly compared. If hardware synchronization is unavailable, a software solution is used.
 * A data acquisition task must not block a different acquisition or processing task.
 * Data is stored in a fixed directory structure (Experiment Directory Layout, EDL) with all metadata alongside the data.
 * The software must account for experimenter error and have sane failure modes (autocorrect bad experimenter input, never have a component fail silently, ...)
 * The software must never auto-adjust parameters without logging the fact
 *…
