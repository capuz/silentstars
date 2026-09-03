---
repo: "open-agent-power/oh-my-disk-cleaner"
name: "oh-my-disk-cleaner"
description: "A powerful Claude Code skill that provides safe disk space analysis, junk file cleaning, and real-time monitoring across Windows, Linux, and macOS."
readmeQualityOk: true
url: "https://github.com/open-agent-power/oh-my-disk-cleaner"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 36
forks: 6
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-01-22T04:56:25Z"
lastCommitAt: "2026-09-03T08:15:10Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 27
maintainers: ["gccszs", "ZenAlexa", "itxaiohanglover"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0ae16015c715b194f9ddd70fc7541e282b869bbcf5ed34b5bd4e1a97dd7aba9/open-agent-power/oh-my-disk-cleaner"
---

</p>

# Disk Cleaner v2.1 - Intelligent Cross-Platform Disk Management

**[English](https://github.com/open-agent-power/oh-my-disk-cleaner/blob/HEAD/README.md)** | **[中文文档](https://github.com/open-agent-power/oh-my-disk-cleaner/blob/HEAD/README_zh.md)**

A comprehensive cross-platform disk space monitoring, analysis, and intelligent cleaning toolkit. Features advanced 3D file classification, duplicate detection, automated scheduling, and platform-specific optimization.

## ⚡ Quick Install

### Option 1: Install as Agent Skill (Recommended)

Install directly from CLI:

```bash
npx add-skill gccszs/disk-cleaner
```
OR
```bash
npx skills add gccszs/disk-cleaner
```

This will install the skill with all necessary files. The `.skill` package contains only the essential components:
- ✅ Core modules (`diskcleaner/`)
- ✅ Executable scripts (`scripts/`)
- ✅ Skill definition (`SKILL.md`)
- ✅ Reference documentation (`references/`)

**Note:** The skill package excludes tests, CI/CD configs, and development files for a clean, minimal installation.

### Option 2: Clone Repository

For development or standalone use:

```bash
git clone https://github.com/gccszs/disk-cleaner.git
cd disk-cleaner…
