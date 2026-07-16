---
repo: "2rami/kasaterm"
name: "kasaterm"
description: "Cross-platform GPU terminal built from scratch in Rust."
originalDescription: "Rust wgpu 터미널"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/2rami/kasaterm"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-05-11T15:34:45Z"
lastCommitAt: "2026-07-15T03:28:59Z"
lastReleaseAt: "2026-07-11T07:45:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 79
undervaluedScore: 53
maintainers: ["2rami", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd151997000afdf83eff8e008b672d89eded91ab2e3425c86199e3f5f27b34ac/2rami/kasaterm"
fundingLinks: ["GITHUB:https://github.com/2rami"]
---

# kasaterm

**Cross-platform GPU terminal built from scratch in Rust.**

Cell renderer · Korean IME · Implemented PTY with our own crate without using existing libraries,<br/>and on top of that, we added a **GUI that manages multiple Claudes like a student**.

[Demo](#데모) · [Strengths](#강점--전부-자체-구현했다) · [crate](#재사용-가능한-crate) · [Installation](#설치--실행) · [Shortcuts](#단축키) · [Structure](#구조)

</div>

---

## Demo

  <br/>
  <sub>Multi-pane divided by GUI buttons and drag. Split without tmux prefix key, and Korean, color, and box-drawing are rendered by our own renderer.</sub>
</div>

---

## What is this?

It is a self-made GUI terminal. A native Rust app that handles tmux without a prefix key using **GUI buttons, drag, and natural language**, and we **built everything from scratch without relying on existing terminal libraries**, including the renderer, Korean IME, and PTY.

It can be read in two axes:

- **Below — Terminal engine.** The wgpu cell renderer, Dubeolsik Korean IME, and cross-platform PTY were each crafted as **independent crates**. Designed so that anyone wanting to create a terminal can just use the parts.
- **Above — AI orchestration.** On top of that engine, the…
