---
repo: "iamaamir/pi-bifrost"
name: "pi-bifrost"
description: "Automatically route each Pi prompt to a model based on task complexity, price, speed, or context length. Smart model router for pi."
readmeQualityOk: true
url: "https://github.com/iamaamir/pi-bifrost"
homepage: "https://iamaamir.github.io/pi-bifrost/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [59, 39]
topics: ["ai", "coding-agent", "devtools", "llm", "model-router", "pi-extension", "pi-package"]
stars: 82
forks: 9
openIssues: 100
closedIssues: 54
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-07-25T12:28:15Z"
lastCommitAt: "2026-11-23T10:03:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 86
undervaluedScore: 30
maintainers: ["iamaamir"]
openGraphImageUrl: "https://opengraph.githubassets.com/55e6911f60de5b49e8d05ec45717fd811fe20b9161aa488c746101216faf8436/iamaamir/pi-bifrost"
---

# Pi-Bifrost

[Getting started](https://github.com/iamaamir/pi-bifrost/blob/HEAD/docs/guide/getting-started.md) · [Configuration](https://github.com/iamaamir/pi-bifrost/blob/HEAD/docs/guide/configuration.md) · [Classifier backends](https://github.com/iamaamir/pi-bifrost/blob/HEAD/docs/guide/classifiers.md) · [Troubleshooting](https://github.com/iamaamir/pi-bifrost/blob/HEAD/docs/guide/troubleshooting.md) · [Examples](https://github.com/iamaamir/pi-bifrost/blob/HEAD/examples/README.md) · [Development](https://github.com/iamaamir/pi-bifrost/blob/HEAD/DEVELOPMENT.md)

## What Bifrost does

Pi-Bifrost chooses a suitable model for each message from the models you allow. You spend less time selecting and switching models by hand.

A tier is a named model group, such as `quick` or `general`. A classifier is an extra AI call that chooses a tier. It cannot choose a model outside your lists.

## Router SDK

Use Bifrost's routing engine without running Pi. Other applications can give Bifrost their model inventory and configuration, and get back an advisory, inspectable route decision they execute themselves.

```js
import { createRouter } from "pi-bifrost/router";
```
