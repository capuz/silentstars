---
repo: "cedbossneo/q2-offload"
name: "q2-offload"
description: "Run mainline Klipper for a Qidi Q2 + Qidi Box on a separate Linux host: installer, configs, firmware CI"
readmeQualityOk: true
url: "https://github.com/cedbossneo/q2-offload"
language: "Python"
languages: ["Python", "Shell", "JavaScript"]
languagePcts: [41, 24, 24]
topics: ["3d-printing", "happy-hare", "katapult", "klipper", "mmu", "qidi", "qidi-q2"]
stars: 11
forks: 1
openIssues: 1
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-09T08:24:01Z"
lastCommitAt: "2026-11-06T12:13:20Z"
lastReleaseAt: "2026-10-29T11:00:39Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 56
maintainers: ["cedbossneo", "padgriffin"]
openGraphImageUrl: "https://opengraph.githubassets.com/92791ee06edf8659dc5df8981a6de4a167601204cba74587e400054451cc255e/cedbossneo/q2-offload"
---

# q2-offload

Run **mainline Klipper** for a **Qidi Q2 + Qidi Box** on another Linux machine (a mini PC,
a NAS, a Raspberry Pi 4/5…). The printer's own board keeps only the jobs it is good at:
it forwards the three MCU serial links over the network, runs the touchscreen
(HelixScreen) and the camera.

```
 Klipper host (x86_64 / arm64)                 Qidi Q2 printer board
 ┌──────────────────────────────┐   TCP         ┌──────────────────────────────┐
 │ Klipper ── pty ── socat ─────┼── 7001 ──────►│ socat ── USB  ── mainboard   │
 │                   socat ─────┼── 7002 ──────►│ socat ── UART ── toolhead    │
 │                   socat ─────┼── 7003 ──────►│ socat ── USB  ── Qidi Box    │
 │ Moonraker, Happy Hare        │               │ HelixScreen ──► host:7125    │
 │ Mainsail, Fluidd, autopa     │               │ webcam (/webcam/)            │
 │ Spoolman, failure detection  │               └──────────────────────────────┘
 └──────────────────────────────┘
```

Everything is configured: the Klipper configuration for the Q2 (load cell probing, adaptive
bed mesh, 200 MHz mainboard, 120 MHz toolhead), Happy Hare for the Qidi Box (NFC tags →
Spoolman with SpoolmanDB data, a…
