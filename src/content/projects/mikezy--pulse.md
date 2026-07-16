---
repo: "mikezy/pulse"
name: "pulse"
description: "Heartbeat of your work — Mac→Kindle status dashboard"
readmeQualityOk: true
url: "https://github.com/mikezy/pulse"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-22T18:40:16Z"
lastCommitAt: "2026-07-16T05:59:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/89c0d4f762dfa3352771c1b2d3eb90fa95247f00aa3daee5f3d7366306f05d7f/mikezy/pulse"
---

# Pulse — Heartbeat of your work

A Mac-side Python app that pushes a Kindle-friendly status dashboard to GitHub Pages every 5 minutes (the LaunchAgent's `StartInterval=300`). The Kindle page itself meta-refreshes every 30s, so a new push appears within a refresh or two.

- **What it shows:** Mac telemetry (CPU/RAM/disk/battery/network), Claude Code usage (sessions/messages/tokens/streak/heatmap — combined across the `~/.claude` and `~/.claude-public` config roots), and today's calendar/todo *counts*.
- **Privacy:** Counts only — never meeting titles, never conversation content. Repo is public; data is Public-classified.
- **Display:** Kindle Colorsoft browser pointed at `https://mikezy.github.io/pulse`.

## Quickstart

```bash
git clone https://github.com/mikezy/pulse.git ~/workplace/kindle-claude-status
cd ~/workplace/kindle-claude-status
python3.11 -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
pytest
pulse setup        # interactive: token, repo, install LaunchAgent
pulse status       # confirms last update succeeded
```

On the Kindle:

1. Open the experimental browser.
2. Type `mikezy.github.io/pulse`.
3. Bookmark.
4. Leave the device on; the page…
