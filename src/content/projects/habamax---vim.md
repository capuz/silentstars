---
repo: "habamax/.vim"
name: ".vim"
description: "Personal .vim"
readmeQualityOk: true
url: "https://github.com/habamax/.vim"
language: "Vim Script"
languages: ["Vim Script"]
languagePcts: [100]
stars: 85
forks: 4
openIssues: 0
closedIssues: 11
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2015-06-06T09:59:15Z"
lastCommitAt: "2026-08-18T04:08:41Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 48
maintainers: ["habamax"]
openGraphImageUrl: "https://opengraph.githubassets.com/0605d6450d2a7173862ce52eeb1ce85772b3a896cf24dd6ae9579b490bb32bdd/habamax/.vim"
---

# Personal .vim

Personal vim configuration.

## Vimscript scratches

### Surround

There are 2 very well known and established plugins to surround text in vim:

- [surround.vim](https://github.com/tpope/vim-surround) by Tim Pope
- [vim-sandwich](https://github.com/machakann/vim-sandwich) by @machakann

And yet I have created my own. It can do most if not all of what `surround.vim`
can and by default uses same `ys`, `ds` and `cs` operators, `S` for visual
mode. It is less fancy than `vim-sandwich` which provides quite a few nice
things in the package.

Key difference is implementation, I use 3 simple operators (add, remove and
change surround) that are naturally dot repeatable without using `.` mapping
or [repeat.vim](https://github.com/tpope/vim-repeat).

It was quite fun and challenging to work through many many edge cases,
especially related to visual block surrounds and unicode handling.

[vim-surround](https://github.com/habamax/.vim/blob/master/pack/local/start/vim-surround/README.md)

### Fuzzy Popup Finder

> [!NOTE]
> Vim has introduced improvements on command line complete (e.g.
> `wildtrigger()`) so I am using regular commands with fuzzy matching instead.

Sometimes ago…
