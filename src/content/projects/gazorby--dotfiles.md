---
repo: "gazorby/dotfiles"
name: "dotfiles"
description: "🚀 My personal dotfiles, managed with chezmoi"
readmeQualityOk: true
url: "https://github.com/gazorby/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [59, 33]
topics: ["dotfiles", "chezmoi"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-04-11T16:22:04Z"
lastCommitAt: "2026-10-09T18:57:05Z"
lastReleaseAt: "2020-05-25T16:30:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 69
undervaluedScore: 62
maintainers: ["gazorby"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd1aedcb23b8659dc248ae47a6e6210c0e296b1b1cd75638687ef8d9b2b7821d/gazorby/dotfiles"
---

# dotfiles

My personal dotfiles managed using [chezmoi](https://github.com/twpayne/chezmoi)

## 🚀 Usage

1. Install dependencies:

   ```console
   openssh chezmoi fish starship vivid fzf bat fd ripgrep eza bat-extras broot procs atuin git-delta awk mise zoxide
   ```

2. Init and apply:

   ```bash
   sh -c "$(curl -fsLS get.chezmoi.io)" -- init --apply gazorby
   ```

   You are prompted for git username, email and signing key (leave empty to disable commit signing).
   Other settings live in `~/.config/chezmoi/chezmoi.toml`, see `.chezmoi.example.toml`.

## 📝 License

[MIT](https://github.com/Gazorby/dotfiles/blob/master/LICENSE)
