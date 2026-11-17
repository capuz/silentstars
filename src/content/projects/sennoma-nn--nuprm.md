---
repo: "Sennoma-Nn/nuprm"
name: "nuprm"
description: "Nushell Prompt Manager"
readmeQualityOk: true
url: "https://github.com/Sennoma-Nn/nuprm"
language: "Nushell"
languages: ["Nushell"]
languagePcts: [100]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2025-07-21T13:09:55Z"
lastCommitAt: "2026-11-17T12:17:29Z"
lastReleaseAt: "2026-09-07T06:03:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 38
maintainers: ["Sennoma-Nn"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1023636100/73bc2a7b-3131-4cf3-98d4-298ac3050ce3"
---

## Introduction

**NuPrm** is a Nushell theme framework and theme management script that allows you to easily switch between different prompt themes, customize the appearance of your Nushell prompt, and manage prompt configurations through environment variables. It is written using Nushell scripts and integrates with Nushell functionality, while providing common interfaces to make it easier to build prompts

## Installation

> You can change `~/.config/nuprm` to any directory you prefer, as long as the `$nuprm_path` constant correctly points to where you cloned the repository

- Clone this repository into your `.config` directory:
    ```nushell
    git clone -b stable https://github.com/Sennoma-Nn/nuprm.git ~/.config/nuprm
    ```

- Add the following to your Nushell configuration file (`config nu`):
    ```nushell
    const nuprm_path = "~/.config/nuprm"
    const nuprm_theme = $"($nuprm_path)/themes/simple-minimal.nu"
    use $"($nuprm_path)/nuprm-module.nu" nuprm
    nuprm load
    ```

- Restart your Nushell session:
    ```nushell
    exec $nu.current-exe
    ```

## Configuration

Add the following to your Nushell environment variables file (`config env`):

```nushell…
