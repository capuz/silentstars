---
repo: "CrazySpottedDove/KingdomRushDove"
name: "KingdomRushDove"
description: "a mod for kingdom rush ver 1,2,3,(4),5"
originalDescription: "a mod for kingdom rush ver 1,2,3,(4),5"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/CrazySpottedDove/KingdomRushDove"
language: "Lua"
languages: ["Lua"]
languagePcts: [100]
stars: 15
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-08-22T07:59:37Z"
lastCommitAt: "2026-07-24T06:08:40Z"
lastReleaseAt: "2025-09-30T07:27:54Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 65
maintainers: ["CrazySpottedDove"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c573769afe8920ab54407a9bdc351eaa637a8173331d3d90ed09e826d8b0792/CrazySpottedDove/KingdomRushDove"
---

# Developer Manual

## How to Set Up the Development Environment

### Windows Environment

Download love 11.5.zip from the love2d GitHub repository and unzip it. Then, place this project in the same directory as love.exe. To start, use `..
ame.exe .` in the project directory.

### Linux Environment

Use your package manager to download love, such as:

```sh
sudo pacman -S love
```

Then use

```sh
love .
```

to start in the project directory.

Make sure GPU acceleration is enabled, otherwise the game will run very slowly.

### Developing Code on Linux but Running the Application on Windows

You can use the commands provided in the Makefile.

## Synchronizing Art Resources

### Preparation Tools

Ensure that `git` and `gh` are added to the environment variables. Ensure that `lua` or `luajit` is added to the environment variables. (The following content applies similarly for `lua` and `luajit`).

### Register Local Art Resource Path

First, create `.assets_path.txt` in the `makefiles` directory and write your local art resource directory in it. For example, if I am developing under `wsl`, but the art resources are placed in Windows, then the content of my `.assets_path.txt` might…
