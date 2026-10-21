---
repo: "didactiklabs/nixbook"
name: "nixbook"
description: "Laptop NixOS Configuration"
readmeQualityOk: true
url: "https://github.com/didactiklabs/nixbook"
language: "QML"
languages: ["QML"]
languagePcts: [61]
stars: 13
forks: 1
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2024-06-11T20:02:49Z"
lastCommitAt: "2026-10-21T23:35:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 71
maintainers: ["Banh-Canh", "aamoyel"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c954bcc815f6653795fe1da08a98a8730d4348b0ea843eb28584df939ef7898/didactiklabs/nixbook"
---

# Nixbook

📖 **[Documentation](https://didactiklabs.github.io/nixbook/)** — every feature, module and machine, organised as a website (sources in [`docs/`](https://github.com/didactiklabs/nixbook/blob/HEAD/docs)).

## 🔍 Description

Nixbook is a personal, declarative NixOS configuration repository that manages multiple machines from a single source of truth. Built entirely with Nix, it embraces the "everything as code" philosophy to deliver reproducible, composable, and easily maintainable system configurations.

It ships modern Wayland compositors (Niri and Sway), a fully-featured Zsh shell with GNU CLI replacements, a complete development and Kubernetes toolchain, and per-machine profiles selected automatically by hostname. Security is a first-class concern, with UEFI Secure Boot (Lanzaboote), LUKS disk encryption, agenix-managed secrets, and kernel hardening baked in. Deployment is handled by Colmena, dependencies are pinned with npins, and the whole system can be provisioned from a custom interactive installer ISO.

### Project Goals

The primary goal of Nixbook is to provide a personal, highly customizable, and reproducible NixOS environment that manages an entire fleet of…
