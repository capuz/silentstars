---
repo: "w-lfpup/wctk-js"
name: "wctk-js"
description: "A webcomponent tool kit"
url: "https://github.com/w-lfpup/wctk-js"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["webcomponents", "html"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2024-05-30T18:11:50Z"
lastCommitAt: "2026-06-23T23:17:58Z"
lastReleaseAt: "2026-05-30T22:25:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 50
maintainers: ["taylor-vann"]
openGraphImageUrl: "https://opengraph.githubassets.com/e4d8b8a23fbb72bc1aa8cdba4112d87212e8850e2a2f50b7db8d24bfc4e0b0b8/w-lfpup/wctk-js"
---

# Wctk-JS

An SSR friendly (w)eb(c)omponent (t)ool (k)it without dependencies.

## About

The `wctk` is a collection of bare-metal facades over vanilla browser apis. They provide the basics for
events, reactivity, and forms.

There are no base classes, decorators, or mixins.

All features are compositional and designed for SSR and [declarative shadow dom](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM#declaratively_with_html).

Four (4) controllers help developers:

- manage [shadow dom](./docs/wc.md) and [form values](./docs/wc.md#adopted-stylesheets-and-form-values)
- render on the [microtask queue](./docs/microtask.md)
- listen for [events](./docs/events.md)
- cache selector [queries](./docs/query_selector.md)

Controllers are flexible and not restricted to webcomponents. The can be used on any `HTMLElement`.

## Install

Install directly from github.

```bash
npm install --save-dev https://github.com/w-lfpup/wctk-js/
```

Install with npm.

```bash
npm install --save-dev @w-lfpup/wctk
```

## Create a webcomponent

Add a `Wc` controller to a custom element with only one line

```ts
import { Wc } from "wctk";

class MyElement extends…
