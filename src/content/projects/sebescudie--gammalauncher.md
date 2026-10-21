---
repo: "sebescudie/GammaLauncher"
name: "GammaLauncher"
description: "A simple launcher for VVVV Gamma"
readmeQualityOk: true
url: "https://github.com/sebescudie/GammaLauncher"
language: "Inno Setup"
languages: ["Inno Setup"]
languagePcts: [75]
topics: ["launcher", "updater", "vl", "vvvv"]
stars: 63
forks: 12
openIssues: 9
closedIssues: 90
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2019-12-09T13:57:46Z"
lastCommitAt: "2026-10-21T08:48:48Z"
lastReleaseAt: "2020-10-25T11:27:23Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 86
undervaluedScore: 49
maintainers: ["sebescudie"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a47d0442ba9db1245b6b2f1155751a3c8f26b59137b8d72debd4b1751d3aa57/sebescudie/GammaLauncher"
---

# GammaLauncher

_A simple launcher for vvvv gamma_

## Was ist das

GammaLauncher is a simple application that allows to launch vvvv gamma instances with specific arguments from a simple GUI.

## Installation

### Direct download

The latest release is available [here](https://github.com/sebescudie/GammaLauncher/releases/latest). You can choose between an installer and a portable version.

### Chocolatey

```
choco install GammaLauncher
```

## Usage

### Settings

Open the app and go to the _Settings_ tab. You'll find the following sections

#### Launcher Settings

- vvvv installations folder: this is where the launcher will look for your installed vvvversions. It defaults to `C:\Program Files\vvvv`
- Nuget override : if you want to override the default nuget folder with your own, specify it here
- Extra args : arbitrary arguments the launcher will use when starting a vvvv instance

#### Package repositories

All folders you add in this section will be used as package sources. More information [here](https://thegraybook.vvvv.org/reference/extending/contributing.html#source-package-repositories)

#### Editable packages

Allows listed packages to be modified. Otherwise, vvvv…
