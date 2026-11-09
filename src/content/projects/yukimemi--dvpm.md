---
repo: "yukimemi/dvpm"
name: "dvpm"
description: "dvpm - Denops Vim/Neovim Plugin Manager"
readmeQualityOk: true
url: "https://github.com/yukimemi/dvpm"
homepage: "https://jsr.io/@yukimemi/dvpm"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["deno", "denops", "neovim", "plugin-manager", "vim", "vim-denops"]
stars: 25
forks: 0
openIssues: 1
closedIssues: 5
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2023-05-14T12:16:02Z"
lastCommitAt: "2026-11-09T03:30:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 62
maintainers: ["yukimemi", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ba1f5103c52a6b95d6a9c43d24795db8f96ce86599d975cf9732f22750d88bb/yukimemi/dvpm"
---

# dvpm - Denops Vim/Neovim Plugin Manager !

`dvpm` is a plugin manager for Vim and Neovim, powered by
[denops.vim](https://github.com/vim-denops/denops.vim).

- Vim / Neovim start up very fast (all plugins are loaded lazily)!

- You can write all Vim / Neovim settings in TypeScript

## Requirement

- [Deno - A modern runtime for JavaScript and TypeScript](https://deno.land/)

## Setup

### 1. Bootstrap denops.vim

```lua
local denops = vim.fn.expand("~/.cache/nvim/dvpm/github.com/vim-denops/denops.vim")
if not vim.loop.fs_stat(denops) then
  vim.fn.system({ "git", "clone", "https://github.com/vim-denops/denops.vim", denops })
end
vim.opt.runtimepath:prepend(denops)
```

```vim
let s:denops = expand("~/.cache/vim/dvpm/github.com/vim-denops/denops.vim")
if !isdirectory(s:denops)
  execute 'silent! !git clone https://github.com/vim-denops/denops.vim ' .. s:denops
endif
execute 'set runtimepath^=' . substitute(fnamemodify(s:denops, ':p') , '[/\\]$', '', '')
```

### 2. Configure deno.json

If you use denops.vim v8 or later, specify `workspace` and add dependencies.

Place `deno.json` at:
- `~/.config/nvim/deno.json` (Neovim, Mac/Linux)
- `~/AppData/Local/nvim/deno.json` (Neovim,…
