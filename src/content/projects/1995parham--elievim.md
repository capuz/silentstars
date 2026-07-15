---
repo: "1995parham/elievim"
name: "elievim"
description: "neovim configuration based on cosyvim 🙈🎈💌"
readmeQualityOk: true
url: "https://github.com/1995parham/elievim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
topics: ["lua", "neovim", "nvim", "vim"]
stars: 13
forks: 0
openIssues: 1
closedIssues: 12
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-08-01T03:55:41Z"
lastCommitAt: "2026-07-15T05:53:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 68
maintainers: ["1995parham", "elaheh-dastan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/578f9f38d7b71060d487c35131728674d5d5b30f090368cac99896e3c938bcd2/1995parham/elievim"
---

<h1 align="center">The Way of Life</h1>

<h6 align="center">Your editor, your rules</h6>

</p>

# Introduction

Neovim is a modern and powerful text editor that is fully compatible with Vim and supports Lua plugins,
LSP client, and remote plugins. It is a project that seeks to aggressively refactor Vim in order to simplify maintenance,
enable advanced UIs, and maximize extensibility.
You can learn more about Neovim from its [official website](https://neovim.io/),
its [GitHub repository](https://github.com/neovim/neovim), or its [releases page](https://github.com/neovim/neovim/releases).

## Structure

```text
├── init.lua
├── 📂 lua
│   ├── 📂 core                    heart of elievim which provides api
│   │   ├── init.lua
│   │   ├── keymap.lua             keymap api
│   │   ├── neovide.lua            neovide-specific configuration
│   │   └── options.lua            vim options
│   │
│   ├── 📂 keymap
│   │   ├── config.lua
│   │   ├── init.lua
│   │   └── plugins.lua
│   │
│   ├── 📂 commands
│   │   ├── init.lua
│   │   ├── go.lua
│   │   ├── ansible.lua
│   │   └── graphql.lua
│   │
│   └── 📂 modules
│       ├── 📂 lang
│       │   ├── config.lua
│       │   └── plugins.lua
│…
