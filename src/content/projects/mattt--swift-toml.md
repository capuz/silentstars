---
repo: "mattt/swift-toml"
name: "swift-toml"
description: "A spec-compliant Swift package for TOML, powered by toml++"
readmeQualityOk: true
url: "https://github.com/mattt/swift-toml"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["toml"]
stars: 41
forks: 4
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 2
createdAt: "2025-12-16T12:14:59Z"
lastCommitAt: "2026-11-23T12:24:27Z"
lastReleaseAt: "2026-11-14T13:07:08Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 29
maintainers: ["mattt", "rudedogdhc"]
openGraphImageUrl: "https://opengraph.githubassets.com/245f4f677e693b7756dee4766e6e0ebc798414cef2ec65d898a3b89e64e9a160/mattt/swift-toml"
---

# Swift TOML

A Swift implementation of [TOML](https://toml.io) (Tom's Obvious, Minimal Language),
a human-readable configuration file format. 
Built on [toml++](https://github.com/marzer/tomlplusplus)
for fast, spec-compliant parsing with full Swift Codable support.

## Features

- [x] **Passes the [toml-test](https://github.com/toml-lang/toml-test) compliance suite** for TOML 1.1.0,
      and for TOML 1.0.0 except the invalid documents that TOML 1.1.0 allows
- [x] Full [TOML v1.1.0](https://toml.io/en/v1.1.0) specification support,
      which also reads [TOML v1.0.0](https://toml.io/en/v1.0.0) documents
- [x] TOML 1.1 syntax: multi-line inline tables with trailing commas,
      `\e` and `\xHH` escapes, and times without seconds
- [x] All data types: strings, integers, floats, booleans, arrays, tables
- [x] All date-time types: offset date-time, local date-time, local date, local time
- [x] Inline tables and arrays of tables
- [x] Dotted keys and nested tables
- [x] Configurable date encoding/decoding strategies
- [x] Key strategies for `snake_case` ↔ `camelCase` conversion
- [x] Sorted keys option for deterministic output
- [x] Configurable decoding limits for security
- [x]…
