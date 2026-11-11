---
repo: "olexale/bdd_widget_test"
name: "bdd_widget_test"
description: "A BDD-style widget testing library"
readmeQualityOk: true
url: "https://github.com/olexale/bdd_widget_test"
language: "Dart"
languages: ["Dart"]
languagePcts: [97]
stars: 115
forks: 40
openIssues: 0
closedIssues: 74
watchers: 7
contributors: 14
recentReleases: 0
createdAt: "2020-06-20T09:05:20Z"
lastCommitAt: "2026-11-11T11:18:28Z"
lastReleaseAt: "2021-01-31T14:14:00Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 48
maintainers: ["olexale", "Fried-man"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd3a3216d5b52484e59957de7ff9dda61119b0f9c8d5e4583d8b36de1c7aaa5c/olexale/bdd_widget_test"
---

# bdd_widget_test [](https://github.com/olexale/bdd_widget_test/actions/workflows/dart.yml) [](https://coveralls.io/github/olexale/bdd_widget_test?branch=master) [](https://pub.dartlang.org/packages/bdd_widget_test)

A BDD-style widget testing library

## Why?

Isn't it cool to develop mobile apps in natural language? A language each of your team members can read and understand so that it involves everyone working on the project productively. While Dart is on its way to this goal, for tests there is a language for that! It's called Gherkin.

The aim of this library is in combining two effective and easy-to-use techniques: BDD(Gherkin) and widget testing.

## Getting Started

### Add the dependency

Add `build_runner` and `bdd_widget_test` dependencies to `dev_dependencies` section of the `pubspec.yaml` file.
```yaml
dev_dependencies:
  build_runner:
  bdd_widget_test: <put the latest version here>
  ...
```

You may get the actual version from [installation instructions](https://pub.dartlang.org/packages/bdd_widget_test#-installing-tab-) on Pub site.

### Write features

Create `*.feature` file inside `test` folder. Let's say you're testing the default Flutter counter app, the…
