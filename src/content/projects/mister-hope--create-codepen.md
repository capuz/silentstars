---
repo: "Mister-Hope/create-codepen"
name: "create-codepen"
description: "Create codepen through api"
readmeQualityOk: true
url: "https://github.com/Mister-Hope/create-codepen"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [86]
stars: 6
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2023-06-03T17:02:32Z"
lastCommitAt: "2026-08-08T04:32:55Z"
lastReleaseAt: "2026-07-10T05:55:33Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 50
maintainers: ["Mister-Hope", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b135d958ca7192802210db3d595453d15a2f33a6b1c327d8825a1c11096cb7be/Mister-Hope/create-codepen"
---

# create-codepen

A browser library for embedding CodePen content via the CodePen embed API. Zero Node.js dependencies, ESM-only, targets modern browsers (ES2020+).

## Installation

```html
<script type="module">
  import { renderCodePen } from "https://unpkg.com/create-codepen";
</script>
```

## API Reference

### renderCodePen(options, selector?)

Renders a CodePen iframe. If `selector` is provided, embeds inside that element; otherwise opens in a new window.

```ts
renderCodePen(options: CodePenOptions, selector?: string | HTMLElement): void
```

#### Parameters

| Parameter  | Type                    | Description                             |
| ---------- | ----------------------- | --------------------------------------- |
| `options`  | `CodePenOptions`        | Embed configuration (see Options below) |
| `selector` | `string \| HTMLElement` | Optional target element to embed into   |

#### Example

```html

<script type="module">
  import { renderCodePen } from "https://unpkg.com/create-codepen";

  renderCodePen(
    {
      "slug-hash": "XWJPxpZ",
      user: "Mamboleoo",
      height: 300,
      "theme-id": "light",
      "default-tab": "js,result",
    },…
