---
repo: "2KAbhishek/tmux2k"
name: "tmux2k"
description: "Make tmux powerful and pretty 🥊💅"
readmeQualityOk: true
url: "https://github.com/2KAbhishek/tmux2k"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["cli", "plugin", "powerline", "pretty", "tmux", "tools", "tpm", "utility"]
stars: 451
forks: 52
openIssues: 1
closedIssues: 41
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2022-08-08T23:11:15Z"
lastCommitAt: "2026-08-20T04:07:43Z"
lastReleaseAt: "2026-02-11T04:56:09Z"
status: "thriving"
tags: ["funded"]
healthScore: 89
undervaluedScore: 36
maintainers: ["2KAbhishek", "posquit0", "voidstarjoe"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/522734575/9501257b-38ff-4704-83d7-eb222e450432"
fundingLinks: ["GITHUB:https://github.com/2KAbhishek", "BUY_ME_A_COFFEE:https://buymeacoffee.com/2kabhishek"]
---

<h1><a href="https://2kabhishek.github.io/tmux2k">tmux2k</a></h1>

<h3>Make tmux powerful and pretty 🥊💅</h3>

</div>

tmux2k is a highly customizable framework designed to enhance your tmux status bar, providing you with a sleek and informative interface for your terminal sessions.

## ✨ Features

- **Informative Display**: Essential system stats, git info, weather, and more.
- **Plugin Ecosystem**: Extensive plugins for system monitoring and version control.
- **Easy Customization**: Intuitive configuration and flexible architecture.
- **Real-Time Updates**: Dynamic content rendering for a responsive experience.

## ⚡ Setup

### ⚙️ Requirements

> [!IMPORTANT]
> bash 5.2 or newer is required for colors to work correctly, macOS users can install it using `brew install bash`
> The default macOS terminal is not supported, I would recommend Kitty, Alacritty or another modern terminal emulator

- A [patched nerd font](https://www.nerdfonts.com/) for `powerline` and glyphs support.

### 💻 Installation

If you are a `tpm` user, you can install the theme and keep up to date by adding the following to your `.tmux.conf` file:

```bash
set -g @plugin '2kabhishek/tmux2k'
```

Run tmux and…
