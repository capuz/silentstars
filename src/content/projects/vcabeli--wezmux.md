---
repo: "vcabeli/wezmux"
name: "wezmux"
description: "A WezTerm fork with cmux-inspired workspace management: persistent sidebar, agent notifications, and multi-workspace orchestration for terminal power users."
readmeQualityOk: true
url: "https://github.com/vcabeli/wezmux"
homepage: "https://github.com/vcabeli/wezmux"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 6
forks: 5
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-03-26T16:27:49Z"
lastCommitAt: "2026-10-20T08:49:11Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 59
undervaluedScore: 30
maintainers: ["vcabeli", "jeandut", "mdinic"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cf541c6576d50c3efa1dcf249621c22f918e665d1eeb87b72e6bd7cc490f77f/vcabeli/wezmux"
discussionCount: 1
---

# Wezmux

A fork of [WezTerm](https://github.com/wezterm/wezterm) that adds workspace management for multi-agent terminal workflows. Wezmux focuses on running multiple coding agents side-by-side and making each workspace's state visible at a glance.

## Why ?

Because cmux was disappointing (and I don't need a browser in my terminal) and I mean WezTerm is just the dream

## What's different from WezTerm

**Persistent sidebar** showing per-workspace metadata:
- Git branch and dirty status
- PR number and status (via `gh` CLI)
- Listening ports
- Agent status line (via OSC 7777)
- Unread notification badges

**Notification tracking** (on top of WezTerm's existing OSC 9 toasts):
- Blue ring on panes with unread notifications
- Unread badge counts in the sidebar
- `Option+U` to jump to the last unread notification

**Agent integrations:**
- **Claude Code** — hooks injected automatically via wrapper script (no setup needed)
- **Oh My Pi** — extension injected automatically via wrapper script (no setup needed)
- **Codex** — run `make install-codex-hooks` to set up hooks in `~/.codex/hooks.json`
- Status, tool activity, input/approval waits, and output previews shown in the sidebar…
