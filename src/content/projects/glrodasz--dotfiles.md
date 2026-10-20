---
repo: "glrodasz/dotfiles"
name: "dotfiles"
description: "My macOS dev setup and the agent skills I use with Claude Code and Cursor, installed with one Makefile."
readmeQualityOk: true
url: "https://github.com/glrodasz/dotfiles"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [60, 20]
stars: 19
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2016-10-14T00:50:07Z"
lastCommitAt: "2026-10-20T08:49:01Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 48
maintainers: ["glrodasz"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aac1998da6f80342cf3a69e3bdc4f410f2f6e41d74ea4f3908720c888133360/glrodasz/dotfiles"
---

# ~dotfiles

## 🛠️ Makefile

Run `make` or `make help` from `~/dotfiles` to list all targets.

### Symlinks (`slink-*`)
- `make slink` — symlink all configs (skills, zsh, vim)
- `make slink-skills` — symlink `skills/*` into Cursor and Claude
- `make slink-skills-cursor` — symlink skills into `~/.cursor/skills-cursor`
- `make slink-skills-claude` — symlink skills into `~/.claude/skills`
- `make slink-zsh` — symlink `~/.zshrc`
- `make slink-vim` — symlink `~/.vimrc` and solarized colors

### Install (`install-*`)
- `make install` — install brew and npm packages from backups
- `make install-brew` — install packages from `brew/packages`
- `make install-npm` — install global npm packages

### Backup (`backup-*`)
- `make backup` — regenerate all backup files
- `make backup-brew` — update `brew/packages` via interactive script
- `make backup-apps` — update `apps/installed-apps.json` via interactive script
- `make backup-npm` — print global npm packages for manual backup

## ⏰ Install steps in a new machine

### Install Fundamental Apps
1. Install **[Chrome](https://www.google.com/chrome/)**, **[1Password](https://1password.com/downloads/mac/)**, and…
