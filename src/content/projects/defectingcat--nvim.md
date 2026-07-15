---
repo: "DefectingCat/nvim"
name: "nvim"
description: "Neovim config"
readmeQualityOk: true
url: "https://github.com/DefectingCat/nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-12T01:18:15Z"
lastCommitAt: "2026-07-15T05:40:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 68
maintainers: ["DefectingCat"]
openGraphImageUrl: "https://opengraph.githubassets.com/3667e085ce07dec1879b38c059cc45b5ce0de1ec27126a353dda243f68a22bf1/DefectingCat/nvim"
---

# Neovim 配置

个人 Neovim 配置，目标版本 **0.12+**。

## 核心特性

- **内置插件管理器** — `vim.pack`（Neovim 0.12+），无需 lazy.nvim / packer
- **自定义懒加载框架** — `lua/lazy.lua`（约 35 行），通过 `on_event` / `on_keys` / `load` 延迟加载重型模块
- **mini.nvim 单体插件集** — starter、pick、extra、files、icons、notify、cmdline、completion、snippets、surround、ai、cursorword、pairs
- **LSP + 代码格式化** — nvim-lspconfig + mason + conform.nvim，保存时自动格式化，支持全局/Buffer 级别开关
- **快速启动** — 禁用约 20 个内置插件，启用 Neovim 0.12+ 内置 UI 增强 (`vim._core.ui2`)
- **启动仪表盘** — ASCII Logo + 实时模块加载统计 + 启动耗时
- **Colorscheme 优化** — `ex-colors.nvim` 提取并生成精简版 colorscheme（默认 `ex-catppuccin-mocha`）

## 懒加载策略

| 触发条件      | 插件                                |
| ------------- | ----------------------------------- |
| `VimEnter`    | treesitter、lsp、icons              |
| `InsertEnter` | completion、snippets、pairs         |
| `BufReadPost` | gitsigns、surround、ai、cursorword  |
| `BufWritePre` | conform                             |
| 按键触发      | pick、files、neogit、codediff、grugfar |
| 首次按 `:`    | cmdline                             |
| 命令触发      | ex-colors (`:ExColors`)             |

## 键位映射

完整键位映射见 [MAPS.md](https://github.com/DefectingCat/nvim/blob/HEAD/MAPS.md)。

## 开发与调试…
