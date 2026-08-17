---
repo: "CoderAllan/vscode-angulartools"
name: "vscode-angulartools"
description: "AngularTools is a collection of tools for exploring a Angular project, help you with documenting, reverse engineering a project or help when refactoring."
readmeQualityOk: true
url: "https://github.com/CoderAllan/vscode-angulartools"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["angular", "vscode", "extension", "documentation", "dgml", "vscode-extension"]
stars: 21
forks: 0
openIssues: 2
closedIssues: 14
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-12-03T04:43:21Z"
lastCommitAt: "2026-08-17T04:20:32Z"
lastReleaseAt: "2021-02-20T07:28:50Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 61
maintainers: ["CoderAllan", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4ccf4016c7f16471985ffbf82b0e283b8f968d97336bc2eb296976e8eb17a2c/CoderAllan/vscode-angulartools"
---

# AngularTools 

    

AngularTools is a Visual Studio Code extension with a collection of tools for exploring an Angular project, help you with documenting, reverse engineering a project or help when refactoring.

Some of the tools may seem very basic, but can be a powerful help when you have them right at your fingertips.

Find it on the [Visual Studio Code marketplace](https://marketplace.visualstudio.com/items?itemName=coderAllan.vscode-angulartools).

## Features

* Show the module hierarchy
* Show the dependency injection graph
* Show the component hierarchy
* Save the graphs as png, dgml or dot files
* Summarizes all the Angular modules
* Generate a markdown file with the component hierarchy in Mermaid format.
* Show the directory structure of the project
* Generate list of packages used in the project
* List all imports

Below is a detailed description of each feature.

### Show the module hierarchy [#](#show-module-hierarchy- 'Show the module hierarchy')

The 'Show module hierarchy' command is used for visualizing the hierarchy of the modules in an Angular application. The command scans all the *.ts files in the project to identify classes decorated with the `@NgModule`…
