---
repo: "codedooly/claude-pacer"
name: "claude-pacer"
description: "A macOS menu bar app that paces your Claude usage — 5-hour & 7-day gauges plus scheduled pings that align fresh 5-hour windows to your core hours. Swift/SwiftUI. For Claude Pro/Max."
originalDescription: "A macOS menu bar app that paces your Claude usage — 5-hour & 7-day gauges plus scheduled pings that align fresh 5-hour windows to your core hours. Swift/SwiftUI. For Claude Pro/Max."
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/codedooly/claude-pacer"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
topics: ["anthropic", "claude", "claude-ai", "claude-code", "developer-tools", "macos", "menu-bar-app", "menubar", "rate-limit", "swift"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-06-24T08:52:12Z"
lastCommitAt: "2026-07-14T05:52:55Z"
lastReleaseAt: "2026-06-25T04:05:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["codedooly"]
openGraphImageUrl: "https://opengraph.githubassets.com/320da81cf91484b74dfb430e1aa324461b23eb61d0257858952d8a31139ade43/codedooly/claude-pacer"
---

# Pacer

### A macOS menu bar app that paces your Claude usage

*Maintain rhythm within limits* — For Claude Pro / Max

Real-time tracking of Claude usage limits — **5-hour window · weekly quota · model-specific limits** — in the menu bar, and align 5-hour windows to core working hours with scheduled pings.

&nbsp;
&nbsp;

</div>

---

## ⚡ Quick Installation

**Install with a single line in the terminal.** As an unsigned app, the `.dmg` downloaded via the browser will be blocked by macOS security (Gatekeeper) — downloading with curl avoids this issue and allows for installation directly to `/Applications` in one go:

```sh
osascript -e 'quit app "Pacer"' 2>/dev/null; M=$(mktemp -d) && curl -fsSL https://github.com/codedooly/claude-pacer/releases/latest/download/Pacer.dmg -o /tmp/Pacer.dmg && hdiutil attach -nobrowse -quiet -mountpoint "$M" /tmp/Pacer.dmg && rm -rf /Applications/Pacer.app && cp -R "$M/Pacer.app" /Applications/ && hdiutil detach -quiet "$M" && open -a Pacer
```

> This command is **for installation and updates** — you can run it again even if a new version comes out (quit existing app → replace → restart).

> To run, you must first install and log in to [Claude…
