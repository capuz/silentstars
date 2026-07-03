---
repo: "sugarcube-sh/sugarcube"
name: "sugarcube"
description: "Design tokens in, CSS and components out."
url: "https://github.com/sugarcube-sh/sugarcube"
homepage: "https://sugarcube.sh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [74]
topics: ["cli", "component-library", "css", "cube-css", "design-systems", "design-tokens", "design-tokens-format-module", "react", "vite-plugin"]
stars: 115
forks: 4
openIssues: 7
closedIssues: 16
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2026-02-10T09:16:47Z"
lastCommitAt: "2026-07-03T06:24:49Z"
lastReleaseAt: "2026-03-10T00:38:42Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 91
undervaluedScore: 31
maintainers: ["mark-tomlinson-dev", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e8905626fea48885e6b956644e774f804cc45a8b0351a0d72a481d9700496790/sugarcube-sh/sugarcube"
fundingLinks: ["GITHUB:https://github.com/mark-tomlinson-dev"]
discussionCount: 6
---

<h1 align="center">sugarcube</h1>

  <strong>Design tokens in, CSS & components out</strong>
</p>

</p>

---

Sugarcube is a tool for building front ends on [DTCG design tokens](https://www.designtokens.org/). It connects your tokens to CSS variables, utility classes, CUBE CSS, and copy-to-own components — via the Vite plugin or CLI.

## Quick start

```bash
npx @sugarcube-sh/cli init
```

This walks you through setup: starter tokens, CUBE CSS, components, and Vite plugin. The CLI is installed locally, so you can use `sugarcube` going forward.

**With the Vite plugin:**

```ts
// vite.config.ts
import sugarcube from "@sugarcube-sh/vite";

export default {
  plugins: [sugarcube()],
};
```

```ts
import "virtual:sugarcube.css";
```

**Without the Vite plugin:**

```bash
sugarcube generate
```

Or add it to your npm scripts:

```json
{
  "scripts": {
    "styles:generate": "sugarcube generate",
    "styles:generate:watch": "sugarcube generate --watch",
    "tokens:validate": "sugarcube validate"
  }
}
```

## Documentation

[sugarcube.sh/docs](https://sugarcube.sh/docs)

## Packages

| Package | Description |
|---------|-------------|
|…
