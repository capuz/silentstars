---
repo: "Lemniscate-world/kuro-rules"
name: "kuro-rules"
description: "Centralized AI coding guidelines and configuration for all my projects."
readmeQualityOk: true
url: "https://github.com/Lemniscate-world/kuro-rules"
language: "Python"
languages: ["Python"]
languagePcts: [66]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-17T09:10:11Z"
lastCommitAt: "2026-09-02T08:04:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 38
maintainers: ["github-actions[bot]", "Lemniscate-world"]
openGraphImageUrl: "https://opengraph.githubassets.com/070aff50a830a2553810b91b09b471d20032446153076819adb766b9ed8404c4/Lemniscate-world/kuro-rules"
---

# Kuro Rules ⬛

Centralized AI coding guidelines and configuration for all my projects.

## How It Works (Symlinks)

This repository contains the **master copies** of your rules.
When you run the install script, we create **symbolic links** (symlinks) in your target project pointing back here.

```mermaid
graph LR
    A[kuro-rules/AI_GUIDELINES.md] -->|Symlink| B[Sugar/AI_GUIDELINES.md]
    A -->|Symlink| C[Dissect/AI_GUIDELINES.md]
    A -->|Symlink| D[NewProject/AI_GUIDELINES.md]
```

**Benefit:** Edit `kuro-rules/AI_GUIDELINES.md` once, and **ALL** projects are instantly updated.

## Usage

### On Linux / macOS / WSL (Recommended)

1. **Install in a project:**
   ```bash
   ~/Documents/kuro-rules/install.sh /path/to/my-project
   ```

2. **Update all projects:**
   Since they are symlinks, just edit the files in this repo!

### On Windows (PowerShell)

If you are using native Windows (not WSL), symlinks behave differently.
You should check out this repo to `C:\Users\kuro\Documents\kuro-rules`.

**Option A: Junctions (Recommended for Windows)**
Windows "Junctions" or "Soft Links" work similar to Linux symlinks.
You can create a `install.ps1` script (coming soon) or use:…
