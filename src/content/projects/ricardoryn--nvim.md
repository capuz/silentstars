---
repo: "RicardoRyn/nvim"
name: "nvim"
description: "My neovim configuration."
readmeQualityOk: true
url: "https://github.com/RicardoRyn/nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
topics: ["neovim", "neovim-configuration", "nvim", "nvim-config", "nvim-configs", "nvim-configuration"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-08-16T02:02:31Z"
lastCommitAt: "2026-11-23T13:28:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 63
maintainers: ["RicardoRyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/38ee69b3ea8f6f7cad3d3603cef74149770e0168a8efa2a7b15b9a7910e6756e/RicardoRyn/nvim"
---

# My Neovim Configuration

> **Important**
>
> This is NOT a Neovim distribution.
> It's my personal setup shared for reference and inspiration.
>
> Neovim 0.12+. This config relies on features introduced in 0.12:
> the built-in `vim.pack` plugin manager and
> the built-in `vim._core.ui2` notification UI.

## Features

### Plugin Management

All plugins are managed by the built-in `vim.pack`, with the plugin list defined in `lua/config/pack.lua`.

Plugins that are installed but no longer declared in the configuration are considered
orphaned and will be automatically removed the next time Neovim starts.

If you only want to temporarily disable a plugin while keeping it on disk, add it to `disabled_specs`.
These entries will not be loaded but will remain protected from orphan cleanup.

| Command          | Description                             |
| ---------------- | --------------------------------------- |
| `:PackStatus`    | Check plugin status without downloading |
| `:PackUpdate`    | Check and update plugins (with dry-run) |
| `:PackUpdate!`   | Update plugins (skip confirmation)      |
| `:PackDel <...>` | Remove installed plugins                |
