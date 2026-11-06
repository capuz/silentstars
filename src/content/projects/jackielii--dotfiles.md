---
repo: "jackielii/dotfiles"
name: "dotfiles"
description: "my dotfiles: mac & linux"
readmeQualityOk: true
url: "https://github.com/jackielii/dotfiles"
language: "Lua"
languages: ["Lua", "Shell"]
languagePcts: [45, 23]
stars: 24
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-04-23T12:50:48Z"
lastCommitAt: "2026-11-05T20:03:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 52
maintainers: ["jackielii"]
openGraphImageUrl: "https://opengraph.githubassets.com/126a919b6bbbbdc0db0cc528c67000a48201ee3557ea94a8b650fce193474c04/jackielii/dotfiles"
---

# My dot files

Managed via [yadm](https://yadm.io/)

## Install

```
bash -c "$(curl -fsSL https://jackieli.dev/dot)"
```

Or 

```sh
#!/bin/bash
set -e

# Install using (don't run as root):
# /bin/bash -c "$(curl -fsSL https://jackieli.dev/dot)"

# Ask for the administrator password upfront
echo "Authenticate sudo for brew & settings"
sudo -v
# Keep-alive: update existing `sudo` time stamp until bootstrapping has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

echo "Installing homebrew"
NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install yadm gpg

echo "Cloning jackielii/dotfiles"
yadm clone https://github.com/jackielii/dotfiles.git --bootstrap
```

## Mac

- yabai
- skhd
- kitty
- neovim
- lf
