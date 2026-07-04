---
repo: "happy-dude/dotfiles"
name: "dotfiles"
description: "Custom dotfile configurations and settings"
readmeQualityOk: true
url: "https://github.com/happy-dude/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [47]
topics: ["neovim", "vim", "dotfiles", "emacs", "evil-mode", "tmux", "linux", "stow", "macos", "nvim"]
stars: 22
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2012-01-09T13:29:31Z"
lastCommitAt: "2026-07-04T23:15:50Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 56
maintainers: ["happy-dude"]
openGraphImageUrl: "https://opengraph.githubassets.com/21c239d97893b69b92e8707bfe4fa32162b9d64e0fda1358a7e12f7cde7c3482/happy-dude/dotfiles"
fundingLinks: ["GITHUB:https://github.com/happy-dude"]
---

# Happy-Dude's dotfiles

> happy-dude's personal dotfiles repo

This repo is managed solely by myself and configured for my personal workflows
and use-cases.

Feel free to browse and adopt any settings to help tweak your own setup; I've
done my best to attribute resources in the comments for further details.

My entire workflow is currently based within macOS, reflecting in Unix-compatible
configurations. I have not used Linux nor Windows as a daily driver in a while and
I will make the appropriate changes to make my settings compatible when I do.

## Branches

Multiple branches of dotfiles are useful for different platforms or environments
that require modified settings.

There are (currently) two branches, `master` and `macos`. macOS users should
checkout the `macos` branch by executing:

```bash
git checkout -b macos origin/macos
```

## Submodules

This repo contains git [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
for many [configs](https://github.com/Happy-Dude/dotfiles/tree/master/zsh),
[vim](https://github.com/Happy-Dude/dotfiles/tree/master/vim/.vim/pack/bundle/opt), and…
