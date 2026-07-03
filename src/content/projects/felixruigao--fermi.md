---
repo: "FelixRuiGao/Fermi"
name: "Fermi"
description: "A coding TUI that manages its own context proactively, runs parallel sub-agents, and lets you message it while it's working."
url: "https://github.com/FelixRuiGao/Fermi"
homepage: "https://fermi-code.com/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 17
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-09T16:18:35Z"
lastCommitAt: "2026-07-02T14:53:00Z"
lastReleaseAt: "2026-06-09T14:41:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 51
maintainers: ["FelixRuiGao"]
openGraphImageUrl: "https://opengraph.githubassets.com/a145028ba3a80bb62d8837fac987d067c4fcae4e04fc9ff8462cdf026493768b/FelixRuiGao/Fermi"
---

# Fermi

  <strong>The coding agent that manages its own contexts.</strong>
</p>
  Terminal UI built on <a href="https://github.com/anomalyco/opentui">OpenTUI</a>.
</p>
  English | <a href="./README.zh-CN.md">中文</a>
</p>
</p>

Fermi is a terminal AI coding agent designed for multi-hour sessions. The agent inspects its own context window, decides what is still valuable, and surgically compresses the rest — down to a single tool call result. Sessions run for hours; decisions, file paths, and unresolved issues stay intact.

> **Platform:** macOS (Apple Silicon) · Linux (x86_64, arm64) · Windows (x64, arm64). **License:** MIT.

## Install

### macOS (Apple Silicon) / Linux (x86_64, arm64)

```bash
curl -fsSL https://raw.githubusercontent.com/FelixRuiGao/Fermi/main/scripts/install.sh | sh
```

### Windows (x64, arm64)

```powershell
irm https://raw.githubusercontent.com/FelixRuiGao/Fermi/main/scripts/install.ps1 | iex
```

---

Single binary, no runtime required. The installer puts `fermi` (`fermi.exe` on Windows) in `~/.fermi/bin/` and adds it to your PATH. Open a new terminal, then:

```bash
fermi init   # setup wizard — pick providers, models, API keys
fermi        # start a session…
