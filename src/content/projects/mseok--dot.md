---
repo: "mseok/dot"
name: "dot"
description: "dot files for my work space"
readmeQualityOk: true
url: "https://github.com/mseok/dot"
language: "Shell"
languages: ["Shell"]
languagePcts: [94]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-06-07T08:01:38Z"
lastCommitAt: "2026-09-17T08:51:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 71
undervaluedScore: 66
maintainers: ["mseok"]
openGraphImageUrl: "https://opengraph.githubassets.com/d5b10f63ac07d1e29aa5e82394f74ace760456ad45284ace85621fe0aeeb48c9/mseok/dot"
---

# Dotfiles

Personal dotfiles for macOS, Linux, and sudo-less HPC environments with modular configurations for development tools, window management, and AI-assisted coding.

## Quick Start (macOS/Linux)

After reviewing the bootstrap script, a fresh machine can be installed with:

```bash
curl -fsSL https://raw.githubusercontent.com/mseok/dot/main/bootstrap.sh | bash
```

This clones the repository into `$HOME/dot` and dispatches to the correct
platform installer. On macOS, Homebrew is the only step that may still need
the normal administrator/password confirmation:

```bash
curl -fsSL https://raw.githubusercontent.com/mseok/dot/main/bootstrap.sh | bash -s -- --install-homebrew
```

The safer reviewed form is equivalent but keeps the repository visible:

```bash
git clone https://github.com/mseok/dot.git $HOME/dot
$HOME/dot/install.sh
exec $SHELL -l
```

The installer is idempotent. Existing regular config files are backed up before
links are created, while an existing non-empty directory is never overwritten.

---

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Tool Installation](#tool-installation)
  - [macOS Installation](#macos-installation)…
