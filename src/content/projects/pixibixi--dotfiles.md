---
repo: "PixiBixi/dotfiles"
name: "dotfiles"
description: "All my useful dotfiles"
readmeQualityOk: true
url: "https://github.com/PixiBixi/dotfiles"
language: "Shell"
languages: ["Shell"]
languagePcts: [76]
topics: ["bash", "configuration-file", "vimrc"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2017-02-25T10:54:52Z"
lastCommitAt: "2026-11-02T17:56:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 72
maintainers: ["PixiBixi"]
openGraphImageUrl: "https://opengraph.githubassets.com/346e3a1a2a632a741bfd7e76bb7b628be82ce2e40fbb6d123cecd82ba6a6ce54/PixiBixi/dotfiles"
---

# dotfiles

**Mon poste macOS d'SRE, reproductible en une commande.**

zsh, WezTerm, Kubernetes, Terragrunt et Claude Code, provisionnés par un script idempotent.

[Installation](#installation) · [Contenu](#ce-qui-est-installé) · [Commandes](#commandes-maison) · [Terminal](#terminal) · [Claude Code](#claude-code) · [Maintenance](#maintenance) · [Troubleshooting](#troubleshooting)

---

## Installation

```bash
git clone https://github.com/PixiBixi/dotfiles.git ~/dotfiles
cd ~/dotfiles
./scripts/init_mac.sh
```

> [!TIP]
> Le script est **idempotent** : il peut être relancé sans risque. `--only <step>` ne joue qu'une étape (`dotfiles`, `launchagents`, `claude-plugins`, ...).

### Prérequis

- macOS Ventura ou plus récent
- Une connexion internet
- Les droits administrateur (Xcode Command Line Tools)

Le script installe le reste : Xcode CLT, Homebrew, oh-my-zsh et ses plugins, puis tout ce que liste `packages/` (formulas, casks, plugins krew, npm, gems).

### Post-installation

```bash
nvim ~/.gitconfig_perso  # personnel
nvim ~/.gitconfig_work   # professionnel
```

Inclusion conditionnelle dans le `.gitconfig` principal :

```ini
[includeIf "gitdir:~/Documents/perso/"]
    path =…
