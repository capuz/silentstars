---
repo: "saberzero1/motions"
name: "motions"
description: "Enhances Obsidian's built-in Vim mode with Markdown-aware text objects, structural navigation, workspace keyboard control, and a polished Neovim-native experience."
readmeQualityOk: true
url: "https://github.com/saberzero1/motions"
homepage: "https://saberzero1.github.io/motions/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["obsidian", "obsidian-plugin", "vim", "vim-motions", "vim-plugin", "vimrc"]
stars: 77
forks: 10
openIssues: 11
closedIssues: 163
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-06-12T11:13:49Z"
lastCommitAt: "2026-09-20T08:45:04Z"
lastReleaseAt: "2026-06-23T03:30:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 79
undervaluedScore: 40
maintainers: ["saberzero1"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8e99f9372795ace7c28d6dad836a4c8f7eabc3a07bf4a709c9355babfd0517c/saberzero1/motions"
fundingLinks: ["GITHUB:https://github.com/saberzero1", "BUY_ME_A_COFFEE:https://buymeacoffee.com/saberzero1", "KO_FI:https://ko-fi.com/saberzero1"]
discussionCount: 14
---

# Vim Motions

A polished, Neovim-native experience inside [Obsidian](https://obsidian.md). Vim Motions adds what's missing from Obsidian's built-in Vim mode: Markdown-aware text objects, structural navigation, hard-wrap formatting, workspace keyboard control, EasyMotion, Lua configuration with `vim.keymap.set` / `vim.opt` / `vim.fn` / `vim.api` / `vim.tbl_*` / autocommands / timers / highlight groups, and a built-in `.obsidian.vimrc` loader.

**[Full documentation →](https://saberzero1.github.io/motions)**

## Features

- **Markdown text objects** — operate on bold, italic, code, math, links, blockquotes, code blocks, callouts, tags, table cells, subwords, numbers, quotes, wikilinks, URLs, arguments, and indentation with `d`, `c`, `y`, `v`
- **Structural navigation** — jump between headings, lists, links, and buffers with `]h`, `]l`, `]n`, `]b`
- **Lua configuration** — `.obsidian.init.lua` with conditional logic, function keymaps, `vim.v` predefined variables (`count`, `count1`, `register`, `operator`, `searchforward`, `maxcol`, constants), `{ expr = true }` expression mappings, `vim.fn.*` (92 real implementations with async callbacks, including byte/character/display-column…
