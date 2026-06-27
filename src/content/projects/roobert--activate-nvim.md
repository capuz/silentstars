---
repo: "roobert/activate.nvim"
name: "activate.nvim"
description: "🚀 Activate is a plugin installation system for Neovim"
url: "https://github.com/roobert/activate.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [81]
stars: 150
forks: 4
openIssues: 4
closedIssues: 2
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-09-06T21:22:57Z"
lastCommitAt: "2026-06-27T00:46:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 34
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/2958b951c24a1440e62e6d45c5ea89fae7690692c82d3fccb41bd07da361a31b/roobert/activate.nvim"
---

# 🚀 activate.nvim

`activate.nvim` is a plugin installation system for Neovim, designed to complement [folke/lazy.nvim](https://github.com/folke/lazy.nvim).

## Demos

## Features

- **Curated Plugin List**: Generated from the list of plugins at [rockerBOO/awesome-neovim](https://github.com/rockerBOO/awesome-neovim).
- **Intuitive Interface**: Allows users to easily browse, search, install, and uninstall Neovim plugins through the telescope interface.
- **Automatic Configuration**: If a plugin adheres to the unofficial configuration standard, `activate.nvim` can automatically generate a default setup. This aims to reduce the initial setup time for new plugins.
- **Automatic Plugin List Updates**: A github action periodically checks to see if there
  are any updates in the `awesome-neovim` repository and updates this plugins `data.json` file which is then sync'd down to Neovim by `lazy.nvim`, just like any other plugin.

## How It Works

### Plugin Updates

After a plugin is installed using `activate.nvim`, plugin updates are managed by `lazy.nvim` in the same way as any other plugin.

### Database Refresh

To provide the latest plugins, a Github pipeline checks the awesome-neovim…
