---
repo: "danielroe/postcss-capsize"
name: "postcss-capsize"
description: "PostCSS plugin to inject Capsize font metrics"
readmeQualityOk: true
url: "https://github.com/danielroe/postcss-capsize"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 24
forks: 2
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-03-13T21:54:12Z"
lastCommitAt: "2026-11-02T13:38:25Z"
lastReleaseAt: "2026-06-08T11:28:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 56
maintainers: ["renovate[bot]", "danielroe", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56667d7bf97dc74aa682ef2c7c63d87c35749276f286827db4c26245c04e999/danielroe/postcss-capsize"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

> PostCSS plugin to inject Capsize font metrics

[**Read more about Capsize**](https://seek-oss.github.io/capsize/)

## Quick Start

First install `postcss-capsize`:

```bash
yarn add postcss-capsize --dev
# or npm
npm install postcss-capsize --save-dev
```

Second, add `postcss-capsize` as a PostCSS plugin to your `postcss.config.js`,
or in your project configuration.

```diff
module.exports = {
  plugins: [
+   ['postcss-capsize', {
+     metrics: {
+       'Test Mono': {
+         capHeight: 100,
+         ascent: 800,
+         descent: -200,
+         lineGap: 0,
+         unitsPerEm: 1000,
+       }
+       // You can declare as many fonts as needed
+     }
+   }],
    require('autoprefixer')
  ]
}
```

**Note**: there are many font metrics you can install from `@capsizecss/metrics` - or generate from a font file via `@capsizecss/unpack`.

## Example

### Split syntax
```css
.test {
  line-gap: 10px;
  /* both properties below must be declared alongside `line-gap` */
  /* The first matching font-family from your plugin config will be used */
  font-family: 'Gaudy Mono', 'Test Mono', sans-serif;
  font-size: 24px;
}
```

### Combined syntax (deprecated)
```css
.test {
  /*…
