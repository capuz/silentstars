---
repo: "priyashpatil/stats"
name: "stats"
description: "A terminal dashboard for macOS system metrics and AI coding usage"
readmeQualityOk: true
url: "https://github.com/priyashpatil/stats"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [66, 32]
stars: 6
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-08-21T16:45:48Z"
lastCommitAt: "2026-08-29T17:28:06Z"
lastReleaseAt: "2026-08-29T13:59:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 93
undervaluedScore: 57
maintainers: ["priyashpatil", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2047c24d2fa1a9e866c2560c8b813d4e1bef1f3da0146c67f94aab6271b935be/priyashpatil/stats"
fundingLinks: ["GITHUB:https://github.com/priyashpatil"]
---

# Stats

Stats is a lightweight dashboard for your Mac's system health, Amp usage, and Codex usage. Use it as a native menu bar app or run it directly in a terminal.

</p>

## What it shows

- CPU, RAM, GPU, storage, and network metrics
- Amp subscription, Orb usage/runtime, and individual credit balance
- Codex weekly quota and token activity
- Four customizable world clocks

Stats reads usage through the installed Amp and Codex CLIs. It does not read or store their credentials.

## Install

Stats requires macOS 11 or newer and currently provides prebuilt releases for Apple Silicon Macs. [Amp](https://ampcode.com/) and the [Codex CLI](https://github.com/openai/codex) must also be installed and signed in.

### Homebrew (recommended)

Choose the package that matches how you want to run Stats. Although both packages are named `stats`, the `--cask` option selects the desktop app while the command without `--cask` selects the CLI formula.

#### Desktop app

This installs `Stats.app` in `/Applications`:

```sh
brew install --cask priyashpatil/tap/stats &&
  xattr -dr com.apple.quarantine /Applications/Stats.app
```

The `brew install --cask` command installs the desktop app. The…
