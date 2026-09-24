---
repo: "fschmutz/claude-usage-panel"
name: "claude-usage-panel"
description: "See your Claude Code plan usage everywhere: GNOME top bar, macOS menu bar, a status line under the Claude Code prompt, and a get_usage MCP tool for Claude Code + Cursor. Session, weekly & per-model (Fable/Opus) limits from the official usage API, with burn-rate forecasts. One-line install, self-updating."
readmeQualityOk: true
url: "https://github.com/fschmutz/claude-usage-panel"
homepage: "https://fschmutz.github.io/claude-usage-panel/"
language: "JavaScript"
languages: ["JavaScript", "Swift"]
languagePcts: [61, 26]
topics: ["anthropic", "ccusage", "claude", "claude-code", "developer-tools", "gnome", "gnome-extension", "gnome-shell", "gnome-shell-extension", "linux"]
stars: 6
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-07-03T12:07:56Z"
lastCommitAt: "2026-09-24T08:34:53Z"
lastReleaseAt: "2026-09-01T18:00:41Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 89
undervaluedScore: 72
maintainers: ["fschmutz", "ArthurBernard", "LoubnaGhachyP"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1288243484/1b1f907c-5339-4330-a1ce-1c53efa536d3"
discussionCount: 0
---

# Claude Usage Panel

**See your Claude Code plan usage at a glance - in the GNOME top bar, the macOS
menu bar, under your Claude Code prompt, or by just asking Claude.**

Session, weekly, and **per-model** limits (Fable, Opus…) - the same numbers as
`/usage`, always visible, auto-refreshing. Plus an optional **Cursor**
team-spend section.

</div>

---

## Install

One line - it detects your platform and installs the sensible set:

```bash
curl -fsSL https://fschmutz.github.io/claude-usage-panel/install | bash
```

One-click **Add to Cursor** / **Install in Claude Code** buttons live on the
**[install page →](https://fschmutz.github.io/claude-usage-panel/#install)**

Name targets to be explicit (`bash -s -- <target…>` through the one-liner, or
`./install.sh <target…>` from a clone):

| Target | What you get | Details |
|---|---|---|
| `gnome` | Top-bar panel + dropdown, alerts, sparklines (GNOME Shell 45–50) | [docs/GNOME.md](https://github.com/fschmutz/claude-usage-panel/blob/HEAD/docs/GNOME.md) |
| `macos` | Native SwiftUI menu-bar app, starts at login (macOS 13+) | [macos/README.md](https://github.com/fschmutz/claude-usage-panel/blob/HEAD/macos/README.md) |
| `statusline` |…
