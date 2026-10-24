---
repo: "mhiro2/pinwords.nvim"
name: "pinwords.nvim"
description: "Persistent, slot-based word highlighting for focused reading and code review in Neovim."
readmeQualityOk: true
url: "https://github.com/mhiro2/pinwords.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
topics: ["neovim", "neovim-plugin", "nvim", "nvim-plugin"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-01-01T05:30:04Z"
lastCommitAt: "2026-10-24T00:15:09Z"
lastReleaseAt: "2026-03-18T21:59:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 60
maintainers: ["mhiro2", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b9a03b97b6f4ba458c44e5f616492983f279e42143cbabdbf7e9cf8dfa46439b/mhiro2/pinwords.nvim"
---

# pinwords.nvim

> Pin words you want to keep in your head.

`pinwords.nvim` is a **Neovim-native, persistent (until cleared) word highlighter** designed to help you externalize your focus while reading or reviewing code.

Unlike navigation-oriented word highlighters, pinwords lets you **explicitly mark and keep multiple keywords visible** until you decide to clear them.

## ✨ Features

- 🔢 **Slot-based highlights** (default: 1–9)
- 🧷 **Auto allocation** for single-key pinning
- ✨ **Visual flash feedback** on pin/unpin success
- 📌 **Persistent** highlights (until cleared; global across all buffers, not saved across sessions)
- 🧠 Designed for **thinking, reading, and reviewing**, not navigation
- 🪟 Correct behavior across **split windows**
- ⚡ Pure **Neovim native API** (Lua-only, no Vim script)
- 🔍 **Grep integration** — search project-wide with pinned words via telescope/snacks/fzf-lua
- 🧩 Clean internal design for future extensions

## 🧠 Philosophy

Many word-highlighting plugins focus on *navigation*.

**pinwords is different.**

- This plugin is not about jumping to the next word.
- It is about **marking concepts you want to keep in mind**.
- Highlights are **stable,…
