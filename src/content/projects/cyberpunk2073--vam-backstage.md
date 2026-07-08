---
repo: "cyberpunk2073/vam-backstage"
name: "vam-backstage"
description: "VAR Package Manager for Virt-a-Mate"
readmeQualityOk: true
url: "https://github.com/cyberpunk2073/vam-backstage"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-04-18T19:41:57Z"
lastCommitAt: "2026-07-08T05:35:35Z"
lastReleaseAt: "2026-07-08T05:46:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 66
undervaluedScore: 57
maintainers: ["cyberpunk2073"]
openGraphImageUrl: "https://opengraph.githubassets.com/2dee14fb8637f7e446635c53b3023a3efb8cc2037714c6089c535a831bd9cd1a/cyberpunk2073/vam-backstage"
---

# VaM Backstage [](https://github.com/cyberpunk2073/vam-backstage/actions/workflows/ci.yml)

A desktop app for managing [Virt-a-Mate](https://www.virtamate.com/) `.var` packages. Scans your library, builds a dependency graph, and separates content you actually installed from content that's only there because something depends on it; it then hides the clutter from VaM's content browser automatically. Browse your library contents, search and install from the VaM Hub with full dependency resolution.

## Why

VaM treats every `.var` in `AddonPackages/` equally. Install a scene that pulls in 40 dependency packages and suddenly your scenes, looks, and clothing lists are full of stuff you never asked for. There's no built-in way to tell what's a dependency and what's yours, and no tooling to manage any of it.

## Features

**Hide dependency clutter.** Dependency scenes, looks, poses, clothing, and hairstyles are automatically hidden from VaM's content browser. Nothing is modified or deleted; toggle hidden/favorite per-package or per-item at any time.

**Dependency graph.** Full dependency tree for every package: what it needs, what depends on it, what's missing and broken. Uninstalling a…
