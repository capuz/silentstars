---
repo: "apemost/dotfiles"
name: "dotfiles"
description: "Enhanced Mathias's dotfiles, sensible hacker defaults for Linux and macOS"
readmeQualityOk: true
url: "https://github.com/apemost/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [93]
topics: ["dotfiles", "vim", "zsh", "macos", "linux", "mintty"]
stars: 24
forks: 8
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2017-03-03T00:59:03Z"
lastCommitAt: "2026-07-10T06:59:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 54
maintainers: ["apemost"]
openGraphImageUrl: "https://opengraph.githubassets.com/211d2a45e3143caa9a4f1f720d3405a0cde9b70160ec0916eb5580dcddb38af1/apemost/dotfiles"
---

# dotfiles

Enhanced [Mathias’s dotfiles](https://github.com/mathiasbynens/dotfiles),
sensible hacker defaults for Linux and macOS.

**Warning:**  
If you want to give these dotfiles a try, you should first fork this
repository, review the code, and remove things you don’t want or need. Don’t
blindly use my settings unless you know what that entails.
Use at your own risk!

## Trying with Docker

```bash
docker run -it --rm apemost/dotfiles
```

## Requirements

- `zsh`: version 4.3.9 or higher
- `git`: version 1.7 or higher

## Installation

You can clone this repository wherever you want. The bootstrapper script will
pull in the latest version and copy the files to your home folder.

```bash
git clone https://github.com/apemost/dotfiles.git && cd dotfiles && source bootstrap.sh
```

To update, `cd` into your local `dotfiles` repository and then:

```bash
source bootstrap.sh
```

### Shell prompt

Install [Starship](https://github.com/starship/starship) using Homebrew:

```bash
brew install starship
```

### uv

> An extremely fast Python package and project manager, written in Rust

```bash
# On macOS and Linux.
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### pyenv

>…
