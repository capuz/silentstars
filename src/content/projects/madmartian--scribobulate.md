---
repo: "MadMartian/Scribobulate"
name: "Scribobulate"
description: "Lightweight native GTK4/Rust Markdown editor with annotation support"
readmeQualityOk: true
url: "https://github.com/MadMartian/Scribobulate"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["markdown", "markdown-editor", "markdown-lang", "markdown-parser", "markdown-to-html", "markdown-to-pdf", "markdown-viewer", "spec-driven-development", "specs"]
stars: 53
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-26T22:59:01Z"
lastCommitAt: "2026-10-25T07:50:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 31
maintainers: ["MadMartian"]
openGraphImageUrl: "https://opengraph.githubassets.com/130ec22456c7a9763d114c5bdfe021153e90379c4d415cf88ab03f811297449e/MadMartian/Scribobulate"
discussionCount: 0
---

# Scribobulate

A multi-platform native Markdown viewer and editor for **Linux**, **macOS**, and **Windows** —
for the documents AI agents generate. **Comment on what an agent wrote, right inside the
Markdown**, so the next agent reads your objection where you made it. Renders full-fidelity
Markdown on the CPU with effectively zero GPU memory (leaving room for those hungry Ollama
models), and live-reloads files the instant an agent changes them on disk.

> **Status: pre-release, and capable.** Rendering, the editing pane (with live
> split-preview), live reload, and conflict handling all work today —
> Scribobulate opens and displays full-fidelity Markdown (tables,
> syntax-highlighted code, task lists, images) at 0 MiB VRAM / ~80 MiB RAM as a
> single-instance multi-window, multi-tab app, reloads files as they change on disk, and
> when a change lands under unsaved edits it prompts you to reload or keep your
> work (a clean change reloads silently with a brief notice). Unsaved edits also
> survive the application dying: they are snapshotted as you type and offered back
> on the next launch.
>
> The first release is close. What I am still finding is minor — small glitches and
>…
