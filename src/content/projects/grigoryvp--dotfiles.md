---
repo: "grigoryvp/dotfiles"
name: "dotfiles"
description: "Automatic configuration of my windows and OSX laptops and desktops, work in progress"
readmeQualityOk: true
url: "https://github.com/grigoryvp/dotfiles"
language: "Lua"
languages: ["Lua", "Python"]
languagePcts: [30, 23]
stars: 32
forks: 3
openIssues: 2
closedIssues: 1
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2018-07-30T08:35:07Z"
lastCommitAt: "2026-11-04T11:27:50Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 77
undervaluedScore: 51
maintainers: ["grigoryvp"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5fec082707688752846cd48bc52ef8ad0275c6a780b573760d8a6e2ce8a6144/grigoryvp/dotfiles"
---

# My Win and MacOS box auto config

## Windows install

```ps1
winget install --silent Microsoft.PowerShell # asks elevation IN BACKGROUND
```

Relaunch terminal, continue with `Elevated PowerShell`:

```ps1
$repo_url = "https://raw.githubusercontent.com/grigoryvp/dotfiles"
$url = "$repo_url/master/configure_win.ps1"
# 'Invoke-Expression' instead of 'iex' since 'iex' is removed by profile.ps1
Invoke-WebRequest $url -OutFile ./configure.ps1
Set-ExecutionPolicy Unrestricted -Scope CurrentUser
./configure.ps1
```

Follow instructions for post-configuration.

```sh
sudo apt update
# pyenv build dependencies
sudo apt install make build-essential libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
printf '. /mnt/c/Users/user/dotfiles/shell-cfg.sh\n' >> ~/.bashrc
printf '#!/bin/sh\n. /mnt/c/Users/user/dotfiles/shell-cfg\n' > ~/.zshrc
printf '[include]\npath = /mnt/c/Users/user/dotfiles/git-cfg.toml\n' > ~/.gitconfig
mkdir -p ~/.config/lsd/
cp /mnt/c/Users/user/dotfiles/.gitattributes ~/.gitattributes
cp /mnt/c/Users/user/dotfiles/lsd.config.yaml ~/.config/lsd/config.yaml
git…
