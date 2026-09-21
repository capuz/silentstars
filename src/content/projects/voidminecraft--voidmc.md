---
repo: "VoidMinecraft/VoidMC"
name: "VoidMC"
description: "Modular Minecraft server framework"
readmeQualityOk: true
url: "https://github.com/VoidMinecraft/VoidMC"
homepage: "https://voidminecraft.github.io/VoidMC/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-05-03T13:03:32Z"
lastCommitAt: "2026-09-21T09:13:21Z"
lastReleaseAt: "2026-06-25T17:09:12Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 84
undervaluedScore: 60
maintainers: ["leodumont444", "dandan2611", "AdamBrutsaert"]
openGraphImageUrl: "https://opengraph.githubassets.com/63e912696101e9ce69dbf88eef3534317bdda97a777d47cb476b3575ea39f3df/VoidMinecraft/VoidMC"
---

# Void

Void is a modular Minecraft server framework written in Rust.

Instead of shipping a monolithic server with every feature enabled, Void follows a minimal core plus composable plugins model. The project is an active Epitech Innovative Project, and APIs may evolve while the architecture is being stabilized.

## Objectives

- Provide a Minecraft-compatible server foundation built from scratch in Rust.
- Keep the runtime modular: networking, protocol, codec, game systems, commands, and data live in separate crates.
- Make gameplay features extensible through Bevy ECS systems, resources, observers, plugins, and commands.
- Keep protocol handling type-safe and testable through custom codec traits and derive macros.
- Document the architecture well enough for maintainers, reviewers, and future contributors to understand the system.

## Workspace

| Path | Purpose |
|---|---|
| `void/` | Core server framework: ECS app, systems, plugins, commands, client state, world state, metrics. |
| `void-example/` | Runnable example server and logging/metrics setup reference. |
| `void-net/` | Tokio-based TCP networking layer. |
| `void-protocol/` | Minecraft packet definitions and protocol…
