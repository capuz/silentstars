---
repo: "Shougo/goda-cmp.vim"
name: "goda-cmp.vim"
description: "Completion framework for Vim/Neovim based on goda.vim"
readmeQualityOk: true
url: "https://github.com/Shougo/goda-cmp.vim"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["goda-cmp", "goda-vim"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-10-15T00:27:06Z"
lastCommitAt: "2026-11-14T21:56:18Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 46
maintainers: ["Shougo", "dependabot[bot]", "delphinus"]
openGraphImageUrl: "https://opengraph.githubassets.com/f140c9ae9488572b150f5d4c778299cf945f8358d3f2ceb1aa2f65eb4952bee1/Shougo/goda-cmp.vim"
---

# goda-cmp.vim

Completion for Vim and Neovim, built on [goda.vim](https://github.com/Shougo/goda.vim).
A successor in spirit to ddc.vim: sources and filters are separate extensions,
the popup is either Vim's native one or [pum.vim](https://github.com/Shougo/pum.vim),
and the configuration is code — a small Go program you own.

Status: early. See "Not implemented".

## Try it

You need Go 1.26 or newer, and Vim 9.1 or newer (with `+job +channel +timers`)
or Neovim 0.11 or newer. Install `Shougo/goda.vim` and `Shougo/goda-cmp.vim` (and
`Shougo/pum.vim` for the pum popup) with your plugin manager, then create your
configuration, a Go module of your own, outside this repository (keep it in
your dotfiles; `e2e/config`, which the tests build, is only a template to
copy):

```sh
mkdir -p ~/.vim/goda-cmp && cd ~/.vim/goda-cmp        # Neovim: ~/.config/nvim/goda-cmp
cp /path/to/goda-cmp.vim/e2e/config/{main.go,config.go} .
go mod init goda-cmp-config
go get github.com/Shougo/goda-cmp.vim@latest
go mod tidy
```

Add to your vimrc / init.vim:

```vim
autocmd VimEnter * call goda_cmp#enable()
```

Then build and start:

```vim
:call goda_cmp#build()
:call goda_cmp#enable()
```

Open a file,…
