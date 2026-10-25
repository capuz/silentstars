---
repo: "tinted-theming/tinted-nvim"
name: "tinted-nvim"
description: "Neovim plugin for building tinted-theming colorscheme. Includes support for Treesitter and LSP highlight groups. "
readmeQualityOk: true
url: "https://github.com/tinted-theming/tinted-nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [98]
stars: 41
forks: 4
openIssues: 1
closedIssues: 15
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2025-04-01T16:55:09Z"
lastCommitAt: "2026-10-25T02:46:18Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 35
maintainers: ["tinted-theming-bot", "bezhermoso"]
openGraphImageUrl: "https://opengraph.githubassets.com/0703edd6f8aace85a2b54cf1dbd4592899d889afc73862778ef29e042d419488/tinted-theming/tinted-nvim"
---

# tinted-nvim

Neovim colorscheme plugin that bundles all Base16/Base24 schemes from the
[tinted-theming] project. For the smoothest workflow, use [Tinty] alongside
`tinted-nvim`.

Preview themes in the [Tinted Gallery].

Note: `v1.0.0` was released recently; some APIs changed. See [CHANGELOG.md] for
migration notes.

If `v1.0.0` causes issues, and you don't want to fix them right away, you can
pin to `v0.1.x` in your plugin manager:

- lazy.nvim

```lua
{ "tinted-theming/tinted-nvim", version = "0.1.*", priority = 1000, lazy = false }
-- or: { "tinted-theming/tinted-nvim", tag = "v0.1.0", priority = 1000, lazy = false }
```

- packer.nvim

```lua
use { "tinted-theming/tinted-nvim", tag = "v0.1.0" }
```

For in-editor help, see: `:h tinted-nvim`.

## Quick Start

- lazy.nvim:

```lua
{
  "tinted-theming/tinted-nvim",
  priority = 1000, -- load colorscheme early
  lazy = false,    -- apply on startup
  opts = {
    default_scheme = "base16-ayu-dark", -- pick any bundled Base16/Base24
    -- compile = true, -- optional: precompile for faster startup
  },
}
```

- Manual:

```lua
require("tinted-nvim").setup({
  default_scheme = "base16-ayu-dark",
})
```

## Features

- Base16/Base24…
