---
repo: "JakobGM/dotfiles"
name: "dotfiles"
description: "JakobGM does dotfiles /w shellscripting"
readmeQualityOk: true
url: "https://github.com/JakobGM/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [41, 22]
stars: 34
forks: 2
openIssues: 2
closedIssues: 29
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2017-04-21T14:35:59Z"
lastCommitAt: "2026-10-30T10:18:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 64
undervaluedScore: 32
maintainers: ["JakobGM"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3b4583523951392159dd169bebe7f24a822511e442b9371d7c18e399a26f234/JakobGM/dotfiles"
---

# JakobGM's dotfiles

These are my [chezmoi](https://www.chezmoi.io/)-managed dotfiles.

> [!NOTE]
> If you're not familiar with chezmoi, you should know about its somewhat quirky [filename conventions](https://www.chezmoi.io/reference/source-state-attributes/):
> * Files and directories in the `home/` directory of this repository are placed into the home directory upon `chezmoi apply`.
> * `dot_` prefixes in filenames are replaced with `.`.
> * Files with `.tmpl` suffixes are [rendered as templates](https://www.chezmoi.io/user-guide/templating/).
>
> E.g. `home/dot_config/wakatime/dot_wakatime.cfg.tmpl` is rendered to `~/.config/wakatime/.wakatime.cfg`.

My setup has the following scopes:

* **Multiple hosts**: a low-specced mDPI laptop, headless servers, and desktops with both Nvidia and AMD GPUs. 
* One operating system: Linux, specifically the **Arch Linux** distribution.
* Wayland-based tiling window manager: **Sway**.
* Terminal-based workflows: using **Kitty** and **ZSH**.
* Modal editing: using **Neovim** with the **lazy.nvim** package manager and a **lua**-based configuration.
* **Python** as the programming language of choice.

## Getting started

Provided that you…
