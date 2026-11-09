---
repo: "marianoguerra/tutuca"
name: "tutuca"
description: "Zero-dependency batteries included SPA framework "
readmeQualityOk: true
url: "https://github.com/marianoguerra/tutuca"
homepage: "https://marianoguerra.github.io/tutuca/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [72]
topics: ["components", "frontend", "spa", "web"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-11T20:10:30Z"
lastCommitAt: "2026-11-09T11:59:14Z"
lastReleaseAt: "2026-04-24T08:37:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 59
maintainers: ["marianoguerra"]
openGraphImageUrl: "https://opengraph.githubassets.com/fc3f63c77e149798434d939e58ff26e90c440cf753efb3525dba7eed79ddec53/marianoguerra/tutuca"
---

# Tutuca

A small framework for web apps in the browser, small enough to read in full, for people and for
coding agents.

Tutuca covers components, typed state, rendering and event handling, and the tools to check them:
tests that run without a browser, property-based tests generated from your field types, a
storybook with stress tests, and a linter. State changes can be saved or shared with other tabs
and devices through sync engines you plug in ([`docs/sync.md`](https://github.com/marianoguerra/tutuca/blob/HEAD/docs/sync.md)). A formal model of
the semantics is being written in PLT Redex (`spec/`). The core is about 2,000 lines of
JavaScript with no npm dependencies (it includes a copy of immer).

- Site: https://marianoguerra.github.io/tutuca/
- Storybook: https://marianoguerra.github.io/tutuca/storybook.html

## Install

```sh
npm install tutuca
```

Or from a CDN, without a build step:

```js
import { component, h, Host } from "https://cdn.jsdelivr.net/npm/tutuca/dist/tutuca.min.js";
```

## Example

```js
import { component, field, h, Host, send, t } from "tutuca";

const Counter = component({
	name: "Counter",
	fields: { count: t.number() },
	view: h("button", { "on:click":…
