---
repo: "frostney/GocciaScript"
name: "GocciaScript"
description: "A drop of JavaScript — a JavaScript engine and sandbox-first ECMAScript runtime implemented in Object Pascal"
readmeQualityOk: true
url: "https://github.com/frostney/GocciaScript"
homepage: "https://gocciascript.dev"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [68]
topics: ["ecmascript", "interpreter", "javascript", "pascal", "freepascal", "fpc", "object-pascal", "jsx", "typescript", "runtime"]
stars: 20
forks: 4
openIssues: 186
closedIssues: 379
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-05-25T20:21:09Z"
lastCommitAt: "2026-10-12T11:15:09Z"
lastReleaseAt: "2026-04-29T22:18:40Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 65
maintainers: ["frostney", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf8eea6fe31fb4b32a1d87c46fa2b92aec27c10ccc22a2305a1d2bbe2a248bdd/frostney/GocciaScript"
---

# GocciaScript

A drop of JavaScript — sandboxed by default

GocciaScript is a JavaScript engine: a sandbox-first ECMAScript runtime and toolchain for AI agents.
Hosts define the available capabilities, runtime surface, and execution limits.
It uses modern recommended defaults while tracking ECMAScript compatibility
through generated test262 reports.

GocciaScript is implemented in FreePascal, supports Delphi, and can also be
embedded in native applications. Native embedding is an important secondary
goal; the primary product goal is AI-agent execution under an explicit
host-defined capability model. It is not trying to become Node.js or a browser
host.

## Start with an agent sandbox

`GocciaRunner`'s sandbox mode copies explicit host paths into an in-memory
virtual filesystem, runs an entry script with host-owned limits, and reports
sandbox changes as a diff. Copies are snapshots, not live mounts, and scripts
receive no ambient host filesystem access.

```javascript
// agent-workspace/main.js
import fs from "fs";

const input = fs.readFileSync("/task.txt", "utf8");
fs.mkdirSync("/out", { recursive: true });
fs.writeFileSync("/out/result.txt", input.toUpperCase());
```

```bash…
