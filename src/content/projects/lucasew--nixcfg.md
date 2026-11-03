---
repo: "lucasew/nixcfg"
name: "nixcfg"
description: "Personal Nix/NixOS configuration files"
readmeQualityOk: true
url: "https://github.com/lucasew/nixcfg"
language: "Nix"
languages: ["Nix"]
languagePcts: [34]
topics: ["nixos-configuration", "nixos-config", "dotfiles"]
stars: 87
forks: 1
openIssues: 1
closedIssues: 9
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2020-07-30T14:48:11Z"
lastCommitAt: "2026-11-03T11:15:39Z"
lastReleaseAt: "2021-02-25T14:12:30Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 47
maintainers: ["lucasew", "renovate[bot]", "lewtec-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/514dc8893f2bea157e41475af7682bf46e0ef1b4cf4d6a97e43cd9c23fb907b1/lucasew/nixcfg"
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
