---
repo: "serras/fir-tree"
name: "fir-tree"
description: "IntelliJ plug-in to visualize the Frontend Intermediate Representation (FIR tree) of a piece of Kotlin code"
readmeQualityOk: true
url: "https://github.com/serras/fir-tree"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
stars: 51
forks: 4
openIssues: 3
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-12-03T09:44:07Z"
lastCommitAt: "2026-11-04T11:27:37Z"
status: "thriving"
tags: []
healthScore: 76
undervaluedScore: 27
maintainers: ["renovate[bot]", "serras"]
openGraphImageUrl: "https://opengraph.githubassets.com/badac89540b2ca8fa319812e7c2e9b96f4fd537cd33a0b03fc7680d7187d64fe/serras/fir-tree"
---

# FIR Tree

> Visualize Kotlin's Frontend Intermediate Representation (FIR) and Control Flow Graphs (CFG) right in your IDE

### Available at [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/23270-fir-tree)

This plug-in helps you to understand the way the K2 Kotlin compiler represents the code internally.

- Adjustable resolution phase (the last one, `BODY_RESOLVE`, is the default),
- Click on a node in the tree to select it in the editor,
- Non-visible nodes are shown in italics and slightly grayed out,
- Visualize the control flow graph of a declaration.

Here's the outcome for this piece of code, fully resolved.

```kotlin
package function.equality

import kotlinx.coroutines.*

fun increment(x: Int) = x + 1
```
