---
repo: "juspay/svelte-ui-components"
name: "svelte-ui-components"
description: "Highly customisable Svelte UI Components"
readmeQualityOk: true
url: "https://github.com/juspay/svelte-ui-components"
homepage: "https://juspay.github.io/svelte-ui-components/"
language: "Svelte"
languages: ["Svelte", "TypeScript"]
languagePcts: [55, 43]
stars: 10
forks: 47
openIssues: 8
closedIssues: 25
watchers: 4
contributors: 48
recentReleases: 0
createdAt: "2023-11-16T07:39:14Z"
lastCommitAt: "2026-09-08T08:16:07Z"
lastReleaseAt: "2024-06-03T07:04:40Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 95
undervaluedScore: 83
maintainers: ["murdore", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/27b1403a96720760dbb29c308b0f7fd3fe8c10e10165adf5c3f3aac9b4db24d3/juspay/svelte-ui-components"
---

# @juspay/svelte-ui-components

A themeable Svelte 5 component library where **every visual property is a CSS custom property**. Build any design system on top — no source changes needed.

```bash
npm install @juspay/svelte-ui-components
```

Requires `svelte ^5.41.2` and `type-decoder ^2.1.0` as peer dependencies.

---

## Why This Library?

Most component libraries ship with a fixed look. Changing it means fighting overrides, patching internals, or forking.

This library takes a different approach: **components are unstyled by default** and expose every visual decision — colors, spacing, typography, borders, shadows, radii — as CSS custom properties. You define the design system. The components render it.

```svelte

  <Button text="Continue" onclick={handleClick} />
</div>

<style>
  .my-theme {
    --button-color: #000;
    --button-text-color: #fff;
    --button-border-radius: 8px;
    --button-padding: 12px 24px;
    --button-font-size: 14px;
    --button-font-weight: 600;
    --button-hover-color: #222;
    --button-border: 1px solid #333;
  }
</style>
```

---

## Breaking changes, and the release they actually shipped in

**Both changes below shipped in 3.5.1, which went…
