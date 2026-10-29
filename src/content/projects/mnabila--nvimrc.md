---
repo: "mnabila/nvimrc"
name: "nvimrc"
description: "Neovim Configuration"
readmeQualityOk: true
url: "https://github.com/mnabila/nvimrc"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
topics: ["neovim", "neovim-dotfiles", "dotfiles", "dotfiles-linux"]
stars: 136
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-04-22T01:25:10Z"
lastCommitAt: "2026-10-29T14:06:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 67
undervaluedScore: 21
maintainers: ["mnabila"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/182601869/bf0bd400-4da8-11eb-95a2-3587c540706c"
fundingLinks: ["CUSTOM:https://trakteer.id/mnabila", "KO_FI:https://ko-fi.com/mnabila", "PATREON:https://patreon.com/mnabila"]
discussionCount: 0
---

# 🛠️ Neovim Configuration

A modern, Lua-based Neovim setup designed for efficiency and customization.

## 📸 Preview

## 🌟 Features

- 🚀 Lazy-loaded plugins via [lazy.nvim](https://github.com/folke/lazy.nvim)
- 🎨 Gruvbox theme with custom highlights
- 🧠 Intelligent code completion and LSP support
- 🧰 Modular setup under `lua/config/`
- 🔍 Telescope for fuzzy finding
- 🗂️ File explorer with `sfm.nvim`
- 🧱 Git integration with `gitsigns.nvim` and `neogit`

## 📂 Structure

- `init.lua`: main entry point
- `lua/config/`: modular config files (keymaps, plugins, settings)
- `lsp/`: custom LSP setups
- `colors/`: custom colorscheme
- `snippets/`: custom snippets

## 🧰 Installation

```bash
git clone https://github.com/mnabila/nvimrc ~/.config/nvim
```

## 💡 Tips

- Want to change the theme? Check `lua/config/colorscheme.lua`
- Plugins are managed in `lua/config/plugins.lua`
- LSP setup is organized inside the `lsp/` directory
- Filetype-specific settings are located in `after/ftplugin/`
- You can tweak general settings in `lua/config/options.lua`
- Key mappings are defined in `lua/config/keymaps.lua`

## 📜 License

This project is licensed under the [MIT…
