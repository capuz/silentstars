---
repo: "line/abc-def"
name: "abc-def"
description: "ABC Def is an efficient design system using a three-tier token structure and Headless UI to create web components with consistent design and flexible customization."
readmeQualityOk: true
url: "https://github.com/line/abc-def"
homepage: "https://line.github.io/abc-def/"
language: "TypeScript"
languages: ["TypeScript", "Vue", "CSS"]
languagePcts: [52, 25, 21]
topics: ["css", "design-system", "frontend", "headlessui", "headlessui-react", "react", "shadcn", "tailwindcss"]
stars: 103
forks: 8
openIssues: 3
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-05-15T07:40:22Z"
lastCommitAt: "2026-07-08T05:40:38Z"
lastReleaseAt: "2025-09-03T08:10:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 83
undervaluedScore: 42
maintainers: ["renovate[bot]", "thebestluck", "chiol"]
openGraphImageUrl: "https://opengraph.githubassets.com/d403d2f23a9cf1a916afce46da5e43e51f380ea897a15bb826228b107623ad70/line/abc-def"
---

# ABC Def

ABC Def is a CSS-first design system for shared UI packages. The visual contract lives in `@line/abc-def-styles`; the React and Vue packages render components against the same semantic selectors and tokens.

## Packages

- `@line/abc-def-styles`: Tailwind CSS v4 tokens, semantic variables, and component selectors.
- `@line/abc-def-react`: React components that render the shared selector contract.
- `@line/abc-def-vue`: Vue components that render the shared selector contract.

## Install

```bash
pnpm add tailwindcss @line/abc-def-styles
pnpm add @line/abc-def-react react react-dom
pnpm add @line/abc-def-vue vue
```

Install only the framework package you use. Plain HTML projects only need `@line/abc-def-styles`.

## Usage

Import the shared stylesheet from CSS processed by Tailwind CSS v4:

```css
@import "tailwindcss";
@import "@line/abc-def-styles/css";
```

React apps import components from subpath entry points:

```tsx
import { Button } from "@line/abc-def-react/button";

export function Example() {
  return <Button variant="outline">Button</Button>;
}
```

ABC Def does not provide a root component export. Do not import components from `@line/abc-def-react`; use the…
