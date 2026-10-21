---
repo: "asamuzaK/domSelector"
name: "domSelector"
description: "A CSS selector engine."
readmeQualityOk: true
url: "https://github.com/asamuzaK/domSelector"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
stars: 14
forks: 8
openIssues: 2
closedIssues: 38
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2023-05-07T07:11:33Z"
lastCommitAt: "2026-10-21T21:14:29Z"
lastReleaseAt: "2023-05-12T16:40:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 75
maintainers: ["asamuzaK", "scttcper", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0d11e0c74e742a4748a9ea1898c066326521fc4ffd4cdf308f92fdc728e1fb1/asamuzaK/domSelector"
fundingLinks: ["CUSTOM:https://paypal.me/asamuzakjp"]
---

# DOM Selector

A CSS selector engine built for strict specification compliance.

## Features

* **Strict Specification Compliance**: Strictly adheres to modern web standards. It accurately parses, evaluates, and extracts elements across complex combinations of pseudo-classes and HTML attributes. Features comprehensive support for CSS Selectors Level 4 (e.g., `:is()`, `:not()`, `:where()`, `:has()`) and Shadow DOM pseudo-classes (`:host`, `:host-context`).
* **Utility Functions**: Provides utility methods alongside standard querying, such as `check()` for AST evaluation and `extractSubjects()` for extracting subject keys from selectors.
* **jsdom's Default Engine**: Adopted as the CSS selector engine for [jsdom](https://github.com/jsdom/jsdom).

## Install

``` console
npm i @asamuzakjp/dom-selector
```

## Usage

``` javascript
import { DOMSelector } from '@asamuzakjp/dom-selector';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM();

// Destructuring methods (all methods are bound to the instance)
const {
  check, closest, extractSubjects, matches, querySelector, querySelectorAll, supports
} = new DOMSelector(window);
```

## API

### `new DOMSelector(window,…
