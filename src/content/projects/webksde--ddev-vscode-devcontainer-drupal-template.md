---
repo: "webksde/ddev-vscode-devcontainer-drupal-template"
name: "ddev-vscode-devcontainer-drupal-template"
description: "Drupal DDEV based development container with attached Visual Studio Code"
readmeQualityOk: true
url: "https://github.com/webksde/ddev-vscode-devcontainer-drupal-template"
language: "Shell"
languages: ["Shell", "PHP"]
languagePcts: [58, 41]
stars: 28
forks: 2
openIssues: 45
closedIssues: 129
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2021-01-22T10:53:59Z"
lastCommitAt: "2026-11-18T12:02:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 47
maintainers: ["joshsedl"]
openGraphImageUrl: "https://opengraph.githubassets.com/10788a4f05f094d47ad6d14186164f9050af5b67694e05bce4f04e48ff3928d7/webksde/ddev-vscode-devcontainer-drupal-template"
---

# DDEV Drupal Template With Attached VSCode
The tools inside this repository will create a modified Drupal environment, focused on development and debugging.

**DO NOT USE IN PRODUCTION - This is a local development tool!**

## Quick-Start
**Spin up a ready-to-code Drupal 10/11 CMS DDEV based development container with preconfigured Drupal Best-Practice Dev-Modules and Visual Studio Code Settings/Extensions in three commands!** 🚀

Initialization takes about 5 minutes and is only needed once. Make sure you meet the [prerequisites](#prerequisites) first.

Start a **standard** dev environment using Drupal 11, meant for testing and working on contrib modules / issues:
```
git clone https://github.com/webksde/ddev-vscode-devcontainer-drupal-template.git standard-vscode-drupal && cd standard-vscode-drupal && ddev drowl-init
```
Use `ddev drowl-init -v 10` to install Drupal 10 instead.

Or start a **core** dev environment using gitified Drupal 12.x-dev, meant for working on core issues:
```
git clone https://github.com/webksde/ddev-vscode-devcontainer-drupal-template.git core-vscode-drupal && cd core-vscode-drupal && ddev drowl-init-dev
```
