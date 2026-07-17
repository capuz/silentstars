---
repo: "samoylenkodmitry/Cranpose"
name: "Cranpose"
description: "Cranpose is a Jetpack Compose-inspired declarative Rust UI framework. https://crates.io/crates/cranpose"
readmeQualityOk: true
url: "https://github.com/samoylenkodmitry/Cranpose"
homepage: "https://samoylenkodmitry.github.io/Cranpose"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["jetpack-compose", "rust", "ui-framework"]
stars: 14
forks: 1
openIssues: 4
closedIssues: 28
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2025-10-08T07:46:35Z"
lastCommitAt: "2026-07-17T05:59:07Z"
lastReleaseAt: "2026-07-10T04:41:00Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 97
undervaluedScore: 67
maintainers: ["samoylenkodmitry"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d450da0c8f8e84c596ea44d4b54b33c9f0a4c678d4c090897aac4854dbb1eb2/samoylenkodmitry/Cranpose"
---

[https://codewiki.google/github.com/samoylenkodmitry/cranpose](https://codewiki.google/github.com/samoylenkodmitry/rs-compose)

[v0.0.40.webm](https://github.com/user-attachments/assets/df50209b-abfd-426a-b79c-a51a9543b385)

## 🌐 Live Demo

**[Try it in your browser!](https://samoylenkodmitry.github.io/Cranpose/)**

# Cranpose

Cranpose is a declarative UI framework for Rust, inspired by Jetpack Compose. It targets Desktop (Linux, macOS, Windows), Android, and Web (WASM) from a single Rust codebase. iOS is not a supported backend until a real UIKit/CAMetalLayer platform crate exists.

The composition runtime uses Slot Table V2: active groups live in preorder group, payload, and node tables, while inactive retained branches are explicit detached subtrees. Gap-table notes are historical rationale only; the active slot-table specification is [`docs/cranpose_slot_table_v2_design.md`](https://github.com/samoylenkodmitry/Cranpose/blob/HEAD/docs/cranpose_slot_table_v2_design.md).

## Quick Start via Isolated Demo

To get started, use the **Isolated Demo** template found in `apps/isolated-demo`. This project is pre-configured with the dependencies and build scripts for the implemented…
