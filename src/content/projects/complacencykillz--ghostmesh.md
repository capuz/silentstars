---
repo: "ComplacencyKillz/GhostMesh"
name: "GhostMesh"
description: "Meshtastic + Flipper Zero integration for offline red team comms — remote Bad USB, killswitch, and mesh-based C2 over LoRa"
readmeQualityOk: true
url: "https://github.com/ComplacencyKillz/GhostMesh"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-03T14:24:55Z"
lastCommitAt: "2026-08-23T04:10:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 50
maintainers: ["ComplacencyKillz"]
openGraphImageUrl: "https://opengraph.githubassets.com/9455918548f2103dd0d153d3f2999d4d905878fe0cbeb89351d60f781b5077a6/ComplacencyKillz/GhostMesh"
---

# GhostMesh

**A deployable red-team mesh platform — planted sensors, encrypted command-and-control, line-of-sight control, and a destruct — running on nothing the target owns.**

GhostMesh is a **backpack that snaps onto a Flipper Zero — then detaches and stays in the field.** Attached, it turns your Flipper into a long-range mesh radio: messaging and control over LoRa, no phone, no cell, no internet, nothing the target controls. Detached and planted, it becomes an autonomous node — watching its own perimeter, holding its place on the mesh, and taking orders by line-of-sight IR from you or over the encrypted mesh from your team. Drop it, walk away, and it stays yours.

This repository is the **framework** — the sensing, signaling, and command backbone that offensive capability is built on top of. It reports, it takes commands, and it erases itself on capture. Unlicensed by design.

---

## What's Here

Everything to build one, end to end — all of it open source:

| Deliverable | Location | Status |
|-------------|----------|--------|
| **Operator app** — the Flipper FAP (C99) | [`flipper-app/`](https://github.com/ComplacencyKillz/GhostMesh/blob/HEAD/flipper-app/) | working |
|…
