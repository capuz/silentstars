---
repo: "TopixIM/doctalk"
name: "doctalk"
description: "trying to write simplest chat UI as a demo"
originalDescription: "trying to write simplest chat UI as a demo"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/TopixIM/doctalk"
language: "Cirru"
languages: ["Cirru"]
languagePcts: [98]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 4
recentReleases: 0
createdAt: "2012-08-24T12:27:45Z"
lastCommitAt: "2026-11-12T05:41:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 87
undervaluedScore: 60
maintainers: ["tiye"]
openGraphImageUrl: "https://opengraph.githubassets.com/43609b0bfa50c80ad99acc62061a0f3af1f36c5666e3242739bed64f29e2817e/TopixIM/doctalk"
---

DOC TALK
----

### Calcit 0.41.1

When building from source, the frontend and backend use the official Calcit 0.41.1 together, and the browser runtime uses `@calcit/procs` 0.41.1. WebSocket messages and existing archive formats keep the original contract.

### Map Method Maintenance This Round: Impact on Users

14 Map merges were changed to use `.merge`, preserving argument evaluation, left-to-right overriding, and single-argument merge behavior. Nine style merges and five archive/protocol/server-view merges all keep the original Map contract; unknown extension fields, nil encoding, credentials, network patches, HUD, and the original tests are unchanged. Open Maps remain open and are not considered to have cleared Dynamic debt; no dependencies were upgraded, no ports, archive, or deployment paths were changed, and no new version was released.

Before and after preparing CI with the official 0.30.1 release, run the full strict suite, the original dual entry points, native 4/4, and shared native/JS 3/3 regressions each. Browser-generated module bytes being identical only proves that the output graph is unchanged; it cannot replace end-to-end acceptance of the native service,…
