---
repo: "wavebeem/dotfiles"
name: "dotfiles"
description: ":hamburger: Personal dotfiles and configuration files"
readmeQualityOk: true
url: "https://github.com/wavebeem/dotfiles"
language: "Shell"
languages: ["Shell", "Lua", "PowerShell"]
languagePcts: [36, 34, 21]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2011-02-16T20:21:14Z"
lastCommitAt: "2026-07-21T06:14:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 74
undervaluedScore: 56
maintainers: ["wavebeem"]
openGraphImageUrl: "https://opengraph.githubassets.com/4db2e5cde7f8c9045258c18638b0f0d091e7a235a33588c6912507c095cc0e35/wavebeem/dotfiles"
---

# dotfiles

## Installation (Mac/Linux/WSL)

```
$ ./install.sh
```

## Installation (Windows Powershell)

```
$ .\install.ps1
```

## Making Your Own Dotfiles

First, make a copy of my repo but remove the history and make it your own:

```sh
$ cd ~
$ git clone --depth 1 https://github.com/wavebeem/dotfiles.git
$ cd dotfiles
$ rm -rf .git
```

This is a great point to delete any files you don't want (e.g. `tmux.conf` if
you never use tmux).

```sh
$ git init
$ git add -A
$ git commit -m "Initial commit"
```

Then create a new repo on GitHub and follow the instructions for pushing an
existing Git repo to GitHub.

If you based your dotfiles on mine, please consider putting a link to my
dotfiles repo in your README :)

Now copy over files you'd like to keep, like:

```sh
# Copy zsh config
$ cp ~/.zshrc zshrc
$ cp ~/.zshenv zshenv

# Copy bash config
$ cp ~/.bashrc bashrc
$ cp ~/.bash_profile bash_profile

# Copy VS Code settings, keybindings, and snippets
$ mkdir -p vscode
$ cp ~/Library/Application\ Support/Code/User/settings.json vscode/settings.json
$ cp ~/Library/Application\ Support/Code/User/keybindings.json vscode/keybindings.json
$ rm -rf vscode/snippets && cp -r…
