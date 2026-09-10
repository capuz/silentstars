---
repo: "eryue0220/unplugin-stylex"
name: "unplugin-stylex"
description: "StyleX integration for Vite, esbuild, webpack, rollup and rspack."
readmeQualityOk: true
url: "https://github.com/eryue0220/unplugin-stylex"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 29
forks: 4
openIssues: 0
closedIssues: 22
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2023-12-22T14:47:46Z"
lastCommitAt: "2026-09-10T08:21:40Z"
lastReleaseAt: "2024-05-18T06:38:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 61
maintainers: ["dependabot[bot]", "eryue0220"]
openGraphImageUrl: "https://opengraph.githubassets.com/0721ca9ae25c10a60504b7e4788c0a8edee7a23386187ed91ce7c6e012e72c31/eryue0220/unplugin-stylex"
fundingLinks: ["GITHUB:https://github.com/eryue0220", "CUSTOM:https://afdian.com/a/eryue0220"]
---

# unplugin-stylex  

`unplugin-stylex` brings StyleX transform support to multiple bundlers via [unplugin](https://github.com/unjs/unplugin).

## Installation

```bash
npm i -D unplugin-stylex @stylexjs/stylex
```

or

```bash
yarn add -D unplugin-stylex @stylexjs/stylex
```

or

```bash
pnpm add -D unplugin-stylex @stylexjs/stylex
```

## Requirements

- Node.js: `^20.19.0 || >=22.12.0`
- Peer dependency: `@stylexjs/stylex@0.x`

## Supported Targets

- Vite (`unplugin-stylex/vite`)
- Astro integration (`unplugin-stylex/astro`)
- Esbuild (`unplugin-stylex/esbuild`)
- Farm (`unplugin-stylex/farm`)
- Rspack (`unplugin-stylex/rspack`)
- RSBuild (through Rspack plugin in `tools.rspack.plugins`)
- Rolldown (`unplugin-stylex/rolldown`)
- Rollup (`unplugin-stylex/rollup`)
- Webpack (`unplugin-stylex/webpack`)

## Quick Start

<details>
<summary>Vite</summary>

```js
// vite.config.js
import { defineConfig } from 'vite'
import stylexPlugin from 'unplugin-stylex/vite'

export default defineConfig({
  plugins: [
    stylexPlugin(),
  ],
})
```

</details>

<details>
<summary>Astro</summary>

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import stylexAstroPlugin from…
