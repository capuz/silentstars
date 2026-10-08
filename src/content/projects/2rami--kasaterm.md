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
languagePcts: [76]
stars: 13
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 3
createdAt: "2026-05-11T15:34:45Z"
lastCommitAt: "2026-10-08T10:51:37Z"
lastReleaseAt: "2026-07-11T07:45:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 41
maintainers: ["2rami", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2381d6558a8739d7177b54edd4624728b5a4f4235b3a974a1fe1f73ad6ff6ffa/2rami/kasaterm"
fundingLinks: ["GITHUB:https://github.com/2rami"]
---

# kasaterm

**A cross-platform GPU terminal built from scratch in Rust.**

I built the cell renderer, Korean IME, and PTY as their own crate without using off-the-shelf libraries, and on top of that I added a **GUI that manages multiple Claude instances like students**.<br/>

[Demo](#데모) · [Strengths](#강점--전부-자체-구현했다) · [crate](#재사용-가능한-crate) · [Crosses machines](#기계를-가로지른다) · [Install](#설치--실행) · [Shortcuts](#단축키) · [Structure](#구조)

---

## Demo

---

## What is this

It's a self-made GUI terminal. It's a native Rust app that handles tmux through **GUI buttons, drag-and-drop, and natural language** instead of prefix keys, and I built the renderer, Korean IME, and PTY directly **without relying on existing terminal libraries.**

You can read it along two axes:

- **Below: the terminal engine.** The wgpu cell renderer, the two-set (dubeolsik) Korean IME, and the cross-platform PTY are each split into **independent crates**. They're designed so that anyone building a terminal can take just the parts they need.
- **Above: AI orchestration.** On top of that engine, the work of the Claude running in each pane is shown in real time in the BA GUI (Arona mode). It doesn't mean reading…
