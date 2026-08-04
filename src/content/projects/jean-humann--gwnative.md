---
repo: "jean-humann/gwnative"
name: "gwnative"
description: "A native macOS host for the Guild Wars WebAssembly client. No Electron, no Chromium, no Node — one Rust binary driving AppKit and WKWebView directly."
readmeQualityOk: true
url: "https://github.com/jean-humann/gwnative"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [60, 24]
stars: 7
forks: 1
openIssues: 1
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-07-28T22:31:05Z"
lastCommitAt: "2026-08-04T06:12:05Z"
lastReleaseAt: "2026-07-31T12:50:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 59
maintainers: ["jean-humann"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5bc8935c9e4e12a9ccddee1cb7fb17294ea5ce17c474588041f2b4781f8e643/jean-humann/gwnative"
---

</p>

<h1 align="center">gwnative</h1>

  A lightweight native macOS host for Guild Wars Reforged on Apple Silicon.
</p>

</p>

</p>

gwnative runs the official Guild Wars Reforged WebAssembly client in one native
Rust application. AppKit and WKWebView provide the platform directly, without
an embedded browser distribution, Windows, Wine, or a virtual machine.

</p>

gwnative is an independent interoperability project. It is not affiliated with,
endorsed, sponsored, or approved by ArenaNet or NCSOFT. See the
[legal notice](https://github.com/jean-humann/gwnative/blob/HEAD/NOTICE.md) for ownership, trademark, and game-material details.

gwnative was made possible by
[gw_in_browser](https://github.com/gwdevhub/gw_in_browser), created by
[Marc Henderkes](https://github.com/henderkes). The renderer harness traces
back to that work. The native macOS direction was later inspired by
[gwonmac](https://github.com/Mat4m0/gwonmac); the host itself is an independent
Rust implementation.

## Requirements

- Apple Silicon
- macOS 15.2 or newer

Both are hard requirements. The application ships only an `arm64` binary. The
app tests JSPI inside its own WKWebView and falls back to ArenaNet's…
