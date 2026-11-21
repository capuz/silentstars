---
repo: "adalessa/alpha-nvim"
name: "alpha-nvim"
description: "Configuracion de Neovim a la altura de 2025"
readmeQualityOk: true
url: "https://github.com/adalessa/alpha-nvim"
language: "Lua"
languages: ["Lua"]
languagePcts: [82]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2025-01-17T19:40:05Z"
lastCommitAt: "2026-11-21T13:29:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 72
undervaluedScore: 41
maintainers: ["adalessa"]
openGraphImageUrl: "https://opengraph.githubassets.com/79fe4dd653779655e7dc09bb1f3dfe27550728f165232659e9f139996ec741c9/adalessa/alpha-nvim"
---

# Alpha-Nvim

[English](#english) | [Español](#español)

## English

### Introduction

Welcome to Alpha-Nvim, my Neovim configuration for 2025. The goal of this configuration is to leverage the best of the Nix ecosystem while being fully functional without it. This is made possible thanks to the excellent work of [nixCats](https://github.com/BirdeeHub/nixCats-nvim) who have created this integration.

### Features

- Seamless integration with Nix.
- Can be used without Nix.
- Automatically handles package management.

### Installation

#### Using Nix

If you use Nix, this configuration includes a flake that you can integrate directly into your setup or run with `nix run`.

#### Without Nix

If you don't use Nix, you can clone this repository like any other configuration. The nixCats wrapper ensures that both approaches will work seamlessly.

### Usage

When starting in a Nix environment, plugins and tools come from Nix and are not downloaded at runtime. Outside Nix, the configuration loads whatever is already on the Neovim runtimepath; it does not install plugins itself.
