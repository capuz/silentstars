---
repo: "maplibre/maplibre-native-ffi"
name: "maplibre-native-ffi"
description: "An experimental C API for MapLibre Native, built for low-level language bindings and host integrations that need a C boundary instead of direct C++ interop."
readmeQualityOk: true
url: "https://github.com/maplibre/maplibre-native-ffi"
homepage: "https://maplibre.org/maplibre-native-ffi/"
language: "C"
languages: ["C", "C++", "Python"]
languagePcts: [28, 22, 21]
stars: 33
forks: 11
openIssues: 22
closedIssues: 180
watchers: 3
contributors: 11
recentReleases: 6
createdAt: "2025-01-07T09:49:05Z"
lastCommitAt: "2026-10-23T08:48:21Z"
lastReleaseAt: "2026-06-28T21:57:11Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 98
undervaluedScore: 69
maintainers: ["sargunv", "dependabot[bot]", "greensopinion"]
openGraphImageUrl: "https://opengraph.githubassets.com/8aec944ed12640a148951a17dc7dab9a4c8c6961417a80dc3f6796ec45f39c11/maplibre/maplibre-native-ffi"
fundingLinks: ["GITHUB:https://github.com/maplibre", "OPEN_COLLECTIVE:https://opencollective.com/maplibre"]
discussionCount: 2
---

<source
      media="(prefers-color-scheme: dark)"
      srcset="https://maplibre.org/img/maplibre-logos/maplibre-logo-for-dark-bg.svg"
    >
    <source
      media="(prefers-color-scheme: light)"
      srcset="https://maplibre.org/img/maplibre-logos/maplibre-logo-for-light-bg.svg"
    >
    <img
      alt="MapLibre Logo"
      src="https://maplibre.org/img/maplibre-logos/maplibre-logo-for-light-bg.svg"
      width="200"
    >

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
-…
