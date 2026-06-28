---
repo: "asamuzaK/domSelector"
name: "domSelector"
description: "A CSS selector engine."
url: "https://github.com/asamuzaK/domSelector"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [89]
stars: 13
forks: 5
openIssues: 1
closedIssues: 25
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-05-07T07:11:33Z"
lastCommitAt: "2026-06-28T03:13:13Z"
lastReleaseAt: "2023-05-12T16:40:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 74
maintainers: ["asamuzaK"]
openGraphImageUrl: "https://opengraph.githubassets.com/e008e70d6faa70c3c2c5e4227ac2bd1e1a19e7e852aeff2fb63d1e07f40be860/asamuzaK/domSelector"
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
