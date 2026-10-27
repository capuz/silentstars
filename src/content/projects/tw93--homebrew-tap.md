---
repo: "tw93/homebrew-tap"
name: "homebrew-tap"
description: "Personal Homebrew tap for @tw93's projects"
readmeQualityOk: true
url: "https://github.com/tw93/homebrew-tap"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2025-10-03T23:07:26Z"
lastCommitAt: "2026-10-27T09:17:06Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 76
maintainers: ["github-actions[bot]", "tw93", "youxi798"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ec33b33278f21a0acb829472d689963d06310b239a8eba954374ca1e2cb6e34/tw93/homebrew-tap"
---

# Homebrew Tap

Personal Homebrew tap for [@tw93](https://github.com/tw93)'s projects.

```bash
brew tap tw93/tap
```

## Migrated Formulae

[Mole](https://github.com/tw93/mole) is now distributed through Homebrew Core:

```bash
brew install mole
```

Existing `tw93/tap/mole` installations migrate to Homebrew Core during `brew update`.

## Kaku

[Kaku](https://github.com/tw93/Kaku) is now on official Homebrew. New installs should use that cask:

```bash
brew install --cask kaku
```

This tap still ships `kakuku` for people who installed Kaku before the official cask existed. Those installs keep updating from this tap, including `brew upgrade --cask tw93/tap/kakuku` and `kaku update`.

To move an existing tap install to the official cask:

```bash
brew uninstall --cask tw93/tap/kakuku
brew install --cask kaku
```

Do not install both. The tap cask conflicts with official `kaku`.

### Keep using the tap

Homebrew 6 and later require trust for non-official taps. If Homebrew reports this cask as untrusted, trust only the Kaku cask before upgrading:

```bash
brew trust --cask tw93/tap/kakuku
```

New installs using the official `kaku` cask do not need this step. See [Homebrew tap…
