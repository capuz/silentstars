---
repo: "Sarctiann/cli-integration.nvim"
name: "cli-integration.nvim"
description: "A useful plugin for integrating external CLIs into the neovim workflow"
readmeQualityOk: true
url: "https://github.com/Sarctiann/cli-integration.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-02-10T20:12:43Z"
lastCommitAt: "2026-10-26T18:06:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 19
maintainers: ["HSTiann", "Sarctiann"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f1e52acd7445ad06b60035036cee97846de55170efd59caff9155dc29b0d67d/Sarctiann/cli-integration.nvim"
---

# 🔧 cli-integration.nvim

A Neovim plugin that seamlessly integrates any command-line tool into your Neovim workflow, providing an interactive terminal interface for CLI tools directly within your editor.

> **Note**: This plugin is a generic wrapper/integration tool for any CLI application.
> You can configure multiple CLI integrations, each with its own `cli_cmd` and settings.

> This plugin aims to generalize the ability to integrate external CLIs into the Neovim workflow,
> using the [cursor-agent.nvim](https://github.com/Sarctiann/cursor-agent.nvim) implementation as a base.
> Naturally, being a generalization, it lacks the ability to have specific commands,
> as the goal is for it to be agnostic to the command-line tool being integrated.

## ✨ Features

- 🚀 **Quick Access**: Open CLI tool terminal with simple keymaps
- 📁 **Smart Context**: Automatically attach current file or project root
- 🔄 **Multiple Modes**: Work in current directory, project root, or custom paths
- 📋 **Buffer Management**: Easily attach single or multiple open buffers
- ⚡ **Interactive Terminal**: Full terminal integration with custom keymaps
- 🎯 **Flexible Configuration**: Configure multiple CLI…
