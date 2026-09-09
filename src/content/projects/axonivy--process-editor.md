---
repo: "axonivy/process-editor"
name: "process-editor"
description: "Axon Ivy Process Editor Client"
readmeQualityOk: true
url: "https://github.com/axonivy/process-editor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
stars: 5
forks: 5
openIssues: 1
closedIssues: 0
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2021-05-03T12:09:20Z"
lastCommitAt: "2026-09-07T07:44:47Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 78
undervaluedScore: 76
maintainers: ["ivy-lli", "renovate[bot]", "ivy-team"]
openGraphImageUrl: "https://opengraph.githubassets.com/1993d6376d2c02e7b144bdc737557ca12e8203ab24a0f416ccb2fa8e250cee58/axonivy/process-editor"
postedAt: "2026-06-22T08:57:21.717Z"
---

# Axon Ivy Process Editor Client

This repository contains the Axon Ivy (GLSP-based) process editor.

## Prerequisites

The following libraries/frameworks need to be installed on your system:

- [Node.js](https://nodejs.org/en/) `>= 20.19`

The editor is developed using [Visual Studio Code](https://code.visualstudio.com/).
However, it's of course also possible to use another text editor.

---

## Structure

- `packages/editor`: GLSP-based Axon Ivy process editor
- `packages/inscription`: UI extension for element inscription view
- `packages/protocol`: GLSP actions for process editor
- `integration/standalone`: Standalone integration of the process editor
- `integration/viewer`: Standalone integration of the process viewer (read-only with less tooling)
- `integration/monaco-vite-plugin`: A vite plugin to work with the monaco integration

---

## Building the process editor

The process editor component has to be built using npm.

```bash
#install node modules
pnpm install

#build typescript
pnpm run build

#build integrations (sometimes you need to delete the node_modules folder first because of a missing monaco-editor dependency)
pnpm run package
```

## Running the process editor…
