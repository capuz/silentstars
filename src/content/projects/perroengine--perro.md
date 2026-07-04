---
repo: "PerroEngine/Perro"
name: "Perro"
description: "🐕 Perro — A game engine written in Rust attemping to bridge the gap between simplicity, safety, and performance"
url: "https://github.com/PerroEngine/Perro"
homepage: "https://perroengine.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["game-engine", "rust", "game-development", "gamedev", "open-source"]
stars: 51
forks: 3
openIssues: 0
closedIssues: 1
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2025-08-18T21:29:46Z"
lastCommitAt: "2026-07-04T06:11:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 50
maintainers: ["TiernanDeFranco"]
openGraphImageUrl: "https://opengraph.githubassets.com/02ff5bbd81e32461f5262b011e927085978cbf3b4eeb3520936f0c1452ceb412/PerroEngine/Perro"
fundingLinks: ["KO_FI:https://ko-fi.com/perroengine", "CUSTOM:https://perroengine.com/sponsor"]
---

# Perro Engine

</div>

**Perro** is an experimental, open-source game engine written in **Rust**. With a focus on performance and simplicity without sacrificing either.

## Philosophy

- **Simple To Learn**: start with scenes, nodes, and Rust scripts without large registration steps or boilerplate.
- **Flexible To Use**: removes a lot of borrow checker issues by having direct apis and scoped closures for when we need mutable access, seperating state from the script behavior means we will never have a runtime borrow fail.
- **Fast In Release**: nodes and scripts are laid out for efficient node and state access, all resources are statically baked in release for efficient and quick retrieval

## Design Goals

- **Full Game-Making Scope**: 2D, 3D, and UI all matter. Perro aims to support both 2D and 3D performantly, with high frame rates and a workflow that stays simple.
- **Simple Start**: get first scene and script running quickly, with minimal setup and no script-registration boilerplate.
- **Compiler-Managed Workflow**: let Perro sync scripts, generate glue code, and prepare supported assets so project setup stays small.
- **Split Model**: scripts are just Rust files (lifecycle +…
