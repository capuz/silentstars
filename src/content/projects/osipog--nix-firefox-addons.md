---
repo: "OsiPog/nix-firefox-addons"
name: "nix-firefox-addons"
description: "Most addons from https://addons.mozilla.org packaged with Nix"
readmeQualityOk: true
url: "https://github.com/OsiPog/nix-firefox-addons"
language: "Nushell"
languages: ["Nushell", "Nix"]
languagePcts: [62, 38]
stars: 26
forks: 4
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-06-16T14:10:47Z"
lastCommitAt: "2026-07-08T05:41:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 62
maintainers: ["github-actions[bot]", "OsiPog", "SpottyTheTurtle"]
openGraphImageUrl: "https://opengraph.githubassets.com/86824448202f6757f9a6c2477c738e64a483e7fa88d9862eee9e4100ca669fda/OsiPog/nix-firefox-addons"
---

# Nix Expressions For Firefox Addons

This flake provides over **200,000** addons from https://addons.mozilla.org/ as Nix packages. (with more being added every day)

A GitHub Action updates the list every day at 2:37am UTC. The fetcher script includes almost every addon that has as low as 1 daily user. If you happen to find an addon you'd like to have in this flake just download it once (getting its weekly downloads to 1) and it will be part of the next fetch.

## Declare Firefox Addons With [Home-Manager](https://github.com/nix-community/home-manager)

### With Flakes
(it is assumed that Home Manager is set up)

1. Add this repository as an input to your flake

```nix
{
  inputs = {
    # ...
    nix-firefox-addons.url = "github:osipog/nix-firefox-addons";
  }
  # ...
}
```

2. Apply the overlay to your nixpkgs instance in your NixOS, nix-darwin or Home Manager configuration

```nix
{ inputs, ... }: {
  nixpkgs.overlays = [ inputs.nix-firefox-addons.overlays.default ];
  # rest of your configuration...
}
```

3. In your `home.nix` (or wherever you configured Firefox) add the desired addons (uBlock Origin as an example)

```nix
{ pkgs, ... }: {
  # ...
  programs.firefox = {…
