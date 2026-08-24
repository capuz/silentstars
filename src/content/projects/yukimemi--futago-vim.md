---
repo: "yukimemi/futago.vim"
name: "futago.vim"
description: "Google gemini ai chat for vim"
readmeQualityOk: true
url: "https://github.com/yukimemi/futago.vim"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["ai", "denops", "gemini", "neovim-plugin", "vim-plugin"]
stars: 36
forks: 1
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-01-07T14:22:04Z"
lastCommitAt: "2026-08-24T04:21:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 48
maintainers: ["yukimemi", "github-actions[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7125387b9059a7eca4c8620168627ba7e6dec9fc9fa70e1324dbc49fc7722763/yukimemi/futago.vim"
---

# futago.vim

Google gemini chat for Vim / Neovim.

# Features

This plugin is a Google gemini chat for Vim / Neovim.

# Installation

If you use [folke/lazy.nvim](https://github.com/folke/lazy.nvim).

```lua
{
  "yukimemi/futago.vim",
  lazy = false,
  dependencies = {
    "vim-denops/denops.vim",
  },
}
```

If you use [yukimemi/dvpm](https://github.com/yukimemi/dvpm).

```typescript
dvpm.add({ url: "yukimemi/futago.vim" });
```

# Requirements

- [Deno - A modern runtime for JavaScript and TypeScript](https://deno.land/)
- [vim-denops/denops.vim: 🐜 An ecosystem of Vim/Neovim which allows developers to write cross-platform plugins in Deno](https://github.com/vim-denops/denops.vim)

Using Deno.KV, you need the `--unstable-kv` flag.
Please specify as below.

```vim
let g:denops#server#deno_args = ['-q', '--no-lock', '--unstable-kv', '-A']
```

- Environment: `GEMINI_API_KEY`

See [Get API key](https://ai.google.dev/)

# Functions

## `futago#start_chat([params])`

Start Futago chat with params.
params is dictionaly.

- [opener]: Default is "tabnew".

Options are "split", "vsplit", "tabnew", "edit", "new", "vnew".

- [history]: List of chat history.

example:

[{"role": "user",…
