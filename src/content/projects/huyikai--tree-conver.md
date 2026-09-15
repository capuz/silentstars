---
repo: "huyikai/tree-conver"
name: "tree-conver"
description: "Tree data conversion tool"
readmeQualityOk: true
url: "https://github.com/huyikai/tree-conver"
homepage: "https://huyikai.github.io/tree-conver/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["tree", "arraytotree", "treeconver", "treetoarray", "treetransformer"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-05-05T03:02:28Z"
lastCommitAt: "2026-09-15T08:54:43Z"
lastReleaseAt: "2023-12-27T02:56:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 39
maintainers: ["huyikai"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a3d7a830b7fccf66f8c66776d63576dbf8ecf5cb53bbc23599440f6a7bb6481/huyikai/tree-conver"
---

# Tree-Conver

  </a>
</p>

   

Tree data conversion tool

English | [简体中文](https://github.com/huyikai/tree-conver/blob/HEAD/README-zhCN.md)

## Usage

```shell
npm i tree-conver
```

```javascript
// Import default export
import treeToArray from 'tree-conver';
// or Import Deconstruct Export
import { treeToArray, arrayToTree } from 'tree-conver';

// Define flat node array
// The root node pid should be null or '', and the data to be processed should have at least one item with a null pid
const myArray = [
  { uid: '1', name: 'Node 1', pid: null },
  { uid: '2', name: 'Node 2', pid: '1' },
  { uid: '3', name: 'Node 3', pid: '1' },
  { uid: '4', name: 'Node 4', pid: '2' },
  { uid: '5', name: 'Node 5', pid: '2' },
  { uid: '6', name: 'Node 6', pid: '3' }
];

// Set options, can be empty, or set only the required items
const a2tOptions = {
  idKey: 'uid', // custom id field, default 'id'
  pidKey: 'pid', // custom pid field, default 'pid'
  childrenKey: 'children' // custom children field, default 'children'
};

// Call the arrayToTree method and pass in the set parameters to convert the flat node array to a tree structure.
const myTree = arrayToTree(myArray, a2tOptions);…
