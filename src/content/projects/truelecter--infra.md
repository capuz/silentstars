---
repo: "truelecter/infra"
name: "infra"
description: "My Nix-managed stuff configuration"
readmeQualityOk: true
url: "https://github.com/truelecter/infra"
language: "Nix"
languages: ["Nix"]
languagePcts: [71]
topics: ["flake", "flakes", "haumea", "nix", "nix-flake", "nix-flakes", "nixos", "deploy-rs", "flake-parts", "nix-darwin"]
stars: 45
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-06-27T20:45:50Z"
lastCommitAt: "2026-11-22T02:02:33Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 49
maintainers: ["truelecter"]
openGraphImageUrl: "https://opengraph.githubassets.com/517f92b99f84c377d73947f6c18356c4df3aa26207cb90cabd2eaa96bc186a62/truelecter/infra"
---

## Introduction

This repository contains the Nix code that builds my systems using flake-parts. None of these NixOS and Darwin configurations will work out of the box for you (unless you have my keys 😱).<br/>
This repo is intended for sharing some interesting parts of my infra and for some inspiration for how I was inspired myself based on other similar repos.<br/>

## Why Nix?

Nix allows for easy to manage, collaborative, reproducible deployments. This means that once something is setup and configured once, it works forever. If someone else shares their configuration, anyone can make use of it.

This flake is configured using [flake-parts](https://github.com/hercules-ci/flake-parts) for a modular approach.
