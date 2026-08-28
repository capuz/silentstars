---
repo: "batiste/blop-language"
name: "blop-language"
description: "Blop is a Web oriented programming language that compiles to JavaScript"
readmeQualityOk: true
url: "https://github.com/batiste/blop-language"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["javascript", "compiler", "html", "virtual-dom", "blop-language", "language", "vscode"]
stars: 45
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2015-08-19T21:07:40Z"
lastCommitAt: "2026-08-28T14:37:33Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 76
undervaluedScore: 26
maintainers: ["batiste", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/73678bc5de10ba449f167322997b3678a78051d9debe1becd5d015b597e9b1c5/batiste/blop-language"
---

# The Blop Language

**Blop is a modern language for the Web that natively generates Virtual DOM trees using familiar HTML-like syntax.**

The Blop language compiles to ES6-compliant JavaScript with minimal dependencies. Unlike JSX, Blop is not limited to expressions – you can mix statements, expressions, and HTML-like syntax within the same function, giving you the full power of the language to generate Virtual DOM trees.

Blop uses the [snabbdom](https://github.com/snabbdom/snabbdom/) library for Virtual DOM rendering and is built with the [Meta Parser Generator](https://github.com/batiste/meta-parser-generator).

## Quick Start

```bash
# Install Blop
npm install blop-language

# Or clone and run the example
git clone https://github.com/batiste/blop-language.git
cd blop-language
npm install
npm start
```

**[Quick Start Guide](https://github.com/batiste/blop-language/blob/HEAD/docs/QUICK_START.md)** · **[Live Demo](https://batiste.github.io/blop/example/)**

## Example

```typescript
import { mount, Component } from 'blop'

// A simple counter component
Counter = (ctx: Component) => {
  { value, setState } = ctx.state<number>('count', 0)
  
    <h2>'Counter: 'value</h2>…
