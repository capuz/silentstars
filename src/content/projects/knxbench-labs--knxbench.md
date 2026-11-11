---
repo: "KNXBench-Labs/KNXBench"
name: "KNXBench"
description: "KNXBench: A free, open-source, cross-platform KNX engineering tool born from a Linux user's refusal to accept Windows dependency. Powered by AI, questionable life choices, billions of tokens, and enough caffeine to automate a small country."
readmeQualityOk: true
url: "https://github.com/KNXBench-Labs/KNXBench"
homepage: "https://knxbench.com/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [67, 27]
topics: ["docker", "docker-image", "ets", "gui", "knx", "knx-client", "knx-ip"]
stars: 6
forks: 2
openIssues: 8
closedIssues: 32
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-10-08T12:42:12Z"
lastCommitAt: "2026-11-11T11:19:44Z"
lastReleaseAt: "2026-10-18T11:48:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 66
maintainers: ["KNXBench-Labs"]
openGraphImageUrl: "https://opengraph.githubassets.com/9faa595df28cb6f65e58fff15451ba43dfb8cafd3ef1484b7ecafb8cfaa903b0/KNXBench-Labs/KNXBench"
---

Import ETS projects, edit them with undo, document them and watch the bus talk —
  in your browser, or natively on Linux.

> [!WARNING]
> **KNXBench is alpha software.** It works, it is tested, and it will still change under
> your feet. Keep backups of every project you would miss — a KNX project is the map of a
> building somebody paid for.

## What is this?

KNXBench is an independent, open-source engineering application for **KNX** building
automation — the wired standard behind a great many light switches, blinds and heating
valves. It is made for integrators, electricians and the occasional homeowner with more
switch actuators than sense.

Bring an ETS project (`.knxproj`) or start from scratch. KNXBench shows every device,
address and link in one place, lets you change them with undo, writes the paperwork for
you, and listens to the bus over KNXnet/IP. No Windows VM required just to look up a
group address.

It is not a copy of ETS and doesn't pretend to be one: it reads ETS project files,
preserves unsupported source data where technically possible, and reports the limits.
Retained bytes are not a promise of complete ETS semantics.

## Highlights

- 📥 **Imports ETS…
