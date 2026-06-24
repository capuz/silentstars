---
repo: "cds-amal/fzf-eip"
name: "fzf-eip"
description: "fzf and eips"
url: "https://github.com/cds-amal/fzf-eip"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["fzf", "ethereum", "eip", "bash", "zsh"]
stars: 36
forks: 4
openIssues: 2
closedIssues: 0
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2021-08-14T12:54:29Z"
lastCommitAt: "2026-06-24T00:25:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 35
maintainers: ["grue-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/8bed458055af474be7187a0cf6cb5c7ca06a671b526aad3ba7d487aa91294ada/cds-amal/fzf-eip"
discussionCount: 1
---

# EIP Fuzzy finder launch thing

[fzf](https://github.com/junegunn/fzf) helper to search EIPs by number or name.
Selecting it will open the EIP in your browser. [See this
demo](https://www.youtube.com/watch?v=2VOZV9tsmGs)

## Search 🔍

## Launch 🚀

# Installation

1. Install [fzf](https://github.com/junegunn/fzf), a general-purpose
   command-line fuzzy finder.

1. Clone this repo
   ```sh
   git clone https://github.com/cds-amal/fzf-eip.git ~/.fzf-eip
   ```
1. Edit your .bashrc or .zshrc startup script file. If you don't know, enter
   `ps -p $$` to know your currently running shell. Modify `~/.bashrc` for bash
   and `~/.zshrc` for zsh.

   ```sh
   # somewhere in your .bashrc or .zshrc file...

   # FZF_EIP_HOME is the directory where you cloned to
   export FZF_EIP_HOME=$HOME/.fzf-eip
   source $FZF_EIP_HOME/init.sh
   ```

## A note on browser configuration

For non WSL linux and Mac OS X, this script relies on `xdg-open`. You can
[configure](./init.sh) this to a different browser if `xdg-open` is not viable for your
setup.

For WSL2, it relies on the fullpath to the browser executable. You can change
the default to use the browser of your choice in [init.sh](./init.sh)…
