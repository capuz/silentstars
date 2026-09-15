---
repo: "klarluft/gitwarren-app"
name: "gitwarren-app"
description: "Code review for your own machines and your own agents. Reviews live where the code does — reached over SSH, WSL or your own tailnet. Desktop app or just a browser tab. No server, no account."
readmeQualityOk: true
url: "https://github.com/klarluft/gitwarren-app"
homepage: "https://gitwarren.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["code-review", "electron", "git", "mcp", "ai-agents", "claude-code", "codex", "desktop-app", "developer-tools", "diff"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-02T08:54:36Z"
lastCommitAt: "2026-09-15T08:55:00Z"
lastReleaseAt: "2026-09-12T15:55:02Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["michal-wrzosek"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1354543824/8b4d05c4-fbc2-425a-9e66-a8392a8ae921"
---

# GitWarren

**[gitwarren.com](https://gitwarren.com)** — the official site, with downloads for
macOS, Windows and Linux. On macOS there is also a Homebrew cask:

```bash
brew install --cask klarluft/tap/gitwarren
```

There is a command line too, which serves the same review UI in a browser
instead of an Electron window — for a machine that will not have the app on it,
or one with no screen at all:

```bash
brew install klarluft/tap/gitwarren-cli               # macOS and Linux, brings its own Node
curl -fsSL https://gitwarren.com/install.sh | sh      # macOS and Linux, no Homebrew needed
npx gitwarren serve                                   # anywhere Node 22+ is, including Windows
```

Then `gitwarren serve --open`. See
[The `gitwarren` command line](#the-gitwarren-command-line).

Code review for your own git repositories, on your own machines. Your machines,
your agents, no one else's server — and no account.

It runs as a desktop app on macOS, Windows and Linux, or as a command that
serves the same review UI into a browser tab. Same renderer either way; the
shell is the only thing that differs. A machine with no screen at all — a VPS, a
WSL distro, a box an agent works on —…
