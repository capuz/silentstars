---
repo: "mindmapvault/mindmapvault-foss"
name: "mindmapvault-foss"
description: "Offline‑first encrypted mind‑map editor (FOSS, local‑only, zero telemetry)"
readmeQualityOk: true
url: "https://github.com/mindmapvault/mindmapvault-foss"
homepage: "https://www.mindmapvault.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["foss", "local-first", "mindmap", "privacy", "rust", "tauri", "zero-knowledge"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-05-01T12:53:39Z"
lastCommitAt: "2026-08-08T04:34:24Z"
lastReleaseAt: "2026-08-08T04:25:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 35
maintainers: ["kornelko2"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b60e3fa3f8f9cba1d671e57ad5473fae9df4f2286d94ddaf7b74172dbb4e5ea/mindmapvault/mindmapvault-foss"
---

# MindMapVault FOSS

> **Quick download:** Prebuilt Windows and Linux desktop artifacts are published in the repository Releases section.

MindMapVault FOSS is a local-first, privacy-focused desktop mind-mapping application.

All core functionality works offline, all data stays on the device, and the repository contains no cloud code, no telemetry, and no external service dependencies.

## UI Preview

## Demo

Interactive demo: https://mindmapvault.github.io/mindmapvault-foss/demo/

## Why This Project

MindMapVault FOSS exists as an auditable desktop implementation with a clear privacy posture.

What this repository provides:

- a React + TypeScript app for authoring and managing mind maps
- a Tauri desktop host for local filesystem integration
- encrypted local vault storage and local profile unlocking
- build and validation scripts suitable for contributors and reviewers

What this repository does not require for core use:

- a hosted backend
- an always-on internet connection
- an account registration flow

## Privacy Highlights

For reviewers (including privacy-list evaluators), the current posture is:

- local-first operation for create, edit, save, open, and export
- no…
