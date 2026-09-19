---
repo: "sfc-gh-eraigosa/dotfiles"
name: "dotfiles"
description: "Ubuntu Bash Home profile setup, includes vimrc's profiles some git commands"
readmeQualityOk: true
url: "https://github.com/sfc-gh-eraigosa/dotfiles"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [70, 25]
topics: ["works-with-codespaces", "dotfiles", "shell", "zsh", "bash", "git"]
stars: 48
forks: 12
openIssues: 65
closedIssues: 48
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2014-07-19T17:26:07Z"
lastCommitAt: "2026-09-19T01:36:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 49
maintainers: ["sfc-gh-eraigosa", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/417902d5d458e88e071bdd0d00029f5d73156befcd913a7989af52a742e434e3/sfc-gh-eraigosa/dotfiles"
---

# 🛠️ Dotfiles & Agent Environment

An agent-first development environment for macOS and Linux.

Two things live here: a **shared context and safety layer** that lets
[Antigravity CLI](https://antigravity.google) (`agy`) and
[Claude Code](https://claude.com/claude-code) work from the same skills, hooks,
and rules — and **[the SDK](https://github.com/sfc-gh-eraigosa/dotfiles/blob/HEAD/sdk/README.md)**, a set of small Go tools that make
letting an agent actually *do* things survivable.

---

## 🧰 The SDK

Nine single-binary Go tools (plus a shared library) covering the loop: *let an
agent work → let it commit without losing anything → see what's happening →
roll it out everywhere → keep the repo it pushes to configured the way you
meant.*

| Tool | Reach for it when… |
| :--- | :--- |
| [`gss`](https://github.com/sfc-gh-eraigosa/dotfiles/blob/HEAD/sdk/README.md#-gss--never-lose-work-to-git-again) | An agent is about to touch git |
| [`tmux-mgr`](https://github.com/sfc-gh-eraigosa/dotfiles/blob/HEAD/sdk/README.md#-tmux-mgr--run-five-agents-at-once) | One agent isn't fast enough |
|…
