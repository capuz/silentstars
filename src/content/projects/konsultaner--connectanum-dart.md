---
repo: "konsultaner/connectanum-dart"
name: "connectanum-dart"
description: "This is a WAMP client (Web Application Messaging Protocol) implementation for the dart language and flutter projects."
readmeQualityOk: true
url: "https://github.com/konsultaner/connectanum-dart"
language: "Dart"
languages: ["Dart"]
languagePcts: [61]
topics: ["wamp", "wamp-client", "dart-language"]
stars: 24
forks: 17
openIssues: 7
closedIssues: 38
watchers: 4
contributors: 12
recentReleases: 5
createdAt: "2020-02-05T15:17:27Z"
lastCommitAt: "2026-07-05T20:54:07Z"
lastReleaseAt: "2026-05-13T13:02:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine", "fork_magnet"]
healthScore: 92
undervaluedScore: 73
maintainers: ["konsultaner"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcffdf91451740d48ede0fa7f6aba0e287a55945c80b7f782923d08fda38b1df/konsultaner/connectanum-dart"
---

# Connectanum

Connectanum is a WAMP stack for Dart with a native transport runtime for the
router and native client paths.

This repository is the main source tree for:

- `packages/connectanum_core` - shared protocol types, serializers, and
  conformance coverage
- `packages/connectanum_client` - Dart client package, including native client
  transports
- `packages/connectanum_router` - router implementation, examples, runner, and
  integration tests
- `packages/connectanum_auth_server` - config-driven remote authentication
  helpers and server building blocks
- `packages/connectanum_mcp` - Model Context Protocol server primitives,
  stdio transport support, and WAMP-backed tool delegation
- `packages/connectanum_bench` - benchmark harnesses and scenarios
- `native/transport` - Rust workspace for the native transport runtime

Status: active development. The GitHub deployment chain can build and validate
native runtime bundles; public Dart package publishing and router container
image publishing are still being hardened before stable release use.

## Quick Start

Most users want one of these two paths:

### Run The Router With Published Artifacts

1. Tell the router build hook…
