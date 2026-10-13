---
repo: "kthibodeaux/.dotfiles"
name: ".dotfiles"
description: "neovim, zsh, tmux, i3, and more for a ruby/go developer"
readmeQualityOk: true
url: "https://github.com/kthibodeaux/.dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [75]
topics: ["dotfiles", "neovim", "i3wm", "zsh", "tmux"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 79
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2014-06-03T19:57:32Z"
lastCommitAt: "2026-10-13T10:57:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 71
maintainers: ["kthibodeaux"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f25dfd94d0837cd11a86f74680346ad181a919e36592058e6415db6bfa0179a/kthibodeaux/.dotfiles"
---

# dotfiles

Built to run on top of [Fedora Sway Atomic](https://fedoraproject.org/atomic-desktops/sway/) (rpm-ostree, image-based, Sway as the desktop). The `config` packages below are not tied to that image specifically, but the `host` bootstrap scripts assume it.

## setup

Before running the below commands make sure you can clone from GitHub by adding your SSH key to your profile.

```bash
git clone git@github.com:kthibodeaux/.dotfiles.git
cd .dotfiles
```

### host (Fedora Atomic)

`host/` holds one-off bootstrap scripts specific to a Fedora Sway Atomic install.

### distrobox

`distrobox/` has scripts for creating a development container and a general utils container.

### config

`./stow_all` symlinks the packages it lists into `$HOME` with [GNU Stow](https://www.gnu.org/software/stow/).

```bash
./stow_all
```
