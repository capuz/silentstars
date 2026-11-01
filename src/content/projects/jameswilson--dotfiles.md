---
repo: "jameswilson/dotfiles"
name: "dotfiles"
description: "my home folder"
readmeQualityOk: true
url: "https://github.com/jameswilson/dotfiles"
language: "Shell"
languages: ["Shell", "Perl"]
languagePcts: [67, 21]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2010-04-14T05:07:06Z"
lastCommitAt: "2026-11-01T10:44:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 49
maintainers: ["jameswilson"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5d4c592ec2bd641afe5c9e9d9aca9e7583dce4b1d7c25d8ade1171fa53aef07/jameswilson/dotfiles"
---

this is the contents of my personal ~/  folder on my development machine

It is customized for my development preferences:

* Mac OS X.
* Homebrew.
* iTerm with Snazzy colors and Meslo Nerd Font.
* vim, with spf13-vim distro.
* zsh shell with oh-my-zsh and powerlevel10k theme.

## Installation

https://wiki.archlinux.org/title/Dotfiles

1) Clone the repository.

        $ cd $HOME
        $ git clone --bare <git-repo-url> $HOME/.dotfiles
        $ alias dotfiles='git --git-dir="$HOME/.dotfiles/" --work-tree="$HOME"'
        $ dotfiles checkout
        $ dotfiles config --local status.showUntrackedFiles no

2) Customize .gitconfig.local

Copy .gitconfig.local.dist to .gitconfig.local and customize accordingly.

4.  Install Homebrew.

        ~/.local/bin/brew.sh
