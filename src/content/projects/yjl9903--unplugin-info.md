---
repo: "yjl9903/unplugin-info"
name: "unplugin-info"
description: "Export build information as a virutal module"
readmeQualityOk: true
url: "https://github.com/yjl9903/unplugin-info"
homepage: "https://yjl9903.github.io/unplugin-info/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["git", "vite", "vite-plugin", "plugin", "unplugin", "webpack", "ci", "astro"]
stars: 112
forks: 8
openIssues: 4
closedIssues: 12
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2022-06-24T07:12:47Z"
lastCommitAt: "2026-07-21T06:11:51Z"
lastReleaseAt: "2023-09-25T12:39:52Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 94
undervaluedScore: 46
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5659abae244e1f4d6c1895724865209c418d98ed87a57d7e0cdd93c9009365b0/yjl9903/unplugin-info"
fundingLinks: ["GITHUB:https://github.com/yjl9903"]
---

# unplugin-info

Export build information as virutal module.

This plugin helps you add **build timestamp** / **commit SHA** / **CI environment** / `package.json` / ... to your application. So you can easily check whether the production version meets your expectations, or config your application.

> **Migration from v0 to v1**
>
> + Move git related information from `~build/info` to `~build/git`
> + Move CI related information from `~build/info` to `~build/ci`
> + Remove `commitsSinceLastTag` from `~build/git`

## Installation

```bash
npm i -D unplugin-info
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts

import Info from 'unplugin-info/vite';

export default defineConfig({
  plugins: [
    Info()
  ]
});
```

Full example is located at [examples/vite](https://github.com/yjl9903/unplugin-info/blob/main/examples/vite).

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js

import Info from 'unplugin-info/rollup';

export default {
  plugins: [
    Info()
  ]
};
```

<br></details>

<details>
<summary>Rspack</summary><br>

```ts
// rspack.config.js

module.exports = {
  /* ... */
  plugins: [
    require('unplugin-info/rspack')()…
