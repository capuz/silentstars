---
repo: "creasty/mobx-sentinel"
name: "mobx-sentinel"
description: "MobX library for non-intrusive class-based model enhancement. Acting as a sentinel, it provides change detection, reactive validation, and form integration capabilities without contamination."
readmeQualityOk: true
url: "https://github.com/creasty/mobx-sentinel"
homepage: "https://mobx-sentinel.creasty.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["form", "mobx", "model", "react", "change-detection", "validation"]
stars: 9
forks: 0
openIssues: 11
closedIssues: 31
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-01-05T12:42:52Z"
lastCommitAt: "2026-09-18T08:28:02Z"
lastReleaseAt: "2025-09-18T02:58:21Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 73
maintainers: ["creasty", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/02a8bb5a028d6a59fe2a2e150085a99f069c3b297674cd1a339520daba4f3326/creasty/mobx-sentinel"
---

# mobx-sentinel

> [!CAUTION]
> This library is currently in the early stage of development. User interface is subject to change without notice.

MobX library for non-intrusive class-based model enhancement. Acting as a sentinel, it provides change detection, reactive validation, and form integration capabilities without contamination.

The documentation lives at **[mobx-sentinel.creasty.com](https://mobx-sentinel.creasty.com)**: why the library exists and how it compares, [guides](https://mobx-sentinel.creasty.com/docs/) to each package, and the [API reference](https://mobx-sentinel.creasty.com/apis/).

[apps/example/](https://github.com/creasty/mobx-sentinel/blob/HEAD/apps/example) is a working invoice editor built with it, deployed at [example.mobx-sentinel.creasty.com](https://example.mobx-sentinel.creasty.com).

## Packages

### `core` — Core functionality like Watcher and Validator [(read more)](https://mobx-sentinel.creasty.com/docs/core/)

<pre><code>npm install --save <b>@mobx-sentinel/core</b></code></pre>

- `@nested` annotation for tracking nested models.
  - `@nested` annotation supports objects, boxed observables, arrays, sets, and maps.
  - `@nested.hoist`…
