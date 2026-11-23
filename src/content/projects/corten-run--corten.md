---
repo: "corten-run/corten"
name: "corten"
description: "Fast web apps: Rust renders every page on the server, plain JavaScript does the rest in the browser. Typed end to end, live data over server-sent events, and one server for web, native and agent clients."
readmeQualityOk: true
url: "https://github.com/corten-run/corten"
homepage: "https://corten.run"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [52, 40]
topics: ["mcp", "rust", "server-sent-events", "ssr", "web-framework"]
stars: 6
forks: 0
openIssues: 123
closedIssues: 890
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-21T02:20:04Z"
lastCommitAt: "2026-11-23T09:20:48Z"
lastReleaseAt: "2026-11-11T22:17:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 59
maintainers: ["todd-skelton"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1427779913/0ca57e0d-8f91-4bab-81f0-3e0022f4fce6"
discussionCount: 0
---

**Fast web apps: Rust on the server, plain JavaScript in the browser, and each doing the work it is fastest at.**

[Getting started](https://github.com/corten-run/corten/blob/HEAD/docs/guide/getting-started.md) |
[Guides](#documentation) |
[Examples](#examples) |
[Performance](https://github.com/corten-run/corten/blob/HEAD/docs/performance.md) |
[Changelog](https://github.com/corten-run/corten/blob/HEAD/CHANGELOG.md)

Corten is a Rust web framework for apps where speed at the user's end matters. The server
renders every page as finished HTML with `html!`, a JSX-like macro. In the browser, plain
JavaScript next to each component does what the page can do with the data it already has, with
no request. When the server is needed, a small runtime swaps pages and patches part of one, and
live data streams in over server-sent events. One handler answers the browser, native apps and
AI agents.

Visit [corten.run](https://corten.run) for a page that demonstrates Corten.
