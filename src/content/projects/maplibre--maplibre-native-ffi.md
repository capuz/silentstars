---
repo: "maplibre/maplibre-native-ffi"
name: "maplibre-native-ffi"
description: "An experimental C API for MapLibre Native, built for low-level language bindings and host integrations that need a C boundary instead of direct C++ interop."
readmeQualityOk: true
url: "https://github.com/maplibre/maplibre-native-ffi"
homepage: "https://maplibre.org/maplibre-native-ffi/"
language: "Kotlin"
stars: 28
forks: 10
openIssues: 29
closedIssues: 139
watchers: 3
contributors: 10
recentReleases: 3
createdAt: "2025-01-07T09:49:05Z"
lastCommitAt: "2026-10-03T22:03:21Z"
lastReleaseAt: "2026-06-28T21:57:11Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 96
undervaluedScore: 70
maintainers: ["sargunv", "dependabot[bot]", "sargunv-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7d42b37573c52e8efcc031d834ebafa20cd039af2de526580e6cd37cfd49ad8/maplibre/maplibre-native-ffi"
fundingLinks: ["GITHUB:https://github.com/maplibre", "OPEN_COLLECTIVE:https://opencollective.com/maplibre"]
discussionCount: 1
---

# MapLibre Native FFI

This project provides an experimental C API for
[MapLibre Native](https://github.com/maplibre/maplibre-native). It is built for
low-level language bindings and host integrations that need a C boundary instead
of direct C++ interop.

The API exposes MapLibre Native concepts directly. Framework concerns such as
gestures, widgets, declarative UI, and application lifecycle integration belong
in downstream adapters.

MapLibre Native FFI is pre-1.0. The C ABI is unstable while `mln_c_version()`
returns `0`.

## Documentation

Read the documentation site for concepts, usage guides, the generated C API
reference, and contributor notes.

- [Install](https://maplibre.org/maplibre-native-ffi/install/)
- [Concepts](https://maplibre.org/maplibre-native-ffi/concepts/)
- [Usage guides](https://maplibre.org/maplibre-native-ffi/guides/create-a-map/)
- [Reference](https://maplibre.org/maplibre-native-ffi/reference/c/)
- [Development overview](https://maplibre.org/maplibre-native-ffi/development/overview/)
- [Binding specification](https://maplibre.org/maplibre-native-ffi/development/binding-specification/)

## Status

The C API covers most of the MapLibre Native API surface.…
