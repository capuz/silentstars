---
repo: "fasterius/slime-peek.nvim"
name: "slime-peek.nvim"
description: "A plugin for working with R / Python data exploration in Neovim"
readmeQualityOk: true
url: "https://github.com/fasterius/slime-peek.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-05-14T08:22:03Z"
lastCommitAt: "2026-09-01T08:46:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 34
maintainers: ["fasterius"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e22ccf958e957308537cda3700749ba24ecf9143ba5edb54bec973de69c713b/fasterius/slime-peek.nvim"
---

# 👀 Slime-peek

A Neovim plugin that adds several convenience functions for data exploration,
allowing you to swiftly peek at your R and Python objects together with
[vim-slime](https://github.com/jpalardy/vim-slime).

https://github.com/user-attachments/assets/33bbf53f-597a-4f07-b8a2-32db9061b7ed

## ✨ Features

- Peek at the head / tail of the word under the cursor
- Peek at the column names of the word under the cursor
- Peek at the dimensions of the word under the cursor
- Peek at the data types / classes of the columns of the word under the cursor
- Operator/motion-based variants of the above that work on arbitrary expressions
  (_e.g._ `df$col`, slices, _etc._)
- Automatic language- and file type-detection for R and Python across scripts, R
  Markdown and Quarto

## 📚 Requirements

- Neovim >= **0.7.0**
- The [vim-slime](https://github.com/jpalardy/vim-slime) Vim plugin

## 📦 Installation

You can install the plugin with your preferred package manager:

```lua
{
    "fasterius/slime-peek.nvim",
    dependencies = "jpalardy/vim-slime",
    config = true,
}
```

## 🚀 Usage

The `slime-peek` plugin supplies several operations, each with two variants: one
that uses the word…
