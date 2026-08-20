---
repo: "Wrapped-Owls/goremy-di"
name: "goremy-di"
description: "Dependency Injection in golang using generics"
readmeQualityOk: true
url: "https://github.com/Wrapped-Owls/goremy-di"
homepage: "https://wrapped-owls.github.io/goremy-di/"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["dependency-injection", "go118", "golang", "injection", "hacktoberfest", "hacktoberfest2022"]
stars: 13
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2022-05-11T23:37:55Z"
lastCommitAt: "2026-08-20T02:31:28Z"
lastReleaseAt: "2024-05-26T18:34:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 55
maintainers: ["Jictyvoo", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/80fa36335c24ddb84fffa555c410d2039bff05110be04d41bcf5d9d2209e1008/Wrapped-Owls/goremy-di"
---

# Remy DI

Type-safe dependency injection for Go using generics.

Remy DI provides a lightweight and fast way to register and resolve dependencies without reflection in the hot path.
It supports scoped injectors, bind tags, factory parameters, and circular dependency detection.

## About

The main job of a dependency-injection package is to help providing objects, instances, closures to a caller, by
avoiding
a depth graph in parameter pass. Knowing this, and using culinary as inspiration, we thought that a DI (dependency
injection) package is like a `Sous chef` in a cuisine, so we take decided to reference the best `Sous chef` we know: "
Remy"!

### Inspiration

This package is heavily inspired by the
flutter
module [Modular Dependency Injection](https://modular.flutterando.com.br/docs/flutter_modular/dependency-injection)

## Documentation

- Docs site: https://wrapped-owls.github.io/goremy-di/
- Go package: https://pkg.go.dev/github.com/wrapped-owls/goremy-di/remy
- Benchmarks: [benchmark/README.md](https://github.com/Wrapped-Owls/goremy-di/blob/HEAD/benchmark/README.md)

## Requirements

- Go `1.20+`

## Installation

```bash
go get github.com/wrapped-owls/goremy-di/remy
```…
