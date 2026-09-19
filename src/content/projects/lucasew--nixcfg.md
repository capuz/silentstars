---
repo: "lucasew/nixcfg"
name: "nixcfg"
description: "Personal Nix/NixOS configuration files"
readmeQualityOk: true
url: "https://github.com/lucasew/nixcfg"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [33, 20]
topics: ["nixos-configuration", "nixos-config", "dotfiles"]
stars: 87
forks: 1
openIssues: 1
closedIssues: 8
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2020-07-30T14:48:11Z"
lastCommitAt: "2026-09-19T01:37:12Z"
lastReleaseAt: "2021-02-25T14:12:30Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 47
maintainers: ["lucasew", "renovate[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/d2be5b9691165e735701907d16cf5d5c78b32a7638bde0311b5162edeeffa119/lucasew/nixcfg"
---

# Dotfiles and Nix/NixOS settings

- the way it is organized its not necessary to place the nix files in the default locations like

    - `/etc/nixos/configuration.nix`
    - `~/.config/nixpkgs/home.nix`

- multiple interchangeable graphical environments
    - i3: daily driver, working nice, playback buttons works when locked
    - gnone, xfce and kde: not using anymore, may delete later

- machines referenced:
    - riverwood: my main laptop, Acer A315-51-51SL 12GB RAM 1TB SSD dual booted with windows 10 (i think)
    - whiterun: my battlestation, Ryzen 5600G, 32GB RAM 1TB SSD + 2x1TB DVR HDDs + a RTX 3060 in the future
    - ravenrock: a machine in the cloud, it's provisioned using terraform from `infra/turbo/gcp.tf`

- licence
    - nothing special
    - don't blame me
    - have fun

- suggestions?
    - open a issue
    - let's learn together :smile:

- NixOS > Arch
    - change my mind
    - (yes, I have used arch btw for around 1 year, it's a good distro but NixOS is better for my workflow)
    - `nix-shell` rocks
    - the possibility of rollback at any time in a simple way, even if the distro fails to boot, is like magic
    - you can also replicate very precisely your…
