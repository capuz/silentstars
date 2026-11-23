---
repo: "834063245-creator/LantaiAgent"
name: "LantaiAgent"
description: "I’m a helpful assistant"
originalDescription: "I’m a helpful assistant"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/834063245-creator/LantaiAgent"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [69, 25]
topics: ["dsh-plugin", "dsh-plugin-market", "dsh-plugin-verify", "dsh-plugins", "code-analysis-true"]
stars: 24
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-14T13:08:43Z"
lastCommitAt: "2026-11-23T10:17:31Z"
lastReleaseAt: "2026-07-04T17:03:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 30
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/984efd21e605917d1eb206738d81eb2bd0d685e1ea2fd46c21adac9ff4645457/834063245-creator/LantaiAgent"
---

The main interface is not a chat window but a growing sheet of paper: human input, AI body text, thinking annotations, tool footnotes, and code transcriptions.

---

## What is this

**Lantai (兰台) is a Windows desktop Agent workbench** (Tauri 2 shell + TypeScript / React 19 frontend): a complete multi-Agent runtime.
The repo houses two product surfaces: the workbench (`src-ui/` + `src-tauri/`) and the engine (`engine/` and the `hologram-*` crates).

- **Canvas, not a message stream**: a session is a space. Multiple volumes lie on the same sheet, content can be pinned, dragged, and compared, and zooming changes the information granularity.
- **Multi-Agent runtime**: domain tool surface · sub-Agent pool (git worktree isolation) · Plan / Goal · memory and skills ·
  multi-vendor Provider · token governance.
- **Everything is a plugin**: panels / commands / tools / renderers / prompt segments / hooks / capabilities / swappable backends are all assembled through the contribution channel, and the factory-default state has no privileged rows.
