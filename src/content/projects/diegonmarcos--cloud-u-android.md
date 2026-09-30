---
repo: "diegonmarcos/cloud-u-android"
name: "cloud-u-android"
description: "Android Parallel Space / Virtual Engine — data-ownership workspace built on the cloud/ declarative framework"
readmeQualityOk: true
url: "https://github.com/diegonmarcos/cloud-u-android"
language: "Kotlin"
languages: ["Kotlin", "TypeScript"]
languagePcts: [48, 29]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-04-22T17:26:11Z"
lastCommitAt: "2026-09-30T09:55:50Z"
lastReleaseAt: "2026-08-26T15:40:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 53
maintainers: ["diegonmarcos", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/f1c63cf5b8cea16432931615b08c4422148939ef56798308b672174fbe3187d1/diegonmarcos/cloud-u-android"
---

# cloud-u-android

Android **Parallel Space / Virtual Engine** workspace — data-ownership tooling
built on the same declarative framework as [`cloud/`](https://github.com/diegonmarcos/cloud-infra).

> **Mission**: "You paid for the device. The OS treats you as a guest in your
> own apps. This repo is a sub-OS that sits between real Android and a guest
> app, so **your data stays yours** — no root required."

---

## Why this repo exists

Modern Android hides every app's `/data/data/<pkg>/` behind the same isolation
wall that keeps apps from spying on each other. That wall also blocks **you**
from backing up, exporting, or archiving your own WhatsApp history, notes,
chat databases, and so on. Two answers exist in 2026:

1. **Patch the APK** — works on simple apps, loses to Play Integrity on any
   hardened app (banking, streaming, messaging with E2EE attestation).
2. **Host the app inside a virtual engine** — the host process owns the
   syscalls, so every file the guest writes lives under a path **you**
   control. Works against hardened apps because the guest's *own* signature
   stays intact; it never notices it's being watched.

This repo is option 2, with option 1…
