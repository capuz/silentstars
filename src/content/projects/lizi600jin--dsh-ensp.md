---
repo: "lizi600jin/dsh-ensp"
name: "dsh-ensp"
description: "Automate Huawei eNSP labs: generate .topo files, start and stop devices, and push configuration one command at a time with per-command error reporting."
originalDescription: "Automate Huawei eNSP labs: generate .topo files, start and stop devices, and push configuration one command at a time with per-command error reporting."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lizi600jin/dsh-ensp"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["deepseek-harness", "dsh-plugin", "ensp", "huawei", "mcp", "network-simulation", "vrp"]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-11-10T16:11:00Z"
lastCommitAt: "2026-11-12T05:38:34Z"
lastReleaseAt: "2026-11-12T05:29:59Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 29
maintainers: ["lizi600jin"]
openGraphImageUrl: "https://opengraph.githubassets.com/760e9532db543a1660d66c85515f28b0f34aca50d0c00046b39b59aca13940a5/lizi600jin/dsh-ensp"
discussionCount: 0
---

# dsh-ensp

An automation tool for Huawei eNSP. It generates topologies, starts devices, pushes configuration in order, and verifies the result after each command.

It provides three invocation methods that share the same core:

- CLI: suited to scripted batch operations
- MCP Server: connects to clients such as Claude Desktop and Cursor
- DeepSeek Harness plugin: used inside a session as a model tool

## Features

### Generating topologies

Generates `.topo` files that eNSP can open and display correctly. Supports built-in scenarios, as well as custom devices and links.

Device models and interface layouts are defined in `src/core/models.mjs`, covering 16 models. When parsing a topology, port names are taken first from the `<interface>` blocks declared by the device itself. The same model may have a different port layout after an extension card is installed, so the declared block is the only reliable basis.

```js
import { twoPcLab, writeTopology } from 'dsh-ensp'

await writeTopology('lab.topo', twoPcLab({ vlan: 10 }))
```

```js
import { buildTopology, autoLayout } from 'dsh-ensp'

const topo = autoLayout(
  buildTopology()
    .add('R1', 'AR2220', { x: 180, y: 120 })…
