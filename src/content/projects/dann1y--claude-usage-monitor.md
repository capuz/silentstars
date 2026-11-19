---
repo: "Dann1y/claude-usage-monitor"
name: "claude-usage-monitor"
description: "Track your Claude usage limits from the macOS menu bar — powered by Claude Code OAuth"
readmeQualityOk: true
url: "https://github.com/Dann1y/claude-usage-monitor"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
topics: ["anthropic", "anthropic-api", "claude", "claude-code", "claude-monitor", "claude-usage-monitor"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-17T11:51:32Z"
lastCommitAt: "2026-11-19T05:02:33Z"
lastReleaseAt: "2026-04-26T15:54:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 28
maintainers: ["Dann1y"]
openGraphImageUrl: "https://opengraph.githubassets.com/e966cbe5e74c281eb341086a574362060488df6f8e9182b1f3e1bc6d659d238f/Dann1y/claude-usage-monitor"
---

# Claude Usage Monitor

[한국어](https://github.com/Dann1y/claude-usage-monitor/blob/HEAD/README_KO.md)

A lightweight macOS menu bar app that shows your Claude (claude.ai) usage in real time.

 

## Install

### Step 1. Download

**Homebrew (Recommended)**

```bash
brew tap Dann1y/tap
brew install --cask claude-usage-monitor
```

**Or manually**

```bash
git clone https://github.com/Dann1y/claude-usage-monitor.git
cd claude-usage-monitor
make install
```

### Step 2. Allow app to run

Since this app is not notarized with Apple, macOS will block it on first launch. Run this once:

```bash
xattr -cr "/Applications/Claude Usage Monitor.app"
```

Then open the app. It appears in your menu bar — enable **Launch at login** in Settings to keep it running permanently.

## Update

The app checks for new versions automatically every 24 hours and shows a notification badge when an update is available.

**Homebrew**

```bash
brew upgrade --cask claude-usage-monitor
```

> If `brew upgrade` doesn't detect new versions, run this once to fix it:
> ```bash
> git -C "$(brew --repository dann1y/tap)" config homebrew.forceautoupdate true
> ```

**Or manually**
