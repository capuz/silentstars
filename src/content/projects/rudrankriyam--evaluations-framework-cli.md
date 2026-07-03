---
repo: "rudrankriyam/Evaluations-Framework-CLI"
name: "Evaluations-Framework-CLI"
description: "Unofficial CLI for automating Apple Evaluations result workflows: run, inspect, compare, export, and gate"
url: "https://github.com/rudrankriyam/Evaluations-Framework-CLI"
homepage: "https://developer.apple.com/documentation/evaluations"
language: "Swift"
languages: ["Swift"]
languagePcts: [87]
topics: ["apple", "cli", "developer-tools", "evaluations", "macos", "swift", "xcode"]
stars: 27
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-06-13T21:02:53Z"
lastCommitAt: "2026-07-03T12:22:45Z"
lastReleaseAt: "2026-06-13T23:51:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 84
undervaluedScore: 21
maintainers: ["rudrankriyam"]
openGraphImageUrl: "https://opengraph.githubassets.com/468d9c8597931db3930e03d6688c5dcb5fdea20caeeea7cbaa4ad8dccc2ffc16/rudrankriyam/Evaluations-Framework-CLI"
fundingLinks: ["GITHUB:https://github.com/rudrankriyam"]
---

# Evaluations Framework CLI

> [!IMPORTANT]
> `xceval` is a community-defined name and an unofficial tool. It is not an
> Apple command or product, Apple does not use it as the public name of the
> framework, and it is not affiliated with or endorsed by Apple.

`xceval` is an unofficial command-line toolkit for Apple Evaluations workflows:
scaffold a typed starter, run evaluation stages, drive Xcode tests, export
attachments, reproduce the data behind Xcode's evaluation report, compare runs,
validate collections, and enforce explicit CI gates.

## Why This Exists

Xcode 27 exposes one public command-line operation:

```bash
xcrun xcresulttool export evaluations \
  --path Tests.xcresult \
  --output-path ExportedEvaluations
```

That command extracts attachments, but it does not scaffold producers, run a
multi-stage workflow, inspect, normalize, validate, query, compare, convert, or
gate their contents for scripts and CI. `xceval` fills that tooling gap.

The CLI deliberately does **not** link `Evaluations.framework`. Artifact
inspection uses the documented JSON files directly, so it remains useful when
Xcode 27 is not installed and avoids binding automation to beta framework…
