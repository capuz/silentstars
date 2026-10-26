---
repo: "SoFluffyOS/raccoon"
name: "raccoon"
description: "🦝 The Raccoon hosted Flutter runtime: the protocol package, the host-side runtime, the view widgets and the C++ runner, one repository, one tracker."
readmeQualityOk: true
url: "https://github.com/SoFluffyOS/raccoon"
language: "Dart"
languages: ["Dart", "C++"]
languagePcts: [49, 36]
stars: 17
forks: 2
openIssues: 16
closedIssues: 153
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2026-10-21T03:00:37Z"
lastCommitAt: "2026-10-26T09:17:08Z"
lastReleaseAt: "2026-10-22T15:43:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 94
undervaluedScore: 50
maintainers: ["simonpham"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf68071bcfc59266f0ac1422364200eb2212221aa0c392568cfa929202c1b33a/SoFluffyOS/raccoon"
---

# Raccoon

A hosted Flutter runtime. A small runner hosts your app's Flutter engine and
streams its frames into a pane of [Lumide](https://lumide.dev) or the
[Raccoon Simulator](https://github.com/SoFluffyOS/raccoon_simulator): no
platform build, hot reload always on, a device in your editor's picker.

One repository for the family, each piece with its own history:

| Path | What | Published as |
|---|---|---|
| `packages/raccoon` | the wire protocol and the public Dart API apps and plugin authors see | [pub.dev](https://pub.dev/packages/raccoon), tags `v*` |
| `packages/raccoon_runtime` | the host side: runtime store, runner process management and discovery, the `raccoon` devices, frame and input client (pure Dart) | a path dependency |
| `packages/raccoon_view` | the Flutter widgets that show a hosted app: `RaccoonView`, `RaccoonCanvas`, `RaccoonBoard` | a path dependency |
| `native/raccoon_runner` | the runner: C++ on Flutter's embedder API; hosts the app, serves frames and GPU buffers, loads native plugins | [releases](https://github.com/SoFluffyOS/raccoon/releases), tags `runner-v*` |

Lumide and the simulator take this repository as one git submodule.

## Issues

One…
