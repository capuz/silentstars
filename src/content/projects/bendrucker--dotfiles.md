---
repo: "bendrucker/dotfiles"
name: "dotfiles"
description: "dotfiles for zsh / macOS"
readmeQualityOk: true
url: "https://github.com/bendrucker/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [84]
stars: 6
forks: 0
openIssues: 2
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2016-08-16T16:10:39Z"
lastCommitAt: "2026-07-08T05:43:00Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 93
undervaluedScore: 73
maintainers: ["bendrucker", "renovate[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/42d647442c8c1d92e03c677495179459e646fc5360616944d5bba1512bb1117d/bendrucker/dotfiles"
---

# dotfiles [](https://github.com/bendrucker/dotfiles/actions/workflows/test.yml)

> My dotfiles for configuring macOS

Linux friendly, outside of [`macos/`](https://github.com/bendrucker/dotfiles/blob/HEAD/macos/) and a [`Brewfile`](https://github.com/bendrucker/dotfiles/blob/HEAD/Brewfile) for dependency management. I use this repo for both home and work.

Highlights include:

* zsh with the minimal [pure](https://github.com/sindresorhus/pure) prompt
* Sane defaults for programming languages I use

## Installing

```sh
git clone https://github.com/bendrucker/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
scripts/bootstrap
```

## Usage

The project is organized into logical "topic" folders. Scripts are organized into topic folders according to functionality (e.g. HTTP utilities in `http/`) and may be organized by type (aliases, functions, etc.) within a topic folder.

- **bin/**: Anything in `bin/` will get added to `$PATH`.
- **./\**/Brewfile**: Defines packages to install via Homebrew, including Homebrew Cask for GUIs.
- **\*/\*.zsh**: Any files ending in `.zsh` are loaded.
- **\*/path.zsh**: Any file named `path.zsh` is loaded first and is
  expected to setup `$PATH` or similar.
-…
