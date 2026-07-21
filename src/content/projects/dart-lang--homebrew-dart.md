---
repo: "dart-lang/homebrew-dart"
name: "homebrew-dart"
description: "Dart team's official tap for homebrew."
readmeQualityOk: true
url: "https://github.com/dart-lang/homebrew-dart"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [93]
stars: 169
forks: 58
openIssues: 3
closedIssues: 61
watchers: 7
contributors: 108
recentReleases: 0
createdAt: "2014-08-29T17:09:29Z"
lastCommitAt: "2026-07-21T06:10:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 44
maintainers: ["dependabot[bot]", "athomas"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cf64f44ea2464576c40df81db8db2ac0b911e81915e213831b7c2c3caa0c52d/dart-lang/homebrew-dart"
---

# Dart for Homebrew

This is the official [Dart][] tap for [homebrew][].

Mac users can use these formulae to easily install and update Dart SDK. Both dev and stable channels are supported.

## Initial setup

If you don't have homebrew, install it from their [homepage][homebrew].

Then, add this tap:

```
brew tap "dart-lang/dart"
```

## Installing

To install the Dart SDK:

```
brew install dart
```

Tip: Once installed, homebrew will print the path to the Dart SDK. Use this path to configure Dart support
in your IDE (like WebStorm).

## Updating

Simply run:

```
brew update
brew upgrade dart
```

## Dev Releases

To install dev channel releases, instead of the stable ones, add a `--head`
flag after the brew commands:

```shell
brew install dart --head
```

Note, when updating dev releases, homebrew doesn't always update to the latest version
(see https://github.com/Homebrew/legacy-homebrew/issues/13197). In order to upgrade to
the latest dev release, run:

```shell
brew reinstall dart
```

## Specific stable versions

To install a specific dart version run `brew install dart@2.8`. 
This installs the latest `2.8` release including security patches, i.e. `2.8.1`.

To use the…
