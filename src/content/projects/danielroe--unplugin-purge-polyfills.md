---
repo: "danielroe/unplugin-purge-polyfills"
name: "unplugin-purge-polyfills"
description: "A tiny plugin to replace package imports with better native code."
readmeQualityOk: true
url: "https://github.com/danielroe/unplugin-purge-polyfills"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 218
forks: 2
openIssues: 2
closedIssues: 3
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2024-06-27T08:00:31Z"
lastCommitAt: "2026-11-02T13:38:24Z"
lastReleaseAt: "2025-04-21T11:19:18Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "funded"]
healthScore: 89
undervaluedScore: 37
maintainers: ["renovate[bot]", "danielroe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e3ebe61fcde502d9a9e3397d1193a2f8cc515e40cc7966294d031550dedf2f75/danielroe/unplugin-purge-polyfills"
fundingLinks: ["GITHUB:https://github.com/danielroe"]
---

# unplugin-purge-polyfills

> A tiny plugin to replace package imports with better native code.

This package is an [unplugin](https://unplugin.unjs.io/) which provides support for a wide range of bundlers.

At build time, it removes usage of these packages, in favour of directly using native replacements:

- is-number
- is-plain-object
- is-primitve
- is-regexp
- is-travis
- is-npm
- clone-regexp
- split-lines
- is-windows
- is-whitespace
- is-string
- is-odd
- is-even
- object.entries
- date
- array.of
- number.isnan
- array.prototype.findindex
- array.from
- object-is
- array-map
- is-nan
- function-bind
- regexp.prototype.flags
- array.prototype.find
- object-keys
- define-properties
- left-pad
- pad-left
- filter-array
- array-every
- index-of
- last-index-of
- abort-controller
- array-flatten
- array-includes
- has-own
- has-proto
- has-symbols
- object-assign
- call-bind
- es-get-iterator
- es-set-tostringtag
- is-array-buffer
- is-boolean-object
- is-date-object
- is-negative-zero
- is-number-object
- is-primitive

It is under active development.

## Roadmap

- [ ] investigate tighter integration with https://github.com/SukkaW/nolyfill or…
