---
repo: "feniix/dotfiles"
name: "dotfiles"
description: "State-tracked, reversible macOS developer environment for Apple Silicon."
readmeQualityOk: true
url: "https://github.com/feniix/dotfiles"
language: "Python"
languages: ["Python", "Shell", "Lua"]
languagePcts: [44, 20, 20]
topics: ["apple-silicon", "dotfiles", "homebrew", "macos", "mise", "neovim", "zsh"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2014-05-27T04:02:07Z"
lastCommitAt: "2026-11-19T05:00:40Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 68
maintainers: ["feniix"]
openGraphImageUrl: "https://opengraph.githubassets.com/55606ee81c7f5ebdf64b5c311d0b43c62b2f3eec035e3274f19466c8bb994555/feniix/dotfiles"
---

# Dotfiles

macOS development environment following the XDG Base Directory Specification. Apple Silicon only.

## Setup

```bash
git clone https://github.com/feniix/dotfiles.git ~/dotfiles
cd ~/dotfiles
./setup.sh
```

Setup links the configs, then runs each step on its own: Homebrew packages,
oh-my-zsh, Neovim, macOS defaults, GitHub CLI, SSH permissions and the git
signing key, mise tools, pi config and agent skills. A failed step doesn't stop
the others; setup lists the failures at the end and exits 1, and a rerun picks up
where it left off. It asks before installing packages, applying macOS defaults or
generating an SSH key.

Once `gitconfig` is linked, GitHub URLs are rewritten to SSH, so register your SSH
key (`gh ssh-key add ~/.ssh/id_ed25519.pub`, plus `--type signing` for commit
signing) before the next `git pull`. Commits are signed with `~/.ssh/id_ed25519`;
restore it from a backup (`scripts/ssh/manage_ssh_keys.sh restore <dir>`) or let
setup generate one.
