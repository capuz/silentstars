---
repo: "dragonwocky/psyche"
name: "psyche"
description: "Fast, typo-tolerant, headless search."
readmeQualityOk: true
url: "https://github.com/dragonwocky/psyche"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["javascript", "typescript", "search", "search-engine", "documentation", "documentation-search", "deno", "lume", "indexer", "sitemap"]
stars: 22
forks: 0
openIssues: 4
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 1
createdAt: "2022-01-02T04:09:00Z"
lastCommitAt: "2026-11-07T13:55:10Z"
lastReleaseAt: "2026-11-05T13:19:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 83
undervaluedScore: 48
maintainers: ["dragonwocky"]
openGraphImageUrl: "https://opengraph.githubassets.com/badb0bf18af88294ba50ad4c87ec8d71da377795073edef855bf629658e84170/dragonwocky/psyche"
fundingLinks: ["GITHUB:https://github.com/dragonwocky"]
---

# 🧠 psyche

**psyche** is a fast, typo-tolerant, headless search for static and
server-rendered sites.

Results are fuzzy matched in a web worker, using a search algorithm
loosely based on [fuzzysearch](https://github.com/bevacqua/fuzzysearch).

## Install

```sh
pnpm add github:dragonwocky/psyche#semver:^1.0.0
```

## The index

The index is a JSON array of records, served by your site, each linked to its
page: `{ href, value: record }`. A record's values are yours: the fields you
search, and anything else you want in results, which is passed through to them
untouched.

```ts
const entry = {
  href: "/posts/kale/",
  value: {
    title: "Growing kale",
    body: "Sow kale in late summer…", // the page's text
    headings: [{ value: "After a frost", href: "#frost" }], // a match in one links to it
    tags: ["Vegetables"],
    date: "27 October 2026", // not searched: passed through as data
  },
};
```

A searched value is text, or a record, matched by the same fields (e.g. an
author's `name`). Either can be linked, `{ value, href }`, with a link relative
to the link of the record it's in: a result whose best match is in a linked
value links to it, e.g. a heading's `#id`. A…
