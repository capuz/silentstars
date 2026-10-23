---
repo: "2rami/kasaterm"
name: "kasaterm"
description: "Rust wgpu terminal"
originalDescription: "Rust wgpu 터미널"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/2rami/kasaterm"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
stars: 13
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-05-11T15:34:45Z"
lastCommitAt: "2026-10-23T12:04:38Z"
lastReleaseAt: "2026-07-11T07:45:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 34
maintainers: ["2rami", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d30c9fb6c19f0da1de3d607d42b8981feabb39308e25bc78528b1feb5ac4eb58/2rami/kasaterm"
fundingLinks: ["GITHUB:https://github.com/2rami"]
---

# kasaterm

**A cross-platform GPU terminal built from scratch in Rust.**

The cell renderer, Korean IME, and PTY are implemented as our own crates without off-the-shelf libraries, and on top of them sits a **GUI that oversees several Claudes like students**.<br/>

[Demo](#데모) · [Strengths](#강점--전부-자체-구현했다) · [crate](#재사용-가능한-crate) · [Crosses machines](#기계를-가로지른다) · [Install](#설치--실행) · [Shortcuts](#단축키) · [Structure](#구조)

---

## Demo

---

## What is this

This is a homemade GUI terminal. It is a native Rust app that handles tmux through **GUI buttons, drag-and-drop, and natural language** instead of prefix keys, and the renderer, Korean IME, and PTY were all built directly **without relying on off-the-shelf terminal libraries.**

There are two layers to read it by:

- **Below — the terminal engine.** The wgpu cell renderer, the 2-set (Dubeolsik) Korean IME, and the cross-platform PTY are each carved out as an **independent crate**. It is designed so that anyone building a terminal can take just the parts they need.
- **Above — AI orchestration.** On top of that engine, each pane's running Claude work is shown in real time in the BA GUI (Arona mode). Rather than reading logs,…
