---
repo: "zestia/ember-simple-infinite-scroller"
name: "ember-simple-infinite-scroller"
description: ":scroll: Simple infinite scroll component for Ember apps"
readmeQualityOk: true
url: "https://github.com/zestia/ember-simple-infinite-scroller"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [93]
topics: ["infinite-scroll", "ember"]
stars: 39
forks: 6
openIssues: 1
closedIssues: 12
watchers: 15
contributors: 12
recentReleases: 0
createdAt: "2016-06-27T16:13:16Z"
lastCommitAt: "2026-10-23T09:33:44Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 65
undervaluedScore: 30
maintainers: ["amk221"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d9e83f9968fa96973a4f1fb4ffcf775762e49dba111c7ad3452748ee7e65fde/zestia/ember-simple-infinite-scroller"
---

# @zestia/ember-simple-infinite-scroller

[npm-badge]: https://img.shields.io/npm/v/@zestia/ember-simple-infinite-scroller.svg
[npm-badge-url]: https://www.npmjs.com/package/@zestia/ember-simple-infinite-scroller
[github-actions-badge]: https://github.com/zestia/ember-simple-infinite-scroller/workflows/CI/badge.svg
[github-actions-url]: https://github.com/zestia/ember-simple-infinite-scroller/actions
[ember-observer-badge]: https://emberobserver.com/badges/-zestia-ember-simple-infinite-scroller.svg
[ember-observer-url]: https://emberobserver.com/addons/@zestia/ember-simple-infinite-scroller

This Ember addon provides a simple component that fires an action whenever it is scrolled to a specified percentage. Supports both vertical and horizontal scrolling, allowing you to load more data.

## Installation

```
ember install @zestia/ember-simple-infinite-scroller
```

Add the following to `~/.npmrc` to pull @zestia scoped packages from Github instead of NPM.

```
@zestia:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GH_TOKEN>
```

## Demo

https://zestia.github.io/ember-simple-infinite-scroller

## Example

```handlebars
<InfiniteScroller…
