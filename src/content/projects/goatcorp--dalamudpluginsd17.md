---
repo: "goatcorp/DalamudPluginsD17"
name: "DalamudPluginsD17"
description: "Dalamud plugin manifests"
url: "https://github.com/goatcorp/DalamudPluginsD17"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 139
forks: 341
openIssues: 4
closedIssues: 17
watchers: 3
contributors: 284
recentReleases: 0
createdAt: "2022-07-28T21:02:04Z"
lastCommitAt: "2026-06-28T01:47:33Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 96
undervaluedScore: 51
maintainers: ["MidoriKami", "Kagekazu", "LatencyBryer"]
openGraphImageUrl: "https://opengraph.githubassets.com/d44d013287d59473b2d090351fd35bfeded09b392e8fbc7b2a0fc9b24815b3ff/goatcorp/DalamudPluginsD17"
---

# DalamudPluginsD17

This is the plugin repository for the [Dalamud plugin framework for Final Fantasy XIV](https://github.com/goatcorp/Dalamud). This repository implements [DIP17](https://github.com/goatcorp/DIPs/blob/main/text/17-automated-build-and-submit-pipeline.md) to make the submission process easier and faster.

---

## Table of Contents

- [Publishing your plugin](#publishing-your-plugin)
  - [Preparing your repository](#preparing-your-repository)
  - [Approval criteria](#approval-criteria)
  - [Technical criteria](#technical-criteria)
  - [Submitting](#submitting)
- [Updating your plugin](#updating-your-plugin)
- [Rebuilding in a PR](#rebuilding-in-a-pr)
- [Secrets](#secrets)
- [Policies & Guidelines](#policies-and-guidelines)

---

## Publishing your plugin

### Preparing your repository

Before submitting, make sure your plugin repository is in order:

1. Ensure your plugin is on a publicly accessible Git repo (GitHub, GitLab, or any self-hosted Git instance that allows HTTP clones without authentication).
2. Update your `.csproj`:
   - **(Preferred for most plugins)** Set your SDK to the latest `Dalamud.NET.Sdk` version. See the [sample…
