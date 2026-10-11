---
repo: "tanloong/interlaced.nvim"
name: "interlaced.nvim"
description: "Neovim plugin for aligning bilingual parallel texts"
readmeQualityOk: true
url: "https://github.com/tanloong/interlaced.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [84]
topics: ["nvim-plugin", "parallel-corpus", "sentence-alignment", "corpus-linguistics"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-09T20:22:27Z"
lastCommitAt: "2026-10-11T10:15:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 43
maintainers: ["tanloong"]
openGraphImageUrl: "https://opengraph.githubassets.com/962bf66254801355ca85b50f89bea26a1c58ced0a1e53af222d49abf02331991/tanloong/interlaced.nvim"
---

# interlaced.nvim

Text re-positioning for bilingual sentence alignment.

## Requirements

+ Neovim >= **0.12.0**

## Installation

+ Using [lazy.nvim](https://github.com/folke/lazy.nvim)

```lua
{
  "tanloong/interlaced.nvim",
  config = function() require("interlaced") end,
  ft = "text",
}
```

## Configuration

Use `vim.g.interlaced` option table and modifiy the field what you need before the plugin is loaded.

```lua
vim.g.interlaced = {
  keymaps = {
    { "n", ",", "push_up"},
    { "n", "<", "push_up_pair"},
    { "n", "e", "push_up_left_part"},
    { "n", ".", "pull_below"},
    { "n", ">", "pull_below_pair"},
    { "n", "d", "push_down_right_part"},
    { "n", "D", "push_down"},
    { "n", "s", "leave_alone"},
    { "n", "[e", "swap_with_above"},
    { "n", "]e", "swap_with_below"},
    { "n", "U", "undo"},
    { "n", "R", "redo"},
    { "n", "J", "navigate_down"},
    { "n", "K", "navigate_up"},
    { "n", "md", "dump"},
    { "n", "ml", "load"},
    { "n", "gn", "next_unaligned"},
    { "n", "gN", "prev_unaligned"},
    { "n", "mt", "match_toggle"},
    { "n", "m;", "list_matches"},
    { "n", "ma", "match_add"},
    { "v", "ma", "match_add_visual"},
  },
  -- sentence…
