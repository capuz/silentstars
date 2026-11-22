---
repo: "ooloth/dotfiles"
name: "dotfiles"
description: "My macOS development environment, including the agent skills and workflows I use for software engineering."
readmeQualityOk: true
url: "https://github.com/ooloth/dotfiles"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [73, 24]
topics: ["dotfiles", "zsh", "git", "neovim", "tmux", "ssh", "symlinks", "homebrew", "spaceship-prompt", "node"]
stars: 24
forks: 3
openIssues: 115
closedIssues: 90
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2020-08-02T22:33:08Z"
lastCommitAt: "2026-11-22T02:13:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 56
maintainers: ["ooloth"]
openGraphImageUrl: "https://opengraph.githubassets.com/c5186516d7e8fde63d74858e49d7cc41b04cc4c4973b364133ecdfdab7a7c412/ooloth/dotfiles"
---

# My dotfiles 🦸

A highly opinionated development environment for macOS, including shell, editor and tool
configuration plus the agent skills and engineering workflows I use every day.

_**Disclaimer:** I update these configurations often as my preferences change. I recommend you
treat this repo as inspiration and fork and customize it if you'd like stability._

## 🤖 Agent-assisted development

I've been experimenting with coding agents as a way to make good engineering practices explicit and
repeatable, rather than just using them to generate code. Most of what's here exists because an
agent failed in a specific way and the fix had to be something that runs, not something I remember.
The same rules keep surfacing in different places: prove-it-works, the global instructions and
write-pr-description each refuse to count a passing test suite as evidence that a change works.
