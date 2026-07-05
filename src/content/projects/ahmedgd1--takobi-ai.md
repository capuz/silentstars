---
repo: "AhmedGD1/takobi_ai"
name: "takobi_ai"
description: "🐙 Behavior tree framework for Godot 4, built in C#"
readmeQualityOk: true
url: "https://github.com/AhmedGD1/takobi_ai"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["ai", "behavior-tree", "csharp", "gamedev", "gamedevelopment", "godot", "godot4", "godotengine"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-30T22:16:51Z"
lastCommitAt: "2026-07-05T06:33:32Z"
lastReleaseAt: "2026-07-02T00:31:35Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["AhmedGD1"]
openGraphImageUrl: "https://opengraph.githubassets.com/03c02d438eae0a7cc1f3ecfb96c1ee3c656f22c64a157010111d2f2a83179e08/AhmedGD1/takobi_ai"
---

# TakobiAI

A behavior tree library for **Godot 4 / C#**, built on native Godot editor APIs

## Features

- **Live Debugger** — a dockable panel (built on Godot's `EditorDebuggerPlugin`) that visualizes tick status and node state in real time while your game runs.

- **Native profiling** — tree counts and per-tree tick times show up directly in Godot's built-in **Monitors** tab, alongside FPS and memory.

- **Custom inspectors** — method calls, signal emitters/awaiters, and Blackboard comparisons get dedicated dropdown editors instead of raw string fields.

- **Rich node library** — reactive and randomized composites (`ReactiveSequence`, `ReactiveSelector`, `Parallel`, `WeightedSelector` with `Weight`/`WeightFromBlackboard` decorators), plus a full set of decorators (`Cooldown`, `Retry`, `Timeout`, `Repeater`, and more) for controlling flow without extra scripting.
- **Blackboard binding via `$key`** — bind exported fields on any node to a Blackboard value with a `$` prefix.
- **SubTree composition** — nest and reuse whole trees as a single leaf, with optional Blackboard sharing and circular-reference protection.
- **Hierarchical State Machine (`TakobiHSM`)** — a lightweight,…
