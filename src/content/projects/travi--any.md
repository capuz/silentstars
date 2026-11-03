---
repo: "travi/any"
name: "any"
description: "random data generator for when test data is insignificant"
readmeQualityOk: true
url: "https://github.com/travi/any"
homepage: "https://travi.github.io/any"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [88]
stars: 5
forks: 3
openIssues: 9
closedIssues: 32
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2016-05-10T02:32:06Z"
lastCommitAt: "2026-11-03T11:15:06Z"
lastReleaseAt: "2017-08-08T22:42:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 89
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b152cd42d1155d2424af082f2dd6ef8f867d431d484f9dc60e3dbe5c51a919fe/travi/any"
fundingLinks: ["GITHUB:https://github.com/travi", "TIDELIFT:https://tidelift.com/funding/github/npm/@travi/any"]
---

# Random data generator

Random data generator for when test data is insignificant. Tailoring data too
closely for the domain can end up being confusing in tests because it distracts
from the behavior that is actually important in the test. This is why I prefer
to make it very clear when test data is insignificant by using a data generator.
This library captures most of the patterns I use frequently.

## Based on Chance.js

To save myself from needing to maintain the actual data generators, this library
leverages [Chance.js](http://chancejs.com/) for generating the data. So why not
just use Chance.js directly?

* I find it annoying that an instance of Chance has to be created. Rather than
  initialize an instance in every module, I wrap a single instance for reuse
  throughout the tests.
* I can set my default options to align with my typical conventions rather than
  having to repeatedly configure Chance.js's very flexible API
* Lots of my tests need objects to be generated, but the structure of those
  objects typically does not matter. Chance.js does not have a
  [simple-object generator](https://github.com/travi/any/blob/HEAD/docs/API.md#simpleobject), so I've included that on…
