---
repo: "corca-ai/wasmtex"
name: "wasmtex"
description: "WASM TeX engines (pdfLaTeX/XeLaTeX/LuaLaTeX)"
readmeQualityOk: true
url: "https://github.com/corca-ai/wasmtex"
homepage: "https://cortex.corca.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [73]
stars: 16
forks: 3
openIssues: 4
closedIssues: 65
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-07-22T09:53:43Z"
lastCommitAt: "2026-11-04T08:03:16Z"
lastReleaseAt: "2026-08-28T11:01:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 58
maintainers: ["akcorca"]
openGraphImageUrl: "https://opengraph.githubassets.com/a14467076843f1394c96c2fa95d3efe3ee2cd4ad0bbf8ec41dc32bc7cb300179/corca-ai/wasmtex"
discussionCount: 0
---

# WasmTex

An embeddable LaTeX SDK with a headless compiler, optional Monaco editor and PDF
preview, and editor-neutral language services. The headless compiler runs pdfLaTeX,
XeLaTeX and LuaLaTeX in browser workers or on Node. The built-in `WasmTex` component
provides a pdfLaTeX editor and PDF.js preview. TeX Live packages load on demand;
engine assets are [hosted separately](https://github.com/corca-ai/wasmtex/blob/HEAD/docs/assets.md).

**[Live Demo](https://cortex.corca.ai/try)**

## Quick Start

Install from GitHub with Node 24+. The package includes a committed `lib/` bundle;
package managers may also run its `prepare` build. Pin a commit instead of `#main`
for reproducible installs.

```bash
npm install github:corca-ai/wasmtex#main
```

[Download and serve the engine assets](https://github.com/corca-ai/wasmtex/blob/HEAD/docs/assets.md) under `/wasmtex/2025/`, then
compile in your browser app:

```typescript
import { WasmTexCompiler } from 'wasmtex/headless'

const compiler = new WasmTexCompiler({
  assetBaseUrl: '/',
  files: {
    'main.tex': String.raw`\documentclass{article}\begin{document}Hello!\end{document}`,
  },
})
try {
  await compiler.init()
  const result =…
