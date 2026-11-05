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
languagePcts: [44, 27]
topics: ["dotfiles", "iterm2", "terminal", "tmux", "zsh", "bash", "shell"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-12-21T02:41:52Z"
lastCommitAt: "2026-11-05T00:20:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 65
maintainers: ["ysoftman"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc119f37e4ee280cfa92bbeab474de3e9daebdbe4b62c3a85051b3f2c98377e1/ysoftman/myenv"
---

# myenv

Personal environment backup and restore automation scripts~ :smile:

- myenv should be located (cloned) at ~/workspace/myenv by default. To change this, modify the myenv_path value in .zshrc/.bashrc.
- Install & backup

```bash
# Back up settings and program lists, etc.
bash ./backupmysetting.sh

# Install everything
bash ./installall.sh

# For needed environments/programs, use installxxx.sh
```

- When using iTerm2 on Mac

  - iterm2 > general > selection > enable "application in terminal may access clipboard" (to use the clipboard in a tmux environment)
  - iterm2 > profiles > colors > select a color preset
  - iterm2 > profiles > text > font: 18, font-hack-nerd-font (installed in installbrew.sh)
  - When using tmux in iTerm2, double-click must be done as alt + double click (triple click).

- When using Alacritty on Windows

  - The config file is also used by other OSes, so do not modify it for Windows only. Instead, run WSL from the default PowerShell.

- When using Windows Terminal

  - Download and install the fonts
    - <https://github.com/ryanoasis/nerd-fonts/releases/download/v3.5.1/Hack.zip>
    -…
