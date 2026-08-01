---
repo: "cortex-js/compute-engine"
name: "compute-engine"
description: "An engine for symbolic manipulation and numeric evaluation of math formulas expressed with MathJSON"
readmeQualityOk: true
url: "https://github.com/cortex-js/compute-engine"
homepage: "https://cortexjs.io"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["math", "json", "javascript", "typescript", "format", "cas", "math-json", "compute-engine", "latex", "symbolic-computation"]
stars: 463
forks: 62
openIssues: 2
closedIssues: 241
watchers: 10
contributors: 17
recentReleases: 0
createdAt: "2019-10-31T04:35:01Z"
lastCommitAt: "2026-08-01T06:12:33Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 99
undervaluedScore: 38
maintainers: ["arnog"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/218685000/d2cd0c00-caa5-11eb-9917-f0f56c2a781c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061725Z&X-Amz-Expires=300&X-Amz-Signature=44404f41b57d972dbd8283c0004e68595b8502da246c6918e7cd37d8af5425c6&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTM0NSwibmJmIjoxNzg1NTY1MDQ1LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.RrXWtDLsmAMh8QW222JD9d_lmhSN2grSu_1xUyCJgDU"
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
