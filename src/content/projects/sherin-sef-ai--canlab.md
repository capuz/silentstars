---
repo: "Sherin-SEF-AI/CanLab"
name: "CanLab"
description: "PyQt6 desktop app for reverse-engineering CAN bus captures. Offline analysis finds counters, checksums and signal boundaries; the DBC builder verifies definitions against real frames; exports DBC, openpilot and Wireshark dissectors. UDS and OBD-II diagnostics. Injection is bench-only and stays disarmed until you arm it."
readmeQualityOk: true
url: "https://github.com/Sherin-SEF-AI/CanLab"
homepage: "https://sherin-sef-ai.github.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["canbus", "groq-api", "reverse-engineering", "automotive", "automotive-security", "can-bus", "can-fd", "obd2", "pyqt6", "python"]
stars: 84
forks: 9
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 1
createdAt: "2026-04-27T04:47:45Z"
lastCommitAt: "2026-09-12T08:04:58Z"
lastReleaseAt: "2026-09-11T18:03:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 30
maintainers: ["Sherin-SEF-AI"]
openGraphImageUrl: "https://opengraph.githubassets.com/afd59b2b9d9c1740804f3c4d44eb7cfbab87ae3e49e86e57719d0d0eb51bdc3b/Sherin-SEF-AI/CanLab"
---

# CanLab

**A desktop (PyQt6) tool for reverse-engineering CAN bus data.**

Load a capture, inspect frames and signals, run offline analysis to find
counters, checksums and signal boundaries, optionally get AI help interpreting
an ID, and build and export a DBC. It also includes diagnostics (UDS, ISO-TP,
J1939, OBD-II) and, for isolated bench use only, injection, replay, fuzzing and
a man-in-the-middle gateway.

> **Status:** actively developed, single-author project. It runs and is covered
> by an automated test suite (see [Testing](#testing)), but treat it as
> **alpha**: some features need optional dependencies, some analysis methods are
> heuristics (see [Limitations](#limitations)), and it has not been validated
> across a wide range of real vehicles.

---

## Safety

> The **INJECTION** and **GATEWAY** features transmit frames onto a bus.
> **Use them only on isolated bench setups:** a benchtop ECU, `vcan0`, or
> dedicated lab hardware. Injecting or forwarding frames on a live vehicle bus
> can interfere with braking, steering and airbag systems.
>
> Built-in guards:
>
> - A safety warning you have to accept on first launch. The acceptance is
>   remembered, so it appears…
