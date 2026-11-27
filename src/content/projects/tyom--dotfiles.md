---
repo: "tyom/dotfiles"
name: "dotfiles"
description: "My dotfiles (zsh)"
readmeQualityOk: true
url: "https://github.com/tyom/dotfiles"
homepage: "http://tyom.github.io/dotfiles/"
language: "Shell"
languages: ["Shell", "JavaScript"]
languagePcts: [74, 21]
topics: ["dotfiles", "shell", "zsh", "vim"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2011-08-06T14:12:43Z"
lastCommitAt: "2026-11-27T12:51:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 53
maintainers: ["tyom"]
openGraphImageUrl: "https://opengraph.githubassets.com/194920e2c13c14e328fdab5d4795316bae1eb2166c53fb4bf4242182f1d8aed7/tyom/dotfiles"
---

Personal dotfiles for macOS and Linux: Zsh with Oh My Zsh, Git config, Vim, a few
CLI tools like bat and fzf, and a Claude Code plugin. One command installs the
lot, then checks its own work.

How it behaves:

- Your `~/.zshrc` and `~/.gitconfig` are not overwritten. The installer adds one
  line to each and leaves the rest alone. Everything else is a symlink into this
  repo, so the file you edit here is the file your shell reads. There is nothing
  to sync.
- You choose what gets installed. Setup shows a checklist, and Homebrew packages,
  macOS apps and the Claude Code plugin start unchecked.
- You can run it again any time. Each step skips what it has already done, and
  the last step runs over 30 checks, including that every symlink still points
  into this repo. CI installs all of it on Linux, once with Homebrew and once
  without, and checks the first-run Homebrew paths on Linux and macOS.
- Third-party bootstrap inputs are pinned. The Bun, Volta and Homebrew installers
  are checksum-verified before execution, and Oh My Zsh is checked out at a
  reviewed commit.
