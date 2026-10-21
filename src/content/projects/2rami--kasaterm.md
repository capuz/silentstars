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
lastCommitAt: "2026-10-21T08:34:10Z"
lastReleaseAt: "2026-07-11T07:45:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 80
undervaluedScore: 34
maintainers: ["2rami", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/55e153f5ae09748cfa4c21bc9669e81e73e04a2a7fc63a10f8481434f617f5b9/2rami/kasaterm"
fundingLinks: ["GITHUB:https://github.com/2rami"]
---

# kasaterm

**A cross-platform GPU terminal built from scratch in Rust.**

The cell renderer, Korean IME, and PTY are implemented as their own crates without off-the-shelf libraries,<br/>
and on top of them is a **GUI that manages multiple Claude instances like students**.

[Demo](#데모) · [Strengths](#강점--전부-자체-구현했다) · [crate](#재사용-가능한-crate) · [Crosses machines](#기계를-가로지른다) · [Install](#설치--실행) · [Shortcuts](#단축키) · [Structure](#구조)

---

## Demo

---

## What is this

A self-built GUI terminal. It is a native Rust app that handles tmux with **GUI buttons, drag, and natural language** instead of prefix keys. The renderer, Korean IME, and PTY were all **built directly without relying on off-the-shelf terminal libraries.**

It can be read along two axes:

- **Below: the terminal engine.** The wgpu cell renderer, the 2-set (dubeolsik) Korean input IME, and the cross-platform PTY were each carved out as **independent crates**. They are designed so that anyone building a terminal can take just the parts.
- **Above: AI orchestration.** On top of that engine, the work of the Claude running in each pane is visible in real time through the BA GUI (Arona mode). It is not about reading logs…
