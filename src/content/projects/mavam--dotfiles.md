---
repo: "mavam/dotfiles"
name: "dotfiles"
description: ":desktop_computer: The very heart of an efficient work environment"
readmeQualityOk: true
url: "https://github.com/mavam/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [74]
topics: ["dotfiles", "zsh", "vim", "mutt", "tmux", "git"]
stars: 53
forks: 20
openIssues: 5
closedIssues: 7
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2010-10-15T15:20:46Z"
lastCommitAt: "2026-08-04T06:10:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 47
maintainers: ["mavam"]
openGraphImageUrl: "https://opengraph.githubassets.com/6f627d7b6e9ba5c5ff95d6c3353c202c69e11b0598b3bc481cc59ab3689c32b2/mavam/dotfiles"
---

# dotfiles

> Proper dotfiles are the very heart of an efficient working environment.

- **Terminals**: [GhostTTY](https://ghostty.org/)
- **Shell**: [Fish](https://fishshell.com/)
- **Editor**: [NeoVim](https://neovim.io/)
- **Colorscheme**: GitHub Light & Dark
- **Font**: [Fira Code](https://github.com/tonsky/FiraCode)
  from [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts)

On macOS, [Homebrew](https://brew.sh) is the package manager.

## Usage

### Synopsis

Clone this repository and optionally bootstrap your system:

```sh
git clone git@github.com:mavam/dotfiles.git ~/.dotfiles
cd .dotfiles
./bootstrap
```

The bootstrap script will ask you whether you'd like to setup specific components.

### Dotfile Management

The Bash utility [dots](https://github.com/mavam/dotfiles/blob/HEAD/dots) links configuration content from this repository
into your prefix (default: `$HOME`), treating each top-level directory as a
"tool" whose contents mirror the layout you want under `$HOME`. Add files to a
tool directory and, with a `root` mapping, they will be picked up automatically.

Install everything:

```sh
./dots install
```

Install a subset (your shell expands globs before the…
