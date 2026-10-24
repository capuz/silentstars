---
repo: "tsssni/tsssni.nix"
name: "tsssni.nix"
description: "tsssni's modules & packages & system configs shared via flake"
readmeQualityOk: true
url: "https://github.com/tsssni/tsssni.nix"
language: "Nix"
languages: ["Nix"]
languagePcts: [70]
topics: ["home-manager", "nix", "nixos", "dotfiles", "flakes", "nix-darwin", "nushell", "agent", "niri", "quickshell"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-03-17T12:59:27Z"
lastCommitAt: "2026-10-24T08:20:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 67
maintainers: ["tsssni"]
openGraphImageUrl: "https://opengraph.githubassets.com/e2054ccc04d7cae11c6ed4008f8dde7da28c70ff8d58fb77f6bf3646642cc007/tsssni/tsssni.nix"
---

# tsssni.nix

## Intro

- Modules & Packages shared via flakes
- Framework for building reproducible system and desktop configurations
- Nixvim with friendly shortcuts and powerful plugins

## Usage

### flake

Put tsssni.nix in your flake inputs. Only support unstable.

```nix
inputs = {
  nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  tsssni = {
    url = "github:tsssni/tsssni.nix";
    inputs.nixpkgs.follows = "nixpkgs";
  };
};
```

### modules

Provide modules in `tsssni.${platform}Modules.tsssni`. Include in corresponiding options and extend `lib` with `tsssni.lib`.

```nix
let
  pkgs = import inputs.nixpkgs {
    inherit system;
  };
  lib = inputs.nixpkgs.lib.extend (final: prev: tsssni.lib);
in
{
  nixosConfigurations.tsssni = nixpkgs.lib.nixosSystem {
    inherit lib;
    modules = [ tsssni.nixosModules.tsssni ];
  };
  darwinConfigurations.tsssni = nix-darwin.lib.darwinSystem {
    inherit lib;
    modules = [ tsssni.darwinModules.tsssni ];
  };
  homeConfigurations.tsssni = home-manager.lib.homeManagerConfiguration {
    inherit lib pkgs;
    modules = [ tsssni.homeModules.tsssni ];
  };
}
```

### pkgs

Provide pkgs via overlays.

```nix
nixpkgs.overlays = […
