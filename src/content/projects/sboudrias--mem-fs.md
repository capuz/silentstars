---
repo: "SBoudrias/mem-fs"
name: "mem-fs"
description: "Simple in-memory vinyl file store."
readmeQualityOk: true
url: "https://github.com/SBoudrias/mem-fs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 128
forks: 15
openIssues: 0
closedIssues: 19
watchers: 7
contributors: 31
recentReleases: 0
createdAt: "2014-10-17T04:38:48Z"
lastCommitAt: "2026-11-01T22:59:49Z"
lastReleaseAt: "2023-02-14T17:02:13Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 45
maintainers: ["SBoudrias", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/30a7f2308e0a6c5a8432d349839c2dad24a4487f499f6ce49d3ead3c872c86f8/SBoudrias/mem-fs"
fundingLinks: ["GITHUB:https://github.com/SBoudrias"]
---

# mem-fs

In-memory file storage and editing utilities for code generators and project scaffolding tools.

This repository publishes two packages:

- [`mem-fs`](https://github.com/SBoudrias/mem-fs/blob/HEAD/packages/mem-fs/README.md): a vinyl-backed in-memory file store.
- [`mem-fs-editor`](https://github.com/SBoudrias/mem-fs/blob/HEAD/packages/mem-fs-editor/README.md): high-level read, write, copy, template, and commit helpers built on top of `mem-fs`.

## Install

```sh
npm install mem-fs mem-fs-editor
```

## Usage

```js
import { create as createStore } from 'mem-fs';
import { create as createEditor } from 'mem-fs-editor';

const store = createStore();
const editor = createEditor(store);

editor.write('package.json', JSON.stringify({ type: 'module' }, null, 2));
editor.copyTpl('templates/index.js.ejs', 'src/index.js', {
  name: 'my-app',
});

await editor.commit();
```

`mem-fs` tracks file objects in memory. `mem-fs-editor` mutates that store and commits pending changes to disk when `commit()` runs.
