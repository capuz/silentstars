---
repo: "Mister-Hope/create-codepen"
name: "create-codepen"
description: "Create codepen through api"
readmeQualityOk: true
url: "https://github.com/Mister-Hope/create-codepen"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2023-06-03T17:02:32Z"
lastCommitAt: "2026-11-07T10:37:27Z"
lastReleaseAt: "2026-10-31T08:57:42Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 77
undervaluedScore: 72
maintainers: ["renovate[bot]", "Mister-Hope"]
openGraphImageUrl: "https://opengraph.githubassets.com/04e87ae28276b229810769b56a4cd612ec8bbbbf4fb074b37ffb5192569353db/Mister-Hope/create-codepen"
---

# create-codepen

A browser library for embedding CodePen content via the CodePen embed API. Zero runtime dependencies, ESM-only, written with ES2023 syntax and built for baseline-widely-available browsers (Chrome 111+, Edge 111+, Firefox 114+, Safari 16.4+, iOS Safari 16.4+).

## Installation

```html
<script type="module">
  import { renderCodePen } from "https://unpkg.com/create-codepen@2";
</script>
```

## API Reference

### renderCodePen(options, selector?)

Renders a CodePen iframe. If `selector` is provided, embeds inside that element; otherwise opens in a new window.

A selector string that matches no element throws a `TypeError`. The matched host is replaced by `.code-pen-embed-wrapper` after rendering, so query the wrapper instead of the original element.

```ts
renderCodePen(options: CodePenOptions, selector?: string | HTMLElement): void
```

#### Parameters

| Parameter  | Type                    | Description                             |
| ---------- | ----------------------- | --------------------------------------- |
| `options`  | `CodePenOptions`        | Embed configuration (see Options below) |
| `selector` | `string \| HTMLElement` | Optional target element…
