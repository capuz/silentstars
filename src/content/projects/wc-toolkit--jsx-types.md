---
repo: "wc-toolkit/jsx-types"
name: "jsx-types"
description: "This package generates types for JSX environments for custom elements / web components"
readmeQualityOk: true
url: "https://github.com/wc-toolkit/jsx-types"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 7
forks: 4
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-05-20T21:39:05Z"
lastCommitAt: "2026-08-28T12:22:28Z"
lastReleaseAt: "2025-10-24T12:03:33Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 82
undervaluedScore: 60
maintainers: ["break-stuff", "github-actions[bot]", "vjo"]
openGraphImageUrl: "https://opengraph.githubassets.com/52ca2479bf717c2b7ae5bb9e4157ea8342464016ffd47aace65c8a7680974b5d/wc-toolkit/jsx-types"
---

</div>

# WC Toolkit Custom Element JSX Types Generator

This package is designed to generate [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) types for your custom elements. These types will generate inline documentation, autocomplete, and type-safe validation for your custom elements in frameworks that use JSX like [React (19+)](https://react.dev/), [Preact](https://preactjs.com/), [StencilJS](https://stenciljs.com/), and [SolidJS](https://www.solidjs.com/).

This allows developers to use your custom elements in their JSX projects with full type support, making it easier to integrate and use your components.

> **_NOTE:_** If you are using react 18 or below, check out our [react wrappers](https://wc-toolkit.com/integrations/react/).

Types will be generated for all custom elements defined in your [Custom Elements Manifest](https://custom-elements-manifest.open-wc.org/). 

This includes types and documentation for:

- Custom elements (types and docs)
- Attributes (types and docs)
- Properties (types and docs)
- Events (types and docs)
- Methods (types and docs)
- Slots (docs)
- CSS Custom Properties (docs)
- CSS States (docs)

## Usage

This package includes two ways…
