---
repo: "open-telemetry/opentelemetry-proto-go"
name: "opentelemetry-proto-go"
description: "Generated code for OpenTelemetry protobuf data model"
readmeQualityOk: true
url: "https://github.com/open-telemetry/opentelemetry-proto-go"
homepage: "https://opentelemetry.io"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [72, 28]
topics: ["protobuf", "otel"]
stars: 46
forks: 46
openIssues: 5
closedIssues: 27
watchers: 11
contributors: 28
recentReleases: 0
createdAt: "2020-11-19T18:33:02Z"
lastCommitAt: "2026-11-05T08:05:30Z"
lastReleaseAt: "2022-03-28T19:25:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 64
maintainers: ["renovate[bot]", "pellared", "opentelemetrybot"]
openGraphImageUrl: "https://opengraph.githubassets.com/a3d53e216d0c46579fd07c3c8aee8fbe6a0dd37d550a809dd17c1ce931308560/open-telemetry/opentelemetry-proto-go"
---

# opentelemetry-proto-go

Generated Go code for the OpenTelemetry protobuf data model.

## Versioning Policy

The auto-generated Go code follows the stability guarantees as defined in
[maturity
level](https://github.com/open-telemetry/opentelemetry-proto?tab=readme-ov-file#maturity-level).

Versioning of modules in this project will be idiomatic of a Go project using [Go modules](https://github.com/golang/go/wiki/Modules).
They will use [semantic import versioning](https://github.com/golang/go/wiki/Modules#semantic-import-versioning).
Meaning modules will comply with [semver 2.0](https://semver.org/spec/v2.0.0.html) with the following exception:

- Packages with a `development` suffix do not comply with [semver 2.0](https://semver.org/spec/v2.0.0.html).
  - Backwards incompatible changes may be introduced to these packages between minor versions.
  - These packages are intended to be temporary.
    They will be deprecated and removed when the protobuf definition stabilizes or is removed.
    If the protobuf definition stabilizes, the package will be replaced with a stable "non-development" package.
    If the protobuf definition is removed, the package will be removed without a…
