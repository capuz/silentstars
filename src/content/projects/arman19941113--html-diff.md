---
repo: "Arman19941113/html-diff"
name: "html-diff"
description: "Compare HTML contents"
readmeQualityOk: true
url: "https://github.com/Arman19941113/html-diff"
homepage: "https://arman19941113.github.io/html-diff/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["html-diff", "javascript"]
stars: 13
forks: 4
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-09-04T13:54:33Z"
lastCommitAt: "2026-11-02T11:34:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["Arman19941113"]
openGraphImageUrl: "https://opengraph.githubassets.com/edfb2b90e56d41978d1122309f100d4396c266797720f026cdfc661b6ad77107/Arman19941113/html-diff"
---

# Html Diff

Compare HTML and generate the differences in either a unified view or a side-by-side comparison. [See online demo...](https://arman19941113.github.io/html-diff/)

## Install

```
pnpm add @armantang/html-diff
```

## Usage

```js
import '@armantang/html-diff/dist/index.css'
import HtmlDiff from '@armantang/html-diff'

const oldHtml = `<div>hello</div>`
const newHtml = `<div>hello world</div>`

const diff = new HtmlDiff(oldHtml, newHtml)
const unifiedContent = diff.getUnifiedContent()
const sideBySideContents = diff.getSideBySideContents()
```

## Options

```ts
const diff = new HtmlDiff(oldHtml, newHtml, {
  // options
})

interface HtmlDiffOptions {
  /**
   * Determine the minimum threshold for calculating common sub-tokens.
   * You may adjust it to a value larger than 2, but not lower, due to the potential inclusion of HTML tags in the count.
   * @defaultValue 2
   */
  minMatchedSize?: number
  /**
   * When greedyMatch is enabled, if the length of the sub-tokens exceeds greedyBoundary,
   * we will use the matched sub-tokens that are sufficiently good, even if they are not optimal, to enhance performance.
   * @defaultValue true
   */
  greedyMatch?: boolean…
