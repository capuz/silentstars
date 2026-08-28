---
repo: "vim-fuzzbox/fuzzbox.vim"
name: "fuzzbox.vim"
description: "Modern fuzzy finder for Vim with minimal dependencies"
readmeQualityOk: true
url: "https://github.com/vim-fuzzbox/fuzzbox.vim"
language: "Vim Script"
languages: ["Vim Script"]
languagePcts: [97]
topics: ["vim", "vim-plugin", "fuzzy", "fuzzy-search", "vim9", "vim9-plugin", "vim9-script", "vim9script", "vimscript", "fuzzy-finder"]
stars: 163
forks: 18
openIssues: 0
closedIssues: 85
watchers: 4
contributors: 12
recentReleases: 0
createdAt: "2023-04-30T04:46:01Z"
lastCommitAt: "2026-08-28T15:34:27Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 40
maintainers: ["mmrwoods", "suitablebeard", "huhumt"]
openGraphImageUrl: "https://opengraph.githubassets.com/90ad3e83b54f3b13ea01d18f6ca5cdfa133779f59bbd8138a543c474c8a19502/vim-fuzzbox/fuzzbox.vim"
---

# fuzzbox.vim

A modern fuzzy finder with minimal dependencies. Written in vim9script using
Vim's native fuzzing matching, background job, and popup window features, it's
fast and works out of the box on Mac, Linux, and Windows.

## Screenshot

[](https://raw.githubusercontent.com/vim-fuzzbox/fuzzbox-showcase/refs/heads/main/screenshot.png)
Visit the [showcase](https://github.com/vim-fuzzbox/fuzzbox-showcase) for other examples

## Requirements

- Vim >= 9.0 (plugin is written in vim9script, Vim 9+ required, Neovim not
  supported)

Fuzzbox uses programs pre-installed on almost all Mac, Linux, and Windows
systems for finding files and searching in files by default (e.g. `grep`,
`findstr`), but uses faster alternatives where possible (e.g. `git grep`).

### Optional dependencies

- [ripgrep](https://github.com/BurntSushi/ripgrep) - used to find files and
  search in files, recommended
- [ugrep](https://ugrep.com/) - used to find files and search in files if
  ripgrep not installed
- [ag](https://github.com/ggreer/the_silver_searcher) - used to find files and
  search in files if neither ripgrep or ugrep installed
- [fd](https://github.com/sharkdp/fd) - used to find files if none of…
