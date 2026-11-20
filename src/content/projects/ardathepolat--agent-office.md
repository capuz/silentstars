---
repo: "ArdaThePolat/agent-office"
name: "agent-office"
description: "A pixel-art macOS office that shows your Claude Code agents at work"
readmeQualityOk: true
url: "https://github.com/ArdaThePolat/agent-office"
language: "Swift"
languages: ["Swift", "HTML", "JavaScript"]
languagePcts: [36, 33, 24]
topics: ["ai-agents", "claude", "claude-code", "developer-tools", "macos", "pixel-art", "swift", "visualization"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-11-16T08:04:21Z"
lastCommitAt: "2026-11-19T12:00:03Z"
lastReleaseAt: "2026-11-17T06:26:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 65
maintainers: ["ArdaThePolat", "kutayozbay", "HuseyinYontar"]
openGraphImageUrl: "https://opengraph.githubassets.com/da0c33bd65ede31ad38ad239b80367b2411c83cdadd2f3a3481cca7903d76ce7/ArdaThePolat/agent-office"
---

# Agent Office

A small macOS window that shows your Claude Code agents at work, as a pixel-art office.

*Demo data. Open `web/office.html` in a browser to see it live.*

See at a glance which session is **waiting for you**, which is working, which has finished, and what
its subagents are doing, without switching between terminals.

## Quick start

Needs macOS 13+, the Xcode command-line tools, `jq` and Claude Code.

```bash
git clone https://github.com/ArdaThePolat/agent-office.git
cd agent-office
scripts/build-app.sh                 # builds ~/Applications/Agent Office.app
scripts/install-hook.sh --dry-run    # shows the change to ~/.claude/settings.json
scripts/install-hook.sh              # registers the hook (keeps your existing hooks)
open ~/Applications/"Agent Office.app"
```

Sessions report from their next turn on; start a new Claude Code session (or send a message in an
open one) and it walks into the office.
