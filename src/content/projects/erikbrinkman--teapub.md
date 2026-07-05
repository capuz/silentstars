---
repo: "erikbrinkman/teapub"
name: "teapub"
description: "A pure javascript library for generating epub files"
readmeQualityOk: true
url: "https://github.com/erikbrinkman/teapub"
homepage: "https://erikbrinkman.github.io/teapub/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["ebook", "epub", "epub-generator", "javascript", "typescript"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2022-04-11T04:08:18Z"
lastCommitAt: "2026-07-05T21:00:09Z"
lastReleaseAt: "2026-07-05T04:50:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 52
maintainers: ["erikbrinkman", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/027c5664be79aeeeb0a4ff7e753ec0f21b9086dadff6204d5825c4638dd230e9/erikbrinkman/teapub"
---

TeaPub :tea::beer:
==================

A pure TypeScript preact-based library for generating ePub files. In contrast
to [`html-to-epub`](https://www.npmjs.com/package/html-to-epub) and
[`nodepub`](https://www.npmjs.com/package/nodepub), this runs in any javascript
environment and seeks a more minimal approach to ePub generation rather than
autogenerating content like a cover and table of contents.

Usage
-----

A minimal example

```ts
import { render } from "teapub";

const buffer = await render({
  title: "title",
  sections: [{
    title: "section title",
    content: "<my html>",
  }],
});
```

This library can also include images encoded as buffers. To include them, add
an images mapping that maps the `src` attribute of images in the included html
to buffers with optional mime type.

```ts
import { readFile } from "fs/promises";
import { render } from "teapub";

const data = await readFile("myfile.jpg");

const buffer = await render({
  title: "title",
  sections: [{
    title: "section title",
    content: `<img src="myfile.jpg"></img>`,
  }],
  images: new Map([["myfile.jpg", { data }]]),
});
```

Custom `woff2` fonts can be embedded and referenced from your CSS. Each entry…
