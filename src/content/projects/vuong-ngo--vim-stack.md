---
repo: "vuong-ngo/vim-stack"
name: "vim-stack"
description: "⚡Two editors, one philosophy. Vim for systems, Neovim for code. ☯️"
readmeQualityOk: true
url: "https://github.com/vuong-ngo/vim-stack"
language: "Lua"
languages: ["Lua", "Vim Script"]
languagePcts: [62, 20]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-07-11T15:28:45Z"
lastCommitAt: "2026-10-25T09:01:02Z"
lastReleaseAt: "2026-09-28T03:18:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 34
maintainers: ["vuong-ngo"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2e74b2324e03c4ae50e16e4d037ae6ef609aead4e23b6226903f64faf829b9c/vuong-ngo/vim-stack"
---

# <p align="center">⚡ Vim Stack</p>

---

**Vim Stack** is a curated collection of dual editor configurations designed to optimize terminal text editing. It consists of a zero-plugin **Minimal Vim** setup ([`vim-editor/`](https://github.com/vuong-ngo/vim-stack/blob/HEAD/file:///home/ngoducvuong/Documents/projects/dotfiles/vim-stack/vim-editor/)) and a feature-rich, modernized **Neovim (LazyVim)** IDE ([`nvim/`](https://github.com/vuong-ngo/vim-stack/blob/HEAD/file:///home/ngoducvuong/Documents/projects/dotfiles/vim-stack/nvim/)). Both configurations are carefully synchronized so that identical keybindings trigger equivalent actions.

This dual setup allows you to switch seamlessly between:
1. **Remote Servers, SSH Sessions & Containers**: Using the lightweight, zero-plugin Vim config (`vim-editor`) which boots instantly with pure stock Vimscript.
2. **Local Machine & Heavy Development Work**: Using the modern Neovim IDE configuration (`nvim`) equipped with Rust-backed `blink.cmp` autocompletion, Mason LSPs, Treesitter syntax highlighting, `conform.nvim` formatters, `snacks.nvim`, and Excel-style CSV data visualization.

---

## 📂 Repository Structure

The project is split into…
