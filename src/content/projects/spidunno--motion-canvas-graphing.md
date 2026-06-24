---
repo: "spidunno/motion-canvas-graphing"
name: "motion-canvas-graphing"
description: "Graphing + general math utils for motion canvas"
url: "https://github.com/spidunno/motion-canvas-graphing"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-03-02T20:47:13Z"
lastCommitAt: "2026-06-24T00:26:04Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 81
maintainers: ["github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/051f23004f0dc037c3dbcff2b5c95ac886613cf55dcb7bcdd62a865ebe250b06/spidunno/motion-canvas-graphing"
---

# Motion Canvas Graphing
Render expressions onto a graph (along with various other math utilities). Graphing powered by Desmos.
## Installation
`npm install @spidunno/motion-canvas-graphing`
## Example
All math components must be descendants of a `MathSpace` component. The `MathSpace` provides coordinate transformations from "math space" to pixel space.

All `MathExpression` components must be descendants of a `MathGraphingCalculator`.
 
Here's a full example that creates a grid and adds a sine wave to it:
```tsx
import { makeScene2D } from "@motion-canvas/2d";
import { Vector2 } from "@motion-canvas/core";
import {
	MathGrid,
	MathExpression,
	MathSpace,
	MathGraphingCalculator,
} from "@spidunno/motion-canvas-graphing";

export default makeScene2D(function* (view) {
	// MathGraphingCalculator is asynchronous, so it must be yielded to ensure it's loaded before rendering.
	yield view.add(
		<MathSpace
			width={() => view.width()}
			height={() => view.height()}
			/* `min` and `max` specify the domain that the `MathSpace` should span across */
			min={new Vector2(-8, -4.5)}
			max={new Vector2(8, 4.5)}
		>
			{/* Minor subdivisions */}
			<MathGrid lineWidth={1} spacing={[1 / 2,…
