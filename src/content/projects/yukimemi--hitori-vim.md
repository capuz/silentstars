---
repo: "yukimemi/hitori.vim"
name: "hitori.vim"
description: "Plugin similar to neovim-remote and vim-singleton using denops.vim."
readmeQualityOk: true
url: "https://github.com/yukimemi/hitori.vim"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["deno", "denops", "remote", "vim-denops", "vim-plugin", "neovim", "neovim-plugin", "vim"]
stars: 9
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-11-24T13:07:40Z"
lastCommitAt: "2026-08-24T04:22:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 75
undervaluedScore: 61
maintainers: ["yukimemi", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4cbd403964f77ea848a5886993d97fb54a76f5d543e135b88e69027c394589f8/yukimemi/hitori.vim"
---

# hitori.vim

Plugin similar to [neovim-remote](https://github.com/mhinz/neovim-remote) and [vim-singleton](https://github.com/thinca/vim-singleton) using [denops.vim](https://github.com/vim-denops/denops.vim).

# Features

It uses [denops.vim](https://github.com/vim-denops/denops.vim), so it works cross-platform.
Also supports Windows.

# Installation

If you use [folke/lazy.nvim](https://github.com/folke/lazy.nvim).

```lua
{
  "yukimemi/hitori.vim",
  lazy = false,
  dependencies = {
    "vim-denops/denops.vim",
  },
}
```

If you use [yukimemi/dvpm](https://github.com/yukimemi/dvpm).

```typescript
dvpm.add({ url: "yukimemi/hitori.vim" });
```

# Requirements

- [Deno - A modern runtime for JavaScript and TypeScript](https://deno.land/)
- [vim-denops/denops.vim: 🐜 An ecosystem of Vim/Neovim which allows developers to write cross-platform plugins in Deno](https://github.com/vim-denops/denops.vim)

# Usage

No special settings are required.
By default, Start a websocket server on port 7070.

# Commands

`:Disablehitori`
Disable hitori.

`:Enablehitori`
Enable hitori.

# Config

No settings are required. However, the following settings can be made if necessary.

`g:hitori_debug`…
