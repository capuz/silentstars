---
repo: "Zyphryon/Engine"
name: "Engine"
description: "A high-performance, cross-platform game engine built for speed, scalability, and creative freedom."
readmeQualityOk: true
url: "https://github.com/Zyphryon/Engine"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2025-08-30T22:41:46Z"
lastCommitAt: "2026-11-05T00:22:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 62
maintainers: ["Wolftein"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9b2f268f1dc7f061fd028f3e330df0409800a308cfed0ce70ed8f98571962a6/Zyphryon/Engine"
---

# 🌌 Zyphryon Engine
*Fast. Tight. Built from the ground up.*

**Zyphryon** is a high-performance, cross-platform **game engine** written from scratch in C++23. Every
subsystem is first-party, from the containers to the renderer, and every one is measured.

---

## ⚡ Performance

The same workloads, run in each engine and checked against the same checksums, on one machine.

| Workload | Zyphryon | Bevy 0.20 | Godot 4.7 |
|----------|---------:|----------:|----------:|
| Iterate 1M entities | **0.84 ms** | 1.00 ms | 215 ms |
| Move and frustum-cull 1M entities, spread over every core | **2.47 ms** | 2.65 ms | 39.0 ms |
| Spawn and despawn 100k entities | **1.42 ms** | 2.48 ms | 127 ms |
| Propagate a 110k-node hierarchy | **0.23 ms** | 0.41 ms | 21.1 ms |
| Four systems over 100k entities, in parallel | **0.08 ms** | 0.16 ms | 14.9 ms |
| Save a 100k-entity world | **14.5 ms** | 390 ms | — |
| Draw 100k moving sprites | **1.09 ms** | 12.5 ms | 53.2 ms |
| Draw 10k text labels, rewritten every frame | **3.51 ms** | 62.8 ms | — |
| Cull 1M sprites | **4.79 ms** | 14.5 ms | — |
| Schedule and wait on 10k tiny jobs | **1.92 ms** | 5.98 ms | — |
| Start to the first presented frame |…
