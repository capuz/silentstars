---
repo: "abeldekat/nvim_pde"
name: "nvim_pde"
description: "Neovim config based on MiniMax"
readmeQualityOk: true
url: "https://github.com/abeldekat/nvim_pde"
language: "Lua"
languages: ["Lua"]
languagePcts: [99]
topics: ["lua", "neovim", "neovim-config", "nvim-config", "mini-nvim", "minimax"]
stars: 27
forks: 2
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-01-12T19:56:00Z"
lastCommitAt: "2026-09-19T08:13:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["abeldekat"]
openGraphImageUrl: "https://opengraph.githubassets.com/479857ff5f0805a71ef24a60d3e59a21be243b1feccd95eb8435905c6842ae96/abeldekat/nvim_pde"
---

# Neovim pde

Neovim config based on [MiniMax]

> [!NOTE]
> Tag [with_submodules] references the version containing `git submodules`,
> `lazy.nvim` and `mini.deps`
>
> Tag [with_lazynvim] references the version containing `lazy.nvim` and `mini.deps`
>
> Tag [without_minimax] references the version before switching to `minimax`

## Install

> Requirements: Neovim latest version or nightly. See [MiniMax requirements]
>
> Always review the code before trying a configuration.

Clone the repository:

```sh
git clone https://github.com/abeldekat/nvim_pde ~/.config/ak
```

Open Neovim and install the plugins:

```sh
NVIM_APPNAME=ak nvim
```

Remove the config:

```sh
rm -rf ~/.local/share/ak ~/.local/state/ak ~/.cache/ak
rm -rf ~/.config/ak
```

## Structure

See [MiniMax]. However, in case the `setup` of a plugin is customized,
the corresponding code will be written in a dedicated lua module.

## Workflow

- Leader: `space`
- Main plugins: [mini.visits], [mini.files], [mini.pick], [mini.jump2d]
- Menu: [mini.clue]
- Keyboard: Halcyon Ferris, a split keyboard with 34 keys

### FilesClued

MiniClue shows bookmarks and `g` mappings from MiniFiles using internal module [akextra.files_clued]…
