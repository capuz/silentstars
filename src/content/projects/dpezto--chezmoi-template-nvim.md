---
repo: "dpezto/chezmoi-template.nvim"
name: "chezmoi-template.nvim"
description: "Neovim integration for chezmoi templates: treesitter injection, format-through-template, live preview, diagnostics, completion, picker, transparent encryption"
readmeQualityOk: true
url: "https://github.com/dpezto/chezmoi-template.nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [92]
topics: ["chezmoi", "dotfiles", "lua", "neovim", "nvim-plugin", "plugin"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-07-22T08:13:22Z"
lastCommitAt: "2026-09-30T09:56:30Z"
lastReleaseAt: "2026-09-21T15:15:24Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 55
maintainers: ["dpezto", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2e48dbc2eeb2812ae25782425f52227286f40e5933858fdf9237e8eb726a031/dpezto/chezmoi-template.nvim"
---

# chezmoi-template.nvim

Edit your [chezmoi](https://chezmoi.io) source files **natively**, and make Neovim understand them.

Most chezmoi integrations wrap the `chezmoi edit` CLI: temporary buffers, watchers, apply-on-save. This plugin takes the opposite approach: you open the real source files (in `~/.local/share/chezmoi`, under git, with your normal workflow), and the editor becomes chezmoi-aware:

- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Formatting](#formatting)
  - [Icons](#icons)
  - [Encryption](#encryption)
- [Completion](#completion)
- [Picker](#picker)
- [Keymaps](#keymaps)
- [Lua API](#lua-api)
- [Secrets](#secrets)
- [vs. chezmoi.nvim / chezmoi.vim / the LazyVim extra](#vs-chezmoinvim-chezmoivim-the-lazyvim-extra)
- [Non-goals](#non-goals)
- [Health](#health)
- [Development](#development)
- [Documentation](#documentation)
- [Credits](#credits)
- [License](#license)

- **Real highlighting inside templates.** A `dot_zshrc.tmpl` is a `gotmpl` buffer whose text is treesitter-injected as **zsh**: Go-template syntax _and_ target-language syntax, simultaneously. Works for any target language with a treesitter…
