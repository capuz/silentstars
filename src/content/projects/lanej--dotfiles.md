---
repo: "lanej/dotfiles"
name: "dotfiles"
description: "My doots.  Changes are frequent, stability not guaranteed.  Supports Arch, CentOS and Darwin."
readmeQualityOk: true
url: "https://github.com/lanej/dotfiles"
language: "Python"
languages: ["Python", "TypeScript", "Shell"]
languagePcts: [33, 24, 23]
topics: ["dotfiles", "shell", "zsh", "oh-my-zsh", "vim", "neovim", "neovim-dotfiles", "vim-dotfiles", "bspwm", "neorg"]
stars: 41
forks: 12
openIssues: 30
closedIssues: 24
watchers: 3
contributors: 7
recentReleases: 3
createdAt: "2011-10-17T04:57:22Z"
lastCommitAt: "2026-11-22T02:12:13Z"
lastReleaseAt: "2026-11-11T17:20:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 58
maintainers: ["lanej", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/85f49aae60539eec3bb24c7cb75d707149201b29c63b130a727a94a1b3d63540/lanej/dotfiles"
---

# <img src="https://raw.githubusercontent.com/lanej/dotfiles/HEAD/docs/brand/dotfiles-logo.png" alt="" width="64" height="64"> Dotfiles

Personal dotfiles managed via `make` + symlinks, cross-platform (macOS and Linux).

## Documentation website

The Astro Starlight site in [`website/`](https://github.com/lanej/dotfiles/blob/HEAD/website/) renders the shared [documentation](https://github.com/lanej/dotfiles/blob/HEAD/docs/index.mdx) from `README.md` and `docs/`; those files are the only documentation sources to maintain. See the [site maintenance guide](https://github.com/lanej/dotfiles/blob/HEAD/docs/documentation-site.mdx) for local development and verification.

## Installation

**Run `make` to apply configuration. Run `make install` to install selected tools and configure them.** Both use this machine's [configuration sets](#configuration-sets).

### Set up a new machine

Requires Git, Make, and Bash on macOS or Linux. The [one-line quick start](https://github.com/lanej/dotfiles/blob/HEAD/docs/index.mdx#quick-start) clones or reuses `~/.files` and runs the minimal bootstrap. To run each step yourself:

**1. Clone and initialize the native configuration.**
