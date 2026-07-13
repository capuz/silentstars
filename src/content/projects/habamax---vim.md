---
repo: "habamax/.vim"
name: ".vim"
description: "Personal .vim"
readmeQualityOk: true
url: "https://github.com/habamax/.vim"
language: "Vim Script"
languages: ["Vim Script"]
languagePcts: [100]
stars: 86
forks: 4
openIssues: 0
closedIssues: 11
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2015-06-06T09:59:15Z"
lastCommitAt: "2026-07-13T06:37:16Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 48
maintainers: ["habamax"]
openGraphImageUrl: "https://opengraph.githubassets.com/df143fe570178ac41d147da4c6e65479de891e45a4889212c09d5c7e5f2cef10/habamax/.vim"
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
