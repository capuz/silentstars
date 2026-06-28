---
repo: "leosat/MMVJ"
name: "MMVJ"
description: "Intuitive force feedback-enabled mouse steering and more: HID and MIDI transforming I/O mapper and virtual HID manager, for Linux. "
url: "https://github.com/leosat/MMVJ"
homepage: "https://github.com/leosat/MMVJ"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["ffb", "force-feedback", "forcefeedback-steering-wheel", "game-controllers", "input-output", "linux", "mapping", "simracing", "telemetry", "virtual"]
stars: 6
forks: 0
openIssues: 36
closedIssues: 16
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-12-08T17:33:54Z"
lastCommitAt: "2026-06-28T01:34:31Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 76
undervaluedScore: 12
maintainers: ["lsatanov"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2529f593bac0a00a0e618022e3ec835163cd59977134f455682cf95da315c9c/leosat/MMVJ"
discussionCount: 2
---

# MMVJ - force-feedback-enabled mouse steering and more: HID and MIDI transforming I/O mapper and virtual HID manager, for Linux. 

[Skipto **Disclaimer/development notice**](#warning-disclaimer) ...  
[Skipto **Features**](#high-level-features-overview) ...  
[Skipto **Application glossary and arch overview**](#application-specific-glossary-and-high-level-arch-overview) ...  
[Skipto **Configuration**](#configuration) ...  
[Skipto **Build from source**](#build-from-source) ...  
[Skipto **Usage**](#usage) ...  
[Goto **FAQ**](doc/FAQ.md) ...

---

NB 1: latest release, when built with "gui" feature (enabled by default), includes steering indicator window, and main gui, both are turned on by

```
--gui
```

runtime option.

---

---

---

---

_The following image shows visual debugging of force feedback application (seen in green) with mouse to joystick steering transformation._

---

NB 2: Regarding steering emulation functionality in particular, force feedback works perfectly with "Richard Burns Rally" (tested the latest variations with NGP) and many other titles like "Euro truck sim", "Race Room", "Rush rally 3" which use **Constant force** effect to report already calculated…
