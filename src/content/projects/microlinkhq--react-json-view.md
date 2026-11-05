---
repo: "microlinkhq/react-json-view"
name: "react-json-view"
description: "Interactive React component for inspecting JSON objects and arrays with expand/collapse."
readmeQualityOk: true
url: "https://github.com/microlinkhq/react-json-view"
homepage: "https://github.com/microlinkhq/react-json-view"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["component", "debug", "devtools", "display", "inspector", "interactive", "json", "react", "tree", "viewer"]
stars: 421
forks: 70
openIssues: 10
closedIssues: 25
watchers: 2
contributors: 52
recentReleases: 0
createdAt: "2020-06-01T15:02:21Z"
lastCommitAt: "2026-11-05T08:06:55Z"
lastReleaseAt: "2025-02-13T09:19:29Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 91
undervaluedScore: 37
maintainers: ["Kikobeats", "dependabot[bot]", "theluckystrike"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/268553701/6b8b91e7-16f7-4c3d-bff4-945a36169f92"
---

react-json-view

**react-json-view** (rjv) is a React component for displaying and editing javascript **arrays** and **JSON objects**.

### Highlights

* `onEdit`, `onAdd` and `onDelete` props allow users to edit the `src` variable.
* Object, array, string and function values can be collapsed and expanded.
* Object and array nodes display length.
* Object and array nodes support a "Copy to Clipboard" feature.
* String values can be truncated after a specified length.
* Arrays can be subgrouped after a specified length.
* Base-16 Theme Support.
* When `onEdit` is enabled:
   * `Ctrl/Cmd+Click` Edit Mode
   * `Ctrl/Cmd+Enter` Submit

### Installation

```shell
npm install @microlink/react-json-view --save
```

### Usage

```js
import ReactJsonView from '@microlink/react-json-view'

<ReactJsonView
  src={{
  string: 'this is a test string',
  integer: 42,
  array: [1, 2, 3, 'test', NaN],
  float: 3.14159,
  undefined: undefined,
  object: {
    'first-child': true,
    'second-child': false,
    'last-child': null
    },
  string_number: '1234',
  date: new Date(),
  bigNumber: new BigNumber('0.0060254656709730629123')
  }}
  showComma
/>
```

### API

| Name…
