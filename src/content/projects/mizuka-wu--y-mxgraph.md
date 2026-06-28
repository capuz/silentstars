---
repo: "mizuka-wu/y-mxgraph"
name: "y-mxgraph"
description: "A tool library for bidirectional binding and conversion between draw.io (mxGraph) XML and Yjs CRDT, accompanied by a runnable demo that supports collaborative cursor and selection rendering"
url: "https://github.com/mizuka-wu/y-mxgraph"
homepage: "https://mizuka-wu.github.io/y-mxgraph/"
language: "HTML"
languages: ["HTML", "TypeScript"]
languagePcts: [62, 38]
topics: ["crdt", "diagram", "drawio", "mxgraph", "yjs", "drawio-tools", "yjs-bindings"]
stars: 9
forks: 1
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2025-08-26T23:58:33Z"
lastCommitAt: "2026-06-28T01:46:49Z"
lastReleaseAt: "2026-05-19T03:41:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 75
maintainers: ["mizuka-wu"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1f78cb0b9100d80bdfa65b7557432081a6ff113862848c5f2cc00ea20a4df00/mizuka-wu/y-mxgraph"
discussionCount: 1
---

# y-mxgraph

<video width="320" height="240" controls>
    <source src="https://github.com/mizuka-wu/y-mxgraph/blob/main/demo.mp4" type="video/mp4">
</video>

[中文文档](./README.zh-CN.md)

Yjs binding for draw.io (mxGraph) documents, enabling real-time collaborative editing.

## Features

- **Bidirectional binding** between draw.io files and Y.Doc
- **Real-time collaboration** via y-webrtc, y-websocket, or any Yjs provider
- **Undo/Redo support** with Y.UndoManager
- **Collaborative cursors** via y-protocols Awareness
- **iframe Bridge** for isolated draw.io instances synced via postMessage
- **Full TypeScript** support

## Installation

```bash
pnpm add y-mxgraph yjs y-protocols
```

`yjs` and `y-protocols` are peer dependencies.

## Quick Start

```ts
import * as Y from 'yjs';
import { Binding } from 'y-mxgraph';

const doc = new Y.Doc();

App.main((app) => {
  const file = app.currentFile;

  // Binding automatically reconciles file and Y.Doc based on
  // `initialContent` strategy (default: 'replace').
  //   - 'replace'      : Y.Doc wins; file UI is replaced with doc XML
  //   - 'merge-remote' : union by diagram id; doc wins on conflicts
  //   - 'merge-client' : union by…
