---
repo: "shexjs/shex.js"
name: "shex.js"
description: "shex.js javascript package"
readmeQualityOk: true
url: "https://github.com/shexjs/shex.js"
homepage: "https://shex.js.org/"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [50, 44]
topics: ["shex", "rdf", "schema"]
stars: 62
forks: 19
openIssues: 1
closedIssues: 51
watchers: 11
contributors: 18
recentReleases: 0
createdAt: "2015-08-06T07:18:07Z"
lastCommitAt: "2026-10-11T10:14:13Z"
lastReleaseAt: "2018-10-02T08:07:06Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 55
maintainers: ["dependabot[bot]", "ericprud"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0216df9a74eb4ae33b0b01aeef6235bdcd3767e481bea2efdac128563f938c6/shexjs/shex.js"
discussionCount: 1
---

# shex.js
shex.js javascript implementation of Shape Expressions ([try online](https://shex.io/webapps/packages/shex-webapp/doc/shex.html))

## install

``` shell
npm install --save shex
```

## test

``` shell
npm ci
npm test
```

See [building](#building) and [testing](#testing) below for the full development story.

### branch-specific tests

The `shex.js` repo includes several branches for features that are in-flight in the ShEx Community Group. Each branch depends on the corresponding branch of the [shexTest](https://github.com/shexSpec/shexTest) test suite. The package.json file for each branch SHOULD have that corresponding shexTest branch à la:
``` json
  "shex-test": "github:shexSpec/shexTest#extends"
```
The [test harness](https://github.com/shexjs/shex.js/blob/HEAD/packages/shex-cli/test/findPath.js) prefers a `../shexTest` sibling checkout and otherwise uses the `shex-test` npm dependency. If you test from a sibling clone, keep its branch aligned with your shex.js branch; the pre-commit hook (`npm run check-branch-deps`) whines when `main` isn't testing against `shexTest#main`.

## validation

You can validate RDF data using the `shex-validate` executable or the…
