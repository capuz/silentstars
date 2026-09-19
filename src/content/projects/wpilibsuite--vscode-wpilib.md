---
repo: "wpilibsuite/vscode-wpilib"
name: "vscode-wpilib"
description: "Visual Studio Code WPILib extensions"
readmeQualityOk: true
url: "https://github.com/wpilibsuite/vscode-wpilib"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 123
forks: 64
openIssues: 85
closedIssues: 260
watchers: 18
contributors: 37
recentReleases: 0
createdAt: "2018-03-02T19:45:12Z"
lastCommitAt: "2026-09-19T02:47:38Z"
lastReleaseAt: "2018-09-28T21:39:22Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 46
maintainers: ["sciencewhiz", "Gold856", "ThadHouse"]
openGraphImageUrl: "https://opengraph.githubassets.com/b82eb98cec8dc77843776ca707a9051720498519e75a4c5351a8499e4ceb47b4/wpilibsuite/vscode-wpilib"
---

# VS Code WPILib

This repository contains the WPILib VS Code extension.

## Build Dependencies

- Node JS - Tested with Node 22.
- Java - Tested with Java 25
- VS Code - For development/debugging.
  - TS Lint Extension
  - Chrome Debug Extension
  - In order to debug the extension, you will need the extension dependencies for the extension. The Microsoft C++ extension and the Java extension pack.

## Setting up Dependencies

In order to properly build, there is some setup that needs to occur.

1. Go into `vscode-wpilib` and run `npm install`
2. From the root, run `./gradlew build`. This will grab the templates and examples from WPILib, copy them into the vscode extension. This command will need to be reran any time you update the shared dependencies in the vscode project.
3. Open the root folder in VS Code.

## Building and Debugging

Once you have the project open in VS Code, there are 5 debugging targets set up.

- `Extension` Will launch the extension to debug
- `Extension Tests` Will launch the extension tests

In addition, each project has a `compile` and a `lint` npm command. These will compile and lint their respective projects. Please run these before submitting any PR,…
