---
repo: "projectwallace/css-layer-tree"
name: "css-layer-tree"
description: "Discover the composition of your CSS @layers"
url: "https://github.com/projectwallace/css-layer-tree"
homepage: "https://www.projectwallace.com/css-layers-visualizer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["architecture", "composition", "css", "layer"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 7
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-11-10T08:36:13Z"
lastCommitAt: "2026-07-01T07:05:12Z"
lastReleaseAt: "2026-01-18T10:49:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["dependabot[bot]", "bartveneman", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/886115752/980b785b-5e56-4a74-a305-fb5298673d79"
---

# css-layer-tree

Lay out the composition of your CSS `@layer` architecture. See which layers are used, where they are defined and how they are nested.

## Installation

```
npm install @projectwallace/css-layer-tree
```

## Usage

```js
import { layer_tree } from '@projectwallace/css-layer-tree'

let css = `
@import url("test.css") layer;
@import url("test.css") LAYER(test);
@layer anotherTest {
	@layer moreTest {
		@layer deepTest {}
	}
};
/* anonymous @layer */
@layer {}
`

let tree = layer_tree(css)
```

This example would result in this `tree`:

```js
;[
	{
		name: '__anonymous-1__',
		locations: [{ line: 2, column: 3, start: 3, end: 33 }],
		children: [],
	},
	{
		name: 'test',
		locations: [{ line: 3, column: 3, start: 36, end: 72 }],
		children: [],
	},
	{
		name: 'anotherTest',
		locations: [{ line: 4, column: 3, start: 75, end: 148 }],
		children: [
			{
				name: 'moreTest',
				locations: [{ line: 5, column: 4, start: 99, end: 144 }],
				children: [
					{
						name: 'deepTest',
						locations: [{ line: 6, column: 5, start: 121, end: 139 }],
						children: [],
					},
				],
			},
		],
	},
	{
		name: '__anonymous-2__',
		locations: [{ line: 10, column: 3, start:…
