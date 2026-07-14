---
repo: "cortex-js/compute-engine"
name: "compute-engine"
description: "An engine for symbolic manipulation and numeric evaluation of math formulas expressed with MathJSON"
readmeQualityOk: true
url: "https://github.com/cortex-js/compute-engine"
homepage: "https://cortexjs.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["math", "json", "javascript", "typescript", "format", "cas", "math-json", "compute-engine", "latex", "symbolic-computation"]
stars: 459
forks: 62
openIssues: 1
closedIssues: 241
watchers: 9
contributors: 17
recentReleases: 0
createdAt: "2019-10-31T04:35:01Z"
lastCommitAt: "2026-07-14T05:51:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 38
maintainers: ["arnog", "yelliver", "KingArth0r"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/218685000/d2cd0c00-caa5-11eb-9917-f0f56c2a781c"
---

</div>

<h3><strong>Cortex Compute Engine</strong></h3>
<h1>Symbolic manipulation and numeric evaluation of MathJSON expressions</h1>

[MathJSON](https://cortexjs.io/math-json/) is a lightweight mathematical
notation interchange format based on JSON.

The Cortex Compute Engine can parse LaTeX to MathJSON, serialize MathJSON to
LaTeX or MathASCII, format, simplify and evaluate MathJSON expressions.

Reference documentation and guides at
[cortexjs.io/compute-engine](https://cortexjs.io/compute-engine/).

## Installation

```bash
$ npm install --save @cortex-js/compute-engine
```

## Quick Start

### Basic Parsing and Evaluation

No setup required:

```js
import { simplify, evaluate, N, assign } from "@cortex-js/compute-engine";

simplify("x + x + 1").print();
// ➔ 2x + 1

evaluate("2^{11} - 1").print();
// ➔ 2047

N("\\sqrt{2}").print();
// ➔ 1.414213562...

assign("x", 3);
evaluate("x + 2").print();
// ➔ 5
```

These functions use a shared `ComputeEngine` instance created on first use. Use
`getDefaultEngine()` to configure it, or create your own instance for isolated
configurations.

### Working with Numbers (Type-Safe)

Use type guards to safely access specialized properties:…
