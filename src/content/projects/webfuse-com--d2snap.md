---
repo: "webfuse-com/D2Snap"
name: "D2Snap"
description: " Beyond Pixels: Exploring DOM Downsampling for LLM-Based Web Agents"
readmeQualityOk: true
url: "https://github.com/webfuse-com/D2Snap"
homepage: "https://arxiv.org/abs/2508.04412"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [66]
stars: 36
forks: 9
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2025-07-01T18:19:24Z"
lastCommitAt: "2026-09-25T09:02:08Z"
lastReleaseAt: "2026-08-10T09:44:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["t-ski", "jsnjack"]
openGraphImageUrl: "https://opengraph.githubassets.com/efcae92f70d529dfa6e37c571c6f7c132e6a55ba0a179c0a5b3fb55a6d1deb5a/webfuse-com/D2Snap"
---

<h1 align="center">D2Snap</h1>

**D2Snap** is a first-of-its-kind DOM downsampling algorithm, designed for use with LLM-based web agents.

##

### Integrate

``` ts
D2Snap.d2Snap(
  dom: DOM,
  rE: number, rA: number, rT: number,
  options?: Options
): Promise<{
  html: string;
  meta: {};
}>

D2Snap.adaptiveD2Snap(
  dom: DOM,
  maxTokens: number = 4096,
  maxIterations: number = 5,
  options?: Options
): Promise<{
  dom: string;
  innerHTML: string;  // alias: html
  outerHTML: string;
  meta: {};
  parameters: {};
  adaptiveIterations: number;
}>
```

``` ts
type DOM = Document | Element | string;
type Options = {
  debug?: boolean;            // false
  minify?: boolean;           // true
  outerHTML?: boolean;        // false
  uniqueIDs?: boolean;        // false
  attributeScoring?: {        // compare src/var.ATTRIBUTE_SCORING.ts
    [ name: string ]: number;
  };
  labelToText?: {
    iconFonts?: boolean;       // false
    tagNames?: string[];       // [ "IMG", "SVG" ]
  }>;
  skip?: {
    markdown?: boolean;       // false
    skipTextRank?: boolean;   // false
  };
};
```

> The attribute scoring lookup table supports wildcards for `aria` and `data` (`{aria-|data-}*`).…
