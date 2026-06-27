---
repo: "Gudahtt/prettier-plugin-sort-json"
name: "prettier-plugin-sort-json"
description: "A plugin for Prettier that sorts JSON files by property name."
url: "https://github.com/Gudahtt/prettier-plugin-sort-json"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
stars: 123
forks: 16
openIssues: 4
closedIssues: 30
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2020-09-14T20:06:41Z"
lastCommitAt: "2026-06-27T06:26:49Z"
lastReleaseAt: "2025-01-08T21:34:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 45
maintainers: ["Gudahtt", "dependabot[bot]", "GudahttBot"]
openGraphImageUrl: "https://opengraph.githubassets.com/7d703f7d4194d8d08e43a9f096003ab368527928cf2daa76daebe5f237bfe82c/Gudahtt/prettier-plugin-sort-json"
---

# prettier-plugin-sort-json

A plugin for [Prettier](https://prettier.io) that sorts JSON files by property name.

## Description

This plugin adds a JSON preprocessor that will sort JSON files alphanumerically by key.

By default, top-level object entries are sorted by key lexically using [`Array.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), according to each character's Unicode code point value. It can be [configured](#configuration) to sort recursively, and with a custom sort order.

### Example

Before:

```json
{
  "z": null,
  "a": null,
  "0": null,
  "exampleNestedObject": {
    "z": null,
    "a": null
  }
}
```

After:

```json
{
  "0": null,
  "a": null,
  "exampleNestedObject": {
    "z": null,
    "a": null
  },
  "z": null
}
```

### Exceptions

- Non-objects

  This is meant to sort objects. JSON files with a top-level value that is not an object are skipped.

- JSON files with dedicated Prettier parsers

  This will not sort `package.json`, `package-lock.json`, or `composer.json`. This plugin only affects the `json` parser used by Prettier. Prettier uses an alternate parser (`json-stringify`) for those three…
