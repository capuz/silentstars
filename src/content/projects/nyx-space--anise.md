---
repo: "nyx-space/anise"
name: "anise"
description: "A thread-safe alternative to NASA SPICE toolkit, computing spacecraft, planetary, coordinate frame, instrument transformations, ground station visibility, and orbital elements. Engineered for high-throughput Python concurrent execution and flight software, with proven lunar flight heritage."
readmeQualityOk: true
url: "https://github.com/nyx-space/anise"
homepage: "https://nyxspace.com/anise"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["attitude", "ephemeris", "naif", "rust", "spice"]
stars: 287
forks: 57
openIssues: 28
closedIssues: 226
watchers: 10
contributors: 27
recentReleases: 0
createdAt: "2021-12-01T05:02:12Z"
lastCommitAt: "2026-10-29T05:49:10Z"
lastReleaseAt: "2024-09-03T05:31:38Z"
status: "thriving"
tags: ["funded", "community_hub"]
healthScore: 96
undervaluedScore: 41
maintainers: ["ChristopherRabotin", "ubeddulla", "dxbjavid"]
openGraphImageUrl: "https://opengraph.githubassets.com/c9855f996460d9faec2fac186200846907fcc858764ef5f16fb71369f13055df/nyx-space/anise"
fundingLinks: ["GITHUB:https://github.com/nyx-space"]
discussionCount: 29
---

# ANISE: Attitude, Navigation, Instrument, Spacecraft, Ephemeris

## A modern, high-performance toolkit for space mission design and operations.

**NASA TRL 9**: ANISE was used throughout the operations of the Firefly Blue Ghost lunar lander, from launch until successful landing.

-----

## Introduction

Tired of the usual complexities, global state, and lack of thread safety in legacy astrodynamics toolkits? **ANISE** is a fresh, Rust-powered alternative to the NAIF SPICE toolkit, engineered for modern computing environments.

Whether you are plotting a trajectory to Mars, orienting a constellation of satellites, or performing massive parallel analysis on the cloud, ANISE provides the tools you need to get it right.

### Why ANISE?

Space missions demand precision, but modern engineering demands efficiency and safety.

| Feature | CSPICE / SpiceyPy | ANISE |
| :--- | :--- | :--- |
| **Thread Safety** | No (Global state/locks) | **Guaranteed (Rust ownership)** |
| **Performance** | Single-threaded | **Parallel (`many` queries)** |
| **Math Validation** | Runtime errors | **Type-safe Frame checks** |
| **API Style** | Procedural (Integer IDs) | **Object-Oriented / Pythonic** |
|…
