---
repo: "antasphere/clave"
name: "clave"
description: "A macOS desktop app for managing multiple Claude Code sessions"
readmeQualityOk: true
url: "https://github.com/antasphere/clave"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [78]
topics: ["claude", "claude-code", "developer-tools", "electron", "macos", "terminal"]
stars: 48
forks: 9
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-02-12T20:08:46Z"
lastCommitAt: "2026-09-16T08:48:28Z"
lastReleaseAt: "2026-02-13T21:12:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 41
maintainers: ["romain-pattyn", "lucaderumier", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/82c611ace4f3cb9abe90197f00ff8396e02bcb087784aa20c2f23533624524f1/antasphere/clave"
---

**Clave is a macOS desktop app for managing multiple coding-agent sessions in parallel.**

Provider-agnostic: run Claude Code, Antigravity CLI, Codex CLI, and Pi sessions side by side. Open as many as you need, arrange them in split or grid layouts, and switch between them instantly.

[Features](#features) · [Download](#download) · [Build from Source](#build-from-source) · [Contributing](#contributing)

</div>

</p>

---

## Download

[**Download the latest version**](https://github.com/antasphere/clave/releases/latest) (macOS Universal — Apple Silicon & Intel) · [All releases](https://github.com/antasphere/clave/releases)

Download the `.dmg`, drag to Applications, done.

Auto-updates are built in — once installed, new versions download silently in the background.

### Windows (early)

Every release also carries `clave-<version>-setup.exe`, a 64-bit installer. It is **not code-signed**, so SmartScreen stops it once: click *More info* → *Run anyway*. Auto-updates work the same way as on macOS.

Windows is behind macOS today: the agent state dots (working / idle / needs you) and tmux-backed session persistence are macOS-only, and Pi sessions are not available. Sessions run through…
