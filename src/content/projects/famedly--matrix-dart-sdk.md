---
repo: "famedly/matrix-dart-sdk"
name: "matrix-dart-sdk"
description: "Matrix SDK written in pure Dart."
readmeQualityOk: true
url: "https://github.com/famedly/matrix-dart-sdk"
language: "Dart"
languages: ["Dart"]
languagePcts: [100]
topics: ["dart-package", "lifecycle-production", "team-app"]
stars: 117
forks: 86
openIssues: 31
closedIssues: 1541
watchers: 2
contributors: 68
recentReleases: 0
createdAt: "2023-07-07T19:56:01Z"
lastCommitAt: "2026-07-21T06:11:20Z"
lastReleaseAt: "2024-08-27T08:26:14Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 52
maintainers: ["krille-chan", "td-famedly", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/6092d7ab45d0757e131267c486fa4dd5a9f1ce7539c0134f7e1900eb332909ea/famedly/matrix-dart-sdk"
---

# Matrix SDK

Matrix (matrix.org) SDK written in dart.

## Native libraries

For E2EE, vodozemac must be provided.

For flutter apps you can easily import it with the [flutter_vodozemac](https://pub.dev/packages/flutter_vodozemac) package.

```sh
flutter pub add matrix

# Optional: For end to end encryption:
flutter pub add flutter_vodozemac
```

## Get started

See the API documentation for details:

[API documentation](https://pub.dev/documentation/matrix/latest/)

### Tests

```shell
thread_count=$(getconf _NPROCESSORS_ONLN) // or your favourite number :3
dart test --concurrency=$thread_count test
```

- Adding the `-x olm` flag will skip tests which require olm
- Using `-t olm` will run only olm specific tests, but these will probably break as they need prior setup (which is not marked as olm and hence won't be run)
