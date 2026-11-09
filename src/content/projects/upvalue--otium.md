---
repo: "upvalue/otium"
name: "otium"
description: "a little lisp & a terminal multiplexer / operating system written in it"
readmeQualityOk: true
url: "https://github.com/upvalue/otium"
homepage: "https://otium.sh"
language: "C"
languages: ["C"]
languagePcts: [71]
topics: ["operating-systems", "lisp", "scheme", "terminal"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-14T15:22:26Z"
lastCommitAt: "2026-11-09T03:29:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 72
maintainers: ["upvalue"]
openGraphImageUrl: "https://opengraph.githubassets.com/35acb08489559f77b5baf2d02ec6214dfca1253f7d61910b6e124e760e65e23a/upvalue/otium"
---

# Otium

Otium is an experimental little vibe-coded Lisp (but this README was written by
a human). It has a focus on pragmatism, supporting live development, and
reasonable performance.

This repository contains two other programs written in Otium (& a little bit of
C). Manse, a terminal multiplexer / Lisp development environment and OtOS, a
unikernel operating system.

# The language & runtime

Here's a couple of factoids about it:

- Most directly descended from Scheme, but takes some ideas from Clojure,
  Janet, Common Lisp in terms of practicality.
- Runtime is intended to be suitable for multi-MB memory embedded systems e.g.
  ESP32, RP2350 devices.
- "Good, not great" performance. It has a modest optimizing native-code
  compiler backed by sljit.
- Aims to be solid on memory usage. It uses an Immix-inspired non-generational
  garbage collector which has a separate and tuned profile for low memory
  systems.
- Live development is a first class citizen with a dev server that allows
  querying and modifying running programs
- Has a CLOS-lite style object system primarily to support rich user interfaces
- Built-in actor-style concurrency. This runs on a single native thread; the…
