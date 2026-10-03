---
repo: "EastSun5566/let-it-go"
name: "let-it-go"
description: "❄️ Let your website snow instantly"
readmeQualityOk: true
url: "https://github.com/EastSun5566/let-it-go"
homepage: "https://eastsun5566.github.io/let-it-go/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["canvas", "snow", "snowflake", "no-dependencies", "typescript", "library"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 20
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2019-12-30T09:03:34Z"
lastCommitAt: "2026-10-03T22:03:51Z"
lastReleaseAt: "2026-09-30T17:58:25Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 58
maintainers: ["EastSun5566", "dependabot[bot]", "pullfrog[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/41a55004368d72b7f5fab63bd1bdb89b78eeb5384cbafbd15beca10285b85740/EastSun5566/let-it-go"
---

# ❄️ Let It Go

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" height="40">](https://www.buymeacoffee.com/eastsun5566)

> Let your website snow instantly, zero dependencies, small & fast

🔗 <https://eastsun5566.github.io/let-it-go/>

## ✨ Installation

```sh
npm i let-it-go
```

## 🚀 Usage

### Basic

```js
import { LetItGo } from "let-it-go";

// Run this in a browser after the document body is available.
const snow = new LetItGo();
```

The package can be imported by Node.js and SSR tooling, but creating a
`LetItGo` instance requires browser DOM and Canvas APIs. In an SSR application,
construct it from a client-only lifecycle hook.

### Advanced

#### Options

```js
// create snow with some options
const snow = new LetItGo({
  // root container, defaults to `document.body`
  root: document.getElementById("root") ?? document.body,
  // number of snowflakes, defaults to `window.innerWidth` (capped at 10,000)
  number: 1000,
  // velocity x range of snowflake, defaults to `[-3, 3]`
  velocityXRange: [-3, 3],
  // velocity y range of snowflake, defaults to `[1, 5]`
  velocityYRange: [1, 5],
  // radius range of snowflake, defaults to…
