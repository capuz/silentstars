---
repo: "AlexvZyl/nvim"
name: "nvim"
description: "Configuration files and custom modules for Neovim."
readmeQualityOk: true
url: "https://github.com/AlexvZyl/nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
topics: ["neovim", "neovim-config", "neovim-dotfiles", "nvim", "nvim-configs"]
stars: 32
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-07-29T10:19:14Z"
lastCommitAt: "2026-11-22T11:46:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 45
maintainers: ["AlexvZyl", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/40df78d4a0d671812fe69d0acdf02eb31b682d1de5939c2d5972a027fa0bc855/AlexvZyl/nvim"
---

# "${HOME}/.config/nvim"

Configuration files and custom modules for Neovim.

I do not use a distro becuase:
1. They are fragile.
2. I like doing things myself.

## Some notes

- I am on an endeavour to reduce the surface of `lua/alex/plugins` as much as possible, and replace it with custom stuff in `lua/alex/native` (within reason, of course).
- I am not setting up my packages in the way that is described by `lazy.nvim`.  I am trying to keep my configs "package manager agnostic" as far as possible.
- I try to keep all of the key bindings in [one file](https://github.com/AlexvZyl/nvim/blob/main/lua/alex/keymaps.lua) so that it is easier to keep track of everything and prevent conflicts.
- You can add more LSPs to the end of [this file](https://github.com/AlexvZyl/nvim/blob/main/lua/alex/native/lang/lsp-configs.lua).

## Plugins

I keep my own plugins in [plugins](https://github.com/AlexvZyl/nvim/blob/HEAD/plugins).  To load them with lazy:
