---
repo: "uzxmx/dotfiles"
name: "dotfiles"
description: "Awesome collections that get you ready for efficiency and productivity."
readmeQualityOk: true
url: "https://github.com/uzxmx/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [76]
topics: ["tmux", "zsh", "vim", "ruby", "ssh"]
stars: 19
forks: 2
openIssues: 1
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2018-05-16T03:03:29Z"
lastCommitAt: "2026-10-02T10:00:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 66
undervaluedScore: 41
maintainers: ["uzxmx"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5e182c43f52df2d3c15fb47a9c826d6de1274a03dbdbc7710e74c4e22c96f85/uzxmx/dotfiles"
---

# My Dotfiles

This repository contains configurations and scripts to help setup development environment
quickly in different systems (Mac OSX, Centos, Ubuntu) and ease development. It aims for
developers who are using tmux, zsh, (neo)vim, and programming languages like C/C++,
Ruby, Python, Java, Golang etc in their daily tasks.

## Installation

This repository provides a one-stop setup script. It aims to:

* __Allow to customize (e.g. where to install the repository, and which tools
  (called pods) to setup)__.

* __Try to leave footprints as few as possible on the target system__.

* __Be free to only use one or several pods__.

To setup one or more pods, use below commands as a reference.

For a list of available pods, please visit [here](https://github.com/uzxmx/dotfiles/blob/HEAD/scripts/bootstrap/pods).

```sh
# Show help.
$ curl -s "https://raw.githubusercontent.com/uzxmx/dotfiles/master/scripts/bootstrap/setup" \
    | bash -s -- -h

# Install the repository into ~/tmp/dotfiles with shallow clone.
$ curl -s "https://raw.githubusercontent.com/uzxmx/dotfiles/master/scripts/bootstrap/setup" \
    | bash -s -- --root /tmp/.dotfiles --git-clone-args "--depth 1"

# Setup tmux.…
