---
repo: "xieby1/nix_config"
name: "nix_config"
description: "My Nix/NixOS Config"
originalDescription: "我的Nix/NixOS配置 My Nix/NixOS Config"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/xieby1/nix_config"
homepage: "https://xieby1.github.io/nix_config/"
language: "Nix"
languages: ["Nix"]
languagePcts: [93]
topics: ["nix", "nixos", "home-manager", "home-nix", "configuration-nix", "config", "home-manager-config", "nix-on-droid", "nix-on-droid-config", "wsl2"]
stars: 59
forks: 2
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2021-12-04T08:56:47Z"
lastCommitAt: "2026-11-02T10:48:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 47
maintainers: ["xieby1"]
openGraphImageUrl: "https://opengraph.githubassets.com/edfb2b90e56d41978d1122309f100d4396c266797720f026cdfc661b6ad77107/xieby1/nix_config"
---

🏗️ *The detailed documentation for my Nix/NixOS configuration is under construction. Progress: <span style="font-size:2em;">**39/105**</span>* 🏗️

For a better reading experience, please see the version on [GitHub Pages](https://xieby1.github.io/nix_config/).

## Table of Contents

* [Introduction to Nix/NixOS](#nixnixos简介)
* [xieby1 and Nix/NixOS](#xieby1和nixnixos)
* [xieby1's Nix/NixOS Configuration](#xieby1的nixnixos配置)
  * [Folder Structure](#文件夹结构)
  * [How to Use nix Scripts](#nix脚本的使用方法)
    * [nix-shell Example](#nix-shell的例子)
  * [How to Use the nix Configuration](#nix配置的使用方法)
  * [References](#引用)

# Introduction to Nix/NixOS

Nix is a *reproducible* package manager and also a *purely functional* programming language.
In theory, the Nix package manager can be installed on any Linux distribution (such as Ubuntu, Debian, and Arch) and coexist with that distribution's original package managers (such as snap, apt, and pacman).
NixOS, on the other hand, is a Linux distribution managed entirely by the Nix package manager.

Nix/NixOS adopts the concept of “Package”, abstracting the Linux kernel, drivers, libraries, user programs, configuration files, and many other aspects.…
