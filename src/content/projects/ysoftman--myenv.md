---
repo: "ysoftman/myenv"
name: "myenv"
description: "personal environment settings"
originalDescription: "personal environment settings"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/ysoftman/myenv"
language: "Shell"
languages: ["Shell", "TypeScript"]
languagePcts: [45, 25]
topics: ["dotfiles", "iterm2", "terminal", "tmux", "zsh", "bash", "shell"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-12-21T02:41:52Z"
lastCommitAt: "2026-10-18T08:15:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 65
maintainers: ["ysoftman"]
openGraphImageUrl: "https://opengraph.githubassets.com/250a7c68b1029ca50350ca867b760f344f033faba87f51322a80aac0d0eb9a49/ysoftman/myenv"
---

# myenv

Personal environment backup and restore automation scripts~ :smile:

- myenv should be located (cloned) at ~/workspace/myenv by default. To change it, modify the myenv_path value in .zshrc/.bashrc.
- Install & backup

```bash
# Back up settings and program lists, etc.
bash ./backupmysetting.sh

# Install everything
bash ./installall.sh

# For specific environments/programs, use installxxx.sh
```

- When using iTerm2 on mac

  - iterm2 > general > selection > enable application in terminal may access clipboard (to use the clipboard in a tmux environment)
  - iterm2 > profiles > colors > select a color preset
  - iterm2 > profiles > text > font: 18, font-hack-nerd-font (installed by installbrew.sh)
  - When using tmux in iterm2, double-click selection must be done with alt + double click (triple click).

- When using windows alacritty

  - The config file is shared with other OSes, so do not modify it for Windows only. Instead, run wsl from the default powershell.

- When using windows terminal

  - Download and install fonts
    - <https://github.com/ryanoasis/nerd-fonts/releases/download/v3.5.1/Hack.zip>
    -…
