---
repo: "abeldekat/nvim_pde"
name: "nvim_pde"
description: "My Neovim config, based on MiniMax"
url: "https://github.com/abeldekat/nvim_pde"
language: "Lua"
languages: ["Lua"]
languagePcts: [99]
topics: ["lua", "neovim", "neovim-config", "nvim-config", "pde", "mini-nvim"]
stars: 26
forks: 2
openIssues: 0
closedIssues: 4
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2024-01-12T19:56:00Z"
lastCommitAt: "2026-07-04T19:20:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 54
maintainers: ["abeldekat"]
openGraphImageUrl: "https://opengraph.githubassets.com/b30285da0d200a300662bb68099712b85212fe7ca533b8e4d75f29da1e25e6de/abeldekat/nvim_pde"
---

# Neovim pde

My Neovim config, based on [MiniMax]

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
the corresponding code will be contained in a dedicated lua module.

## Workflow

- Leader: `space`
- Main plugins: [mini.visits], [mini.files], [mini.pick], [mini.jump2d]
- Menu: [mini.clue]
- Keyboard: Halcyon Ferris, a split keyboard with 34 keys

### PickHinted

Pickers from [mini.pick] can display hints using internal module [akextra.pick_hinted]

###…
