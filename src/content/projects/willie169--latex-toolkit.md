---
repo: "Willie169/LaTeX-ToolKit"
name: "LaTeX-ToolKit"
description: "LaTeX template for XeTeX and LuaTeX with CJK support, fonts settings, custom commands, shorthands, and patches, and other utilities."
readmeQualityOk: true
url: "https://github.com/Willie169/LaTeX-ToolKit"
language: "TeX"
languages: ["TeX", "HTML"]
languagePcts: [61, 22]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-08-03T05:28:13Z"
lastCommitAt: "2026-10-31T15:57:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 57
maintainers: ["Willie169"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfb29e9fa58928c24f5be60650977d86a54b39d8cd5d81f1574b4a9ac79c0227/Willie169/LaTeX-ToolKit"
---

# LaTeX-ToolKit

This repository contains a comprehensive and customizable LaTeX [template](#template), [LaTeX Tips.md](https://github.com/Willie169/LaTeX-ToolKit/blob/HEAD/LaTeX%Tips.md), and other [utilities](#utilities).

## Template

To use the template,

1. Download: (Linux assumed. Adapt yourself for your platform.)
    - Global use: Create `~/texmf/tex/latex` or corresponding directory for your platform and clone this repository to it. (`git` required)
        ```
        mkdir -p ~/texmf/tex/latex
        cd ~/texmf/tex/latex
        git clone https://github.com/Willie169/LaTeX-ToolKit.git
        ```
        It can be updated by pulling the repository.
        ```
        cd ~/texmf/tex/latex/LaTeX-ToolKit || exit
        git reset --hard
        git clean -d --force
        git pull --rebase
        ```
    - Single use: Create `LaTeX-ToolKit` directory under the directory that the main LaTeX file is in and download [template.tex](https://raw.githubusercontent.com/Willie169/LaTeX-ToolKit/refs/heads/main/template.tex) into it. (`wget` required)
        ```
        mkdir LaTeX-ToolKit
        cd LaTeX-ToolKit
        wget…
