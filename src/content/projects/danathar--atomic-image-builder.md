---
repo: "Danathar/atomic-image-builder"
name: "atomic-image-builder"
description: "A utility to create bootc fedora atomic images in github or create one from an existing install"
readmeQualityOk: true
url: "https://github.com/Danathar/atomic-image-builder"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["fedora", "ublue"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-03-21T14:03:23Z"
lastCommitAt: "2026-08-28T15:33:09Z"
lastReleaseAt: "2026-08-26T20:26:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 62
maintainers: ["Danathar", "danathar-atomic-hive[bot]", "quality-agent[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c46574c2e3b5a35f5a5a241e49e146111fc1150fda51145c9f3a1bdc3dc7e00d/Danathar/atomic-image-builder"
---

# Atomic Image Builder

A guided terminal tool for creating and updating GitHub-backed bootc image repositories — for people who want a custom image without learning the full template and workflow setup first. (The author RECOMMENDS YOU LEARN anyway!) Works with [Universal Blue](https://universal-blue.org) and [Fedora Atomic desktops](https://fedoraproject.org/atomic-desktops/).

> [!TIP]
> **Safe to explore — it won't touch the system you're running on.** Everything happens on GitHub: it creates a new repo and lets GitHub Actions build your image. It never modifies, rebases, or removes packages from your current install. Switching your machine to the built image is a separate, deliberate step you take later.

> [!WARNING]
> **0.9 beta, not fully tested.** Review the changes it makes before applying them.

## Quick start

**Have Homebrew?** ([Bazzite](https://bazzite.gg), [Bluefin](https://projectbluefin.io), and [Aurora](https://getaurora.dev) ship with it.)

```bash
brew tap danathar/aib https://github.com/Danathar/atomic-image-builder
brew install danathar/aib/atomic-image-builder
aib-tool
```

**Have Podman?**

```bash
curl -fsSL…
