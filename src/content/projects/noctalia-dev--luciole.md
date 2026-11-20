---
repo: "noctalia-dev/luciole"
name: "luciole"
description: "A smooth, native Wayland file manager. Fast previews, tabs, split view and Miller columns."
readmeQualityOk: true
url: "https://github.com/noctalia-dev/luciole"
homepage: "https://docs.noctalia.dev"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["file-manager", "linux", "wayland"]
stars: 369
forks: 26
openIssues: 33
closedIssues: 22
watchers: 1
contributors: 14
recentReleases: 0
createdAt: "2026-10-29T08:09:12Z"
lastCommitAt: "2026-11-20T12:22:52Z"
status: "newborn"
tags: []
healthScore: 78
undervaluedScore: 23
maintainers: ["ItsLemmy", "Ly-sec", "Yocraft-2000"]
openGraphImageUrl: "https://opengraph.githubassets.com/43f77f4895d7aafb475dc2745d96685aab88628084dc49ed5b13f87bb2c82875/noctalia-dev/luciole"
---

# Luciole

A native Wayland file manager built to stay smooth: quick to start, fluid when scrolling through large folders, and previews that never block the window.

It offers grid, list and Miller column views, tabs, split view and rich file previews, and runs on any Wayland compositor. It also serves as the Open and Save file picker for other applications through xdg-desktop-portal. It pairs naturally with [Noctalia](https://github.com/noctalia-dev/noctalia) and [Umbriel](https://github.com/noctalia-dev/umbriel). Under the hood: C++23, direct Wayland and OpenGL ES, with no Qt or GTK.

> **Important**
>
> Luciole is young and actively evolving. It is usable today, but settings, shortcuts and behavior may change between releases, and rough edges remain.

## Why Luciole?

We wanted a file manager that responds as fast as we can move. Folders with thousands of files should open and scroll without a stutter, thumbnails should fill in as you go instead of freezing the view, and a second window should not cost a second application.

That shaped how Luciole is built:
