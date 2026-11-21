---
repo: "office-kit/pptx"
name: "pptx"
description: "A JavaScript library for PowerPoint (PPTX) files"
readmeQualityOk: true
url: "https://github.com/office-kit/pptx"
homepage: "https://office-kit.github.io/pptx/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [67, 21]
stars: 39
forks: 8
openIssues: 1
closedIssues: 16
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-05-14T12:21:37Z"
lastCommitAt: "2026-11-21T11:37:18Z"
lastReleaseAt: "2026-06-14T14:33:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 44
maintainers: ["baseballyama", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0bf096c0e93d76a5eee4acf6a6955d4cbf55d6eee208dd5ec8cf5c62754f0540/office-kit/pptx"
---

# @office-kit/pptx

Read, edit, and write `.pptx` (Office Open XML Presentation) files from
TypeScript, in **Node.js and the browser**, from a single ESM bundle.

**[Create slides with AI](#create-slides-with-ai-and-live-preview)** ·
**[Documentation](https://office-kit.github.io/pptx/)** ·
**[Playground](https://office-kit.github.io/pptx/playground)** (inspect a deck in your browser) ·
**[REPL](https://office-kit.github.io/pptx/repl)** (write code, watch the deck redraw)

```ts
import { loadPresentation, replaceTokensInPresentation, savePresentation } from '@office-kit/pptx';

// A designer makes template.pptx in a presentation app. Your code fills it in.
const pres = await loadPresentation(templateBytes);
replaceTokensInPresentation(pres, { name: 'Alice', event: 'Re:Invent', date: '2026-12-01' });
const out: Uint8Array = await savePresentation(pres);
```

> **Status: 0.x, pre-1.0.** The capabilities in the [scope table](#scope) are
> exercised against real PPTX fixtures and validated in CI (see
> [How output is checked](#how-output-is-checked)). Until 1.0 the public API is
> not frozen: a breaking change can land in a minor (`0.x`) release, so pin a
> version or an exact range.
