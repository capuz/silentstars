---
repo: "Shougo/goda-skk.vim"
name: "goda-skk.vim"
description: "SKK implementation for Vim/Neovim by goda.vim"
readmeQualityOk: true
url: "https://github.com/Shougo/goda-skk.vim"
language: "Go"
languages: ["Go"]
languagePcts: [81]
topics: ["goda-cmp-source", "goda-vim"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-28T10:00:19Z"
lastCommitAt: "2026-11-14T21:58:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 50
maintainers: ["Shougo", "delphinus", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/939536f08dde22a286575dde0d6bc2fe09a9007781597bdc646b3d16a191adb8/Shougo/goda-skk.vim"
---

# goda-skk.vim

SKK input method for Vim and Neovim, built on
[goda.vim](https://github.com/Shougo/goda.vim). The successor of
[skkeleton](https://github.com/vim-skk/skkeleton): the same way of typing,
with the input method written in Go and configured in Go — a small program
you own.

Status: early. Conversion with okurigana, registering words, the user
dictionary and dictionary files, kakuteiUndo, insert mode, the command line
and terminal jobs work; the highlight of the pre-edit and the state popup
(skkeleton-henkan-highlight and skkeleton-state-popup) are built in, and
[goda-cmp.vim](https://github.com/Shougo/goda-cmp.vim) completes readings
(the sources `cmp/source/skk` and `cmp/source/skkokuri`, the ddc.vim
sources of skkeleton). Besides dictionary files, an SKK server
(`dictionary/skkserv`) and Google Japanese Input (`dictionary/google`) can
be dictionaries.

The author's configuration of goda-cmp.vim completes with them:
[goda-cmp/main.go](https://github.com/Shougo/shougo-s-github/blob/master/vim/rc/goda-cmp/main.go)
and [goda-skk.vim](https://github.com/Shougo/shougo-s-github/blob/master/vim/rc/goda-skk.vim).

## Try it

You need Go 1.26 or newer, Vim 9.1 or newer (with…
