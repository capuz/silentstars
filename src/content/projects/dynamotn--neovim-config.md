---
repo: "dynamotn/neovim-config"
name: "neovim-config"
description: "My customize configuration for neovim, mirror from "
readmeQualityOk: true
url: "https://github.com/dynamotn/neovim-config"
homepage: "https://gitlab.com/dynamo-config/vim"
language: "Lua"
languages: ["Lua"]
languagePcts: [94]
topics: ["dotfiles", "neovim", "neovim-dotfiles", "lua", "nvim"]
stars: 18
forks: 0
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-09-10T10:10:38Z"
lastCommitAt: "2026-09-30T09:51:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 78
undervaluedScore: 58
maintainers: ["dynamotn"]
openGraphImageUrl: "https://opengraph.githubassets.com/44e46566c263883ed78a14be1a7a78e05c18e1ad91e9c47003489f9be62d4cb9/dynamotn/neovim-config"
---

# neovim-config

> My customization configuration for neovim

- [Features](#features)
- [Languages, Frameworks, or Tools support](#languages-frameworks-or-tools-support)
  * [Languages](#languages)
  * [Frameworks](#frameworks)
  * [Tools & Markup](#tools--markup)
- [Installation](#installation)
- [Key bindings](#key-bindings)
- [Benchmark](#benchmark)

## Features

- 🔥 Transform your Neovim into a full-fledged IDE
- 🚀 Blazingly fast and furious (see [benchmark](#benchmark))
- 🧹 Sane default settings for options, autocmds, and keymaps
- 📦 Comes with a wealth of plugins pre-configured and ready to use **for DevOps and SA**, like me
  - Supported many languages, frameworks and tools (see [here](#languages-frameworks-or-tools-support))
  - Load per machine configurations via `lua/per_machine/init.lua` if exists (see [my config](https://github.com/dynamotn/neovim-config/blob/HEAD/lua/per_machine/config.lua.tmpl), managed by [chezmoi](https://www.chezmoi.io/))
  - Lazy install treesitter parsers, LSP servers, formatters, linters, debug adapters... if needed when open file
  - Bundle languages/tools when containerize or builtin development environments by `_G.bundle_languages` in…
