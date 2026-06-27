---
repo: "rgrove/parse-xml"
name: "parse-xml"
description: "A fast, safe, compliant XML parser for Node.js and browsers."
url: "https://github.com/rgrove/parse-xml"
homepage: "https://rgrove.github.io/parse-xml"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [56, 43]
topics: ["xml", "xml-parser", "xml-parsing", "parser", "node", "nodejs", "javascript", "js", "parsing", "parse-xml"]
stars: 317
forks: 16
openIssues: 1
closedIssues: 20
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2017-06-04T05:27:39Z"
lastCommitAt: "2026-06-27T00:33:53Z"
lastReleaseAt: "2022-09-26T00:13:38Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 98
undervaluedScore: 24
maintainers: ["rgrove", "spokodev"]
openGraphImageUrl: "https://opengraph.githubassets.com/36c4ec546347e4bcf0e2a8c053fdbbb57f073c0b3c731a6f74901554074f6f93/rgrove/parse-xml"
discussionCount: 5
---

# parse-xml

A fast, safe, compliant XML parser for Node.js and browsers.

## Links

- [API Docs](https://rgrove.github.io/parse-xml/)
- [GitHub](https://github.com/rgrove/parse-xml)
- [npm](https://www.npmjs.com/package/@rgrove/parse-xml)

## Installation

```
npm install @rgrove/parse-xml
```

Or, if you like living dangerously, you can load [the minified bundle](https://unpkg.com/@rgrove/parse-xml/dist/global.min.js) in a browser via [Unpkg](https://unpkg.com/) and use the `parseXml` global.

## Features

-   Returns a convenient [object tree](#basic-usage) representing an XML document.

-   Works great in Node.js and browsers.

-   Provides [helpful, detailed error messages](#friendly-errors) with context when a document is not well-formed.

-   Mostly conforms to [XML 1.0 (Fifth Edition)](https://www.w3.org/TR/2008/REC-xml-20081126/) as a non-validating parser (see [below](#not-features) for details).

-   Passes all relevant tests in the [XML Conformance Test Suite](https://www.w3.org/XML/Test/).

-   Written in TypeScript and compiled to ES2020 JavaScript for Node.js and ES2017 JavaScript for browsers. The browser build is also optimized for minification.

-   Extremely…
