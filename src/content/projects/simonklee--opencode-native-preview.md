---
repo: "simonklee/opencode-native-preview"
name: "opencode-native-preview"
description: "OpenCode Native CLI Preview builds"
readmeQualityOk: true
url: "https://github.com/simonklee/opencode-native-preview"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [60, 34]
stars: 107
forks: 5
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 10
createdAt: "2026-11-12T08:50:58Z"
lastCommitAt: "2026-11-20T12:22:32Z"
lastReleaseAt: "2026-11-13T09:52:55Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 27
maintainers: ["simonklee"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa92f8f281e71a5461f08c5f603b2260632719310b8fd060bbeaa4945f8a231b/simonklee/opencode-native-preview"
---

# OpenCode native CLI preview builds

The OpenCode native CLI, `opencode-native`, is a Rust client for [OpenCode](https://github.com/anomalyco/opencode),
built from its `oc-rust` branch. Each build is an unsigned
[prerelease](https://github.com/simonklee/opencode-native-preview/releases) for Linux x64, Linux arm64, macOS arm64,
and Windows x64, for testers. macOS x64, Windows arm64 and the Linux musl builds (x64 and arm64, for Alpine) are
new: a release has them when they passed their smoke tests.

## Startup and memory

[Watch as video](https://github.com/simonklee/opencode-native-preview/blob/HEAD/docs/demo-2a83f6c8.mp4) (MP4, 1080p).

The client alone, against a TypeScript server that is already running (median of 8 runs):

| | `opencode` 2.2.7 | `opencode-native` 0.0.0-rs-2 |
|---|---|---|
| time to first frame | 118 ms | 5.8 ms |
| client peak memory, 20 prompts | 319 MB | 44 MB |
| client CPU time, 20 prompts | 3.92 s | 0.17 s |

The client starts its own server (`--standalone`):
