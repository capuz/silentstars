---
repo: "MrTrenchTrucker/breaker"
name: "breaker"
description: "Privacy-first dictation: a phone app and a self-hosted server that turn speech into formatted text."
readmeQualityOk: true
url: "https://github.com/MrTrenchTrucker/breaker"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [91]
stars: 6
forks: 1
openIssues: 18
closedIssues: 30
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-01T01:07:38Z"
lastCommitAt: "2026-11-07T10:36:17Z"
lastReleaseAt: "2026-10-08T03:07:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 92
undervaluedScore: 53
maintainers: ["MrTrenchTrucker"]
openGraphImageUrl: "https://opengraph.githubassets.com/c16b7e81ceb55a99fb9936bebf91a28ac0948a21111adad235cfcd76afa7b78f/MrTrenchTrucker/breaker"
---

# Breaker

Open-source, privacy-first dictation system: a **phone app + self-hosted
server** that turns speech into Whisper Flow-style formatted text, with CB-slang
voice control ("Breaker Breaker" wakes, "And I'm Gone" sends).

**Voice is CB, look is trucking.** White/black/green, light + dark modes, CB mic
motif with a digital Cobra-style LED bar meter for state. The web FE and Android
app share one token set and look identical.

## How this repo is organized (read this first)

This repo follows a documented modular-architecture pattern — a Russian
nesting-doll model. Every level is documented the same complete way:

| Artifact | File | What it's for |
|---|---|---|
| Master architecture | `ARCHITECTURE.md` | The whole system: modules, connections, rules. Longer than a typical summary on purpose — it is the single source of truth. Read once; use the map + cards day-to-day. |
| Module registry (machine-checkable) | `modules.toml` | One entry per module: path, owns, does_not_own, depends_on, public, card. The consistency checker validates the tree against it. |
| Root module map | `MODULE_MAP.md` | One line per module — find the right module without opening anything. |
| Module…
