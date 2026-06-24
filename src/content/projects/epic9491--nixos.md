---
repo: "epic9491/nixos"
name: "nixos"
description: "This is a mirror of https://codeberg.org/sensei/nixos"
url: "https://github.com/epic9491/nixos"
homepage: "https://codeberg.org/sensei"
language: "Nix"
languages: ["Nix"]
languagePcts: [93]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-06T01:06:16Z"
lastCommitAt: "2026-06-24T23:38:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f1faab183513be254b0c4f9fdb25ddc48b530ca8d7c20ff4306aea948e7e7298/epic9491/nixos"
---

# My NixOS configurations v3

This is a pretty significant overhaul of the structure the repo used previously, and should allow for more flexibility and easier modification. About 20 directories and 40 files were removed.

The flake builds no longer depend on hostname-profile (e.g. `erebos-niri`, `prometheus-hypr`, etc) and are now only `.#hostname`. I've converted the "profiles" I used before into modules which can be enabled or disabled as needed. At the time of writing, the Home Manager file for the respective environment will need to be swapped out in `flake.nix`. Make sure you comment or remove any conflicting files from other environments.

I previously got a little over-ambitious in the past and pushed a structure for servers, I have since removed that structure (the bulk of the directories and files that were removed) and instead am slowly migrating services to NixOS servers. If you would like to take a look at how I have configured those, relevant files are `/flake.nix`, `/modules/baseline.server.nix`, `/home/server.nix`, and `/devices/server/*`. 

Though I've learned a lot about NixOS since I started daily driving it in 2025, this configuration should be used with…
