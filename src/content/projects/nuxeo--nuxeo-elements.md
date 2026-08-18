---
repo: "nuxeo/nuxeo-elements"
name: "nuxeo-elements"
description: "Nuxeo web components"
readmeQualityOk: true
url: "https://github.com/nuxeo/nuxeo-elements"
language: "JavaScript"
languages: ["JavaScript", "Fluent"]
languagePcts: [73, 21]
topics: ["nuxeo", "web-components", "polymer", "jxlabs-nos-master", "nuxeo-engineering", "nuxeo-ui"]
stars: 29
forks: 16
openIssues: 0
closedIssues: 0
watchers: 40
contributors: 125
recentReleases: 0
createdAt: "2015-02-24T10:04:31Z"
lastCommitAt: "2026-08-18T04:09:29Z"
lastReleaseAt: "2022-04-04T09:15:36Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 86
undervaluedScore: 51
maintainers: ["madhurkulshrestha-hyland", "swarnadipa-dev", "nuxeo-webui-jx-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/b4ede6019f620d1086a24c6222dac7f55c7c4d41ac952a2352ef937c18ddd405/nuxeo/nuxeo-elements"
---

# About nuxeo-elements

**Nuxeo Elements** helps developers build custom elements and web applications with Nuxeo using [web components](https://developer.mozilla.org/en-US/docs/Web/Web_Components). It is build on top of [Polymer 3](https://polymer-library.polymer-project.org/3.0/docs/about_30).

## Dependencies

To install the project's dependencies:

```
npm install
npm run bootstrap
```
Note: This version of Nuxeo Elements requires node version >=14.0.0.

## Quickstart

To run all unit tests with:

```
npm test
```

You can run the unit tests for a given package (`core`, `ui` or `dataviz`) via:

```
npm run test:<package>
```

There is also a `grep` argument that can be used to run a specific set of tests

```
# Runs all the tests present on "core/test/nuxeo-connection.test.js" file
npm run test:core -- --grep nuxeo-connection.test.js

# Runs all the tests present on both "core/test/nuxeo-connection.test.js" and "core/test/nuxeo-document.test.js" files
npm run test:core -- --grep (nuxeo-connection.test.js|nuxeo-document.test.js)
```

To watch the tests for changes you can use:

```
npm run test:watch -- --package=<package>
```

The `grep` argument can also be used here:

```
#…
