---
repo: "johnnyh1975/roombapy-prime"
name: "roombapy-prime"
description: "Async Python client for iRobot's cloud: Prime/V4 robots over cloud MQTT and REST, and the cloud side of Classic robots (maps, mission history, parts). Typed, tested on real robots."
readmeQualityOk: true
url: "https://github.com/johnnyh1975/roombapy-prime"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 12
forks: 1
openIssues: 5
closedIssues: 72
watchers: 2
contributors: 1
recentReleases: 6
createdAt: "2026-07-11T05:06:13Z"
lastCommitAt: "2026-10-17T07:58:22Z"
lastReleaseAt: "2026-07-20T20:32:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 55
maintainers: ["johnnyh1975", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d346ed7c8a18386358a77925de95e21b326d2a9da02016e64ce5da8fbddcf79b/johnnyh1975/roombapy-prime"
---

# roombapy-prime

An independent, async Python client library for **iRobot's cloud**, for both
robot generations:

- **Prime/V4 robots** — the successor line to the Classic devices — are
  reached entirely through it: login, cloud MQTT (state, commands, live
  map) and the REST API (maps, favorites, schedules, mission history).
- **Classic robots** (900 series, i/s/j series) are controlled locally by
  [roombapy](https://github.com/pschmitt/roombapy). This library carries
  their **cloud side**: maps (`pmaps`), mission history, part counters,
  favorites and automations.

One login per account serves every robot on it (`CloudAccount`).

> **Status: v0.7.1.** Reading and writing both work
> against real hardware, confirmed across a dozen field testers' accounts:
> login, MQTT, mission control, schedules, map edits, favorites, robot
> settings, and **region-based cleaning** — sending a robot to specific
> rooms, from a saved favorite, built from scratch, and with the *scope*
> confirmed rather than merely the delivery: a single-room command on a
> Combo 105 covered 234 sq ft against two whole-house runs at 644.
>
> **Splitting and merging rooms** are confirmed on hardware too. The
>…
