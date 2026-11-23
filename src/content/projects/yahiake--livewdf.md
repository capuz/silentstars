---
repo: "Yahiake/LiveWDF"
name: "LiveWDF"
description: "C++ Wave Digital Filter (WDF) simulator for real-time modelling of analog audio circuits."
readmeQualityOk: true
url: "https://github.com/Yahiake/LiveWDF"
language: "C++"
languages: ["C++"]
languagePcts: [98]
stars: 43
forks: 7
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-11-17T17:56:51Z"
lastCommitAt: "2026-11-22T21:20:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 34
maintainers: ["Yahiake", "jopdorp", "accrasicidis"]
openGraphImageUrl: "https://opengraph.githubassets.com/02542ede1e6211aaafc4d56a6dde751c2cf5d0fdfb9a53b6c7b8957e2ecd3c03/Yahiake/LiveWDF"
---

# LiveWDF

**An open-source, real-time Wave Digital Filter circuit simulator for audio.**

LiveWDF is a C++ project focused on simulating analog audio circuits using Wave Digital Filters (WDFs). The goal is to make circuit-level simulation practical for real-time audio processing, with guitar amplifiers and effects as a primary application.

The project is being developed around three parts: a simulation engine, a circuit editor, and an audio plugin.

## What is LiveWDF?

Rather than recreating an amplifier's sound with EQ curves or neural models, LiveWDF takes a circuit-based approach. You build a circuit from its components, and the engine simulates how that circuit behaves.

The project has two main applications built around the same simulation core:

- **Circuit Editor:** Design, modify and save circuits. The idea is to work directly with components and their values, rather than being limited to a collection of fixed amplifier models.
- **Audio Plugin:** Load circuits created in the editor and run them on live audio inside a DAW.

At the center of both is the WDF engine, which handles the circuit simulation.
