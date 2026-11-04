---
repo: "p-chan/dotfiles"
name: "dotfiles"
description: "The dotfiles for fuckin' awesome development environment"
originalDescription: "The dotfiles for fuckin' awesome development environment"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/p-chan/dotfiles"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [49, 43]
stars: 8
forks: 0
openIssues: 5
closedIssues: 21
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-12-22T01:26:45Z"
lastCommitAt: "2026-11-04T11:28:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 71
maintainers: ["p-chan"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6610adcbfb70cefdbee8135423ca8a607b904489a9bb5c3fa884a80eeecce80/p-chan/dotfiles"
---

# dotfiles

> The dotfiles for fuckin' awesome development environment

## Supported environments

- macOS 26 or later (Apple Silicon only)

## Installation

First, open **System Settings > General > Software Update** and update macOS to the latest version.
On a new Mac or a Mac that was just reinstalled, the update catalog may be outdated, so you may not be able to update directly to the latest version.
In that case, use [the full installer](https://support.apple.com/en-us/HT201475), or install the intermediate versions it offers, in order.

```sh
bash -c "$(curl -fsSL https://raw.githubusercontent.com/p-chan/dotfiles/main/scripts/install.sh)"
```

By default, the repository is cloned to `~/src/github.com/p-chan/dotfiles`.
When using a different location (CI, a temporary macOS environment, an existing checkout, etc.), specify `DOTFILES_DIR`.

```sh
DOTFILES_DIR="$PWD" bash scripts/install.sh
```

`install.sh` records this location as the `dotfiles.root` setting for mise in `home/.config/mise/conf.d/dotfiles-root.toml` (machine-specific and not tracked by Git).
As a result, you can run `mise bootstrap` afterward without setting any environment variables.
To change the checkout…
