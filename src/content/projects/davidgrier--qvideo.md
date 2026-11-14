---
repo: "davidgrier/QVideo"
name: "QVideo"
description: "PyQt support for video cameras"
readmeQualityOk: true
url: "https://github.com/davidgrier/QVideo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-09-03T18:45:03Z"
lastCommitAt: "2026-11-14T10:48:54Z"
lastReleaseAt: "2026-05-04T16:57:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 81
maintainers: ["davidgrier", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8e4d92d269f93825d662f34a40386e6de55bd616e046a95fdc45c0662d639de/davidgrier/QVideo"
---

# QVideo: Qt framework for video cameras

**QVideo** is a framework for integrating video cameras into Qt projects
(PyQt6 or PyQt5; PySide6 is experimental) for scientific research.  It provides a unified, registration-based property
system so that every camera backend is controlled through the same API.  Property
trees, display widgets, and a digital video recorder are built on top of that
abstraction and require no camera-specific code. Components plug together quickly
and easily to create robust GUI-enabled machine-vision applications that ``just work''
out of the box. QVideo provides hassle-free support for high frame rates and extended
bit depths, including pixel-accurate video recording with lossless compression.
Optional jupyter integration facilitates rapid prototyping. Web-enabled display and control 
supports remote interaction and collaboration.

## Features

- **Unified camera API** — `QCamera` subclasses expose adjustable parameters
  via `registerProperty` / `registerMethod`; UI and recording layers consume
  them without knowing the underlying hardware.
- **Auto-built property trees** — `QCameraTree` reads the registered property
  map and builds a `pyqtgraph`…
