---
repo: "soulmachine/ubuntu-provision"
name: "ubuntu-provision"
description: "Ubuntu One-Click Provisioning"
originalDescription: "Ubuntu 一键装机"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/soulmachine/ubuntu-provision"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [54, 37]
stars: 11
forks: 6
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-08-18T20:39:14Z"
lastCommitAt: "2026-10-31T09:54:20Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 71
maintainers: ["soulmachine"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a7f07f98e0469dc8c43936abc9a8be24074f743be5c37a167a02f98b7193fc4/soulmachine/ubuntu-provision"
---

# Ubuntu Provision

Uses Ansible to automate **Ubuntu** development environment setup: system software is installed via **apt**, language runtimes are handled by mise, and other tools follow each tool's official `curl | sh` install scripts and `npm` / `bun` / `uv` global packages. The shell is Ubuntu's built-in **bash**, configured with starship, zoxide, fzf, and Omarchy's shell environment.

This repository is the Ubuntu port of the sibling `macbook-provision` (macOS version), targeting **Ubuntu 26.04 LTS (amd64)**, serving the supermicro and grok-bot machines. The correspondence with upstream (synced commit, intentionally omitted roles) is recorded in the "Upstream" section of `AGENTS.md`, and every intentional difference is recorded in `DECISIONS.md`.

## Language Runtimes

This project uses [mise](https://github.com/jdx/mise) to install language runtimes (Go, Node.js, JDK, etc.) rather than the system package manager. mise is a multi-language version manager that supports installing and switching between multiple versions on the same machine, for example, freely switching between JDK 22 and JDK 23. mise is cross-platform, so this part is fully consistent with the macOS…
