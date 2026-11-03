---
repo: "jcgay/dotfiles"
name: "dotfiles"
description: "My OS X configuration."
readmeQualityOk: true
url: "https://github.com/jcgay/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
stars: 6
forks: 1
openIssues: 8
closedIssues: 1
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2013-10-30T20:29:54Z"
lastCommitAt: "2026-11-03T10:52:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 64
maintainers: ["jcgay", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/019cd0346eaf4a3bfd71481c354c5c230bebd1680bb1895ffd26b3d9e2e4bd38/jcgay/dotfiles"
---

# dotfiles

My personal macOS dotfiles, managed with [yadm](https://yadm.io)
(Yet Another Dotfiles Manager).

yadm is just `git` with a few extras. It tracks files **in place** in your
home directory — there are no symlinks. The repo's working tree *is* `$HOME`,
so `~/.gitconfig`, `~/.config/fish/...`, etc. are the real files git versions.

---

## What's in here

| Area | Tool | Where |
|------|------|-------|
| Shell | [fish](https://fishshell.com) | `.config/fish/` |
| Prompt | [starship](https://starship.rs) | `.config/starship.toml` |
| Packages | [Homebrew](https://brew.sh) global Brewfile | `.Brewfile` |
| Runtimes (Java, Gradle, Kotlin, Node…) | [mise](https://mise.jdx.dev) | `.config/mise/config.toml` |
| fish plugins | [Fisher](https://github.com/jorgebucaran/fisher) | `.config/fish/fish_plugins` |
| App preferences | [Mackup](https://github.com/lra/mackup) (synced via Google Drive) | `.mackup.cfg` |
| Personal scripts | — | `.local/bin/` |
| Terminal | [Ghostty](https://ghostty.org) | `.config/ghostty/config` |

---

## Set up a new machine

```bash
# 1. Install yadm (it bootstraps the rest)
brew install yadm        # or: see https://yadm.io/docs/install

# 2. Clone…
