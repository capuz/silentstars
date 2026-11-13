---
repo: "Miragon/bpmn-modeler"
name: "bpmn-modeler"
description: "A BPMN Modeler that supports Camunda 7, Camunda 8, Operaton and CIB seven"
readmeQualityOk: true
url: "https://github.com/Miragon/bpmn-modeler"
homepage: "https://miragon.github.io/bpmn-modeler/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["bpmn", "vs-code", "bpmn-modeler"]
stars: 39
forks: 14
openIssues: 72
closedIssues: 520
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2022-07-22T08:10:46Z"
lastCommitAt: "2026-11-13T18:23:00Z"
lastReleaseAt: "2023-08-01T13:49:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 62
maintainers: ["peterhnm", "miragon-release-please[bot]", "emaarco"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f49cbbe0273dc214870c9007d777871be4ed9191b1ff2abd8b042e55828f39d/Miragon/bpmn-modeler"
---

# Miragon BPMN Modeler

Model BPMN processes, DMN decisions and Camunda Forms for Camunda 7, Camunda 8, Operaton or CIB seven right where their code lives, and commit them with your code.

## Why

A process change belongs in the same pull request as the code it affects, but a separate desktop modeler such as the Camunda Modeler puts it on a detour outside your repository. Here the modeler opens the file in your editor, and the plain XML stays the source of truth you diff and review like code.

## What you get

- **Processes, decisions and forms in one editor.** `.bpmn`, `.dmn` and `.form` files open in a graphical editor and save back as plain XML or JSON.
- **Mistakes caught before deploy.** [Linting](https://miragon.github.io/bpmn-modeler/vscode/features/linting) marks what the engine would reject, and the [token simulation](https://miragon.github.io/bpmn-modeler/vscode/features/token-simulation) plays a process through.
- **Review and deploy from the editor.** The [BPMN diff](https://miragon.github.io/bpmn-modeler/vscode/features/bpmn-diff) shows changes element by element, and [deployment](https://miragon.github.io/bpmn-modeler/vscode/features/deployment) sends a diagram to…
