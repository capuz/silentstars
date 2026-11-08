---
repo: "ntbowen/git-monitor"
name: "git-monitor"
description: "Automatically monitors specified Git repositories for changes (commits, tags, releases) and sends notifications via Telegram and WeChat (WxPusher)."
originalDescription: "自动监控指定 Git 仓库的变化（commits, tags, releases），并通过 Telegram 和微信（WxPusher）发送通知。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ntbowen/git-monitor"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-10-26T13:13:19Z"
lastCommitAt: "2026-11-08T14:14:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 67
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/81b9c59f70ee57359eae1d67f4a4f369a890ec898ed62d1ee7586eadabe4796f/ntbowen/git-monitor"
---

# Git Repository Monitor 📡

Automatically monitors specified Git repositories for changes (commits, tags, releases) and sends notifications via Telegram and WeChat (WxPusher).

## Features

- ✅ Monitor new commits
- ✅ Monitor new tags
- ✅ Monitor new releases
- ✅ Telegram Bot notifications
- ✅ WeChat notifications (via WxPusher)
- ✅ Automatic scheduled checks
- ✅ Persistent state to avoid duplicate notifications

## Quick Start

### 1. Fork or clone this repository

```bash
git clone <your-repo-url>
cd <your-repo-name>
```

### 2. Configure GitHub Variables and Secrets

Go to the repository's **Settings → Secrets and variables → Actions**

#### 📋 Variables (non-sensitive information) - Recommended

On the **Variables** tab, add:

| Variable Name | Description | Example |
|------------|------|------|
| `MONITORED_REPOS` | List of repositories to monitor (separate multiple repositories with commas) | `torvalds/linux,microsoft/vscode` |
| `MONITORED_REPO` | Monitor a single repository (backward compatibility) | `torvalds/linux` |
| `MONITOR_COMMITS` | Whether to monitor commits (optional) | `true` / `false` |
| `MONITOR_TAGS` | Whether to monitor tags (optional) | `true` / `false`…
