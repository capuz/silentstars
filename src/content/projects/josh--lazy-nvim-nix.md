---
repo: "josh/lazy-nvim-nix"
name: "lazy-nvim-nix"
description: "Lazy Neovim on Nix"
readmeQualityOk: true
url: "https://github.com/josh/lazy-nvim-nix"
language: "Nix"
languages: ["Nix"]
languagePcts: [96]
topics: ["lazy-nvim", "lazyvim", "neovim", "nix"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 22
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2024-07-31T17:12:36Z"
lastCommitAt: "2026-07-28T15:01:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 100
undervaluedScore: 73
maintainers: ["github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef7aa83ea01119064173a883586b9451014a2adc76b21fce64cfd2a515d1677c/josh/lazy-nvim-nix"
---

# lazy-nvim-nix

A Nix Flake for working with [lazy.nvim](https://github.com/folke/lazy.nvim) [Neovim](https://neovim.io/) plugins and the [LazyVim](https://github.com/LazyVim/LazyVim) distribution.

## Installation

Add as an input to your flake:

```nix
{
  inputs.lazy-nvim-nix.url = "github:josh/lazy-nvim-nix";

  outputs = { self, lazy-nvim-nix }: {
    homeModules.default = {
      programs.neovim.finalPackage = lazy-nvim-nix.packages.x86_64-linux.LazyVim;
    };

    nixosModules.default = {
      programs.neovim.finalPackage = lazy-nvim-nix.packages.x86_64-linux.default;
    };
  };
}
```

## Usage

### `packages.${system}.lazy-nvim`

```nix
{
  environment.systemPackages = [
    pkgs.lazy-nvim.override {
      spec = [ "lualine.nvim" ];
    };
  ];
}
```

### `packages.${system}.LazyVim`

```nix
{
  home.packages = [
    pkgs.LazyVim.override {
      lazyVimExtras = [ "lazyvim.plugins.extras.coding.copilot" ];
    };
  ];
}
```

### `packages.${system}.default`

Alias for `packages.${system}.lazy-nvim`.

### `overlays.default`

```nix
{
  nixpkgs.overlays = [ lazy-nvim-nix.overlays.default ];
  programs.neovim.finalPackage = pkgs.lazynvimPlugins.LazyVim.override {…
