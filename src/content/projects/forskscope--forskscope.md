---
repo: "forskscope/forskscope"
name: "forskscope"
description: "Diff through Exploring 🕵️‍♀️ GUI tool with cross-platform support 💻️ named after \"forske forskjell\" (research difference) 🤍"
readmeQualityOk: true
url: "https://github.com/forskscope/forskscope"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 7
forks: 1
openIssues: 20
closedIssues: 87
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-06-13T02:50:32Z"
lastCommitAt: "2026-10-05T10:47:32Z"
lastReleaseAt: "2025-02-09T13:07:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 95
undervaluedScore: 75
maintainers: ["nabbisen"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/814438636/8fb7f587-edd4-4ec3-9237-069ed1a806b7"
---

# ForskScope

Diff and merge through Exploring 🕵️‍♀️ GUI tool, local-first, with cross-platform support 💻️ named after "*forske forskjell*" (research difference) 🤍

```
forskscope old/src/main.rs new/src/main.rs
```

ForskScope opens two files side by side, highlights every change at line and character level, and lets you apply hunks from left to right with a single keystroke. It also compares two directories at once through the Explorer view. Everything runs locally — no accounts, no uploads, no telemetry.

Every change is navigable with F7/F8 and applied with Enter or the **Use** button. Character-level highlighting shows what actually changed within a line.

Browse two directories side by side, see at a glance which files match, and open any pair in a diff tab.

---

## Why ForskScope

Most Unix/Linux workers reach for `vimdiff`, `git diff`, or a web-based paste tool when they need to compare files. These work but they don't give a persistent, navigable side-by-side view with merge support. WinMerge does — but only on Windows.

ForskScope fills that gap: a desktop app built on [Dioxus](https://dioxuslabs.com/) and a pure-Rust diff engine ([similar…
