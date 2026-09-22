---
repo: "steedos/steedos-widgets"
name: "steedos-widgets"
description: "Amis Custom Components: Steedos ObjectGrid, Steedos ObjectForm、FullCalendar、ReactFlow、Kanban、AG-Grid、DevExteme Grid、DevExteme PivotGrid、DevExtreme Gantt。"
originalDescription: "Amis Custom Components: Steedos ObjectGrid, Steedos ObjectForm、FullCalendar、ReactFlow、Kanban、AG-Grid、DevExteme Grid、DevExteme PivotGrid、DevExtreme Gantt。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/steedos/steedos-widgets"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [39, 37]
stars: 10
forks: 8
openIssues: 60
closedIssues: 485
watchers: 5
contributors: 12
recentReleases: 0
createdAt: "2022-06-23T03:49:50Z"
lastCommitAt: "2026-09-22T08:37:05Z"
lastReleaseAt: "2023-03-27T08:01:56Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 78
maintainers: ["yinlianghui", "sunhaolin", "baozhoutao"]
openGraphImageUrl: "https://opengraph.githubassets.com/672ebcb5582c8d43083268fa731a0dbe12ebb0ceed61418a5d7cdef381b3f17b/steedos/steedos-widgets"
---

Steedos Frontend Asset Package
===

## Quick Start

> This project should be run with Node.js 18.x version.

### Build Asset Package

```
yarn
yarn build
```

This command automatically executes the build command for each project under `packages` to compile and package.

### Launch unpkg Service

```
yarn unpkg
```

Executing this command exposes the files under packages, which are asset package files, as static resources accessible through port 8080.

The Experience Webapp and storybook below both depend on this service. After each modification of source code under packages, you need to manually execute `yarn build` to compile the asset package so that the latest modified asset package content is publicly available through port 8080.

Launching the remote development environment will automatically start this service.

### Debug Asset Package

On the Steedos server, configure the following environment variables to point the asset package to the development environment:

```shell
# Asset package address, should be configured as the access address of the assets-dev.json file in the unpkg service.…
