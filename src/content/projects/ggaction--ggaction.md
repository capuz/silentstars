---
repo: "ggaction/ggaction"
name: "ggaction"
description: "A grammar of graphical actions"
readmeQualityOk: true
url: "https://github.com/ggaction/ggaction"
homepage: "https://ggaction.github.io/ggaction"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["chart", "charting-library", "data-visualization", "grammar-of-graphics", "javascript", "visualization"]
stars: 13
forks: 2
openIssues: 9
closedIssues: 191
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-07-11T11:21:00Z"
lastCommitAt: "2026-10-24T08:21:37Z"
lastReleaseAt: "2026-08-11T14:57:49Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 60
maintainers: ["hj-n"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1297378742/bdebff17-9f9b-4cce-b31e-cb05108a7724"
---

# ggaction

### A grammar for how charts are made.

Most visualization grammars describe a finished chart. **ggaction** represents chart authoring itself as an immutable, traceable sequence of graphical actions.

Build, inspect, select, and revise charts one meaningful action at a time.

Every frame is rendered from an immutable `ChartProgram`. This is the paper’s Nightingale rose-plot authoring sequence: create the chart, encode mortality and cause, adjust sector spacing, add the title, and change the palette.

## Quick start

Install the current public release:

```bash
npm install ggaction
```

For Node PNG/PDF output, also install `@napi-rs/canvas`. For the MCP server,
also install `@modelcontextprotocol/sdk`. These are optional peer dependencies;
browser Canvas/SVG users do not need either package.

Add the Canvas element that the rendering code targets. Its accessible name and
fallback text summarize the chart for contexts where Canvas pixels are not
available:

```html
<canvas id="chart" aria-label="Scatterplot of displacement versus acceleration by origin">
  Scatterplot of displacement versus acceleration by origin.
</canvas>
```

```javascript
import { chart, render }…
