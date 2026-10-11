---
repo: "thedavidweng/homebrew-unsigned-tap"
name: "homebrew-unsigned-tap"
description: "Unofficial Homebrew tap restoring Gatekeeper-disabled casks from homebrew/cask"
readmeQualityOk: true
url: "https://github.com/thedavidweng/homebrew-unsigned-tap"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [93]
topics: ["cask", "gatekeeper", "homebrew", "homebrew-cask", "macos", "tap", "unsigned", "fails-gatekeeper-check"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-01T22:41:44Z"
lastCommitAt: "2026-10-11T10:15:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["thedavidweng", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4750b512354c89d85bddf66796e7bb0b508d98363b62fadd9eef8c7dd9063a7a/thedavidweng/homebrew-unsigned-tap"
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
