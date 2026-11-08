---
repo: "inokawa/editate"
name: "editate"
description: "An experimental, type-safe, framework agnostic and small (5kB+) contenteditable state manager."
readmeQualityOk: true
url: "https://github.com/inokawa/editate"
homepage: "https://inokawa.github.io/editate/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["angular", "contenteditable", "editor", "highlight", "input", "preact", "react", "solid", "svelte", "textarea"]
stars: 134
forks: 5
openIssues: 45
closedIssues: 52
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-02-16T04:44:44Z"
lastCommitAt: "2026-11-08T10:40:30Z"
lastReleaseAt: "2025-01-23T12:09:53Z"
status: "thriving"
tags: ["solo_builder", "funded", "under_pressure"]
healthScore: 88
undervaluedScore: 41
maintainers: ["inokawa", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/72d817a5b6f4845bad03e58b3a42fba755a28d1d378951d8cb513f2a9352ac61/inokawa/editate"
fundingLinks: ["GITHUB:https://github.com/inokawa"]
discussionCount: 5
---

# editate

   [](https://deepwiki.com/inokawa/editate) [](https://github.com/inokawa/editate/actions/workflows/check.yml) [](https://github.com/inokawa/editate/actions/workflows/demo.yml)

> An experimental, type-safe, framework agnostic and small (5kB+) [contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) state manager.

## Motivation

Web editing is so hard even today. There are excellent libraries to make complex rich text editor, but they are too much for small purposes. Native [textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element is accessible and easy to use, but it's hardly customizable.

[contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute is a primitive for rich text editing, [that was designed for Internet Explorer and copied by other browsers](https://blog.whatwg.org/the-road-to-html-5-contenteditable). As you may know it has [so many problems](https://github.com/grammarly/contenteditable). It has no clear spec, it has many edge case bugs, and has cross browser/OS/input device problems. And it doesn't work well with declarative…
