---
repo: "briot/tree-sitter-ada"
name: "tree-sitter-ada"
description: "Ada grammar for tree-sitter"
readmeQualityOk: true
url: "https://github.com/briot/tree-sitter-ada"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 28
forks: 15
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2022-10-21T13:02:30Z"
lastCommitAt: "2026-10-28T09:58:00Z"
lastReleaseAt: "2025-09-28T09:50:26Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 79
undervaluedScore: 46
maintainers: ["briot", "ronan-d", "brownts"]
openGraphImageUrl: "https://opengraph.githubassets.com/23023c15e3c1bcaa43b5410f4d8c7821597938f8d3bcafb826aa1aacb3599a16/briot/tree-sitter-ada"
---

# Tree-Sitter parser for Ada

The grammar is adapted from the work done by Stephen Leak for the
Emacs ada-mode. It was translated (partially for now) to tree-sitter
syntax, and slightly changed to reduce some conflicts. Tree-sitter
doesn't need a full syntax tree, so we can take some shortcuts in
the grammar.

## Installation

You will need neovim at least version 8.0 (not tested with earlier version).

Installation is very manual at this stage, until we can integrate this package
inside nvim-treesitter itself. At the moment, assuming you are using lua
configuration and Packer for your package management:

```lua
-- file: ~/.config/nvim/init.lua

--  Merge this with any existing Packer configuration you might already
--  have. This loads packer itself, then loads the new `ada.nvim` package.
require('packer').startup(function(use)
    use(require('mytreesitter.nvim'))
end)
```

Then create a new file to setup treesitter (or merge with an existing
configuration of course).
```lua
--  file: ~/.config/nvim/mytreesitter.nvim

return {
   'nvim-treesitter/nvim-treesitter',
   requires = {
      'nvim-treesitter/nvim-treesitter-textobjects'
   },
   run=function()…
