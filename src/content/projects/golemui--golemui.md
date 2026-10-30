---
repo: "golemui/golemui"
name: "golemui"
description: "Declarative dynamic forms engine. Define dynamic forms with a typed TypeScript builder or as JSON, then render them in React, Angular, Vue, Lit, or vanilla JS. Includes validation, SSR, i18n, accessibility, theming, and an MCP server for AI assistants."
readmeQualityOk: true
url: "https://github.com/golemui/golemui"
homepage: "https://golemui.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["angular", "declarative", "forms", "json", "lit", "react", "reactive", "vanilla-js", "vue", "json-schema"]
stars: 117
forks: 2
openIssues: 8
closedIssues: 37
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-12T09:43:59Z"
lastCommitAt: "2026-10-30T11:02:37Z"
lastReleaseAt: "2026-05-27T08:11:59Z"
status: "thriving"
tags: []
healthScore: 95
undervaluedScore: 32
maintainers: ["Elecash", "golemui-release-bot[bot]", "mudscientist"]
openGraphImageUrl: "https://opengraph.githubassets.com/45ef5266f4ef549bf1b85003f8871cf04dcb0ff3b7a64a11bad70d915e9ebe9f/golemui/golemui"
discussionCount: 2
---

&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;

---

## Overview

Define forms with the typed `gui` builder API, or as schema-validated JSON. Both produce the same serializable definition.

- One definition renders in React, Angular, Lit, Vue, or vanilla JS.
- Validation, conditional fields, i18n, and accessibility come from the schema and runtime.
- The output is plain data: store it, transfer it, diff it, generate it.

## Installation

Install the four `@golemui/*` packages for your framework. The versions are published together; use matching versions.

```bash
# React
npm i @golemui/core @golemui/react @golemui/gui-react @golemui/gui-shared

# Angular
npm i @golemui/core @golemui/angular @golemui/gui-angular @golemui/gui-shared

# Lit
npm i @golemui/core @golemui/lit @golemui/gui-lit @golemui/gui-shared

# Vue
npm i @golemui/core @golemui/vue @golemui/gui-vue @golemui/gui-shared

# Vanilla JS (web component)
npm i @golemui/core @golemui/lit @golemui/gui-lit @golemui/gui-shared
```

Import the two stylesheets once, in this order, anywhere in your app entry:

```scss
@import '@golemui/gui-components/index.css';
@import…
