---
repo: "jonocodes/configs"
name: "configs"
description: "mostly nix configs"
readmeQualityOk: true
url: "https://github.com/jonocodes/configs"
language: "Nix"
languages: ["Nix"]
languagePcts: [89]
stars: 11
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-07T00:24:03Z"
lastCommitAt: "2026-08-17T04:19:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 34
maintainers: ["jonocodes"]
openGraphImageUrl: "https://opengraph.githubassets.com/21b9c06231744cdc3a450a683e211b87474446e70bed952978894dffb9b203f4/jonocodes/configs"
---

# Jono's configs

These are configs for various applications, shared development environments, and my nix systems.

I use git for a historical record of changes and github for sharing. It is not used to sync to different machines. For that I use syncthing.

I generally manage about a dozen systems in x86 and arm. Mostly but not all Linux.

# Bootstrapping new hosts

* Connect node to tailscale
* Connect syncthing to get configs
* Setup nixos/apps. see [nixos/Readme.md](https://github.com/jonocodes/configs/blob/HEAD/nixos/README.md)

# Updating hosts

On all machines you can use the command 'u' which will pull down all the updates for whenever system you are using.

# General system setup

## flatpak

    various declarative approaches were tried. none worked well. I started making my own (see flatpak/). for now I stick to using the flatpak command line to manage apps.

    If an app can be installed here use this before going through nix methods.

## nix home-manager

    this is where dotfiles and local apps are installed. favor doing as much config here as possible

## nixos

    this is for host configs. mostly focused on hardware and top services. keep this lean if possible.…
