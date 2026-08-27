---
repo: "Senal-D-A-Gunaratna/matugen.nvim"
name: "matugen.nvim"
description: "Matugen color palette integration for Neovim"
readmeQualityOk: true
url: "https://github.com/Senal-D-A-Gunaratna/matugen.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
topics: ["colorscheme", "lua", "material-you", "matugen", "neovim", "neovim-plugin", "nvim", "neovim-colorscheme", "colorscheme-generator", "neovim-ui"]
stars: 23
forks: 1
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-23T08:53:16Z"
lastCommitAt: "2026-08-27T14:26:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 43
maintainers: ["Senal-D-A-Gunaratna"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a22eb59d4c26d7935927678ac9b75d7dbe048ba75d0477e641d3a1604c99a89/Senal-D-A-Gunaratna/matugen.nvim"
---

# matugen.nvim

A Material You colorscheme bridge for Neovim. Built as a drop-in solution
that maps [matugen](https://github.com/InioX/matugen)'s colors straight to
Neovim highlight groups through a semantic palette, with minimal setup
required

---

<https://github.com/user-attachments/assets/5b9e40a9-a8e1-4b9b-badd-f4b667d55f5e>

---

## Requirements

- [Neovim](https://github.com/neovim/neovim) 0.10+
- [matugen](https://github.com/InioX/matugen)
- [lazy.nvim](https://github.com/folke/lazy.nvim) (recommended)

## Setup

**1. Copy the template**

Copy [`nvim-colors.json`](https://github.com/Senal-D-A-Gunaratna/matugen.nvim/blob/HEAD/nvim-colors.json) to your matugen templates folder

**2. Add it to `config.toml`**

```toml
[templates.neovim]
input_path = "~/.config/matugen/templates/nvim-colors.json"
output_path = "~/.cache/matugen/nvim-colors.json"
post_hook = "pkill -SIGUSR1 nvim"
```

**3. Install with `lazy.nvim`**

```lua
{
  "Senal-D-A-Gunaratna/matugen.nvim",
  lazy = false,
  priority = 1000,
  opts = {
    palette_path = "~/.cache/matugen/nvim-colors.json",
    -- load_theme = false,
  },
},
```

By default, the plugin automatically loads the generated palette and sets…
