---
repo: "ysoftman/myenv"
name: "myenv"
description: "personal environment settings"
originalDescription: "personal environment settings"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/ysoftman/myenv"
language: "Shell"
languages: ["Shell", "Lua"]
languagePcts: [59, 28]
topics: ["dotfiles", "iterm2", "terminal", "tmux", "zsh", "bash", "shell"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2016-12-21T02:41:52Z"
lastCommitAt: "2026-07-08T05:40:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 79
undervaluedScore: 65
maintainers: ["ysoftman"]
openGraphImageUrl: "https://opengraph.githubassets.com/d277c34d0fd7eddd5d2913a993fd44e00a1d7f66cd956e4a0f83076c7b8328d2/ysoftman/myenv"
---

# myenv

Personal environment backup and recovery automation script~ :smile:

- myenv should be located (cloned) at ~/workspace/myenv by default. To change it, modify the myenv_path value in .zshrc/.bashrc.
- Installation & Backup

```bash
# Backup settings and program list
bash ./backupmysetting.sh

# Full installation
bash ./installall.sh

# Use installxxx.sh for required environments/programs
```

- When using mac iterm2

  - Enable application in terminal may access clipboard in iterm2 > general > selection (to use clipboard in tmux environment)
  - Select color presets in iterm2 > profiles > colors
  - Set font in iterm2 > profiles > text > font: 18, font-hack-nerd-font (installed via installbrew.sh)
  - When using tmux in iterm2, double click should be used as alt + double click (triple click).

- When using windows alacritty

  - The configuration file is shared with other OS, so do not modify it specifically for Windows. Instead, run wsl from the default powershell.

- When using windows terminal

  - Download and install hack nerd font <https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/Hack.zip>
  - Open the configuration file in the terminal with ctrl + ,…
