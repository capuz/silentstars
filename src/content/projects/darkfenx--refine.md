---
repo: "DarkFenX/refine"
name: "refine"
description: "EVE online fitting engine implemented in Rust"
url: "https://github.com/DarkFenX/refine"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [70, 30]
topics: ["eve-online", "mmo", "fitting", "theorycrafting", "rust"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2020-05-09T10:34:07Z"
lastCommitAt: "2026-06-28T01:35:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 67
maintainers: ["DarkFenX"]
openGraphImageUrl: "https://opengraph.githubassets.com/fef7ff3b7c0a72b3917c56d7bbfe90996b8ef09a309b0ec5e44fe3fd493290e9/DarkFenX/refine"
---

# refine
Rust Eve FIttiNg Engine

The engine's purpose is validation of fits and calculation of item/fit/fleet stats. It does not do much else - i.e. there is no fit persistence, or anything related to UI (for instance, it is not aware of item/fit names). 

# Crate layout
### refine-core
Core calculation library with Rust interface.
### refine-edh
Data handlers for core library, which provide access to EVE data.
### refine-adc
Data cachers for core library, which allow it to cache adapted data. Adapted data is processed EVE data, adapted for needs of the library.
### refine-http
HTTP interface to the library.

# Documentation
HTTP is considered as main interface, and it will be documented later. Until then, the easiest way to see how it works is to check tests and test framework client, as well as [non-synthetic-data tests](http/tests/playground/actual_data.py) which use it.

# Features
In no particular order:
- separation between user data and game data. This allows switches between different data sources (e.g. Tranquility and Singularity), and leads to very few checks done when an item is added/changed, with most checks postponed till fit validation happens
- mutated…
