---
repo: "thedavidweng/homebrew-unsigned-tap"
name: "homebrew-unsigned-tap"
description: "Unofficial Homebrew tap restoring Gatekeeper-disabled casks from homebrew/cask"
readmeQualityOk: true
url: "https://github.com/thedavidweng/homebrew-unsigned-tap"
language: "Ruby"
languages: ["Ruby", "Python"]
languagePcts: [79, 20]
topics: ["cask", "gatekeeper", "homebrew", "homebrew-cask", "macos", "tap", "unsigned", "fails-gatekeeper-check"]
stars: 10
forks: 0
openIssues: 4
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-01T22:41:44Z"
lastCommitAt: "2026-11-01T23:01:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 92
undervaluedScore: 44
maintainers: ["thedavidweng", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6bb3b2a7204c31770db474d734ee63cd6e279d1225c789afdd286c157622248/thedavidweng/homebrew-unsigned-tap"
---

# homebrew-unsigned-tap

[English](https://github.com/thedavidweng/homebrew-unsigned-tap/blob/HEAD/README.md) · [简体中文](https://github.com/thedavidweng/homebrew-unsigned-tap/blob/HEAD/README.zh-CN.md)

Restore and auto-update all macOS casks disabled by Homebrew (`fails_gatekeeper_check`). Removes Gatekeeper quarantine on install.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/thedavidweng/homebrew-unsigned-tap/main/scripts/migrate.sh)"
```

Run the command above to:
* Tap `thedavidweng/unsigned-tap`
* Reinstall your disabled casks (`darktable`, `makemkv`, `xld`, `chromium`, `alacritty`...)
* Clear quarantine so `brew upgrade --cask --greedy` works again

*(Options: `--dry-run` to preview, `--yes` to skip prompts, `--interactive` for per-cask approval)*

---

## Single Cask

```bash
brew tap thedavidweng/unsigned-tap
brew trust thedavidweng/unsigned-tap
brew install --cask <cask-name>

# Or migrate an existing cask:
brew reinstall --cask thedavidweng/unsigned-tap/<cask-name>
```

## Why

Homebrew disables unsigned casks that fail macOS Gatekeeper checks:

```text
Warning: Not upgrading <cask>, it is disabled because it does not pass the macOS Gatekeeper…
