---
repo: "microsoft/azure-pipelines-extensions"
name: "azure-pipelines-extensions"
description: "Collection of all RM and deployment extensions"
readmeQualityOk: true
url: "https://github.com/microsoft/azure-pipelines-extensions"
homepage: "http://www.visualstudio.com/explore/release-management-vs"
language: "PowerShell"
languages: ["PowerShell", "TypeScript"]
languagePcts: [47, 39]
stars: 311
forks: 421
openIssues: 148
closedIssues: 260
watchers: 50
contributors: 154
recentReleases: 0
createdAt: "2016-04-01T10:56:59Z"
lastCommitAt: "2026-08-15T04:02:44Z"
lastReleaseAt: "2024-02-02T10:03:48Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 44
maintainers: ["ivanduplenskikh", "igortsoi", "v-gayatrij"]
openGraphImageUrl: "https://opengraph.githubassets.com/3024127e7361cb6276913a67d6f551a063dc2d1d6430b854f7a111f2b36890a7/microsoft/azure-pipelines-extensions"
---

# Azure Pipeline extensions for Azure DevOps

This repository is a common place for some extensions that Azure DevOps team publishes as **Microsoft** or **Microsoft DevLabs** publisher.

## Dev Setup

### Prerequisites

In order to build and package extensions you will need to install some dependencies first.

- Ensure you have installed Node.js
- Run `npm -g install gulp-cli`
- Run `npm install -g tfx-cli`
- Run `npm install -g vsts-npm-auth`
- Run `vsts-npm-auth -config .npmrc` to setup authentication for npm (might be needed if you need to install packages for certain tasks within an extension))

### How to Build

. From the root folder of the repository run the following commands:

- `npm install` will install all the node modules required to run gulp to package, build etc.
- `gulp build`  will copy each task to "_build" folder, and install it's dependencies locally (wrt to the task) and copies the common modules required to run the task.
  - `gulp build` also runs `gulp tscBuildTasks` to execute task-specific TypeScript validation (`tsc -p`) for selected task folders.
  - The list of task folders included in this validation is configured in `externals.json` under…
